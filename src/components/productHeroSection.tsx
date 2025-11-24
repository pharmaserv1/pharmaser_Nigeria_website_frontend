'use client';
import React from 'react';
import Image from 'next/image';

const ProductHeroSection = ({
  heading,
  title,
  description,
  description2,
  image,
  containerClassName,
  contentClassName,
  description3,
}: {
  heading?: string;
  title?: string;
  description?: string;
  description2?: string;
  description3?: string;
  image?: string;
  btnText?: string;
  btnType?: string;
  containerClassName?: string;
  contentClassName?: string;
  onClick?: () => void;
}) => {
  return (
    <div
      className={`bg-[url("/assets/background_images/usecaseBackground.svg")] bg-cover bg-bottom  py-[72px] flex items-center justify-center relative ${containerClassName} w-full`}
    >
      <div
        className={`lg:w-[1280px] mx-auto flex gap-8 items-center max-lg:items-end max-lg:justify-between max-lg:flex-col `}
      >
        <div
          className={`xl:pl-[72px] space-y-6 text-center lg:text-left px-4  lg:max-w-[500px] xl:max-w-[700px] pb-10 max-lg:items-center max-lg:flex max-lg:flex-col relative z-10 ${contentClassName}`}
        >
          <p className="bg-[#060B1326] text-[#060B13] font-medium text-sm rounded-[30px] py-2 px-6 w-fit ">
            {heading}
          </p>
          <h1 className="text-3xl lg:text-[56px] lg:leading-[60px]  mb-5 text-dark-gray font-semibold font-sofia max-w-[550px]">
            {title}
          </h1>
          <p className="text-sm lg:text-base text-dark-gray mb-8 w-[80%] xl:max-w-[417px]">
            {description}{' '}
          </p>
          <p className="text-sm lg:text-base text-dark-gray mb-8 w-[80%] xl:max-w-[417px]">
            {description2}
          </p>
          {description3 && (
            <p className="text-sm lg:text-base text-dark-gray mb-8 w-[80%] xl:max-w-[417px]">
              {description3}
            </p>
          )}
        </div>

        <div className="absolute right-0 top-[50px] max-lg:hidden">
          {image && (
            <Image
              src={image || '/assets/images/copilot.svg'}
              alt="hcp engagement"
              width={500}
              height={500}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductHeroSection;
