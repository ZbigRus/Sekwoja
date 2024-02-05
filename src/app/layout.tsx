import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import Header from "@/components/ui/header";
import Footer from "@/components/ui/footer";
import NextTopLoader from "nextjs-toploader";
import ChatBot from "@/components/chatbot/chatbot";
import { Toaster } from "react-hot-toast";

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Sekwoja - Meble na wymiar",
  description:
    "Odkryj niepowtarzalne meble na zamówienie w naszym zakładzie. Specjalizujemy się w indywidualnym projektowaniu oraz precyzyjnej produkcji mebli, aby spełnić najwyższe oczekiwania naszych klientów. Działamy na terenie całej Polski i oferujemy usługi projektowania oraz produkcji mebli na zamówienie. Skontaktuj się z nami już dziś i zamów meble, które spełnią Twoje marzenia.",
  keywords: [
    "meble na zamówienie",
    "indywidualne projektowanie",
    "luksusowe meble",
    "dostosowane meble",
    "precyzyjna produkcja mebli",
    "meble dostosowane do preferencji",
  ],
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || ""),
};

export const revalidate = 3600;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={urbanist.className}>
        <Header />
        <main className="min-h-[calc(100vh-7rem)] flex flex-col overflow-hidden">
          {children}
          <ChatBot />
        </main>
        <Footer />
        <NextTopLoader color="#019843" />
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
