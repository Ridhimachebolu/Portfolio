"use client";
import Link from "next/link";
import React, { useMemo } from "react";
import { usePathname } from "next/navigation";
import { links } from "@/data/bio";

const Footer = () => {
  const pathname = usePathname();

  // Memoize the links array to prevent unnecessary re-renders
  const memoizedLinks = useMemo(() => links, []);

  // If on home page, return null to hide the footer
  if (pathname === "/" || pathname==="/contact") return null;

  return (
    <div className="flex-none mt-20">
      <div className="flex justify-center gap-20 py-5 text-gray-500 text-sm cursor-pointer">
        {memoizedLinks.map(({ title, url }, idx) => (
          <Link
            key={idx}
            href={url}
            target="_blank"
            className="btn btn-ghost btn-sm rounded-btn"
          >
            {title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Footer;
