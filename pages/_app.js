import { ThemeProvider } from 'next-themes';
import Script from 'next/script';
import { ChainId, ThirdwebProvider } from '@thirdweb-dev/react';
import { appWithTranslation } from 'next-i18next';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

import '../styles/globals.css';

const activeChainId = ChainId.Mainnet;

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebProvider desiredChainId={activeChainId}>
      <ThemeProvider
        attribute="class"
      >
        <div className="font-creato min-h-screen max-h-screen bg-[#121212]">
          <Component />
        </div>

        <Script src="https://kit.fontawesome.com/4e0b8e54bb.js" crossOrigin="anonymous" />
      </ThemeProvider>
    </ThirdwebProvider>
  );
}
export default appWithTranslation(MyApp);
