"use client";
import Image from "next/image";
import React, { Fragment, useEffect, useState } from "react";
import profile from "@/img/profile.jpg";
import Link from "next/link";
import { useTheme } from "next-themes";
import { IoCloseCircleOutline, IoSunnyOutline } from "react-icons/io5";
import { BsMoonStarsFill } from "react-icons/bs";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { Popover, Transition } from "@headlessui/react";
import { FaChevronDown } from "react-icons/fa";

const ThemeToggle = () => {
  let { resolvedTheme, setTheme } = useTheme();
  let otherTheme = resolvedTheme === "dark" ? "light" : "dark";
  let [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(false);
  }, []);

  return (
    <button
      type="button"
      aria-label={mounted ? `Switch to ${otherTheme} theme` : "Toggle theme"}
      className="group rounded-full bg-white/90 px-3 py-2 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur transition dark:bg-zinc-800/90 dark:ring-white/10 dark:hover:ring-white/20"
      onClick={() => setTheme(otherTheme)}
    >
      <IoSunnyOutline className="h-6 w-6 stroke-teal-500 transition group-hover:stroke-teal-700 dark:hidden" />
      <BsMoonStarsFill className="hidden h-6 w-6 fill-zinc-500 stroke-zinc-500 transition dark:block " />
    </button>
  );
};
const NavItem = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  let isActive = usePathname() === href;
  return (
    <li>
      <Link
        href={href}
        className={clsx(
          "relative block px-3 py-2 transition",
          isActive
            ? "text-teal-500 dark:text-teal-400"
            : "hover:text-teal-500 dark:hover:text-teal-400"
        )}
      >
        {children}
        {isActive && (
          <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-teal-50/0 via-teal-500/40 to-teal-50/0 dark:from-teal-400/0 dark:via-teal-400/40 dark:to-teal-400/0" />
        )}
      </Link>
    </li>
  );
};

const DesktopNavigation = (props: React.ComponentPropsWithRef<"nav">) => {
  return (
    <nav {...props}>
      <ul className="flex rounded-md bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
        <NavItem href="/about">About</NavItem>
        <NavItem href="/articles">Articles</NavItem>
        <NavItem href="/projects">Projects</NavItem>
        <NavItem href="/speaking">Speaking</NavItem>
        <NavItem href="/uses">Uses</NavItem>
      </ul>
    </nav>
  );
};

const MobileNavItem = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <li>
      <Popover.Button
        as={Link}
        href={href}
        className="block py-2 hover:text-teal-500 border-b-[1px] border-b-zinc-800 dark:border-b-zinc-100/5 hover:border-b-teal-500/5 duration-300"
      >
        {children}
      </Popover.Button>
    </li>
  );
};

const MobileNavigation = (
  props: React.ComponentPropsWithoutRef<typeof Popover>
) => {
  return (
    <Popover {...props}>
      <Popover.Button className="group flex items-center rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20">
        Menu
        <FaChevronDown className="ml-3 h-auto w-2 stroke-zinc-50 group-hover:stroke-zinc-700 dark:group-hover:stroke-zinc-400" />
      </Popover.Button>
      <Transition.Root>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Popover.Overlay className="fixed inset-0 z-50 bg-zinc-800/40 backdrop-blur-sm dark:bg-black/80" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="fixed inset-x-4 top-8 z-50 origin-top rounded-3xl bg-white p-8 ring-1 ring-zinc-900/5 dark:bg-zinc-900 dark:ring-zinc-800"
          >
            <div className="flex flex-row-reverse items-center justify-between">
              <Popover.Button aria-label="Close menu" className="-m-1 p-1">
                <IoCloseCircleOutline className="h-6 w-6 text-zinc-500 dark:text-zinc-400" />
              </Popover.Button>
              <h2 className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
                Navigation
              </h2>
            </div>
            <nav className="mt-6">
              <ul className="-my-2 text-base text-zinc-800 dark:divide-zinc-100/5 dark:text-zinc-300">
                <MobileNavItem href="/about">About</MobileNavItem>
                <MobileNavItem href="/articles">Articles</MobileNavItem>
                <MobileNavItem href="/projects">Projects</MobileNavItem>
                <MobileNavItem href="/speaking">Speaking</MobileNavItem>
                <MobileNavItem href="/uses">Uses</MobileNavItem>
              </ul>
              <button className="text-teal-500 w-full py-2 rounded-md dark:bg-black text-sm uppercase border border-teal-800 hover:text-teal-600 dark:hover:text-teal-200 hover:border-teal-700 duration-300 mt-6">
                Login
              </button>
            </nav>
          </Popover.Panel>
        </Transition.Child>
      </Transition.Root>
    </Popover>
  );
};

const Header = () => {
  return (
    <header className="top-0 -mb-3 py-5 w-full mx-auto px-4 md:px-10 flex gap-10 justify-between items-center">
      <Link href={"/"}>
        <Image
          src={profile}
          alt="Profile logo"
          className="w-12 h-12 rounded-full object-cover"
        />
      </Link>
      <div className="flex md:flex-1 justify-end md:justify-center">
        {/* desktop navigation */}
        <DesktopNavigation className="pointer-events-auto hidden md:block" />
      </div>
      <div className="flex items-center gap-5">
        <button className="hidden md:inline-flex text-teal-500 px-8 py-2 rounded-full dark:bg-black text-sm uppercase border border-teal-800 hover:text-teal-800 dark:hover:text-teal-200 hover:border-teal-700 duration-300">
          Login
        </button>
        {/* MobileNavigation */}
        <MobileNavigation className="pointer-events-auto md:hidden" />
        <ThemeToggle />
      </div>
    </header>
  );
};

export default Header;
