---
title: "Image Optimisation for WordPress: The Complete Guide for Irish Websites"
excerpt: "Images are often the biggest culprit behind slow WordPress sites. Here's how to optimise them properly without sacrificing quality."
publishedDate: "2025-10-29"
author: "SparkHost Team"
featured: false
---

That stunning hero image on your homepage could be silently killing your conversions. Large, unoptimised images are the most common reason WordPress sites load slowly, and slow sites lose customers.

Studies consistently show that a one-second delay in page load time can reduce conversions by 7%. For an Irish e-commerce site doing €100,000 per month, that's €7,000 in lost revenue — every month.

The good news? Image optimisation is one of the easiest performance wins you can achieve.

## Why Images Matter So Much

On a typical WordPress website, images account for 50-80% of total page weight. A single unoptimised photograph can be 5MB or more — larger than all your HTML, CSS, and JavaScript combined.

When a visitor loads your page, their browser must download every image before rendering the complete page. On mobile connections, especially in rural Ireland where coverage can be patchy, large images create painful wait times.

### The Real-World Impact

Consider two identical Irish websites selling the same products:

**Site A:** Unoptimised images, 8-second load time
**Site B:** Optimised images, 2-second load time

Site B will have:
- Higher Google rankings ([speed is a ranking factor](/blog/core-web-vitals-wordpress))
- Lower bounce rates (visitors stay longer)
- Better conversion rates (faster sites convert better)
- Lower hosting costs (less bandwidth usage)
- Better mobile experience (crucial as 60%+ of traffic is mobile)

## Understanding Image Formats

Choosing the right format is the first step to optimisation.

### JPEG (JPG)

**Best for:** Photographs, images with many colours
**Compression:** Lossy (some quality lost, but file size much smaller)
**Transparency:** No

JPEG is the workhorse of web images. It handles photographs brilliantly, achieving significant compression while maintaining acceptable visual quality.

### PNG

**Best for:** Graphics, logos, images needing transparency
**Compression:** Lossless (no quality loss, but larger files)
**Transparency:** Yes

PNG is essential when you need transparent backgrounds or crisp graphics with limited colours. But don't use PNG for photographs — file sizes will be enormous.

### WebP

**Best for:** Everything (photographs and graphics)
**Compression:** Both lossy and lossless options
**Transparency:** Yes
**Browser support:** All modern browsers

WebP is the modern standard, offering 25-35% smaller file sizes than JPEG at equivalent quality. All modern browsers support WebP, though you should provide fallbacks for older browsers.

### AVIF

**Best for:** Maximum compression needs
**Compression:** Superior to WebP
**Transparency:** Yes
**Browser support:** Good (Chrome, Firefox, recent Safari)

AVIF offers even better compression than WebP — up to 50% smaller files. Browser support is catching up, making it increasingly viable for progressive enhancement.

### SVG

**Best for:** Icons, logos, simple graphics
**Compression:** N/A (vector format)
**Transparency:** Yes
**Scaling:** Infinite without quality loss

SVGs are perfect for icons and logos. They're text-based, tiny, and scale to any size without pixelation. But they're unsuitable for photographs.

## Image Optimisation Fundamentals

### 1. Size Images Correctly

Never upload images larger than needed. If your content area is 800 pixels wide, there's no point uploading a 4000-pixel-wide image.

**Rule of thumb:** Upload images at 2x your display size for retina screens. If displaying at 400px, upload at 800px.

Before uploading:
1. Check where the image will display
2. Determine the maximum display width
3. Resize to 2x that width maximum
4. Then compress

### 2. Compress Without Visible Quality Loss

Image compression removes data to reduce file size. The key is removing data humans won't notice.

**Online tools:**
- TinyPNG/TinyJPG — Excellent for quick compression
- Squoosh.app — Google's advanced compression tool with previews
- Compressor.io — Good balance of ease and results

**Desktop tools:**
- ImageOptim (Mac) — Batch compression
- RIOT (Windows) — Detailed compression control
- Photoshop/GIMP — Export with quality settings

**Target file sizes:**
- Hero images: Under 200KB
- Content images: Under 100KB
- Thumbnails: Under 30KB

### 3. Use Responsive Images

Different devices need different image sizes. Sending a 2000px image to a 400px phone screen wastes bandwidth.

WordPress has built-in responsive images, creating multiple sizes on upload:
- Thumbnail
- Medium
- Medium Large
- Large
- Full

It then uses the `srcset` attribute to serve the appropriate size based on screen dimensions.

## WordPress Optimisation Plugins

### ShortPixel

**Pricing:** Free tier (100 images/month), then from €4/month
**Compression:** Lossy, Glossy, and Lossless options
**WebP:** Yes, automatic conversion
**Features:** Bulk optimisation, next-gen formats, backups

ShortPixel is our top recommendation. It balances excellent compression with ease of use and reasonable pricing.

### Imagify

**Pricing:** Free tier (20MB/month), then from €5/month
**Compression:** Three quality levels
**WebP:** Yes, with paid plans
**Features:** Bulk optimisation, backup, resize on upload

