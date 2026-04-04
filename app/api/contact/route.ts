import { NextResponse } from "next/server";

const resendApiUrl = "https://api.resend.com/emails";

function toField(value: unknown) {
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

function errorResponse(message: string, wantsHtml: boolean, requestUrl: string, status = 400) {
  if (wantsHtml) {
    return NextResponse.redirect(new URL("/", requestUrl), status === 400 ? 303 : 307);
  }

  return NextResponse.json({ error: message }, { status });
}

async function parsePayload(request: Request) {
  const contentType = request.headers.get("content-type") ?? "";

  if (contentType.includes("application/json")) {
    return (await request.json()) as Record<string, unknown>;
  }

  const formData = await request.formData();
  return Object.fromEntries(formData.entries());
}

export const runtime = "nodejs";

export async function POST(request: Request) {
  const wantsHtml = (request.headers.get("accept") ?? "").includes("text/html");
  const values = await parsePayload(request);

  const name = toField(values.name);
  const email = toField(values.email);
  const company = toField(values.company);
  const message = toField(values.message);
  const botField = toField(values["bot-field"] ?? values.botField);

  if (botField) {
    if (wantsHtml) {
      return NextResponse.redirect(new URL("/contact-success", request.url), 303);
    }

    return NextResponse.json({ ok: true });
  }

  if (!name || !email || !message) {
    return errorResponse("Missing required contact fields.", wantsHtml, request.url);
  }

  const resendApiKey = process.env.RESEND_API_KEY;
  const contactToEmail = process.env.CONTACT_TO_EMAIL;
  const contactFromEmail = process.env.CONTACT_FROM_EMAIL;

  if (!resendApiKey || !contactToEmail || !contactFromEmail) {
    console.error("Missing contact form environment variables.");
    return errorResponse(
      "Contact form is not configured yet.",
      wantsHtml,
      request.url,
      500
    );
  }

  const textBody = [
    `Name: ${name}`,
    `Email: ${email}`,
    company ? `Company: ${company}` : null,
    "",
    "Message:",
    message
  ]
    .filter(Boolean)
    .join("\n");

  const htmlBody = `
    <div>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      ${company ? `<p><strong>Company:</strong> ${escapeHtml(company)}</p>` : ""}
      <p><strong>Message:</strong></p>
      <p>${escapeHtml(message).replaceAll("\n", "<br />")}</p>
    </div>
  `;

  const response = await fetch(resendApiUrl, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      from: contactFromEmail,
      to: [contactToEmail],
      reply_to: email,
      subject: `Portfolio inquiry from ${name}`,
      text: textBody,
      html: htmlBody
    })
  });

  if (!response.ok) {
    console.error("Resend request failed.", await response.text());
    return errorResponse("Contact form submission failed.", wantsHtml, request.url, 502);
  }

  if (wantsHtml) {
    return NextResponse.redirect(new URL("/contact-success", request.url), 303);
  }

  return NextResponse.json({ ok: true });
}
