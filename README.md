# Lion Borehole Drilling & Civils — Website README

> **"Your Water, Your Freedom!"**

## Quick Start (Run Locally)

This is a **plain HTML/CSS/JS** site — no build step, no server required.

### Option 1: Open directly in your browser
1. Navigate to the site folder: `Lion Water/`
2. Double-click `index.html`

> **Note:** Videos and some browser security features (e.g. `IntersectionObserver`) work best when served via a local server or live deployment. Use Option 2 for the best experience.

### Option 2: Use a local server (recommended for testing)
If you have Python installed:
```bash
cd "c:\Users\felix\OneDrive\Desktop\Lion Water"
python -m http.server 8080
```
Then open `http://localhost:8080` in your browser.

If you have Node.js installed:
```bash
npx serve "c:\Users\felix\OneDrive\Desktop\Lion Water"
```

---

## Folder Structure
```
Lion Water/
├── index.html          ← Home page
├── services.html       ← All 7 services
├── projects.html       ← Photo & video gallery
├── about.html          ← Company story, values, service areas
├── contact.html        ← Quote form + contact details
├── 404.html            ← Custom 404 page
├── sitemap.xml         ← XML sitemap (update domain after deploy)
├── robots.txt          ← SEO robots file (update domain after deploy)
├── css/
│   └── styles.css      ← ALL styles (one file — do not split)
├── js/
│   ├── main.js         ← All JS + SITE_CONFIG (phone, WhatsApp, socials)
│   └── projects-data.js← Gallery data array — edit this to add new photos/videos
└── assets/
    ├── logo/
    │   └── logo.jpg    ← Logo (original)
    ├── media/
    │   ├── images/     ← Project photos
    │   └── videos/     ← Project videos
    └── icons/          ← (reserved for custom icons if needed)
```

---

## ⚙️ How to Change the Phone Number / WhatsApp Link

**Edit ONE place only:**

Open `js/main.js` and update the `SITE_CONFIG` object at the very top:

```js
const SITE_CONFIG = {
  phone: '0694143965',          // ← Change this (digits only, local format)
  phonePretty: '069 414 3965',  // ← Change this (display format)
  whatsapp: 'https://wa.me/27694143965',  // ← Change this (international format)
  whatsappDefault: 'https://wa.me/27694143965?text=Hi%20Lion%20Borehole%20Drilling!%20I%20would%20like%20to%20get%20a%20free%20quote.',
  facebook:  '#',   // ← Add your Facebook page URL here
  tiktok:    '#',   // ← Add your TikTok URL here
  instagram: '#',   // ← Add your Instagram URL here
};
```

Every phone link, WhatsApp button and social link across all pages reads from this single config — no need to edit individual HTML files.

---

## 📸 How to Add New Project Photos or Videos

1. **Drop the file** into the correct folder:
   - Photos → `assets/media/images/`
   - Videos → `assets/media/videos/`
   - Use simple filenames with no spaces, e.g. `drilling-site-5.jpg` or `pump-install-2.mp4`

2. **Open `js/projects-data.js`** and add one object to the `PROJECTS` array:

**For an image:**
```js
{
  file:     'assets/media/images/drilling-site-5.jpg',
  type:     'image',
  category: 'drilling',         // drilling | installations | pumps-tanks
  caption:  'Borehole drilling at a farm in [Location]',
},
```

**For a video:**
```js
{
  file:     'assets/media/videos/pump-install-2.mp4',
  type:     'video',
  category: 'installations',
  caption:  'Full pump installation at a residential property',
  poster:   'assets/media/images/installation-filtration-1.jpg', // thumbnail
},
```

That's it! The gallery on `projects.html` will automatically show the new item.

---

## 🚀 How to Deploy for FREE

