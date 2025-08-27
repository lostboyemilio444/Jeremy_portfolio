import type React from "react"
import type { Metadata } from "next"
import { Oswald, Inter } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { ThemeProvider } from "@/components/theme-provider"
import ClientLayout from "./ClientLayout"


  


const oswald = Oswald({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-oswald",
  weight: ["300", "400", "500", "600", "700"],
})

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
})

export const metadata: Metadata = {
  title: "Jeremy Torres Hosp - Portfolio",
  description: "Creative. Bold. Ready to make an impact.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  
  return (
    <html lang="en" className={`${oswald.variable} ${inter.variable} antialiased`} suppressHydrationWarning>
      <body className="bg-background text-foreground font-sans">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <ClientLayout>
            <Navigation />
            {children}
            <Footer />
          </ClientLayout>
        </ThemeProvider>
      </body>
    </html>
  )
}


