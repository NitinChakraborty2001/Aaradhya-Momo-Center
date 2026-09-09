import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";

import heroImage1 from "@/assets/All Momo Items Of Aaradhya Momo Center.webp";
import heroImage2 from "@/assets/Momos Of Aaradhya Momo Center.webp";
import stallImage from "@/assets/Stall Of Aaradhya Momo Center.webp";

const heroImages = [
  { src: heroImage1, alt: "All momo items of 'Aaradhya Momo Center' are presented together." },
  {
    src: heroImage2,
    alt: "All the momo dishes from 'Aaradhya Momo Center' are presented together.",
  },
];

const WHATSAPP = "https://wa.me/919804115797";
const wa = (text: string) => `${WHATSAPP}?text=${encodeURIComponent(text)}`;

const TITLE = "Aaradhya Momo Center — Hot Momos In Bansberia!";
const DESCRIPTION =
  "Fresh steamed, fried, kurkure and gondhoraj momos in Bansberia (Hooghly)! Open daily 6 PM – 10 PM. Order on WhatsApp: (+91) 9804115797.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "restaurant.restaurant" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

type MenuItem = {
  bn: string;
  en: string;
  price: number;
  note: string;
};

const MENU: MenuItem[] = [
  {
    bn: "চিকেন স্টিম মোমো",
    en: "Chicken Steam Momo (6 Pieces)",
    price: 60,
    note: "Juicy minced chicken, black pepper, coriander. The classic that starts most plates.",
  },
  {
    bn: "ভেজ স্টিম মোমো",
    en: "Veg Steam Momo (6 Pieces)",
    price: 50,
    note: "Cabbage, carrot, potato and green chilli — light, fragrant, and always fresh.",
  },
  {
    bn: "ফ্রাইড মোমো",
    en: "Fried Momo (5 Pieces)",
    price: 70,
    note: "Golden, crisp edges over a soft centre. Dips best with our fiery red chutney.",
  },
  {
    bn: "কুরকুরে মোমো",
    en: "Kurkure Momo (6 Pieces)",
    price: 95,
    note: "Crumbed in a crunchy spice shell for a satisfying crackle with every bite.",
  },
  {
    bn: "গন্ধরাজ মোমো",
    en: "Gondhoraj Momo (6 Pieces)",
    price: 70,
    note: "Gondhoraj lemon and green chilli — sharp, citrusy, a Bengali evening favourite.",
  },
  {
    bn: "গ্রেভি মোমো",
    en: "Gravy Momo (5 Pieces)",
    price: 100,
    note: "Steamed then simmered in a rich onion-tomato gravy. Dip, or don't.",
  },
  {
    bn: "আফগানি মালাই মোমো",
    en: "Afghani Malai Momo (5 Pieces)",
    price: 120,
    note: "Creamy malai filling with a garlic masala gravy — indulgent and slow to sell out.",
  },
  {
    bn: "চিকেন চিজ মোমো",
    en: "Chicken Cheese Momo (6 Pieces)",
    price: 90,
    note: "Cheese that stretches when you bite. The one kids ask for by name.",
  },
  {
    bn: "প্যান ফ্রাইড মোমো",
    en: "Pan Fried Momo (6 Pieces)",
    price: 95,
    note: "Crisp on the base, soft on top, finished with sesame and spring onion.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "Aaradhya Momo Center",
  servesCuisine: ["Momo", "Fast Food", "Tibetan"],
  priceRange: "₹₹",
  telephone: "+91-98041-15797",
  email: "prasanto.bansberia@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "13, Bansberia Road, Opposite Panchanantola Park",
    addressLocality: "Bansberia",
    addressRegion: "West Bengal",
    addressCountry: "IN",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "18:00",
      closes: "22:30",
    },
  ],
  sameAs: [
    "https://www.facebook.com/people/Aaradhya-Momo-Center/61587370466822/",
    "https://www.youtube.com/@prasantobansberia8942",
  ],
  hasMenu: {
    "@type": "Menu",
    hasMenuSection: {
      "@type": "MenuSection",
      name: "Momos",
      hasMenuItem: MENU.map((item) => ({
        "@type": "MenuItem",
        name: item.en,
        description: item.note,
        offers: { "@type": "Offer", price: item.price, priceCurrency: "INR" },
      })),
    },
  },
};

