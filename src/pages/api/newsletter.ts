import type { APIRoute } from 'astro';
import { sendEmail } from '../../lib/email-service';
import { userNewsletterConfirmation } from '../../lib/email-templates';

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();
    const { email } = data;

    if (!email) {
      return new Response(
        JSON.stringify({ success: false, error: 'Email is required' }),
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

    // Send confirmation email to subscriber
    const confirmEmail = userNewsletterConfirmation(email);
    const result = await sendEmail({
      to: email,
      subject: confirmEmail.subject,
      html: confirmEmail.html
    });

    // Also notify admin of new subscriber
    await sendEmail({
      to: 'hello@sparkhost.ie',
      subject: `New Newsletter Subscriber: ${email}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; padding: 20px;">
          <h2>New Newsletter Subscriber</h2>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subscribed:</strong> ${new Date().toLocaleString('en-IE', { timeZone: 'Europe/Dublin' })}</p>
        </div>
      `
    });

    if (!result.success) {
      console.error('Newsletter signup email failed:', result.error);
      return new Response(
        JSON.stringify({
          success: false,
          error: 'Failed to confirm subscription. Please try again.'
        }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    return new Response(
      JSON.stringify({ success: true, message: 'Successfully subscribed!' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Newsletter signup error:', error);
    return new Response(
      JSON.stringify({
        success: false,
        error: 'An unexpected error occurred. Please try again.'
      }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
