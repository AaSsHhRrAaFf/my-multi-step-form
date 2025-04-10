


import { Roboto } from "next/font/google"
import "./globals.css"


const roboto = Roboto({
  weight: ["300", "400", "500", "700"], 
  subsets: ["latin"],
  variable: "--font-roboto",
})

export const metadata = {
  title: "Multi-Step Form",
  description: "A modern multi-step form built with Next.js and Tailwind CSS",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning={true} className={`${roboto.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}
