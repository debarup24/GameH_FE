import Image from "next/image";
import React from "react";

const Bouncybird = () => {
  return (
    <div className="block sm:hidden mb-5 w-full relative rounded-lg">
      <Image
        src="/BouncybirdBG.jpg"
        height={40}
        width={48}
        alt="background image"
        className="w-full object-cover rounded-lg max-h-40"
      />
      <div className="absolute h-full py-4 top-0 left-4 flex flex-col justify-between">
        <div>
          <h1 className="text-[#311A61] text-lg font-bold">Introducing</h1>
          <h1 className="text-[#8F4216] irish_grover_4d97e7cf-module__mp6D0W__className text-xl">
            BOUNCY BIRD
          </h1>
          <h1 className="text-[#6B1DF8] text-xs font-semibold">
            A game for everyone
          </h1>
        </div>
        <div className="flex items-center">
          <h1 className="text-[#091118] text-sm font-semibold">
            Play daily, win weekly
          </h1>
          <div className="w-[18px]">🪙</div>
        </div>
      </div>
      <div className="w-[117px] absolute top-0 right-1">
        <Image
          src="/BirdImage.png"
          height={124}
          width={102}
          alt="bird image"
          //className="w-full object-cover rounded-lg max-h-40"
        />
      </div>
      <div className="w-[91px] absolute bottom-4 right-4">
        <Image
          src="/PlayButton.png"
          height={80}
          width={100}
          alt="button"
          //className="w-full object-cover rounded-lg max-h-40"
        />
      </div>
    </div>
  );
};

export default Bouncybird;
