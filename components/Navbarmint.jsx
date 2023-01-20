import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu, AiOutlineAppstoreAdd } from 'react-icons/ai';
import { BsJournalBookmark } from 'react-icons/bs';
import { SlSocialInstagram, SlSocialTwitter } from 'react-icons/sl';

import { CldImage } from 'next-cloudinary';

function Navbar() {
  const [nav, setNav] = useState(true);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <nav>
      <div className="flex font-creato justify-between items-center nm:h-24 h-14  px-4 bg-[#121212] text-black">
        <div onClick={() => window.open('/', '_self')} className=" cursor-pointer">
          <CldImage
            alt="logo"
            src="v1672097966/logo_nex9ig.png"
            priority
            width={108}
            height={20}
          />
        </div>
        <ul className="hidden text-white font-bold nm:flex nm:mr-10 space-x-[4rem] text-[15px]">
          <div onClick={() => window.open('https://www.debook.app')} className="flex flex-row items-center px-2 cursor-pointer rounded-2xl hover:bg-zinc-900 duration-[600ms]">
            <AiOutlineAppstoreAdd size={30} />
            <li className="p-2 ">App</li>
          </div>
          <div onClick={() => window.open('https://feather-citrine-09c.notion.site/DEBOOK-MANIFESTO-9425060483794743ba6a10b048970bf5')} className="flex flex-row items-center px-2 cursor-pointer rounded-2xl hover:bg-zinc-900 duration-[600ms]">
            <BsJournalBookmark size={25} />
            <li className="p-2 cursor-pointer">Manifesto</li>
          </div>
          <div className="flex flex-row items-center px-2 cursor-pointer rounded-2xl bg-hover:bg-zinc-900 duration-[600ms]">
            <SlSocialInstagram size={25} />
            <li className="peer p-2 cursor-pointer">Socials</li>
            <div className="hidden peer-hover:flex top-[3.8rem] absolute hover:flex rounded-2xl
         w-[100px] flex-col drop-shadow-lg"
            >
              <a className="px-5 text-right py-3 text-white hover:bg-zinc-800" onClick={() => window.open('https://twitter.com/Debook_app')}>Twitter</a>
              <a className="px-5 py-3 text-right  text-white hover:bg-zinc-800" href="#" onClick={() => window.open('https://www.instagram.com/debook.app')}>Instagram</a>
            </div>
          </div>
        </ul>
        <div className="cursor-pointer z-20 flex nm:hidden" role="presentation" onKeyDown={handleNav} onClick={handleNav}>
          {!nav ? <AiOutlineClose size={20} className="text-black" /> : <AiOutlineMenu size={20} className="text-white" />}
        </div>
        <div className={!nav ? 'fixed bg-[#121212] left-0 top-0 w-full z-10 h-full bg-beyond-1 ease-in-out duration-500' : 'fixed left-[-100%]'}>
          <ul className="pt-16 px-10 uppercase font-bold">
            <li
              onClick={() => window.open('https://www.debook.app')}
              className="p-4 magickey-1 text-[25px]"
            >
              APP
            </li>
            <li
              onClick={() => window.open(
                'https://twitter.com/search?q=%23buildingDEBOOKinpublic&src=typed_query&f=top',
              )}
              className="p-4 magickey-1 text-[25px]"
            >
              BUILDING LIVE
            </li>
            <li
              onClick={() => window.open(
                'https://feather-citrine-09c.notion.site/DEBOOK-MANIFESTO-9425060483794743ba6a10b048970bf5',
              )}
              className="p-4 magickey-1 text-[25px]"
            >
              MANIFESTO
            </li>
            <li
              onClick={() => window.open('https://www.instagram.com/debook.app')}
              className="p-4 magickey-1 text-[25px]"
            >
              Instagram
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
