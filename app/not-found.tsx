import type { Metadata } from "next";
import Link from "next/link";
import SiteShell from "./_components/layout/SiteShell";
import Text from "./_components/ui/Text";
import Button from "./_components/ui/Button";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <SiteShell>
      <section className="flex flex-col items-center gap-4 w-full py-16 md:py-24 px-[10%] bg-[#F8F9FF]">
        <Text as="h1" type="verybig" align="center" text="Page not found" />
        <Text as="p" type="lg" color="grey" align="center" text="The page you are looking for does not exist or has moved." />
        <Link href="/">
          <Button text="Back to Home" bttype="primary" />
        </Link>
      </section>
    </SiteShell>
  );
}
