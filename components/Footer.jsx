import React from 'react';
import Image from 'next/image';
import images from '../public/assets';

function Footer() {
  return (
    <div className="w-full bg-black px-20 py-10">
      <div className="flex flex-col nm:flex-row items-center justify-start nm:justify-between">
        <div className="flex flex-col">
          <div className="mt-10">
            <Image src="/v1672098070/logofooter_nfszju.png" width={162} height={32} />
          </div>
          <div className="flex flex-col mt-5 nm:mt-20 space-y-2">
            <p className="text-debook-1 text-center nm:text-left text-[15px]  nm:text-[18px] cursor-pointer">Privacy Policy</p>
            <p className="text-debook-1 text-center nm:text-left text-[15px] cursor-pointer  nm:text-[18px]">Terms of Service</p>
          </div>
        </div>
        <div className="flex flex-col nm:mt-12 mb-10">
          <div className="flex flex-row space-x-10 mt-10 w-full">
            <div className="flex flex-col space-y-5">
              <h1 className="text-white text-[14px]">Learn</h1>
              <p className="text-[15px] nm:text-[18px] text-debook-1 cursor-pointer">Manifesto</p>
              <p className="text-[15px] nm:text-[18px] text-debook-1 cursor-pointer">App</p>
              <p className="text-[15px] nm:text-[18px] text-debook-1 cursor-pointer">Sell</p>
            </div>
            <div className="flex flex-col space-y-5">
              <h1 className="text-white text-[14px]">Company</h1>
              <p className="text-[15px] nm:text-[18px] text-debook-1 cursor-pointer">Careers</p>
              <p className="text-[15px] nm:text-[18px] text-debook-1 cursor-pointer">Help</p>
              <p className="text-[15px] nm:text-[18px] text-debook-1 cursor-pointer">Subscribe</p>
            </div>
            <div className="flex flex-col space-y-5">
              <h1 className="text-white text-[14px]">Connect</h1>
              <p className="text-[15px] nm:text-[18px] text-debook-1 cursor-pointer">Twitter</p>
              <p className="text-[15px] nm:text-[18px] text-debook-1 cursor-pointer">Instagram</p>
              <p className="text-[15px] nm:text-[18px] text-debook-1 cursor-pointer">Discord</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center space-y-2 mt-5 nm:mt-20 mb-10">
        <p className="text-white">
          Powered by
          {' '}
          <span className="font-bold">NAKED META</span>
        </p>
        <p className="text-white text-center">2022. DEBOOK. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
