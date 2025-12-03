# SparkHost.ie — Product Requirements Document

**Version:** 1.0  
**Last Updated:** December 2024  
**Author:** Everblue Digital

---

## Executive Summary

SparkHost.ie is a WordPress hosting and maintenance service targeting Irish SMEs, agencies, and professionals who need reliable, hands-off website management. The website serves as the primary sales funnel, establishing credibility and converting visitors into monthly recurring clients.

**Core Value Proposition:** "Your WordPress site, professionally managed. So you can focus on running your business."

---

## Site Architecture

### Primary Pages (8 pages)

| Page | URL | Purpose |
|------|-----|---------|
| Homepage | `/` | Hero + value props + social proof + CTA |
| Services | `/services` | Detailed breakdown of what's included |
| Pricing | `/pricing` | Side-by-side tier comparison |
| About | `/about` | Story, team, trust signals |
| Blog | `/blog` | SEO content hub |
| Contact | `/contact` | Cal.com embed + contact form |
| FAQ | `/faq` | Objection handling |
| Get Started | `/get-started` | Onboarding form + booking |

### Secondary Pages

| Page | URL | Purpose |
|------|-----|---------|
| Privacy Policy | `/privacy` | GDPR compliance |
| Terms of Service | `/terms` | Legal protection |
| Cookie Policy | `/cookies` | GDPR compliance |
| Single Blog Post | `/blog/{slug}` | Individual articles |

---

## Page Specifications

### 1. Homepage

**Goal:** Convert visitors to pricing page or booking within 30 seconds

**Sections:**
1. **Hero Section**
   - Headline + subheadline
   - Primary CTA: "View Pricing"
   - Secondary CTA: "Book a Call"
   - Trust badges (99.9% uptime, Irish support, GDPR compliant)

2. **Problem/Solution Block**
   - Pain points Irish businesses face
   - How SparkHost solves them

3. **Services Overview**
   - 3-column feature grid
   - Links to full services page

4. **Social Proof**
   - Client logos (when available)
   - Testimonial carousel
   - Stats (sites managed, uptime %, response time)

5. **Pricing Preview**
   - Two-tier cards with key features
   - "Compare Plans" CTA

6. **FAQ Accordion**
   - Top 4-5 questions

7. **Final CTA Section**
   - "Ready to stop worrying about your website?"
   - Booking embed or link

---

### 2. Services Page

**Sections:**
1. Overview intro
2. **Standard Tier** — full feature breakdown
3. **Managed Tier** — full feature breakdown  
4. Comparison table
5. "What's NOT included" transparency section
6. CTA to pricing

---

### 3. Pricing Page

**Two-Tier Comparison Table:**

#### Standard — €40/month + VAT
*Or €480/year + VAT (save €48)*

**Hosting & Infrastructure**
- High-performance UK/EU VPS servers
- 99.9% uptime guarantee
- 30GB SSD storage
- Unlimited bandwidth
- Free SSL certificate (HTTPS)
- Daily automated backups (7-day retention)
- Monthly full snapshot

**Security & Maintenance**
- WordPress core updates (automatic)
- Plugin & theme updates (automatic)
- Malware scanning & removal
- Cloudflare firewall protection
- DDoS protection
- Security hardening (Wordfence)

**Support**
- WhatsApp & email support
- 24-hour response time (99% same-day)
- Monthly uptime & security reports
- Up to 1 hour/month light content edits

**Note:** Larger work requests (new pages, layouts, redesigns) quoted separately.

---

#### Managed — €249/month + VAT

*Everything in Standard, plus:*

**Enhanced Infrastructure**
- 100GB SSD storage
- CDN integration (global performance)
- Staging environment for safe testing

**Advanced Security**
- Patchstack real-time threat detection
- Web Application Firewall (WAF)
- Security audit logs
- Vulnerability scanning
- Emergency security response

**Performance Optimisation**
- Image optimisation & compression
- Speed optimisation
- Performance monitoring & reporting

