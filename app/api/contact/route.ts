import { NextResponse } from "next/server";
import { Resend } from "resend";

import { siteConfig } from "@/app/site-config";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MIN_MESSAGE_LENGTH = 20;
const MAX_MESSAGE_LENGTH = 2000;
const MAX_NAME_LENGTH = 80;
const DEFAULT_FROM_EMAIL = `${siteConfig.name} <onboarding@resend.dev>`;

function normalizeText(value: unknown) {
  return typeof value === "string" ? value.trim().replace(/\s+/g, " ") : "";
}

function normalizeMessage(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function getRequestContext(request: Request) {
  return {
    submittedAt: new Date().toISOString(),
    source: siteConfig.name,
    page: "/#contact",
    userAgent: request.headers.get("user-agent") ?? "unknown",
    ip:
      request.headers.get("x-forwarded-for") ??
      request.headers.get("x-real-ip") ??
      "unknown",
  };
}

function buildWebhookPayload(body: { name: string; email: string; message: string }, request: Request) {
  return {
    ...body,
    ...getRequestContext(request),
  };
}

function buildEmailText(body: { name: string; email: string; message: string }, request: Request) {
  const context = getRequestContext(request);

  return [
    "Nouveau message depuis le formulaire de contact.",
    "",
    `Nom : ${body.name}`,
    `Email : ${body.email}`,
    "",
    "Message :",
    body.message,
    "",
    `Envoye le : ${context.submittedAt}`,
    `Page : ${context.page}`,
    `User-Agent : ${context.userAgent}`,
    `IP : ${context.ip}`,
  ].join("\n");
}

function buildEmailHtml(body: { name: string; email: string; message: string }, request: Request) {
  const context = getRequestContext(request);
  const safeName = escapeHtml(body.name);
  const safeEmail = escapeHtml(body.email);
  const safeMessage = escapeHtml(body.message).replaceAll("\n", "<br />");

  return `
    <div style="font-family: Arial, sans-serif; background:#0a0a0a; color:#f0ede6; padding:24px;">
      <div style="max-width:640px; margin:0 auto; border:1px solid rgba(240,237,230,0.12); padding:24px; background:#111111;">
        <p style="margin:0 0 16px; font-size:12px; letter-spacing:0.12em; text-transform:uppercase; color:#c8f04a;">
          Nouveau message
        </p>
        <h1 style="margin:0 0 24px; font-size:28px; line-height:1.1; color:#f0ede6;">
          Formulaire de contact
        </h1>
        <div style="display:grid; gap:12px; margin-bottom:24px;">
          <p style="margin:0;"><strong>Nom :</strong> ${safeName}</p>
          <p style="margin:0;"><strong>Email :</strong> ${safeEmail}</p>
        </div>
        <div style="margin-bottom:24px;">
          <p style="margin:0 0 8px;"><strong>Message :</strong></p>
          <div style="color:rgba(240,237,230,0.78); line-height:1.7;">${safeMessage}</div>
        </div>
        <hr style="border:none; border-top:1px solid rgba(240,237,230,0.12); margin:24px 0;" />
        <div style="font-size:12px; line-height:1.7; color:rgba(240,237,230,0.54);">
          <div>Envoye le : ${escapeHtml(context.submittedAt)}</div>
          <div>Page : ${escapeHtml(context.page)}</div>
          <div>User-Agent : ${escapeHtml(context.userAgent)}</div>
          <div>IP : ${escapeHtml(context.ip)}</div>
        </div>
      </div>
    </div>
  `;
}

function getResendConfig() {
  return {
    apiKey: process.env.RESEND_API_KEY,
    to: process.env.CONTACT_TO_EMAIL || siteConfig.email,
    from: process.env.CONTACT_FROM_EMAIL || DEFAULT_FROM_EMAIL,
  };
}

function formatProviderErrorMessage(message: string) {
  const normalizedMessage = message.toLowerCase();

  if (normalizedMessage.includes("verify a domain")) {
    return "Le service d'email est connecte, mais l'adresse d'envoi doit encore etre verifiee sur Resend.";
  }

  if (normalizedMessage.includes("api key")) {
    return "La configuration de Resend est invalide. Verifiez RESEND_API_KEY.";
  }

  return "Le service d'email a refuse le message. Verifiez la configuration de Resend.";
}

async function sendWithResend(body: { name: string; email: string; message: string }, request: Request) {
  const { apiKey, from, to } = getResendConfig();

  if (!apiKey) {
    return null;
  }

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from,
    to: [to],
    replyTo: body.email,
    subject: `Nouveau message depuis le portfolio - ${body.name}`,
    text: buildEmailText(body, request),
    html: buildEmailHtml(body, request),
  });

  if (error) {
    throw new Error(formatProviderErrorMessage(error.message || "Erreur Resend."));
  }
}

export async function POST(request: Request) {
  let data: Record<string, unknown>;

  try {
    data = await request.json();
  } catch {
    return NextResponse.json(
      { message: "Requete invalide." },
      { status: 400 },
    );
  }

  const name = normalizeText(data.name);
  const email = normalizeText(data.email).toLowerCase();
  const message = normalizeMessage(data.message);
  const company = normalizeText(data.company);

  if (company) {
    return NextResponse.json({ message: "Message recu." });
  }

  if (name.length < 2 || name.length > MAX_NAME_LENGTH) {
    return NextResponse.json(
      { message: "Le nom doit contenir entre 2 et 80 caracteres." },
      { status: 400 },
    );
  }

  if (!EMAIL_PATTERN.test(email)) {
    return NextResponse.json(
      { message: "Adresse email invalide." },
      { status: 400 },
    );
  }

  if (message.length < MIN_MESSAGE_LENGTH || message.length > MAX_MESSAGE_LENGTH) {
    return NextResponse.json(
      {
        message: `Le message doit contenir entre ${MIN_MESSAGE_LENGTH} et ${MAX_MESSAGE_LENGTH} caracteres.`,
      },
      { status: 400 },
    );
  }

  try {
    const resendResult = await sendWithResend({ name, email, message }, request);

    if (resendResult === null) {
      const webhookUrl = process.env.CONTACT_FORM_WEBHOOK_URL;
      const webhookSecret = process.env.CONTACT_FORM_WEBHOOK_SECRET;

      if (!webhookUrl) {
        return NextResponse.json(
          {
            message:
              "Le formulaire est pret, mais l'envoi n'est pas encore configure. Ajoutez RESEND_API_KEY ou un webhook de contact.",
            fallbackEmail: siteConfig.email,
          },
          { status: 503 },
        );
      }

      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(webhookSecret ? { "x-contact-form-secret": webhookSecret } : {}),
        },
        body: JSON.stringify(buildWebhookPayload({ name, email, message }, request)),
        cache: "no-store",
      });

      if (!response.ok) {
        return NextResponse.json(
          { message: "Le service de soumission n'a pas accepte le message." },
          { status: 502 },
        );
      }
    }
  } catch (error) {
    return NextResponse.json(
      {
        message:
          error instanceof Error
            ? error.message
            : "Le service de soumission est indisponible pour le moment.",
      },
      { status: 502 },
    );
  }

  return NextResponse.json({
    message: "Message envoye. Je vous repondrai rapidement.",
  });
}
