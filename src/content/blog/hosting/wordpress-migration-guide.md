---
title: "WordPress Migration Guide: Moving Your Site Without Disaster"
excerpt: "Switching hosts? Migrating WordPress can be smooth or catastrophic. Here's how to ensure yours goes well."
publishedDate: "2024-07-01"
author: "SparkHost Team"
featured: false
---

Migrating a WordPress site feels risky because it is risky. Move files wrong, and your site disappears. Mess up the database, and your content vanishes. Forget about DNS, and your domain points to nothing.

But migration doesn't have to be stressful. With proper planning and the right approach, moving WordPress is straightforward. Here's how to do it properly.

## Why Migrate?

Common reasons to move hosts:

- **Performance issues** — Current hosting is slow
- **Reliability problems** — Too much downtime
- **Poor support** — Can't get help when needed
- **Cost** — Better value elsewhere
- **Features** — Need capabilities current host lacks
- **Location** — Want servers closer to your audience
- **Security concerns** — Current host has inadequate protection

Whatever your reason, the migration process is the same.

## Pre-Migration Checklist

Before touching anything:

### 1. Document Your Current Setup

Record:
- WordPress version
- PHP version
- Active plugins and versions
- Active theme and version
- Any server-specific configurations
- Custom code or modifications
- Email setup (MX records, email hosting)
- Subdomains or additional domains

### 2. Create a Full Backup

Make a complete backup of:
- All WordPress files
- The database
- wp-config.php configuration
- Any custom .htaccess rules

Store this backup locally, not just on your server. Use UpdraftPlus, Duplicator, or your host's backup system.

### 3. Check Your New Host

Verify your new hosting has:
- Sufficient storage and bandwidth
- Compatible PHP version
- MySQL or MariaDB database support
- SSH/SFTP access
- Required PHP extensions
- SSL certificate ready

### 4. Plan the Timing

Choose a low-traffic period:
- Late evening or early morning
- Avoid product launches or campaigns
- Give yourself more time than you think you need

### 5. Inform Stakeholders

Let your team know:
- When migration will happen
- Expected downtime (if any)
- Who to contact if issues arise
- Not to make content changes during migration

## Migration Methods

### Method 1: Migration Plugin (Easiest)

Plugins automate the process and work well for most sites.

**All-in-One WP Migration:**
1. Install on current site
2. Export (creates a downloadable file)
3. Install WordPress and the plugin on new host
4. Import the file
5. Update URLs and permalinks

**Duplicator:**
1. Create package on current site
2. Download package and installer
3. Upload both to new host
4. Run installer
5. Follow prompts

**Migrate Guru:**
1. Install on current site
2. Enter new host details
3. Plugin handles the transfer directly
4. Minimal local file handling

### Method 2: Manual Migration

For those comfortable with technical steps:

**Step 1: Export the database**
- Access phpMyAdmin on current host
- Select your WordPress database
- Export as SQL file

**Step 2: Download files**
- Connect via SFTP
- Download entire WordPress directory
- Preserve file structure

**Step 3: Create new environment**
- Create database on new host
- Create database user with full permissions
- Set up domain/subdomain

**Step 4: Upload files**
- Upload all WordPress files to new host
- Set correct file permissions (755 for directories, 644 for files)

**Step 5: Import database**
- Access phpMyAdmin on new host
- Import the SQL file
- Note any errors

**Step 6: Update wp-config.php**
- Edit wp-config.php with new database credentials:
  - DB_NAME
  - DB_USER
  - DB_PASSWORD
  - DB_HOST

**Step 7: Update URLs**
- If domain is changing, update database URLs
- Use Better Search Replace plugin or WP-CLI

### Method 3: Host-Provided Migration

Many managed hosts offer free migration:
- They handle the technical work
- They verify everything works
- They minimise downtime
- They fix issues that arise

This is often the best option for important sites.

## DNS Migration

The trickiest part of migration is DNS — pointing your domain to the new server.

### Option 1: Update A Records

Change your domain's A record to point to your new server's IP address.

- Log into your domain registrar
- Find DNS settings
- Update A record with new IP
- Wait for propagation (up to 48 hours, usually faster)

### Option 2: Change Nameservers

Point your domain to your new host's nameservers.

- Host provides nameserver addresses
- Update at your registrar
- New host manages all DNS

### Minimising Downtime

**Lower TTL in advance:**
1. One week before migration, lower DNS TTL to 300 seconds
2. This means DNS changes propagate faster when you switch
3. After migration, return TTL to normal (3600-86400)

