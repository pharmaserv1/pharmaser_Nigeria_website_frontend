import Image from 'next/image';
import React from 'react';

type WhyPharmaservProps = {
  containerClassName?: string;
  content: {
    title: string;
    description: string;
  }[];
};
const WhyPharmaserv = ({ containerClassName, content }: WhyPharmaservProps) => {

  return (
    <div
      className={` max-w-[1280px] flex max-lg:flex-col lg:border-b-[#008CFF] lg:border-b-[2px] my-10 max-lg:px-4 items-center justify-center ${containerClassName} `}
    >
      {content.map((item, index) => (
        <div
          key={index}
          className={`space-y-4 py-4 px-4 lg:py-[48px] lg:px-10 lg:max-w-[350px] xl:max-w-[427px] max-lg:text-center ${
            index !== 1 ? 'border-x-0' : 'border-x-[2px] border-x-[#008CFF]'
          }`}
        >
          <div className="max-lg:flex max-lg:items-center max-lg:justify-center">
            <Image
              src="/assets/images/icons/calendar-add.svg"
              alt={item.title}
              width={32}
              height={32}
            />
          </div>

          <h2 className="text-lg lg:text-[22px]  text-dark-gray font-semibold font-sofia">
            {item.title}
          </h2>
          <p className="text-sm lg:text-base text-gray-100">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default WhyPharmaserv;
