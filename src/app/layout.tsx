// layout.tsx
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "next-themes";
import { Navigation } from "@/components/navigation"; // Import Navigation

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Jordyn",
  icons: {
    icon: "http://arweave.net/hssE2Z_g0G8XRH2PhfLvnCLdj1sW-2RPP-nqFrApRJA",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className}`}>
        <ThemeProvider attribute="class" defaultTheme="system">
          <Navigation />
          {/* Centered container with increased max-width */}
          <div className="mx-auto max-w-[1170px] px-4 md:px-6 lg:px-8">
            <main>{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
