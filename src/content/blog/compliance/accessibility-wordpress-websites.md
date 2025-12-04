---
title: "Web Accessibility for Irish Businesses: Making Your WordPress Site Inclusive"
excerpt: "Accessibility isn't just a legal requirement — it's good business. Here's how to make your WordPress website usable by everyone."
publishedDate: "2025-05-21"
author: "SparkHost Team"
featured: false
---

15% of the world's population lives with some form of disability. In Ireland, that's over 600,000 people. If your website isn't accessible, you're excluding potential customers and potentially violating their rights.

Accessibility isn't just about compliance. It's about building websites that work for everyone.

## What Web Accessibility Means

Accessible websites can be used by people with:

- **Visual impairments** — Blindness, low vision, colour blindness
- **Hearing impairments** — Deafness, hard of hearing
- **Motor impairments** — Limited dexterity, inability to use a mouse
- **Cognitive impairments** — Learning disabilities, attention disorders, memory issues

Accessibility features also help:
- Mobile users in challenging conditions
- People with temporary impairments (broken arm, eye surgery)
- Elderly users with declining abilities
- Everyone in suboptimal situations (bright sunlight, noisy environment)

## The Legal Landscape in Ireland

### European Accessibility Act

The European Accessibility Act, coming into full effect in 2025, requires certain products and services to be accessible, including:
- E-commerce websites
- Banking services
- Transport services
- E-books

### EU Web Accessibility Directive

Public sector websites must meet accessibility standards. While not directly applicable to private businesses, it sets expectations and precedents.

### Equality Acts

The Employment Equality Act and Equal Status Act prohibit discrimination. An inaccessible website could be considered discriminatory if it prevents someone from accessing services available to others.

### Case Law

Irish and European courts increasingly consider digital accessibility. Businesses have faced legal challenges for inaccessible websites and apps.

## WCAG: The Accessibility Standard

The Web Content Accessibility Guidelines (WCAG) are the international standard for web accessibility. Current version is 2.2, with three conformance levels:

### Level A (Minimum)

Basic accessibility requirements. Your site is unusable for many disabled users without these.

Examples:
- All images have alt text
- Videos have captions
- No keyboard traps
- Page has proper headings

### Level AA (Recommended)

The target for most organisations. Required for public sector in the EU.

Examples:
- Sufficient colour contrast
- Text can be resized to 200%
- Consistent navigation
- Error identification

### Level AAA (Enhanced)

Highest level of accessibility. Difficult to achieve for all content.

Examples:
- Sign language for audio
- Extended audio description
- Simplified reading level
- No timing requirements

**Target:** Most businesses should aim for WCAG 2.2 Level AA.

## Common WordPress Accessibility Issues

### Missing Alt Text

Screen readers can't describe images without alt text. Every meaningful image needs a description.

**Bad:**
```html
<img src="product.jpg">
```

**Good:**
```html
<img src="product.jpg" alt="Blue wool sweater with cable knit pattern">
```

**Decorative images** that add no information should have empty alt text:
```html
<img src="decoration.jpg" alt="">
```

### Poor Colour Contrast

Text must have sufficient contrast against its background:
- Normal text: 4.5:1 ratio minimum
- Large text (18px+ bold or 24px+): 3:1 ratio minimum

Light grey text on white background fails. Use contrast checkers like WebAIM's Contrast Checker.

### Missing Heading Structure