Another excellent option with a user-friendly interface. Slightly more expensive than ShortPixel for equivalent usage.

### Smush

**Pricing:** Free version available, Pro from €7/month
**Compression:** Limited in free version
**WebP:** Pro only
**Features:** Lazy loading, CDN (Pro), bulk optimisation

Popular but the free version is quite limited. Pro offers good value if you're on the WPMU DEV ecosystem.

### EWWW Image Optimizer

**Pricing:** Free with limitations, API from €7/month
**Compression:** Good
**WebP:** Yes
**Features:** Local compression option, no file size limits

EWWW can compress locally without sending images to external servers — useful if you have privacy concerns or large images.

## Implementing Lazy Loading

Lazy loading delays image loading until they're about to enter the viewport. This dramatically improves initial page load times.

### Native Lazy Loading

WordPress 5.5+ adds lazy loading automatically using the native browser attribute:

```html
<img loading="lazy" src="image.jpg" alt="Description">
```

This works in all modern browsers and requires no plugins.

### Plugin-Based Lazy Loading

For more control, plugins offer additional features:

**a3 Lazy Load** — Simple, effective, free
**Lazy Load by WP Rocket** — Basic but reliable
**perfmatters** — Part of a broader performance plugin

### Lazy Loading Best Practices

- Don't lazy load above-the-fold images (hero sections)
- Use placeholder colours or blur-up effects to prevent layout shift
- Test on slow connections to verify behaviour
- Ensure images have width and height attributes set

## CDN Integration for Images

A [Content Delivery Network](/blog/cdn-content-delivery-network-wordpress) stores copies of your images on servers worldwide. Irish visitors get images from nearby European servers; Australian visitors get images from Oceanian servers.

### Benefits

- Faster delivery to international visitors
- Reduced load on your hosting server
- Better handling of traffic spikes
- Additional caching layer

### Options for WordPress

**Cloudflare:** Free tier includes CDN with Polish (image optimisation) on paid plans

**BunnyCDN:** Excellent performance, very affordable (€0.01/GB)

**imgix/Cloudinary:** Image-specific CDNs with on-the-fly optimisation

**Host-integrated:** SparkHost includes Cloudflare CDN on all plans

## Auditing Your Current Images

Before optimising, understand where you stand:

### Use PageSpeed Insights

1. Visit pagespeed.web.dev
2. Enter your URL
3. Look for "Properly size images" and "Efficiently encode images"
4. Click for specific recommendations

### Use GTmetrix

1. Visit gtmetrix.com
2. Analyse your page
3. Check the Waterfall tab to see image file sizes
4. Look for opportunities in the Structure tab

### Manual Audit

1. Navigate to Media > Library in WordPress
2. Look at file sizes (add the column if not visible)
3. Identify images over 200KB
4. Check if WebP versions exist

## Step-by-Step Optimisation Process

### For New Sites

1. Install ShortPixel or equivalent before uploading images
2. Configure automatic WebP conversion
3. Set maximum upload dimensions (2048px is usually sufficient)
4. Enable automatic resizing on upload
5. Upload images — they'll be optimised automatically

### For Existing Sites

1. Install your chosen optimisation plugin
2. Run the bulk optimisation tool
3. Convert existing images to WebP
4. Add lazy loading if not already present
5. Test site performance before and after
6. Monitor ongoing uploads

## Common Mistakes to Avoid

### Uploading Screenshots as PNG

Screenshots often get saved as PNG. For photographs or complex images, convert to JPEG before uploading.

### Resizing in WordPress Instead of Before Upload

Uploading a 5000px image and displaying it at 500px still makes visitors download the 5000px version (in many themes). Resize before upload.

### Ignoring Alt Text

While not directly related to file size, missing alt text hurts accessibility and SEO. Always add descriptive alt text.

### Over-Compressing

There's a point where compression visibly degrades quality. Test your images at different compression levels to find the sweet spot.

### Forgetting About Thumbnails

WordPress creates multiple sizes. Ensure your plugin optimises all generated sizes, not just the original.

## The SparkHost Approach

All SparkHost plans include:

- **Cloudflare CDN** — Images cached globally
- **Automatic WebP serving** — When browser supports it
- **Polish image optimisation** — On Professional and Enterprise plans
- **Performance monitoring** — We track and optimise proactively

We often achieve 60-80% reduction in image-related page weight during site migrations. Our [speed optimisation services](/services/speed-optimisation) include comprehensive image optimisation.

## Take Action Today

1. **Audit your images** — Use PageSpeed Insights to identify issues
2. **Install an optimisation plugin** — ShortPixel or Imagify
3. **Run bulk optimisation** — Convert existing images
4. **Enable WebP** — Serve modern formats
5. **Test your results** — Compare before and after metrics

Image optimisation isn't a one-time task. Build good habits, use automation, and your site will stay fast as you add more content. For a complete overview of performance optimisation, see our [speed guide](/blog/speed-up-wordpress-site).
