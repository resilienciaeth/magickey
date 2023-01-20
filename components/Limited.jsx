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

function Limited() {
  const { t } = useTranslation();
  return (
    <div className="h-[130vh] flex flex-col nm:flex-row items-center justify-center px-10">
      <div className="card-1 bg-[#C56439] px-4 rounded-2xl nm:rounded-tr-none rounded-b-none nm:rounded-3xl nm:rounded-r-none max-w-[412px] max-h-[520px]">
        <h1 className="font-larken text-[30px] nm:text-[40px] text-center font-bold py-10 nm:py-[8rem] text-white">
          {t('common:Limited_1')}
          {' '}
          <br />
          {' '}
          {t('common:Limited_2')}
        </h1>
      </div>
      <div className="border-2 border-[#9F6E42] border-t-0 rounded-2xl nm:rounded-3xl nm:border-l-0 rounded-t-none nm:border-t-2 nm:rounded-l-none nm:h-[496px] max-w-[412px] nm:max-w-[900px] nm:flex nm:justify-center nm:items-center nm:px-10">
        <div className="py-4 space-y-6 px-2 text-[#9F8A81]">
          <p>{t('common:Limited_3')}</p>
          <p>{t('common:Limited_4')}</p>
        </div>
      </div>
    </div>
  );
}

export default Limited;
