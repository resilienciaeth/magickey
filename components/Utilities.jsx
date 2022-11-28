import React from 'react';
import Image from 'next/image';

import images from '../public/assets';

function Utilities() {
  return (
    <div className="h-[120vh] grey-1 font-creato px-10">
      <div className="flex flex-col items-center ">
        <p className="text-[10px] mt-20 text-[#EE7015] text-center">From books to ebooks to debooks.</p>
        <h1 className="text-center magickey-2 text-[42px] font-bold leading-[50px]">
          Real utility
          <br />
          {' '}
          since day one.
        </h1>
      </div>
      <div className="magickey-3 h-[60%] mt-10 items-start justify-center flex">
        <div>
          <Image src={images.book} />
          <h1 className="text-[18px] text-white font-bold text-center">HOLA</h1>
          <p className="text-center  text-white text-[10px] px-4">
            Yes, you read that right. If you become an early adopter, we will ensure you get your hands on every single debook (digital version) that drops on our platform. Every debook that drops in the platform will be tokenized for the holders of that collection + the holders of DEBOOK NFTs.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Utilities;
