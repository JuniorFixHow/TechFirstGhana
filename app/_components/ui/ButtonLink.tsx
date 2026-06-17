import Link from "next/link";

type ButtonLinkProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "light" | "dark" | "outline";
} & React.ComponentProps<"a">;

export function ButtonLink({ href, children, variant = "primary", className, ...props }: ButtonLinkProps) {
  return (
    <Link className={`btn btn-${variant} ${className}`} href={href} {...props}>
      {children}
    </Link>
  );
}
