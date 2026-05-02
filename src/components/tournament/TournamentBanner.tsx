import { ArrowLeft, ArrowUpRight, Users } from "lucide-react";
import React from "react";

const TournamentBanner = () => {
  return (
    <div className="h-[185px] sm:h-60 md:h-71 lg:h-76 relative overflow-hidden">
      <img
        className="w-full h-full object-cover lg:rounded-lg lg:border border-white"
        src="/TournamentThumb2.jpg"
        alt="Tournament banner"
      />
      <div className="absolute bottom-3 md:bottom-7 left-3 md:left-5 flex items-center text-white bg-[#001208CC] opacity-80 py-1 px-2 font-medium sm:font-semibold rounded-2xl text-[10px] sm:text-xs gap-1">
        Ongoing
      </div>
      <div className="absolute bottom-3 md:bottom-7 right-3 md:right-5 flex items-center text-white bg-[#001208CC] opacity-80 py-1 px-2 font-medium sm:font-semibold rounded-2xl text-[10px] sm:text-[12px] sm:leading-4 gap-1">
        <Users className="text-white size-3 mr-1" /> 864/864
      </div>
      {/* refactor - global isMobile */}
      <>
        <a
          className="lg:hidden hover:cursor-pointer absolute top-3 left-3 w-6 h-6 rounded-full bg-[#011C0D66] opacity-80 flex items-center justify-center"
          href="/home"
        >
          <ArrowLeft className="text-white size-4" />
        </a>
        <button className="lg:hidden absolute top-3 right-3 p-1 rounded-lg bg-[#002E14] hover:cursor-pointer hover:bg-[#4d8867a3] transition duration-200">
          <ArrowUpRight className="text-white font-bold size-5" />
        </button>
      </>
    </div>
  );
};

export default TournamentBanner;
