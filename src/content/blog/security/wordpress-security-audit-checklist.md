---
title: "WordPress Security Audit: A Comprehensive Checklist for Irish Businesses"
excerpt: "When did you last audit your WordPress security? Use this checklist to identify vulnerabilities before hackers do."
publishedDate: "2025-05-28"
author: "SparkHost Team"
featured: false
---

Most WordPress sites get hacked not because of sophisticated attacks, but because of basic security hygiene failures. Outdated plugins, weak passwords, default settings — the digital equivalent of leaving your keys in the door.

A security audit identifies these weaknesses before attackers do. Here's a comprehensive checklist you can use yourself.

## User Account Security

### Admin Username

**Check:** Is any account using "admin" as username?

The username "admin" is the first thing hackers try. While changing WordPress usernames isn't straightforward, it's worth doing:

1. Create a new administrator account with a unique username
2. Log in with the new account
3. Delete the old "admin" account, assigning its content to the new account

### Password Strength

**Check:** Do all users have strong, unique passwords?

Strong passwords are:
- At least 16 characters
- Mix of upper/lower case, numbers, symbols
- Not based on dictionary words
- Unique (not reused elsewhere)

Use a password manager. WordPress's built-in password generator creates strong passwords.

### Two-Factor Authentication

**Check:** Is 2FA enabled for all administrator accounts?

[Two-factor authentication](/blog/two-factor-authentication-wordpress) is your safety net when passwords fail. At minimum, enable for:
- Administrators
- Editors
- Anyone who can modify the site

Recommended plugins: Wordfence Login Security, Two-Factor.

### User Role Review

**Check:** Do users have appropriate permission levels?

Common problems:
- Former employees still having access
- Users with admin when editor would suffice
- Guest contributors with too many permissions

Review all users. Remove unused accounts. Apply principle of least privilege.

### Failed Login Protection

**Check:** Are login attempts limited?

Without limits, attackers can try thousands of passwords via [brute force attacks](/blog/brute-force-attacks-prevention). Configure:
- Lock out after 5-10 failed attempts
- Lock duration of 15-30 minutes
- Longer lockout after repeated failures

Most security plugins include this feature.

## Software Updates

### WordPress Core

**Check:** Is WordPress running the latest version?

Go to Dashboard > Updates. If you see a newer version available, update immediately (test on staging first for major updates).

Note: Minor/security updates should update automatically by default.

### Theme Updates

**Check:** Is your active theme current?

Check Appearance > Themes. Click your active theme and look for update options. Theme vulnerabilities are common attack vectors.

### Plugin Updates

**Check:** Are all plugins updated?

Go to Plugins. Any plugin with an update available is a potential vulnerability. Update regularly.

### PHP Version

**Check:** Is PHP version current?

Check in your hosting control panel or via Site Health. PHP 8.1 or 8.2 is current; PHP 7.4 is acceptable; anything older is a security risk.

## Plugin Security

### Plugin Quantity

**Check:** How many plugins are installed? How many are active?

More plugins = larger attack surface. Each plugin is potential vulnerability.

Delete any plugins you don't use. Deactivated plugins are still security risks.

### Plugin Sources

**Check:** Are all plugins from reputable sources?

Legitimate plugins come from:
- WordPress.org plugin directory
- Reputable commercial vendors (WooCommerce, Yoast, etc.)
- Known developers with track records

Never use nulled (pirated) premium plugins. They often contain malware.

### Last Updated Check

**Check:** When was each plugin last updated?

Go to Plugins > Installed. Check the WordPress.org listing for each plugin:
- Updated within 12 months: Good
- 12-24 months: Concerning
- Over 24 months: Consider alternatives

### Plugin Vulnerabilities

**Check:** Do any plugins have known vulnerabilities?

Check against:
- Patchstack vulnerability database
- WPScan vulnerability database
- Your security plugin alerts

Replace vulnerable plugins with secure alternatives.

## File Security

### File Permissions

**Check:** Are file permissions correctly set?

Standard WordPress permissions:
- Directories: 755
- Files: 644
- wp-config.php: 600 or 640

Anything with 777 permissions is a security risk.

### wp-config.php Security

**Check:** Is wp-config.php protected?

This file contains database credentials. It should:
- Not be accessible via browser
- Have restrictive file permissions
- Be located above web root if possible (some hosts support this)

### .htaccess Protection

**Check:** Is .htaccess securing sensitive files?

Your .htaccess should block direct access to sensitive files. Add:

```apache
<FilesMatch "^.*(error_log|wp-config\.php|php.ini|\.[hH][tT][aApP].*)$">
Order deny,allow
Deny from all
</FilesMatch>
```

### Directory Indexing

**Check:** Is directory browsing disabled?

Try visiting yoursite.ie/wp-content/uploads/ — you shouldn't see a file listing.

Add to .htaccess:
```apache
Options -Indexes
```

### Uploads Directory

**Check:** Can PHP execute in uploads?

The uploads directory should not execute PHP files. Add to wp-content/uploads/.htaccess:

```apache
<Files "*.php">
Order allow,deny
Deny from all
</Files>
```

## Database Security

### Database Prefix

**Check:** Is your database using the default 'wp_' prefix?

Default prefix makes SQL injection attacks easier. Changing after installation is complex, but for new sites, always use a custom prefix.

### Database User Permissions

**Check:** Does the database user have only necessary permissions?

The WordPress database user needs:
- SELECT, INSERT, UPDATE, DELETE
- CREATE, ALTER, DROP (for updates)

It should NOT have:
- GRANT
- FILE

### Database Backups

**Check:** Are database backups running regularly?

