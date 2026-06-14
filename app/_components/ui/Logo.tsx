import Link from "next/link";
import { brand } from "@/lib/site-data";

export function Logo() {
  return (
    <Link className="logo" href="/" aria-label={`${brand.name} home`}>
      <span className="logo-mark">T</span>
      <span>{brand.name}</span>
    </Link>
  );
}
