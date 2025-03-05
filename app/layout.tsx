import './globals.css';
import { Metadata } from 'next';
import { ThemeProvider } from '@/components/theme-provider';

export const metadata: Metadata = {
  metadataBase: new URL('https://nipao.com'),
  title: {
    template: '%s | Nipao.com',
    default: 'Premium Domain Names For Sale | Nipao.com'
  },
  description: 'Browse our collection of premium domain names for sale. Find the perfect domain for your business or project.',
  keywords: ['domain names', 'premium domains', 'domain marketplace', 'domain trading'],
  authors: [{ name: 'Nipao.com' }],
  creator: 'Nipao.com',
  publisher: 'Nipao.com',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: 'zh_CN',
    url: 'https://nipao.com',
    siteName: 'Nipao.com',
    title: 'Premium Domain Names For Sale',
    description: 'Browse our collection of premium domain names for sale. Find the perfect domain for your business or project.',
    images: [
      {
        url: 'https://nipao.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Nipao.com - Premium Domain Names'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Premium Domain Names For Sale | Nipao.com',
    description: 'Browse our collection of premium domain names for sale. Find the perfect domain for your business or project.',
    images: ['https://nipao.com/twitter-image.jpg'],
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
  verification: {
    google: 'your-google-site-verification-code',
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://nipao.com" />
        <link rel="alternate" href="https://nipao.com" hrefLang="x-default" />
        <link rel="alternate" href="https://nipao.com/en" hrefLang="en" />
        <link rel="alternate" href="https://nipao.com/zh" hrefLang="zh" />
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}