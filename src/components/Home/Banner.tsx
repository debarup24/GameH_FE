import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <div>
      <a
        className="rounded-lg max-sm:pl-3 p-4 lg:p-6 bg-[radial-gradient(51.61%_51.5%_at_42.5%_6.75%,_#00A155_0%,_#003B1F_100%)] flex flex-row-reverse sm:flex-row mb-5 sm:mb-6 lg:mb-10"
        href=""
      >
        <div className="flex-1">
          <div>
            <span className="text-white font-bold text-lg sm:text-2xl">
              Be the Gamehok’s
            </span>
            <span className="text-[#FFCC4D] font-bold text-lg sm:text-2xl">
              Social Star
            </span>
          </div>
          <div className="text-sm font-semibold mt-2 mb-4 sm:mt-3 sm:mb-6">
            {" "}
            Earn rewards by levelling up your social game{" "}
          </div>
          <div className="flex gap-6 xl:gap-10">
            {/* ToDo: refactor - dynamic with .map() method */}
            <div className="flex flex-col items-center gap-1">
              <Image
                src="/PostIconImg.png"
                width={48}
                height={48}
                alt="post Icon"
                // className="w-9 h-9 sm:w-12 sm:h-12"
              />
              <span className="text-[10px] leading-[12px] font-medium sm:text-xs sm:font-normal">
                Posts
              </span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <Image
                src="/FollowersIconImg.png"
                width={48}
                height={48}
                alt="followers Icon"
                // className="w-9 h-9 sm:w-12 sm:h-12"
              />
              <span className="text-[10px] leading-[12px] font-medium sm:text-xs sm:font-normal">
                Followers
              </span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <Image
                src="/LikesIconImg.png"
                width={48}
                height={48}
                alt="likes Icon"
              />
              <span className="text-[10px] leading-[12px] font-medium sm:text-xs sm:font-normal">
                Likes
              </span>
            </div>
          </div>
        </div>
        <div className="w-36 my-4 lg:my-2 mr-5 lg:mr-10">
          <Image src="/Star.png" width={140} height={140} alt="Star" />
        </div>
      </a>
    </div>
  );
};

export default Banner;
