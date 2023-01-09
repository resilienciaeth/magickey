import React from 'react';
import Head from 'next/head';
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
import Comparation from '../components/Comparation';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const index = () => (
  <div>
    <Head>
      <title>DEBOOK MAGICKEY - Home</title>
      <meta name="description" content="The future of books. Get a MAGICKEY now and join us on creating the future of books" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site_id" content="1547000128434835464" />
      <meta name="twitter:title" content="The future of books" />
      <meta name="twitter:image" content="https://res.cloudinary.com/drxuutjwr/image/upload/v1672258550/debook-art_yawpmi.png" />

    </Head>
    <Navbar />
    <Header />
    <Whatis />
    <Comparation />
    <Utilities />
    <Price />
    <Limited />
    <Percentages />
    <Future />
    <Ourwhy />
    <Creators />
    <Getyours />
    <Footer />
  </div>
);

export default index;
