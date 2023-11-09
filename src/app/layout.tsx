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
        <body className={`${rubik.variable} bg-[#f0e7db] dark:bg-zinc-800`}>
          <ThemeProvider
            attribute='class'
            defaultTheme='system'
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            <main>{children}</main>
            <BackgroundAnimation />
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
