import type { Metadata } from 'next';
import { Rubik } from 'next/font/google';
import './styles/globals.css';
import { ThemeProvider } from '@/app/providers';
import { BackgroundAnimation, Header } from '@/components';

const rubik = Rubik({ subsets: ['latin'], variable: '--font-rubik' });

export const metadata: Metadata = {
  title: 'Home - Dmitriy Sivritkin',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <html lang='en'>
        <body
          className={`${rubik.variable} flex  flex-col items-center bg-orange-100 dark:bg-zinc-900`}
        >
          <ThemeProvider
            attribute='class'
            defaultTheme='system'
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            <main className=' w-full max-w-[60ch] px-3 py-16 pt-20'>{children}</main>
            <BackgroundAnimation />
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
