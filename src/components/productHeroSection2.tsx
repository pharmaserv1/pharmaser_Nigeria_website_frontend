'use client';
import React from 'react';

const ProductHeroSection2 = ({
  heading,
  title2,
  title,
  description,
  description2,
  titleClassName,
  descriptionClassName,
}: {
  heading?: string;
  title2?: string;
  title?: string;
  description?: string;
  images?: string[];
  btnText?: string;
  btnType?: string;
  onClick?: () => void;
  description2?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}) => {
  return (
    <div
      className={`bg-[url("/assets/background_images/usecaseBackground.svg")] bg-cover bg-center flex flex-col  gap-8 xl:px-[72px] py-[72px] lg:py-[100px]`}
    >
      <div className=" space-y-6 text-center lg:text-left px-4 lg:max-w-[704px] max-lg:flex max-lg:flex-col max-lg:items-center">
        <p className="bg-[#060B1326] text-[#060B13] font-medium text-sm rounded-[30px] py-2 px-6 w-fit">
          {heading}
        </p>
        <h1
          className={`text-3xl lg:text-[56px] lg:leading-[65px]  mb-5 text-dark-gray font-semibold font-sofia max-w-[600px] ${titleClassName}`}
        >
          {title} <br />
          {title2}
        </h1>
        <p
          className={`text-sm lg:text-base text-dark-gray mb-8 lg:max-w-[627px] ${descriptionClassName}`}
        >
          {description}{' '}
        </p>
        {description2 && (
          <p className="text-sm lg:text-base text-dark-gray mb-8 lg:max-w-[627px]">
            {description2}
          </p>
        )}
        {/* {btnText && (
          <Button
            btnText={btnText || ''}
            btnType={btnType || ''}
            className="!text-sm"
            onClick={onClick}
          />
        )} */}
      </div>
    </div>
  );
};

export default ProductHeroSection2;
