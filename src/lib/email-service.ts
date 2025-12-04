import nodemailer from 'nodemailer';

// SMTP Configuration for Emailit
const transporter = nodemailer.createTransport({
  host: import.meta.env.SMTP_HOST || 'smtp.emailit.com',
  port: parseInt(import.meta.env.SMTP_PORT || '587'),
  secure: false, // TLS
  auth: {
    user: import.meta.env.SMTP_USER || 'emailit',
    pass: import.meta.env.SMTP_PASSWORD,
  },
});

export interface EmailOptions {
  to: string | string[];
  subject: string;
  html: string;
  from?: string;
  replyTo?: string;
}

export async function sendEmail(options: EmailOptions): Promise<{ success: boolean; error?: string }> {
  try {
    const mailOptions = {
      from: options.from || `SparkHost <hello@sparkhost.ie>`,
      to: Array.isArray(options.to) ? options.to.join(', ') : options.to,
      subject: options.subject,
      html: options.html,
      replyTo: options.replyTo,
    };

    await transporter.sendMail(mailOptions);
    return { success: true };
  } catch (error) {
    console.error('Email sending failed:', error);
    return {
      success: false,
      error: error instanceof Error ? error.message : 'Failed to send email'
    };
  }
}

// Verify SMTP connection
export async function verifyConnection(): Promise<boolean> {
  try {
    await transporter.verify();
    return true;
  } catch (error) {
    console.error('SMTP connection verification failed:', error);
    return false;
  }
}
