"use client";

import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Command } from "lucide-react";

const Navbar = () => {
  const pathname = usePathname();
  // const [isMounted, setIsMounted] = useState(false);

  // // Ensure the component has mounted before accessing pathname
  // useEffect(() => {
  //   setIsMounted(true);
  // }, []);

  // // Don't render anything until after the component has mounted
  // if (!isMounted) return null;

  return (
    <div className="m-5 flex gap-10 justify-between items-center font-sans">
      <Link href="/">
        <Button
          variant="ghost"
          className="rounded w-10 h-10 text-base font-semibold pt-2"
        >
          D
        </Button>
      </Link>
      {/* </Link> */}
      <div className="flex gap-10 text-xs text-slate-500 font-medium mt-1">
        <Link
          href="/about"
          className={`relative pb-1 text-sm ${
            pathname === "/about" ? "text-slate-300" : "hover:text-slate-300"
          }`}
        >
          ABOUT
          {pathname === "/about" && (
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-5 h-[1px] bg-slate-300" />
          )}
        </Link>
        <Link
          href="/projects"
          className={`relative pb-1 text-sm ${
            pathname === "/projects"
              ? "text-slate-300 "
              : "hover:text-slate-300 "
          }`}
        >
          PROJECTS
          {pathname === "/projects" && (
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-5 h-[1px] bg-slate-300" />
          )}
        </Link>
        <Link
          href="/gear"
          className={`relative pb-1 text-sm ${
            pathname === "/uses" ? "text-slate-300" : "hover:text-slate-300"
          }`}
        >
          GEAR
          {pathname === "/gear" && (
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-5 h-[1px] bg-slate-300" />
          )}
        </Link>
        <Link
          href="/contact"
          className={`relative pb-1 text-sm ${
            pathname === "/contact" ? "text-slate-300" : "hover:text-slate-300"
          }`}
        >
          CONTACT
          {pathname === "/contact" && (
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-5 h-[1px] bg-slate-300" />
          )}
        </Link>
      </div>
      <Button variant="ghost" className="rounded w-10 h-10">
        <Command />
      </Button>
    </div>
  );
};

export default Navbar;
