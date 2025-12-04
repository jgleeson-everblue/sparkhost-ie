import type { APIRoute } from 'astro';
import { sendEmail } from '../../lib/email-service';
import { userContactConfirmation, adminContactNotification } from '../../lib/email-templates';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();

    // Validate required fields
    const { name, email, message, phone, company, website, subject } = data;

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ success: false, error: 'Name, email, and message are required' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ success: false, error: 'Invalid email address' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const timestamp = new Date().toLocaleString('en-IE', {
      timeZone: 'Europe/Dublin',
      dateStyle: 'full',
      timeStyle: 'short'
    });

    // Send confirmation email to user
    const userEmail = userContactConfirmation({ name, email, message, subject });
    const userResult = await sendEmail({
      to: email,
      subject: userEmail.subject,
      html: userEmail.html,
      replyTo: 'hello@sparkhost.ie'
    });

    // Send notification email to admin
    const adminEmail = adminContactNotification({
      name,
      email,
      phone,
      company,
      website,
      subject,
      message,
      timestamp
    });

    const adminResult = await sendEmail({
      to: 'hello@sparkhost.ie',
      subject: adminEmail.subject,
      html: adminEmail.html,
      replyTo: email
    });

    if (!userResult.success || !adminResult.success) {
      console.error('Email sending failed:', { userResult, adminResult });
      return new Response(
        JSON.stringify({
          success: false,
          error: 'Failed to send email. Please try again or contact us directly.'
        }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    return new Response(
      JSON.stringify({ success: true, message: 'Message sent successfully!' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    return new Response(
      JSON.stringify({
        success: false,
        error: 'An unexpected error occurred. Please try again.'
      }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
