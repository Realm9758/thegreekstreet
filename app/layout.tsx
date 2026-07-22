import type { Metadata } from "next";
import { Bebas_Neue, DM_Sans } from "next/font/google";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MobileOrderBar from "@/components/MobileOrderBar";
import { business } from "@/content/site";
import "./globals.css";

const displayFont = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const bodyFont = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Greek Street Waltham Cross | Gyros & Souvlaki",
    template: "%s | Greek Street Waltham Cross",
  },
  description: business.description,
  keywords: [
    "Greek food Waltham Cross",
    "gyros Waltham Cross",
    "souvlaki Waltham Cross",
    "Greek takeaway Hertfordshire",
    "Greek Street Waltham Cross",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: business.name,
    title: "Greek Street Waltham Cross | Gyros & Souvlaki",
    description: business.description,
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Greek Street Waltham Cross",
    description: business.description,
  },
};

const restaurantJsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: business.name,
  description: business.description,
  image: `${siteUrl}/images/food-13.jpg`,
  telephone: business.phoneInternational,
  priceRange: "££",
  servesCuisine: ["Greek", "Mediterranean", "Street food"],
  address: {
    "@type": "PostalAddress",
    streetAddress: business.address.street,
    addressLocality: business.address.locality,
    addressRegion: business.address.region,
    postalCode: business.address.postcode,
    addressCountry: business.address.country,
  },
  hasMenu: `${siteUrl}/menu`,
  sameAs: [business.links.instagram, business.links.justEat],
  openingHoursSpecification: business.openingHours
    .filter((period) => period.opens && period.closes)
    .map((period) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: `https://schema.org/${period.schemaDay}`,
      opens: period.opens,
      closes: period.closes,
    })),
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${displayFont.variable} ${bodyFont.variable}`}>
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <MobileOrderBar />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(restaurantJsonLd) }}
        />
      </body>
    </html>
  );
}
