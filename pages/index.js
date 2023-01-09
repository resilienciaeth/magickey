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

      <title>DEBOOK MAGICKEY</title>
      <meta name="title" content="DEBOOK MAGICKEY" />
      <meta name="description" content="The future of books. Get a MAGICKEY now and join us on creating the future of books" />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://debookmagickey.io/" />
      <meta property="og:title" content="DEBOOK MAGICKEY" />
      <meta property="og:description" content="The future of books. Get a MAGICKEY now and join us on creating the future of books" />
      <meta property="og:image" content="https://res.cloudinary.com/drxuutjwr/image/upload/v1673278645/Screen_Shot_2023-01-08_at_3.08.20_PM_ckvihg.png" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://debookmagickey.io/" />
      <meta property="twitter:title" content="DEBOOK MAGICKEY" />
      <meta property="twitter:description" content="The future of books. Get a MAGICKEY now and join us on creating the future of books" />
      <meta property="twitter:image" content="https://res.cloudinary.com/drxuutjwr/image/upload/v1673278645/Screen_Shot_2023-01-08_at_3.08.20_PM_ckvihg.png" />

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
