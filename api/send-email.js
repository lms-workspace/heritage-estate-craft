import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, phone, zipCode, rvMake, rvModel, rvLength, service, message } = req.body;

  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required' });
  }

  try {
    // Notify Tom of new inquiry
    await resend.emails.send({
      from: 'Heritage RV Website <tomgascon@heritagervdetailing.com>',
      to: 'tomgascon@heritagervdetailing.com',
      subject: `New Inquiry — ${service || 'General'} — ${name}`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #1C1C1C; color: #F5EDD8;">
          <h2 style="color: #C4922A; font-size: 24px; margin-bottom: 24px; border-bottom: 1px solid #2A4520; padding-bottom: 12px;">
            New Booking Request
          </h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 8px 0; color: #C4A882; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em;">Name</td><td style="padding: 8px 0; color: #F5EDD8;">${name}</td></tr>
            <tr><td style="padding: 8px 0; color: #C4A882; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em;">Email</td><td style="padding: 8px 0; color: #F5EDD8;">${email}</td></tr>
            <tr><td style="padding: 8px 0; color: #C4A882; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em;">Phone</td><td style="padding: 8px 0; color: #F5EDD8;">${phone || '—'}</td></tr>
            <tr><td style="padding: 8px 0; color: #C4A882; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em;">Zip Code</td><td style="padding: 8px 0; color: #F5EDD8;">${zipCode || '—'}</td></tr>
            <tr><td style="padding: 8px 0; color: #C4A882; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em;">RV Make / Model</td><td style="padding: 8px 0; color: #F5EDD8;">${rvMake || '—'} ${rvModel || ''}</td></tr>
            <tr><td style="padding: 8px 0; color: #C4A882; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em;">RV Length</td><td style="padding: 8px 0; color: #F5EDD8;">${rvLength || '—'}</td></tr>
            <tr><td style="padding: 8px 0; color: #C4A882; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em;">Service</td><td style="padding: 8px 0; color: #C4922A; font-weight: bold;">${service || '—'}</td></tr>
          </table>
          ${message ? `<div style="margin-top: 24px; padding: 16px; background: #2A4520; border-radius: 4px;"><p style="color: #C4A882; font-size: 12px; text-transform: uppercase; letter-spacing: 0.1em; margin: 0 0 8px;">Message</p><p style="color: #F5EDD8; margin: 0;">${message}</p></div>` : ''}
          <p style="margin-top: 32px; color: #5C4033; font-size: 12px;">Sent from heritagervdetailing.com</p>
        </div>
      `,
    });

    // Auto-reply to the customer
    await resend.emails.send({
      from: 'Heritage RV Detailing <tomgascon@heritagervdetailing.com>',
      to: email,
      subject: `We received your request — Heritage RV Detailing`,
      html: `
        <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; padding: 32px; background: #F5EDD8; color: #1C1C1C;">
          <h2 style="color: #2A4520; font-size: 24px; margin-bottom: 8px;">Thank you, ${name}.</h2>
          <div style="width: 40px; height: 2px; background: #C4922A; margin-bottom: 24px;"></div>
          <p style="color: #1C1C1C; line-height: 1.7;">We've received your inquiry${service ? ` regarding <strong>${service}</strong>` : ''} and Tom will personally follow up within 24 hours to discuss your RV's needs and provide a tailored quote.</p>
          <div style="margin: 32px 0; padding: 20px; border-left: 3px solid #C4922A; background: #EDE0C4;">
            <p style="color: #5C4033; font-size: 13px; margin: 0 0 4px;">Your inquiry details</p>
            <p style="color: #1C1C1C; margin: 0;">${rvMake || ''} ${rvModel || ''} ${rvLength ? `· ${rvLength}` : ''}</p>
            <p style="color: #2A4520; font-weight: bold; margin: 4px 0 0;">${service || 'General Inquiry'}</p>
          </div>
          <p style="color: #5C4033; font-size: 13px;">Questions in the meantime? Call or text: <a href="tel:6166447135" style="color: #2A4520;">616-644-7135</a></p>
          <p style="margin-top: 32px; color: #1C1C1C; font-style: italic;">— Heritage RV Detailing<br><span style="color: #5C4033; font-size: 12px;">Tennessee's Mobile RV Care Specialist</span></p>
        </div>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('Resend error:', err);
    return res.status(500).json({ error: err.message || 'Failed to send email. Please try again.' });
  }
}
