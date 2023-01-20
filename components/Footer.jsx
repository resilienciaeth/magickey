import React from 'react';
import { CldImage } from 'next-cloudinary';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { useTranslation } from 'next-i18next';

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}

function Footer() {
  const { t } = useTranslation();
  return (
    <div className="w-full bg-black px-20 py-10">
      <div className="flex flex-col nm:flex-row items-center justify-start nm:justify-between">
        <div className="flex flex-col">
          <div className="mt-10">
            <CldImage alt="logo" src="v1672098070/logofooter_nfszju.png" width={162} height={32} />
          </div>
        </div>
        <div className="flex flex-col nm:mt-12 mb-10">
          <div className="flex flex-row space-x-10 mt-10 w-full">
            <div className="flex flex-col space-y-5">
              <h1 className="text-white text-[14px]">DEBOOK</h1>
              <p onClick={() => window.open('https://feather-citrine-09c.notion.site/DEBOOK-MANIFESTO-9425060483794743ba6a10b048970bf5')} className="text-[15px] nm:text-[18px] text-debook-1 cursor-pointer">{t('common:Footer_1')}</p>
              <p onClick={() => window.open('https://www.debook.app')} className="text-[15px] nm:text-[18px] text-debook-1 cursor-pointer">App</p>
              <p onClick={() => window.open('/mint', '_self')} className="text-[15px] nm:text-[18px] text-debook-1 cursor-pointer">{t('common:Footer_2')}</p>
            </div>
            <div className="flex flex-col space-y-5">
              <h1 className="text-white text-[14px]">{t('common:Footer_3')}</h1>
              <p onClick={() => window.open('https://twitter.com/Debook_app')} className="text-[15px] nm:text-[18px] text-debook-1 cursor-pointer">Twitter</p>
              <p onClick={() => window.open('https://www.instagram.com/debook.app')} className="text-[15px] nm:text-[18px] text-debook-1 cursor-pointer">Instagram</p>
              <p className="text-[15px] nm:text-[18px] text-debook-1 cursor-pointer">Discord</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center space-y-2 mt-5 nm:mt-20 mb-10">
        <p className="text-white text-center">
          2022. DEBOOK.
          {' '}
          {t('common:Footer_4')}
        </p>
      </div>
    </div>
  );
}

export default Footer;
