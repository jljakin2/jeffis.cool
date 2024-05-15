"use client";

import { CardProps } from "@/types";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Card({
  title,
  description,
  badge = "",
  link,
  image,
}: CardProps) {
  const getRandomRotation = () => {
    const rotations = ["rotate-1", "-rotate-1"];
    const randomIndex = Math.floor(Math.random() * rotations.length);
    return rotations[randomIndex];
  };

  const [rotationClass, setRotationClass] = useState("");

  useEffect(() => {
    setRotationClass(getRandomRotation());
  }, []);

  return (
    <a
      href={link}
      className="transition w-1/4 duration-300 ease-in-out transform hover:-translate-y-2"
    >
      <div
        className={`relative pb-[82.5%] bg-gray-700 shadow-custom-outer transform ${rotationClass}`}
      >
        <div className="absolute bg-white top-[2.0303%] bottom-[2.0303%] left-[1.5%] right-[1.5%] shadow-custom-inset">
          <div className="absolute top-[16.129%] bottom-[16.129%] left-[13.158%] right-[13.158%] art">
            <Image
              src={image}
              alt={`Screenshot for ${title} app`}
              layout="fill"
            />
          </div>
        </div>
      </div>
    </a>
  );
}
