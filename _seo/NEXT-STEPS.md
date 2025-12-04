# SparkHost.ie SEO Roadmap

> Future SEO tasks and improvements
> Last Updated: 3rd December 2025

## Current Status

**Phase 1 & 2: COMPLETE** ✅
- All pages optimized with keyword-rich content
- Schema markup implemented across site
- Internal linking strategy in place
- Accessibility improvements (aria-hidden, title attributes)

---

## Phase 3: Technical SEO (Pre-Launch)

### 3.1 XML Sitemap ✅ COMPLETE
- [x] Generate sitemap.xml with all pages
- [x] Include blog posts with lastmod dates
- [x] Set appropriate priority values (homepage 1.0, services 0.9, blog 0.6, legal 0.3)
- [ ] Submit to Google Search Console (post-deployment)

**Implementation:** `@astrojs/sitemap` integrated in `astro.config.mjs`

### 3.2 Robots.txt ✅ COMPLETE
- [x] Create robots.txt file
- [x] Allow all crawlers
- [x] Reference sitemap location (`/sitemap-index.xml`)
- [x] Block admin/internal paths (`/api/`, `/*backup*`)

**Location:** `/public/robots.txt`

### 3.3 Google Search Console Setup ⏳ POST-DEPLOYMENT
- [ ] Verify domain ownership
- [ ] Submit sitemap
- [ ] Monitor indexing status
- [ ] Set up email alerts for issues

### 3.4 Google Analytics / GA4 ⏳ POST-DEPLOYMENT
- [ ] Install GA4 tracking code
- [ ] Configure conversion goals
- [ ] Set up search query tracking
- [ ] Create SEO performance dashboard

---

## Phase 4: Content SEO (Post-Launch)

### 4.1 Blog Content Calendar
Create keyword-targeted blog posts:

| Priority | Topic | Target Keyword | Est. Volume |
|----------|-------|---------------|-------------|
| HIGH | WordPress Security Guide for Irish Businesses | wordpress security ireland | 20 |
| HIGH | How to Speed Up Your WordPress Site | wordpress speed optimization | 30 |
| MEDIUM | WordPress vs Other CMS for Irish SMEs | wordpress ireland | 40 |
| MEDIUM | Website Maintenance Checklist 2025 | website maintenance | 40 |
| LOW | Choosing WordPress Hosting in Ireland | wordpress hosting ireland | 90 |

### 4.2 Image Optimization
- [ ] Add descriptive alt text to all images
- [ ] Compress images for Core Web Vitals
- [ ] Use WebP format where possible
- [ ] Implement lazy loading

### 4.3 Internal Linking Improvements
- [ ] Add contextual links within blog posts
- [ ] Create topic clusters around main services
- [ ] Link from blog posts to service pages
- [ ] Add "Related Services" sections

---

## Phase 5: Local SEO (Post-Launch)

### 5.1 Google Business Profile
- [ ] Create/claim Google Business Profile
- [ ] Add all business information
- [ ] Upload photos (office, team)
- [ ] Set service areas (Ireland/Dublin)

### 5.2 Local Citations
- [ ] Submit to Irish business directories
- [ ] Ensure NAP consistency (Name, Address, Phone)
- [ ] Target directories:
  - Golden Pages Ireland
  - Enterprise Ireland
  - Irish Tech News
  - Silicon Republic

### 5.3 Reviews Strategy
- [ ] Implement review request workflow
- [ ] Add review schema when reviews exist
- [ ] Respond to all reviews

---

## Phase 6: Link Building (Ongoing)

### 6.1 Guest Posting Opportunities
- Irish tech blogs
- WordPress community sites
- Web development forums

### 6.2 Resource Link Building
- Create linkable assets (guides, tools)
- Reach out to Irish business resources
- Contribute to WordPress community

### 6.3 PR & Mentions
- Irish tech press releases
- Startup/SME publications
- Industry podcasts

---

## Phase 7: Performance Monitoring (Ongoing)

### 7.1 Monthly Tasks
- [ ] Check Search Console for errors
- [ ] Review keyword rankings
- [ ] Analyze traffic trends
- [ ] Update outdated content

### 7.2 Quarterly Tasks
- [ ] Refresh keyword research (DataForSEO)
- [ ] Competitor analysis
- [ ] Content audit
- [ ] Technical SEO audit

### 7.3 KPIs to Track

| Metric | Target (6 months) |
|--------|-------------------|
| Organic traffic | +500% from baseline |
| "wordpress hosting ireland" ranking | Top 10 |
| "managed wordpress hosting ireland" | Top 5 |
| Indexed pages | All pages indexed |
| Core Web Vitals | All green |

---

## DataForSEO Re-Analysis

When ready for launch, run fresh DataForSEO analysis:

1. **Ranked Keywords** - Check current positioning
2. **Competitor Domain** - Identify new competitors
3. **Keyword Suggestions** - Find new opportunities
4. **SERP Analysis** - Understand SERP features

Tools to use:
- `dataforseo_labs_google_ranked_keywords`
- `dataforseo_labs_google_competitors_domain`
- `dataforseo_labs_google_keyword_suggestions`
- `serp_organic_live_advanced`

---

## Quick Wins Checklist

Immediate low-effort tasks before launch:

- [x] Title tags optimized
- [x] Meta descriptions optimized
- [x] Schema markup implemented
- [x] Internal linking in place
- [x] H1-H3 hierarchy correct
- [x] Sitemap.xml generated
- [x] Robots.txt created
- [ ] Search Console submitted (post-deployment)
- [ ] GA4 installed (post-deployment)

---

## Notes

- Prioritize technical SEO before content
- Local SEO is high-value for Irish market
- Schema validation complete - all passing
- Blog content should target long-tail keywords first
- Review this roadmap monthly and update priorities
