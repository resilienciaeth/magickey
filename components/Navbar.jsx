import React, { useState } from 'react';

import Image from 'next/image';
import { AiOutlineClose, AiOutlineMenu, AiOutlineAppstoreAdd } from 'react-icons/ai';
import { BsJournalBookmark } from 'react-icons/bs';
import { SlSocialInstagram, SlSocialTwitter } from 'react-icons/sl';

import images from '../public/assets';

function Navbar() {
  const [nav, setNav] = useState(true);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <nav>
      <div className="flex font-creato justify-between items-center nm:h-24 h-14  px-4 bg-[#121212] text-black">
        <div>
          <Image src={images.logomobile} width={66} height={12} />
        </div>
        <ul className="hidden text-white font-bold nm:flex nm:mr-10 space-x-[4rem] text-[15px]">
          <div onClick={() => window.open('https://www.debook.app')} className="flex flex-row items-center px-2 cursor-pointer rounded-2xl hover:bg-zinc-900 duration-[600ms]">
            <AiOutlineAppstoreAdd size={30} />
            <li className="p-2 ">App</li>
          </div>
          <div onClick={() => window.open('')} className="flex flex-row items-center px-2 cursor-pointer rounded-2xl hover:bg-zinc-900 duration-[600ms]">
            <BsJournalBookmark size={25} />
            <li className="p-2 cursor-pointer">Manifesto</li>
          </div>
          <div className="flex flex-row items-center px-2 cursor-pointer rounded-2xl bg-hover:bg-zinc-900 duration-[600ms]">
            <SlSocialInstagram size={25} />
            <li className="peer p-2 cursor-pointer">Socials</li>
            <div className="hidden peer-hover:flex top-[3.8rem] absolute hover:flex rounded-2xl
         w-[100px] flex-col drop-shadow-lg"
            >
              <a className="px-5 text-right py-3 text-white hover:bg-zinc-800" href="#">Twitter</a>
              <a className="px-5 py-3 text-right  text-white hover:bg-zinc-800" href="#" onClick={() => window.open('https://www.instagram.com/debook.app')}>Instagram</a>
            </div>
          </div>
          <button onClick={() => window.open('')} className="uppercase text-black magickey-6 text-[15px] border-black border-2 rounded-[6px] px-4 py-1 hover:bg-black hover:border-white font-bold duration-300">Buy Magickey</button>
        </ul>
        <div className="cursor-pointer z-20 flex nm:hidden " onClick={handleNav} onKeyPress={handleNav}>
          {!nav ? <AiOutlineClose size={20} className="text-black" /> : <AiOutlineMenu size={20} className="text-white" />}
        </div>
        <div className={!nav ? 'fixed bg-white left-0 top-0 w-full z-10 h-full bg-beyond-1 ease-in-out duration-500' : 'fixed left-[-100%]'}>
          <div className="mt-10 px-6">
            <Image src={images.logomobile} width={200} height={100} />
          </div>
          <ul className="pt-16 px-10 uppercase font-bold">
            <li onClick={() => window.open('/FAQ', '_self')} className="p-4 text-[50px]">APP</li>
            <li onClick={() => window.open('')} className="p-4 text-[50px]">MANIFESTO</li>
            <li onClick={() => window.open('https://www.instagram.com/debook.app')} className="p-4 text-[50px]">Instagram</li>
            <button onClick={() => window.open('https://forms.gle/GUQeAoUAQ7qA2ybQ7')} className="uppercase text-[12px] nm:text-[30px] border-black border-2 rounded-[6px] ml-2 mt-4 px-4 py-1 hover:bg-black hover:text-white hover:border-white">BUY MAGICKEY</button>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
