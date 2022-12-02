import React from 'react';
import Image from 'next/image';

import { SlSocialInstagram, SlSocialTwitter } from 'react-icons/sl';

import images from '../public/assets';

function Creators() {
  return (
    <div className="h-[120vh] nm:h-[80vh] nm:flex nm:flex-row">
      <div className="items-left flex nm:flex-col nm:w-[40%] justify-center nm:ml-20">
        <h1 className="text-[42px] nm:text-[70px] magickey-1 font-bold text-center nm:text-left leading-[40px] nm:leading-[70px]">
          Minds behind
          {' '}
          <br />
          {' '}
          the idea
        </h1>
        <p className="text-[#9F8A81] text-left text-[15px] mr-10 hidden nm:flex">Our creators are dedicating their full time to this idea. Two humans that are passionate about inner growth, knowledge and people. </p>
      </div>
      <div className="nm:flex nm:flex-row nm:w-[60%] nm:items-center nm:justify-center">
        <div className="px-[4rem] nm:px-0 mt-10">
          <div className="flex flex-col py-4">
            <div>
              <Image src={images.ernest} />
            </div>
            <div className=" flex flex-row justify-start space-x-10">
              <div className="flex flex-col w-full justify-start items-start">
                <h1 className="text-left font-bold magickey-2 text-[18px]">Ernest Viñas</h1>
                <h1 className="text-[#C3512D] text-left text-[12px]">
                  Founder
                </h1>
              </div>
              <div className="magickey-6 w-full flex flex-row justify-center items-center">
                <div className="flex flex-row space-x-4">
                  <SlSocialInstagram className="text-black" size={25} onClick={() => window.open('https://www.instagram.com/ernestdift/')} />
                  <SlSocialTwitter className="text-black" size={25} onClick={() => window.open('https://twitter.com/3rnestvinas')} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="px-[4rem] mt-10">
          <div className="flex flex-col py-4">
            <div>
              <Image src={images.dani} />
            </div>
            <div className=" flex flex-row justify-start space-x-10">
              <div className="flex flex-col w-full justify-start items-start">
                <h1 className="text-left font-bold magickey-2 text-[18px]">Daniel Huertas</h1>
                <h1 className="text-[#C3512D] text-left text-[12px]">
                  Co-Founder
                </h1>
              </div>
              <div className="magickey-6 w-full flex flex-row justify-center items-center">
                <div className="flex flex-row space-x-4">
                  <SlSocialInstagram className="text-black" size={25} onClick={() => window.open('https://www.instagram.com/danielhuertasl/')} />
                  <SlSocialTwitter className="text-black" size={25} onClick={() => window.open('https://twitter.com/resilienciaeth')} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Creators;
