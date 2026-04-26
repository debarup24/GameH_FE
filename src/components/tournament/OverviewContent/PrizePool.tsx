import { Trophy } from "lucide-react";
import React from "react";

const PrizePool = () => {
  return (
    <>
      <div className="flex-1">
        <h2 className="text-lg font-bold mb-4">Prize Pool</h2>
        <div className="md:col-span-2 rounded-lg overflow-hidden">
          <div>
            <div className="flex items-center justify-between py-[13px] px-3 bg-[linear-gradient(270deg,_#4D5A53_0%,_#182920_100%)]">
              <span className="font-semibold text-[#ECECEC]">
                Total Tournament Prize
              </span>
              <div className="flex items-center gap-1">
                <span className="font-semibold">2000</span>
                <div className="w-4 h-4 mb-2.5">🪙</div>
              </div>
            </div>
            <div>
              <div className="py-[13px] px-3 border-b border-[#001208] bg-[#182920] flex justify-between items-center">
                <div className="flex items-center gap-1.5">
                  <Trophy className="text-white size-5" />
                  <span className="text-sm font-medium ">Rank 1</span>
                </div>
                <div className="flex items-center justify-center gap-1">
                  <span className="font-semibold text-sm ">1000</span>
                  <div className="w-[17px] h-1.5 mb-4.5">🪙</div>
                </div>
              </div>
              <div className="py-[13px] px-3 border-b border-[#001208] bg-[#182920] flex justify-between items-center">
                <div className="flex items-center gap-1.5">
                  <Trophy className="text-white size-5" />
                  <span className="text-sm font-medium ">Rank 2</span>
                </div>
                <div className="flex items-center justify-center gap-1">
                  <span className="font-semibold text-sm ">500</span>
                  <div className="w-[17px] h-1.5 mb-4.5">🪙</div>
                </div>
              </div>
              <div className="py-[13px] px-3 border-b border-[#001208] bg-[#182920] flex justify-between items-center">
                <div className="flex items-center gap-1.5">
                  <Trophy className="text-white size-5" />
                  <span className="text-sm font-medium ">Rank 3</span>
                </div>
                <div className="flex items-center justify-center gap-1">
                  <span className="font-semibold text-sm ">200</span>
                  <div className="w-[17px] h-1.5 mb-4.5">🪙</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PrizePool;
