import React from "react";

const MatchJoinInstruction = () => {
  return (
    <div>
      <h2 className="text-lg font-bold mb-2 sm:mb-4">How to Join a Match</h2>
      <div className="pl-2.5">
        <ul className="list-disc mb-3 list-outside pl-2 sm:pl-3 text-xs sm:text-base leading-relaxed text-[#BCBCBC]">
          <li>Have your game open already and on the latest version</li>
          <li>
            Once the match is configured you will receive an invite in-game to
            join the lobby.
          </li>
          <li>Join the match and wait for the game to start.</li>
          <li>
            When eliminated return to the match room page to be ready to join
            the next map in the round.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MatchJoinInstruction;
