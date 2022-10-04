import Image from "next/image";
import React from "react";
import {
  BsGithub,
  BsGlobe2,
  BsGoogle,
  BsLinkedin,
  BsTwitter,
} from "react-icons/bs";

export default function TeamCard() {
  return (
    <section className="w-72 rounded-lg drop-shadow-xl relative flex flex-col bg-[url('/images/teamcardBG.png')] bg-cover border-2 border-gray-50">
      <div className="z-[2] px-4 pt-24 pb-10 flex flex-col gap-5">
        <h2 className="text-xl font-bold text-dark-blue text-center">
          Ahmad Raza
        </h2>
        <p className="text-lg text-dark-blue text-center">Web Dev Lead</p>
        <p className="text-base text-dark-blue text-center">
          MERN Stack Developer, UI/UX designer and Content Creator
        </p>
        <ul className="flex items-center justify-center gap-3">
          <li className="text-3xl text-dark-blue cursor-pointer">
            <BsGoogle className="" />
          </li>
          <li className="text-3xl text-dark-blue cursor-pointer">
            <BsLinkedin className="" />
          </li>
          <li className="text-3xl text-dark-blue cursor-pointer">
            <BsTwitter className="" />
          </li>
          <li className="text-3xl text-dark-blue cursor-pointer">
            <BsGithub className="" />
          </li>
          <li className="text-3xl text-dark-blue cursor-pointer">
            <BsGlobe2 className="" />
          </li>
        </ul>
      </div>
      <div className="absolute -top-16 left-3 right-3 m-auto drop-shadow-lg rounded-full w-32 h-32  overflow-hidden object-cover object-center">
        <div>
          <Image
            src="/images/profile.jpg"
            alt="team card"
            width={700}
            height={700}
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </section>
  );
}
