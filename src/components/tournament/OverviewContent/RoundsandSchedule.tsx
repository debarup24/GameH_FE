import React from "react";
import PrizePool from "./PrizePool";

const RoundsandSchedule = () => {
  return (
    <>
      <div className="lg:mb-10">
        <h2 className="text-lg font-bold mb-4">Rounds and Schedule</h2>
        <div className="flex flex-col gap-y-4">
          <div className="flex justify-between items-center pb-3 border-b border-[#3C4B43]">
            <div>
              <div className="flex items-center gap-1 mb-3">
                <p className="font-semibold text-sm">QUALIFIERS</p>
                <p className="text-[#A8A8A8] text-sm">(Round 1)</p>
              </div>
              <div className="font-normal text-sm text-[#ECECEC]">
                Top 4 to next round
              </div>
            </div>
            <div className="flex flex-col items-end">
              <div className="rounded bg-[linear-gradient(270deg,#311A61_0%,#1C192E_100%)] w-fit capitalize text-xs font-semibold mb-3 px-2 py-0.5">
                Single Elimination
              </div>
              <div className="text-xs font-semibold">3rd Aug,10pm</div>
            </div>
          </div>
          <div className="flex justify-between items-center pb-3 border-b border-[#3C4B43]">
            <div>
              <div className="flex items-center gap-1 mb-3">
                <p className="font-semibold text-sm">QUALIFIERS</p>
                <p className="text-[#A8A8A8] text-sm">(Round 1)</p>
              </div>
              <div className="font-normal text-sm text-[#ECECEC]">
                Top 4 to next round
              </div>
            </div>
            <div className="flex flex-col items-end">
              <div className="rounded bg-[linear-gradient(270deg,#311A61_0%,#1C192E_100%)] w-fit capitalize text-xs font-semibold mb-3 px-2 py-0.5">
                Single Elimination
              </div>
              <div className="text-xs font-semibold">3rd Aug,10pm</div>
            </div>
          </div>
          <div className="flex justify-between items-center pb-3 border-b border-[#3C4B43]">
            <div>
              <div className="flex items-center gap-1 mb-3">
                <p className="font-semibold text-sm">QUALIFIERS</p>
                <p className="text-[#A8A8A8] text-sm">(Round 1)</p>
              </div>
              <div className="font-normal text-sm text-[#ECECEC]">
                Top 4 to next round
              </div>
            </div>
            <div className="flex flex-col items-end">
              <div className="rounded bg-[linear-gradient(270deg,#311A61_0%,#1C192E_100%)] w-fit capitalize text-xs font-semibold mb-3 px-2 py-0.5">
                Single Elimination
              </div>
              <div className="text-xs font-semibold">3rd Aug,10pm</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RoundsandSchedule;