function Index() {
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % heroImages.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-background font-body text-cream">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <i className="aurora-blob -left-32 -top-36 h-130 w-130 bg-flame" />
        <i className="aurora-blob -right-36 top-16 h-150 w-150 bg-primary [animation-delay:-4s]" />
        <i className="aurora-blob -bottom-52 left-[35%] h-110 w-110 bg-primary/70 [animation-delay:-8s]" />
      </div>

      <nav className="sticky top-0 z-20 border-b border-border bg-background/60 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
          <div className="flex items-baseline gap-2">
            <span className="font-bengali text-lg font-semibold leading-none">আরাধ্যা</span>
            <span className="font-display text-2xl tracking-wide">MOMO CENTER</span>
          </div>
          <a
            href={wa("Namaskar! I want to order momo from Aaradhya Momo Center.")}
            className="hidden items-center gap-2 rounded-full border border-primary/40 bg-primary/15 px-4 py-2 text-sm font-semibold text-primary transition-colors hover:bg-primary/25 sm:flex"
          >
            <span className="size-2 rounded-full bg-primary" /> Order On WhatsApp →
          </a>
        </div>
      </nav>

      <header className="relative z-10 mx-auto grid max-w-6xl items-center gap-10 px-5 pb-10 pt-14 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="rise-in">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-flame/40 bg-flame/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.15em] text-flame">
            <span className="size-1.5 rounded-full bg-flame" /> Today's Offer · Free Momo Plate
            Above ₹449
          </div>
          <h1 className="font-display text-6xl leading-[0.85] tracking-tight sm:text-7xl lg:text-8xl">
            HOT MOMOS,
            <br />
            <span className="text-flame">STEAM RISING!</span>
            <br />6 PM — 10 PM.
          </h1>
          <p className="mt-6 max-w-[44ch] leading-relaxed text-muted-foreground text-pretty">
            Fresh momos straight off the burner every evening opposite 'Panchanantola Park' in
            Bansberia! Enjoy a ₹250-for-two deal that never disappoints.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={wa("Namaskar! I want to claim the free momo plate offer (order above ₹449).")}
              className="rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground ring-1 ring-primary/40 transition-colors hover:bg-flame hover:text-cream hover:ring-flame/50"
            >
              Order On WhatsApp →
            </a>
            <a
              href="#menu"
              className="rounded-full border border-border-strong px-6 py-3.5 text-sm font-medium text-cream/90 transition-colors hover:border-cream/40"
            >
              See The Menu
            </a>
          </div>
        </div>

        <div className="rise-in relative [animation-delay:120ms]">
          <div className="relative overflow-hidden rounded-[28px] bg-surface ring-1 ring-white/10">
            <div className="relative aspect-6/5 w-full">
              {heroImages.map((img, i) => (
                <img
                  key={img.src}
                  src={img.src}
                  alt={img.alt}
                  width={1200}
                  height={1008}
                  className={`absolute inset-0 size-full object-cover transition-opacity duration-700 ease-in-out ${
                    i === activeIdx ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
            </div>
            <div className="pointer-events-none absolute inset-0">
              <span className="steam-wisp left-[42%]" />
              <span className="steam-wisp left-[52%] h-45 [animation-delay:1.6s]" />
              <span className="steam-wisp left-[61%] [animation-delay:3s]" />
            </div>
          </div>
          <div className="absolute -left-3 bottom-6 rounded-2xl border border-border-strong bg-background/70 px-4 py-3 ring-1 ring-white/10 backdrop-blur-md">
            <p className="text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
              Avg. For Two:
            </p>
            <p className="font-display text-3xl leading-none text-cream">₹250.</p>
          </div>
        </div>
      </header>

      <div className="relative z-10">
        <div className="h-1 w-full bg-linear-to-r from-flame via-primary to-transparent" />
      </div>

      <section id="menu" className="relative z-10 mx-auto max-w-6xl px-5 py-16">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              The Menu · মেনু।
            </p>
            <h2 className="font-display text-4xl tracking-tight sm:text-5xl">
              9 Ways To Go Hungry →
            </h2>
          </div>
          <span className="hidden font-bengali text-sm text-muted-foreground sm:block">
            প্রতিদিন সন্ধ্যে ৬টা থেকে।
          </span>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {MENU.map((item, i) => (
            <div
              key={item.en}
              className="rise-in group flex flex-col gap-3 rounded-2xl border border-border bg-surface p-5 transition-colors hover:border-primary/40"
              style={{ animationDelay: `${i * 40}ms` }}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex flex-col">
                  <span className="font-bengali text-lg font-semibold leading-tight">
                    {item.bn}
                  </span>
                  <span className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">
                    {item.en}
                  </span>
                </div>
                <span className="font-display text-3xl leading-none text-flame">₹{item.price}</span>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">{item.note}</p>
              <a
                href={wa(`Order: ${item.en}`)}
                className="mt-auto inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-all group-hover:gap-2.5"
              >
                Order <span aria-hidden>→</span>
              </a>
            </div>
          ))}
        </div>
      </section>

      <div className="relative z-10 mx-auto max-w-6xl px-5">
        <div className="flex flex-col items-center justify-between gap-4 rounded-2xl border border-primary/30 bg-primary/10 px-6 py-5 sm:flex-row">
          <p className="text-center text-sm text-cream/90 sm:text-left">
            Hungry already? Tap to start your order on WhatsApp — we confirm in minutes.
          </p>
          <a
            href={wa("Namaskar! I want to start a momo order.")}
            className="shrink-0 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-flame hover:text-cream"
          >
            Start Order →
          </a>
        </div>
      </div>

      <section className="relative z-10 mx-auto max-w-6xl px-5 py-16">
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rise-in rounded-2xl border border-border bg-surface p-6">
            <p className="font-display text-5xl leading-none text-flame">100%</p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Momos steamed fresh to order — never pre-cooked, never kept warm overnight.
            </p>
          </div>
          <div className="rise-in rounded-2xl border border-border bg-surface p-6 [animation-delay:60ms]">
            <p className="font-display text-5xl leading-none text-flame">₹250</p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Comfortable for two, with room for a chutney and a second plate of favourites.
            </p>
          </div>
          <div className="rise-in rounded-2xl border border-border bg-surface p-6 [animation-delay:120ms]">
            <p className="font-display text-5xl leading-none text-flame">6 PM – 10 PM</p>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Open every single evening, rain or shine. Come hungry, leave happy.
            </p>
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto grid max-w-6xl items-stretch gap-6 px-5 pb-16 lg:grid-cols-2">
        <div className="rise-in flex flex-col justify-between rounded-3xl border border-border bg-surface p-7">
          <div>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
              Find Us · Find The Stall
            </p>
            <h2 className="font-display text-4xl tracking-tight">
              Bansberia Road, Opp. Panchanantola Park.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              13, Bansberia Road, Opposite Panchanantola Park, Bansberia, Hooghly, West Bengal,
              India! Look for the bamboo baskets and the steam.
            </p>
            <a
              href="https://maps.google.com/?q=13+Bansberia+Road+Opposite+Panchanantola+Park+Bansberia+Hooghly+West+Bengal"
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-full border border-border-strong px-4 py-2.5 text-sm font-medium text-cream/90 transition-colors hover:border-cream/40"
            >
              Open In Google Maps →
            </a>
          </div>
          <div className="mt-6 flex flex-wrap gap-6 text-sm">
            <div>
              <span className="block text-[11px] uppercase tracking-wider text-muted-foreground">
                Every Day:
              </span>
              <span className="font-semibold text-cream">6:00 PM – 10:00 PM</span>
            </div>
            <div>
              <span className="block text-[11px] uppercase tracking-wider text-muted-foreground">
                Call / WhatsApp:
              </span>
              <span className="font-semibold text-cream">(+91) 9804115797</span>
            </div>
          </div>
        </div>
        <div className="rise-in relative min-h-70 overflow-hidden rounded-3xl border border-border bg-surface-2 [animation-delay:100ms]">
          <img
            src={stallImage}
            alt="Evening momo stall with warm string lights and steaming bamboo baskets"
            width={1008}
            height={800}
            loading="lazy"
            className="absolute inset-0 size-full object-cover"
          />
        </div>
      </section>

      <footer className="relative z-10 border-t border-border bg-background/80">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-8 px-5 py-12 md:flex-row">
          <div className="max-w-xs">
            <div className="mb-3 flex items-baseline gap-2">
              <span className="font-bengali text-lg font-semibold leading-none">আরাধ্যা</span>
              <span className="font-display text-2xl tracking-wide">MOMO CENTER</span>
            </div>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Neighborhood momos are steamed hot every evening opposite Panchanantola Park in
              Bansberia, Hooghly, West Bengal, India.
            </p>
          </div>
          <div className="flex min-w-55 flex-col gap-2 text-sm">
            <span className="mb-1 text-[11px] uppercase tracking-[0.15em] text-muted-foreground">
              Find Us:
            </span>
            <a
              href="tel:+919804115797"
              className="text-cream/90 transition-colors hover:text-flame"
            >
              Phone Call
            </a>
            <a
              href={wa("Namaskar! I want to order momo.")}
              className="text-cream/90 transition-colors hover:text-flame"
            >
              WhatsApp
            </a>
            <div className="mt-1 flex gap-4">
              <a
                href="mailto:prasanto.bansberia@gmail.com"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                E-Mail
              </a>
              <a
                href="https://www.facebook.com/people/Aaradhya-Momo-Center/61587370466822/"
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                Facebook
              </a>
              <a
                href="https://www.youtube.com/@prasantobansberia8942"
                target="_blank"
                rel="noreferrer"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                YouTube
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-border">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-5 py-4 text-xs text-muted-foreground sm:flex-row">
            <span>
              Copywight © Aaradhya Momo Center - All Rights Reserved! · Powered By{" "}
              <a href="https://www.nexadigitalservices.agency">Nexa</a>, A Digital Agency By{" "}
              <a href="https://www.linkedin.com/in/NitinChakraborty2001/">Nitin Chakraborty</a>.
            </span>
            <a
              href={wa("Namaskar! I want to order momo.")}
              className="text-primary transition-colors hover:text-flame"
            >
              Order On WhatsApp →
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
