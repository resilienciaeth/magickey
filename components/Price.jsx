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

function Price() {
  const { t } = useTranslation();
  return (
    <div className="bg-[#121212] mt-10 nm:mt-32 flex items-center justify-center">
      <div className="nm:px-32 flex items-center flex-col">
        <p className="text-center mt-10 text-[10px] nm:text-[15px] magickey-1">{t('common:Price_1')}</p>
        <h1 className="text-center magickey-1 font-bold text-[40px] md:text-[70px] leading-[45px] nm:leading-[70px]">
          {t('common:Price_2')}
          {' '}
          <br />
          {' '}
          {t('common:Price_3')}
        </h1>
        <p className="text-[15px] nm:w-[50%] nm:text-[15px] px-6 text-center mt-6 text-magickey-2">
          {t('common:Price_4')}
        </p>
        <div className="px-10 mt-6">
          <div className="bg-[#4F2B11] px-6 rounded-lg h-[430px] nm:h-[17vh] nm:flex nm:flex-row nm:justify-around nm:items-center nm:space-x-32">
            <div className="flex flex-col ">
              <p className="text-white mt-10 nm:mt-0 text-[12px]">{t('common:Price_5')}</p>
              <h1 className="magickey-4 text-[40px] font-bold">{t('common:Price_6')}</h1>
            </div>
            <div className="flex flex-row space-x-4 nm:space-x-20">
              <div className="flex flex-col">
                <p className="text-white mt-10 nm:mt-0  text-[12px]">{t('common:Price_7')}</p>
                <h1 className="magickey-4 text-[40px] font-bold">{t('common:Price_8')}</h1>
              </div>
              <div>
                <p className="text-white mt-10 nm:mt-0  text-[12px]">{t('common:Price_9')}</p>
                <h1 className="magickey-4 text-[40px] font-bold">{t('common:Price_10')}</h1>
              </div>
            </div>
            <div>
              <p className="text-white mt-10 nm:mt-0  text-[12px]">{t('common:Price_11')}</p>
              <h1 className="magickey-4 text-[40px] font-bold">{t('common:Price_12')}</h1>
            </div>
            <p className="text-[6px] text-white mt-4 flex nm:hidden">{t('common:Price_13')}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Price;
