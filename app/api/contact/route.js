import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  const data = await request.json();
  const { fullName, email, site, company, number, plan, message } = data;

  const transporter = nodemailer.createTransport({
    host: "smtp.office365.com",
    port: 587,
    secure: true,
    encryption: "STARTTLS",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const emailContent = `
    📩 New Contact Form Submission:

    👤 Full Name: ${fullName}
    🌐 Website: ${site}
    🏢 Company: ${company}
    📱 Phone Number: ${number}
    🧾 Plan Interested In: ${plan}

    📝 Message:
    ${message}
  `;

  try {
    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_RECEIVER,
      subject: `Contact Form Submission from ${fullName}`,
      text: emailContent,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { success: false, error: "Email sending failed." },
      { status: 500 }
    );
  }
}
