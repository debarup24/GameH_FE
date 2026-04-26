import { Trophy } from "lucide-react";
import React from "react";

type Prize = {
  rank: string;
  amount: number;
};

const PRIZES: Prize[] = [
  { rank: "Rank 1", amount: 1000 },
  { rank: "Rank 2", amount: 500 },
  { rank: "Rank 3", amount: 200 },
];

const TOTAL_PRIZE = 2000;

const PrizePool = () => {
  return (
    <div className="flex-1">
      <h2 className="text-lg font-bold mb-4">Prize Pool</h2>

      <div className="md:col-span-2 rounded-lg overflow-hidden">
        {/* Total Prize */}
        <div className="flex items-center justify-between py-[13px] px-3 bg-[linear-gradient(270deg,_#4D5A53_0%,_#182920_100%)]">
          <span className="font-semibold text-[#ECECEC]">
            Total Tournament Prize
          </span>

          <div className="flex items-center gap-1">
            <span className="font-semibold">{TOTAL_PRIZE}</span>
            <div className="w-4 h-4 mb-2.5">🪙</div>
          </div>
        </div>

        {/* Prize List */}
        <div>
          {PRIZES.map((prize, index) => (
            <div
              key={index}
              className="py-[13px] px-3 border-b border-[#001208] bg-[#182920] flex justify-between items-center"
            >
              {/* Left */}
              <div className="flex items-center gap-1.5">
                <Trophy className="text-white size-5" />
                <span className="text-sm font-medium">{prize.rank}</span>
              </div>

              {/* Right */}
              <div className="flex items-center justify-center gap-1">
                <span className="font-semibold text-sm">{prize.amount}</span>
                <div className="w-[17px] h-1.5 mb-4.5">🪙</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PrizePool;
