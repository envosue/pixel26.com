import './globals.css';
import { Analytics } from '@vercel/analytics/next';
import ScrollReveal from './components/ScrollReveal';
import UTMCapture from './components/UTMCapture';
import CookieBanner from './components/CookieBanner';

export const metadata = {
  metadataBase: new URL('https://pixel26.com'),
  title: {
    default: 'Pixel26 — Digital Studio | Web Design, SEO & Google Ads',
    template: '%s | Pixel26',
  },
  description:
    'Pixel26 is a digital studio that designs premium websites and grows them with SEO and Google Ads. Design craft meets measurable performance.',
  keywords: ['web design', 'SEO', 'Google Ads', 'digital studio', 'web development'],
  openGraph: {
    title: 'Pixel26 — Digital Studio',
    description: 'Premium websites, then growth through SEO and Google Ads.',
    type: 'website',
    siteName: 'Pixel26',
  },
  icons: {
    icon: '/web-assets/pixel26-icon-primary.svg',
  },
};

export const viewport = { themeColor: '#083344' };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google tag (GTM-W9NJM39F). Consent Mode: denied until the visitor accepts in CookieBanner. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
var p26c = null; try { p26c = localStorage.getItem('p26_cookie_consent'); } catch (e) {}
var p26g = p26c === 'accepted' ? 'granted' : 'denied';
gtag('consent', 'default', { ad_storage: p26g, ad_user_data: p26g, ad_personalization: p26g, analytics_storage: p26g });
gtag('js', new Date());`,
          }}
        />
        <script async src="https://www.googletagmanager.com/gtm.js?id=GTM-W9NJM39F"></script>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Hanken+Grotesk:wght@400;500;600;700;800&family=IBM+Plex+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <noscript>
          {/* Ensure content is visible if JavaScript is disabled */}
          <style>{`[data-reveal]{opacity:1 !important;transform:none !important;}`}</style>
        </noscript>
      </head>
      <body>
        {children}
        <Analytics />
        <ScrollReveal />
        <UTMCapture />
        <CookieBanner />
      </body>
    </html>
  );
}
