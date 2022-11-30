import React from 'react';

function Percentages() {
  return (
    <div className="bg-black px-10 mt-20 h-[110vh] nm:flex nm:flex-col nm:justify-center ">
      <div>
        <h1 className="magickey-1 text-center text-[42px] nm:text-[60px] font-bold leading-[50px] nm:leading-[70px]">
          We all like
          {' '}
          <br className="flex nm:hidden" />
          {' '}
          transparency
        </h1>
        <p className="text-center nm:px-20  text-[10px] nm:text-[18px] text-magickey-2">
          Magickey is all about building alongside people that see potential in our idea and in us, and we take very serious the idea of informing what we will do with these funds.
        </p>
        <div className=" nm:h-auto space-y-4 nm:space-y-0 nm:space-x-10 mt-10 nm:flex nm:flex-row">
          <div className="grey-1 h-[30vh] nm:h-[30vh] nm:w-[33%] rounded-xl flex items-center justify-start flex-col ">
            <h1 className="mt-10 text-[25px] nm:text-[30px] magickey-5 text-center font-bold leading-[30px]">
              30% to the Founders
            </h1>
            <p className="text-magickey-2 text-[15px] nm:text-[18px] text-center px-4 mt-6">
              We plan to cover the costs of living through this while we devote our future into DEBOOK. We are doing this full time and your confidence will be our fuel to make sure DEBOOK goes mainstream.
            </p>
          </div>
          <div className=" grey-1 h-[30vh] nm:h-[30vh] nm:w-[33%] rounded-xl flex items-center justify-start flex-col ">
            <h1 className="mt-10 text-[25px] nm:text-[30px] magickey-5  text-center font-bold leading-[30px]">
              37% to Marketing
            </h1>
            <p className="text-magickey-2 text-[15px] nm:text-[18px] text-center px-4 mt-6">
              This includes hiring people that help us outreach to as many writers and authors as possible as well as advertising the platform where our ideal customer is.
            </p>
          </div>
          <div className=" grey-1 h-[30vh] nm:h-[30vh] nm:w-[33%] rounded-xl flex items-center justify-start flex-col ">
            <h1 className="mt-10 text-[25px] nm:text-[30px] magickey-5  text-center font-bold leading-[30px]">
              37% to expand the team.
            </h1>
            <p className="text-magickey-2 text-[15px] nm:text-[18px] text-center px-4 mt-6">
              Developers, we want you to help us build the future of books. This money will help us onboard more developers to the team so we can ship faster and better.
            </p>
          </div>
        </div>
        <div className="hidden nm:flex items-center justify-center mt-10">
          <p className="text-center nm:px-20  text-[10px] nm:text-[18px] text-magickey-2">
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
