'use client';
import React from 'react';
import Button from './common/button';
import LogoSection from './logoSection';
import { useRouter } from 'next/navigation';

const HeroSection: React.FC = () => {
  const router = useRouter();
  return (
    <section className="bg-blue bg-[url('/assets/background_images/HeroBackground.svg')] text-center bg-cover bg-center flex flex-col justify-between lg:justify-start w-full">
      <div className="">
        <div className="flex  max-md:flex-col justify-between items-center text-center max-w-[1280px] mx-auto max-xl:px-8 gap-8 ">
          <div className="max-w-4xl  mt-8 md:mt-20 mb-4 ">
            <h1 className="text-4xl lg:text-6xl font-semibold  text-white lg:w-[606px] !font-sofia max-md:text-center text-left mb-6">
              Assistant Omnichannel AI <br /> Assistant to Empower <br /> Sales,
              Marketing, and <br /> Medical Solutions
            </h1>
            <p className="text-base lg:text-xl text-[#FFFFFFB2] mb-4 max-w-[456px] text-left font-semibold max-md:text-center">
              PharmaServ helps life-science and Pharma teams simplify work,
              boost productivity, and engage Healthcare Practitioners smarter
              with AI-powered workflows, real-time insights, and seamless
              multichannel engagement.
            </p>
            <div className="flex gap-2 max-md:justify-center">
              <Button
                btnText={'Watch a Demo'}
                onClick={() => {
                  router.push('/watch-a-demo');
                }}
                className="!py-2 !px-4"
              />
            </div>
          </div>
          <div className=" xl:w-[654px]">
            <video
              poster="/assets/images/heroImage.svg"
              src="https://suppliers-product-img.s3.eu-west-2.amazonaws.com/Home+Page/Hero+section/Homepage+video.mp4"
              playsInline
              controls={true}
              autoPlay={true}
              controlsList="nodownload"
              muted={true}
              loop
              className={` cursor-pointer w-[100%]  h-full !rounded-[16px] !max-w-[654px]`}
            />
          </div>
        </div>

        <div className=" my-8 bg-[#081225] py-2 mx-4 rounded-t-[44px]">
          <LogoSection
            logos={[
              {
                src: '/assets/images/logos/haventis.svg',
                alt: 'haventis logo',
              },
              {
                src: '/assets/images/logos/krka.svg',
                alt: 'health Innovation logo',
              },
              {
                src: '/assets/images/logos/negus.svg',
                alt: 'medtech logo',
              },
              {
                src: '/assets/images/logos/ppm.svg',
                alt: 'life science washington logo',
              },
              {
                src: '/assets/images/logos/proline.svg',
                alt: 'life science logo',
              },
            ]}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
