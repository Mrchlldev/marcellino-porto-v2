import type { Metadata } from "next";
import { siteSettings } from "@/lib/settings";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { AOSProvider } from "@/components/aos-provider";
import "./globals.css";

export const metadata: Metadata = {
  title: `${siteSettings.name} - Portfolio`,
  description: siteSettings.description,
  keywords: siteSettings.keywords
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <AOSProvider />
        <Navbar />
        <main className="min-h-screen overflow-hidden pt-24">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
