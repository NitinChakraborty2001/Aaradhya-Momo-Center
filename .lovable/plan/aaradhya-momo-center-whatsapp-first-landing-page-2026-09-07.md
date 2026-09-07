# Aaradhya Momo Center — WhatsApp-first landing page

A single, immersive page in the "Steam Over Dark" direction: deep green-black backdrop, drifting warm glow, rising steam over the food photo, flame-orange prices and a green WhatsApp action everywhere the visitor gets hungry.

## What the page contains

1. **Top bar** — Bengali + English name, "Order on WhatsApp" button that stays visible while scrolling.
2. **Hero** — offer badge, big headline (HOT MOMOS / STEAM RISING / 6 PM — 10:30 PM), one-line pitch, WhatsApp order button + "See the menu", food photo with animated steam and a "₹250 avg for two" tag.
3. **Menu** — all nine items, each with the Bengali name, English name, a mouth-watering one-liner, a price, and its own "Order" link that opens WhatsApp with that item pre-typed.
4. **Order strip** — a mid-page nudge back to WhatsApp.
5. **Three proof tiles** — freshly steamed to order, ₹250 for two, open every evening.
6. **Find us** — full Bansberia address, daily timing, phone, plus a "Open in Google Maps" link and an evening-street image.
7. **Footer** — phone, e-mail, Facebook, YouTube, closing WhatsApp link.

## The offer

Since no offer was given, the page will headline: **"Free plate of Veg Steam Momo on WhatsApp orders above ₹250 — today only"**, with a tap-to-claim WhatsApp message pre-filled. Tell me the real offer and I'll swap it in — same for anything else you want changed.

## Prices

No price list was provided, so each item gets a sensible placeholder (₹70–₹120 range, matching ₹250 for two). These are invented numbers and must be replaced with your real prices before sharing the page.

## Technical notes

- Rewrite `src/routes/index.tsx` as the landing page, replacing the placeholder; menu items live in a typed array so prices/copy are edited in one place.
- Carry the direction's tokens into `src/styles.css` (`background`, `surface`, `cream`, `muted`, `primary` green, `flame` orange, radii) as oklch semantic tokens; no hardcoded colors in the markup.
- Fonts Bebas Neue, Inter and Noto Serif Bengali loaded via `<link>` in `src/routes/__root.tsx`; Bengali text uses the Bengali family.
- Aurora drift, steam rise, and section reveal animations as `@utility`/keyframes in `src/styles.css`, respecting reduced-motion.
- Two images generated from the direction's prompts (hero momo basket, evening stall/location) into `src/assets/`; no placeholder divs ship.
- All CTAs are `https://wa.me/919804115797` links with URL-encoded prefilled text; phone `tel:`, e-mail `mailto:`, social links as given.
- SEO: route-level `head()` with local-intent title/description, og/twitter tags, single H1, alt text, and LocalBusiness/Restaurant JSON-LD carrying address, hours, phone and menu.
