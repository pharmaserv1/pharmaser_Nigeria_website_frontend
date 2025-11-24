import Image from 'next/image';
import React from 'react';

type WhyPharmaservUIProps = {
  containerClassName?: string;
  content: {
    title: string;
    description: string;
  }[];
};
const WhyPharmaservUI = ({
  containerClassName,
  content,
}: WhyPharmaservUIProps) => {
  return (
 
    <div className="flex items-center justify-center">
      <div
        className={` max-w-[1280px] grid grid-cols-2 max-lg:flex max-lg:flex-col lg:border-b-[#008CFF] lg:border-b-[2px] my-10 max-lg:px-4 items-center justify-center  lg:border-[2px] lg:border-[#008CFF] ${containerClassName} `}
      >
        {content.map((item, index) => (
          <div
            key={index}
            className={`space-y-4 py-4 px-4  lg:py-[48px] lg:px-10 lg:max-w-[500px] xl:max-w-[600px] xl:pr-15 max-lg:text-center ${
              index === 3
                ? ' lg:border-t-[2px] lg:border-t-[#008CFF] lg:border-l-[2px] lg:border-l-[#008CFF]'
                : index === 2
                ? 'lg:border-t-[2px] lg:border-t-[#008CFF] '
                : index === 0
                ? ''
                : index === 1 && 'lg:border-l-[2px] lg:border-l-[#008CFF]'
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

            <h2 className="text-lg lg:text-2xl  text-dark-gray font-semibold font-sofia">
              {item.title}
            </h2>
            <p className="text-sm lg:text-base text-gray-100">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhyPharmaservUI;
