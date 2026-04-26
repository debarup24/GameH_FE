import { CalendarDays, ClockCheck, Network, Users } from "lucide-react";
import React from "react";

type DetailItem = {
  label: string;
  value: string;
  icon: React.ElementType;
};

const DETAILS: DetailItem[] = [
  {
    label: "TEAM SIZE",
    value: "squad",
    icon: Users,
  },
  {
    label: "TOURNAMENT STARTS",
    value: "Tue 24th Jan, 1:00 pm",
    icon: CalendarDays,
  },
  {
    label: "FORMAT",
    value: "single elimination",
    icon: Network,
  },
  {
    label: "CHECK-IN",
    value: "10 Min before the match starts",
    icon: ClockCheck,
  },
];

const OverviewDetails = () => {
  return (
    <div className="mb-4 sm:mb-6 md:mb-10">
      <h2 className="text-lg font-bold mb-4">Details</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 md:gap-y-8 lg:gap-y-12">
        {DETAILS.map((item, index) => {
          const Icon = item.icon;

          return (
            <div key={index} className="flex items-start gap-2">
              <Icon className="text-green-400 size-7" />

              <div>
                <p className="text-[10px] leading-[14px] font-medium text-gray-500">
                  {item.label}
                </p>

                <p className="font-semibold text-sm capitalize">{item.value}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OverviewDetails;