Verify:
- Backups run daily (minimum)
- Backups are stored off-server
- Backups can actually be restored (test this!)

## Server and Hosting Security

### SSL Certificate

**Check:** Is [HTTPS enforced](/blog/ssl-certificates-explained)?

Visit your site via HTTP. It should redirect to HTTPS. All pages should load securely without mixed content warnings.

### HTTP Security Headers

**Check:** Are security headers configured?

Test at securityheaders.com. Key headers:

- **Strict-Transport-Security:** Forces HTTPS
- **X-Content-Type-Options:** Prevents MIME sniffing
- **X-Frame-Options:** Prevents clickjacking
- **Content-Security-Policy:** Controls resource loading

### Server Information Disclosure

**Check:** Is server version information hidden?

Try to find Apache/Nginx version, PHP version in headers. This information helps attackers target known vulnerabilities.

### Debug Mode

**Check:** Is WP_DEBUG disabled on production?

In wp-config.php, ensure:
```php
define('WP_DEBUG', false);
```

Debug mode can expose sensitive information to attackers.

### Error Display

**Check:** Are PHP errors hidden from visitors?

PHP errors can reveal file paths and other sensitive information. Errors should be logged, not displayed.

### File Editing

**Check:** Is file editing disabled?

The WordPress dashboard file editor lets anyone with admin access modify theme and plugin files. Disable it:

```php
define('DISALLOW_FILE_EDIT', true);
```

## Access Controls

### Login Page Protection

**Check:** Is the login page protected?

Consider:
- Rename login URL (WPS Hide Login plugin)
- Add CAPTCHA to login form
- Limit login attempts
- Add firewall rules for login page

### XML-RPC

**Check:** Is XML-RPC disabled if not needed?

XML-RPC enables remote publishing but is often used in attacks. If you don't use mobile apps or remote publishing, disable it:

```php
add_filter('xmlrpc_enabled', '__return_false');
```

Or block via .htaccess.

### REST API

**Check:** Is REST API restricted appropriately?

The REST API can expose information. Consider restricting anonymous access if not needed for your site functionality.

### Author Archives

**Check:** Do author archives expose usernames?

Visiting yoursite.ie/?author=1 can reveal usernames. Consider disabling author archives or using slugs that don't match login usernames.

## Monitoring and Logging

### Activity Logging

**Check:** Is user activity being logged?

Know who did what, when. Essential for:
- Identifying compromised accounts
- Tracking changes
- Forensics after incidents

Plugins: WP Activity Log, Simple History.

### File Change Detection

**Check:** Are file changes monitored?

Know when files are modified unexpectedly. Most security plugins include file integrity monitoring.

### Security Scanning

**Check:** Is malware scanning active?

Regular scans detect:
- Malware injection
- Modified core files
- Suspicious code patterns
- Known malicious signatures

### Uptime Monitoring

**Check:** Will you know if the site goes down?

Set up external monitoring (UptimeRobot, Pingdom) to alert you immediately when your site has issues.

## Backup and Recovery

### Backup Frequency

**Check:** How often are [backups](/blog/wordpress-backup-strategy) created?

Minimum: Daily
Better: Multiple times daily for active sites
E-commerce: Consider real-time or hourly

### Backup Storage

**Check:** Where are backups stored?

Backups on the same server are useless if the server fails. Store backups:
- On external cloud storage (S3, Google Drive, Dropbox)
- Downloaded locally
- Multiple locations

### Backup Testing

**Check:** Have you tested backup restoration?

Untested backups might not work. Regularly test:
- Can you access backup files?
- Can you restore to a test environment?
- Is the restoration complete and functional?

### Disaster Recovery Plan

**Check:** Do you have a documented recovery plan?

Know what to do when things go wrong:
- Who to contact
- Steps to restore
- Communication plan
- Timeline expectations

## Firewall Protection

### Web Application Firewall

**Check:** Is a [WAF active](/blog/wordpress-firewall-guide)?

WAFs block common attacks before they reach WordPress:
- SQL injection
- Cross-site scripting (XSS)
- Known exploit attempts

Options: Cloudflare, Wordfence, Sucuri, Patchstack.

### Firewall Rules

**Check:** Are firewall rules current?

Firewall rules need updating as new vulnerabilities emerge. Managed WAFs update automatically; plugin-based firewalls may need updates.

### Country Blocking

**Check:** Should you block traffic from specific countries?

If your business only serves Ireland, blocking traffic from countries with high attack rates can reduce exposure. Consider carefully as legitimate users may be blocked.

## Creating Your Security Routine

### Weekly Tasks

- Review login attempts
- Check for plugin/theme updates
- Verify backups completed
- Review security scan results

### Monthly Tasks

- Full security audit (this checklist)
- Review user accounts
- Test backup restoration
- Check security headers

### Quarterly Tasks

- Review and update security policies
- Test disaster recovery procedures
- Audit third-party access
- Security training refresher

## The SparkHost Security Stack

On our Managed plans, we handle security proactively:

- **Automatic updates** — Core, themes, plugins kept current
- **Patchstack WAF** — Enterprise-level protection included
- **Daily malware scanning** — Threats detected early
- **Activity logging** — Full audit trail
- **Security monitoring** — We watch for threats 24/7
- **Incident response** — We handle security emergencies

Security isn't a one-time setup. It's an ongoing practice. Whether you manage it yourself or let us handle it, the important thing is that someone is paying attention.

## Take Action

Print this checklist. Work through it systematically. Fix issues as you find them.

Then schedule regular security audits. Put it in your calendar. Make it a habit.

The best time to improve security was before you got hacked. The second best time is now. If you suspect your site has been compromised, see our [malware removal guide](/blog/wordpress-malware-removal-guide).
