---
title: "WordPress Troubleshooting: Fixing Common Problems Without Panic"
excerpt: "White screen? Error messages? Broken site? Here's how to systematically diagnose and fix common WordPress problems."
publishedDate: "2024-09-15"
author: "SparkHost Team"
featured: false
---

Something's wrong with your WordPress site. Maybe it's a white screen. Maybe it's an error message. Maybe nothing is loading at all. Your heart rate spikes. Your palms get sweaty.

Take a breath. Most WordPress problems have straightforward solutions. Here's how to diagnose and fix them systematically.

## The Golden Rule: Don't Panic, Document

Before touching anything:
1. Note exactly what's happening (screenshot error messages)
2. Note when it started (after an update? randomly?)
3. Note what you were doing when it happened
4. Check if the problem is everywhere or just one page

This information helps diagnose the issue and is essential if you need professional help.

## White Screen of Death (WSOD)

The infamous blank white screen. No error, no content, just white.

### Cause

Usually a PHP error that's being hidden instead of displayed.

### Diagnosis Steps

**Step 1: Enable Debug Mode**

Access wp-config.php via SFTP and change:
```php
define('WP_DEBUG', false);
```
to:
```php
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
define('WP_DEBUG_DISPLAY', false);
```

Check wp-content/debug.log for error messages.

**Step 2: Check PHP Error Log**

Your hosting control panel usually has error logs. Look for recent PHP errors.

**Step 3: Increase Memory Limit**

Add to wp-config.php:
```php
define('WP_MEMORY_LIMIT', '256M');
```

### Common Solutions

**Plugin conflict:**
1. Access files via SFTP
2. Rename wp-content/plugins to wp-content/plugins_old
3. Check if site loads
4. If yes, rename back and deactivate plugins one by one

**Theme issue:**
1. Via SFTP, rename your theme folder in wp-content/themes
2. WordPress will fall back to a default theme
3. If site loads, theme is the problem

**PHP version incompatibility:**
1. Check hosting for PHP version settings
2. Try a different PHP version (newer is usually better)

## Error Establishing Database Connection

You see: "Error establishing a database connection"

### Cause

WordPress can't connect to the MySQL database.

### Diagnosis Steps

**Step 1: Check wp-config.php**

Verify these values are correct:
```php
define('DB_NAME', 'your_database_name');
define('DB_USER', 'your_database_user');
define('DB_PASSWORD', 'your_database_password');
define('DB_HOST', 'localhost');
```

Get correct values from your hosting control panel.

**Step 2: Test Database Connection**

Create a test file in your WordPress root called test-db.php:
```php
<?php
$link = mysqli_connect('localhost', 'DB_USER', 'DB_PASSWORD', 'DB_NAME');
if (!$link) {
    die('Connection failed: ' . mysqli_connect_error());
}
echo 'Connected successfully';
mysqli_close($link);
?>
```

Replace with your actual credentials. Visit yoursite.ie/test-db.php. Delete the file after testing!

**Step 3: Check if Database Server is Running**

Contact your host. Database servers occasionally crash or restart.

### Common Solutions

- Correct wp-config.php credentials
- Recreate database user with proper permissions
- Wait for database server to restart
- Repair database via phpMyAdmin

## 500 Internal Server Error

A generic server error that could mean many things.

### Diagnosis Steps

**Step 1: Check Error Logs**

Server error logs usually reveal the specific cause.

**Step 2: Check .htaccess**

Rename .htaccess to .htaccess_old. Try loading the site. If it works, the .htaccess was corrupted.

Regenerate by visiting Settings > Permalinks and saving.

**Step 3: PHP Memory Limit**

Add to wp-config.php:
```php
define('WP_MEMORY_LIMIT', '256M');
```

Also check php.ini or .htaccess for memory limits.

### Common Causes

- Corrupted .htaccess
- PHP memory limit exceeded
- Plugin or theme PHP errors
- File permission issues
- Server configuration problems

## 403 Forbidden Error

Access denied to a page or resource.

### Common Causes

**File Permissions:**

Check WordPress file permissions:
- Directories: 755
- Files: 644
- wp-config.php: 600

**Security Plugin Rules:**

Security plugins can block legitimate access. Try deactivating temporarily.

**Server Security Rules:**

Your host's firewall may be blocking requests. Check hosting security settings.

**Empty Index Files:**

Some directories need index.php files to prevent directory listing errors.

## 404 Not Found (for pages that exist)

Pages that should exist return 404.

### Primary Cause

Permalink structure is broken.

### Solution

1. Go to Settings > Permalinks
2. Don't change anything
3. Just click Save Changes
4. This regenerates .htaccess

