import React from 'react';

function Whatis() {
  return (
    <div className="h-[120vh] bg-black px-10">
      <div>
        <p className="text-center text-[10px] magickey-1">From books to ebooks to debooks.</p>
        <h1 className="magickey-1 text-center text-[36px] font-bold">What is DEBOOK?</h1>
        <div className="h-[90vh] space-y-4 mt-10">
          <div className=" orange-1 h-[33%] rounded-xl flex items-center justify-start flex-col ">
            <h1 className="mt-10 text-[20px] text-white text-center font-bold leading-[30px]">
              A book is a book
              <br />
              {' '}
              a debook is also a library.
            </h1>
            <p className="text-white text-[15px] text-center px-4 mt-6">
              A platform that will give you access to read all the authors you love with a one-payment service. Like the Spotify of books.
            </p>
          </div>
          <div className=" orange-1 h-[33%] rounded-xl flex items-center justify-start flex-col ">
            <h1 className="mt-10 text-[20px] text-white text-center font-bold leading-[30px]">
              A book is a book
              <br />
              {' '}
              a debook is also a community.
            </h1>
            <p className="text-white text-[15px] text-center px-4 mt-6">
              Each book has a social layer to connect you with other passionate readers. Being an author will not be just about writing but keeping the book alive.
            </p>
          </div>
          <div className=" orange-1 h-[33%] rounded-xl flex items-center justify-start flex-col ">
            <h1 className="mt-10 text-[20px] text-white text-center font-bold leading-[30px]">
              A book is a book

              <br />
              {' '}
              a debook is also a collectible.
            </h1>
            <p className="text-white text-[15px] text-center px-4 mt-6">
              Each book has an ownership layer regulated by the author to access the community.

            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Whatis;