**Content Management**
- 3 hours/month included changes
- Text updates, page edits, new content
- Image uploads & optimisation
- Menu & navigation changes
- Form updates
- Blog post publishing
- Additional hours: €80/hour

**Priority Support**
- Weekly performance reports
- Monthly strategy calls (optional)
- Proactive monitoring & alerts

---

### 4. About Page

**Sections:**
1. Company story (Everblue Digital connection)
2. Mission statement
3. Team intro (optional)
4. Why Ireland focus
5. Trust signals (years in business, sites managed)

---

### 5. Contact Page

**Elements:**
- Cal.com inline booking widget (30-min call)
- Simple contact form (Emailit backend)
- Email address
- Response time promise
- FAQ link

**Form Fields:**
- Name (required)
- Email (required)
- Website URL (optional)
- Current hosting provider (optional)
- Message (required)
- Checkbox: "I agree to the privacy policy"

---

### 6. Blog Page

**Layout:** Grid of article cards  
**Features:**
- Category filtering
- Search (optional)
- Pagination (12 per page)

**Card Elements:**
- Featured image
- Title
- Excerpt (150 chars)
- Read time
- Date
- Category tag

---

### 7. FAQ Page

**Organised by Category:**

**General**
- What is managed WordPress hosting?
- Do I need to do anything after signing up?
- Can I cancel anytime?

**Technical**
- Will you migrate my existing site?
- What happens if my site goes down?
- Do you support WooCommerce?
- What's included in "light content edits"?

**Billing**
- How does billing work?
- Is VAT included in the prices?
- Do you offer annual discounts?

**Security**
- How do you protect my site from hackers?
- What happens if my site gets malware?
- Are backups automatic?

---

### 8. Get Started Page

**Two-step flow:**

**Step 1: Quick questionnaire**
- Business name
- Website URL (or "I need a new site")
- Current monthly visitors (estimate)
- Plan interest (Standard/Managed/Not sure)
- Biggest website frustration

**Step 2: Book onboarding call**
- Cal.com embed
- Or: "We'll be in touch within 24 hours"

---

## Technical Requirements

### Core Stack
- **CMS:** WordPress (self-hosted)
- **Theme:** Custom theme or Starter theme (Flavstarter, Flavor, Flavor)
- **Forms:** Emailit for SMTP delivery
- **Booking:** Cal.com embed widget
- **Analytics:** Plausible or Fathom (privacy-friendly)
- **Hosting:** Your own VPS infrastructure

### Integrations

#### Emailit (SMTP)
```
Endpoint: https://api.emailit.com/v1/emails
Method: POST
Headers:
  - Authorization: Bearer {API_KEY}
  - Content-Type: application/json

Body:
{
  "from": "hello@sparkhost.ie",
  "to": ["your-email@sparkhost.ie"],
  "subject": "New Contact Form Submission",
  "html": "<p>Name: {name}</p><p>Email: {email}</p><p>Message: {message}</p>"
}
```

#### Cal.com Embed
```html
<!-- Cal.com Inline Embed -->
<div style="width:100%;height:600px;overflow:auto" id="sparkhost-booking"></div>
<script type="text/javascript">
  (function (C, A, L) {
    let p = function (a, ar) { a.q.push(ar); };
    let d = C.document;
    C.Cal = C.Cal || function () {
      let cal = C.Cal;
      let ar = arguments;
      if (!cal.loaded) {
        cal.ns = {};
        cal.q = cal.q || [];
        d.head.appendChild(d.createElement("script")).src = A;
        cal.loaded = true;
      }
      if (ar[0] === L) {
        const api = function () { p(api, arguments); };
        const namespace = ar[1];
        api.q = api.q || [];
        if (typeof namespace === "string") {
          cal.ns[namespace] = cal.ns[namespace] || api;
          p(cal.ns[namespace], ar);
          p(cal, ["initNamespace", namespace]);
        } else p(cal, ar);
        return;
      }
      p(cal, ar);
    };
  })(window, "https://app.cal.com/embed/embed.js", "init");
  
  Cal("init", "sparkhost", {origin: "https://app.cal.com"});
  Cal.ns["sparkhost"]("inline", {
    elementOrSelector: "#sparkhost-booking",
    config: {"layout": "month_view"},
    calLink: "everblue/30min",
  });
  Cal.ns["sparkhost"]("ui", {
    "hideEventTypeDetails": false,
    "layout": "month_view"
  });
</script>
```

