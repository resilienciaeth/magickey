import React from 'react';
import Image from 'next/image';

import images from '../public/assets';

function Ourwhy() {
  return (
    <div>
      <div className="hidden nm:flex">
        <Image src={images.utilities} />
      </div>
      <div className="nm:hidden flex">
        <Image src={images.utilitiesmb} />
      </div>
    </div>
  );
}

export default Ourwhy;
