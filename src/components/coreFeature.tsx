import React from 'react';
import Image from 'next/image';

const CoreFeature = ({
  title,
  features,
}: {
  title: string;
  features: { title: string; description: string; icon?: string }[];
}) => {
  //   const lang = useTranslations('platformOverview');

  return (
    <div
      className={` gap-8 max-xl:px-4  mx-auto pt-8 pb-12  flex items-center justify-center bg-white`}
    >
      <div
        className={`xl:w-[1152px] items-center justify-between flex  max-md:flex-col`}
      >
        <div className=" space-y-6 text-left px-4  max-w-[546px] max-md:flex max-md:flex-col items-center">
          <p className=" text-blue font-medium text-sm ">
            Core Product Features
          </p>
          <h1
            className={`text-2xl lg:text-[40px] lg:leading-[44px] font-medium  mb-5 text-dark-gray max-md:text-center font-sofia max-w-[400px]`}
          >
            {title}
          </h1>

          <div className="grid grid-cols-2 gap-6 lg:gap-14 !mt-16">
            {features.map((feature, index) => (
              <div key={index}>
                <div className="w-12 h-12 rounded-full border border-[#E9EBF1] flex items-center justify-center mb-4">
                  <Image
                    src={feature.icon || ''}
                    alt="icon"
                    width={32}
                    height={32}
                    className="max-md:w-full"
                  />
                </div>
                <h2 className="text-[#060B13] text-base font-medium mb-4">
                  {feature.title}
                </h2>
                <p className="text-sm text-[#363D4F]">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-[500px] max-h-[500px] max-lg:mt-14">
          <Image
            src="/assets/images/coreFeature.svg"
            alt="background_img"
            width={600}
            height={329}
            className="max-md:w-full"
          />
          {/* <video
            poster="/assets/images/pharmaserv_overview.svg"
            src={
              hcp
                ? 'https://suppliers-product-img.s3.eu-west-2.amazonaws.com/Simplify+HCP+engagements+driving+treatment/No+5.mp4'
                : 'https://suppliers-product-img.s3.eu-west-2.amazonaws.com/simplify+field+sales+start+driving+growth/N7.mp4'
            }
            playsInline
            controls={true}
            autoPlay
            controlsList="nodownload"
            muted={true}
            loop
            className={` cursor-pointer w-[100%]  h-full !rounded-[10px] `}
          /> */}
        </div>
      </div>
    </div>
  );
};

export default CoreFeature;
