import React, { useRef, resultRef } from 'react';

function Header({ resultRef }) {
  const more = useRef(null);
  const services = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: 'smooth',
    });
  };
  return (
    <div className="bg-[#121212] flex justify-center items-center h-[90vh]">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-center text-[50px] nm:text-[100px] font-bold leading-[50px] nm:leading-[120px] magickey-1">
          Your magic key
          <br className="flex nm:hidden" />
          {' '}
          to
          {' '}
          <br className="hidden nm:flex" />
          {' '}
          the future
          <br className="flex nm:hidden" />
          {' '}
          of books.
        </h1>
        <p1 className=" mt-4 text-magickey-2 text-center text-[10px] nm:text-[20px] px-10">
          Building is fun. Doing it with a community is even better.
          <br />
          Join us in becoming the future of books.
        </p1>
        <button type="button" onClick={() => window.open('/mint', '_self')} onKeyDown={() => window.open('/mint', '_self')} className="mt-4 bg-white text-black rounded-md font-bold px-4 nm:px-6 py-1 nm:py-2 text-[10px] nm:text-[20px]">Get Magickey</button>
      </div>
    </div>
  );
}

export default Header;
