import { ArrowLeft, ArrowUpRight } from "lucide-react";
import React from "react";

const BackAndShareTop = () => {
  return (
    <>
      <div className="flex justify-between items-center mb-6 max-lg:hidden">
        <a
          className="hover:cursor-pointer text-sm text-white flex gap-0.5 items-center"
          href="/home"
        >
          <ArrowLeft className="text-white size-5" />
          <p className="text-lg font-semibold text-white">Back</p>
        </a>
        <button className="p-1 rounded-lg bg-[#002E14] hover:cursor-pointer hover:bg-[#4d8867a3] transition duration-200">
          <ArrowUpRight className="text-white font-bold size-6" />
        </button>
      </div>
      {/* <div className="h-[185px] sm:h-[240px] md:h-[284px] lg:h-[304px] relative overflow-hidden">
        <a
          className="lg:hidden hover:cursor-pointer absolute top-3 left-3 w-6 h-6 rounded-full bg-[#011C0D66] opacity-80 flex items-center justify-center"
          href="/home"
        >
          <ArrowLeft className="text-white size-4" />
        </a>
        <button className="lg:hidden absolute top-3 right-3 p-1 rounded-lg bg-[#002E14] hover:cursor-pointer hover:bg-[#4d8867a3] transition duration-200">
          <ArrowUpRight className="text-white font-bold size-5" />
        </button>
      </div> */}
    </>
  );
};

export default BackAndShareTop;
