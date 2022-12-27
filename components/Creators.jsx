import React from 'react';
import Image from 'next/image';

import { SlSocialInstagram, SlSocialTwitter } from 'react-icons/sl';

import { CldImage } from 'next-cloudinary';
import images from '../public/assets';

function Creators() {
  return (
    <div className=" nm:h-[80vh] nm:flex nm:flex-row">
      <div className="items-left flex nm:flex-col nm:w-[40%] justify-center nm:ml-20">
        <h1 className="text-[42px] nm:text-[70px] magickey-1 font-bold text-center nm:text-left leading-[40px] nm:leading-[70px]">
          Minds behind
          {' '}
          <br />
          {' '}
          the idea
        </h1>
        <p className="text-[#9F8A81] text-left text-[15px] mr-10 hidden nm:flex">Ernest is the right brain of DEBOOK. He is the one with the vision and will be devoting his life to make sure we accomplish our mission. Daniel is the left brain and is in charge of building the platform. Both have been friends for years, they have shared many experiences and lessons in the web3 world and they are full-time dedicated to the vision.</p>
      </div>
      <div className="nm:flex nm:flex-row nm:w-[60%] nm:items-center nm:justify-center">
        <div className="px-[4rem] nm:px-0 mt-10">
          <div className="flex max-w-[327px] flex-col py-4">
            <div>
              <CldImage src="v1672097369/ernest_n7lfty.png" width={327} height={423} />
            </div>
            <div className=" flex flex-row justify-start space-x-10">
              <div className="flex flex-col w-full justify-start items-start">
                <h1 className="text-left font-bold magickey-2 text-[16px] nm:text-[18px]">Ernest Viñas</h1>
                <h1 className="text-[#C3512D] text-left text-[12px]">
                  Founder
                </h1>
              </div>
              <div className="magickey-6 w-full flex flex-row justify-center items-center">
                <div className="flex flex-row space-x-4">
                  <SlSocialInstagram className="text-black cursor-pointer" size={25} onClick={() => window.open('https://www.instagram.com/ernestdift/')} />
                  <SlSocialTwitter className="text-black cursor-pointer" size={25} onClick={() => window.open('https://twitter.com/3rnestvinas')} />
                </div>
              </div>
            </div>
            {/*
            <div className=" mt-2 text-center text-white text-[14px]">'My relationship with books has been very special. In 2019 I invented “SYLPROGRAMS” a particular self-development program that literally helped people rewrite their own stories. I am not a passionate reader but I am a highly passionate learner. I love learning by doing because my brain gets hooked on every good idea. There are many people like me and I feel the duty to create a way books can be more than just letters so they can be more valuable and enjoyed by everyone. THATS DEBOOK'</div> */}
          </div>
        </div>
        <div className="px-[4rem] mt-10">
          <div className="flex flex-col max-w-[327px] py-4">
            <div>
              <CldImage src="v1672097369/dani_gstuxs.png" width={327} height={423} />
            </div>
            <div className=" flex flex-row justify-start space-x-10">
              <div className="flex flex-col w-full justify-start items-start">
                <h1 className="text-left font-bold magickey-2 text-[16px] nm:text-[18px]">Daniel Huertas</h1>
                <h1 className="text-[#C3512D] text-left text-[12px]">
                  Co-Founder
                </h1>
              </div>
              <div className="magickey-6 w-full flex flex-row justify-center items-center">
                <div className="flex flex-row space-x-4">
                  <SlSocialInstagram className="text-black cursor-pointer" size={25} onClick={() => window.open('https://www.instagram.com/danielhuertasl/')} />
                  <SlSocialTwitter className="text-black cursor-pointer" size={25} onClick={() => window.open('https://twitter.com/resilienciaeth')} />
                </div>
              </div>
            </div>
            {/*
            <div className=" mt-2 text-center text-white text-[14px]">'I love books, and as an author I know there are many struggles when it comes to books. That is why I am passionate about DEBOOK. I want authors to know their readers, and I want readers to get access to like minded people. I really believe communities change the world. Let's do it together'</div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Creators;
