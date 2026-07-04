# Email Concepts and Implementation Details

This document outlines the core concepts of how email functionality is implemented, secured, and routed in the application, specifically focusing on the "Subscribe" and "Book a Demo" features.

## 1. Security Concepts

### The Honeypot Technique (Mocking for Bots)
In the context of the application, email submissions aren't "mocked" via a dummy SMTP server. Instead, a **Honeypot Trap** is used to mock a successful response for spam bots.
- **How it works:** A hidden form field (`_honey`) is added to the frontend. Real human users cannot see it, so they leave it empty. Automated bots read the raw HTML and fill it in.
- **The Result:** If the backend detects data in the `_honey` field, it immediately aborts the email sending process but returns a fake `200 OK` success message. This prevents spam without alerting the bot that it has been blocked.

### Rate Limiting
To prevent abuse, an in-memory map restricts users to a maximum of 3 requests per IP address every 5 minutes. If exceeded, a `429 Too Many Requests` error is returned.

## 2. Email Routing Concepts

### Email Masking / Aliasing
This is the general concept of hiding a real email address behind a generated "dummy" address (e.g., `user-xyz@proxy.domain.com`). Emails sent to the dummy address are secretly forwarded to the real address, protecting the user's identity from spam and data brokers.

### Reply-To Routing (Used in Book a Demo)
Due to strict domain authentication laws (DMARC/SPF), your server cannot legally forge the `From:` header to make it look like the email came directly from the customer's personal email (e.g., `From: customer@gmail.com`). Doing so would cause the email to be flagged as spam.
- **The Solution:** The server sends the email using a verified service account (`From: cliqtest@apmosys.com`) but attaches a `Reply-To: customer@gmail.com` header. When the sales team clicks "Reply", their email client automatically replaces the service address with the customer's actual address.

---

## 3. Implementation Data (The Code)

### Environment Variables (.env.local)
The application securely stores the SMTP credentials for the corporate mail server.

```env
SMTP_HOST=mail.apmosys.com
SMTP_PORT=465
SMTP_USER=cliqtest@apmosys.com
SMTP_PASS=Welcome@2026
```

### A. Subscribe Endpoint (\`app/api/subscribe/route.ts\`)
**Purpose:** Notifies the internal team when a new user subscribes to the newsletter. The system sends an email to itself.

```typescript
const { email, _honey } = body;

// Honeypot Trap: If a bot fills out the hidden _honey field, silently drop the request.
if (_honey) {
  return NextResponse.json({ success: true, message: 'Subscribed successfully' });
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
  from: process.env.SMTP_USER,
  to: process.env.SMTP_USER, // Sending it to the same email address as requested
  subject: `New Newsletter Subscriber: ${email}`,
  text: `A new user has subscribed to the cliQTest newsletter!\n\nEmail: ${email}`,
};

await transporter.sendMail(mailOptions);
```

### B. Book a Demo Endpoint (\`app/api/book-demo/route.ts\`)
**Purpose:** Routes detailed lead information to the sales channels and utilizes Reply-To routing.

```typescript
const { firstName, lastName, email, date, time, contactType, _honey } = body;

// Honeypot Trap
if (_honey) {
  return NextResponse.json({ success: true, message: "Demo request sent successfully" });
}

// SMTP Transporter configuration is identical to the Subscribe endpoint above...

const mailOptions = {
  from: '"Cliqtest Demo" <cliqtest@apmosys.com>',
  to: "sales@apmosys.com, presales@apmosys.com",
  replyTo: email, // Enables Reply-To Routing directly to the customer
  subject: `New Demo Request: ${firstName} ${lastName}`,
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

await transporter.sendMail(mailOptions);
```
