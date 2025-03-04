import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "next-themes";
import { Navigation } from "@/components/navigation"; 

const inter = Inter({ subsets: ["latin"] });

// ✅ Correct metadata for Next.js 13+
export const metadata: Metadata = {
  title: "Jordyn",
  icons: {
    icon: "http://arweave.net/Sr2oTYw46gkoU-mXiycDjgKy8bV0J_zshUFqNjVt87s",
  },
};

// ✅ Correctly structured Server Component
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
