import type { Metadata } from 'next';
import { Rubik } from 'next/font/google';
import './styles/globals.css';
import { ThemeProvider } from '@/app/providers';
import { BackgroundAnimation, Footer, Header } from '@/components';

const rubik = Rubik({ subsets: ['latin'], variable: '--font-rubik' });

export const metadata: Metadata = {
  title: 'Home - Dmitriy Sivritkin',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <html lang='en'>
        <body
          className={`${rubik.variable} flex min-h-full flex-col items-center bg-orange-100 bg-opacity-70 dark:bg-zinc-900`}
        >
          <ThemeProvider
            attribute='class'
            defaultTheme='system'
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            <div className='w-full max-w-[60ch] flex-auto px-3 pt-20'>{children}</div>
            <Footer />
            <BackgroundAnimation />
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
