import { useTranslations } from 'next-intl';
import React from 'react';

const Demo = () => {
  const lang = useTranslations('Register');
  return (
    <section className="lg:pt-20 bg-white px-4 lg:px-20 flex flex-col items-center lg:space-y-[60px]">
      <div className="flex flex-col items-center justify-between xl:w-[1152px] my-[60px]">
        <div className="text-center mb-10">
          <p className="text-4xl lg:text-[50px] font-semibold text-blue !font-sofia mb-6">
            {lang('WatchTheDemo')}
          </p>
          <p className="text-sm lg:text-base text-[#6A7282] mb-6 max-w-[630px]">
            {lang('ThanksForYourInterest')}
          </p>
        </div>
        <div className="flex justify-center items-center bg-light-blue rounded-lg w-full py-10 px-20">
          <iframe
            src="https://www.youtube.com/embed/phM9qqt_7gE?autoplay=1&mute=1&rel=0"
            width="730"
            height="602"
            className="w-full border-[4px] border-[#000] rounded-lg"
            allow="accelerometer; autoplay; muted; clipboard-write; encrypted-media; gyroscope;"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default Demo;
