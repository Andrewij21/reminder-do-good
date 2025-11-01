import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// --- PERUBAHAN SEO DIMULAI DI SINI ---

export const metadata: Metadata = {
  // 1. metadataBase: Wajib diisi dengan URL produksi Anda
  metadataBase: new URL("https://reminder-do-good.vercel.app"),

  // 2. Title: Judul default dan template untuk halaman lain
  title: {
    default: "Daily Kindness Reminder - Simple Actions to Do Good",
    template: "%s | Do Good Reminder",
  },

  // 3. Description: Deskripsi yang jelas tentang apa yang dilakukan aplikasi Anda
  description:
    "Get a simple reminder to do a good deed. Discover daily kindness actions to help make the world a better place, one small positive act at a time.",

  // 4. Keywords: Membantu orang menemukan aplikasi Anda
  keywords: [
    "kindness",
    "reminder",
    "do good",
    "daily actions",
    "self improvement",
    "positive habits",
    "kebaikan",
    "pengingat kebaikan",
  ],

  // 5. OpenGraph (OG) Tags: Untuk tampilan di media sosial (WA, FB, Twitter)
  openGraph: {
    title: "Daily Kindness Reminder",
    description: "Discover simple, positive actions you can do every day. ☀️",
    url: "https://reminder-do-good.vercel.app/",
    siteName: "Do Good Reminder",
    images: [
      {
        url: "/logo.png", // Anda HARUS membuat file ini
        width: 1200,
        height: 630,
        alt: "A reminder to do a good deed",
      },
    ],
    type: "website",
  },

  // 6. Twitter Tags
  twitter: {
    card: "summary_large_image",
    title: "Daily Kindness Reminder",
    description: "Discover simple, positive actions you can do every day. ☀️",
    images: ["/logo.png"], // Menggunakan gambar yang sama
  },

  // 7. Favicon dan Ikon Lainnya
  icons: {
    icon: "/logo.png", // Anda HARUS membuat file ini
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

// --- PERUBAHAN SEO SELESAI ---

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
