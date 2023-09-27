import { assets } from "@/lib/asset-utils";
import { Framework, frameworks } from "@/lib/data";
import clsx from "clsx";
import Image from "next/image";
import React from "react";

export const FrameworkRotation = ({
  currentFramework,
}: {
  currentFramework: Framework;
}) => {
  return (
    <>
      <div className="flex justify-center items-center relative h-[25px] w-[25px] sm:h-[40px] sm:w-[40px]">
        {frameworks.map((name, index) => (
          <Image
            key={name}
            src={assets[name]}
            className={clsx(
              "absolute transition-all duration-300 ",
              currentFramework === name
                ? "opacity-100 transform-none"
                : index > frameworks.indexOf(currentFramework as Framework)
                ? "opacity-0 -translate-y-2"
                : "opacity-0 translate-y-2"
            )}
            alt="Framework logo"
            width="35"
            height="35"
            quality="95"
            priority={true}
          />
        ))}
      </div>
    </>
  );
};