---

## Blog API — Automated Publishing

### WordPress REST API Setup

**1. Enable Application Passwords**
- WordPress Admin → Users → Your Profile
- Scroll to "Application Passwords"
- Create new password for "Blog Automation"
- Save the generated password securely

**2. API Authentication**
```
Authorization: Basic {base64(username:application_password)}
```

### Create Post Endpoint

```
POST https://sparkhost.ie/wp-json/wp/v2/posts

Headers:
  Authorization: Basic {credentials}
  Content-Type: application/json

Body:
{
  "title": "Your Blog Post Title",
  "content": "<!-- wp:paragraph --><p>Your content here...</p><!-- /wp:paragraph -->",
  "status": "publish",  // or "draft"
  "slug": "your-post-slug",
  "excerpt": "Brief description for SEO",
  "categories": [5],    // category IDs
  "tags": [12, 15],     // tag IDs
  "featured_media": 123 // media ID for featured image
}
```

### Upload Featured Image

```
POST https://sparkhost.ie/wp-json/wp/v2/media

Headers:
  Authorization: Basic {credentials}
  Content-Type: image/jpeg
  Content-Disposition: attachment; filename="image-name.jpg"

Body: [binary image data]
```

### n8n Workflow Example

```json
{
  "name": "SparkHost Blog Publisher",
  "nodes": [
    {
      "name": "Trigger",
      "type": "n8n-nodes-base.webhook",
      "parameters": {
        "path": "publish-blog",
        "httpMethod": "POST"
      }
    },
    {
      "name": "Format Content",
      "type": "n8n-nodes-base.set",
      "parameters": {
        "values": {
          "string": [
            {
              "name": "formatted_content",
              "value": "={{ '<!-- wp:paragraph --><p>' + $json.content.replace(/\\n\\n/g, '</p><!-- /wp:paragraph --><!-- wp:paragraph --><p>') + '</p><!-- /wp:paragraph -->' }}"
            }
          ]
        }
      }
    },
    {
      "name": "Publish to WordPress",
      "type": "n8n-nodes-base.httpRequest",
      "parameters": {
        "url": "https://sparkhost.ie/wp-json/wp/v2/posts",
        "method": "POST",
        "authentication": "genericCredentialType",
        "genericAuthType": "httpBasicAuth",
        "jsonParameters": true,
        "options": {},
        "bodyParametersJson": "={ \"title\": \"{{ $json.title }}\", \"content\": \"{{ $node['Format Content'].json.formatted_content }}\", \"status\": \"{{ $json.status || 'draft' }}\", \"excerpt\": \"{{ $json.excerpt }}\" }"
      }
    }
  ]
}
```

### Webhook Payload Structure

When triggering from external systems (AI content generator, scheduling tool):

```json
{
  "title": "5 Signs Your WordPress Site Needs Professional Maintenance",
  "content": "Your content in plain text or HTML...",
  "excerpt": "Is your WordPress site running slow? Here are 5 warning signs...",
  "status": "draft",
  "category": "wordpress-maintenance",
  "tags": ["wordpress", "maintenance", "security"]
}
```

---

## Blog Content Strategy

### Content Pillars

1. **WordPress Maintenance** — Why it matters, what's involved
2. **Website Security** — Threats, protection, recovery
3. **Performance** — Speed optimisation, user experience
4. **Business Growth** — How websites drive revenue
5. **Irish Business Focus** — GDPR, local considerations

