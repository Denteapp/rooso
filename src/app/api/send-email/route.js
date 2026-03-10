import { Resend } from 'resend';

export async function POST(request) {
  try {
    const { name, email, phone, service, message } = await request.json();

    if (!name || !email || !phone) {
      return Response.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    // Notification to the company
    await resend.emails.send({
      from: 'ROOSO Website <onboarding@roosogroup.com>',
      to: ['info@roosogroup.com'],
      reply_to: 'info@roosogroup.com',
      subject: `New Free Estimate Request - ${service}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(to right, #05240a, #1e8b2f, #05240a); padding: 24px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 28px; letter-spacing: 2px;">ROOSO INC.</h1>
            <p style="color: #b0f0b8; margin: 4px 0 0; font-size: 14px;">New Estimate Request</p>
          </div>
          <div style="padding: 32px; background: #f9f9f9; border: 1px solid #e0e0e0;">
            <h2 style="color: #124409; margin-top: 0;">Contact Details</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 8px 0; color: #555; width: 120px;"><strong>Name</strong></td><td style="padding: 8px 0; color: #111;">${name}</td></tr>
              <tr><td style="padding: 8px 0; color: #555;"><strong>Email</strong></td><td style="padding: 8px 0; color: #111;"><a href="mailto:${email}" style="color:#1e8b2f;">${email}</a></td></tr>
              <tr><td style="padding: 8px 0; color: #555;"><strong>Phone</strong></td><td style="padding: 8px 0; color: #111;">${phone}</td></tr>
              <tr><td style="padding: 8px 0; color: #555;"><strong>Service</strong></td><td style="padding: 8px 0; color: #111;">${service}</td></tr>
              ${message ? `<tr><td style="padding: 8px 0; color: #555; vertical-align: top;"><strong>Message</strong></td><td style="padding: 8px 0; color: #111;">${message}</td></tr>` : ''}
            </table>
          </div>
          <div style="padding: 16px 32px; background: #124409; text-align: center;">
            <p style="color: #b0f0b8; margin: 0; font-size: 12px;">ROOSO INC. • 844-781-9216 • info@roosogroup.com</p>
          </div>
        </div>
      `,
    });

    // Confirmation email to the client
    await resend.emails.send({
      from: 'ROOSO INC. <onboarding@roosogroup.com>',
      to: [email],
      reply_to: 'info@roosogroup.com',
      subject: `We received your request, ${name}!`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(to right, #05240a, #1e8b2f, #05240a); padding: 24px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 28px; letter-spacing: 2px;">ROOSO INC.</h1>
            <p style="color: #b0f0b8; margin: 4px 0 0; font-size: 14px;">Roofing & General Contractor</p>
          </div>
          <div style="padding: 32px; background: #f9f9f9; border: 1px solid #e0e0e0;">
            <h2 style="color: #124409; margin-top: 0;">Thank you, ${name}!</h2>
            <p style="color: #333; line-height: 1.6;">We have received your free estimate request for <strong>${service}</strong> and our team will contact you shortly.</p>
            <p style="color: #333; line-height: 1.6;">If you have any urgent questions, feel free to call us directly:</p>
            <p style="font-size: 20px; font-weight: bold; color: #1e8b2f; text-align: center; margin: 24px 0;">844-781-9216</p>
          </div>
          <div style="padding: 16px 32px; background: #124409; text-align: center;">
            <p style="color: #b0f0b8; margin: 0; font-size: 12px;">ROOSO INC. - 844-781-9216 - info@roosogroup.com</p>
          </div>
        </div>
      `,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error('Resend error:', error);
    return Response.json({ error: 'Failed to send email' }, { status: 500 });
  }
}
