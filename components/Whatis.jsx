import React from 'react';

function Whatis() {
  return (
    <div className="h-[130vh] nm:h-[100vh] bg-[#121212] px-10">
      <div className="nm:mt-20">
        <p className="text-center text-[10px] md:text-[15px] magickey-1">From books to ebooks to debooks.</p>
        <h1 className="magickey-1 text-center text-[30px] md:text-[70px] font-bold">What is DEBOOK?</h1>
        <div className="h-[90vh] nm:px-20 space-y-4 nm:space-y-0 nm:space-x-14 flex flex-col mt-10">
          <div className="nm:flex nm:flex-row space-y-4 nm:space-y-0 nm:space-x-14">
            <div className=" orange-1 h-[30vh] nm:h-[40vh] nm:w-[33%]  rounded-xl flex items-center justify-center flex-col">
              <h1 className=" text-[20px] md:text-[24px] text-white text-center font-bold leading-[30px]">
                DEBOOK as a platform

              </h1>
              <p className="text-white text-[15px] md:text-[17px] text-center px-4 md:px-6 mt-6">
                DEBOOK is a platform that leverages the Blockchain technology to make books fairer to authors and readers while keeping it user friendly.
              </p>
            </div>
            <div className=" orange-1 h-[30vh] nm:h-[40vh] nm:w-[33%]  rounded-xl flex items-center justify-center flex-col">
              <h1 className=" text-[20px] md:text-[24px] text-white text-center font-bold leading-[30px]">
                DEBOOK as a community
              </h1>
              <p className="text-white text-[15px] md:text-[17px] text-center px-4 md:px-6 mt-6">
                Each debook is your passport to a gated community. Each book published as a debook has their own private community for the owners of that debook.
              </p>
            </div>
            <div className="orange-1 h-[30vh] nm:h-[40vh] nm:w-[33%] rounded-xl flex items-center justify-center flex-col">
              <h1 className="text-[20px] md:text-[24px] text-white text-center font-bold leading-[30px]">
                DEBOOK as a tool
              </h1>
              <p className="text-white text-[15px] md:text-[17px] text-center px-4 md:px-6 mt-6">
                Each debook is a digital collectible. This gives complete ownership to the readers, and many benefits to the author such as control over their audience.
              </p>
            </div>
          </div>
          <div className="hidden nm:flex nm:mt-10 nm:flex-col items-center">
            <p className="mt-10 text-[#9F8A81]">
              That is just a first glance on the idea; having a debook will be memorable for authors and readers.
            </p>
            <p className="text-[#9F8A81]">
              Check more in our
              {' '}
              <span className="underline cursor-pointer font-bold"> MANIFIESTO.</span>
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Whatis;
