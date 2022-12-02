import React from 'react';
import Image from 'next/image';

import images from '../public/assets';

function Future() {
  return (
    <div className="h-[110vh] nm:h-[80vh]">
      <div className="nm:flex nm:flex-row-reverse ">
        <div className="flex mt-20 nm:mt-0 nm:w-[40%] items-center justify-center">
          <Image src={images.iphone1} />
          <div className="mt-[25rem] flex nm:hidden flex-col items-center absolute">
            <p className="text-center text-[10px] text-magickey-2">From books to ebooks to debooks.</p>
            <h1 className="magickey-1 font-bold leading-[40px] text-center text-[42px]">THE FUTURE OF DEBOOK</h1>
          </div>
        </div>
        <div className="px-10 nm:px-0 nm:ml-[6rem] nm:w-[60%] nm:flex nm:flex-col nm:justify-center">
          <div className="hidden nm:flex nm:flex-col ">
            <p className="text-center nm:text-left text-[10px] nm:text-[12px] text-magickey-2">From books to ebooks to debooks.</p>
            <h1 className="magickey-1 font-bold leading-[40px] nm:leading-[70px] text-center nm:text-left text-[42px] nm:text-[70px]">
              THE FUTURE OF
              {' '}
              <br className="hidden nm:flex" />
              {' '}
              DEBOOK
            </h1>
          </div>
          <p className="text-center nm:mr-20 nm:mt-4 nm:text-left text-[12px] nm:text-[15px] leading-[20px] text-[#9F8A81]">
            As of right now, you can already explore our Marketplace. We are finalizing the v.0 of the DEBOOK App, and we have already 2 authors confirmed for the platform. We have started conversations with many authors and we are sure that we will be able to announce more authors in the upcoming months.

          </p>
          <p className="text-center nm:mr-20 nm:text-left text-[12px] nm:text-[15px] leading-[20px] mt-10 text-[#9F8A81]
"
          >
            Our main focus right now is to slowly start onboarding authors and launching their collections. If you are interested in the bigger picture, you can jump into the Manifesto here:
          </p>
          <div className="nm:flex hidden items-start justify-start mt-6">
            <button className="magickey-6 text-[12px] px-4 py-2 font-bold  text-black">View Manifesto</button>
          </div>
        </div>
        <div className="flex items-center justify-center mt-6">
          <button className="magickey-6 flex nm:hidden text-[12px] px-4 py-2 font-bold  text-black">View Manifesto</button>
        </div>
      </div>
    </div>
  );
}

export default Future;
