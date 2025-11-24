import React from 'react';
import Button from './common/button';
import { useTranslations } from 'next-intl';

const PlatformOverview = ({
  hcp,
  text,
  addBg,
}: {
  hcp: boolean;
  text?: string;
  addBg?: boolean;
}) => {
  const lang = useTranslations('platformOverview');

  return (
    <div
      className={` gap-8 max-xl:px-4  mx-auto pt-8 pb-12 mb-12 flex items-center justify-center  ${
        addBg
          ? 'bg-[url("/assets/background_images/Background.svg")] bg-cover bg-center'
          : 'bg-white '
      }`}
    >
      <div
        className={`xl:w-[1152px] items-center justify-between flex  max-md:flex-col`}
      >
        <div className="max-md:mb-8 space-y-6 text-left px-4  max-w-[546px] max-md:flex max-md:flex-col items-center">
          <p className="bg-[#008CFF33] text-blue font-medium text-sm rounded-[30px] py-2 px-6 w-fit">
            {lang('badge')}
          </p>
          <h1
            className={`text-2xl lg:text-3xl  mb-5 text-dark-gray max-md:text-center font-sofia  ${
              hcp ? 'max-w-[400px]' : 'w-[90%]'
            }`}
          >
            {hcp
              ? 'Simplify HCP Engagements. Driving treatment adoption.'
              : lang('fieldSales.title')}
          </h1>
          <p className="text-sm lg:text-base text-dark-gray mb-8 max-md:text-center">
            {text ||
              'PharmaServ helps Pharma and Life-science teams turn every call, meeting, and visit into real growth, powered by AI, driven by insight, and grounded in local realities.'}
          </p>
          <Button
            btnText="See How It Works"
            btnType="secondary"
            className="!text-sm"
            onClick={() => {
              window.open('https://sandbox.pharmaserv.ng/', '_blank');
            }}
          />
        </div>

        <div className="max-w-[500px] max-h-[500px]">
          <video
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
          />
        </div>
      </div>
    </div>
  );
};

export default PlatformOverview;
