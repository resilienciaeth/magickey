import React from 'react';
import Image from 'next/image';
import Header from '../components/Header';
import Whatis from '../components/Whatis';

import images from '../public/assets';
import Utilities from '../components/Utilities';
import Price from '../components/Price';
import Percentages from '../components/Percentages';
import Future from '../components/Future';
import Creators from '../components/Creators';

const index = () => (
  <div>
    <Header />
    <Whatis />
    <Utilities />
    <Price />
    <Percentages />
    <Future />
    <Creators />
  </div>
);

export default index;
