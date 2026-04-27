"use client";
import {
  Home,
  HomeIcon,
  MessageCircleMore,
  Power,
  Trophy,
  UsersRound,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const SIDEBAR_ITEMS = [
  { name: "Home", icon: Home, color: "#32a852", href: "/home" },
  {
    name: "My Tournament",
    icon: Trophy,
    color: "#32a852",
    href: "/tournament/1",
  },
  { name: "Social", icon: UsersRound, color: "#32a852", href: "/social" },
  {
    name: "Chat",
    icon: MessageCircleMore,
    color: "#32a852",
    href: "/chat",
  },
];

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <>
      <aside className="max-lg:hidden z-60 fixed top-0 bottom-0 overflow-y-auto w-[210px] xl:w-62 min-h-dvh flex flex-col justify-between px-6 xl:px-10 pt-[47px] pb-11 bg-[#001208] shadow-[0px_2px_4px_0px_#FFFFFF40] text-white">
        <div>
          <div className="flex items-center mb-7">
            <Image src="/GamehokLogo.png" width={139} height={36} alt="Logo" />
          </div>

          <nav className="flex-1">
            <ul className="space-y-2">
              {SIDEBAR_ITEMS.map((item) => {
                const Icon = item.icon;

                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={`relative flex items-center px-1 py-1.5 lg:px-2 lg:py-2.5 lg:gap-2 gap-1 text-[15px] tracking-normal rounded transition   ${
                        pathname === item.href
                          ? "bg-[linear-gradient(270deg,_#4D5A53_0%,_#182920_100%)] text-white text-base font-semibold"
                          : "hover:bg-teal-950 text-gray-300 text-sm font-normal"
                      }`}
                    >
                      <Icon
                        className="size-5"
                        style={{
                          color:
                            pathname === item.href ? item.color : "#A8A8A8",
                        }}
                      />
                      <span className="text-nowrap">{item.name}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        <div className="flex">
          <button
            className="flex group items-center justify-center gap-2 text-[#A8A8A8] text-[15px] 
              hover:text-white cursor-pointer"
          >
            <Power className="text-red-600 size-5" />
            Logout
          </button>
        </div>
      </aside>

      {/* For mobile view */}
      <div className="fixed bottom-0 z-50 w-full bg-[#001208] flex justify-around items-center pb-3.5 px-4 lg:hidden shadow-[0_0px_4px_0px_#7F7F7F]">
        {SIDEBAR_ITEMS.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className="flex flex-col items-center justify-center text-xs font-medium"
            >
              <div
                className={`relative flex h-full pt-3.5 items-center justify-center ${
                  isActive
                    ? "text-green-400 drop-shadow-[0_0_8px_rgba(0,255,0,0.7)]"
                    : "text-gray-400"
                }`}
              >
                {isActive && (
                  <div className="absolute top-0 w-full h-0.5 bg-green-500 rounded-b-full" />
                )}

                {isActive && (
                  <div className="absolute top-1 w-[120%] h-11 bg-linear-to-b from-green-500/30 to-transparent rounded-t-[100%] blur-[6px]" />
                )}

                <div className={`relative z-10 ${isActive ? "scale-110" : ""}`}>
                  <Icon className="size-5" />
                </div>
              </div>

              <span
                className={`mt-0.5 text-[10px] leading-[12px] ${
                  isActive ? "text-white" : "text-gray-400"
                }`}
              >
                {item.name}
              </span>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Sidebar;
