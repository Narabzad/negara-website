# negar.me

Personal site, hand-built. No frameworks, no build step.

## Site map

| Page | URL | Contents |
|------|-----|----------|
| Home | `index.html` | Hero (photo + bio), news, banner cards |
| About | `about.html` | Longer personal bio, things I love, travel map |
| Publications | `publications.html` | Full list grouped by year |
| Research | `research-experience.html` | Positions, internships, education |
| Talks | `talks.html` | Selected talks by year |
| Contact | `contact.html` | Email, links, CV |

## File layout

```
index.html
about.html
publications.html
research-experience.html
talks.html
contact.html
assets/
  styles.css                              all styling
  favicon.svg
  photo_2022-08-25_15-56-56.avif          portrait
  CV_Negar_arabzadeh_April_2026.pdf
  ...
```

## Editing

Everything is plain HTML and CSS. Open the files in any editor and change
the text.

| Want to change... | Edit |
|------|------|
| The bio on the home page | `index.html`, the `<header class="hero">` block |
| The longer bio / personal story | `about.html` |
| News items | `index.html`, the `<ul class="news-list">` block |
| A new publication | `publications.html`, top of the relevant `<section class="pub-year">` |
| Talks / positions / contact info | the corresponding HTML file |
| The whole site's color palette | `assets/styles.css`, the `:root { ... }` block |

### Recoloring in 10 seconds

In `assets/styles.css`, change these lines:

```css
--bg: #fbf8f2;        /* warm off-white */
--ink: #1d1b18;       /* near-black */
--accent: #c4553d;    /* terracotta */
--highlight: #f4e2a8; /* mustard tag highlight */
```

The `--accent` color drives links, the offset block behind the photo,
the highlighted countries on the world map, the card hover, the
publication year markers, and basically anything that pops. Try
`#2a6f6a` (teal), `#7a4eab` (plum), or `#3d6cc4` (cobalt).

### CV

Replace `assets/CV_Negar_arabzadeh_April_2026.pdf` with your latest CV
and update the filename in: `index.html`, `talks.html`,
`research-experience.html`, `contact.html`.
(Search for `CV_Negar_arabzadeh` and replace.)

## Local preview

```bash
cd /work/negara/website
python3 -m http.server 8000
# open http://localhost:8000
```

## Deploying

Any static host works:

- **Netlify** — drag-and-drop the folder at <https://app.netlify.com/drop>; point your `negara.me` DNS at it.
- **Cloudflare Pages** — free, fast.
- **Vercel** — also free, drag-and-drop.
- **GitHub Pages** — free; the "github.io look" you didn't like comes from *templates* (al-folio etc.), not from the host.

## Notes

- The world map on `about.html` uses [jsvectormap](https://jvm-docs.vercel.app) loaded from jsDelivr. To self-host, download the three files (CSS, JS, world map) into `assets/` and update the `<link>` / `<script>` URLs.
- England and Scotland both map to the ISO code `GB`, so the map highlights 24 unique regions even though the visit list says 25. The numbered list shows all 25.
- A few publication links from the original Wix export pointed to the wrong PDF (the same EMNLP 2024 anthology URL was attached to multiple papers — likely a scraping artifact). Those wrong links were dropped; titles without an `<a>` wrapper need a correct PDF/arXiv URL added.
- The two `Screenshot 2022-08-25 ...avif` files in `assets/` are not used yet — tell me what they are and I'll place them.

