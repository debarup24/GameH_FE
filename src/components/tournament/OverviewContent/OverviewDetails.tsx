import { CalendarDays, ClockCheck, Network, Users } from "lucide-react";
import React from "react";

const OverviewDetails = () => {
  return (
    <div className="mb-4 sm:mb-6 md:mb-10">
      <h2 className="text-lg font-bold mb-4">Details</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 md:gap-y-8 lg:gap-y-12">
        <div className="flex items-start gap-2">
          {/* -- 1 */}
          <Users className="text-green-400 size-7" />
          <div className="">
            <p className="text-[10px] leading-[14px] font-medium text-gray-500">
              TEAM SIZE
            </p>
            <p className="font-semibold text-sm capitalize">squad</p>
          </div>
        </div>
        <div className="flex items-start gap-2">
          <CalendarDays className="text-green-400 size-8" />
          <div className="">
            <p className="text-[10px] leading-[14px] font-medium text-gray-500">
              TOURNAMENT STARTS
            </p>
            <p className="font-semibold text-sm ">Tue 24th Jan, 1:00 pm</p>
          </div>
        </div>
        <div className="flex items-start gap-2">
          <Network className="text-green-400 size-8" />
          <div className="">
            <p className="text-[10px] leading-[14px] font-medium text-gray-500">
              FORMAT
            </p>
            <p className="font-semibold text-sm capitalize">
              single elimination
            </p>
          </div>
        </div>
        <div className="flex items-start gap-2">
          <ClockCheck className="text-green-400 size-8" />
          <div className="">
            <p className="text-[10px] leading-[14px] font-medium text-gray-500">
              CHECK-IN
            </p>
            <p className="font-semibold text-sm capitalize">
              10 Min before the match starts
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverviewDetails;
