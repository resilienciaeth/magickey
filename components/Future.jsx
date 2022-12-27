import React from 'react';
import { CldImage } from 'next-cloudinary';

function Future() {
  return (
    <div className="h-[140vh] nm:h-[80vh]">
      <div className="nm:flex nm:flex-row-reverse ">
        <div className="flex mt-20 nm:mt-10 nm:w-[40%] items-center justify-center">
          <CldImage src="/v1672097287/iphone_hcd9pe.png" width={234} height={573} />
          <div className="mt-[25rem] flex nm:hidden flex-col items-center absolute">
            <p className="text-center text-[10px] text-magickey-2">From books to ebooks to debooks.</p>
            <h1 className="magickey-1 font-bold leading-[40px] text-center text-[42px]">Why we believe in DEBOOK</h1>
          </div>
        </div>
        <div className="px-10 nm:px-0 nm:ml-[6rem] nm:w-[60%] nm:flex nm:flex-col nm:justify-center">
          <div className="hidden nm:flex nm:flex-col ">
            <p className="text-center nm:text-left text-[10px] nm:text-[12px] text-magickey-2">From books to ebooks to debooks.</p>
            <h1 className="magickey-1 font-bold leading-[40px] nm:leading-[70px] text-center nm:text-left text-[42px] nm:text-[70px]">
              Why we believe
              {' '}
              <br className="hidden nm:flex" />
              {' '}
              in DEBOOK
            </h1>
          </div>
          <p className="text-center nm:mr-20 nm:mt-4 nm:text-left text-[15px] nm:text-[15px] leading-[20px] text-[#9F8A81]">
            Our founders love to learn, and they also love communities. DEBOOK is a way for us to make this beautiful creations into something more fair, something more dinamic, something that brings you closer to other humans. That is why DEBOOK was born.

          </p>
          <p className="text-center nm:mr-20 nm:text-left text-[15px] nm:text-[15px] leading-[20px] mt-10 text-[#9F8A81]
"
          >
            We want to help authors make more money and enjoy their creation process more. We also want to help readers get ownership over what they buy, and we want both of them to come together to create amazing books.
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
