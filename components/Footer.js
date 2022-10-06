import React from "react";

export default function Footer() {
  return (
    <footer className="border-t-[1px] border-[#202124]/30 py-3 mt-4">
      <p className="text-base md:text-xl text-dark-blue text-center">
        Designed and developed by{" "}
        <a
          href="https://ahmadraza365.diveintoskills.com"
          target="_blank"
          rel="noreferrer"
          className="text-dark-blue hover:text-green underline font-normal hover:font-bold scale-100 hover:scale-110 transition-all ease-in-out delay-100"
        >
          Ahmad Raza
        </a>
      </p>
    </footer>
  );
}
