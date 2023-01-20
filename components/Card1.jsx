import { CldImage } from "next-cloudinary";
import React from "react";

function Card1() {
  return (
    <div className="embla__slide nm:flex  nm:flex-col nm:items-center nm:justify-center">
      <div className="bg-[#A06038] rounded-2xl  nm:w-[70%] h-[500px] nm:h-[600px] mt-10 items-center justify-center flex">
        <div className="flex  flex-col items-center">
          <div className="mt-2 max-w-[200px] nm:max-w-[300px]">
            <CldImage
              alt="utility-1"
              src="v1672179184/DEBOOK_UTILIDAD_03_1_odgb9d.gif"
              width={300}
              height={300}
            />
          </div>
          <h1 className="text-[25px] nm:text-[25px] text-white font-bold text-center">
            Access to
            <br />
            every debook.
          </h1>
          <p className="text-center mt-4 mb-10  text-white text-[15px] nm:text-[15px] px-4">
            Yes, you read that right. Your Magickey grants you access to every
            debook (the book's content and community) on our platform. <br />
            To make it fair for the authors, we will require their permission
            and will try our best to have all of them say yes.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card1;
