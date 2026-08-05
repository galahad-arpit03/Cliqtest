import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { validateBusinessEmail, verifyMxRecord } from "@/lib/emailValidation";

// In-memory store for rate limiting
const rateLimitMap = new Map<string, { count: number; timestamp: number }>();

function isRateLimited(ip: string) {
  const now = Date.now();
  const windowMs = 5 * 60 * 1000; // 5 minutes
  const maxRequests = 3;

  if (!rateLimitMap.has(ip)) {
    rateLimitMap.set(ip, { count: 1, timestamp: now });
    return false;
  }

  const data = rateLimitMap.get(ip)!;
  if (now - data.timestamp > windowMs) {
    rateLimitMap.set(ip, { count: 1, timestamp: now });
    return false;
  }

  if (data.count >= maxRequests) return true;

  data.count++;
  return false;
}

export async function POST(req: Request) {
  try {
    const ip = req.headers.get("x-forwarded-for") || "127.0.0.1";
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 },
      );
    }

    const body = await req.json();
    const { firstName, lastName, email, date, time, contactType, _honey } =
      body;

    // Honeypot Trap: If a bot fills out the hidden _honey field, silently drop the request.
    if (_honey) {
      return NextResponse.json({
        success: true,
        message: "Demo request sent successfully",
      });
    }

    if (!firstName || !lastName || !email || !date || !time) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 },
      );
    }

    // 1. Business Email Check (Block personal/free email providers)
    const emailValidation = validateBusinessEmail(email);
    if (!emailValidation.isValid) {
      return NextResponse.json(
        { error: emailValidation.reason },
        { status: 400 },
      );
    }

    // 2. DNS MX Record Verification (Verify domain mail server exists)
    if (emailValidation.domain) {
      const mxValidation = await verifyMxRecord(emailValidation.domain);
      if (!mxValidation.isValid) {
        return NextResponse.json(
          { error: mxValidation.reason },
          { status: 400 },
        );
      }
    }

    if (!process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
      console.error("Missing SMTP environment variables (SMTP_HOST, SMTP_USER, SMTP_PASS).");
      return NextResponse.json(
        { error: "Server configuration error: SMTP credentials missing." },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 465),
      secure: (process.env.SMTP_PORT || "465") === "465",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const targetEmail = "sales@apmosys.com";

    const mailOptions = {
      from: `"Cliqtest Demo" <${process.env.SMTP_USER || 'cliqtest@apmosys.com'}>`,
      to: targetEmail,
      replyTo: email,
      subject: `New Demo Request (${contactType === "sales" ? "Sales" : "Pre-Sales"}): ${firstName} ${lastName}`,
      html: `
        <h2>New Demo Request</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Team Requested:</strong> ${contactType === "sales" ? "Sales / Enterprise License" : "Pre-Sales / Technical"}</p>
        <p><strong>Requested Date:</strong> ${date}</p>
        <p><strong>Requested Time:</strong> ${time}</p>
        <br />
        <p><em>Please reply to this email to follow up with the user and send them the meeting invite.</em></p>
      `,
    };

    // Fire and forget: don't await the email so the UI responds instantly
    transporter.sendMail(mailOptions).catch((error) => {
      console.error("Background email send failed:", error);
    });

    return NextResponse.json({
      success: true,
      message: "Demo request sent successfully",
    });
  } catch (error) {
    console.error("Error sending demo request email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 },
    );
  }
}
