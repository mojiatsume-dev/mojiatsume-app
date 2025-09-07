import { getTranslations } from "next-intl/server";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function HomePage() {
  const t = await getTranslations("HomePage");

  return (
    <div className="container relative flex-col items-center justify-center pt-20 md:pt-32 lg:pt-40">
      <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[550px]">
        <div className="flex flex-col space-y-2 text-center">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            {t("title")}
          </h1>
          <p className="text-muted-foreground md:text-xl">
            Collect words. Master Japanese. Your game is your textbook.
          </p>
        </div>
        <div className="flex justify-center space-x-4">
          <Button asChild>
            <Link href="/dashboard">Get Started</Link>
          </Button>
          <Button variant="secondary" asChild>
            <Link
              href="https://github.com/mojiatsume-dev/mojiatsume-app"
              target="_blank"
            >
              View on GitHub
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
