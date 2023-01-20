import React from 'react';
import {
  SlSocialInstagram,
  SlSocialLinkedin,
  SlSocialTwitter,
} from 'react-icons/sl';
import { CldImage } from 'next-cloudinary';
import { BigPlayButton, Player } from 'video-react';
import 'node_modules/video-react/dist/video-react.css';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { useTranslation } from 'next-i18next';

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}

function Creators() {
  const { t } = useTranslation();
  return (
    <div className=" nm:h-[80vh] nm:flex nm:flex-row">
      <div className="items-left flex flex-col nm:flex-col nm:w-[40%] justify-center nm:ml-20">
        <h1 className="text-[40px] nm:text-[70px] magickey-1 font-bold text-center nm:text-left leading-[40px] nm:leading-[70px]">
          {t('common:Creators_1')}
          {' '}
          <br />
          {' '}
          {t('common:Creators_2')}
        </h1>
        <p className="text-[#9F8A81] text-center nm:text-left text-[15px] nm:mr-12 hidden nm:flex">
          {t('common:Creators_3')}
        </p>
        <p className="text-[#9F8A81] mt-4 px-6 text-center nm:text-left text-[15px] nm:mr-10 flex nm:hidden">
          {t('common:Creators_4')}
        </p>
      </div>
      <div className="nm:flex nm:flex-row nm:w-[60%] nm:items-center nm:justify-center">
        <div className="px-[4rem] nm:px-0 mt-10">
          <div className="flex max-w-[327px] flex-col py-4">
            <div className="">
              <video
                className="max-h-[423px]"
                poster="https://res.cloudinary.com/drxuutjwr/image/upload/v1672097369/ernest_n7lfty.png"
                src="https://res.cloudinary.com/drxuutjwr/video/upload/v1672245857/ernestw_djthhd.mp4"
                width={327}
                controls
                height={423}
              />
            </div>
            <div className="mt-4 flex flex-row justify-start space-x-10">
              <div className="flex flex-col w-full justify-start items-start">
                <h1 className="text-left font-bold magickey-2 text-[16px] nm:text-[18px]">
                  Ernest Viñas
                </h1>
                <h1 className="text-[#C3512D] text-left text-[12px]">
                  Founder
                </h1>
              </div>
              <div className="magickey-6 w-full flex flex-row justify-center items-center">
                <div className="flex flex-row space-x-4">
                  <SlSocialInstagram
                    className="text-white cursor-pointer"
                    size={20}
                    onClick={() => window.open('https://www.instagram.com/ernestdift/')}
                  />
                  <SlSocialTwitter
                    className="text-white cursor-pointer"
                    size={20}
                    onClick={() => window.open('https://twitter.com/3rnestvinas')}
                  />
                  <SlSocialLinkedin
                    onClick={() => window.open('https://www.linkedin.com/in/ernestvinas/')}
                    className="text-white cursor-pointer"
                    size={20}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="px-[4rem] mt-10">
          <div className="flex flex-col max-w-[327px] py-4">
            <div className="">
              <video
                className="max-h-[423px]"
                poster="https://res.cloudinary.com/drxuutjwr/image/upload/v1672097369/dani_gstuxs.png"
                src="/assets/IMG_6936.mov"
                width={327}
                controls
                height={423}
              />
            </div>
            <div className="mt-4 flex flex-row justify-start space-x-10">
              <div className="flex flex-col w-full justify-start items-start">
                <h1 className="text-left font-bold magickey-2 text-[16px] nm:text-[18px]">
                  Dani Huertas
                </h1>
                <h1 className="text-[#C3512D] text-left text-[12px]">
                  Co-Founder
                </h1>
              </div>
              <div className="magickey-6 w-full flex flex-row justify-center items-center">
                <div className="flex flex-row space-x-4">
                  <SlSocialInstagram
                    className="text-white cursor-pointer"
                    size={25}
                    onClick={() => window.open('https://www.instagram.com/danielhuertasl/')}
                  />
                  <SlSocialTwitter
                    className="text-white cursor-pointer"
                    size={25}
                    onClick={() => window.open('https://twitter.com/resilienciaeth')}
                  />
                  <SlSocialLinkedin
                    className="text-white cursor-pointer"
                    size={20}
                    onClick={() => window.open('https://www.linkedin.com/in/danielhuertasl/')}
                  />
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
