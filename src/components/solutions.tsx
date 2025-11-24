import React from 'react';
import { useTranslations } from 'next-intl';

const Solutions = () => {
  const lang = useTranslations('Solutions');

  return (
    <div className='bg-[url("/assets/images/background_2.svg")] bg-cover bg-center px-[56px] py-20'>
      <div className="flex flex-col items-center justify-center">
        <div className="xl:w-[1280px] mx-auto px-4">
          <div className="space-y-[30px] text-center mx-auto flex flex-col items-center">
            <p className="bg-[#51A2FF33] text-white font-medium text-sm rounded-[30px] py-2 px-6 w-fit">
              {lang('moreSolutionsTag')}
            </p>
            <h2 className="text-3xl lg:text-4xl text-white font-semibold font-sofia">
              {lang('title')}
            </h2>
          </div>
          <div className="flex mt-20 gap-8 max-lg:flex-col max-lg:items-center">
            <div className="bg-white rounded-[20px] max-w-[600px]">
              <div className="">
                <video
                  poster="https://suppliers-product-img.s3.eu-west-2.amazonaws.com/Use+case+-+AI-Powered+E-Detailing+to+Boost+Sales+Performance/N10.mp4"
                  src="https://suppliers-product-img.s3.eu-west-2.amazonaws.com/Use+case+-+AI-Powered+E-Detailing+to+Boost+Sales+Performance/N10.mp4"
                  playsInline
                  controls={true}
                  autoPlay={true}
                  controlsList="nodownload"
                  muted={true}
                  loop
                  className={`cursor-pointer w-[100%] h-full !rounded-t-[20px]`}
                />
              </div>
              <div className="text-dark-gray p-5">
                <p className="text-2xl lg:text-3xl font-semibold mb-2 font-sofia">
                  {lang('video1.title')}
                </p>
                <p className="text-sm">{lang('video1.description')}</p>
              </div>
            </div>

            <div className="bg-white rounded-[20px] max-w-[600px]">
              <div className="">
                <video
                  poster="https://suppliers-product-img.s3.eu-west-2.amazonaws.com/Use+Case+-+CRM+for+Pharma+Sales%2C+HCP+Tracking%2C+and+Customer+Management/N11.mp4"
                  src="https://suppliers-product-img.s3.eu-west-2.amazonaws.com/Use+Case+-+CRM+for+Pharma+Sales%2C+HCP+Tracking%2C+and+Customer+Management/N11.mp4"
                  playsInline
                  controls={true}
                  autoPlay={true}
                  controlsList="nodownload"
                  muted={true}
                  loop
                  className={`cursor-pointer w-[100%] h-full !rounded-t-[20px]`}
                />
              </div>
              <div className="text-dark-gray p-5">
                <p className="text-2xl lg:text-3xl font-semibold mb-2 font-sofia">
                  {lang('video2.title')}
                </p>
                <p className="text-sm">{lang('video2.description')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Solutions;
