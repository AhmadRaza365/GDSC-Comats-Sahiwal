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
    <section className=" rounded-lg drop-shadow-xl relative flex flex-col bg-[url('/images/teamcardBG.png')] bg-cover border-2 border-gray-50">
      <div className="z-[2] px-4 pt-24 pb-10 flex flex-col gap-5">
        <h2 className="text-xl font-bold text-dark-blue text-center">
          Ahmad Raza
        </h2>
        <p className="text-lg text-dark-blue text-center">Web Dev Lead</p>
        <p className="text-base text-dark-blue text-center">
          MERN Stack Developer, UI/UX designer and Content Creator
        </p>
        <ul className="flex items-center justify-center gap-3">
          <li className="text-3xl  text-dark-blue hover:text-red cursor-pointer scale-100 hover:scale-110 transition-all ease-in-out delay-100">
            <BsGoogle className="" />
          </li>
          <li className="text-3xl  text-dark-blue hover:text-light-blue cursor-pointer scale-100 hover:scale-110 transition-all ease-in-out delay-100">
            <BsLinkedin className="" />
          </li>
          <li className="text-3xl  text-dark-blue hover:text-light-blue cursor-pointer scale-100 hover:scale-110 transition-all ease-in-out delay-100">
            <BsTwitter className="" />
          </li>
          <li className="text-3xl  text-dark-blue hover:text-green cursor-pointer scale-100 hover:scale-110 transition-all ease-in-out delay-100">
            <BsGithub className="" />
          </li>
          <li className="text-3xl  text-dark-blue hover:text-yellow cursor-pointer scale-100 hover:scale-110 transition-all ease-in-out delay-100">
            <BsGlobe2 className="" />
          </li>
        </ul>
      </div>
      <div className="absolute -top-16 left-3 right-3 m-auto drop-shadow-lg rounded-full w-32 h-32  overflow-hidden object-cover object-center">
        <div>
          <Image
            src="/images/profile.jpg"
            alt="team card"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </section>
  );
}
