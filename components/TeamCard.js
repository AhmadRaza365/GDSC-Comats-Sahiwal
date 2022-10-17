import Image from "next/image";
import React from "react";
import {
  BsGithub,
  BsGlobe2,
  BsGoogle,
  BsLinkedin,
  BsTwitter,
} from "react-icons/bs";

export default function TeamCard(props) {
  return (
    <section className=" rounded-lg drop-shadow-xl relative flex flex-col bg-[url('/images/teamcardBG.png')] bg-cover border-2 border-gray-50">
      <div className="z-[2] px-4 pt-24 pb-10 flex flex-col gap-5">
        <h2 className="text-xl font-bold text-dark-blue text-center">
          {props.name}
        </h2>
        <p className="text-lg text-dark-blue text-center">{props.role}</p>
        <p className="text-base text-dark-blue text-center">{props.bio}</p>
        <ul className="flex items-center justify-center gap-3">
          {props.google !== null && (
            <li className="text-3xl  text-dark-blue hover:text-red cursor-pointer scale-100 hover:scale-110 transition-all ease-in-out delay-100">
              <a href={props.google} target="_blank" rel="noopener noreferrer">
                <BsGoogle className="" />
              </a>
            </li>
          )}
          {props.linkedin !== null && (
            <li className="text-3xl  text-dark-blue hover:text-light-blue cursor-pointer scale-100 hover:scale-110 transition-all ease-in-out delay-100">
              <a
                href={props.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsLinkedin className="" />
              </a>
            </li>
          )}
          {props.twitter !== null && (
            <li className="text-3xl  text-dark-blue hover:text-light-blue cursor-pointer scale-100 hover:scale-110 transition-all ease-in-out delay-100">
              <a href={props.twitter} target="_blank" rel="noopener noreferrer">
                <BsTwitter className="" />
              </a>
            </li>
          )}
          {props.github !== null && (
            <li className="text-3xl  text-dark-blue hover:text-green cursor-pointer scale-100 hover:scale-110 transition-all ease-in-out delay-100">
              <a href={props.github} target="_blank" rel="noopener noreferrer">
                <BsGithub className="" />
              </a>
            </li>
          )}
          {props.website !== null && (
            <li className="text-3xl  text-dark-blue hover:text-yellow cursor-pointer scale-100 hover:scale-110 transition-all ease-in-out delay-100">
              <a href={props.website} target="_blank" rel="noopener noreferrer">
                <BsGlobe2 className="" />
              </a>
            </li>
          )}
        </ul>
      </div>
      <div className="absolute -top-16 left-3 right-3 m-auto drop-shadow-lg rounded-full w-32 h-32  overflow-hidden object-cover object-center">
        <div>
          <Image
            src={props.image}
            alt={props.name}
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </section>
  );
}