Screen reader users navigate by headings. Headings must:
- Follow logical hierarchy (H1, then H2, then H3)
- Not skip levels (don't jump from H1 to H3)
- Describe the content that follows
- Be used for structure, not styling

### Keyboard Navigation Problems

Not everyone can use a mouse. All functionality must be accessible via keyboard:
- Tab through interactive elements
- Enter/Space to activate
- Escape to close modals
- Arrow keys where appropriate

Test your site using only your keyboard.

### Missing Form Labels

Form fields need associated labels that screen readers can announce:

**Bad:**
```html
<input type="email" placeholder="Email">
```

**Good:**
```html
<label for="email">Email</label>
<input type="email" id="email" placeholder="your@email.ie">
```

### Focus Indicators

When tabbing through a page, users must see which element is focused. Never remove focus outlines without providing an alternative:

**Bad:**
```css
*:focus { outline: none; }
```

**Good:**
```css
*:focus { outline: 2px solid #0066CC; }
```

### Inaccessible Menus

Dropdown menus often fail accessibility:
- Can't be accessed via keyboard
- Don't announce state to screen readers
- Close when focus moves inside

Ensure menus are keyboard-accessible and use proper ARIA attributes.

### Auto-Playing Media

Videos or audio that play automatically:
- Disorient users
- Interfere with screen readers
- Annoy everyone

Never auto-play audio. If auto-playing video is essential, allow pausing and muting.

### Poor Link Text

Link text should describe the destination:

**Bad:**
```html
<a href="products.html">Click here</a>
```

**Good:**
```html
<a href="products.html">View our product catalogue</a>
```

## Making WordPress Accessible

### Choose an Accessible Theme

Some themes are built with accessibility in mind:
- **GeneratePress** — Excellent accessibility standards
- **Astra** — Good accessibility features
- **Theme by developer tag** — Search for "accessibility-ready" on wordpress.org

Check the theme's accessibility documentation. Test before committing.

### Use Accessibility Plugins

**WP Accessibility:**
- Fixes common issues
- Adds skip links
- Improves form labels
- Adds toolbar for user adjustments

**One Click Accessibility:**
- Accessibility toolbar for visitors
- Text size adjustments
- Contrast controls
- Animation pausing

**Accessibility Checker by Equalize Digital:**
- Scans for accessibility issues
- Provides fix suggestions
- Tracks improvement over time

### WordPress Content Best Practices

**When writing content:**
- Use headings properly (H1 for main title, H2 for sections, etc.)
- Add alt text to all meaningful images
- Use descriptive link text
- Write clearly and concisely
- Break up long content with headings

**When adding images:**
- Always add alt text describing the image
- Describe what's important about the image
- For decorative images, leave alt text empty
- Avoid text in images (use real text instead)

**When building pages:**
- Ensure logical reading order
- Test keyboard navigation
- Check colour contrast
- Use sufficient font sizes

### Form Accessibility

Contact forms and checkout forms need attention:

**Labels:** Every field needs a visible label
**Error messages:** Clearly indicate what's wrong and how to fix it
**Required fields:** Indicate which fields are mandatory
**Field grouping:** Related fields should be grouped with fieldset/legend
**Autocomplete:** Help users with autocomplete attributes

### Video and Audio

**For videos:**
- Provide captions (not auto-generated if possible)
- Provide transcript
- Audio description for important visual content
- Pause/play controls accessible via keyboard

**For audio:**
- Provide transcript
- Player controls accessible via keyboard

## Testing Accessibility

### Automated Testing

Automated tools catch many issues:

**WAVE (wave.webaim.org):**
- Browser extension available
- Visual display of issues
- Explains problems and solutions

**Lighthouse (built into Chrome):**
- Accessibility audit included
- Scores and recommendations
- Part of larger performance audit

**axe DevTools:**
- Browser extension
- Detailed issue reporting
- Integration with development workflow

### Manual Testing

Automated tools only catch 30-40% of issues. Manual testing is essential:

**Keyboard testing:**
1. Start at the top of the page
2. Tab through all interactive elements
3. Verify all functions work via keyboard
4. Check that focus is always visible
5. Test with Enter, Space, Escape, Arrows

**Screen reader testing:**
- VoiceOver (Mac, built-in)
- NVDA (Windows, free)
- JAWS (Windows, paid)

Even brief screen reader testing reveals issues automated tools miss.

**Zoom testing:**
1. Zoom to 200%
2. Check nothing breaks
3. Verify all content is still accessible
4. Check horizontal scrolling isn't required

### User Testing

Nothing replaces testing with actual disabled users. Consider:
- Paid accessibility testing services
- Local disability organisations
- Remote user testing platforms

## Creating an Accessibility Statement

An accessibility statement shows commitment and provides contact information:

Include:
- Your commitment to accessibility
- Conformance level you're targeting
- Known issues (be honest)
- Contact information for accessibility feedback
- Date of last update

Example:
> We are committed to making our website accessible to everyone. We aim to meet WCAG 2.2 Level AA standards. If you experience any accessibility barriers, please contact us at accessibility@example.ie.

## Prioritising Fixes

You can't fix everything at once. Prioritise:

### Critical (Fix immediately)

- Keyboard traps (users can't escape)
- No alt text on essential images
- Form submission impossible
- Content completely hidden from screen readers

### High (Fix soon)

- Poor colour contrast
- Missing form labels
- Improper heading structure
- Missing focus indicators

### Medium (Fix when possible)

- Missing skip links
- Inconsistent navigation
- Complex tables without proper markup
- Error handling improvements

### Low (Ongoing improvement)

- Enhanced content descriptions
- Reading level optimisation
- AAA conformance features

## The Business Case

Beyond compliance, accessibility makes business sense:

### Larger Market

15% of potential customers have disabilities. Inaccessible websites exclude them.

### SEO Benefits

Many accessibility improvements also help SEO:
- Proper heading structure
- Alt text for images
- Descriptive link text
- Clean, semantic HTML

### Better User Experience

Accessible sites are usually better for everyone:
- Clearer navigation
- More readable content
- Faster interactions

### Brand Reputation

Demonstrating commitment to accessibility builds trust and shows values.

## The SparkHost Approach

When we build or migrate sites:

- **Recommend accessible themes** and plugins
- **Check basic accessibility** during development
- **Configure for keyboard navigation** and screen readers
- **Advise on content accessibility** best practices

While comprehensive accessibility requires ongoing commitment, we help establish a solid foundation.

## Your Action Items

**This week:**
1. Run WAVE on your homepage
2. Test keyboard navigation
3. Check alt text on key images
4. Verify colour contrast on main elements

**This month:**
1. Create an accessibility statement
2. Fix critical issues identified
3. Train content editors on accessibility
4. Add accessibility to your content workflow

**Ongoing:**
1. Test accessibility with each major change
2. Include accessibility in your design process
3. Consider professional accessibility audit annually
4. Stay informed about regulations

Accessibility isn't a destination — it's an ongoing commitment to building websites that work for everyone.
