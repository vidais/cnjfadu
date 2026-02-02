// app/api/contact/route.ts
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

  // Set up your SMTP transporter
  const transporter = nodemailer.createTransport({
    host: "smtp.your-email.com",
    port: 465,
    secure: true,
    auth: {
      user: "your-email@domain.com",
      pass: "your-email-password",
    },
  });

  try {
    await transporter.sendMail({
      from: `"${name}" <${email}>`, // sender
      to: "your-email@domain.com", // your inbox
      subject: "New contact message",
      text: message,
      html: `<p>${message}</p><p>From: ${name} (${email})</p>`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, error: "Failed to send email" });
  }
}

