import React from "react";

const YoutubeCards = () => {
  return (
    <>
      {/* No 1  */}
      <div className="lg:hidden">
        <div className="relative">
          <div className="flex gap-4 w-full overflow-x-auto scroll-smooth scrollbar-hide">
            <div className="shrink-0 w-[270px]">
              <div className="h-[150px] bg-gray-800 rounded-lg overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src="/CODHighlightsYT.png"
                  alt="COD"
                />
              </div>
              <div className="font-semibold text-xs mt-2">Call of duty</div>
            </div>
            <div className="shrink-0 w-[270px]">
              <div className="h-[150px] bg-gray-800 rounded-lg overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src="/CODHighlightsYT.png"
                  alt="COD"
                />
              </div>
              <div className="font-semibold text-xs mt-2">Call of duty</div>
            </div>
            <div className="shrink-0 w-[270px]">
              <div className="h-[150px] bg-gray-800 rounded-lg overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src="/CODHighlightsYT.png"
                  alt="COD"
                />
              </div>
              <div className="font-semibold text-xs mt-2">Call of duty</div>
            </div>
          </div>
        </div>
      </div>
      {/* No 2 */}
      <div className="hidden lg:block space-y-4">
        <div className="mb-4">
          <div className="h-[150px] bg-gray-800 rounded-lg overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src="/CODHighlightsYT.png"
              alt="COD"
            />
          </div>
          <div className="font-semibold text-xs mt-2">Call of duty</div>
        </div>
        <div className="mb-4">
          <div className="h-[150px] bg-gray-800 rounded-lg overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src="/CODHighlightsYT.png"
              alt="COD"
            />
          </div>
          <div className="font-semibold text-xs mt-2">Call of duty</div>
        </div>
        <div className="mb-4">
          <div className="h-[150px] bg-gray-800 rounded-lg overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src="/CODHighlightsYT.png"
              alt="COD"
            />
          </div>
          <div className="font-semibold text-xs mt-2">Call of duty</div>
        </div>
      </div>
    </>
  );
};

export default YoutubeCards;
