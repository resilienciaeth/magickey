import { CldImage } from 'next-cloudinary';
import React from 'react';

function Comparation() {
  return (
    <div className="flex flex-col nm:flex-row nm:h-[90vh]">
      <div className="nm:w-[50%] flex flex-col justify-center px-10">
        <h1 className="text-[40px] leading-[50px] font-bold nm:text-[50px] magickey-7">
          The differences between
          {' '}
          <br />
          {' '}
          DEBOOK and 'debook'
        </h1>
        <div className=" mt-10">
          <p className="text-[#9F8A81] text-[15px] ">
            <span className="font-bold text-[#9F8A81]  ">DEBOOK</span>
            {' '}
            is the platform, Marketplace and tokenization tool.
            {' '}
            <span className="font-bold text-[#9F8A81]">DEBOOK</span>
            {' '}
            is the term we use to refer to the brand. The future of books.
          </p>
          <p className="mt-10 text-[#9F8A81] text-[15px] ">
            <span className="font-bold">“debook”</span>
            {' '}
            is the new book’s format, a book that you can use to read, watch, interact with, own and exchange. A digital collectible that grants you access to a private community around that book. A new version of books.
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

{ /* }
<div className="text-[30px]">
              <li>The brand, the new ecosystem of books</li>
              <li>The brand, the new ecosystem of books</li>
              <li>The brand, the new ecosystem of books</li>
              <li>The brand, the new ecosystem of books</li>
            </div>

            <div className="text-[30px]">
              <li>the new book’s format</li>
              <li>a book that you can use to read, watch, interact with, own and exchange</li>
              <li>A digital collectible that grants you access to a private community around that book.</li>
            </div>

*/ }
