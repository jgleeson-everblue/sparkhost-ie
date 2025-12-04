// SparkHost Email Templates
// Brand Colors: #F43654 (spark-red), #F48C54 (spark-orange)

const baseStyles = `
  body {
    margin: 0;
    padding: 0;
    background-color: #0F1419;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    color: #ffffff;
  }
  .wrapper {
    width: 100%;
    background-color: #0F1419;
    padding: 40px 20px;
  }
  .container {
    max-width: 600px;
    margin: 0 auto;
    background-color: #1A1F26;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.3);
  }
  .header {
    background: linear-gradient(135deg, #F43654 0%, #F48C54 100%);
    padding: 32px 40px;
    text-align: center;
  }
  .logo {
    height: 40px;
    margin-bottom: 8px;
  }
  .content {
    padding: 40px;
  }
  .content h1 {
    color: #ffffff;
    font-size: 24px;
    font-weight: 700;
    margin: 0 0 16px 0;
    line-height: 1.3;
  }
  .content p {
    color: rgba(255, 255, 255, 0.7);
    font-size: 16px;
    line-height: 1.6;
    margin: 0 0 16px 0;
  }
  .content .highlight {
    color: #F48C54;
    font-weight: 600;
  }
  .divider {
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
    margin: 24px 0;
  }
  .details-box {
    background-color: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 12px;
    padding: 24px;
    margin: 24px 0;
  }
  .details-box h3 {
    color: #F48C54;
    font-size: 14px;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.5px;
    margin: 0 0 16px 0;
  }
  .detail-row {
    display: flex;
    margin-bottom: 12px;
  }
  .detail-label {
    color: rgba(255, 255, 255, 0.5);
    font-size: 14px;
    width: 120px;
    flex-shrink: 0;
  }
  .detail-value {
    color: #ffffff;
    font-size: 14px;
    font-weight: 500;
  }
  .button {
    display: inline-block;
    background: linear-gradient(135deg, #F43654 0%, #F48C54 100%);
    color: #ffffff !important;
    font-size: 16px;
    font-weight: 600;
    text-decoration: none;
    padding: 14px 32px;
    border-radius: 50px;
    margin: 24px 0;
  }
  .button:hover {
    opacity: 0.9;
  }
  .footer {
    background-color: rgba(0, 0, 0, 0.2);
    padding: 32px 40px;
    text-align: center;
  }
  .footer p {
    color: rgba(255, 255, 255, 0.4);
    font-size: 13px;
    margin: 0 0 8px 0;
  }
  .footer a {
    color: #F48C54;
    text-decoration: none;
  }
  .social-links {
    margin-top: 16px;
  }
  .social-links a {
    display: inline-block;
    margin: 0 8px;
    color: rgba(255, 255, 255, 0.5);
  }
  .badge {
    display: inline-block;
    background: rgba(244, 54, 84, 0.15);
    color: #F43654;
    font-size: 12px;
    font-weight: 600;
    padding: 4px 12px;
    border-radius: 50px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
  }
  .message-box {
    background-color: rgba(255, 255, 255, 0.03);
    border-left: 3px solid #F48C54;
    padding: 20px;
    margin: 24px 0;
    border-radius: 0 8px 8px 0;
  }
  .message-box p {
    color: rgba(255, 255, 255, 0.8);
    margin: 0;
    font-style: italic;
  }
`;

// Logo as inline SVG for email (simplified version)
const logoSvg = `
<svg width="180" height="32" viewBox="0 0 180 32" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="spark-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#F43654"/>
      <stop offset="100%" style="stop-color:#F48C54"/>
    </linearGradient>
  </defs>
  <!-- Spark icon simplified -->
  <path d="M8 16L16 4L12 14H24L16 28L20 18H8V16Z" fill="url(#spark-gradient)"/>
  <!-- SparkHost text -->
  <text x="32" y="22" font-family="-apple-system, BlinkMacSystemFont, sans-serif" font-size="20" font-weight="700" fill="white">SparkHost</text>
</svg>
`;

// Base template wrapper
function wrapInTemplate(content: string, preheader: string = ''): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>SparkHost.ie</title>
  <style>${baseStyles}</style>
</head>
<body>
  ${preheader ? `<div style="display:none;max-height:0;overflow:hidden;">${preheader}</div>` : ''}
  <div class="wrapper">
    <div class="container">
      <div class="header">
        <img src="https://sparkhost.ie/sparkhost-light.svg" alt="SparkHost.ie" class="logo" style="height: 40px;">
      </div>
      ${content}
      <div class="footer">
        <p>SparkHost.ie - Premium WordPress Hosting for Irish Businesses</p>
        <p><a href="https://sparkhost.ie">sparkhost.ie</a> | <a href="mailto:hello@sparkhost.ie">hello@sparkhost.ie</a></p>
        <p style="margin-top: 16px; font-size: 11px;">
          You're receiving this because you contacted SparkHost.ie<br>
          Dublin, Ireland
        </p>
      </div>
    </div>
  </div>
