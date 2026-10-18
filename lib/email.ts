import { Resend } from "resend";

export function getResendClient() {
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) return null;
    return new Resend(apiKey);
}

export function getManagerEmails() {
    return (process.env.MANAGER_EMAILS ?? "")
        .split(",")
        .map((email) => email.trim())
        .filter(Boolean);
}

export function getFromEmail() {
    const raw = (process.env.RESEND_FROM_EMAIL ?? "").trim();
    if (!raw || raw.includes("http://") || raw.includes("https://") || !raw.includes("@")) {
        return "Specialist Line <onboarding@resend.dev>";
    }
    return raw;
}

export function escapeHtml(value: string) {
    return value
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}