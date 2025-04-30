"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { getNavLinks } from "./navData";

export const Header = () => {
  const navItems = getNavLinks();

  return (
    <header>
      <nav className="flex items-center justify-between px-4 sm:px-3 md:px-10 lg:px-20 py-14 mx-16 sm:mx-10 width-full">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/header-logo.svg"
            alt="Nike Logo"
            width={160}
            height={60}
            className="h-auto w-36 sm:w-44 md:w-52 lg:w-60"
          />
        </Link>

        {/* Hamburger Icon - Only visible on small screens */}
        <div className="sm:block sm:px-2 md:hidden">
          <Link href="/">
            <Image
              src="/assets/hamburger.svg"
              alt="Menu"
              width={30}
              height={30}
              className="h-8 w-8"
            />
          </Link>
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex items-center gap-6 lg:gap-16 px-4 lg:px-20 list-none">
          {navItems.map((item, index) => (
            <li key={index} className="px-1 lg:px-2">
              <Link
                href={item.href}
                className="text-gray-700 hover:text-orange-400 text-base md:text-lg transition-colors duration-200 whitespace-nowrap"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
