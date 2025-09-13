// app/layout.tsx
import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import Script from "next/script" // ✅ add this

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Nirav Rohra Portfolio",
  description: "AI Engineer & Innovator",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>

        {/* ✅ Load LinkedIn badge script once, after hydration */}
        <Script
          src="https://platform.linkedin.com/badges/js/profile.js"
          strategy="afterInteractive"
           async defer type="text/javascript"
        />
      </body>
    </html>
  )
}
