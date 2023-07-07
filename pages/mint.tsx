import Image from "next/image";
import Head from "next/head";
import {
  useActiveClaimConditionForWallet,
  useAddress,
  useClaimConditions,
  useClaimedNFTSupply,
  useClaimerProofs,
  useClaimIneligibilityReasons,
  useContract,
  useContractMetadata,
  useUnclaimedNFTSupply,
  useMetamask,
  useNetworkMismatch,
  useNetwork,
  ChainId,
} from "@thirdweb-dev/react";
import { BigNumber, utils } from "ethers";
import type { NextPage } from "next";
import { useMemo, useState } from "react";
import styles from "../styles/Theme.module.css";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { CrossmintPayButton } from "@crossmint/client-sdk-react-ui";
import { CldImage } from "next-cloudinary";
import Navbar from "../components/Navbarmint";

import images from "../public/assets";

const contractAddress = "0x4C50852f241cCC9CD421D8403E4Ab120c6cE9733";

function mint() {
  const nftCost = 0.013;
  const clientId = "c90aef87-93fe-4b0f-897f-5d35ea4f2034";

  const [mintAmount, setMintAmount] = useState(1);

  const handleDecrement = () => {
    if (mintAmount <= 1) return;
    setMintAmount(mintAmount - 1);
  };

  const handleIncrement = () => {
    if (mintAmount >= 3) return;
    setMintAmount(mintAmount + 1);
  };

  const [claiming, setClaiming] = useState(false);
  const connectMetamask = useMetamask();
  const { contract: contract } = useContract(contractAddress);
  const { data: claimedNFTSupply } = useClaimedNFTSupply(contract);
  const { data: unclaimedNFTSupply } = useUnclaimedNFTSupply(contract);
  const isWrongNetwork = useNetworkMismatch();
  const [, switchNetwork] = useNetwork();

  const mint = async () => {
    if (!address) {
      connectMetamask();
      return;
    }

    if (isWrongNetwork) {
      switchNetwork && switchNetwork(ChainId.Mainnet);
      return;
    }

    setClaiming(true);

    try {
      await contract.erc721?.claim(quantity);
      alert("Welcome to the dream 🧡 You are now part of the future of books!");
      setClaiming(false);
    } catch (error) {
      alert(error);
    }
  };

  const address = useAddress();
  const [quantity, setQuantity] = useState(1);

  const { data: contractMetadata } = useContractMetadata(contract);

  const claimConditions = useClaimConditions(contract);

  const activeClaimCondition = useActiveClaimConditionForWallet(
    contract,
    address || ""
  );
  const claimerProofs = useClaimerProofs(contract, address || "");
  const claimIneligibilityReasons = useClaimIneligibilityReasons(contract, {
    quantity,
    walletAddress: address || "",
  });
  const unclaimedSupply = useUnclaimedNFTSupply(contract);
  const claimedSupply = useClaimedNFTSupply(contract);

  const numberClaimed = useMemo(() => {
    return BigNumber.from(claimedSupply.data || 0).toString();
  }, [claimedSupply]);

  const numberTotal = useMemo(() => {
    return BigNumber.from(claimedSupply.data || 0)
      .add(BigNumber.from(unclaimedSupply.data || 0))
      .toString();
  }, [claimedSupply.data, unclaimedSupply.data]);

  const priceToMint = useMemo(() => {
    const bnPrice = BigNumber.from(
      activeClaimCondition.data?.currencyMetadata.value || 0
    );
    return `${utils.formatUnits(
      bnPrice.mul(quantity).toString(),
      activeClaimCondition.data?.currencyMetadata.decimals || 18
    )} ${activeClaimCondition.data?.currencyMetadata.symbol}`;
  }, [
    activeClaimCondition.data?.currencyMetadata.decimals,
    activeClaimCondition.data?.currencyMetadata.symbol,
    activeClaimCondition.data?.currencyMetadata.value,
    quantity,
  ]);

  const maxClaimable = useMemo(() => {
    let bnMaxClaimable;
    try {
      bnMaxClaimable = BigNumber.from(
        activeClaimCondition.data?.maxClaimableSupply || 0
      );
    } catch (e) {
      bnMaxClaimable = BigNumber.from(1_000_000);
    }

    let perTransactionClaimable;
    try {
      perTransactionClaimable = BigNumber.from(
        activeClaimCondition.data?.maxClaimablePerWallet || 0
      );
    } catch (e) {
      perTransactionClaimable = BigNumber.from(1_000_000);
    }

    if (perTransactionClaimable.lte(bnMaxClaimable)) {
      bnMaxClaimable = perTransactionClaimable;
    }

    const snapshotClaimable = claimerProofs.data?.maxClaimable;

    if (snapshotClaimable) {
      if (snapshotClaimable === "0") {
        // allowed unlimited for the snapshot
        bnMaxClaimable = BigNumber.from(1_000_000);
      } else {
        try {
          bnMaxClaimable = BigNumber.from(snapshotClaimable);
        } catch (e) {
          // fall back to default case
        }
      }
    }

    const maxAvailable = BigNumber.from(unclaimedSupply.data || 0);

    let max;
    if (maxAvailable.lt(bnMaxClaimable)) {
      max = maxAvailable;
    } else {
      max = bnMaxClaimable;
    }

    if (max.gte(1_000_000)) {
      return 1_000_000;
    }
    return max.toNumber();
  }, [
    claimerProofs.data?.maxClaimable,
    unclaimedSupply.data,
    activeClaimCondition.data?.maxClaimableSupply,
    activeClaimCondition.data?.maxClaimablePerWallet,
  ]);

  const isSoldOut = useMemo(() => {
    try {
      return (
        (activeClaimCondition.isSuccess &&
          BigNumber.from(activeClaimCondition.data?.availableSupply || 0).lte(
            0
          )) ||
        numberClaimed === numberTotal
      );
    } catch (e) {
      return false;
    }
  }, [
    activeClaimCondition.data?.availableSupply,
    activeClaimCondition.isSuccess,
    numberClaimed,
    numberTotal,
  ]);

  console.log("claimIneligibilityReasons", claimIneligibilityReasons.data);

  const canClaim = useMemo(() => {
    return (
      activeClaimCondition.isSuccess &&
      claimIneligibilityReasons.isSuccess &&
      claimIneligibilityReasons.data?.length === 0 &&
      !isSoldOut
    );
  }, [
    activeClaimCondition.isSuccess,
    claimIneligibilityReasons.data?.length,
    claimIneligibilityReasons.isSuccess,
    isSoldOut,
  ]);

  const isLoading = useMemo(() => {
    return (
      activeClaimCondition.isLoading ||
      unclaimedSupply.isLoading ||
      claimedSupply.isLoading ||
      !contract
    );
  }, [
    activeClaimCondition.isLoading,
    contract,
    claimedSupply.isLoading,
    unclaimedSupply.isLoading,
  ]);

  const buttonLoading = useMemo(
    () => isLoading || claimIneligibilityReasons.isLoading,
    [claimIneligibilityReasons.isLoading, isLoading]
  );
  const buttonText = useMemo(() => {
    if (isSoldOut) {
      return "Sold Out";
    }
  }, [
    isSoldOut,
    canClaim,
    claimIneligibilityReasons.data,
    buttonLoading,
    activeClaimCondition.data?.currencyMetadata.value,
    priceToMint,
    quantity,
  ]);

  const [nav, setNav] = useState(true);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="bg-[#121212] h-screen">
      <Head>
        <title>DEBOOK MAGICKEY - Mint</title>
      </Head>
      <meta
        name="description"
        content="The future of books. Get a MAGICKEY now and join us on creating the future of books"
      />
      <Navbar />
      <div className="flex flex-row">
        <div className="h-[90vh] w-[100%] nm:w-[55%] flex items-center justify-center flex-col">
          <div className="font-bold text-center flex flex-col  justify-center items-center text-[35px] nm:text-[50px] nm:ml-6 text-white">
            <h1 className="text-center magickey-1 leading-[40px] nm:leading-[50px]">
              DEBOOK <br /> MAGICKEY
            </h1>
            <p className=" text-center flex mt-5 text-[15px] text-white">
              Building the future of books together.
            </p>
          </div>
          <div className="mint-1 mt-4 nm:mt-4 h-[40vh] nm:h-[45vh] w-[70%] nm:w-[60%] nm:min-w-[300px] rounded-3xl flex flex-col items-center justify-center">
            <p className="text-[10px] nm:text-[15px] mt-4 nm:mt-10 text-white">
              Price
            </p>
            <p className="text-[35px] nm:text-[50px] font-bold text-white">
              $150 USD
            </p>
            <div className="flex flex-col mt-4 mb-6 nm:mb-10 text-white">
              <p className="text-[10px] nm:text-[15px] text-center">
                Magickeys Sold
              </p>
              <h1 className="text-center text-[30px] font-bold">
                {claimedNFTSupply?.toNumber()} / 3333
              </h1>
            </div>
            <div className={styles.quantityContainer}>
              <button
                className={`${styles.quantityControlButton}`}
                onClick={() => setQuantity(quantity - 1)}
                disabled={quantity <= 1}
              >
                -
              </button>

              <h4 className="text-[30px] text-white">{quantity}</h4>

              <button
                className={`${styles.quantityControlButton}`}
                onClick={() => setQuantity(quantity + 1)}
                disabled={quantity >= maxClaimable}
              >
                +
              </button>
            </div>
          </div>
          <div className="mt-5 w-[60%] nm:w-[40%] nm:min-w-[300px] flex flex-col space-y-4">
            <CrossmintPayButton
              clientId="c90aef87-93fe-4b0f-897f-5d35ea4f2034"
              mintConfig={{
                type: "thirdweb-drop",
                totalPrice: (0.091 * quantity).toString(),
                quantity: quantity,
              }}
            />
            {address && (
              <button
                className=" bg-[#DBDBDB] text-black text-bold text-[12px] py-3 nm:py-3 font-bold rounded-lg"
                onClick={mint}
                disabled={claiming}
              >
                {claiming ? "CLAIMING MAGICKEY" : "BUY MAGICKEY"}
              </button>
            )}
            {!address && (
              <button
                className=" bg-[#DBDBDB] text-black text-bold text-[14px] py-3 nm:py-5 font-bold rounded-lg"
                onClick={connectMetamask}
              >
                BUY WITH CRYPTO
              </button>
            )}
          </div>
        </div>
        <div className="hidden nm:flex w-[45%]">
          <CldImage
            alt="mint"
            src="v1672182763/Libro_rr2okq.png"
            width={1250}
            height={2394}
          />
        </div>
      </div>
    </div>
  );
}

export default mint;
