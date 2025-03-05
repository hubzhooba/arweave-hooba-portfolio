import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "next-themes";
import { Navigation } from "@/components/navigation"; 

const inter = Inter({ subsets: ["latin"] });

// Arweave Favicon Hash (Update this with your latest hash)
const FAVICON_URL = "http://arweave.net/sktybgS6FlI3uVWSKw16iMsR805gyxq3BACTxdv6f3s";

export const metadata: Metadata = {
  title: "Jordyn",
  icons: {
    icon: `${FAVICON_URL}`, // Versioned URL to prevent cache issues
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href={`${FAVICON_URL}`} type="image/x-icon" />
        <link rel="shortcut icon" href={`${FAVICON_URL}`} type="image/x-icon" />
        <link rel="apple-touch-icon" href={`${FAVICON_URL}`} />
        <link rel="mask-icon" href={`${FAVICON_URL}?`} color="#000000" />
        <link rel="mask-icon" href={`${FAVICON_URL}?`} color="#5bbad5" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${inter.className}`}>
        <ThemeProvider attribute="class" defaultTheme="system">
          <Navigation />
          <div className="mx-auto max-w-[1170px] px-4 md:px-6 lg:px-8">
            <main>{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}