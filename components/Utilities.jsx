import React from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react';

import images from '../public/assets';
import Carousel from './Carousel';

function Utilities() {
  return (
    <div className=" py-10 nm:h-[100vh] flex flex-col nm:flex-row grey-1 font-creato px-10">
      <div className="flex flex-col items-center nm:items-start nm:justify-center nm:w-[50%] nm:ml-10 ">
        <p className="text-[10px] nm:text-[15px] mt-20 nm:mt-0 text-[#EE7015] text-center font-bold nm:text-left">We want you to grow with us.</p>
        <h1 className="text-center nm:text-left magickey-2 text-[42px] nm:text-[70px] font-bold leading-[50px] nm:leading-[80px]">
          Real utility
          <br />
          {' '}
          since day one.
        </h1>
        <p className="hidden nm:flex mt-5 text-[15px] text-black">
          At DEBOOK, we believe that communities move the world. That is why we believe that building this platform in front of a community will help us accelerate the adoption of these new books. Your feedback will help us in a massive way to make things better every single day.
        </p>
        <p className="hidden nm:flex mt-5 text-[15px] text-black">
          For that reason, once you become an early adopter of DEBOOK Masterkey, we will make sure that you have real-life utility, forever. We want you to grow with us.
        </p>
      </div>
      <Carousel />
      {/* }
      <div className="nm:py-20 nm:mt-10 nm:px-10 nm:flex nm:items-center nm:justify-center">
        <div className="magickey-3 nm:w-[70%] mt-10 items-start justify-center flex">
          <div className="flex flex-col items-center">
            <div className=" mt-2 max-w-[200px] nm:max-w-[300px]">
              <Image src={images.folders} width={300} height={300} objectFit="contain" />
            </div>
            <h1 className="text-[18px] nm:text-[25px] text-white font-bold text-center">Access to every single debook.</h1>
            <p className="text-center mt-4 mb-10  text-white text-[10px] nm:text-[14px] px-4">
              Yes, you read that right. If you become an early adopter, we will ensure you get your hands on every single debook (the book's content) that drops on our platform.
              {' '}
              <br />
              You get access to the content of that book so you can read. We will require every author's permission but will try our best to have all of them say yes.
            </p>
          </div>
        </div>
      </div>
      */}
    </div>
  );
}

export default Utilities;
