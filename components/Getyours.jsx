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

function Getyours() {
  const { t } = useTranslation();
  return (
    <div className=" h-[80vh] nm:h-[60vh] flex flex-col items-center justify-center">
      <div className="flex flex-col mt-10 items-center nm:justify-center">
        <p className="magickey-1 text-center text-[12px] nm:text-[15px]">{t('common:Getyours_1')}</p>
        <h1 className="text-center font-bold magickey-1 text-[40px] nm:text-[70px] leading-[40px] nm:leading-[70px]">
          {t('common:Getyours_2')}
          {' '}
          <br className="" />
          {' '}
          {t('common:Getyours_3')}
          {' '}
          <br className="" />
          {' '}
          {t('common:Getyours_4')}
        </h1>
        <p className="text-magickey-2 mt-4 px-10 text-center text-[15px] nm:text-[15px]">
          {t('common:Getyours_5')}
          {' '}
          <br className="hidden md:flex" />
          {' '}
          {t('common:Getyours_6')}
        </p>
        <button type="button" onClick={() => window.open('/mint', '_self')} onKeyDown={() => window.open('/mint', '_self')} className="magickey-6 mt-4 px-4 nm:px-6 py-2 text-[12px] nm:text-[18px] text-black font-bold">{t('common:Getyours_7')}</button>
      </div>
    </div>
  );
}

export default Getyours;
