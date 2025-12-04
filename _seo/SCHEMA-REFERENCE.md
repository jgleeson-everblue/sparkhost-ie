# SparkHost.ie Schema Markup Reference

> JSON-LD structured data patterns implemented across the site
> Validation: https://search.google.com/test/rich-results

## Schema Types by Page

| Page | Schema Types |
|------|-------------|
| Homepage | Organization, WebSite, LocalBusiness, FAQPage |
| Services | Service, OfferCatalog, BreadcrumbList |
| Pricing | Product, Offers, BreadcrumbList, FAQPage |
| FAQ | FAQPage |
| About | AboutPage, Organization, BreadcrumbList |
| Contact | ContactPage, Organization, BreadcrumbList |
| Blog Index | Blog, BreadcrumbList |
| Blog Posts | BlogPosting, BreadcrumbList |

---

## Organization Schema (Homepage)

Used to establish brand identity in Google's knowledge graph.

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "SparkHost.ie",
  "url": "https://sparkhost.ie",
  "logo": "https://sparkhost.ie/SparkHost-dark.svg",
  "description": "Premium managed WordPress hosting...",
  "foundingDate": "2024",
  "areaServed": {
    "@type": "Country",
    "name": "Ireland"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+353-1-XXX-XXXX",
    "contactType": "customer service",
    "areaServed": "IE",
    "availableLanguage": "English"
  },
  "sameAs": [
    "https://twitter.com/sparkhostie",
    "https://linkedin.com/company/sparkhost"
  ]
}
```

---

## LocalBusiness Schema (Homepage)

Enables local search visibility for "wordpress hosting dublin" queries.

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "SparkHost.ie",
  "image": "https://sparkhost.ie/SparkHost-dark.svg",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "[Address]",
    "addressLocality": "Dublin",
    "addressCountry": "IE"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 53.3498,
    "longitude": -6.2603
  },
  "priceRange": "€€"
}
```

---

## WebSite Schema with SearchAction (Homepage)

Enables sitelinks search box in SERPs.

```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "SparkHost.ie",
  "url": "https://sparkhost.ie",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://sparkhost.ie/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
}
```

---

## FAQPage Schema

Used on Homepage, Pricing, and FAQ pages for rich FAQ snippets.

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is managed WordPress hosting?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Managed WordPress hosting is a premium service..."
      }
    }
  ]
}
```

**Note**: FAQ page has 43 questions dynamically generated into schema.

---

## Service Schema with OfferCatalog (Services Page)

Describes our hosting services with pricing.

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Managed WordPress Hosting",
  "provider": {
    "@type": "Organization",
    "name": "SparkHost.ie"
  },
  "areaServed": {
    "@type": "Country",
    "name": "Ireland"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "WordPress Hosting Plans",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Standard Hosting"
        },
        "price": "40",
        "priceCurrency": "EUR"
      }
    ]
  }
}
```

---

## Product Schema with Offers (Pricing Page)

Enables rich pricing snippets in search results.

```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "Managed WordPress Hosting",
  "description": "Premium WordPress hosting with full management...",
  "brand": {
    "@type": "Brand",
    "name": "SparkHost.ie"
  },
  "offers": {
    "@type": "AggregateOffer",
    "lowPrice": "40",
    "highPrice": "249",
    "priceCurrency": "EUR",
    "offerCount": "2"
  }
}
```

---

## BlogPosting Schema (Blog Posts)

Applied dynamically to each blog post.

```json
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "[Post Title]",
  "description": "[Post Excerpt]",
  "datePublished": "2025-12-01",
  "dateModified": "2025-12-01",
  "author": {
    "@type": "Organization",
    "name": "SparkHost.ie"
  },
  "publisher": {
    "@type": "Organization",
    "name": "SparkHost.ie",
    "logo": {
      "@type": "ImageObject",
      "url": "https://sparkhost.ie/SparkHost-dark.svg"
    }
  },
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://sparkhost.ie/blog/[slug]"
  }
}
```

---

## BreadcrumbList Schema

Applied to all pages except homepage for navigation trails.

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://sparkhost.ie"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Services",
      "item": "https://sparkhost.ie/services"
    }
  ]
}
```

---

## Validation Checklist

Before launch, validate all schema at:

1. **Google Rich Results Test**: https://search.google.com/test/rich-results
2. **Schema.org Validator**: https://validator.schema.org/

### Expected Rich Results

| Page | Expected Rich Result |
|------|---------------------|
| Homepage | Organization card, FAQ accordion |
| FAQ | FAQ accordion snippets |
| Pricing | FAQ accordion, price info |
| Blog Posts | Article rich result with date |
| All Pages | Breadcrumb trails |

---

## Implementation Notes

- All schema uses JSON-LD format (preferred by Google)
- Schema is rendered server-side in Astro components
- Logo URL points to production domain
- Prices are in EUR for Irish market
- Monitor Search Console for schema errors after indexing
