import React from 'react';

function Percentages() {
  return (
    <div className=" bg-black px-10 mt-20">
      <div>
        <h1 className="magickey-1 text-center text-[36px] font-bold">
          We all like
          {' '}
          <br />
          {' '}
          transparency
        </h1>
        <p className="text-center  text-[10px] text-magickey-2">
          Magickey is all about building alongside people that see potential in our idea and in us, and we take very serious the idea of informing what we will do with these funds.
        </p>
        <div className="h-[90vh] space-y-4 mt-10">
          <div className=" grey-1 h-[33%] rounded-xl flex items-center justify-start flex-col ">
            <h1 className="mt-10 text-[25px] magickey-5 text-center font-bold leading-[30px]">
              30% to the Founders
            </h1>
            <p className="text-magickey-2 text-[15px] text-center px-4 mt-6">
              We plan to cover the costs of living through this while we devote our future into DEBOOK. We are doing this full time and your confidence will be our fuel to make sure DEBOOK goes mainstream.
            </p>
          </div>
          <div className=" grey-1 h-[33%] rounded-xl flex items-center justify-start flex-col ">
            <h1 className="mt-10 text-[25px] magickey-5  text-center font-bold leading-[30px]">
              37% to Marketing
            </h1>
            <p className="text-magickey-2 text-[15px] text-center px-4 mt-6">
              This includes hiring people that help us outreach to as many writers and authors as possible as well as advertising the platform where our ideal customer is.
            </p>
          </div>
          <div className=" grey-1 h-[33%] rounded-xl flex items-center justify-start flex-col ">
            <h1 className="mt-10 text-[25px] magickey-5  text-center font-bold leading-[30px]">
              37% to expand the team.
            </h1>
            <p className="text-magickey-2 text-[15px] text-center px-4 mt-6">
              Developers, we want you to help us build the future of books. This money will help us onboard more developers to the team so we can ship faster and better.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Percentages;
