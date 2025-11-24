import type { Metadata } from 'next';
import { Inter, Sofia_Sans_Semi_Condensed } from 'next/font/google';
import './globals.css';
import { Toaster } from 'sonner';
import Script from 'next/script';
import { NextIntlClientProvider } from 'next-intl';
import { cookies } from 'next/headers';

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
});

const sofia = Sofia_Sans_Semi_Condensed({
  variable: '--font-sofia-sans-semi-condensed',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'PharmaServ Nigeria website',
  description:
    'PharmaServ empowers Pharma and life sciences teams with Omnichannel AI-powered workflow automation, medical content creation, design, and approval, personalized HCP engagement, delivering personalized HCP engagement, real-time analytics, and boosting productivity.',
  icons: {
    icon: '/assets/images/Favicon.png',
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const locale = cookieStore.get('locale')?.value || 'en';

  return (
    <html lang={locale}>
      {/* Google Tag (gtag.js) - Part 1: External script */}
      <Script
        strategy="afterInteractive" // Loads after the page becomes interactive
        src="https://www.googletagmanager.com/gtag/js?id=G-S8Q3EP88QV"
      />

      {/* Google Tag (gtag.js) - Part 2: Inline initialization script */}
      <Script
        id="google-analytics-init" // Unique ID for this inline script
        strategy="afterInteractive" // Matches the strategy of the first part
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-S8Q3EP88QV');
          `,
        }}
      />
      <Script
        id="microsoft-clarity-script"
        strategy="lazyOnload" // Or "lazyOnload" if you want it to load later
        dangerouslySetInnerHTML={{
          __html: `
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "k91c3ujzy5");
          `,
        }}
      />

      <body className={`${inter.variable} ${sofia.variable} antialiased`}>
        <NextIntlClientProvider locale={locale}>
          <div className="">{children}</div>
          <Toaster position="top-right" richColors />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
