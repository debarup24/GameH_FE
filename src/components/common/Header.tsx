import { Banknote, Bell, Coins } from "lucide-react";
import React from "react";

const Header = () => {
  return (
    <header className=" sticky top-0 z-40 h-14 sm:h-20 flex items-center justify-between lg:justify-end px-4 sm:px-6 bg-[#001208] lg:shadow-[0px_1px_2px_0px_#FFFFFF40]">
      <div className="flex flex-row-reverse lg:flex-row items-center gap-3 lg:gap-4 w-full lg:w-auto justify-between">
        <div className="flex items-center gap-3 sm:gap-4">
          <a
            className=" flex items-center bg-green-600 rounded-full px-2 py-1 sm:px-2.5 sm:py-1.5 gap-1 sm:gap-2 text-white font-medium text-sm"
            href="/home"
          >
            <div className="hidden lg:flex items-center gap-1">
              <Banknote className="size-5 text-amber-400" />{" "}
              <span className="text-xs sm:text-sm font-normal">250</span>
            </div>
            <div className="min-h-4 mx-1.5 h-1 w-[1px] bg-white hidden lg:block"></div>
            <div className="flex items-center gap-1">
              <Coins className="size-5 text-amber-400" />{" "}
              <span className="text-xs sm:text-sm font-normal">2450</span>
            </div>
          </a>
          <a
            className="text-white relative hover:cursor-pointer focus:outline-none"
            href="/"
          >
            <Bell className="text-white size-5 md:size-7" />
          </a>
        </div>
        {/* Separate */}
        <div className="min-h-8 h-full w-[1px] bg-white hidden lg:block"></div>
        <a
          className="flex items-center gap-2 sm:p-1 rounded-lg text-white"
          href=""
        >
          <div className="relative">
            <div className="w-8 h-8 sm:w-10 sm:h-10 object-cover rounded-full bg-amber-400 overflow-hidden shrink-0">
              <div className="text-white w-full h-full flex justify-center items-center font-normal sm:font-semibold py-1 px-3">
                SR
              </div>
            </div>
            <div className="absolute sm:hidden bottom-0 -right-0.5 bg-green-500 flex justify-center items-center rounded-full"></div>
          </div>
          <span className="hidden sm:inline">Sweta Rani</span>
        </a>
      </div>

      {/* Mobile view */}
    </header>
  );
};

export default Header;
