import { navItems } from "@/lib/site-data";
import { ButtonLink } from "@/app/_components/ui/ButtonLink";
import { Logo } from "@/app/_components/ui/Logo";
import Link from "next/link";

type HeaderProps = {
  activePath?: string;
};

export function Header({ activePath = "/" }: HeaderProps) {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Logo />
        <nav className="nav-links" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link
              className={activePath === item.href ? "active" : undefined}
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <ButtonLink href="/contact-us" variant="primary">
          Get Started
        </ButtonLink>
      </div>
    </header>
  );
}
