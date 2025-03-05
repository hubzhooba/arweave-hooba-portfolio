import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "next-themes";
import { Navigation } from "@/components/navigation";

const inter = Inter({ subsets: ["latin"] });

// Update with your correct HTTPS Arweave URL
const FAVICON_URL = "https://arweave.net/sktybgS6FlI3uVWSKw16iMsR805gyxq3BACTxdv6f3s";

export const metadata: Metadata = {
  title: "Jordyn",
  icons: {
    icon: FAVICON_URL,
    shortcut: FAVICON_URL,      // Optional: for "shortcut icon"
    apple: FAVICON_URL,         // Optional: for Apple touch icon
    other: {
      rel: "mask-icon",
      url: FAVICON_URL,
      color: "#000000",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
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
