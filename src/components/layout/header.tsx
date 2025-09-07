import Link from "next/link";
import { AuthButtons } from "@/components/layout/auth-buttons";

// The main header component for the application.
// It's a server component, keeping it fast and lightweight.
export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 max-w-screen-2xl items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            {/* We'll add a proper logo SVG later */}
            <span className="font-bold">文字集め</span>
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <AuthButtons />
        </div>
      </div>
    </header>
  );
}
