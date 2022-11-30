import React from 'react';
import Image from 'next/image';

import images from '../public/assets';

function Utilities() {
  return (
    <div className="h-[100vh] grey-1 font-creato px-10">
      <div className="flex flex-col items-center ">
        <p className="text-[10px] mt-20 text-[#EE7015] text-center">From books to ebooks to debooks.</p>
        <h1 className="text-center magickey-2 text-[42px] font-bold leading-[50px]">
          Real utility
          <br />
          {' '}
          since day one.
        </h1>
      </div>
      <div className="magickey-3 mt-10 items-start justify-center flex">
        <div>
          <Image src={images.folders} objectFit="contain" />
          <h1 className="text-[18px] text-white font-bold text-center">Access to every single debook.</h1>
          <p className="text-center mt-4 mb-10  text-white text-[10px] px-4">
            Yes, you read that right. If you become an early adopter, we will ensure you get your hands on every single debook (the book's content) that drops on our platform.
            {' '}
            <br />
            You get access to the content of that book so you can read. We will require every author's permission but will try our best to have all of them say yes.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Utilities;
