import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 465,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function POST(request: Request) {
  try {
    const formData = await request.formData();

    const name = formData.get("name")?.toString().trim();
    const phone = formData.get("phone")?.toString().trim();
    const email = formData.get("email")?.toString().trim();
    const service = formData.get("service")?.toString().trim();
    const message = formData.get("message")?.toString().trim();

    if (!name || !phone || !email || !service || !message) {
      return NextResponse.json(
        {
          success: false,
          message: "Please fill in all required fields.",
        },
        { status: 400 }
      );
    }

  
await transporter.sendMail({
  from: `"Website Enquiry" <${process.env.SMTP_USER}>`,
  to: process.env.CONTACT_EMAIL,
  replyTo: email,
  subject: `New Plumbing Enquiry — ${service}`,

  text: `
New Plumbing Enquiry

Customer Details
Name: ${name}
Phone: ${phone}
Email: ${email}
Service: ${service}

Problem Description:
${message}

Reply directly to this email to contact ${name}.
  `,

  html: `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>New Plumbing Enquiry</title>
</head>

<body style="
  margin: 0;
  padding: 0;
  background-color: #f4f7f8;
  font-family: Arial, Helvetica, sans-serif;
  color: #17202a;
">

  <div style="
    width: 100%;
    padding: 40px 16px;
    box-sizing: border-box;
  ">

    <div style="
      max-width: 620px;
      margin: 0 auto;
      background: #ffffff;
      border-radius: 14px;
      overflow: hidden;
      border: 1px solid #e5e7eb;
      box-shadow: 0 4px 18px rgba(0, 0, 0, 0.06);
    ">

      <div style="
        background: #087f5b;
        padding: 28px 32px;
      ">

        <div style="
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 1px;
          color: #d1fae5;
          text-transform: uppercase;
          margin-bottom: 8px;
        ">
          Website Enquiry
        </div>

        <h1 style="
          margin: 0;
          color: #ffffff;
          font-size: 26px;
          line-height: 1.3;
          font-weight: 700;
        ">
          New Plumbing Enquiry
        </h1>

        <p style="
          margin: 10px 0 0;
          color: #dff7ed;
          font-size: 14px;
          line-height: 1.6;
        ">
          A new customer has submitted an enquiry through your website.
        </p>

      </div>

      <div style="
        padding: 24px 32px 8px;
      ">

        <div style="
          display: inline-block;
          background: #fff4e6;
          border: 1px solid #ffd8a8;
          border-radius: 8px;
          padding: 9px 13px;
          color: #c2410c;
          font-size: 13px;
          font-weight: 700;
        ">
          ${escapeHtml(service)}
        </div>

      </div>

      <div style="
        padding: 20px 32px 8px;
      ">

        <h2 style="
          margin: 0 0 16px;
          color: #17202a;
          font-size: 18px;
          line-height: 1.4;
        ">
          Customer details
        </h2>

        <table
          role="presentation"
          width="100%"
          cellspacing="0"
          cellpadding="0"
          style="border-collapse: collapse;"
        >

          <tr>
            <td style="
              padding: 12px 0;
              border-bottom: 1px solid #edf0f2;
              width: 110px;
              color: #64748b;
              font-size: 13px;
              font-weight: 600;
            ">
              Name
            </td>

            <td style="
              padding: 12px 0;
              border-bottom: 1px solid #edf0f2;
              color: #17202a;
              font-size: 14px;
              font-weight: 600;
            ">
              ${escapeHtml(name)}
            </td>
          </tr>

          <tr>
            <td style="
              padding: 12px 0;
              border-bottom: 1px solid #edf0f2;
              color: #64748b;
              font-size: 13px;
              font-weight: 600;
            ">
              Phone
            </td>

            <td style="
              padding: 12px 0;
              border-bottom: 1px solid #edf0f2;
              font-size: 14px;
            ">
              <a
                href="tel:${escapeHtml(phone)}"
                style="
                  color: #087f5b;
                  text-decoration: none;
                  font-weight: 600;
                "
              >
                ${escapeHtml(phone)}
              </a>
            </td>
          </tr>

          <tr>
            <td style="
              padding: 12px 0;
              border-bottom: 1px solid #edf0f2;
              color: #64748b;
              font-size: 13px;
              font-weight: 600;
            ">
              Email
            </td>

            <td style="
              padding: 12px 0;
              border-bottom: 1px solid #edf0f2;
              font-size: 14px;
            ">
              <a
                href="mailto:${escapeHtml(email)}"
                style="
                  color: #2563eb;
                  text-decoration: none;
                  font-weight: 600;
                "
              >
                ${escapeHtml(email)}
              </a>
            </td>
          </tr>

          <tr>
            <td style="
              padding: 12px 0;
              color: #64748b;
              font-size: 13px;
              font-weight: 600;
            ">
              Service
            </td>

            <td style="
              padding: 12px 0;
              color: #17202a;
              font-size: 14px;
              font-weight: 600;
            ">
              ${escapeHtml(service)}
            </td>
          </tr>

        </table>

      </div>

      <div style="
        padding: 24px 32px;
      ">

        <h2 style="
          margin: 0 0 12px;
          color: #17202a;
          font-size: 18px;
        ">
          Problem description
        </h2>

        <div style="
          background: #f8fafc;
          border-left: 4px solid #2563eb;
          border-radius: 8px;
          padding: 16px 18px;
          color: #475569;
          font-size: 14px;
          line-height: 1.7;
        ">
          ${escapeHtml(message).replace(/\n/g, "<br />")}
        </div>

      </div>

      <div style="
        padding: 0 32px 30px;
      ">

        <a
          href="mailto:${escapeHtml(email)}"
          style="
            display: inline-block;
            background: #087f5b;
            color: #ffffff;
            text-decoration: none;
            padding: 13px 20px;
            border-radius: 8px;
            font-size: 14px;
            font-weight: 700;
          "
        >
          Reply to ${escapeHtml(name)}
        </a>

      </div>

      <div style="
        background: #f8fafc;
        border-top: 1px solid #edf0f2;
        padding: 20px 32px;
      ">

        <p style="
          margin: 0;
          color: #64748b;
          font-size: 12px;
          line-height: 1.6;
        ">
          This enquiry was submitted through your plumbing website.
        </p>

        <p style="
          margin: 6px 0 0;
          color: #94a3b8;
          font-size: 11px;
        ">
          Please reply promptly to respond to the customer.
        </p>

      </div>

    </div>

  </div>

</body>
</html>
  `,
});



    return NextResponse.json({
      success: true,
      message: "Your enquiry has been sent successfully.",
    });
  } catch (error) {
    console.error("Email sending error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Failed to send enquiry. Please try again.",
      },
      { status: 500 }
    );
  }
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}