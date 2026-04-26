import Banner from "@/components/Home/Banner";
import Bouncybird from "@/components/Home/Bouncybird";
import DailyBattles from "@/components/Home/DailyBattles";
import GamesCard from "@/components/Home/GamesCard";
import TournamentCard from "@/components/Home/TournamentCard";
import YoutubeCards from "@/components/Home/YoutubeCards";
import ActionBTN from "@/components/ui/Button/ActionBTN";
import { Badge, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const homePage = () => {
  const myTournament1 = {
    status: "Ongoing" as const,
    totalPoints: 800,
    collectedPoints: 670,
    title: "Crown Conquest",
    prizePool: 1000,
    thumbnail: "/TournamentThumb2.jpg",
    badge: "/TourBadge.png",
    tournamentType: "Solo" as const,
    entryFee: 10,
    tag: "BGMI",
  };
  return (
    <div
      className="
            pl-0 lg:pl-[210px] xl:pl-[248px]
            flex flex-col w-full min-h-dvh
            max-sm:pb-16 max-lg:pb-16
          "
    >
      <div className="flex flex-col lg:flex-row w-full text-white min-h-screen overflow-hidden">
        {/* Left */}
        <div className="w-full lg:w-[calc(100%-380px)] xl:w-[calc(100%-422px)] px-4 sm:px-8 lg:px-6 xl:px-10 py-2 sm:py-4 lg:py-12">
          <Banner />
          <div className="mb-5 sm:mb-6 lg:mb-10">
            <div className="flex justify-between items-center mb-4 sm:mb-6">
              <h2 className="text-[16px] leading-5 sm:text-[24px] sm:leading-8 font-semibold sm:font-bold">
                Featured Tournaments
              </h2>
              {/* Button */}
              <Link href="/">
                <ActionBTN size="sm" variant="ghost">
                  VIEW ALL
                </ActionBTN>
              </Link>
            </div>
            {/* Mobile */}
            <div className="lg:hidden">
              <div className="relative">
                <div className="flex gap-4 w-full overflow-x-auto scroll-smooth scrollbar-hide">
                  {[myTournament1, myTournament1, myTournament1].map(
                    (tournament, index) => (
                      <div
                        key={index}
                        className="shrink-0 w-[85%] sm:w-[45%] snap-start"
                      >
                        <TournamentCard props={tournament} />
                      </div>
                    ),
                  )}
                </div>
              </div>
            </div>
            {/* Tournaments Cards */}
            <div className="hidden lg:grid grid-cols-2 2xl:grid-cols-3 gap-5.5">
              <TournamentCard props={myTournament1} />
              <TournamentCard props={myTournament1} />
            </div>
          </div>
          <Bouncybird />
          <div className="mb-5 sm:mb-6 lg:mb-12 w-full">
            <h2 className="text-[16px] leading-5 sm:text-[24px] sm:leading-8 font-semibold sm:font-bold mb-6">
              Play Tournaments by Games
            </h2>
            <GamesCard />
          </div>
          <div className="mb-5 sm:mb-6 lg:mb-12 w-full">
            <div className="flex justify-between items-center mb-4 sm:mb-6">
              <h2 className="text-[16px] leading-[20px] sm:text-[24px] sm:leading-[32px] font-semibold sm:font-bold">
                Compete in Daily Battles
              </h2>
            </div>
            <div className="relative">
              {" "}
              <DailyBattles />{" "}
            </div>
          </div>
        </div>
        {/* Right part*/}
        <div className="w-full lg:w-95 xl:w-[422px] px-4 sm:px-8 lg:px-6 xl:px-10 py-5 sm:py-6 lg:py-12 shadow-[inset_1px_0px_0px_0px_#FFFFFF1A]">
          <div className="mb-5 sm:mb-6 lg:mb-10">
            <div className="flex justify-between items-center mb-4 sm:mb-6">
              <h2 className="text-[16px] pt-5 leading-5 sm:text-[18px] sm:leading-6 font-semibold sm:font-bold mb-6">
                Game Highlights
              </h2>
              <Link href="/">
                <ActionBTN size="sm" variant="ghost">
                  VIEW ALL
                </ActionBTN>
              </Link>
            </div>
            <YoutubeCards />
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default homePage;
