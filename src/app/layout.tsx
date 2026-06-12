import type { Metadata } from "next";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.kpdds.com"),
  title: {
    default: `${site.shortName} | Pediatric Dentist in San Diego`,
    template: `%s | ${site.shortName}`,
  },
  description:
    "Board-certified pediatric dentists and orthodontists in Kensington, San Diego. A caring dental home for your child, from first tooth to braces off. Request an appointment today.",
  openGraph: {
    title: `${site.name}`,
    description: site.tagline,
    url: "https://www.kpdds.com",
    siteName: site.name,
    locale: "en_US",
    type: "website",
    images: [{ url: "/images/office-main-bay.jpg", width: 1050, height: 697 }],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: site.name,
  url: "https://www.kpdds.com",
  telephone: site.phoneTel,
  email: site.email,
  image: "https://www.kpdds.com/images/office-main-bay.jpg",
  slogan: site.tagline,
  address: {
    "@type": "PostalAddress",
    streetAddress: site.address.street,
    addressLocality: site.address.city,
    addressRegion: site.address.state,
    postalCode: site.address.zip,
    addressCountry: "US",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "17:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "08:00",
      closes: "14:00",
    },
  ],
  medicalSpecialty: ["Pediatric Dentistry", "Orthodontics"],
  sameAs: [site.facebook],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="grain flex min-h-full flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Nav />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
