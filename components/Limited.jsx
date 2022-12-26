import React from 'react';

function Limited() {
  return (
    <div className="h-[130vh] flex flex-col nm:flex-row items-center justify-center px-10">
      <div className="card-1 bg-[#C56439] px-4 rounded-2xl nm:rounded-tr-none rounded-b-none nm:rounded-3xl nm:rounded-r-none max-w-[412px] max-h-[520px]">
        <h1 className="font-larken text-[30px] nm:text-[40px] text-center font-bold py-10 nm:py-[8rem] text-white">
          SUPER LIMITED SUPPLY
          {' '}
          <br />
          {' '}
          AFFORDABLE TO EVERYONE
        </h1>
      </div>
      <div className="border-2 border-[#9F6E42] border-t-0 rounded-2xl nm:rounded-3xl nm:border-l-0 rounded-t-none nm:border-t-2 nm:rounded-l-none nm:h-[496px] max-w-[412px] nm:max-w-[900px] nm:flex nm:justify-center nm:items-center nm:px-10">
        <div className="py-4 space-y-6 px-2 text-[#9F8A81]">
          <p>We could go the traditional route and pitch DEBOOK to venture capitals but we want to do things differently. We are taking our first step to making this opportunity accessible to almost everyone as it is our priority to do this alongside a community of visionaries that are going to be a crucial part on the journey. </p>
          <p>Once we sell out DEBOOK MAGICKEYS and launch the app with the first authors we will look to onboard VCs that can help us scale DEBOOK. We also want to show the potential of how a blockchain project can get started using real utility-based digital collectible.</p>
        </div>
      </div>
    </div>
  );
}

export default Limited;
