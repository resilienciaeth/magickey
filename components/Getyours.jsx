import React from 'react';

function Getyours() {
  return (
    <div className="h-[60vh]">
      <div className="flex flex-col items-center">
        <p className="text-[#C3512D] text-center text-[12px]">the future of books.</p>
        <h1 className="text-center font-bold magickey-1 text-[40px] leading-[40px]">
          DEBOOK
          {' '}
          <br />
          {' '}
          MASTERKEY
        </h1>
        <p className="text-magickey-2 px-10 text-center text-[10px]">If you have made it all the way here, we want to say that we appreciate your time, and we want curious people like you to help us make DEBOOK the future of books. Join us.</p>
        <button className="magickey-6 mt-4 px-4 py-2 text-[12px] text-black font-bold">Get your Masterkey</button>
      </div>
    </div>
  );
}

export default Getyours;
