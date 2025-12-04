---
title: "WordPress Database Optimisation: Clean Up the Clutter Slowing Your Site"
excerpt: "Your WordPress database accumulates junk over time. Here's how to clean it up, optimise performance, and keep it running smoothly."
publishedDate: "2025-08-13"
author: "SparkHost Team"
featured: false
---

Every WordPress site has a database problem it doesn't know about. While you've been publishing content, installing plugins, and running your business, your database has been quietly filling with data you don't need.

Post revisions from three years ago. Spam comments. Orphaned metadata. Transient caches that never expired. The digital equivalent of never cleaning out your garage.

This accumulated crud slows down your site. Every database query has to wade through more data than necessary, and backups take longer than they should.

Time for a spring clean.

## Understanding the WordPress Database

WordPress stores everything in a MySQL database — your posts, pages, comments, settings, user data, and more. By default, it creates 12 core tables:

- **wp_posts** — All content (posts, pages, media, revisions)
- **wp_postmeta** — Metadata for posts
- **wp_comments** — Comments on content
- **wp_commentmeta** — Metadata for comments
- **wp_users** — User accounts
- **wp_usermeta** — User profile data
- **wp_options** — Site settings (often bloated)
- **wp_terms** — Taxonomy terms (categories, tags)
- **wp_term_relationships** — Connections between posts and terms
- **wp_term_taxonomy** — Taxonomy information
- **wp_termmeta** — Taxonomy metadata
- **wp_links** — Blogroll links (deprecated but still exists)

Plugins add their own tables. An average site might have 50-100 tables. A complex site with WooCommerce, membership plugins, and years of plugins tried and abandoned? Potentially hundreds.

## What's Bloating Your Database?

### Post Revisions

WordPress saves every version of every post or page. That blog post you edited 47 times? All 47 versions are stored.

Revisions are useful for recovering from mistakes, but most sites don't need unlimited history. A 1,000-post blog with 50 revisions each has more revision data than actual content.

### Auto-Drafts

WordPress automatically saves your work while you're writing. These auto-drafts often don't get cleaned up, accumulating over time.

### Trashed Items

Deleted posts, pages, and comments go to trash. They stay there indefinitely unless you empty the trash or configure automatic cleanup.

### Spam and Unapproved Comments

If you're not regularly cleaning spam, these accumulate quickly. Some sites have thousands of spam comments clogging their database.

### Transients

Transients are temporary cached data meant to expire automatically. But when a transient's expiration fails, it stays in your options table forever.

### Orphaned Data

When you delete a plugin, its data often remains. Post metadata, options, and custom tables don't disappear with the plugin that created them.

### Unused Tables

Tried a plugin for a week then uninstalled it? Its database tables might still be there, taking up space and cluttering your backup.

### Bloated Options Table

The wp_options table often becomes a dumping ground. Autoloaded data in this table loads on every page request, even if unused.

## Measuring Your Database Bloat

### Check Database Size

In phpMyAdmin (accessible through your hosting control panel):
1. Select your database
2. Look at the total size at the bottom
3. Click on each table to see individual sizes

A content-focused blog might be 50-100MB. A WooCommerce store might be 500MB+. But if your simple site is 1GB or more, you likely have significant bloat.

### Identify the Biggest Tables

Common bloated tables:
- **wp_options** — Should be a few MB. If it's 50MB+, you have problems
- **wp_postmeta** — Can grow large, especially with page builders
- **wp_posts** — Revisions often make this larger than necessary
- **wp_actionscheduler_*** — WooCommerce action scheduler can grow huge

### Count Post Revisions

Check revision count via WP-CLI or a database query:
```sql
SELECT COUNT(*) FROM wp_posts WHERE post_type = 'revision';
```

If this returns thousands, you have revision bloat.

## Manual Database Cleanup

**Warning:** Always back up your database before making changes.

### Delete Post Revisions

```sql
DELETE FROM wp_posts WHERE post_type = 'revision';
```

### Delete Auto-Drafts

```sql
DELETE FROM wp_posts WHERE post_status = 'auto-draft';
```

### Empty Trash

```sql
DELETE FROM wp_posts WHERE post_status = 'trash';
DELETE FROM wp_comments WHERE comment_approved = 'trash';
```

### Delete Spam Comments

```sql
DELETE FROM wp_comments WHERE comment_approved = 'spam';
```

### Clean Orphaned Post Metadata

```sql
DELETE pm FROM wp_postmeta pm
LEFT JOIN wp_posts p ON p.ID = pm.post_id
WHERE p.ID IS NULL;
```

### Clean Expired Transients

```sql
DELETE FROM wp_options WHERE option_name LIKE '_transient_%' OR option_name LIKE '_site_transient_%';
```

### Optimise Tables

