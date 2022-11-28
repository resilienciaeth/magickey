import React from 'react';
import Image from 'next/image';

import { SlSocialInstagram, SlSocialTwitter } from 'react-icons/sl';

import images from '../public/assets';

function Creators() {
  return (
    <div className="h-[120vh]">
      <div className="items-center justify-center">
        <h1 className="text-[42px] magickey-1 font-bold text-center leading-[40px]">
          Minds behind
          {' '}
          <br />
          {' '}
          the idea
        </h1>
      </div>
      <div className="px-[5rem] mt-10">
        <div className="bg-[#4F2B11] px-10 h-[36vh] rounded-2xl  ">
          <div className="flex items-center flex-col justify-center py-4">
            <div className="rounded-2xl">
              <Image src={images.ernest} className="rounded-2xl" />
            </div>
            <div className="items-center">
              <h1 className="text-[#C3512D] text-center text-[12px]">
                Founder
              </h1>
              <h1 className="text-center font-bold magickey-2 text-[25px]">Ernest Viñas</h1>
              <div className="magickey-6">
                <div className="py-1 flex flex-row justify-center space-x-4">
                  <SlSocialInstagram className="text-white" size={20} onClick={() => window.open('https://twitter.com/3rnestvinas')} />
                  <SlSocialTwitter className="text-white" size={20} onClick={() => window.open('https://www.instagram.com/ernestdift/')} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="px-[5rem] mt-10">
        <div className="bg-[#4F2B11] px-10 h-[36vh] rounded-2xl  ">
          <div className="flex items-center flex-col justify-center py-4">
            <div className="rounded-2xl">
              <Image src={images.dani} className="rounded-2xl" />
            </div>
            <div className="items-center">
              <h1 className="text-[#C3512D] text-center text-[12px]">
                Co-Founder
              </h1>
              <h1 className="text-center font-bold magickey-2 text-[22px]">Daniel Huertas</h1>
              <div className="magickey-6">
                <div className="py-1 flex flex-row justify-center space-x-4">
                  <SlSocialInstagram className="text-white" size={20} onClick={() => window.open('https://twitter.com/danielhuertasl')} />
                  <SlSocialTwitter className="text-white" size={20} onClick={() => window.open('https://www.instagram.com/resilienciaeth/')} />
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
