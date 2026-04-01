import { NextResponse } from "next/server";

import { siteConfig } from "@/app/site-config";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MIN_MESSAGE_LENGTH = 20;
const MAX_MESSAGE_LENGTH = 2000;
const MAX_NAME_LENGTH = 80;

function normalizeText(value: unknown) {
  return typeof value === "string" ? value.trim().replace(/\s+/g, " ") : "";
}

function normalizeMessage(value: unknown) {
  return typeof value === "string" ? value.trim() : "";
}

function buildWebhookPayload(body: { name: string; email: string; message: string }, request: Request) {
  return {
    ...body,
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

  const webhookUrl = process.env.CONTACT_FORM_WEBHOOK_URL;
  const webhookSecret = process.env.CONTACT_FORM_WEBHOOK_SECRET;

  if (!webhookUrl) {
    return NextResponse.json(
      {
        message:
          "Le formulaire est pret, mais l'envoi n'est pas encore connecte. Utilisez l'email direct en attendant.",
        fallbackEmail: siteConfig.email,
      },
      { status: 503 },
    );
  }

  try {
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
  } catch {
    return NextResponse.json(
      { message: "Le service de soumission est indisponible pour le moment." },
      { status: 502 },
    );
  }

  return NextResponse.json({
    message: "Message envoye. Je vous repondrai rapidement.",
  });
}
