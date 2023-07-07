import React, { useRef, resultRef } from 'react';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}

function Header() {
  const { t } = useTranslation();
  return (
    <div className="bg-[#121212] flex justify-center items-center h-[90vh]">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-center text-[50px] nm:text-[100px] font-bold leading-[50px] nm:leading-[120px] magickey-1">
          {t('common:title_1')}
          <br className="flex nm:hidden" />
          {' '}
          {t('common:title_2')}
          {' '}
          <br className="hidden nm:flex" />
          {t('common:title_3')}
          <br className="flex nm:hidden" />
          {' '}
          {t('common:title_4')}
        </h1>
        <p1 className=" mt-4 text-magickey-2 text-center text-[15px] nm:text-[20px] px-10">
          {t('common:title_5')}
          {' '}
          <br />
          {' '}
          {t('common:title_6')}
          <br />
          {t('common:title_7')}
        </p1>
        <button type="button" onClick={() => window.open('/mint', '_self')} onKeyDown={() => window.open('/mint', '_self')} className="mt-4 bg-white text-black rounded-md font-bold px-4 nm:px-6 py-2 nm:py-2 text-[15px] nm:text-[20px]">{t('common:title_button')}</button>
      </div>
    </div>
  );
}

export default Header;
