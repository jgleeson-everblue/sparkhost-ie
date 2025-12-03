# Claude Code Rules for Sparkhost.ie

> Irish WordPress hosting company website built with Astro + Tailwind CSS

## Project Overview

**Domain**: sparkhost.ie
**Type**: Marketing website for managed WordPress hosting
**Framework**: Astro 5.x (static site generation)
**Styling**: Tailwind CSS 4.x
**Target Market**: Irish businesses needing WordPress hosting

## Brand Identity

### Colors (from logo SVGs)

```css
/* Primary Gradient - Coral Red to Coral Orange */
--spark-red: #F43654;      /* rgb(244, 54, 84) - gradient start */
--spark-orange: #F48C54;   /* rgb(244, 140, 84) - gradient end */

/* Text Colors */
--text-dark: #33333D;      /* rgb(51, 51, 61) - dark mode text */
--text-light: #FFFFFF;     /* white - light mode text */
```

### Logo Files
- `sparkhost-light.svg` - White text, for dark backgrounds
- `SparkHost-dark.svg` - Dark text (#33333D), for light backgrounds

Both logos use the same coral gradient for the spark icon.

### Design Direction
- **Aesthetic**: Bold & Vibrant (like DigitalOcean)
- **Tone**: Professional but energetic, trustworthy Irish tech
- **Typography**: Distinctive display font + clean body font
- **Motion**: Subtle animations, gradient effects, micro-interactions

## Tech Stack

| Component | Technology |
|-----------|------------|
| Framework | Astro 5.x |
| Styling | Tailwind CSS 4.x |
| Fonts | TBD - distinctive, non-generic |
| Deployment | TBD |
| CMS | TBD (possibly Payload for blog) |

## Directory Structure

```
sparkhost.ie/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/      # Reusable Astro components
│   ├── layouts/         # Page layouts
│   │   └── Layout.astro
│   ├── pages/           # Route pages
│   │   └── index.astro
│   └── styles/
│       └── global.css   # Tailwind + custom styles
├── sparkhost-light.svg  # Logo (light/dark bg)
├── SparkHost-dark.svg   # Logo (dark/light bg)
├── astro.config.mjs
└── package.json
```

## Pages to Build

1. **Homepage** - Hero, features, pricing preview, testimonials, CTA
2. **Pricing** - Full pricing table with plan comparison
3. **Features** - Detailed WordPress hosting features
4. **About** - Company story, Irish hosting advantage
5. **Contact** - Contact form, support info
6. **Blog** - SEO content (future)

## WordPress Hosting Plans (TBD)

Typical structure for managed WordPress hosting:
- **Starter**: 1 site, X GB storage, basic features
- **Professional**: Multiple sites, more storage, staging
- **Business**: Priority support, advanced features

## Development

```bash
npm run dev      # Start dev server (localhost:4321)
npm run build    # Production build
npm run preview  # Preview production build
```

## Claude Code Skill Note

The `frontend-design` skill was installed globally:
```
~/.claude/skills/frontend-design/SKILL.md
```

**Issue**: Claude Code may need a restart to recognize newly installed skills. The skill provides guidelines for creating distinctive, non-generic frontend designs.

## Design Guidelines (from frontend-design skill)

When building UI:
- **Typography**: Avoid generic fonts (Inter, Roboto, Arial). Use distinctive choices.
- **Colors**: Use the brand coral gradient prominently. Avoid purple gradients.
- **Motion**: CSS animations for page load, hover states, scroll triggers
- **Backgrounds**: Gradient meshes, noise textures, not flat solid colors
- **Layout**: Asymmetry, overlap, generous whitespace OR controlled density

## Changelog

### 2025-12-03
- Initial project setup with Astro + Tailwind CSS
- Added brand logos (light/dark variants)
- Created CLAUDE.md documentation
- Extracted brand colors from SVG logos
