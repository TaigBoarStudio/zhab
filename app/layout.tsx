import type { Metadata } from "next";
import "../src/index.css";
import PageTransition from "../src/components/shared/PageTransition";
import LoadingScreen from "../src/components/shared/LoadingScreen";
import GlobalUI from "../src/components/shared/GlobalUI";
import { ThemeProvider } from "../src/context/ThemeContext";
import Navbar from "../src/components/layout/Navbar";
import Footer from "../src/components/layout/Footer";

export const metadata: Metadata = {
  title: "Чайный Жабъ — Проводник в мир китайского чая",
  description: "Глубокие состояния, древние традиции и настоящий китайский чай.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className="min-h-screen bg-paper-100 text-ink-950 font-sans selection:bg-gold-500/30 selection:text-gold-500 relative">
        <ThemeProvider>
          <LoadingScreen />
          <GlobalUI />
          <Navbar />
          <div className="noise-overlay" />
          <PageTransition>
            <main className="flex-grow">
              {children}
            </main>
          </PageTransition>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
