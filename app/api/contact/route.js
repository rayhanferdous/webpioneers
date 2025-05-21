import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    let data;
    try {
      data = await request.json();
    } catch (e) {
      return NextResponse.json(
        { success: false, error: "Invalid JSON format" },
        { status: 400 }
      );
    }

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
      ✉️ Email: ${email}
      🌐 Website: ${site}
      🏢 Company: ${company}
      📱 Phone Number: ${number}
      🧾 Plan Interested In: ${plan}

      📝 Message:
      ${message}
    `;

    await transporter.sendMail({
      from: `"${fullName}" <${process.env.EMAIL_USER}>`,
      replyTo: email,
      to: process.env.EMAIL_RECEIVER,
      subject: `Contact Form Submission from ${fullName}`,
      text: emailContent,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2 style="color: #2563eb;">📩 New Contact Form Submission</h2>
          <p><strong>👤 Full Name:</strong> ${fullName}</p>
          <p><strong>✉️ Email:</strong> ${email}</p>
          <p><strong>🌐 Website:</strong> ${site || "Not provided"}</p>
          <p><strong>🏢 Company:</strong> ${company || "Not provided"}</p>
          <p><strong>📱 Phone Number:</strong> ${number || "Not provided"}</p>
          <p><strong>🧾 Plan Interested In:</strong> ${
            plan || "Not specified"
          }</p>
          <hr>
          <h3 style="color: #2563eb;">📝 Message:</h3>
          <p>${message.replace(/\n/g, "<br>")}</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error in API route:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Internal server error",
        details: process.env.NODE_ENV === "development" ? error.message : null,
      },
      { status: 500 }
    );
  }
}
