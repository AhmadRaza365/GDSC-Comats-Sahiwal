import Image from "next/image";
import React from "react";
import { GoCalendar } from "react-icons/go";
import { FaMapMarkerAlt } from "react-icons/fa";
import { AiOutlineClockCircle } from "react-icons/ai";

export default function EventsCard() {
  return (
    <section className="rounded-lg drop-shadow-xl bg-white overflow-hidden flex flex-col gap-3 pb-4">
      <div className="w-full">
        <div>
          <Image
            src="/images/eventsImage.png"
            alt="gdsc representation"
            width={1200}
            height={675}
          />
        </div>
      </div>
      <h2 className="text-lg font-bold text-dark-blue px-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet,
        magnam.
      </h2>
      <ul className="px-4 flex flex-col gap-2">
        <li className="text-base text-dark-blue flex items-center gap-2">
          <GoCalendar className="text-2xl text-light-blue" />{" "}
          <span>ddth -mm- yyyy (TBD)</span>
        </li>
        <li className="text-base text-dark-blue flex items-center gap-2">
          <FaMapMarkerAlt className="text-2xl text-red" />{" "}
          <span>COMSATS University Sahiwal</span>
        </li>
        <li className="text-base text-dark-blue flex items-center gap-2">
          <AiOutlineClockCircle className="text-2xl text-green" />{" "}
          <span>0900hrs - 1200hrs (TBD)</span>
        </li>
      </ul>
      <button className="text-lg text-white font-bold bg-light-blue px-5 py-2 shadow-md rounded-lg w-fit m-auto">
        Attend
      </button>
    </section>
  );
}
