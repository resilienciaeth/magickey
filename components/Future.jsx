import React from 'react';
import { CldImage } from 'next-cloudinary';

function Future() {
  return (
    <div className=" nm:h-[80vh]">
      <div className="nm:flex nm:flex-row-reverse ">
        <div className="flex mt-20 nm:mt-10 nm:w-[40%] items-center justify-center">
          <CldImage alt="iphone" src="v1672097287/iphone_hcd9pe.png" width={234} height={573} />
          <div className="mt-[25rem] flex nm:hidden flex-col items-center absolute">
            <p className="text-center text-[10px] text-magickey-2">From books to ebooks to debooks.</p>
            <h1 className="magickey-1 font-bold leading-[40px] text-center text-[40px]">
              {' '}
              WHY DEBOOK,
              {' '}
              <br />
              {' '}
              WHY US,
              {' '}
              <br />
              {' '}
              WHY TODAY?
            </h1>
          </div>
        </div>
        <div className="px-10 nm:px-0 nm:ml-[6rem] nm:w-[60%] nm:flex nm:flex-col nm:justify-center">
          <div className="hidden nm:flex nm:flex-col ">
            <p className="text-center nm:text-left text-[10px] nm:text-[12px] text-magickey-2">From books to ebooks to debooks.</p>
            <h1 className="magickey-1 font-bold leading-[40px] nm:leading-[80px] text-center nm:text-left text-[42px] nm:text-[70px]">
              WHY DEBOOK,
              {' '}
              <br />
              {' '}
              WHY US,
              {' '}
              <br className="hidden nm:flex" />
              {' '}
              WHY TODAY?
            </h1>
          </div>
          <p className="text-center nm:mr-20 nm:mt-4 nm:text-left text-[15px] nm:text-[15px] leading-[20px] text-[#9F8A81]">
            Because DEBOOK will be the ultimate innovation in the book industry since Gutenberg printing machine.
            Because OUR FOUNDERS understand the technology, books and are the type of executors and passionate humans that will do whatever it takes to make it happen.

          </p>
          <p className="text-center nm:mr-20 nm:text-left text-[15px] nm:text-[15px] leading-[20px] mt-10 text-[#9F8A81]
"
          >
            Because NOW the biggest blockchain projects are being built, just like Amazon in 1996 with internet revolution. We believe DEBOOK can be part of that blockchain revolution. Join us.
          </p>
          <div className="nm:flex hidden items-start justify-start mt-6">
            <button onClick={() => window.open('https://feather-citrine-09c.notion.site/DEBOOK-MANIFESTO-9425060483794743ba6a10b048970bf5')} type="button" className="magickey-6 text-[12px] px-4 py-2 font-bold  text-black">View Manifesto</button>
          </div>
        </div>
        <div className="flex items-center justify-center mt-6">
          <button type="button" onClick={() => window.open('https://feather-citrine-09c.notion.site/DEBOOK-MANIFESTO-9425060483794743ba6a10b048970bf5')} className="magickey-6 flex nm:hidden text-[12px] px-4 py-2 font-bold  text-black">View Manifesto</button>
        </div>
      </div>
    </div>
  );
}

export default Future;
