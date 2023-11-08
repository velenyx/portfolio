import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './styles/globals.css';
import { ThemeProvider } from '@/app/providers';
import { Header } from '@/components';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Create Nexert App',\n" + "  description: 'Genated by create next app",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <html lang='en'>
        <body className={inter.className}>
          <ThemeProvider
            attribute='class'
            defaultTheme='system'
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            <main className='bg-neutral-100 dark:bg-gray-700'>{children}</main>
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
