import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    const fromEmail = process.env.FROM_EMAIL;
    const toEmail = process.env.TO_EMAIL;

    if (!apiKey) {
      console.error("Missing RESEND_API_KEY");
      return NextResponse.json(
        { success: false, error: "Missing RESEND_API_KEY" },
        { status: 500 },
      );
    }

    if (!fromEmail || !toEmail) {
      console.error("Missing FROM_EMAIL or TO_EMAIL");
      return NextResponse.json(
        { success: false, error: "Missing email configuration" },
        { status: 500 },
      );
    }

    const resend = new Resend(apiKey);

    console.log("=== INVEST FORM REQUEST START ===");
    console.log("RESEND_API_KEY exists:", !!apiKey);
    console.log("FROM_EMAIL:", fromEmail);
    console.log("TO_EMAIL:", toEmail);

    const formData = await req.formData();

    const fullName = String(formData.get("fullName") || "");
    const age = String(formData.get("age") || "");
    const email = String(formData.get("email") || "");
    const mobile = String(formData.get("mobile") || "");

    const accountHolderName = String(formData.get("accountHolderName") || "");
    const bankName = String(formData.get("bankName") || "");
    const accountNumber = String(formData.get("accountNumber") || "");
    const ifscCode = String(formData.get("ifscCode") || "");
    const branchName = String(formData.get("branchName") || "");

    const aadhaarNumber = String(formData.get("aadhaarNumber") || "");
    const panNumber = String(formData.get("panNumber") || "");
    const address = String(formData.get("address") || "");

    const aadhaarFile = formData.get("aadhaarFile") as File | null;
    const panFile = formData.get("panFile") as File | null;

    const attachments: {
      filename: string;
      content: Buffer;
    }[] = [];

    if (aadhaarFile && aadhaarFile.size > 0) {
      const bytes = await aadhaarFile.arrayBuffer();
      attachments.push({
        filename: aadhaarFile.name,
        content: Buffer.from(bytes),
      });
    }

    if (panFile && panFile.size > 0) {
      const bytes = await panFile.arrayBuffer();
      attachments.push({
        filename: panFile.name,
        content: Buffer.from(bytes),
      });
    }

    const result = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      subject: `New Investment Application - ${fullName || "Unknown Applicant"}`,
      replyTo: email || undefined,
      html: `
        <h2>New Investment Application Received</h2>

        <h3>Personal Details</h3>
        <p><strong>Full Name:</strong> ${fullName}</p>
        <p><strong>Age:</strong> ${age}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mobile:</strong> ${mobile}</p>

        <h3>Bank Details</h3>
        <p><strong>Account Holder Name:</strong> ${accountHolderName}</p>
        <p><strong>Bank Name:</strong> ${bankName}</p>
        <p><strong>Account Number:</strong> ${accountNumber}</p>
        <p><strong>IFSC Code:</strong> ${ifscCode}</p>
        <p><strong>Branch Name:</strong> ${branchName}</p>

        <h3>KYC Details</h3>
        <p><strong>Aadhaar Number:</strong> ${aadhaarNumber}</p>
        <p><strong>PAN Number:</strong> ${panNumber}</p>
        <p><strong>Address:</strong> ${address}</p>
      `,
      attachments,
    });

    console.log("RESEND RESULT:", result);

    if (result.error) {
      console.error("RESEND ERROR:", result.error);
      return NextResponse.json(
        { success: false, error: result.error },
        { status: 500 },
      );
    }

    return NextResponse.json({
      success: true,
      message: "Email sent successfully",
      data: result.data,
    });
  } catch (error) {
    console.error("INVEST FORM ERROR:", error);
    return NextResponse.json(
      { success: false, error: "Failed to send application" },
      { status: 500 },
    );
  }
}