### If That Doesn't Work

Check .htaccess exists and contains:
```apache
# BEGIN WordPress
<IfModule mod_rewrite.c>
RewriteEngine On
RewriteBase /
RewriteRule ^index\.php$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.php [L]
</IfModule>
# END WordPress
```

On Nginx servers, ask your host about WordPress rewrite rules.

## Admin Lockout

You can't log in to WordPress admin.

### Forgot Password

Use the "Lost your password?" link on the login page.

If you don't receive the email:
1. Check spam folder
2. Check your hosting email settings
3. Reset password directly in database

**Database Password Reset:**

In phpMyAdmin, find wp_users table, find your user, edit, and change user_pass to a new password using MD5 function.

### Too Many Failed Attempts

If a security plugin locked you out:
1. Access files via SFTP
2. Rename the security plugin folder
3. Log in
4. Reconfigure security plugin

### Redirect Loop

If login keeps redirecting:
1. Clear browser cookies for your domain
2. Check wp-config.php for SITEURL/HOME settings
3. Check for plugin conflicts

## Site Redirecting to Wrong URL

Your site redirects to an old domain or wrong URL.

### Check WordPress Settings

In wp-config.php, add:
```php
define('WP_HOME','https://correctdomain.ie');
define('WP_SITEURL','https://correctdomain.ie');
```

### Check Database

In phpMyAdmin, check wp_options table for:
- siteurl
- home

Update if incorrect.

### Check .htaccess

Look for redirect rules pointing to old URLs.

## Slow Loading / Timing Out

Site loads extremely slowly or times out.

### Quick Checks

1. **Is it just your connection?** Try different network, check isitdown.ie
2. **Server status:** Check host status page
3. **Recent changes:** Did you install/update something?

### Common Causes

**Plugin hogging resources:**
1. Install Query Monitor plugin
2. Check for slow database queries
3. Check for slow external HTTP requests
4. Deactivate suspects one by one

**Hosting resource limits:**

Check hosting control panel for:
- CPU usage
- Memory usage
- I/O limits
- Traffic spikes

**External service issues:**

API calls to slow or down services can hang your site. Check:
- Payment gateways
- Email services
- Social media integrations
- Analytics loading

**Database issues:**

Run database optimisation. Check for bloated tables.

## Mixed Content / SSL Issues

Padlock shows warning or content doesn't load correctly.

### Diagnosis

Browser developer tools > Console shows mixed content warnings.

### Solutions

**Update URLs in database:**

Use Better Search Replace plugin:
- Search for: http://yoursite.ie
- Replace with: https://yoursite.ie
- Run on all tables

**Check wp-config.php:**

Ensure SITEURL uses https.

**Check .htaccess:**

Add redirect for HTTP to HTTPS.

**Use Really Simple SSL:**

This plugin fixes most mixed content issues automatically.

## Plugin or Theme Conflicts

Something broke after installing/updating.

### Diagnosis Method

**For plugins:**
1. Deactivate all plugins
2. Check if problem is resolved
3. Reactivate one by one until problem returns
4. That's your culprit

**For themes:**
1. Switch to a default theme (Twenty Twenty-Four)
2. Check if problem is resolved
3. If yes, theme is the issue

### Can't Access Admin?

**Via SFTP:**
1. Navigate to wp-content/plugins
2. Rename suspect plugin folder
3. WordPress auto-deactivates it

**For themes:**
1. Navigate to wp-content/themes
2. Rename your theme folder
3. WordPress uses a default theme

## When to Call for Help

Get professional help if:
- You're not comfortable with file/database access
- The problem persists after basic troubleshooting
- Data loss is possible
- Downtime is costing money
- You've made the problem worse

### What to Tell Support

- What exactly is happening (screenshots)
- When it started
- What changed before it started
- What you've already tried
- Access credentials they might need

## Preventive Measures

Avoid future emergencies:

1. **Keep regular backups** — Test that they work
2. **Use staging for updates** — Never update on production without testing
3. **One change at a time** — Easier to identify problems
4. **Document your setup** — Know your plugins, theme, configurations
5. **Monitor your site** — Know when problems start

## The SparkHost Advantage

Our managed hosting clients rarely experience these issues because:

- **We monitor proactively** — Problems detected before you notice
- **We test updates** — Staging prevents update disasters
- **We maintain backups** — Easy restoration if needed
- **We provide support** — Real WordPress experts, not script readers
- **We fix problems** — Troubleshooting is included in managed plans

But if you manage your own WordPress, keep this guide bookmarked. When panic hits, systematic troubleshooting beats flailing every time.
