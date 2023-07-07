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

function Future() {
  const { t } = useTranslation();
  return (
    <div className=" nm:h-[80vh]">
      <div className="nm:flex nm:flex-row-reverse ">
        <div className="flex mt-20 nm:mt-10 nm:w-[40%] items-center justify-center">
          <CldImage alt="iphone" src="v1672097287/iphone_hcd9pe.png" width={234} height={573} />
          <div className="mt-[25rem] flex nm:hidden flex-col items-center absolute">
            <p className="text-center text-[10px] text-magickey-2">{t('common:Future_1')}</p>
            <h1 className="magickey-1 font-bold leading-[40px] text-center text-[40px]">
              {' '}
              {t('common:Future_2')}
              {' '}
              <br />
              {' '}
              {t('common:Future_3')}
              {' '}
              <br />
              {' '}
              {t('common:Future_4')}
            </h1>
          </div>
        </div>
        <div className="px-10 nm:px-0 nm:ml-[6rem] nm:w-[60%] nm:flex nm:flex-col nm:justify-center">
          <div className="hidden nm:flex nm:flex-col ">
            <p className="text-center nm:text-left text-[10px] nm:text-[12px] text-magickey-2">{t('common:Future_5')}</p>
            <h1 className="magickey-1 font-bold leading-[40px] nm:leading-[80px] text-center nm:text-left text-[42px] nm:text-[70px]">
              {t('common:Future_6')}
              {' '}
              <br />
              {' '}
              {t('common:Future_7')}
              {' '}
              <br className="hidden nm:flex" />
              {' '}
              {t('common:Future_8')}
            </h1>
          </div>
          <p className="text-center nm:mr-20 nm:mt-4 nm:text-left text-[15px] nm:text-[15px] leading-[20px] text-[#9F8A81]">
            {t('common:Future_9')}

          </p>
          <p className="text-center nm:mr-20 nm:text-left text-[15px] nm:text-[15px] leading-[20px] mt-10 text-[#9F8A81]
"
          >
            {t('common:Future_10')}
          </p>
          <div className="nm:flex hidden items-start justify-start mt-6">
            <button onClick={() => window.open('https://feather-citrine-09c.notion.site/DEBOOK-MANIFESTO-9425060483794743ba6a10b048970bf5')} type="button" className="magickey-6 text-[12px] px-4 py-2 font-bold  text-black">{t('common:Future_11')}</button>
          </div>
        </div>
        <div className="flex items-center justify-center mt-6">
          <button type="button" onClick={() => window.open('https://feather-citrine-09c.notion.site/DEBOOK-MANIFESTO-9425060483794743ba6a10b048970bf5')} className="magickey-6 flex nm:hidden text-[12px] px-4 py-2 font-bold  text-black">{t('common:Future_12')}</button>
        </div>
      </div>
    </div>
  );
}

export default Future;