</body>
</html>
`;
}

// USER EMAIL: Contact Form Confirmation
export function userContactConfirmation(data: {
  name: string;
  email: string;
  message: string;
  subject?: string;
}): { subject: string; html: string } {
  const content = `
    <div class="content">
      <span class="badge">Message Received</span>
      <h1 style="margin-top: 16px;">Thanks for reaching out, ${data.name}!</h1>
      <p>We've received your message and will get back to you within 24 hours (usually much sooner during business hours).</p>

      <div class="details-box">
        <h3>Your Message Details</h3>
        ${data.subject ? `
        <div style="margin-bottom: 12px;">
          <span style="color: rgba(255,255,255,0.5); font-size: 14px;">Subject:</span>
          <span style="color: #fff; font-size: 14px; margin-left: 8px;">${data.subject}</span>
        </div>
        ` : ''}
        <div style="margin-bottom: 12px;">
          <span style="color: rgba(255,255,255,0.5); font-size: 14px;">Email:</span>
          <span style="color: #fff; font-size: 14px; margin-left: 8px;">${data.email}</span>
        </div>
      </div>

      <div class="message-box">
        <p>"${data.message}"</p>
      </div>

      <div class="divider"></div>

      <p>In the meantime, here are some helpful resources:</p>
      <p>
        <a href="https://sparkhost.ie/pricing" style="color: #F48C54;">View our hosting plans →</a><br>
        <a href="https://sparkhost.ie/blog" style="color: #F48C54;">Read our WordPress tips →</a><br>
        <a href="https://sparkhost.ie/faq" style="color: #F48C54;">Check our FAQ →</a>
      </p>
    </div>
  `;

  return {
    subject: `Thanks for contacting SparkHost, ${data.name}!`,
    html: wrapInTemplate(content, `Thanks for reaching out! We'll respond within 24 hours.`)
  };
}

// ADMIN EMAIL: New Contact Form Submission
export function adminContactNotification(data: {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  website?: string;
  subject?: string;
  message: string;
  plan?: string;
  timestamp: string;
}): { subject: string; html: string } {
  const content = `
    <div class="content">
      <span class="badge" style="background: rgba(34, 197, 94, 0.15); color: #22C55E;">New Lead</span>
      <h1 style="margin-top: 16px;">New Contact Form Submission</h1>
      <p>A new enquiry has been received from the SparkHost website.</p>

      <div class="details-box">
        <h3>Contact Information</h3>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="color: rgba(255,255,255,0.5); font-size: 14px; padding: 8px 0; width: 120px;">Name</td>
            <td style="color: #fff; font-size: 14px; padding: 8px 0; font-weight: 500;">${data.name}</td>
          </tr>
          <tr>
            <td style="color: rgba(255,255,255,0.5); font-size: 14px; padding: 8px 0;">Email</td>
            <td style="color: #F48C54; font-size: 14px; padding: 8px 0;"><a href="mailto:${data.email}" style="color: #F48C54; text-decoration: none;">${data.email}</a></td>
          </tr>
          ${data.phone ? `
          <tr>
            <td style="color: rgba(255,255,255,0.5); font-size: 14px; padding: 8px 0;">Phone</td>
            <td style="color: #fff; font-size: 14px; padding: 8px 0;"><a href="tel:${data.phone}" style="color: #F48C54; text-decoration: none;">${data.phone}</a></td>
          </tr>
          ` : ''}
          ${data.company ? `
          <tr>
            <td style="color: rgba(255,255,255,0.5); font-size: 14px; padding: 8px 0;">Company</td>
            <td style="color: #fff; font-size: 14px; padding: 8px 0;">${data.company}</td>
          </tr>
          ` : ''}
          ${data.website ? `
          <tr>
            <td style="color: rgba(255,255,255,0.5); font-size: 14px; padding: 8px 0;">Website</td>
            <td style="color: #F48C54; font-size: 14px; padding: 8px 0;"><a href="${data.website}" style="color: #F48C54; text-decoration: none;">${data.website}</a></td>
          </tr>
          ` : ''}
          ${data.plan ? `
          <tr>
            <td style="color: rgba(255,255,255,0.5); font-size: 14px; padding: 8px 0;">Interested Plan</td>
            <td style="color: #F48C54; font-size: 14px; padding: 8px 0; font-weight: 600;">${data.plan}</td>
          </tr>
          ` : ''}
          ${data.subject ? `
          <tr>
            <td style="color: rgba(255,255,255,0.5); font-size: 14px; padding: 8px 0;">Subject</td>
            <td style="color: #fff; font-size: 14px; padding: 8px 0;">${data.subject}</td>
          </tr>
          ` : ''}
          <tr>
            <td style="color: rgba(255,255,255,0.5); font-size: 14px; padding: 8px 0;">Received</td>
            <td style="color: rgba(255,255,255,0.6); font-size: 14px; padding: 8px 0;">${data.timestamp}</td>
          </tr>
        </table>
      </div>

      <div class="message-box">
        <h3 style="color: #F48C54; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">MESSAGE</h3>
        <p style="font-style: normal; white-space: pre-wrap;">${data.message}</p>
      </div>

      <div style="text-align: center;">
        <a href="mailto:${data.email}?subject=Re: Your SparkHost Enquiry" class="button">Reply to ${data.name}</a>
      </div>
    </div>
  `;

  const subjectLine = data.subject
    ? `[SparkHost Lead] ${data.subject} - ${data.name}`
    : `[SparkHost Lead] New enquiry from ${data.name}`;

  return {
    subject: subjectLine,
    html: wrapInTemplate(content, `New contact form submission from ${data.name} (${data.email})`)
  };
}

