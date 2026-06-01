import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, clinic, email, phone, action, message } = body;

  if (!name || !email || !phone || !action || !message) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const { data, error } = await resend.emails.send({
    from: "Zylo3D Contact <onboarding@resend.dev>",
    to: [process.env.CONTACT_EMAIL!],
    replyTo: email,
    subject: `[Zylo3D] ${action} from ${name}`,
    html: `
      <h2>New contact form submission</h2>
      <table style="border-collapse:collapse;width:100%;max-width:600px">
        <tr><td style="padding:8px;border:1px solid #eee;font-weight:bold">Action</td><td style="padding:8px;border:1px solid #eee">${action}</td></tr>
        <tr><td style="padding:8px;border:1px solid #eee;font-weight:bold">Name</td><td style="padding:8px;border:1px solid #eee">${name}</td></tr>
        <tr><td style="padding:8px;border:1px solid #eee;font-weight:bold">Clinic</td><td style="padding:8px;border:1px solid #eee">${clinic || "N/A"}</td></tr>
        <tr><td style="padding:8px;border:1px solid #eee;font-weight:bold">Email</td><td style="padding:8px;border:1px solid #eee">${email}</td></tr>
        <tr><td style="padding:8px;border:1px solid #eee;font-weight:bold">Phone</td><td style="padding:8px;border:1px solid #eee">${phone || "N/A"}</td></tr>
        <tr><td style="padding:8px;border:1px solid #eee;font-weight:bold">Message</td><td style="padding:8px;border:1px solid #eee">${message}</td></tr>
      </table>
    `,
  });

  if (error) {
    console.error("Resend error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true, id: data?.id });
}
