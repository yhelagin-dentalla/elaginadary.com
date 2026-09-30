# elaginadary.com

First production-ready static version of **elaginadary.com**.

## Deployment

Designed for native **Cloudflare Pages Git integration**.

Recommended settings:

- Production branch: `main`
- Framework preset: `None`
- Build command: leave empty
- Build output directory: `public`
- Root directory: repository root

## Structure

```text
public/
├─ index.html
├─ 404.html
├─ robots.txt
├─ sitemap.xml
└─ assets/
   ├─ css/site.css
   ├─ js/site.js
   └─ img/
```

## Content / media

The first version deliberately does not hotlink Instagram or third-party photos. Original portrait / travel / editorial media should be placed in `public/assets/img/` and then connected to the prepared media slots.

## Design direction

Editorial personal site: full-screen opening, large typography, restrained warm palette, asymmetrical magazine-style grid, subtle motion, mobile-first adaptation.
