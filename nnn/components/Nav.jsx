"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const Nav = () => {
  const is_user_login = true;
  const [providers, setProviders] = useState(null);
  const [toogle_scroll_down , settoogle_scroll_down] = useState(false);

  useEffect(() => {
    const fetchProviders = async () => {
      const response = await getProviders();
      setProviders(response);
    };
    fetchProviders();
  }, []);

  return (
    <nav className="flex flex-between w-full mb-16 pt-3  ">
      <Link href="/ " className="flex gap-2 flex-center">
        <Image
          width={30}
          height={30}
          src="/assets/images/logo.svg"
          className="object-contain"
          alt="LOGO"
        />
        <p className="logo_text">Promptia</p>
      </Link>

      {/* Desktop desigen */}
      <div className="sm:flex hidden">
        {is_user_login ? (
          <>
            <div className="flex gap-3 md:gap-5">
              <Link href="/dashboard" className="black_btn">
                CreatePost
              </Link>
              <button type="button" onClick={signOut} className="outline_btn">
                Sign Out
              </button>

              <Link href="/profile">
                <Image
                  src="/assets/images/logo.svg"
                  width={37}
                  height={37}
                  alt="Profile"
                />
              </Link>
            </div>
          </>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  key={provider.name}
                  onClick={() => {}}
                  className="outline_btn"
                  >
                  Sign In with {provider.name}
                  {console.log("hello")}
                </button>
              ))}
          </>
        )}
        </div>

        {/* Mobile desigen */}
        <div className="sm:hidden flex relative">
          {is_user_login ? (
            <div className="flex">
              <Link href="/">
                <Image
                  src="/assets/images/logo.svg"
                  width={37}
                  height={37}
                  alt="Profile"
                  onClick={()=> settoogle_scroll_down((prev) => !prev)}
                />
              </Link>

              {toogle_scroll_down && (
                <div className="dropdown">
                  <Link
                  href="/profile"
                  className="dropdown_link"
                  onClick={()=> settoogle_scroll_down(false)}
                  >
                    My Profile
                  </Link>
                  <Link
                  href="/Create-prompt"
                  className="dropdown_link"
                  onClick={()=> settoogle_scroll_down(false)}
                  >
                    Create Prompt
                  </Link>
                  <button className="mt-5 w-full black_btn" type="button" onClick={()=> {settoogle_scroll_down(false); signOut();}} >
                    Sign Out
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              {providers &&
                Object.values(providers).map((provider) => (
                  <button
                    key={provider.name}
                    onClick={() => {}}
                    className="outline_btn"
                  >
                    Sign In with {provider.name}
                  </button>
                ))}
            </>
          )}
        </div>
    </nav>
  );
};

export default Nav;
