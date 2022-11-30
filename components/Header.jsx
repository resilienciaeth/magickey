import React from 'react';

function Header() {
  return (
    <div className="bg-black flex justify-center items-center h-[90vh]">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-center text-[50px] font-bold leading-[50px] magickey-1">
          Your magic key
          <br />
          {' '}
          to the future
          <br />
          {' '}
          of books.
        </h1>
        <p1 className=" mt-4 text-magickey-2 text-center text-[10px] px-10">
          Building is fun. Doing it with a community is even better.
          <br />
          Join us in becoming the future of books.
        </p1>
        <button className="mt-4 bg-white text-black rounded-md font-bold px-4 py-1 text-[10px]">Buy Magickey</button>
      </div>
    </div>
  );
}

export default Header;
