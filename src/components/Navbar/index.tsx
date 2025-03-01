import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { navData } from "./data";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className="flex gap-3">
      {navData.map((link) => (
        <Link
          key={link.path}
          href={link.path}
          className={`px-4 rounded-md ${
            link.path === pathname ? "bg-slate-500" : "bg-slate-300"
          }`}
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
};

export default Navbar;
