import { CldImage } from 'next-cloudinary';
import React from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { useTranslation } from 'next-i18next';

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}

function Card1() {
  const { t } = useTranslation();
  return (
    <div className="embla__slide nm:flex  nm:flex-col nm:items-center nm:justify-center">
      <div className="bg-[#A06038] rounded-2xl  nm:w-[70%] h-[500px] nm:h-[600px] mt-10 items-center justify-center flex">
        <div className="flex  flex-col items-center">
          <div className="mt-2 max-w-[200px] nm:max-w-[300px]">
            <CldImage
              alt="utility-1"
              src="v1672179184/DEBOOK_UTILIDAD_03_1_odgb9d.gif"
              width={300}
              height={300}
            />
          </div>
          <h1 className="text-[25px] nm:text-[25px] text-white font-bold text-center">
            {t('common:Card1_1')}
            <br />
            {t('common:Card1_2')}
          </h1>
          <p className="text-center mt-4 mb-10  text-white text-[15px] nm:text-[15px] px-4">
            {t('common:Card1_3')}
            {' '}
            <br />
            {t('common:Card1_4')}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card1;
