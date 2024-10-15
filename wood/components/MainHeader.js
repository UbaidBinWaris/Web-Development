import { headers } from "next/headers";
import Image from "next/image";
import React from "react";

const MainHeader = () => {
  return (
    <>
      <div className="bg-[#65360D]">
        <div className="flex h-10 rounded-t-3xl bg-black"></div>
      </div>
      <header className="bg-slate-200 flex justify-between items-center py-2 px-16">
        <Image
          src="/logo.svg"
          alt="My Image Description"
          width={150}
          height={300}
        />
        <nav className="flex ">
          <ul className="flex gap-5">
            <li>
              <a
                className="hover:text-[#F9940A] tracking-wide text-[16px]"
                href="/"
              >
                Home
              </a>
            </li>
            <li>
              <a
                className="hover:text-[#F9940A] tracking-wide text-[16px]"
                href="/products"
              >
                products
              </a>
            </li>
            <li>
              <a
                className="hover:text-[#F9940A] tracking-wide text-[16px]"
                href="/shop"
              >
                shop
              </a>
            </li>
            <li>
              <a
                className="hover:text-[#F9940A] tracking-wide text-[16px]"
                href="/about"
              >
                About
              </a>
            </li>
            <li>
              <a
                className="hover:text-[#F9940A] tracking-wide text-[16px]"
                href="/contact"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <div className="flex">
          <div className="flex gap-2">
            <Image
              className="flex m-auto p-1 justify-center rounded-full bg-[#F9940A]"
              src="/account.svg"
              alt="My Image Description"
              width={30}
              height={30}
            />
            <Image
              className="flex m-auto p-1 justify-center rounded-full bg-[#F9940A]"
              src="/bell.svg"
              alt="My Image Description"
              width={30}
              height={30}
            />
          </div>
        </div>
      </header>
    </>
  );
};

export default MainHeader;
