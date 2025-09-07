"use client";

import { SessionProvider } from "next-auth/react";

// This is a wrapper component that allows us to use the SessionProvider
// in a Server Component layout.
export default function SessionProviderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SessionProvider>{children}</SessionProvider>;
}
