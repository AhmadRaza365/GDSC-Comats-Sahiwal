import Head from "next/head";
import Image from "next/image";
import React from "react";

export default function Header() {
  return (
    <>
      <Head>
        <title>GDSC CUI Sahiwal</title>
        <meta
          name="description"
          content="Google Developer Student Clubs Comsats University Sahiwal"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta name="author" content="AhmadRaza365" />
        <meta name="robots" content="index, follow" />

        {/* og Tags */}
        <meta property="og:title" content="GDSC CUI Sahiwal" />
        <meta property="og:site_name" content="GDSC CUI Sahiwal" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:image" content="/images/gdscLogo.svg" />
        <meta property="og:image:alt" content="GDSC CUI Sahiwal" />
        <meta name="twitter:image:alt" content="GDSC CUI Sahiwal"></meta>
        <meta
          property="og:description"
          content="Google Developer Student Clubs Comsats University Sahiwal"
        />

        {/* Twitter Card Tags */}

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@gdsccomsats" />
        <meta name="twitter:title" content="GDSC CUI Sahiwal" />
        <meta name="twitter:creator" content="@gdsccomsats" />
        <meta
          name="twitter:description"
          content="Google Developer Student Clubs Comsats University Sahiwal"
        />
        <meta name="twitter:image" content="/images/gdscLogo.svg" />
      </Head>

      <header className="z-10 sticky top-0 bg-white/70 py-3 shadow-lg backdrop-blur-md col-span-12 grid grid-cols-12 gap-2">
        <div className="flex items-start gap-4 col-start-2 col-span-3 cursor-pointer">
          <div className="relative w-14">
            <Image
              src="/images/gdscLogo.svg"
              alt="GDSC Logo"
              width={256}
              height={125}
            />
          </div>
          <h1 className="text-2xl font-bold text-dark-blue">
            GDSC CUI Sahiwal
          </h1>
        </div>
        <nav className="col-span-7 flex justify-end">
          <ul className=" flex items-center gap-8">
            <li className="text-center text-xl font-normal text-dark-blue hover:text-red transition-all ease-in-out delay-75 hover:text-2xl hover:font-bold cursor-pointer">
              <a href="#about"> About</a>
            </li>
            <li className="text-center text-xl font-normal text-dark-blue hover:text-green transition-all ease-in-out delay-75 hover:text-2xl hover:font-bold cursor-pointer">
              <a href="#partners">Partners</a>
            </li>
            <li className="text-center text-xl font-normal text-dark-blue hover:text-yellow transition-all ease-in-out delay-75 hover:text-2xl hover:font-bold cursor-pointer">
              <a href="#events">Events</a>
            </li>
            <li className="text-center text-xl font-normal text-dark-blue hover:text-light-blue transition-all ease-in-out delay-75 hover:text-2xl hover:font-bold cursor-pointer">
              <a href="#team">Team</a>
            </li>
            <li className="text-center text-xl font-normal text-dark-blue hover:text-red transition-all ease-in-out delay-75 hover:text-2xl hover:font-bold cursor-pointer">
              <a href="#faq">FAQ</a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
