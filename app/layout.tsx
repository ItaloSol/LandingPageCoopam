import './globals.css';
import type { Metadata } from 'next';

const font = "'Plus Jakarta Sans', sans-serif";

export const metadata: Metadata = {
  metadataBase: new URL('https://coopcam-coop.web.app/'),
  title: 'COOPCAM - Cooperativa de Transporte',
  description: 'Soluções em transporte de cargas e passageiros com excelência e segurança.',
  openGraph: {
    title: 'COOPCAM - Cooperativa de Transporte',
    description: 'Soluções em transporte de cargas e passageiros com excelência e segurança.',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 900,
        height: 360,
        alt: 'COOPCAM - Cooperativa de Transporte',
      },
    ],
    siteName: 'COOPCAM',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'COOPCAM - Cooperativa de Transporte',
    description: 'Soluções em transporte de cargas e passageiros com excelência e segurança.',
    images: ['/og-image.png'],
  },
  alternates: {
    canonical: 'https://coopcam-coop.web.app/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/icon.png" type="image/png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow:ital,wght@0,100..900;1,100..900&family=Exo+2:ital,wght@0,100..900;1,100..900&family=Plus+Jakarta+Sans:ital,wght@0,200..800;1,200..800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={font}>{children}</body>
    </html>
  );
}
