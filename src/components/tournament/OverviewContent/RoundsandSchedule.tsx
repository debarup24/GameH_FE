import React from "react";

type Round = {
  title: string;
  round: string;
  description: string;
  format: string;
  time: string;
};

const ROUNDS: Round[] = [
  {
    title: "QUALIFIERS",
    round: "Round 1",
    description: "Top 4 to next round",
    format: "Single Elimination",
    time: "3rd Aug,10pm",
  },
  {
    title: "QUALIFIERS",
    round: "Round 1",
    description: "Top 4 to next round",
    format: "Single Elimination",
    time: "3rd Aug,10pm",
  },
  {
    title: "QUALIFIERS",
    round: "Round 1",
    description: "Top 4 to next round",
    format: "Single Elimination",
    time: "3rd Aug,10pm",
  },
];

const RoundsandSchedule = () => {
  return (
    <div className="lg:mb-10">
      <h2 className="text-lg font-bold mb-4">Rounds and Schedule</h2>

      <div className="flex flex-col gap-y-4">
        {ROUNDS.map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-center pb-3 border-b border-[#3C4B43]"
          >
            {/* Left */}
            <div>
              <div className="flex items-center gap-1 mb-3">
                <p className="font-semibold text-sm">{item.title}</p>
                <p className="text-[#A8A8A8] text-sm">({item.round})</p>
              </div>

              <div className="font-normal text-sm text-[#ECECEC]">
                {item.description}
              </div>
            </div>

            {/* Right */}
            <div className="flex flex-col items-end">
              <div className="rounded bg-[linear-gradient(270deg,#311A61_0%,#1C192E_100%)] w-fit capitalize text-xs font-semibold mb-3 px-2 py-0.5">
                {item.format}
              </div>

              <div className="text-xs font-semibold">{item.time}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RoundsandSchedule;
