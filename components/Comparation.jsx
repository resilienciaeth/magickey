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

function Comparation() {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col nm:flex-row ">
      <div className="nm:w-[50%] flex flex-col justify-center px-10">
        <h1 className="text-[40px] leading-[50px] font-bold nm:text-[50px] magickey-7">
          {t('common:comparation_1')}
          {' '}
          <br />
          {' '}
          {t('common:comparation_2')}

        </h1>
        <div className=" mt-10">
          <p className="text-[#9F8A81] text-[15px] ">
            <span className="font-bold text-[#9F8A81]  ">
              {t('common:comparation_3')}
            </span>
            {' '}
            {t('common:comparation_4')}
            {' '}
            <span className="font-bold text-[#9F8A81]">
              {t('common:comparation_5')}
            </span>
            {' '}
            {t('common:comparation_6')}
          </p>
          <p className="mt-10 text-[#9F8A81] text-[15px] ">
            <span className="font-bold">{t('common:comparation_7')}</span>
            {' '}
            {t('common:comparation_8')}
          </p>
        </div>
      </div>
      <div className="nm:w-[50%] flex items-start">
        <CldImage
          alt="book"
          src="v1672182763/Libro_rr2okq.png"
          width={2250}
          height={3394}
        />
      </div>
    </div>
  );
}

export default Comparation;
