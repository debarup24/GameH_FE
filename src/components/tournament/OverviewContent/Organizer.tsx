import { Mail } from "lucide-react";
import React from "react";

const Organizer = () => {
  return (
    <div className="flex-1">
      <h2 className="text-lg font-bold mb-4 lg:mt-10">Organizer</h2>
      <div className="rounded-lg overflow-hidden border-2 border-[#1A2A21]">
        <div className="pt-[13px] pb-[15px] px-4 bg-[linear-gradient(270deg,_#4D5A53_0%,_#182920_100%)]">
          Organizer’s Details and contact
        </div>
        <div className="px-4 py-4.5 ">
          <div className="flex mb-4">
            <div>
              <div className="flex gap-[5px] mb-1.5 mt-1">
                <img
                  className="w-[19px] h-5 object-cover rounded"
                  src="/GSProfileLogo.png"
                  alt="profilr logo"
                />
                <h1 className="font-semibold text-[16px] leading-5.5 text-[#ECECEC]">
                  GS ESPORTS
                </h1>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-x-3 lg:gap-x-6 gap-y-4">
            <div className="flex items-center gap-1.5 text-end">
              <Mail className="text-white size-4" />
              <span className="text-xs sm:text-sm text-[#BCBCBC]">
                support@gsesport
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Organizer;
