import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

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
    const ip = req.headers.get('x-forwarded-for') || '127.0.0.1';
    if (isRateLimited(ip)) {
      return NextResponse.json({ error: 'Too many requests. Please try again later.' }, { status: 429 });
    }

    const body = await req.json();
    const { firstName, lastName, email, date, time, contactType, _honey } = body;

    // Honeypot Trap: If a bot fills out the hidden _honey field, silently drop the request.
    if (_honey) {
      return NextResponse.json({ success: true, message: 'Demo request sent successfully' });
    }

    if (!firstName || !lastName || !email || !date || !time) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: process.env.SMTP_PORT === '465',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: '"Cliqtest Demo" <cliqtest@apmosys.com>',
      to: 'arpit.gupta@apmosys.com, presales@apmosys.com, asutosh.maharana@apmosys.com',
      replyTo: email,
      subject: `New Demo Request: ${firstName} ${lastName}`,
      html: `
        <h2>New Demo Request</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Team Requested:</strong> ${contactType === 'sales' ? 'Sales / Enterprise License' : 'Pre-Sales / Technical'}</p>
        <p><strong>Requested Date:</strong> ${date}</p>
        <p><strong>Requested Time:</strong> ${time}</p>
        <br />
        <p><em>Please reply to this email to follow up with the user and send them the meeting invite.</em></p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: 'Demo request sent successfully' });
  } catch (error) {
    console.error('Error sending demo request email:', error);
    return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