### Initial Blog Topics (20 Articles)

#### Pillar 1: WordPress Maintenance
1. "What Happens When You Don't Update WordPress (Real Examples)"
2. "Plugin Updates: Why They Break Sites and How to Prevent It"
3. "The True Cost of DIY WordPress Maintenance for Irish Businesses"
4. "Monthly vs Weekly WordPress Maintenance: What's Actually Necessary"
5. "Why Your Web Developer Ghosted You (And What to Do Now)"

#### Pillar 2: Website Security
6. "Your WordPress Site Was Hacked: A Step-by-Step Recovery Guide"
7. "SSL Certificates Explained: Why Every Irish Business Needs HTTPS"
8. "Cloudflare for WordPress: Free Protection Worth Thousands"
9. "WordPress Security Plugins Compared: Wordfence vs Sucuri vs Patchstack"
10. "The Anatomy of a WordPress Hack: How Attackers Get In"

#### Pillar 3: Performance
11. "Why Your WordPress Site Is Slow (And How to Fix It Today)"
12. "Image Optimisation for WordPress: The Complete Guide"
13. "Core Web Vitals for Irish Businesses: What Google Actually Wants"
14. "CDN Explained: Why Your Dublin Business Needs Global Speed"
15. "WordPress Hosting Compared: Shared vs VPS vs Managed"

#### Pillar 4: Business Growth
16. "Is Your Website Costing You Customers? 7 Warning Signs"
17. "What Irish SMEs Get Wrong About Their Websites"
18. "Website Downtime Calculator: What 1 Hour Offline Really Costs"
19. "When to Redesign vs When to Maintain: A Decision Framework"
20. "The Business Case for Managed WordPress Hosting"

### SEO Keywords to Target

**Primary:**
- WordPress hosting Ireland
- Managed WordPress hosting Ireland
- WordPress maintenance Ireland
- WordPress support Ireland
- WordPress security Ireland

**Secondary:**
- WordPress updates service
- WordPress backup service
- WordPress speed optimisation
- Website maintenance Dublin
- WordPress developer Ireland

**Long-tail:**
- "how much does WordPress hosting cost in Ireland"
- "best WordPress hosting for Irish businesses"
- "WordPress site hacked what to do"
- "WordPress maintenance checklist"
- "migrate WordPress site to new host"

---

## Marketing Copy

### Taglines (Pick One)

1. "WordPress hosting that just works."
2. "Your WordPress site, professionally managed."
3. "Stop worrying about your website."
4. "WordPress maintenance for businesses who'd rather not."
5. "Enterprise-grade hosting. Irish-sized pricing."

**Recommended:** "Your WordPress site, professionally managed."

---

### Homepage Copy

#### Hero Section

**Headline:**  
Your WordPress Site, Professionally Managed

**Subheadline:**  
High-performance hosting, automatic updates, real security, and Irish support. From €40/month.

**Primary CTA:** View Plans  
**Secondary CTA:** Book a Free Call

**Trust Badges:**
- 99.9% Uptime Guaranteed
- Irish Support Team
- GDPR Compliant
- Daily Backups

---

#### Problem Section

**Headline:**  
Your Website Shouldn't Keep You Up at Night

**Copy:**  
You built your business. Your website should support it — not drain your time with plugin updates, security scares, and hosting headaches.

Most Irish businesses are stuck between two bad options: expensive agencies that charge €150/hour for basic updates, or DIY maintenance that eats into time you don't have.

SparkHost is the third option. Professional WordPress management at a fixed monthly price. We handle the technical work. You focus on your business.

---

#### How It Works

**Headline:**  
Set It and Forget It

**Step 1: We Migrate Your Site**  
We handle the full migration from your current host — files, database, emails, DNS. Zero downtime. No technical work on your end.

