"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import classes from "@/components/main-header/nav-link.module.css";

export default function NavLink({ href, children }) {
  const path = usePathname();
  return (
    <Link
      className={
        path.startsWith(href) == href
          ? `${classes.active} ${classes.link}`
          : classes.link
      }
      href={href}
    >
      {children}
    </Link>
  );
}
