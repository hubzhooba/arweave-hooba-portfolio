import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "next-themes";
import { Navigation } from "@/components/navigation";
import { AnimatedBackground } from "@/components/AnimatedBackground";
 

const inter = Inter({ subsets: ["latin"] });

// Arweave Favicon Hash (Update this with your latest hash)
const FAVICON_URL = "https://defi.ao/sktybgS6FlI3uVWSKw16iMsR805gyxq3BACTxdv6f3s";

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
        <link rel="preconnect" href="https://defi.ao" />
        <link rel="dns-prefetch" href="https://defi.ao" />
        <link rel="preconnect" href="https://arweave.net" />
        <link rel="dns-prefetch" href="https://arweave.net" />
        <link rel="icon" href={`${FAVICON_URL}`} type="image/x-icon" />
        <link rel="shortcut icon" href={`${FAVICON_URL}`} type="image/x-icon" />
        <link rel="apple-touch-icon" href={`${FAVICON_URL}`} />
        <link rel="mask-icon" href={`${FAVICON_URL}?`} color="#000000" />
        <link rel="mask-icon" href={`${FAVICON_URL}?`} color="#5bbad5" />
      </head>
      <body className={`${inter.className} relative`}>
        <ThemeProvider attribute="class" defaultTheme="system">
          <AnimatedBackground />
          <div className="relative z-10">
            <Navigation />
            <div className="mx-auto max-w-[1170px] px-4 md:px-6 lg:px-8 pt-20">
              <main>{children}</main>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}