import BackAndShareTop from "@/components/common/BackAndShareTop";
import TournamentBanner from "@/components/tournament/TournamentBanner";
import TournamentDetails from "@/components/tournament/TournamentDetails";
import TournamentTitle from "@/components/tournament/TournamentTitle";
import ActionBTN from "@/components/ui/Button/ActionBTN";
import React from "react";

const TournamentPage = () => {
  return (
    <div
      className="pl-0 lg:pl-[210px] xl:pl-[248px]
            flex flex-col w-full min-h-dvh
            max-sm:pb-16 max-lg:pb-16"
    >
      <div>
        <div className="w-full px-0 py-0 lg:px-16 lg:py-8">
          <div className="mb-3">
            <BackAndShareTop />
            <TournamentBanner />
            <TournamentTitle />
            {/* Table */}
            <TournamentDetails />
          </div>
          <div className="fixed z-61 cursor-pointer bottom-0 left-0 mt-2.5 right-0  ml-0 lg:ml-[210px] xl:ml-[248px] bg-[#001208] shadow-[0px_-2px_4px_0px_#FFFFFF40] flex justify-end  p-4 md:py-5 md:px-16">
            <div className="w-full flex items-center justify-center">
              {/* <h1 className="text-base font-semibold text-[#A8A8A8]">JOIN</h1> */}
              <ActionBTN size="md" variant="brand">
                Join Now
              </ActionBTN>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TournamentPage;
