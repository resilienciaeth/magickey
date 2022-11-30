import React, { useEffect, useState, useRef } from 'react';

import Image from 'next/image';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

import images from '../public/assets';

function Navbar() {
  const [nav, setNav] = useState(true);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <nav>
      <div className="flex font-creato justify-between items-center nm:h-24 h-14  px-4 bg-black text-black">
        <div className="">
          <Image src={images.logomobile} width={66} height={12} />
        </div>
        <ul className="hidden text-white font-bold nm:flex nm:mr-10 space-x-[5rem] uppercase text-[15px]">
          <li onClick={() => window.open('/FAQ', '_self')} className="p-4 cursor-pointer hover:text-gray-600">FAQ</li>
          <li onClick={() => window.open('https://www.spatial.io/s/AXK4N-Morning-Naked-Meta-63626a426ce24900014b9c86?share=2965428990700775752')} className="p-4 cursor-pointer  hover:text-gray-600">Explora</li>
          <li onClick={() => window.open('https://www.spatial.io/s/AXK4N-Morning-Naked-Meta-63626a426ce24900014b9c86?share=2965428990700775752')} className="p-4 cursor-pointer  hover:text-gray-600">Explora</li>
          <li onClick={() => window.open('https://www.spatial.io/s/AXK4N-Morning-Naked-Meta-63626a426ce24900014b9c86?share=2965428990700775752')} className="p-4 cursor-pointer  hover:text-gray-600">Explora</li>
          <button onClick={() => window.open('https://forms.gle/GUQeAoUAQ7qA2ybQ7')} className="uppercase text-[15px] border-black border-2 rounded-[6px] px-4 py-1 hover:bg-black hover:text-white hover:border-white">HOLA</button>
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
