import React from 'react';

function Percentages() {
  return (
    <div className=" py-10 px-10 nm:flex nm:flex-col ">
      <div>
        <h1 className="magickey-7 text-center text-[42px] nm:text-[60px] font-bold leading-[50px] nm:leading-[70px]">
          Building with transparency
          {' '}
          <br className="flex nm:hidden" />
          {' '}
          and awareness
        </h1>
        <p className="text-center  nm:px-32  text-[15px] nm:text-[18px] text-[#9F8A81]">
          Magickey is all about building alongside people that see potential in our idea and in us, and we take very serious the idea of informing what we will do with these funds.
        </p>
        <div className=" nm:h-auto space-y-4 nm:space-y-0 nm:space-x-10 mt-10 nm:flex nm:flex-row">
          <div className="magickey-8 h-[50vh] nm:w-[33%] rounded-xl flex items-center justify-center flex-col ">
            <h1 className="text-[60px] magickey-9 text-center font-bold ">
              30%
            </h1>
            <p className=" text-[#3D3D3D] text-[15px] nm:text-[18px] text-center px-4 mt-6">
              to cover the Founders' expenses. We plan to cover the costs of living as well as the investments already made on DEBOOK this way, so we can continue to devote our future to DEBOOK. We are doing this full time and your confidence will be our fuel to make sure DEBOOK goes mainstream.
            </p>
          </div>
          <div className="magickey-8 h-[50vh] nm:w-[33%] rounded-xl flex items-center justify-center flex-col ">
            <h1 className="text-[60px] magickey-9 text-center font-bold ">
              37%
            </h1>
            <p className="text-[#3D3D3D] text-[15px] nm:text-[18px] text-center px-4 mt-6">
              to communication. We already have a team in place and will use this % to expand it. We plan to hire humans that help us outreach to as many writers and authors as possible. We plan to connect with passionate people from top companies that have been part of the revolution of industries such as music and film.
            </p>
          </div>
          <div className="magickey-8 h-[50vh] nm:w-[33%] rounded-xl flex items-center justify-center flex-col ">
            <h1 className="text-[60px] magickey-9 text-center font-bold ">
              37%
            </h1>
            <p className="text-[#3D3D3D] text-[15px] nm:text-[18px] text-center px-4 mt-6">
              to expand the team. Developers, we want you to help us build the future of books. All the development so far has been done by our founders, and we want you to help them make DEBOOK a better product. This money will help us onboard more developers to the team so we can ship faster and better.
            </p>
          </div>
        </div>
        <div className="hidden nm:flex items-center justify-center mt-10">
          <p className="text-center nm:px-20  text-[10px] nm:text-[18px] text-[#9F8A81]">
            We want to hear from our holders as we don’t have everything figured out.
            <br />
            Your feedback will be our key to success.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Percentages;
