---
title: "Brute Force Attacks on WordPress: How They Work and How to Stop Them"
excerpt: "Thousands of login attempts per day — that's what your WordPress site faces. Here's how brute force attacks work and how to protect against them."
publishedDate: "2024-11-01"
author: "SparkHost Team"
featured: false
---

Right now, automated bots are trying to log into your WordPress site. They're running through lists of common usernames and passwords, hoping to find a match. This happens constantly, to every WordPress site on the internet.

This is called a brute force attack. Understanding how they work helps you understand how to stop them.

## What Is a Brute Force Attack?

A brute force attack is exactly what it sounds like: forcing entry by trying many combinations until one works.

Attackers use automated tools to:
1. Target your WordPress login page (wp-login.php)
2. Try thousands of username/password combinations
3. Work through lists of common credentials
4. Eventually find working credentials (if you're vulnerable)

It's not sophisticated. It's not clever. But it works often enough to be worthwhile for attackers.

## Why Attackers Target WordPress

### It's Popular

WordPress powers 40%+ of all websites. Attackers develop tools once and use them across millions of targets.

### Login Pages Are Predictable

Every WordPress site has the same login URL: /wp-login.php (or /wp-admin redirecting there). Attackers don't need to find the door — they know where it is.

### Many Sites Have Weak Security

Default usernames, weak passwords, no rate limiting — common security failures make attacks viable.

### Automation Is Easy

One attacker with a botnet can attempt millions of logins across thousands of sites with minimal effort.

## The Scale of the Problem

A typical WordPress site receives:
- 500-1,000+ login attempts per week
- Attacks from hundreds of different IP addresses
- Attempts using common usernames (admin, administrator, your domain name)
- Password lists from previous data breaches

During attack campaigns, this can spike to thousands per day. Without protection, it's just a matter of time before weak credentials are found.

## What Happens After Successful Brute Force

Once attackers get in, they typically:

### Install Backdoors

Hidden files allowing future access even if password is changed.

### Inject Malware

Add code that:
- Redirects visitors to malicious sites
- Steals form data
- Sends spam email
- Mines cryptocurrency
- Attacks other sites

### Create Admin Accounts

New administrator accounts for persistent access.

### Modify Content

Add hidden links for SEO spam, phishing pages, or malvertising.

### Use for Further Attacks

Your server becomes a platform for attacking other sites.

## How to Protect Against Brute Force Attacks

### 1. Strong, Unique Passwords

The first defense is making passwords impossible to guess.

**Weak password examples:**
- password123
- admin2024
- companyname
- Welcome1!

**Strong password characteristics:**
- 16+ characters
- Random mix of types
- Not based on dictionary words
- Unique (not used elsewhere)

Use a password manager. Generate random passwords. Never reuse credentials.

### 2. Change Default Username

Never use "admin" as a username. It's the first thing attackers try.

To change an existing admin username:
1. Create a new administrator account with unique username
2. Log in with new account
3. Delete old "admin" account
4. Reassign content to new account

### 3. Limit Login Attempts

After 5-10 failed attempts, lock out that IP address for 15-30 minutes.

**Plugins that do this:**
- Wordfence
- Limit Login Attempts Reloaded
- Login LockDown
- WP Limit Login Attempts

This dramatically slows brute force attacks. Instead of trying 1,000 passwords per minute, attackers get 5 attempts every 30 minutes.

### 4. Two-Factor Authentication

Even if password is compromised, 2FA requires a second verification factor.

**Recommended plugins:**
- Wordfence Login Security
- Two-Factor
- Google Authenticator

Enable for all administrator and editor accounts at minimum.

### 5. CAPTCHA on Login

Add CAPTCHA to distinguish humans from bots.

**Options:**
- reCAPTCHA (Google)
- hCaptcha (privacy-focused alternative)
- Simple math problems

Bots can't solve CAPTCHAs effectively, blocking automated attacks.

### 6. Hide or Rename Login Page

Change /wp-login.php to something unique like /secret-login.

**Plugins:**
- WPS Hide Login
- Rename wp-login.php

This is security through obscurity — not a complete solution, but reduces automated attacks that target default URLs.

### 7. IP Whitelisting

If you always log in from the same IP addresses, restrict login page access.

In .htaccess:
```apache
<Files wp-login.php>
Order Deny,Allow
Deny from all
Allow from 123.45.67.89
</Files>
```

Replace with your actual IP. Multiple "Allow from" lines for multiple IPs.

**Caution:** If your IP changes (home broadband often does), you'll lock yourself out.

### 8. Disable XML-RPC

XML-RPC allows remote publishing but is often used in brute force attacks. It allows bulk authentication attempts in single requests.

Disable if not needed:

In .htaccess:
```apache
<Files xmlrpc.php>
Order Deny,Allow
Deny from all
</Files>
```

Or use a security plugin to disable it.

### 9. Web Application Firewall

A WAF blocks malicious requests before they reach WordPress.

**Options:**
- Cloudflare (free tier available)
- Sucuri
- Wordfence Premium
- Patchstack

WAFs can identify and block brute force attempts at network level, never touching your server.

### 10. Fail2Ban (Server Level)

For those with server access, Fail2Ban monitors logs and blocks attacking IPs at firewall level.

More effective than application-level blocking — attacks are stopped before reaching PHP.

## Detecting Brute Force Attacks

### Activity Logs

Security plugins log failed login attempts. Review regularly.

**What to look for:**
- Many failed attempts from same IP
- Attempts against common usernames
- Bursts of activity at unusual times
- Distributed attempts from many IPs

### Wordfence Live Traffic

Wordfence shows real-time traffic including login attempts, blocked requests, and attacking IPs.

### Server Logs

Access logs show requests to wp-login.php. Unusual patterns indicate attacks.

### Uptime Monitoring Alerts

Heavy attacks can slow servers. Performance monitoring may catch ongoing attacks.

## When You're Under Active Attack

During severe attacks:

### Temporary Measures

1. **Enable maintenance mode** — Reduces server load
2. **Block attacking IPs** — In .htaccess or firewall
3. **Change login URL** — Breaks attacker's targeting
4. **Rate limit more aggressively** — Tighter lockout policies

### Contact Your Host

Good hosts can:
- Block attacking IPs at network level
- Enable additional DDoS protection
- Investigate attack patterns
- Provide temporary IP blocking

### Check for Compromise

If attacks have been ongoing:
- Review administrator accounts for unknowns
- Scan for malware
- Check for backdoors
- Review recent file changes

## The SparkHost Security Stack

Our Managed hosting includes multiple brute force protections:

**Cloudflare:** Network-level attack mitigation
**LiteSpeed Security:** Server-level rate limiting
**Patchstack:** WordPress-specific threat intelligence
**Automatic blocking:** Aggressive IPs blocked automatically
**Monitoring:** We notice attacks and respond proactively

Most clients never know attacks are happening — they're blocked before reaching WordPress.

## Security Layering

No single measure stops all attacks. Layer multiple protections:

| Layer | Protection |
|-------|------------|
| Network | Cloudflare, firewall rules |
| Server | Fail2Ban, rate limiting |
| Application | Login attempt limits |
| Authentication | Strong passwords, 2FA |
| Monitoring | Activity logs, alerts |

Each layer catches what previous layers miss.

## Action Plan

**Today:**
1. Verify no "admin" username exists
2. Check passwords are strong and unique
3. Install login attempt limiting

**This Week:**
1. Enable two-factor authentication
2. Configure security plugin scanning
3. Review login activity logs

**Ongoing:**
1. Monitor for unusual activity
2. Keep security plugins updated
3. Review and remove unused accounts
4. Stay informed about new threats

Brute force attacks are inevitable. Successful ones don't have to be.
