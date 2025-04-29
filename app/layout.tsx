import './globals.css';
import type { Metadata } from 'next';

const font = "'Plus Jakarta Sans', sans-serif";

export const metadata: Metadata = {
  title: 'COOPCAM - Cooperativa de Transporte',
  description: 'Soluções em transporte de cargas e passageiros com excelência e segurança.',
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
