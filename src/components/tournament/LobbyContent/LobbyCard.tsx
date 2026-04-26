import React from "react";
import ActionBTN from "@/components/ui/Button/ActionBTN";
import { Clock } from "lucide-react"; // Assuming you use lucide-react

interface LobbyCardProps {
  lobbyNumber: number;
  status?: string;
}

const LobbyCard = ({
  lobbyNumber,
  status = "Yet to be scheduled",
}: LobbyCardProps) => {
  return (
    <div className="bg-[#050C08] text-white p-3 sm:p-5 border border-[#1A2E23] rounded-lg hover:border-[#3C4B43] transition-colors group">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-sm sm:text-base font-bold text-white group-hover:text-[#01A74B] transition-colors">
          Lobby {lobbyNumber}
        </h2>
        {/* Refactor */}
        <ActionBTN
          size="sm"
          variant="ghost"
          className="text-[#01A74B] hover:text-[#01A74B] hover:bg-transparent text-[10px] sm:text-xs uppercase font-bold tracking-wider"
        >
          View Participants
        </ActionBTN>
      </div>

      <div className="flex items-center gap-2 text-gray-400">
        <Clock className="size-4 text-[#D9B54A]" />
        <span className="text-xs sm:text-sm font-medium">{status}</span>
      </div>
    </div>
  );
};

export default LobbyCard;
