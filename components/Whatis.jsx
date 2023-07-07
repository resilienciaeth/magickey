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


function Whatis() {
  const { t } = useTranslation();
  return (
    <div className="mb-10 bg-[#121212] px-10">
      <div className="nm:mt-20">
        <p className="text-center text-[10px] md:text-[15px] magickey-1">{t('common:whatis_1')}</p>
        <h1 className="magickey-1 text-center text-[40px] leading-[40px] nm:leading-[70px] md:text-[70px] font-bold">{t('common:whatis_2')}</h1>
        <div className=" nm:px-20 space-y-4 nm:space-y-0 nm:space-x-14 flex flex-col mt-10">
          <div className="nm:flex nm:flex-row space-y-4 nm:space-y-0 nm:space-x-14">
            <div className=" orange-1 h-[40vh] nm:h-[40vh] nm:w-[33%]  rounded-xl flex items-center justify-center flex-col">
              <h1 className=" text-[20px] md:text-[24px] text-white text-center font-bold font-larken leading-[30px]">
                {t('common:whatis_3')}
                {' '}
                <br />
                {' '}
                {t('common:whatis_4')}

              </h1>
              <p className="text-white text-[15px] md:text-[17px] text-center px-4 md:px-6 mt-6">
                {t('common:whatis_5')}
              </p>
            </div>
            <div className=" orange-1 h-[40vh] nm:h-[40vh] nm:w-[33%]  rounded-xl flex items-center justify-center flex-col">
              <h1 className=" text-[20px] md:text-[24px] text-white text-center font-bold font-larken leading-[30px]">
                {t('common:whatis_3')}
                {' '}
                <br />
                {t('common:whatis_6')}
              </h1>
              <p className="text-white text-[15px] md:text-[17px] text-center px-4 md:px-6 mt-6">
                {t('common:whatis_7')}
              </p>
            </div>
            <div className="orange-1 h-[40vh] nm:h-[40vh] nm:w-[33%] rounded-xl flex items-center justify-center flex-col">
              <h1 className="text-[20px] md:text-[24px] text-white text-center font-bold font-larken leading-[30px]">
                {t('common:whatis_3')}
                {' '}
                <br />
                {' '}
                {t('common:whatis_8')}
              </h1>
              <p className="text-white text-[15px] md:text-[17px] text-center px-4 md:px-6 mt-6">
                {t('common:whatis_9')}
              </p>
            </div>
          </div>
          <div className="hidden nm:flex nm:mt-10 nm:flex-col items-center">
            <p className="mt-10 text-[#9F8A81] text-[15px]">
              {t('common:whatis_10')}
            </p>
            <p className="text-[#9F8A81] text-[15px]">
              {t('common:whatis_11')}
              {' '}
              <span onClick={() => window.open('https://feather-citrine-09c.notion.site/DEBOOK-MANIFESTO-9425060483794743ba6a10b048970bf5')} className="underline cursor-pointer font-bold">{t('common:whatis_12')}</span>
            </p>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Whatis;
