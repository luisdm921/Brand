import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar, Footer } from "../components";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Mi Cocina | Comida Casera con Sabor Tradicional",
  description:
    "Comida casera preparada con recetas tradicionales e ingredientes frescos. Tacos, enchiladas, mole, pozole y más. Entrega a domicilio disponible.",
  keywords:
    "comida casera, comida mexicana, tacos, enchiladas, mole, pozole, tamales, antojitos, platillos caseros, entrega a domicilio, comida tradicional",
  authors: [{ name: "Tu Nombre" }],
  creator: "Mi Cocina Casera",
  publisher: "Mi Cocina Casera",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://www.mimarca.com",
    siteName: "Mi Cocina Casera",
    title: "Mi Cocina | Comida Casera con Sabor Tradicional",
    description:
      "Comida casera preparada con amor. Tacos, enchiladas, mole, pozole y más platillos tradicionales. Entrega a domicilio.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Mi Cocina - Comida Casera Tradicional",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mi Cocina | Comida Casera con Sabor Tradicional",
    description:
      "Comida casera preparada con amor. Tacos, enchiladas, mole, pozole. Entrega a domicilio.",
    images: ["/images/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Store",
              name: "Mi Cocina Casera",
              description:
                "Negocio de comida casera con platillos tradicionales mexicanos preparados con ingredientes frescos y recetas de familia",
              url: "https://www.mimarca.com",
              telephone: "+52-555-123-4567",
              email: "contacto@mimarca.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Calle Principal 123",
                addressLocality: "Ciudad de México",
                addressRegion: "CDMX",
                postalCode: "01000",
                addressCountry: "MX",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "19.4326",
                longitude: "-99.1332",
              },
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                  ],
                  opens: "09:00",
                  closes: "18:00",
                },
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: "Saturday",
                  opens: "10:00",
                  closes: "14:00",
                },
              ],
              priceRange: "$$",
            }),
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
