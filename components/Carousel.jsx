import React, { useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { FaLongArrowAltLeft, FaLongArrowAltRight, LongArrowRight } from 'react-icons/fa';
import { CldImage } from 'next-cloudinary';

function Carousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });

  useEffect(() => {
    if (emblaApi) {
      // Embla API is ready
    }
  }, [emblaApi]);
  return (
    <div className="embla nm:w-[50%] nm:py-20  nm:flex nm:items-center nm:justify-center" ref={emblaRef}>
      <div className="embla__container space-x-8  nm:space-x-0">
        {/* Slide 1 */}
        <div className="embla__slide nm:flex nm:flex-row nm:items-center nm:justify-center">
          <div className="bg-[#A06038] rounded-2xl nm:w-[70%] h-[500px] nm:h-[600px]  mt-10 items-center justify-center flex">
            <div className="flex flex-col items-center">
              <div className="mt-2 max-w-[200px] nm:max-w-[300px]">
                <CldImage
                  src="v1672179184/DEBOOK_UTILIDAD_03_1_odgb9d.gif"
                  width={300}
                  height={300}
                />
              </div>
              <h1 className="text-[25px] nm:text-[25px] text-white font-bold text-center">
                Access to
                {' '}
                <br />
                every debook.
              </h1>
              <p className="text-center mt-4 mb-10  text-white text-[15px] nm:text-[15px] px-4">
                Yes, you read that right. If you get a Magickey, you will get access to read every debook (the book's content) on our platform.
                {' '}
                <br />
                To make it fair for the authors, we will require their permission and will try our best to have all of them say yes.
              </p>
            </div>
          </div>
        </div>
        {/* Slide 2 */}
        <div className="embla__slide nm:flex nm:flex-row nm:items-center nm:justify-center">
          <div className="bg-[#A06038] rounded-2xl nm:w-[70%] h-[500px] nm:h-[600px]  mt-10 items-center justify-center flex">
            <div className="flex flex-col items-center">
              <div className="mt-2 max-w-[200px] nm:max-w-[300px]">
                <CldImage
                  src="v1672179184/DEBOOK_UTILIDAD_02_1_zqjuaz.gif"
                  width={300}
                  height={300}
                  background="transparent"
                />
              </div>
              <h1 className="text-[25px] nm:text-[25px] text-white font-bold text-center">
                Priority access to
                {' '}
                <br />
                every debook drop.
              </h1>
              <p className="text-center mt-4 mb-10  text-white text-[15px] nm:text-[15px] px-4">
                As a Magickey owner we want to invite you to have priority access to every new debook collection that launches.
                {' '}
                <br />
                We want to help you get inside those communities that you feel called to.
              </p>
            </div>
          </div>

        </div>
        {/* Slide 3 */}
        <div className="embla__slide nm:flex nm:flex-row nm:items-center nm:justify-center">
          <div className="bg-[#A06038] rounded-2xl nm:w-[70%] h-[500px] nm:h-[600px]  mt-10 items-center justify-center flex">
            <div className="flex flex-col items-center">
              <div className="mt-2 max-w-[200px] nm:max-w-[300px]">
                <CldImage src="v1672178832/DEBOOK_UTILIDAD_01_1_bu5hyt.gif" width={300} height={300} objectFit="contain" />
              </div>
              <h1 className="text-[25px] nm:text-[25px] text-white font-bold text-center">
                Early access to
                {' '}
                <br />
                every future updates
              </h1>
              <p className="text-center mt-4 mb-10  text-white text-[15px] nm:text-[15px] px-4">
                You will be invited to try out every future update that we ship, as well as suggesting new features.
                {' '}
                <br />
                You will be a part of a private group with the rest of the community, where you will meet like minded people.
              </p>
            </div>
          </div>

        </div>

      </div>
      <div className="flex nm:hidden justify-center text-[10px] mr-2 mt-2 space-x-10">
        <FaLongArrowAltLeft size={30} className="text-white" />
        <FaLongArrowAltRight size={30} className="text-white" />
      </div>
    </div>
  );
}

export default Carousel;
