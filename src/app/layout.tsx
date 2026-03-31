import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Vanguard Law | Fighting For What Matters Most.",
  description: "High-end legal representation for personal injury, criminal defense, corporate, family, and immigration law. Secure your free consultation with experienced attorneys today.",
  keywords: ["law firm", "attorney", "legal representation", "personal injury lawyer", "criminal defense", "corporate law", "family law", "immigration law"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
      </head>
      <body className={`${playfair.variable} ${jakarta.variable} font-body bg-white text-darkText antialiased selection:bg-gold selection:text-white`}>
        {children}
      </body>
    </html>
  );
}
