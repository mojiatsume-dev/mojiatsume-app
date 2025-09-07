import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import { Header } from "@/components/layout/header";
import SessionProviderWrapper from "@/components/layout/session-provider-wrapper";
import { getLocale, getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Mojiatsume",
    template: `%s | Mojiatsume`,
  },
  description:
    "Learn Japanese by collecting words from your favorite video games.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // We use getLocale() and getMessages() from next-intl to correctly
  // get the language and translation files for the provider.
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale} className="dark" style={{ colorScheme: "dark" }}>
      <body className={inter.className}>
        <SessionProviderWrapper>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <div className="relative flex min-h-screen flex-col bg-background">
              <Header />
              <main className="flex-1">{children}</main>
            </div>
          </NextIntlClientProvider>
        </SessionProviderWrapper>
      </body>
    </html>
  );
}
