import { CldImage } from "next-cloudinary";
import React from "react";

function Card2() {
  return (
    <div className="embla__slide nm:flex nm:flex-col nm:items-center nm:justify-center">
      <div className="bg-[#A06038] rounded-2xl nm:w-[70%] h-[500px] nm:h-[600px]  mt-10 items-center justify-center flex">
        <div className="flex flex-col items-center">
          <div className="mt-2 max-w-[200px] nm:max-w-[300px]">
            <CldImage
              alt="utility-2"
              src="v1672179184/DEBOOK_UTILIDAD_02_1_zqjuaz.gif"
              width={300}
              height={300}
              background="transparent"
            />
          </div>
          <h1 className="text-[25px] nm:text-[25px] text-white font-bold text-center">
            Priority access to
            <br />
            every debook drop.
          </h1>
          <p className="text-center mt-4 mb-10  text-white text-[15px] nm:text-[15px] px-4">
            As a Magickey owner we want to invite you to have priority access to
            every new debook collection that launches.
            <br />
            We want to help you get inside those communities that you feel
            called to.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card2;
