import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="px-10 border-t border-t-zinc-500 py-10 dark:border-zinc-700/40 flex items-center justify-between">
      <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-zinc-800 dark:text-zinc-200">
        <Link href={"about"}>About</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/speaking">Speaking</Link>
        <Link href="/uses">Uses</Link>
      </div>

      <p className="text-sm text-zinc-500 dark:text-zinc-400">
        &copy; {new Date().getFullYear()} jonedoe_All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
