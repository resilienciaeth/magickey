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

function Percentages() {
  const { t } = useTranslation();
  return (
    <div className=" py-10 px-10 nm:flex nm:flex-col ">
      <div>
        <h1 className="magickey-7 text-center text-[40px] nm:text-[70px] font-bold leading-[40px] nm:leading-[80px]">
          {t('common:Percentages_1')}
          {' '}
          <br className="flex nm:hidden" />
          {' '}
          {t('common:Percentages_2')}
        </h1>
        <p className="text-center  nm:px-32  text-[15px] nm:text-[18px] text-[#9F8A81]">
          {t('common:Percentages_3')}
        </p>
        <div className=" nm:h-auto space-y-4 nm:space-y-0 nm:space-x-10 mt-10 nm:flex nm:flex-row">
          <div className="magickey-8 h-[60vh] nm:w-[33%] rounded-xl flex items-center justify-center flex-col ">
            <h1 className="text-[40px] nm:text-[60px] magickey-9 text-center font-bold ">
              {t('common:Percentages_4')}
              {' '}
              <br />
              <span className="text-[30px]">{t('common:Percentages_5')}</span>
            </h1>
            <p className=" text-[#3D3D3D] text-[15px] nm:text-[18px] text-center px-4 mt-6">
              {t('common:Percentages_6')}
            </p>
          </div>
          <div className="magickey-8 h-[60vh] nm:w-[33%] rounded-xl flex items-center justify-center flex-col ">
            <h1 className="text-[40px] nm:text-[60px] magickey-9 text-center font-bold ">
              {t('common:Percentages_7')}
              {' '}
              <br />
              <span className="text-[30px]">{t('common:Percentages_8')}</span>
            </h1>
            <p className="text-[#3D3D3D] text-[15px] nm:text-[18px] text-center px-4 mt-6">
              {t('common:Percentages_9')}
            </p>
          </div>
          <div className="magickey-8 h-[60vh] nm:w-[33%] rounded-xl flex items-center justify-center flex-col ">
            <h1 className="text-[40px] nm:text-[60px] magickey-9 text-center font-bold ">
              {t('common:Percentages_10')}
              {' '}
              <br />
              <span className="text-[30px]">{t('common:Percentages_11')}</span>
            </h1>
            <p className="text-[#3D3D3D] text-[15px] nm:text-[18px] text-center px-4 mt-6">
              {t('common:Percentages_12')}
            </p>
          </div>
        </div>
        <div className="hidden nm:flex items-center justify-center mt-10">
          <p className="text-center nm:px-20  text-[10px] nm:text-[18px] text-[#9F8A81]">
            {t('common:Percentages_13')}
            <br />
            {t('common:Percentages_14')}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Percentages;