**Step 2: We Manage Everything**  
Updates, backups, security monitoring, performance optimisation. All automatic, all included. You get monthly reports showing exactly what we've done.

**Step 3: You Get On With Business**  
Need a change? Send a WhatsApp. We respond same-day, usually within hours. No tickets. No waiting. No jargon.

---

#### Features Grid

**Reliable Hosting**  
UK/EU servers with 99.9% uptime. Fast load times. Unlimited bandwidth. Your site stays online when it matters.

**Automatic Updates**  
WordPress core, plugins, and themes — updated and tested automatically. No more "please update" warnings.

**Real Security**  
Cloudflare firewall, malware scanning, DDoS protection, and daily backups. If something goes wrong, we fix it.

**Irish Support**  
WhatsApp or email. Same-day responses. Actual humans who understand your business.

---

#### Social Proof Section

**Headline:**  
Trusted by Irish Businesses

**Stats:**
- 99.9% — Average uptime across all clients
- <4 hours — Average support response time
- 7 days — Backup retention (daily snapshots)

**Testimonial Template:**  
"[Quote about peace of mind / responsiveness / value]"  
— [Name], [Business Name]

---

#### Pricing Preview

**Headline:**  
Simple, Transparent Pricing

**Standard — €40/month + VAT**  
Hosting, updates, security, and support. Everything you need to keep your site running.

**Managed — €249/month + VAT**  
Everything in Standard, plus 3 hours of content changes, advanced security, staging environment, and priority support.

**CTA:** Compare Plans →

---

#### Final CTA

**Headline:**  
Ready to Stop Worrying About Your Website?

**Copy:**  
Book a free 30-minute call. We'll review your current setup, answer your questions, and see if SparkHost is right for you. No pressure, no sales pitch.

**CTA:** Book Your Free Call

---

### Services Page Copy

#### Introduction

**Headline:**  
What's Actually Included

**Copy:**  
No hidden fees. No surprise charges. Here's exactly what you get with SparkHost — and what you don't.

---

#### Standard Tier

**Headline:**  
Standard — €40/month + VAT

**Subheadline:**  
Professional hosting and maintenance for businesses that need reliability without complexity.

**Hosting & Infrastructure**

Your site runs on high-performance VPS servers in the UK/EU. Not shared hosting where you're competing with hundreds of other sites. Dedicated resources, fast load times, and 99.9% uptime guaranteed.

- 30GB SSD storage
- Unlimited bandwidth  
- Free SSL certificate (HTTPS)
- Daily automated backups (7 days retained)
- Monthly full snapshot

**Security & Maintenance**

We keep your WordPress installation secure and current. Updates are applied automatically after testing, so you're protected without the risk of breaking changes.

- WordPress core updates
- Plugin and theme updates
- Malware scanning and removal
- Cloudflare firewall and DDoS protection
- Wordfence security hardening

**Support**

Real people. Fast responses. No corporate runaround.

- WhatsApp and email support
- 24-hour response time (99% same-day)
- Monthly uptime and security reports
- Up to 1 hour/month of light content edits

**What's a "light content edit"?**  
Text changes, fixing typos, updating a phone number, swapping an image. Quick fixes that take minutes, not hours.

**What's NOT included:**  
New page designs, layout changes, feature additions, or anything requiring development work. These are quoted separately at fair hourly rates.

---

#### Managed Tier

**Headline:**  
Managed — €249/month + VAT

**Subheadline:**  
Everything in Standard, plus hands-on content management and advanced protection for businesses that need more.

**Enhanced Infrastructure**

More storage, global performance, and a safe place to test changes before they go live.

- 100GB SSD storage
- CDN integration for faster global load times
- Staging environment for safe testing

**Advanced Security**

Enterprise-grade protection that goes beyond basic scanning.

- Patchstack real-time threat detection
- Web Application Firewall (WAF)
- Security audit logs
- Vulnerability scanning
- Emergency security response (priority queue)

**Performance Optimisation**

