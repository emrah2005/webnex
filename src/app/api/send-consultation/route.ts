import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      name,
      business,
      email,
      phone,
      need,
      budget,
      date,
      time,
      message,
      agree,
    } = body;

    if (!name || !email || !need || !budget || !agree) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const fromEmail = process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev";
    const toEmail = process.env.RESEND_TO_EMAIL || "webnexdevv@gmail.com";

    const subject = `New consultation request — ${need} from ${name}`;

    const html = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #05080F; color: #fff;">
        <div style="background: linear-gradient(135deg, #0A1A3D 0%, #05080F 100%); padding: 32px 28px; border-radius: 16px; border: 1px solid rgba(0,157,255,0.2);">
          <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 28px;">
            <div style="width: 40px; height: 40px; background: #009DFF; border-radius: 10px; display: flex; align-items: center; justify-content: center; font-weight: 900; font-size: 16px; color: #fff;">
              WN
            </div>
            <div>
              <div style="font-size: 11px; text-transform: uppercase; letter-spacing: 0.15em; color: #009DFF; font-weight: 600;">WebNex</div>
              <div style="font-size: 13px; color: rgba(255,255,255,0.5);">New Consultation Request</div>
            </div>
          </div>

          <h1 style="font-size: 22px; font-weight: 800; margin: 0 0 20px 0; color: #fff; line-height: 1.2;">
            You have a new project consultation request
          </h1>

          <div style="height: 1px; background: linear-gradient(to right, rgba(0,157,255,0.4), transparent); margin: 24px 0;"></div>

          <div style="margin-bottom: 24px;">
            <h2 style="font-size: 10px; text-transform: uppercase; letter-spacing: 0.18em; color: #009DFF; font-weight: 700; margin: 0 0 14px 0;">
              Client Information
            </h2>
            <div style="background: rgba(10, 26, 61, 0.5); border-radius: 12px; padding: 16px; border: 1px solid rgba(255,255,255,0.06);">
              <table style="width: 100%; border-collapse: collapse;">
                <tr style="border-bottom: 1px solid rgba(255,255,255,0.05);">
                  <td style="padding: 8px 0; font-size: 11px; color: rgba(255,255,255,0.45); text-transform: uppercase; letter-spacing: 0.08em; font-weight: 600; width: 110px;">Name</td>
                  <td style="padding: 8px 0; font-size: 14px; color: #fff; font-weight: 600;">${name || "—"}</td>
                </tr>
                <tr style="border-bottom: 1px solid rgba(255,255,255,0.05);">
                  <td style="padding: 8px 0; font-size: 11px; color: rgba(255,255,255,0.45); text-transform: uppercase; letter-spacing: 0.08em; font-weight: 600;">Business</td>
                  <td style="padding: 8px 0; font-size: 14px; color: #fff;">${business || "—"}</td>
                </tr>
                <tr style="border-bottom: 1px solid rgba(255,255,255,0.05);">
                  <td style="padding: 8px 0; font-size: 11px; color: rgba(255,255,255,0.45); text-transform: uppercase; letter-spacing: 0.08em; font-weight: 600;">Email</td>
                  <td style="padding: 8px 0; font-size: 14px; color: #009DFF;"><a href="mailto:${email}" style="color: #009DFF; text-decoration: none;">${email || "—"}</a></td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-size: 11px; color: rgba(255,255,255,0.45); text-transform: uppercase; letter-spacing: 0.08em; font-weight: 600;">Phone</td>
                  <td style="padding: 8px 0; font-size: 14px; color: #fff;">${phone || "—"}</td>
                </tr>
              </table>
            </div>
          </div>

          <div style="margin-bottom: 24px;">
            <h2 style="font-size: 10px; text-transform: uppercase; letter-spacing: 0.18em; color: #009DFF; font-weight: 700; margin: 0 0 14px 0;">
              Project Details
            </h2>
            <div style="background: rgba(10, 26, 61, 0.5); border-radius: 12px; padding: 16px; border: 1px solid rgba(255,255,255,0.06);">
              <table style="width: 100%; border-collapse: collapse;">
                <tr style="border-bottom: 1px solid rgba(255,255,255,0.05);">
                  <td style="padding: 8px 0; font-size: 11px; color: rgba(255,255,255,0.45); text-transform: uppercase; letter-spacing: 0.08em; font-weight: 600; width: 130px;">Project Type</td>
                  <td style="padding: 8px 0; font-size: 14px; color: #fff; font-weight: 600;">
                    <span style="background: rgba(0,157,255,0.12); color: #009DFF; padding: 4px 10px; border-radius: 6px; font-size: 12px; font-weight: 700;">${need || "—"}</span>
                  </td>
                </tr>
                <tr style="border-bottom: 1px solid rgba(255,255,255,0.05);">
                  <td style="padding: 8px 0; font-size: 11px; color: rgba(255,255,255,0.45); text-transform: uppercase; letter-spacing: 0.08em; font-weight: 600;">Budget</td>
                  <td style="padding: 8px 0; font-size: 14px; color: #fff;">${budget || "—"}</td>
                </tr>
                <tr style="border-bottom: 1px solid rgba(255,255,255,0.05);">
                  <td style="padding: 8px 0; font-size: 11px; color: rgba(255,255,255,0.45); text-transform: uppercase; letter-spacing: 0.08em; font-weight: 600;">Preferred Date</td>
                  <td style="padding: 8px 0; font-size: 14px; color: #fff;">${date || "—"}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-size: 11px; color: rgba(255,255,255,0.45); text-transform: uppercase; letter-spacing: 0.08em; font-weight: 600;">Preferred Time</td>
                  <td style="padding: 8px 0; font-size: 14px; color: #fff;">${time || "—"}</td>
                </tr>
              </table>
            </div>
          </div>

          ${message ? `
          <div style="margin-bottom: 24px;">
            <h2 style="font-size: 10px; text-transform: uppercase; letter-spacing: 0.18em; color: #009DFF; font-weight: 700; margin: 0 0 14px 0;">
              Project Notes
            </h2>
            <div style="background: rgba(10, 26, 61, 0.5); border-radius: 12px; padding: 18px; border: 1px solid rgba(255,255,255,0.06);">
              <p style="margin: 0; font-size: 14px; color: rgba(255,255,255,0.85); line-height: 1.6; white-space: pre-wrap;">${message}</p>
            </div>
          </div>
          ` : ""}

          <div style="background: rgba(34, 197, 94, 0.08); border: 1px solid rgba(34, 197, 94, 0.2); border-radius: 10px; padding: 12px 16px; display: flex; align-items: center; gap: 10px;">
            <div style="width: 20px; height: 20px; background: rgba(34, 197, 94, 0.15); border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#22c55e" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
            </div>
            <span style="font-size: 12px; color: #86efac; font-weight: 600;">Client agreed to be contacted regarding their project</span>
          </div>

          <div style="height: 1px; background: linear-gradient(to right, rgba(0,157,255,0.4), transparent); margin: 28px 0 20px 0;"></div>

          <p style="font-size: 12px; color: rgba(255,255,255,0.4); margin: 0; text-align: center;">
            Sent from the WebNex consultation form · ${new Date().toLocaleString()}
          </p>
        </div>
      </div>
    `;

    const text =
      `New Book a Consultation request via WebNex.\n\n` +
      `CLIENT INFORMATION\n` +
      `——————————————————\n` +
      `Name:           ${name || "—"}\n` +
      `Business:       ${business || "—"}\n` +
      `Email:          ${email || "—"}\n` +
      `Phone:          ${phone || "—"}\n\n` +
      `PROJECT DETAILS\n` +
      `——————————————————\n` +
      `What is needed: ${need || "—"}\n` +
      `Budget:         ${budget || "—"}\n` +
      `Preferred date: ${date || "—"}\n` +
      `Preferred time: ${time || "—"}\n\n` +
      `Project message / notes:\n${message || "—"}\n\n` +
      `Agreed to be contacted: ${agree ? "Yes" : "No"}`;

    const { data, error } = await resend.emails.send({
      from: `WebNex <${fromEmail}>`,
      to: [toEmail],
      replyTo: email,
      subject,
      html,
      text,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: (error as any).message || "Failed to send email" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, data });
  } catch (err: any) {
    console.error("API error:", err);
    return NextResponse.json(
      { error: err.message || "Internal server error" },
      { status: 500 }
    );
  }
}
