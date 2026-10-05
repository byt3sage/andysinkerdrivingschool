import type { Metadata, Viewport } from "next";
import Link from "next/link";
import { Outfit, Nunito_Sans } from "next/font/google";
import "./globals.css";
import MobileNav from "./components/MobileNav";
import AccreditationBanner from "./components/AccreditationBanner";
import siteContent from "../content/site.json";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
  axes: ["wdth"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://andysinkerdriving.co.uk"),
  title: {
    default: "Andy Sinker Driving School | Lessons, Training & Franchising",
    template: "%s | Andy Sinker Driving School",
  },
  description:
    "Book driving lessons, build your instructor career with ADI training, or scale through franchise growth support.",
  keywords: [
    "driving lessons",
    "driving lesson bookings",
    "driving instructor training",
    "franchise driving school",
    "become an ADI",
    "PDI training",
    "driving school franchise UK",
  ],
  openGraph: {
    title: "Andy Sinker Driving School",
    description:
      "Driving lessons, instructor training, franchise pathways, and learner acquisition systems.",
    url: "https://andysinkerdriving.co.uk",
    siteName: "Andy Sinker Driving School",
    type: "website",
    locale: "en_GB",
  },
  alternates: {
    canonical: "https://andysinkerdriving.co.uk",
  },
  twitter: {
    card: "summary_large_image",
    title: "Andy Sinker Driving School",
    description:
      "Driving lessons, instructor training, and franchising opportunities with scalable growth systems.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "DrivingSchool",
    name: "Andy Sinker Driving School",
    url: "https://andysinkerdriving.co.uk",
    areaServed: "United Kingdom",
    knowsAbout: [
      "driving lessons",
      "ADI training",
      "driving instructor franchising",
      "intensive courses",
    ],
  };

  return (
    <html lang="en" className={`${outfit.variable} ${nunitoSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <header className="site-header">
          <div className="site-shell">
            <Link href="/" className="brand-mark" aria-label="Andy Sinker Driving School home">
              <span>AS</span>
              <div>
                <p>{siteContent.brand.firstLine}</p>
                <p>{siteContent.brand.secondLine}</p>
              </div>
            </Link>
            <nav aria-label="Primary">
              <ul className="site-nav">
                <li>
                  <Link href="/about">About</Link>
                </li>
                <li>
                  <Link href="/driving-lessons">Driving Lessons</Link>
                </li>
                <li>
                  <Link href="/instructor-training">Instructor Training</Link>
                </li>
                <li>
                  <Link href="/franchise">Franchising</Link>
                </li>
                <li>
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </nav>
            <MobileNav />
            <Link className="button-secondary" href="/contact">
              {siteContent.brand.bookingButton}
            </Link>
          </div>
        </header>
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <AccreditationBanner />
        <footer className="site-footer">
          <div className="site-shell footer-grid">
            <div>
              <h2>{siteContent.footer.name}</h2>
              <p>{siteContent.footer.tagline}</p>
            </div>
            <div>
              <h3>{siteContent.footer.exploreHeading}</h3>
              <ul>
                <li>
                  <Link href="/about">About</Link>
                </li>
                <li>
                  <Link href="/driving-lessons">Driving Lessons</Link>
                </li>
                <li>
                  <Link href="/instructor-training">Instructor Training</Link>
                </li>
                <li>
                  <Link href="/franchise">Franchise Opportunities</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3>{siteContent.footer.contactHeading}</h3>
              <ul>
                <li>
                  <a href={`tel:${siteContent.footer.phoneDisplay.replace(/\s/g, "")}`}>
                    {siteContent.footer.phoneLabel}: {siteContent.footer.phoneDisplay}
                  </a>
                </li>
                <li>
                  <a href={`mailto:${siteContent.footer.email}`}>{siteContent.footer.email}</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="site-shell footer-note">
            <p>© {new Date().getFullYear()} Andy Sinker Driving School. All rights reserved.</p>
          </div>
        </footer>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </body>
    </html>
  );
}
