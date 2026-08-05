"use server";

import { Resend } from "resend";

import { site } from "@/data/site";

export type ContactState = {
    status: "idle" | "success" | "error";
    message?: string;
    errors?: Partial<Record<"name" | "email" | "phone" | "message", string>>;
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[0-9+\-/() ]*$/;

const MAX_LENGTH = {
    name: 100,
    email: 254,
    phone: 30,
    message: 5000,
} as const;

export async function sendContactMessage(
    _prevState: ContactState,
    formData: FormData,
): Promise<ContactState> {
    // Honeypot: real users never fill this hidden field, bots typically do.
    if (formData.get("company")) {
        return { status: "success" };
    }

    // Strip newlines from the name: it's interpolated into the email subject line.
    const name = String(formData.get("name") ?? "").trim().replace(/[\r\n]+/g, " ");
    const email = String(formData.get("email") ?? "").trim();
    const phone = String(formData.get("phone") ?? "").trim();
    const message = String(formData.get("message") ?? "").trim();

    const errors: ContactState["errors"] = {};
    if (!name) errors.name = "Bitte geben Sie Ihren Namen an.";
    else if (name.length > MAX_LENGTH.name) errors.name = `Der Name darf maximal ${MAX_LENGTH.name} Zeichen lang sein.`;

    if (!email || !EMAIL_RE.test(email) || email.length > MAX_LENGTH.email) {
        errors.email = "Bitte geben Sie eine gültige E-Mail-Adresse an.";
    }

    if (phone && !PHONE_RE.test(phone)) {
        errors.phone = "Bitte geben Sie eine gültige Telefonnummer an.";
    } else if (phone.length > MAX_LENGTH.phone) {
        errors.phone = `Die Telefonnummer darf maximal ${MAX_LENGTH.phone} Zeichen lang sein.`;
    }

    if (!message) errors.message = "Bitte geben Sie eine Nachricht ein.";
    else if (message.length > MAX_LENGTH.message) errors.message = `Die Nachricht darf maximal ${MAX_LENGTH.message} Zeichen lang sein.`;

    if (Object.keys(errors).length > 0) {
        return { status: "error", errors };
    }

    if (!process.env.RESEND_API_KEY) {
        console.error("sendContactMessage: RESEND_API_KEY is not set");
        return {
            status: "error",
            message: "Der Versand ist derzeit nicht verfügbar. Bitte rufen Sie uns direkt an.",
        };
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const { error } = await resend.emails.send({
        from: process.env.RESEND_FROM_EMAIL || "HIM - Schneider Kontaktformular <onboarding@resend.dev>",
        to: process.env.CONTACT_TO_EMAIL || site.email,
        replyTo: email,
        subject: `Neue Anfrage von ${name}`,
        text: [
            `Name: ${name}`,
            `E-Mail: ${email}`,
            phone ? `Telefon: ${phone}` : null,
            "",
            message,
        ]
            .filter(Boolean)
            .join("\n"),
    });

    if (error) {
        console.error("sendContactMessage: Resend error", error);
        return {
            status: "error",
            message: "Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut oder rufen Sie uns an.",
        };
    }

    // Best-effort confirmation back to the sender. The business notification above
    // already succeeded, so a failure here shouldn't turn the submission into an error
    // (and will legitimately fail in Resend's sandbox mode until a domain is verified).
    const { error: autoReplyError } = await resend.emails.send({
        from: process.env.RESEND_FROM_EMAIL || "HIM - Schneider Kontaktformular <onboarding@resend.dev>",
        to: email,
        subject: `Ihre Anfrage bei ${site.name}`,
        text: [
            `Hallo ${name},`,
            "",
            "vielen Dank für Ihre Anfrage. Wir haben Ihre Nachricht erhalten und melden uns zeitnah bei Ihnen.",
            "",
            "Ihre Nachricht:",
            message,
            "",
            "Mit freundlichen Grüßen",
            site.name,
        ].join("\n"),
    });

    if (autoReplyError) {
        console.error("sendContactMessage: auto-reply error", autoReplyError);
    }

    return { status: "success", message: "Danke! Ihre Nachricht wurde gesendet." };
}
