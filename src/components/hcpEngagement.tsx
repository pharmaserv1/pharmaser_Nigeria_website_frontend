'use client';
import React from 'react';
import Button from './common/button';
// import { useTranslations } from 'next-intl';

const HcpEngagement = () => {
  // const t = useTranslations('hcpEngagement');

  return (
    <div className='bg-[url("/assets/images/background.svg")] bg-cover bg-center bg-[#1936F0] px-4 xl:px-[144px] py-[72px] flex items-center justify-center '>
      <div className="flex items-center justify-between max-md:flex-col xl:w-[1152px] gap-2 xl:gap-8">
        <div className="bg-white p-4 rounded-lg">
          <iframe
            src="https://datawrapper.dwcdn.net/0oXuE/2/"
            loading="lazy"
            width="500"
            height="450"
            className=" max-sm:max-w-[90%] md:w-[400px] xl:w-[500px] h-[450px]"
          ></iframe>
        </div>
        <div className=" mx-auto px-4 flex flex-col items-start max-w-[546px] max-lg:pt-5">
          <h1 className="text-xl lg:text-3xl mb-5 text-white font-sofia ">
            Boost HCP Engagement and Drive Brand Adoption With Speed
          </h1>
          <p className="text-sm lg:text-[15px] text-white mb-4">
            Empower your medical reps with intuitive e-detailing tools that
            simplify storytelling, boost product understanding, and improve
            treatment adoption.
          </p>
          <p className="text-sm lg:text-[15px] text-white mb-4">
            With PharmaServ, your team delivers consistent, impactful
            presentations that earn trust and strengthen relationships with
            healthcare professionals.
          </p>
          <Button
            btnText="Get a Demo"
            onClick={() => {
              window.open('https://sandbox.pharmaserv.ng/', '_blank');
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default HcpEngagement;
