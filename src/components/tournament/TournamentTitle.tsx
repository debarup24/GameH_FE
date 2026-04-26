import React from "react";

const TournamentTitle = () => {
  return (
    <div className="w-full flex justify-between h-fit pt-5 pb-3.5 max-lg:px-4 md:pt-10 md:pb-8">
      <div className="text-white">
        <h1 className='class="text-lg md:text-2xl font-bold'>
          GS MONTHLY SHOWDOWN
        </h1>
        <p className="text-sm font-semibold">by GS Esports</p>
        <div className="flex flex-wrap gap-2 mt-3">
          <span className="bg-[#002E14] font-semibold text-xs px-2 py-0.5 rounded">
            BGMI
          </span>
          <span className="bg-[#002E14] font-semibold text-xs px-2 py-0.5 rounded">
            Entry - 🪙 25{" "}
          </span>
        </div>
      </div>
      <div>
        <img
          className="h-10 w-10 md:h-16 md:w-16 rounded-full object-cover"
          src="/GSProfileLogo.png"
          alt="Profile Logo"
        />
      </div>
    </div>
  );
};

export default TournamentTitle;
