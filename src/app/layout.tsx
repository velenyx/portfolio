import type { Metadata } from 'next';
import { Rubik } from 'next/font/google';
import './styles/globals.css';
import { ThemeProvider } from '@/app/providers';
import { BackgroundAnimation, Header } from '@/components';

const rubik = Rubik({ subsets: ['latin'], variable: '--font-rubik' });

export const metadata: Metadata = {
  title: "Create Nexert App',\n" + "  description: 'Genated by create next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <html lang='en'>
        <body className={rubik.variable}>
          <ThemeProvider
            attribute='class'
            defaultTheme='system'
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            <main className='bg-[#f0e7db] dark:bg-zinc-800'>{children}</main>
            <BackgroundAnimation />
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
