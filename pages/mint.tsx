import Image from 'next/image'
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
  import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
  import { CrossmintPayButton } from "@crossmint/client-sdk-react-ui";
  import { CldImage } from 'next-cloudinary';

import images from '../public/assets';

const contractAddress = "0x25B24a338c5021d6918317394fA00Cb984b5615b"

function mint() {

  {/* Crossmint */}

  const nftCost = 0.085;
  const clientId = "ca1347b1-7ce2-49f7-8885-ad754ad8e9a5";

  const [mintAmount, setMintAmount] = useState(1);

  const handleDecrement = () => {
    if (mintAmount <= 1) return;
    setMintAmount(mintAmount - 1);
  }

  const handleIncrement = () => {
    if (mintAmount >= 3) return;
    setMintAmount(mintAmount + 1);
  }
    

    const [claiming, setClaiming] = useState(false);
    const connectMetamask = useMetamask();
    const { contract: contract } = useContract(contractAddress);
    const { data: claimedNFTSupply} = useClaimedNFTSupply(contract);
    const { data: unclaimedNFTSupply} = useUnclaimedNFTSupply(contract);
    const isWrongNetwork = useNetworkMismatch();
    const [, switchNetwork] = useNetwork();

    const mint = async () => {

        if(!address) {
            connectMetamask()
            return;
        }

       if (isWrongNetwork) {
        switchNetwork && switchNetwork(ChainId.Mainnet);
        return;
       }

       setClaiming(true)

        try {
            await contract.erc721?.claim(quantity);
            alert('minted successfully');
            setClaiming(false);
        } catch(error) {
            alert(error)
        }
    }

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
      setNav(!nav)
    }
    
    return (
            <div className='bg-[#121212] h-screen'>
            <div className='flex flex-row'>
            <div className="h-[90vh] w-[100%] nm:w-[50%] flex items-center justify-center flex-col">
                  <div className="font-bold text-center flex flex-col  justify-center text-[35px] nm:text-[70px] nm:ml-6 text-white">
                    <h1 className='text-center magickey-1'>MAGICKEY</h1>
                  </div>
                  <div className="mint-1 mt-4 nm:mt-4 h-[40vh] nm:h-[45vh] w-[70%] nm:w-[60%] nm:min-w-[300px] rounded-3xl flex flex-col items-center justify-center">
                    <p className="text-[10px] nm:text-[15px] mt-4 nm:mt-10 text-white">Price</p>
                    <p className="text-[35px] nm:text-[50px] font-bold text-white">$150 USD</p>
                    <div className="flex flex-col mt-4 mb-6 nm:mb-10 text-white">
                      <p className="text-[10px] nm:text-[15px] text-center">Collectibles Sold</p>
                        <h1 className='text-center text-[30px] font-bold'>{claimedNFTSupply?.toNumber()} / 1111</h1>
                    </div>
                    <div className={styles.quantityContainer}>
                    <button
                      className={`${styles.quantityControlButton}`}
                      onClick={() => setQuantity(quantity - 1)}
                      disabled={quantity <= 1}
                    >
                      -
                    </button>

                    <h4 className='text-[30px]'>{quantity}</h4>

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
                className="bg-blue-500"
                clientId="ca1347b1-7ce2-49f7-8885-ad754ad8e9a5"
                environment="production"
                mintConfig={{ 
                type :"thirdweb-drop",
                totalPrice: (0.085 * quantity).toString(), 
                quantity : (quantity) }}
            />
                    {address && (<button className=" bg-[#DBDBDB] text-black text-bold text-[12px] py-3 font-bold rounded-lg" onClick={mint} disabled={claiming}>
                  {claiming ? "CLAIMING COLLECTIBLE" : "BUY MAGICKEY"}
                </button>)}
                {!address && (<button className=" bg-[#DBDBDB] text-black text-bold text-[14px] py-5 font-bold rounded-lg"  onClick={connectMetamask}>
                BUY WITH CRYPTO
                </button>)}
                  </div>
                </div>
                <div className='hidden nm:flex w-[50%]'>
                    <CldImage alt='mint' src='v1672182763/Libro_rr2okq.png' width={2250} height={3394} />
                </div>
                </div>
                </div>
          )
        {/*}
      <div className="mx-auto flex min-h-screen max-w-6xl flex-col p-6 md:p-12">
        <header className="flex flex-col items-center justify-center p-6 md:p-12">
          <CldImage className="h-12 md:h-14" src={images.logo} width={50} height={50} />
          <p>Minting Page</p>
        </header>
        <main className="grid gap-6 rounded-md bg-black/20 p-6 md:grid-cols-2 md:p-12">
          <div className="flex flex-col items-center justify-center space-y-6">
            <h1 className="text-2xl font-bold text-secondary">
              {contractMetadata?.name}
            </h1>
            <p className="text-center leading-relaxed">
              {contractMetadata?.description}
            </p>
          </div>
  
          <div className="flex flex-col items-center">
            <div className="flex w-full max-w-sm flex-col space-y-4">
              <div className="aspect-square w-full overflow-hidden rounded-md">
                <img className="aspect-square object-cover" src={contractMetadata?.image} />
              </div>
  
              <div className="flex max-w-sm justify-between">
                <p>Collectibles Sold</p>
                <p>{claimedNFTSupply?.toNumber()} / 1000</p>
              </div>
  
              <div className="flex justify-center">
                {address && (<button className="rounded-full bg-black px-6 py-2 text-white hover:bg-opacity-75" onClick={mint} disabled={claiming}>
                  {claiming ? "Claiming Collectible" : "Buy Collectible"}
                </button>)}
                {!address && (<button className="rounded-full bg-black px-6 py-2 text-white hover:bg-opacity-75" onClick={connectMetamask}>
                Connect Wallet
                </button>)}
              </div>
            </div>
          </div>
        </main>
        <footer className="flex items-center justify-center space-x-2 p-6">
          <p className="text-sm">Powered by</p>
          <img className="h-4 md:h-4" src='../public/assets/logo.png'/>
        </footer>
      </div>
    */}
    ;
  }
  
  export default mint;