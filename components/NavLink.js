import Link from "next/link";
import React from "react";

function NavLink({ href, children, ...props }) {
  return (
    <>
      <Link href={href}>
        <a {...props}>{children}</a>
      </Link>
    </>
  );
}

export default NavLink;