### Option 1: Netlify (Easiest — drag & drop)
1. Go to [netlify.com](https://netlify.com) and sign up for free
2. Click **"Add new site"** → **"Deploy manually"**
3. Drag the entire `Lion Water` folder into the browser
4. Your site is live instantly — Netlify gives you a free `.netlify.app` URL
5. For a custom domain (e.g. `lionboreholedrilling.co.za`), add it in Netlify's Domain settings

### Option 2: Cloudflare Pages
1. Go to [pages.cloudflare.com](https://pages.cloudflare.com) and sign up
2. Upload your files via the Cloudflare dashboard (direct upload option)
3. Connect your custom domain if you have one

### Option 3: GitHub Pages
1. Create a free GitHub account at [github.com](https://github.com)
2. Create a new repository, upload all the site files
3. Go to Settings → Pages → Source: main branch
4. GitHub gives you a free URL like `yourusername.github.io/repo-name`

> **After deploying:** Update `sitemap.xml` and `robots.txt` with your real domain URL (search for `lionboreholedrilling.co.za` and replace with your actual domain).

---

## ✅ TODO Checklist — Fill These In

The following placeholders are marked in the code with `<!-- TODO -->` comments or `[TODO: ...]` text. Search for `TODO` in any file to find them all.

### 🔴 Must-do (site won't work correctly without these)
- [ ] **Social media links** — Open `js/main.js`, add Facebook, TikTok and Instagram URLs to `SITE_CONFIG`
- [ ] **Domain name** — After deployment, update `sitemap.xml` and `robots.txt` with your real URL

### 🟡 Important (affects trust and conversions)
- [ ] **Testimonials** (`index.html`) — Replace the 3 placeholder reviews with real customer quotes (name, town, what they said). Consider using Google Reviews screenshots or direct quotes from WhatsApp/Facebook.
- [ ] **Service areas** (`about.html`) — Replace the `[TODO: Province/Town]` tags with your real coverage areas
- [ ] **Business hours** (`contact.html` and `index.html` footer) — Fill in your actual Mon–Fri, Sat, Sun hours
- [ ] **Physical address** (all pages, footer) — Add your business address if you have one, or describe your service area
- [ ] **Google Maps embed** (`contact.html`) — Follow the instructions in the placeholder to embed a Google Maps iframe
- [ ] **Social media links** (all footers, social icons) — Same as above

### 🟢 Nice to have
- [ ] **Founder name & year** (`about.html`) — Add your name and founding year to the company story
- [ ] **Service area provinces** (`about.html`, JSON-LD in `index.html`) — List the provinces you serve for SEO
- [ ] **Google Business profile** — Create/claim one at business.google.com (improves local search rankings)
- [ ] **Civils services** (`about.html`) — If you offer civil works, add details so we can expand that section
- [ ] **Project captions** (`js/projects-data.js`) — All captions are marked `// TODO: add location` — add the town/area for each photo for authenticity
- [ ] **Image optimisation** — For best performance, consider running images through [squoosh.app](https://squoosh.app) to compress them before deployment (reduce to max 1600px wide, ~150–300kB each)

---

## 🎨 Brand Colours (for reference)

| Colour | Hex | Usage |
|--------|-----|-------|
| Deep Navy | `#0D1B4B` | Header, footer, dark backgrounds |
| Water Blue | `#1A6DCC` | Accents, links, section colours |
| Vivid Blue | `#1E8FFF` | Hover states, badges |
| Gold/CTA | `#F5A623` | All call-to-action buttons |
| White | `#FFFFFF` | Backgrounds, text on dark |

---

## 📞 Contact Details Configured

| Field | Value |
|-------|-------|
| Phone | 069 414 3965 |
| WhatsApp | https://wa.me/27694143965 |
| Facebook | # (TODO) |
| TikTok | # (TODO) |
| Instagram | # (TODO) |

---

## Notes & Design Decisions

- **No backend / no build step** — The site is intentionally built in plain HTML/CSS/JS so it can be hosted anywhere for free or very cheaply. The quote form opens WhatsApp directly (no form backend needed).
- **WhatsApp-first** — Every page has at least 3 WhatsApp entry points: header button, floating FAB, and mobile bottom bar. This matches how most South African mobile users prefer to contact businesses.
- **Logo variant** — The logo reads "Lion Borehole Drilling and Civils". A TODO note in `about.html` reminds the owner to confirm and expand the civils section if applicable.
- **Testimonials** — Placeholder testimonials are included but clearly marked. Replace with real reviews as soon as possible — it makes a big difference to conversion.
- **Video performance** — Hero video is `preload="metadata"` and pauses when off-screen. Gallery videos are `preload="none"` and only play inside the lightbox — this minimises data usage for South African mobile users.
- **"Beliable" typo** — The flyer contained "Beliable". This has been corrected to "Reliable" everywhere on the site.
