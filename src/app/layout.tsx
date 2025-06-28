import type { Metadata } from 'next';
import './globals.css';
import '../styles/fonts.css';
import '../styles/base.css';
import '../styles/navigation.css';
import '../styles/home.css';
import '../styles/swiper.css';
import '../styles/experience.css';
import '../styles/services.css';
import '../styles/responsive.css';
import '../styles/animations.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'remixicon/fonts/remixicon.css';
import Script from 'next/script';

export const metadata: Metadata = {
  title: 'PORTFOLIO',
  description: 'Portfolio website',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* CSS imports moved to top-level imports */}
        {/* Tailwind CSS is already included via PostCSS */}
      </head>
      <body className="overflow-x-hidden">
        {children}
        <Script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js" />
        {/* jQuery removed - using React hooks instead */}
      </body>
    </html>
  );
}
