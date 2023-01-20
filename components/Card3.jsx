import { CldImage } from "next-cloudinary";
import React from "react";

function Card3() {
  return (
    <div className="embla__slide nm:flex nm:flex-col nm:items-center nm:justify-center">
      <div className="bg-[#A06038] rounded-2xl nm:w-[70%] h-[500px] nm:h-[600px]  mt-10 items-center justify-center flex">
        <div className="flex flex-col items-center">
          <div className="mt-2 max-w-[200px] nm:max-w-[300px]">
            <CldImage
              alt="utility-3"
              src="v1672178832/DEBOOK_UTILIDAD_01_1_bu5hyt.gif"
              width={300}
              height={300}
            />
          </div>
          <h1 className="text-[25px] nm:text-[25px] text-white font-bold text-center">
            Early access to
            <br />
            every future updates
          </h1>
          <p className="text-center mt-4 mb-10  text-white text-[15px] nm:text-[15px] px-4">
            You will be invited to try out every future update that we ship, as
            well as suggesting new features.
            <br />
            You will be a part of a private group with the rest of the
            community, where you will meet like minded people.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card3;