We actively monitor and improve your site's speed.

- Image optimisation and compression
- Speed optimisation (caching, database cleanup)
- Performance monitoring and reporting

**Content Management**

Your own web team, without the overhead.

- 3 hours/month of content changes included
- Text updates and page edits
- New content and blog posts
- Image uploads and optimisation
- Menu and navigation changes
- Form updates

Need more? Additional hours at €80/hour.

**Priority Support**

- Weekly uptime and performance reports
- Monthly strategy calls (optional)
- Proactive monitoring and alerts
- Direct line to senior support

---

### Pricing Page Copy

**Headline:**  
Choose Your Plan

**Subheadline:**  
Both plans include migration, hosting, updates, security, and Irish support. Pick the level that fits your business.

[Pricing table as specified above]

**Annual Option:**  
Pay yearly for Standard and save €48. That's €432/year + VAT instead of €480.

**Migration Note:**  
Moving from another host? We handle the full migration at no extra cost. Your site stays online throughout the process.

**Not Sure Which Plan?**  
Book a free call. We'll review your site and recommend the right fit.

---

### About Page Copy

**Headline:**  
The Story Behind SparkHost

**Copy:**  
SparkHost is a service by Everblue Digital, built from years of managing WordPress sites for Irish businesses.

We kept seeing the same problems: business owners stuck maintaining their own sites, paying agency rates for basic updates, or dealing with hosting companies that treat support as an afterthought.

So we built SparkHost — a focused WordPress hosting and maintenance service with fixed monthly pricing, genuine security, and support from people who actually answer.

**Our Approach:**

We specialise in one thing: keeping WordPress sites running smoothly. We're not a design agency, a marketing firm, or a development shop. We're your website maintenance team.

That focus means we're very good at what we do. Every process is refined. Every security measure is proven. Every support response is fast.

**Why Ireland?**

We're based in Ireland. We work Irish hours. We understand GDPR, Irish business practices, and the specific needs of SMEs in this market.

When you email or WhatsApp us, you're talking to someone who gets it.

**What We Don't Do:**

We're honest about scope. SparkHost handles hosting, updates, security, and maintenance. If you need a new website built, a rebrand, or complex development work, we'll refer you to trusted partners.

This isn't a limitation — it's how we keep prices fair and quality high.

---

### Contact Page Copy

**Headline:**  
Let's Talk

**Subheadline:**  
Book a free 30-minute call, or send us a message. We typically respond within 4 hours during business hours.

**Booking Section:**  
[Cal.com embed]

**Or Send a Message:**  
[Contact form]

**Email:** hello@sparkhost.ie  
**Response Time:** Same business day, usually within hours

---

### FAQ Page Copy

**General Questions**

**What is managed WordPress hosting?**  
It's hosting plus active maintenance. We don't just give you server space — we keep your WordPress installation updated, secure, backed up, and running fast. You get the benefits of a professional web team without hiring one.

**Do I need to do anything after signing up?**  
Almost nothing. We handle migration from your current host. Once you're set up, we manage everything. You'll get monthly reports and can request changes anytime via WhatsApp or email.

**Can I cancel anytime?**  
Yes. Monthly plans have no long-term contract. We'd appreciate 30 days notice, but there's no cancellation penalty.

**Will you migrate my existing site?**  
Yes, at no extra cost. We handle the full migration: files, database, emails, and DNS configuration. Your site stays online throughout the process.

**Technical Questions**

**What happens if my site goes down?**  
We monitor uptime 24/7. If your site goes down, we're usually aware before you are. We investigate immediately and restore from backups if needed. You'll be notified of any issues and their resolution.

**Do you support WooCommerce?**  
Yes, both plans support WooCommerce. For high-traffic stores, we recommend the Managed plan for staging and priority support.

**What's included in "light content edits"?**  
Quick fixes that take minutes: updating text, changing a phone number, swapping an image, fixing a typo. Anything that takes under 15 minutes and doesn't require design or development work.

