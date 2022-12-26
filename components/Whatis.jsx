import React from 'react';

function Whatis() {
  return (
    <div className="h-[150vh] nm:h-[100vh] bg-[#121212] px-10">
      <div className="nm:mt-20">
        <p className="text-center text-[10px] md:text-[15px] magickey-1">A book is a book, and DEBOOK is also...</p>
        <h1 className="magickey-1 text-center text-[30px] md:text-[70px] font-bold">What is DEBOOK?</h1>
        <div className="h-[90vh] nm:px-20 space-y-4 nm:space-y-0 nm:space-x-14 flex flex-col mt-10">
          <div className="nm:flex nm:flex-row space-y-4 nm:space-y-0 nm:space-x-14">
            <div className=" orange-1 h-[40vh] nm:h-[40vh] nm:w-[33%]  rounded-xl flex items-center justify-center flex-col">
              <h1 className=" text-[20px] md:text-[24px] text-white text-center font-bold font-larken leading-[30px]">
                DEBOOK IS ALSO A
                {' '}
                <br />
                {' '}
                MARKETPLACE

              </h1>
              <p className="text-white text-[15px] md:text-[17px] text-center px-4 md:px-6 mt-6">
                DEBOOK is the place to buy, sell and exchange debooks, a new version of books that are fairer to authors and readers in a very user friendly experience. Buy, sell or rent your favorite books.
              </p>
            </div>
            <div className=" orange-1 h-[40vh] nm:h-[40vh] nm:w-[33%]  rounded-xl flex items-center justify-center flex-col">
              <h1 className=" text-[20px] md:text-[24px] text-white text-center font-bold font-larken leading-[30px]">
                DEBOOK IS ALSO A
                {' '}
                <br />
                SOCIAL PLATFORM
              </h1>
              <p className="text-white text-[15px] md:text-[17px] text-center px-4 md:px-6 mt-6">
                Each debook collection has its own community. Authors and readers are creators inside those communities. Your debook is your passport to a community full of content around the book you love.
              </p>
            </div>
            <div className="orange-1 h-[40vh] nm:h-[40vh] nm:w-[33%] rounded-xl flex items-center justify-center flex-col">
              <h1 className="text-[20px] md:text-[24px] text-white text-center font-bold font-larken leading-[30px]">
                DEBOOK IS ALSO A
                {' '}
                <br />
                {' '}
                TOKENIZATION TOOL
              </h1>
              <p className="text-white text-[15px] md:text-[17px] text-center px-4 md:px-6 mt-6">
                Each debook is a tokenized digital collectible. This gives you complete ownership, and gives many benefits to the author, such as control over their book's community, content.
              </p>
            </div>
          </div>
          <div className="hidden nm:flex nm:mt-10 nm:flex-col items-center">
            <p className="mt-10 text-[#9F8A81]">
              That is just a first glance on the idea; having a debook will be memorable for authors and readers.
            </p>
            <p className="text-[#9F8A81]">
              Learn more in our
              {' '}
              <span className="underline cursor-pointer font-bold"> MANIFIESTO.</span>
            </p>
          </div>
        </div>
      </div>
    </div>

  );
}

export default Whatis;
