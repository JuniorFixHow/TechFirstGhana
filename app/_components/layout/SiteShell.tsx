import { Footer } from "./Footer";
import { Header } from "./Header";

type SiteShellProps = {
  activePath?: string;
  children: React.ReactNode;
};

export function SiteShell({ activePath, children }: SiteShellProps) {
  return (
    <>
      <Header activePath={activePath} />
      <main>{children}</main>
      <Footer />
    </>
  );
}
