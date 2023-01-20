import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';

import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import Carousel from './Carousel';

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}

const OPTIONS = {};
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

function Utilities() {
  const { t } = useTranslation();
  return (
    <div className=" py-10  flex flex-col nm:flex-row grey-1 font-creato px-10">
      <div className="flex flex-col items-center nm:items-start nm:justify-center nm:w-[50%] nm:ml-10 ">
        <p className="text-[10px] nm:text-[15px] mt-20 nm:mt-0 text-[#EE7015] text-center font-bold nm:text-left">
          {t('common:Utilities_1')}
        </p>
        <h1 className="pb-5 nm:pb-0 text-center nm:text-left magickey-2 text-[40px] md:text-[70px] font-bold leading-[40px] nm:leading-[80px]">
          {t('common:Utilities_2')}
          <br />
          {' '}
          {t('common:Utilities_3')}
        </h1>
        <p className="hidden nm:flex mt-5 text-[15px] text-black">
          {t('common:Utilities_4')}
        </p>
        <p className="hidden nm:flex mt-5 text-[15px] text-black">
          {t('common:Utilities_5')}
        </p>
      </div>
      <Carousel slides={SLIDES} options={OPTIONS} />
    </div>
  );
}

export default Utilities;
