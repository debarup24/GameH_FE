import React from "react";
import Image from "next/image";
import Link from "next/link";

interface TournamentProps {
  status: "Ongoing" | "Registration Open" | "Registration Closed";
  totalPoints: number;
  collectedPoints: number;
  title: string;
  prizePool: number;
  thumbnail: string;
  badge: string;
  tournamentType: "Solo" | "Duo" | "Team";
  entryFee: number;
  tag: string;
}

const TournamentCard: React.FC<{ props: TournamentProps }> = ({ props }) => {
  const {
    status,
    totalPoints,
    collectedPoints,
    title,
    prizePool,
    thumbnail,
    tournamentType,
    entryFee,
    tag,
    badge,
  } = props;

  return (
    <div className="max-w-sm rounded-xl overflow-hidden bg-[#05160b] border border-gray-800 shadow-lg font-sans">
      {/* Thumbnail Section */}
      <div className="relative h-44 w-full">
        <Link href="/tournament/1">
          {" "}
          <Image
            src={thumbnail}
            alt={title}
            fill
            className="object-cover"
          />{" "}
        </Link>

        <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20">
          <span className="text-white text-xs font-semibold">{status}</span>
        </div>

        <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full border border-white/20 flex items-center gap-1">
          <svg
            className="w-3 h-3 text-gray-300"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
          </svg>
          <span className="text-white text-xs font-bold">
            {collectedPoints}/{totalPoints}
          </span>
        </div>

        <div className="absolute bottom-0 left-0 w-full bg-black/20 backdrop-blur-md px-4 py-2 flex items-center justify-between border-t border-white/10">
          <div className="flex items-center gap-2">
            <span className="text-yellow-500 text-lg">🏆</span>
            <span className="text-white text-xs xl:text-sm font-normal xl:font-medium">
              Prize Pool - <span className="font-bold">{prizePool}</span>
              <span className="ml-1 text-yellow-500">🪙</span>
            </span>
          </div>

          <div className="absolute -right-2 -bottom-4 w-12 h-12 bg-[#2d1b4d] rounded-full border-4 border-[#05160b] flex items-center justify-center shadow-xl">
            <Image src={badge} alt={title} fill className="object-cover" />
          </div>
        </div>
      </div>

      {/* Content  */}
      <div className="p-4 pt-6">
        <h3 className="text-white text-xl font-bold mb-4">{title}</h3>

        <div className="flex flex-wrap items-center gap-2">
          <span className="bg-[#0b2b18] text-shadow-white text-xs font-normal px-3 py-1 rounded border border-[#14532d]">
            {tag}
          </span>
          <span className="bg-[#0b2b18] text-shadow-white text-xs font-normal px-3 py-1 rounded border border-[#14532d]">
            {tournamentType}
          </span>
          <div className="bg-[#0b2b18] text-shadow-white text-xs font-normal px-3 py-1 rounded border border-[#14532d] flex items-center gap-1">
            Entry-{entryFee}{" "}
            <span className="text-yellow-500 text-[10px]">🪙</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TournamentCard;
