import Image from "next/image";
import React from "react";

type Props = {};

export default function Footer({}: Props) {
  return (
    <div className="w-full bg-black">
      <Image
        src={"/footer3.png"}
        alt="hh"
        width={1500}
        height={1500}
        className="w-full object-cover"
      />
    </div>
  );
}
