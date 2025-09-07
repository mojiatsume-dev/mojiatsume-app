import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import { Header } from "@/components/layout/header";
import SessionProviderWrapper from "@/components/layout/session-provider-wrapper";

const inter = Inter({ subsets: ["latin"] });

// Centralized metadata for the entire application.
// We will make this dynamic with translations later.
export const metadata: Metadata = {
  title: {
    default: "Mojiatsume",
    template: `%s | Mojiatsume`,
  },
  description:
    "Learn Japanese by collecting words from your favorite video games.",
};

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <html lang={locale} className="dark" style={{ colorScheme: "dark" }}>
      <body className={inter.className}>
        <SessionProviderWrapper>
          <div className="relative flex min-h-screen flex-col bg-background">
            <Header />
            <main className="flex-1">{children}</main>
            {/* A Footer component can be added here later */}
          </div>
        </SessionProviderWrapper>
      </body>
    </html>
  );
}
