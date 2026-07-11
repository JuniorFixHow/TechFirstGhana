import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Providers from "@/app/Providers";

type SiteShellProps = {
    activePath?: string;
    children: ReactNode;
}

const SiteShell = ({ activePath, children }: SiteShellProps) => {
  return (
    <Providers>
      <Header activePath={activePath} />
      {children}
      <Footer />
    </Providers>
  )
}

export default SiteShell