After deleting data, optimise tables to reclaim space:
```sql
OPTIMIZE TABLE wp_posts, wp_postmeta, wp_options, wp_comments;
```

## Using Plugins for Database Cleanup

For those less comfortable with direct database access, plugins provide a safer interface.

### WP-Optimize

**Price:** Free (Pro available)
**Features:**
- Clean revisions, drafts, spam, trash
- Optimise database tables
- Identify and clean transients
- Schedule automatic cleanups

Our top recommendation for most sites. It's safe, effective, and has good automatic options.

### Advanced Database Cleaner

**Price:** Free (Pro available)
**Features:**
- Detailed cleanup options
- Orphaned data detection
- Unused table identification
- Plugin-specific cleanup

More thorough than WP-Optimize but requires more care.

### WP-Sweep

**Price:** Free
**Features:**
- Clean approach using WordPress functions
- Safer than direct SQL
- Various cleanup categories

Simple and safe, but limited scheduling options.

## Optimising the Options Table

The wp_options table deserves special attention because autoloaded options affect every page load.

### Check Autoloaded Data Size

```sql
SELECT SUM(LENGTH(option_value)) as autoload_size
FROM wp_options
WHERE autoload = 'yes';
```

This should be under 1MB. If it's 5MB or more, you have autoload bloat.

### Identify Large Autoloaded Options

```sql
SELECT option_name, LENGTH(option_value) as size
FROM wp_options
WHERE autoload = 'yes'
ORDER BY size DESC
LIMIT 20;
```

This shows the biggest autoloaded options. You can then investigate which plugin created them and whether they need to autoload.

### Fix Autoload Settings

Some plugins incorrectly set autoload = 'yes' for data that doesn't need to load on every request:

```sql
UPDATE wp_options SET autoload = 'no' WHERE option_name = 'plugin_option_name';
```

Only do this if you're sure the option isn't needed on every page load.

## Limiting Future Bloat

### Limit Post Revisions

Add to wp-config.php:
```php
define('WP_POST_REVISIONS', 5);
```

This keeps only the 5 most recent revisions per post.

Or disable revisions entirely (not recommended unless you have other version control):
```php
define('WP_POST_REVISIONS', false);
```

### Auto-Empty Trash

By default, WordPress empties trash after 30 days. You can change this in wp-config.php:
```php
define('EMPTY_TRASH_DAYS', 7);
```

### Schedule Regular Cleanup

Configure WP-Optimize or similar to run weekly:
- Delete revisions over 2 weeks old
- Remove spam and trashed items
- Optimise database tables
- Clean expired transients

### Clean Plugin Removal

When uninstalling plugins:
1. Use the plugin's built-in uninstall feature if available
2. Check for remaining database tables
3. Look for leftover options
4. Consider plugins like Advanced Database Cleaner to find orphaned data

## WooCommerce-Specific Optimisation

WooCommerce sites often have larger databases with additional considerations:

### Action Scheduler Table

The wp_actionscheduler_actions table can grow enormous:
```sql
DELETE FROM wp_actionscheduler_actions WHERE status = 'complete' AND scheduled_date_gmt < DATE_SUB(NOW(), INTERVAL 1 MONTH);
```

### Session Data

WooCommerce sessions can accumulate:
- Clear expired sessions regularly
- Consider reducing session length

### Order Data

For stores with years of orders, consider:
- Archiving old completed orders
- Anonymous old customer data (GDPR compliance)
- Cleaning unused product variations

## Performance Impact of Database Optimisation

A well-optimised database can significantly improve performance:

### Query Speed

Smaller tables = faster queries. Removing 100,000 revisions can halve query times for post-related operations.

### Backup Time

Smaller database = faster backups. Going from 500MB to 100MB means backups complete 5x faster and use less storage.

### Memory Usage

Less data to process means lower memory consumption, helpful on hosting with memory limits.

### Import/Export

Migrations and staging sync become much faster with leaner databases.

## The SparkHost Approach

Our managed hosting includes:

- **Automated database optimisation** — Weekly cleanup of common bloat
- **Redis object caching** — Reduces database load
- **Database monitoring** — We notice when databases grow unexpectedly
- **Backup efficiency** — Optimised databases mean faster, smaller backups

For sites with significant database issues, we help clean up during migration.

## Action Plan

**Immediate:**
1. Back up your database
2. Check your database size and identify bloated tables
3. Run a cleanup using WP-Optimize or similar
4. Optimise tables after cleanup

**Ongoing:**
1. Limit post revisions in wp-config.php
2. Schedule weekly automated cleanup
3. Clean up properly when removing plugins
4. Monitor database size monthly

A clean database is a fast database. Take the time to clean yours, set up automation, and enjoy the performance benefits.