// USER EMAIL: Get Started / Quote Request Confirmation
export function userQuoteConfirmation(data: {
  name: string;
  email: string;
  plan: string;
  website?: string;
}): { subject: string; html: string } {
  const content = `
    <div class="content">
      <span class="badge">Quote Request Received</span>
      <h1 style="margin-top: 16px;">Great choice, ${data.name}!</h1>
      <p>Thanks for your interest in the <span class="highlight">${data.plan}</span> plan. We'll review your request and get back to you with a personalised quote within 24 hours.</p>

      ${data.website ? `
      <div class="details-box">
        <h3>We'll be reviewing</h3>
        <p style="margin: 0;"><a href="${data.website}" style="color: #F48C54; text-decoration: none;">${data.website}</a></p>
      </div>
      ` : ''}

      <div class="divider"></div>

      <h3 style="color: #fff; font-size: 18px; margin-bottom: 16px;">What happens next?</h3>
      <table style="width: 100%;">
        <tr>
          <td style="padding: 12px 0; vertical-align: top; width: 40px;">
            <span style="display: inline-block; width: 28px; height: 28px; background: linear-gradient(135deg, #F43654, #F48C54); border-radius: 50%; text-align: center; line-height: 28px; font-size: 14px; font-weight: 600; color: #fff;">1</span>
          </td>
          <td style="padding: 12px 0; vertical-align: top;">
            <strong style="color: #fff;">We review your requirements</strong>
            <p style="margin: 4px 0 0 0; color: rgba(255,255,255,0.6); font-size: 14px;">We'll look at your current setup and hosting needs.</p>
          </td>
        </tr>
        <tr>
          <td style="padding: 12px 0; vertical-align: top;">
            <span style="display: inline-block; width: 28px; height: 28px; background: linear-gradient(135deg, #F43654, #F48C54); border-radius: 50%; text-align: center; line-height: 28px; font-size: 14px; font-weight: 600; color: #fff;">2</span>
          </td>
          <td style="padding: 12px 0; vertical-align: top;">
            <strong style="color: #fff;">We send your quote</strong>
            <p style="margin: 4px 0 0 0; color: rgba(255,255,255,0.6); font-size: 14px;">A clear breakdown of costs with no hidden fees.</p>
          </td>
        </tr>
        <tr>
          <td style="padding: 12px 0; vertical-align: top;">
            <span style="display: inline-block; width: 28px; height: 28px; background: linear-gradient(135deg, #F43654, #F48C54); border-radius: 50%; text-align: center; line-height: 28px; font-size: 14px; font-weight: 600; color: #fff;">3</span>
          </td>
          <td style="padding: 12px 0; vertical-align: top;">
            <strong style="color: #fff;">Free migration included</strong>
            <p style="margin: 4px 0 0 0; color: rgba(255,255,255,0.6); font-size: 14px;">We handle the technical work. Zero downtime.</p>
          </td>
        </tr>
      </table>

      <p style="margin-top: 24px;">Questions? Just reply to this email — we're real people and we're here to help.</p>
    </div>
  `;

  return {
    subject: `Your SparkHost ${data.plan} quote request`,
    html: wrapInTemplate(content, `Thanks for requesting a quote for the ${data.plan} plan!`)
  };
}

