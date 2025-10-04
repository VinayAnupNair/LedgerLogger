// app/layout.tsx
import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import Script from "next/script";
import type { ReactNode } from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Nirav Rohra Portfolio",
  description: "AI Engineer & Innovator",
  icons: {
    icon: "/favicon.ico", // place a favicon.ico in /public
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>

        {/* LinkedIn badge script */}
        <Script
          src="https://platform.linkedin.com/badges/js/profile.js"
          strategy="afterInteractive"
          async
          defer
        />
      </body>
    </html>
  );
}
