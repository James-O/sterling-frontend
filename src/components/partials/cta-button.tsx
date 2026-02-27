import React from "react";
import { RightArrowCTA } from "../icons";

export default function CTAButton({ title }: { title: string }) {
  return (
    <button className="group flex w-2/3 md:w-1/2 lg:w-1/3 items-center gap-4 rounded-[40px] border border-primary bg-primary px-2 py-3 md:px-4 lg:px-10 lg:py-4 text-black transition-all duration-100 hover:bg-transparent hover:text-primary md:w-max md:text-[1.75rem]">
      <span className="mx-auto font-semibold md:mx-0">{title}</span>{" "}
      <RightArrowCTA />
    </button>
  );
}
