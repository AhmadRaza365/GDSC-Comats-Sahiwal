import Image from "next/image";
import React from "react";

export default function PartnersCard(props) {
  return (
    <div className="w-full h-36 border-green border-2 rounded-lg px-6 pt-12 pb-6 relative flex justify-center items-center">
      <h3 className=" text-xl font-bold text-dark-blue text-center">
        {props.name}
      </h3>
      <div className="w-20 h-20 border-2 border-green rounded-full bg-white p-2 overflow-hidden absolute -top-12">
        <div className="relative">
          <Image src={props.image} alt={props.name} width={500} height={500} />
        </div>
      </div>
    </div>
  );
}
