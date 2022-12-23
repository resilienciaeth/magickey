import React from 'react';

function Percentages() {
  return (
    <div className="grey-1 py-10 px-10 mt-20 nm:flex nm:flex-col nm:justify-center ">
      <div>
        <h1 className="magickey-2 text-center text-[42px] nm:text-[60px] font-bold leading-[50px] nm:leading-[70px]">
          Building with transparency
          {' '}
          <br className="flex nm:hidden" />
          {' '}
          and awareness
        </h1>
        <p className="text-center nm:px-20  text-[10px] nm:text-[18px] text-[#EE7015]">
          Magickey is all about building alongside people that see potential in our idea and in us, and we take very serious the idea of informing what we will do with these funds.
        </p>
        <div className=" nm:h-auto space-y-4 nm:space-y-0 nm:space-x-10 mt-10 nm:flex nm:flex-row">
          <div className="magickey-3 h-[250px] nm:h-[30vh] nm:w-[33%] rounded-xl flex items-center justify-center flex-col ">
            <h1 className="text-[20px] nm:text-[30px] text-white text-center font-bold leading-[30px]">
              30% to the Founders
            </h1>
            <p className=" text-white text-[15px] nm:text-[18px] text-center px-4 mt-6">
              We plan to cover the costs of living through this while we devote our future into DEBOOK. We are doing this full time and your confidence will be our fuel to make sure DEBOOK goes mainstream.
            </p>
          </div>
          <div className="magickey-3 h-[250px] nm:h-[30vh] nm:w-[33%] rounded-xl flex items-center justify-center flex-col ">
            <h1 className="text-[20px] nm:text-[30px] text-white text-center font-bold leading-[30px]">
              37% to Communication
            </h1>
            <p className="text-white text-[15px] nm:text-[18px] text-center px-4 mt-6">
              We are hiring a content team and strategic people that help us outreach to as many writers and authors as possible. We plan to connect with passionate people from top companies that have been part of the revolution of industries such as music and film.
            </p>
          </div>
          <div className="magickey-3 h-[250px] nm:h-[30vh] nm:w-[33%] rounded-xl flex items-center justify-center flex-col ">
            <h1 className="text-[20px] nm:text-[30px] text-white text-center font-bold leading-[30px]">
              37% to expand the team.
            </h1>
            <p className="text-white text-[15px] nm:text-[18px] text-center px-4 mt-6">
              Developers, we want you to help us build the future of books. This money will help us onboard more developers to the team so we can ship faster and better.
            </p>
          </div>
        </div>
        <div className="hidden nm:flex items-center justify-center mt-10">
          <p className="text-center nm:px-20  text-[10px] nm:text-[18px] text-[#EE7015]">
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
