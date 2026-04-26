import React from "react";
import OverviewDetails from "./OverviewContent/OverviewDetails";
import RoundsandSchedule from "./OverviewContent/RoundsandSchedule";
import PrizePool from "./OverviewContent/PrizePool";
import Organizer from "./OverviewContent/Organizer";
import MatchJoinInstruction from "./OverviewContent/MatchJoinInstruction";

const OverviewTab = () => {
  return (
    <div className="p-4 lg:px-0 md:py-6">
      <div className="grid grid-cols-1 lg:grid-cols-[3fr_1.5fr] gap-y-8 lg:pb-10 text-white">
        {/* left part */}
        <div className="lg:pr-10 lg:border-r border-[#3C4B43]">
          <OverviewDetails />
          <div className="max-lg:hidden">
            <RoundsandSchedule />
            <MatchJoinInstruction />
          </div>

          <div className="lg:hidden flex flex-col gap-6">
            <PrizePool />
            <RoundsandSchedule />
            <MatchJoinInstruction />
            <Organizer />
          </div>
          <div></div>
        </div>
        {/* Right */}
        <div className="max-lg:hidden lg:pl-10 ">
          <PrizePool />
          <Organizer />
        </div>
      </div>
    </div>
  );
};

export default OverviewTab;
