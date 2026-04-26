"use client";

import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

type Game = {
  id: number;
  name: string;
  image: string;
  href: string;
};

const GAMES: Game[] = [
  { id: 0, name: "BGMI", image: "/BGMIMobile.png", href: "/" },
  { id: 1, name: "FREE FIRE", image: "/FreefireMobile.png", href: "/" },
  { id: 2, name: "COD MOBILE", image: "/CODMobile.png", href: "/" },
  { id: 3, name: "BGMI", image: "/BGMIMobile.png", href: "/" },
  { id: 4, name: "FREE FIRE", image: "/FreefireMobile.png", href: "/" },
  { id: 5, name: "COD MOBILE", image: "/CODMobile.png", href: "/" },
];

export default function GamesCard() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);

  const checkScrollPosition = () => {
    const el = scrollRef.current;
    if (!el) return;

    const { scrollLeft, scrollWidth, clientWidth } = el;

    setIsAtStart(scrollLeft <= 0);
    setIsAtEnd(scrollLeft + clientWidth >= scrollWidth - 5);
  };

  useEffect(() => {
    checkScrollPosition();

    const el = scrollRef.current;
    if (!el) return;

    el.addEventListener("scroll", checkScrollPosition);
    return () => el.removeEventListener("scroll", checkScrollPosition);
  }, []);

  const handleScroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;

    const scrollAmount = 250;

    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {/* 1 Mobile  */}
      <div className="sm:hidden grid grid-cols-3 gap-y-4 gap-x-3.5">
        {GAMES.map((game) => (
          <Link key={game.id} href={game.href} className="shrink-0">
            <div className="w-full h-20 bg-gray-800 rounded-lg overflow-hidden flex items-center justify-center">
              <Image
                src={game.image}
                alt={game.name}
                width={200}
                height={80}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="text-xs leading-4 uppercase text-center font-semibold mt-1">
              {game.name}
            </div>
          </Link>
        ))}
      </div>
      {/* div no 2 */}
      <div className="hidden sm:block">
        <div className="relative">
          <div
            ref={scrollRef}
            className="flex gap-4 w-full overflow-x-auto scroll-smooth scrollbar-hide"
          >
            {GAMES.map((game) => (
              <Link key={game.id} href={game.href} className="shrink-0">
                <div className="w-45 h-36 lg:w-[213px] lg:h-[171px] bg-gray-800 rounded-lg overflow-hidden flex items-center justify-center">
                  <Image
                    src={game.image}
                    alt={game.name}
                    width={300}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="text-xs p-1 uppercase text-center font-semibold mt-1">
                  {game.name}
                </div>
              </Link>
            ))}
          </div>

          <div className="hidden sm:flex justify-between absolute top-1/2 -translate-y-1/2 w-full">
            {/* LEFT Part */}
            <button
              onClick={() => handleScroll("left")}
              disabled={isAtStart}
              className={`h-10 w-10 flex justify-center items-center absolute -left-5 top-1/2 -translate-y-1/2 bg-[#01A74B] text-white rounded-full transition ${
                isAtStart
                  ? "opacity-40 cursor-not-allowed"
                  : "opacity-100 hover:opacity-90"
              }`}
            >
              <ChevronLeft className="size-6" />
            </button>

            {/* RIGHT */}
            <button
              onClick={() => handleScroll("right")}
              disabled={isAtEnd}
              className={`h-10 w-10 flex justify-center items-center absolute -right-5 top-1/2 -translate-y-1/2 bg-[#01A74B] text-white rounded-full transition ${
                isAtEnd
                  ? "opacity-40 cursor-not-allowed"
                  : "opacity-100 hover:opacity-90"
              }`}
            >
              <ChevronRight className="size-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
