import React from 'react';

function Price() {
  return (
    <div className="bg-black nm:mt-32">
      <div className="nm:px-32">
        <p className="text-center mt-10 text-[10px] nm:text-[15px] magickey-1">From books to ebooks to debooks.</p>
        <h1 className="text-center magickey-1 font-bold text-[30px] nm:text-[70px] leading-[30px] nm:leading-[70px]">
          Your magickey
          {' '}
          <br />
          {' '}
          unlocks the community
        </h1>
        <p className="text-[12px] nm:text-[15px] px-6 text-center mt-6 text-magickey-2">
          Your DEBOOK Magickey is your passport to all the utilities above. Inspired by communities like FLOOR, Visualize Value or Veefriends, we will use all the experience acquired through those communities to make sure that Magickey makes you feel different.
        </p>
        <p className="hidden text-[12px] nm:text-[15px] px-6 text-center mt-4 text-magickey-2">
          We value your time, and we want to make sure you grow with us. That is why we are launching this drop. We could go the traditional route and pitch this company to VCs, but you know, we are disruptors, and we feel giving you the chance to become a part of the team seems fairer to those that believe in us.
        </p>
        <div className="px-10 mt-6">
          <div className="bg-[#4F2B11] px-6 rounded-lg h-[430px] nm:h-[17vh] nm:flex nm:flex-row nm:justify-around nm:items-center nm:space-x-32">
            <div className="flex flex-col ">
              <p className="text-white mt-10 nm:mt-0 text-[12px]">Price</p>
              <h1 className="magickey-4 text-[40px] font-bold">$150 USD</h1>
            </div>
            <div className="flex flex-row space-x-4 nm:space-x-20">
              <div className="flex flex-col">
                <p className="text-white mt-10 nm:mt-0  text-[12px]">Max Amount Per Wallet</p>
                <h1 className="magickey-4 text-[40px] font-bold">10</h1>
              </div>
              <div>
                <p className="text-white mt-10 nm:mt-0  text-[12px]">Total Supply</p>
                <h1 className="magickey-4 text-[40px] font-bold">3333</h1>
              </div>
            </div>
            <div>
              <p className="text-white mt-10 nm:mt-0  text-[12px]">Launch Day</p>
              <h1 className="magickey-4 text-[40px] font-bold">33/33/3333</h1>
            </div>
            <p className="text-[6px] text-white mt-4 flex nm:hidden">*DEBOOK wallet will keep 333 for future uses such as rewarding our community, workers, and audience, as well as using them as a gift to the people that have inspired us throughout the years to become the version of ourselves that we are today.</p>
          </div>
        </div>
        <p className="text-[12px] nm:text-[15px] px-6 text-center mt-4 text-magickey-2 mb-10">
          DEBOOK Masterkey is our opportunity to give back all the knowledge and information that we have acquired in the web3 world and doing so by creating an community that can change many lives.
          That is why we are making it accessible to pretty much anyone that is reading this. Free books forever, for $150 USD.
        </p>
      </div>
    </div>
  );
}

export default Price;
