import React, { useState } from 'react';
import {
  AiOutlineClose,
  AiOutlineMenu,
  AiOutlineAppstoreAdd,
  AiOutlineBell,
} from 'react-icons/ai';
import { BsJournalBookmark } from 'react-icons/bs';
import { MdOutlinePodcasts } from 'react-icons/md';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import { useTranslation } from 'next-i18next';

import { CldImage } from 'next-cloudinary';

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}

function Navbar() {
  const { t } = useTranslation();
  const [nav, setNav] = useState(true);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <nav>
      <div className="flex font-creato justify-between items-center nm:h-24 h-14  px-4 bg-[#121212] text-black">
        <div
          onClick={() => window.open('/', '_self')}
          className=" cursor-pointer"
        >
          <CldImage
            alt="logo"
            src="v1672097966/logo_nex9ig.png"
            priority
            width={108}
            height={20}
          />
        </div>
        <ul className="hidden text-white font-bold nm:flex nm:mr-10 space-x-[4rem] text-[15px]">
          <div
            onClick={() => window.open('https://www.debook.app')}
            className="flex flex-row items-center px-2 cursor-pointer rounded-2xl hover:bg-zinc-900 duration-[600ms]"
          >
            <AiOutlineAppstoreAdd size={30} />
            <li className="p-2 ">Marketplace</li>
          </div>
          <div
            onClick={() => window.open(
              'https://feather-citrine-09c.notion.site/DEBOOK-MANIFESTO-9425060483794743ba6a10b048970bf5',
            )}
            className="flex flex-row items-center px-2 cursor-pointer rounded-2xl hover:bg-zinc-900 duration-[600ms]"
          >
            <BsJournalBookmark size={25} />
            <li className="p-2 cursor-pointer">{t('common:Navbar_1')}</li>
          </div>
          <div
            onClick={() => window.open(
              'https://twitter.com/search?q=%23buildingDEBOOKinpublic&src=typed_query&f=top',
            )}
            className="flex flex-row items-center px-2 cursor-pointer rounded-2xl hover:bg-zinc-900 duration-[600ms]"
          >
            <AiOutlineBell size={30} />
            <li className="p-2 ">{t('common:Navbar_2')}</li>
            <span className="flex h-3 w-3 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-debook-1 opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-debook-1" />
            </span>
          </div>
          <div
            onClick={() => window.open(
              'https://www.youtube.com/@debook1066',
            )}
            className="flex flex-row items-center px-2 cursor-pointer rounded-2xl hover:bg-zinc-900 duration-[600ms]"
          >
            <MdOutlinePodcasts size={30} />
            <li className="p-2 cursor-pointer">Podcast</li>
          </div>
          <button
            type="button"
            onClick={() => window.open('/mint', '_self')}
            onKeyDown={() => window.open('/mint', '_self')}
            className="uppercase text-black magickey-6 text-[15px] border-black border-2 rounded-[6px] px-4 py-1 hover:bg-black hover:border-white font-bold duration-300"
          >
            {t('common:Navbar_button')}
          </button>
        </ul>
        <div
          className="cursor-pointer z-20 flex nm:hidden"
          role="presentation"
          onKeyDown={handleNav}
          onClick={handleNav}
        >
          {!nav ? (
            <AiOutlineClose size={20} className="text-white" />
          ) : (
            <AiOutlineMenu size={20} className="text-white" />
          )}
        </div>
        <div
          className={
            !nav
              ? 'fixed bg-[#121212] left-0 top-0 w-full z-10 h-full bg-beyond-1 ease-in-out duration-500'
              : 'fixed left-[-100%]'
          }
        >
          <ul className="pt-16 px-10 uppercase font-bold">
            <li
              onClick={() => window.open('https://www.debook.app')}
              className="p-4 magickey-1 text-[25px]"
            >
              MARKETPLACE
            </li>
            <div className="flex flex-row items-center">
              <li
                onClick={() => window.open(
                  'https://twitter.com/search?q=%23buildingDEBOOKinpublic&src=typed_query&f=top',
                )}
                className="p-4 magickey-1 text-[25px]"
              >
                BUILDING LIVE
              </li>
              <span className="flex h-3 w-3 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-debook-1 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-debook-1" />
              </span>
            </div>
            <li
              onClick={() => window.open(
                'https://feather-citrine-09c.notion.site/DEBOOK-MANIFESTO-9425060483794743ba6a10b048970bf5',
              )}
              className="p-4 magickey-1 text-[25px]"
            >
              MANIFESTO
            </li>
            <li
              onClick={() => window.open('https://www.youtube.com/@debook1066')}
              className="p-4 magickey-1 text-[25px]"
            >
              PODCAST
            </li>
            <button
              onClick={() => window.open('/mint', '_self')}
              className="uppercase text-black bg-white font-bold text-[12px] nm:text-[30px] border-white border-2 rounded-[6px] ml-2 mt-4 px-4 py-2"
            >
              BUY MAGICKEY
            </button>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
