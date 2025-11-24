'use client';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { toast } from 'sonner';

const WatchDemo = () => {
  const [loading, setLoading] = useState(false);
  const [checked, setChecked] = useState(true);
  const [registerData, setRegisterData] = useState({
    email: '',
    fullName: '',
    companyName: '',
    referralCode: '',
  });
  const lang = useTranslations('Register');
  const router = useRouter();
  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setRegisterData({ ...registerData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const body = {
        email: registerData.email,
        fullName: registerData.fullName,
        companyName: registerData.companyName,
        ...(registerData.referralCode && {
          referralCode: registerData.referralCode,
        }),
        country: 'Nigeria',
      };
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASEURL}/api/v1/lead/create`,
        {
          method: 'POST',
          body: JSON.stringify(body),
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      const data = await response.json();
      if (data?.status) {
        setRegisterData({
          email: '',
          fullName: '',
          companyName: '',
          referralCode: '',
        });
        toast.success(lang('RegistrationSuccessful'));
        router.push('/demo');
      } else {
        toast.error(lang('RegistrationFailed'));
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="pt-20 bg-white px-4 lg:px-20 flex flex-col items-center lg:space-y-[60px] mb-10">
      <div className="flex flex-col md:flex-row items-start justify-between xl:w-[1152px] mb-[60px] xl:gap-20 ">
        <div className="md:w-[50%] xl:w-[60%]">
          <div className="border-[#00C2FF] border rounded-full px-4 py-2 w-fit mb-10">
            <p className="text-blue text-sm font-medium">
              {lang('SeeHowItWorks')}
            </p>
          </div>
          <p className="text-4xl lg:text-[50px] font-semibold text-blue !font-sofia mb-8">
            {lang('WatchProductDemo')}
          </p>
          <p className="text-sm lg:text-base text-[#747474] mb-8">
            {lang('SeeHowPharmaServWorks')}
          </p>
          <div className="">
            <p className="text-blue text-sm lg:text-base font-medium mb-4">
              {lang('WhatYoullSee')}
            </p>
            <div className="text-sm lg:text-base text-[#747474]">
              <ul className="list-disc list-inside space-y-2">
                <li className="">{lang('SimpleWorkflows')}</li>
                {/* <li className="">{lang('RealTimeTracking')}</li>
                <li className="">{lang('OrganizedManagement')}</li> */}
                <li className="">{lang('ToolsForSetting')}</li>
                <li className="">{lang('InsightsIntoBrandAdoption')}</li>
                <li className="">{lang('QuickExport')}</li>
              </ul>
            </div>
          </div>
          <div className="mt-20 space-y-2">
            <p className="text-[#2A9DF4] !font-sofia text-base">
              {lang('Testimonial')}
            </p>
            <p className="text-blue text-base lg:text-xl font-medium">
              {lang('ImpressiveSoftware')}
            </p>
            <p className="text-[#747474] text-sm">Mohamed Attye</p>
            <p className="text-[#747474] text-sm">
              CEO - Global Care Distribution
            </p>
          </div>
        </div>
        <div className="w-full md:w-[50%] xl:w-[40%]">
          <div className="mb-6 mt-[60px] text-left mx-auto md:w-[90%] md:max-w-[416px]">
            <p className="text-base font-medium mb-6 text-blue font-sofia">
              {lang('LimitedDemoSlotAvailable')}
            </p>
          </div>

          <form
            className="space-y-6 flex flex-col items-center"
            onSubmit={(e) => {
              e.preventDefault();
              if (
                !registerData.email?.match(
                  /^[A-Za-z0-9._%+-]+@(?!gmail\.com$|yahoo\.com$|outlook\.com$|hotmail\.com$|icloud\.com$)[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
                )
              ) {
                toast.error(lang('EmailError'));
              } else {
                handleSubmit(e);
              }
            }}
          >
            <div className="floating-label-group w-full md:w-[90%] md:max-w-[416px]">
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={registerData?.fullName || ''}
                required
                onChange={(e) => handleFormChange(e)}
                placeholder=""
                className="floating-input peer w-[100%]  p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#fff] text-gray-800"
              />
              <label
                htmlFor="fullName"
                className="floating-label peer-focus:text-blue-700 peer-focus:text-xs peer-focus:-top-3 bg-[#fff] peer-focus:px-1 peer-focus:font-semibold peer-not-placeholder-shown:text-blue-700 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:-top-3 peer-not-placeholder-shown:bg-[#fff] peer-not-placeholder-shown:px-1 peer-not-placeholder-shown:font-semibold"
              >
                {lang('form.fullName')}
              </label>
            </div>
            <div className="floating-label-group w-full md:w-[90%] md:max-w-[416px]">
              <input
                type="email"
                id="email"
                name="email"
                value={registerData?.email || ''}
                onChange={(e) => handleFormChange(e)}
                placeholder=""
                required
                className="floating-input peer w-[100%]  p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#fff] text-gray-800"
              />
              <label
                htmlFor="email"
                className="floating-label peer-focus:text-blue-700 peer-focus:text-xs peer-focus:-top-3 bg-[#fff] peer-focus:px-1 peer-focus:font-semibold peer-not-placeholder-shown:text-blue-700 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:-top-3 peer-not-placeholder-shown:bg-[#fff] peer-not-placeholder-shown:px-1 peer-not-placeholder-shown:font-semibold"
              >
                {lang('form.email')}
              </label>
            </div>
            <div className="floating-label-group w-full md:w-[90%] md:max-w-[416px]">
              <input
                type="text"
                id="companyName"
                name="companyName"
                value={registerData?.companyName || ''}
                onChange={(e) => handleFormChange(e)}
                placeholder=""
                required
                className="floating-input peer w-[100%]  p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#fff] text-gray-800"
              />
              <label
                htmlFor="companyName"
                className="floating-label peer-focus:text-blue-700 peer-focus:text-xs peer-focus:-top-3 bg-[#fff] peer-focus:px-1 peer-focus:font-semibold peer-not-placeholder-shown:text-blue-700 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:-top-3 peer-not-placeholder-shown:bg-[#fff] peer-not-placeholder-shown:px-1 peer-not-placeholder-shown:font-semibold"
              >
                {lang('form.companyName')}
              </label>
            </div>

            <div className="flex items-center justify-start gap-2 text-left w-full md:w-[90%] md:max-w-[416px]">
              <Image
                src={
                  checked
                    ? '/assets/images/icons/checked.png'
                    : '/assets/images/icons/box.png'
                }
                alt="checkbox"
                width={20}
                height={20}
                className="cursor-pointer"
                onClick={() => setChecked(!checked)}
              />

              <div
                className="text-blue cursor-pointer"
                onClick={() => {
                  const a = document.createElement('a');
                  a.href = '/files/Pharmaserv_Privacy_Policy.pdf';
                  a.target = '_blank';
                  a.click();
                }}
              >
                {lang('IAgree')}
                {` `} {lang('PrivacyPolicy')}
              </div>
            </div>

            <div className="w-full md:w-[90%] md:max-w-[416px]">
              <button
                type="submit"
                disabled={!checked}
                className={`w-full  flex justify-center py-3 px-4 rounded-[8px] text-sm text-white ${
                  !checked ? 'bg-blue/80' : 'bg-[#001C64]'
                }`}
              >
                {loading ? lang('Submitting') + '...' : lang('SecureYourSpot')}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default WatchDemo;
