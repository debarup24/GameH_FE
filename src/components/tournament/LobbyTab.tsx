"use client";

import React, { useState } from "react";
import LobbyCard from "./LobbyContent/LobbyCard";

const ROUNDS = [
  { id: "r3", label: "Round 3" },
  { id: "r2", label: "Round 2" },
  { id: "r1", label: "Round 1" },
];

const LobbyTab = () => {
  const [selectedRound, setSelectedRound] = useState("r3");

  // Mock data array for lobbies
  const lobbies = Array.from({ length: 12 }, (_, i) => i + 1);

  return (
    <div className="p-4 lg:px-0 md:py-6 max-w-7xl mx-auto">
      {/* Round Selection Pills */}
      <div className="flex gap-3 overflow-x-auto mb-8 pb-2 no-scrollbar">
        {ROUNDS.map((round) => {
          const isActive = selectedRound === round.id;
          return (
            <button
              key={round.id}
              onClick={() => setSelectedRound(round.id)}
              className={`px-5 py-1.5 rounded-full text-xs font-semibold transition-all whitespace-nowrap border ${
                isActive
                  ? "bg-[#01A74B]/20 border-[#01A74B] text-[#01A74B]"
                  : "bg-[#1E2120] border-transparent text-gray-400 hover:border-gray-600"
              }`}
            >
              {round.label}
            </button>
          );
        })}
      </div>

      {/* Lobby Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-6 lg:gap-x-12">
        {lobbies.map((num) => (
          <LobbyCard key={num} lobbyNumber={num} />
        ))}
      </div>

      {/* Optional: Load More or Pagination trigger could go here */}
    </div>
  );
};

export default LobbyTab;
