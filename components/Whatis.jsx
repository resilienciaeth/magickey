import React from 'react';

function Whatis() {
  return (
    <div className="h-[120vh] nm:h-[100vh] bg-black px-10">
      <div className="nm:mt-20">
        <p className="text-center text-[10px] md:text-[15px] magickey-1">From books to ebooks to debooks.</p>
        <h1 className="magickey-1 text-center text-[36px] md:text-[70px] font-bold">What is DEBOOK?</h1>
        <div className="h-[90vh] nm:px-20 space-y-4 nm:space-y-0 nm:space-x-14 flex flex-col mt-10">
          <div className="nm:flex nm:flex-row space-y-4 nm:space-y-0 nm:space-x-14">
            <div className=" orange-1 h-[30vh] nm:h-[40vh] nm:w-[33%]  rounded-xl flex items-center justify-center flex-col">
              <h1 className=" text-[20px] md:text-[24px] text-white text-center font-bold leading-[30px]">
                A book is a book
                <br />
                {' '}
                a debook is also a library.
              </h1>
              <p className="text-white text-[15px] md:text-[17px] text-center px-4 md:px-6 mt-6">
                A platform that will give you access to read all the authors you love with a one-payment service. Like the Spotify of books.
              </p>
            </div>
            <div className="orange-1 h-[30vh] nm:h-[40vh] nm:w-[33%] rounded-xl flex items-center justify-center flex-col">
              <h1 className=" text-[20px] md:text-[24px] text-white text-center font-bold leading-[30px]">
                A book is a book
                <br />
                {' '}
                a debook is also a community.
              </h1>
              <p className="text-white text-[15px] md:text-[17px] text-center px-4 md:px-6 mt-6">
                Each book has a social layer to connect you with other passionate readers. Being an author will not be just about writing but keeping the book alive.
              </p>
            </div>
            <div className="orange-1 h-[30vh] nm:h-[40vh] nm:w-[33%] rounded-xl flex items-center justify-center flex-col">
              <h1 className="text-[20px] md:text-[24px] text-white text-center font-bold leading-[30px]">
                A book is a book

                <br />
                {' '}
                a debook is also a collectible.
              </h1>
              <p className="text-white text-[15px] md:text-[17px] text-center px-4 md:px-6 mt-6">
                Each book has an ownership layer regulated by the author to access the community.
              </p>
            </div>
          </div>
          <div className="hidden nm:flex">
            <p>HOLA</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Whatis;
