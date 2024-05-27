import type { Metadata } from 'next';
import { Rubik } from 'next/font/google';

import { ThemeProvider } from '@/app/providers';

import './styles/globals.css';

const rubik = Rubik({ subsets: ['latin'], variable: '--font-rubik' });

export const metadata: Metadata = {
  title: 'Страница',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en' itemScope itemType='http://schema.org/WebPage'>
      <body
        className={`${rubik.variable} bg-orange bg-z flex min-h-full flex-col items-center bg-orange-100 bg-opacity-70 dark:bg-zinc-900`}
        itemScope
        itemType='http://schema.org/WebSite'
      >
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          {/*  <Header />*/}
          {/*<main className='w-full max-w-prose flex-auto px-4 pt-20'>*/}
          {children}
          {/*<BackgroundAnimation />*/}
          {/*</main>*/}
          {/*<Footer />*/}
        </ThemeProvider>
      </body>
    </html>
  );
}
