import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required fields." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const recipientEmail = "wakilisrakabir@gmail.com";
    const origin = request.headers.get("origin") || "http://localhost:3000";
    const referer = request.headers.get("referer") || `${origin}/`;

    // Forward message to FormSubmit service to deliver directly to wakilisrakabir@gmail.com
    try {
      const emailResponse = await fetch(`https://formsubmit.co/ajax/${recipientEmail}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Origin: origin,
          Referer: referer,
        },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          _subject: `[Portfolio Inquiry] ${subject?.trim() || "New Message"} from ${name.trim()}`,
          _replyto: email.trim(),
          message: message.trim(),
          _template: "table",
          _captcha: "false",
        }),
      });

      const emailResult = await emailResponse.json();
      console.log("FormSubmit delivery status for Abir:", emailResult);

      const isSuccess = emailResult.success === true || emailResult.success === "true";
      const isActivationNeeded =
        emailResult.message &&
        emailResult.message.toLowerCase().includes("activation");

      if (!isSuccess) {
        return NextResponse.json(
          {
            success: false,
            needsActivation: isActivationNeeded,
            message: emailResult.message || "Message delivery pending activation.",
          },
          { status: 200 }
        );
      }

      return NextResponse.json(
        {
          success: true,
          message: "Your message has been delivered directly to Wakil Israk Abir's Gmail inbox!",
          deliveryStatus: emailResult.message || "Delivered",
        },
        { status: 200 }
      );
    } catch (deliveryError) {
      console.error("FormSubmit delivery error, falling back:", deliveryError);
      return NextResponse.json(
        {
          success: false,
          message: "Unable to deliver message right now. Please email directly at wakilisrakabir@gmail.com",
        },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      { error: "Internal server error. Please try again later." },
      { status: 500 }
    );
  }
}