// ADMIN EMAIL: New Quote/Get Started Request
export function adminQuoteNotification(data: {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  website?: string;
  plan: string;
  currentHost?: string;
  message?: string;
  timestamp: string;
}): { subject: string; html: string } {
  const content = `
    <div class="content">
      <span class="badge" style="background: rgba(59, 130, 246, 0.15); color: #3B82F6;">Quote Request</span>
      <h1 style="margin-top: 16px;">New ${data.plan} Plan Request</h1>
      <p>A potential customer is interested in the <span class="highlight">${data.plan}</span> plan.</p>

      <div class="details-box">
        <h3>Customer Details</h3>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="color: rgba(255,255,255,0.5); font-size: 14px; padding: 8px 0; width: 120px;">Name</td>
            <td style="color: #fff; font-size: 14px; padding: 8px 0; font-weight: 500;">${data.name}</td>
          </tr>
          <tr>
            <td style="color: rgba(255,255,255,0.5); font-size: 14px; padding: 8px 0;">Email</td>
            <td style="color: #F48C54; font-size: 14px; padding: 8px 0;"><a href="mailto:${data.email}" style="color: #F48C54; text-decoration: none;">${data.email}</a></td>
          </tr>
          ${data.phone ? `
          <tr>
            <td style="color: rgba(255,255,255,0.5); font-size: 14px; padding: 8px 0;">Phone</td>
            <td style="color: #fff; font-size: 14px; padding: 8px 0;"><a href="tel:${data.phone}" style="color: #F48C54; text-decoration: none;">${data.phone}</a></td>
          </tr>
          ` : ''}
          ${data.company ? `
          <tr>
            <td style="color: rgba(255,255,255,0.5); font-size: 14px; padding: 8px 0;">Company</td>
            <td style="color: #fff; font-size: 14px; padding: 8px 0;">${data.company}</td>
          </tr>
          ` : ''}
          ${data.website ? `
          <tr>
            <td style="color: rgba(255,255,255,0.5); font-size: 14px; padding: 8px 0;">Website</td>
            <td style="color: #F48C54; font-size: 14px; padding: 8px 0;"><a href="${data.website}" style="color: #F48C54; text-decoration: none;">${data.website}</a></td>
          </tr>
          ` : ''}
          ${data.currentHost ? `
          <tr>
            <td style="color: rgba(255,255,255,0.5); font-size: 14px; padding: 8px 0;">Current Host</td>
            <td style="color: #fff; font-size: 14px; padding: 8px 0;">${data.currentHost}</td>
          </tr>
          ` : ''}
          <tr>
            <td style="color: rgba(255,255,255,0.5); font-size: 14px; padding: 8px 0;">Requested Plan</td>
            <td style="font-size: 14px; padding: 8px 0;"><span style="background: linear-gradient(135deg, #F43654, #F48C54); color: #fff; padding: 4px 12px; border-radius: 50px; font-weight: 600;">${data.plan}</span></td>
          </tr>
          <tr>
            <td style="color: rgba(255,255,255,0.5); font-size: 14px; padding: 8px 0;">Received</td>
            <td style="color: rgba(255,255,255,0.6); font-size: 14px; padding: 8px 0;">${data.timestamp}</td>
          </tr>
        </table>
      </div>

      ${data.message ? `
      <div class="message-box">
        <h3 style="color: #F48C54; font-size: 14px; font-weight: 600; margin: 0 0 12px 0;">ADDITIONAL NOTES</h3>
        <p style="font-style: normal; white-space: pre-wrap;">${data.message}</p>
      </div>
      ` : ''}

      <div style="text-align: center;">
        <a href="mailto:${data.email}?subject=Your SparkHost ${data.plan} Quote" class="button">Send Quote</a>
      </div>
    </div>
  `;

  return {
    subject: `[SparkHost Quote] ${data.plan} plan request from ${data.name}`,
    html: wrapInTemplate(content, `New quote request for ${data.plan} plan from ${data.name}`)
  };
}

// Newsletter Subscription Confirmation
export function userNewsletterConfirmation(data: {
  email: string;
}): { subject: string; html: string } {
  const content = `
    <div class="content">
      <span class="badge">Subscribed</span>
      <h1 style="margin-top: 16px;">You're on the list! 🎉</h1>
      <p>Welcome to the SparkHost newsletter. You'll receive occasional updates on WordPress security, performance tips, and hosting insights.</p>

      <div class="details-box" style="text-align: center;">
        <p style="margin: 0; color: #fff;">Subscribed email:</p>
        <p style="margin: 8px 0 0 0; color: #F48C54; font-weight: 600;">${data.email}</p>
      </div>

      <div class="divider"></div>

      <p>We respect your inbox — expect only valuable content, no spam. You can unsubscribe anytime.</p>

      <p style="margin-top: 24px;">
        <a href="https://sparkhost.ie/blog" class="button">Read Our Latest Posts</a>
      </p>
    </div>
  `;

  return {
    subject: `Welcome to SparkHost updates!`,
    html: wrapInTemplate(content, `You're now subscribed to SparkHost WordPress tips and updates.`)
  };
}
