import Image from 'next/image';
import React from 'react';

type CopilotFlexProps = {
  title: string;
  description: string[];
  video?: string;
  list: string[];
  position?: string;
};

const CopilotFlex = ({
  title,
  description,
  list,
  position,
  video,
}: CopilotFlexProps) => {
  return (
    <div className="flex items-stretch justify-between gap-8 px-4 xl:px-[144px] py-4 max-md:flex-col">
      <div
        className={` ${position === 'textFirst' ? 'md:order-2' : 'md:order-1'}`}
      >
        {video && (
          <div className="w-[100%] md:max-w-[400px] lg:max-w-[500px] lg:w-[500px] bg-white flex items-center justify-center h-full">
            <video
              poster={video}
              src={video}
              playsInline
              controls={true}
              autoPlay={true}
              controlsList="nodownload"
              muted={true}
              loop
              className={` cursor-pointer rounded-lg h-full object-cover w-full `}
            />
          </div>
        )}
      </div>
      <div
        className={`bg-white p-1 rounded-[12px] ${
          position === 'textFirst' ? 'md:order-1' : 'md:order-2'
        }`}
      >
        <div
          className={`md:max-w-[672px]  bg-white rounded-[12px] p-6  border border-[#E9EBF1]`}
        >
          <div className="flex items-center gap-6">
            <div className="w-12 h-12 rounded-full border border-[#E9EBF1] flex items-center justify-center mb-4">
              <Image
                src={'/assets/icons/coreFeatureIcon3.svg'}
                alt="icon"
                width={32}
                height={32}
                className="max-md:w-full"
              />
            </div>
            <h2 className="text-2xl font-medium text-[#1A1C1E] mb-3 font-sofia text-left">
              {title}
            </h2>
          </div>

          {description.map((item, index) => (
            <p key={index} className="text-base text-[#7C7979] pb-5 text-left">
              {item}
            </p>
          ))}
          <div className="space-y-3 mt-4 font-medium">
            {list.map((item, index) => (
              <div key={index} className="flex items-center gap-2">
                <Image
                  src="/assets/images/icons/tick-circle.svg"
                  alt="Copilot Flex"
                  width={24}
                  height={24}
                />
                <p className="text-base text-left text-dark-gray">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CopilotFlex;