**Use temporary URL for testing:**
1. Complete migration using new host's temporary URL
2. Test everything thoroughly
3. Only then update DNS
4. No downtime during testing phase

## Post-Migration Checklist

After migration, verify everything:

### Functionality Testing

- [ ] Homepage loads correctly
- [ ] All pages accessible
- [ ] Navigation works
- [ ] Images display
- [ ] Forms submit and send emails
- [ ] User login works
- [ ] Admin area accessible
- [ ] Search functions
- [ ] Comments work (if enabled)

### WooCommerce Testing

- [ ] Products display correctly
- [ ] Add to cart works
- [ ] Checkout loads
- [ ] Payment gateway connects (use test mode)
- [ ] Order confirmation works
- [ ] Admin can view orders

### Performance Verification

- [ ] Run PageSpeed Insights
- [ ] Check actual load times
- [ ] Verify caching is working
- [ ] Compare to pre-migration benchmarks

### Email Testing

- [ ] Contact form sends email
- [ ] WordPress notifications send
- [ ] WooCommerce order emails work
- [ ] Check MX records if email hosting changed

### SSL Verification

- [ ] Site loads via HTTPS
- [ ] No mixed content warnings
- [ ] Certificate is valid
- [ ] Redirects from HTTP work

### SEO Verification

- [ ] Submit new sitemap to Google Search Console
- [ ] Check for crawl errors
- [ ] Verify robots.txt is correct
- [ ] Confirm canonical URLs

## Common Migration Problems

### White Screen of Death

**Causes:**
- PHP version mismatch
- Database connection failure
- File permissions wrong
- Plugin incompatibility

**Solutions:**
- Check error logs on new server
- Verify wp-config.php credentials
- Reset file permissions
- Deactivate plugins via SFTP

### Images Not Displaying

**Causes:**
- Incorrect file permissions
- Hardcoded URLs in database
- .htaccess issues
- Missing uploads folder

**Solutions:**
- Check wp-content/uploads permissions
- Run search and replace on URLs
- Check .htaccess for errors
- Verify uploads directory exists

### Database Connection Error

**Causes:**
- Wrong credentials in wp-config.php
- Database not created
- Different database host (not 'localhost')
- User privileges not set

**Solutions:**
- Double-check DB_NAME, DB_USER, DB_PASSWORD
- Verify database exists in new hosting
- Check if DB_HOST needs specific value
- Ensure database user has all privileges

### Broken Permalinks

**Causes:**
- .htaccess not transferred
- mod_rewrite not enabled
- Nginx configuration needed

**Solutions:**
- Visit Settings > Permalinks and re-save
- Check .htaccess contains WordPress rules
- Ask host about URL rewriting

### Site Loads Old Content

**Causes:**
- DNS still pointing to old server
- Browser caching old version
- CDN serving old content

**Solutions:**
- Check DNS propagation (whatsmydns.net)
- Clear browser cache or use incognito
- Purge CDN cache

### SSL Certificate Errors

**Causes:**
- Certificate not issued yet
- DNS not yet propagated
- Mixed content issues

**Solutions:**
- Wait for DNS propagation then issue certificate
- Use Really Simple SSL to fix mixed content
- Verify SSL settings with new host

## When to Get Professional Help

Consider professional migration services if:

- Site is large (many GB of files)
- Database is complex or very large
- Multiple domains or multisite setup
- E-commerce with ongoing transactions
- You can't afford extended downtime
- Previous migration attempts failed
- Technical steps feel overwhelming

Professional migrations typically cost €50-200 and save significant stress.

## How SparkHost Handles Migrations

When clients migrate to SparkHost:

1. **We do it free** — No migration fees
2. **We handle everything** — No technical work for you
3. **We test thoroughly** — Before going live
4. **We minimise downtime** — Usually under 30 minutes
5. **We fix issues** — Any problems are our responsibility
6. **We optimise** — Caching, performance, security configured

Simply provide current hosting access, and we take care of the rest.

## Your Migration Timeline

**Week before:**
- Document current setup
- Create full backup
- Lower DNS TTL
- Set up new hosting account
- Inform team of planned migration

**Migration day:**
- Create fresh backup
- Perform migration
- Test on temporary URL
- Update DNS
- Monitor for issues

**Day after:**
- Verify DNS fully propagated
- Test all functionality again
- Check emails are working
- Monitor for errors

**Week after:**
- Confirm Google Search Console shows no issues
- Check analytics for any anomalies
- Cancel old hosting account
- Return DNS TTL to normal

Migration doesn't have to be scary. With proper preparation and careful execution, your WordPress site can move to a new home smoothly.
