import React from 'react';

function Getyours() {
  return (
    <div className=" nm:h-[60vh] py-32 flex flex-col items-center justify-center">
      <div className="flex flex-col items-center nm:justify-center">
        <p className="text-[#C3512D] text-center text-[12px] nm:text-[15px]">the future of books.</p>
        <h1 className="text-center font-bold magickey-1 text-[40px] nm:text-[70px] leading-[40px] nm:leading-[70px]">
          DEBOOK
          {' '}
          <br className="flex md:hidden" />
          {' '}
          MASTERKEY
        </h1>
        <p className="text-magickey-2 px-10 text-center text-[10px] nm:text-[15px]">
          If you have made it all the way here, we want to say that we appreciate your time,
          {' '}
          <br className="hidden md:flex" />
          {' '}
          and we want curious people like you to help us make DEBOOK the future of books. Join us.
        </p>
        <button className="magickey-6 mt-4 px-4 nm:px-6 py-2 text-[12px] nm:text-[18px] text-black font-bold">Get your Masterkey</button>
      </div>
    </div>
  );
}

export default Getyours;
