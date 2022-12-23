import React from 'react';
import Header from '../components/Header';
import Whatis from '../components/Whatis';
import Utilities from '../components/Utilities';
import Price from '../components/Price';
import Percentages from '../components/Percentages';
import Future from '../components/Future';
import Creators from '../components/Creators';
import Getyours from '../components/Getyours';
import Ourwhy from '../components/Ourwhy';
import Limited from '../components/Limited';

const index = () => (
  <div>
    <Header />
    <Whatis />
    <Utilities />
    <Price />
    <Limited />
    <Percentages />
    <Future />
    <Ourwhy />
    <Creators />
    <Getyours />
  </div>
);

export default index;
