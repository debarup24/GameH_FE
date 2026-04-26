"use client";

import React, { useState } from "react";
import OverviewTab from "./OverviewTab";
import LobbyTab from "./LobbyTab";

type TabType = "Overview" | "Teams" | "Lobbies" | "Rules";

const TABS: TabType[] = ["Overview", "Teams", "Lobbies", "Rules"];

const TournamentDetails = () => {
  const [activeTab, setActiveTab] = useState<TabType>("Overview");

  const renderContent = () => {
    switch (activeTab) {
      case "Overview":
        return (
          <div className="text-gray-300 animate-in fade-in duration-300">
            <OverviewTab />
          </div>
        );
      case "Teams":
        return (
          <div className="text-gray-300 animate-in fade-in duration-300">
            I am in Teams
          </div>
        );
      case "Lobbies":
        return (
          <div className="text-gray-300 animate-in fade-in duration-300">
            <LobbyTab />
          </div>
        );
      case "Rules":
        return (
          <div className="text-gray-300 animate-in fade-in duration-300">
            I am in Rules
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-full  min-h-screen">
      {/* Headr */}
      <div className="border-b border-[#2A2D31]">
        <nav className="flex h-[48px] overflow-x-auto no-scrollbar scrollbar-hide">
          {TABS.map((tab) => {
            const isActive = activeTab === tab;

            return (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative flex items-center justify-center px-4 xl:px-8 text-sm font-medium transition-all duration-200 whitespace-nowrap  outline-none ${
                  isActive
                    ? "text-[#01A74B] bg-[#151C18]"
                    : "text-[#949698] hover:text-white"
                }`}
              >
                {tab}

                {/* Active Indicator Line */}
                {isActive && (
                  <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#01A74B]" />
                )}
              </button>
            );
          })}
        </nav>
      </div>

      {/* CONTENT */}
      <div className="p-1">
        <div className=" rounded-lg p-0">{renderContent()}</div>
      </div>
    </div>
  );
};

export default TournamentDetails;
