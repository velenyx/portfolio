import type { Metadata } from "next";
import { Space_Grotesk as FontSans } from "next/font/google";

import "./globals.css";
import { cn } from "@/shared/lib/utils";
import { ThemeProvider } from "@/app/providers/theme";

const fontSans = FontSans({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  metadataBase: new URL("https://velenyx.tech"),

  title: "Dmitriy Sivritkin",
  authors: {
    name: "Dmitriy Sivritkin",
  },

  description:
    "I'm a software engineer passionate about building a modern web application that users love 🏗️",
  openGraph: {
    title: "Dmitriy Sivritkin",
    description:
      "I'm a software engineer passionate about building a modern web application that users love 🏗️",
    url: "https://velenyx.tech",
    siteName: "Dmitriy Sivritkin",
    images: "/og.png",
    type: "website",
  },
  keywords: [
    "web coding",
    "velenyx",
    "react",
    "developer",
    "ts",
    "nextjs",
    "tailwind",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
