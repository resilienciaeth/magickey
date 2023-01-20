import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import Carousel from "./Carousel";
import Carousel1 from "./Carousel";

const OPTIONS = {};
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

function Utilities() {
  return (
    <div className=" py-10  flex flex-col nm:flex-row grey-1 font-creato px-10">
      <div className="flex flex-col items-center nm:items-start nm:justify-center nm:w-[50%] nm:ml-10 ">
        <p className="text-[10px] nm:text-[15px] mt-20 nm:mt-0 text-[#EE7015] text-center font-bold nm:text-left">
          We’ll show you what creating together truly is.
        </p>
        <h1 className="pb-5 nm:pb-0 text-center nm:text-left magickey-2 text-[40px] md:text-[70px] font-bold leading-[40px] nm:leading-[80px]">
          Authentic value
          <br /> for the visionaries
        </h1>
        <p className="hidden nm:flex mt-5 text-[15px] text-black">
          At DEBOOK, we believe that communities move the world. That is why we
          believe that building this platform in front of a community will help
          us accelerate the adoption of these new books. Your feedback will help
          us in a massive way to make things better every single day.
        </p>
        <p className="hidden nm:flex mt-5 text-[15px] text-black">
          For that reason, once you become an early adopter of DEBOOK Masterkey,
          we will make sure that you have real-life utility, forever. We want
          you to grow with us.
        </p>
      </div>
      <Carousel1 slides={SLIDES} options={OPTIONS} />
    </div>
  );
}

export default Utilities;