**What's NOT included?**  
New page designs, layout changes, adding new features, custom development, or anything requiring significant time. These are quoted separately — we're always transparent about what's extra.

**Billing Questions**

**How does billing work?**  
Monthly via Direct Debit. You're billed on the same date each month. Annual payments are also available for Standard plan (save €48/year).

**Is VAT included in the prices?**  
No, VAT (23%) is added to all prices. €40/month becomes €49.20 including VAT. €249/month becomes €306.27 including VAT.

**Security Questions**

**How do you protect my site from hackers?**  
Multiple layers: Cloudflare firewall and DDoS protection, automatic security updates, malware scanning, WordPress hardening, and (for Managed plans) real-time threat detection via Patchstack.

**What happens if my site gets malware?**  
We detect it, clean it, and restore your site. This is included in your plan — no emergency charges. We'll also identify how it happened and strengthen protection.

**Are backups automatic?**  
Yes. Daily automated backups with 7-day retention, plus monthly full snapshots. For Managed plans, we keep additional restore points.

---

## Design Direction

### Brand Personality
- Professional but approachable
- Technical competence without jargon
- Irish without being cliché
- Confident, not aggressive

### Colour Palette

**Primary:** Deep blue (#1e3a5f) — Trust, professionalism  
**Secondary:** Electric orange (#ff6b35) — Energy, CTAs  
**Neutral:** Slate grey (#64748b) — Body text  
**Background:** Off-white (#fafafa) — Clean, modern  
**Success:** Green (#22c55e) — Positive indicators

### Typography

**Headings:** Space Grotesk or similar geometric sans  
**Body:** Inter or system sans-serif for readability  
**Code/Technical:** JetBrains Mono

### Tone of Voice
- Clear and direct
- Conversational but professional
- Confident without being pushy
- Technical accuracy without jargon
- Irish English spellings

---

## Success Metrics

### Primary KPIs
- Conversion rate: Visitor → Pricing page (target: 15%)
- Conversion rate: Pricing page → Booking (target: 10%)
- Booking → Customer (target: 40%)

### Secondary KPIs
- Organic traffic growth (month-over-month)
- Blog post engagement (time on page, scroll depth)
- Support response satisfaction

---

## Launch Checklist

- [ ] Domain configured (sparkhost.ie)
- [ ] SSL certificate active
- [ ] All pages built and reviewed
- [ ] Contact form tested (Emailit integration)
- [ ] Cal.com booking embed working
- [ ] Privacy/Terms/Cookie pages published
- [ ] Analytics installed (Plausible/Fathom)
- [ ] Blog API credentials configured
- [ ] First 5 blog posts published
- [ ] Mobile responsiveness verified
- [ ] Page speed optimised (<3s load time)
- [ ] SEO basics configured (meta titles, descriptions)
- [ ] Social sharing images created
- [ ] 404 page designed
- [ ] Favicon uploaded

---

## Appendix: Email Templates

### Contact Form Auto-Response

**Subject:** Thanks for reaching out — SparkHost

**Body:**
Hi {name},

Thanks for getting in touch. We've received your message and will respond within one business day — usually much faster.

If you'd like to speed things up, you can book a call directly: [Cal.com link]

Talk soon,  
The SparkHost Team

---

### Welcome Email (Post-Signup)

**Subject:** Welcome to SparkHost — Here's what happens next

**Body:**
Hi {name},

Welcome to SparkHost! We're excited to have {business_name} on board.

**What happens now:**

1. **Migration** — We'll begin migrating your site within 24 hours. You'll receive an email when it's complete.

2. **DNS Update** — We'll send you simple instructions to point your domain to our servers. This usually takes 5 minutes.

3. **Confirmation** — Once everything is live, we'll send your first report and confirm your support channels.

**Questions?**  
Reply to this email or WhatsApp us at [number].

Best,  
The SparkHost Team

---

*End of PRD*