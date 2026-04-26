import React from "react";
import ActionBTN from "../ui/Button/ActionBTN";

const DailyBattles = () => {
  return (
    // ToDo : Refactor
    <div className="flex gap-4 w-full overflow-x-auto scroll-smooth scrollbar-hide">
      <div className="flex flex-col items-center border shrink-0 w-[182px] sm:w-[212px] border-[#002E14] rounded-lg bg-[linear-gradient(270deg,#4D5A53_0%,#182920_100%)] p-4">
        <div className="w-14 h-14 rounded-full object-cover  overflow-hidden shrink-0">
          <img
            className="w-full h-full object-cover"
            src="/GSProfileLogo.png"
            alt="GS Profile"
          />
        </div>
        <h1 className="font-semibold mt-3 text-sm sm:text-base text-center">
          GS Daily Scrims
        </h1>
        <h1 className="font-medium text-[10px] sm:text-xs text-center">
          By GS Esports
        </h1>
        <p className="text-center text-xs mt-4 mb-5">
          Play GS daily scrims and sharpen your skills for the bigger events
        </p>
        {/* button */}
        <ActionBTN variant="ghost" size="sm">
          Explore Scrims {">"}
        </ActionBTN>
      </div>
      <div className="flex flex-col items-center border shrink-0 w-[182px] sm:w-[212px] border-[#002E14] rounded-lg bg-[linear-gradient(270deg,#4D5A53_0%,#182920_100%)] p-4">
        <div className="w-14 h-14 rounded-full object-cover  overflow-hidden shrink-0">
          <img
            className="w-full h-full object-cover"
            src="/GSProfileLogo.png"
            alt="GS Profile"
          />
        </div>
        <h1 className="font-semibold mt-3 text-sm sm:text-base text-center">
          GS Daily Scrims
        </h1>
        <h1 className="font-medium text-[10px] sm:text-xs text-center">
          By GS Esports
        </h1>
        <p className="text-center text-xs mt-4 mb-5">
          Play GS daily scrims and sharpen your skills for the bigger events
        </p>
        {/* button */}
        <ActionBTN variant="ghost" size="sm">
          Explore Scrims {">"}
        </ActionBTN>
      </div>
    </div>
  );
};

export default DailyBattles;
