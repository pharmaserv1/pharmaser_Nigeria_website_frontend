'use client';
import LogoSection from '@/components/logoSection';
import { useTranslations } from 'next-intl';
import React, { useState } from 'react';
import { toast } from 'sonner';

const Call_Feature_Demo_Video = () => {
  const [loading, setLoading] = useState(false);
  // const [checked, setChecked] = useState(false);
  const [registerData, setRegisterData] = useState({
    email: '',
  });
  const lang = useTranslations('Register');

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
        country: "Nigeria",
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
        });
        toast.success(lang('RegistrationSuccessful'));
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
    <div>
      <div className="font-sans antialiased text-gray-800">
        <div className="min-h-screen flex">
          <div className="px-4 hidden md:flex bg-[#001345] md:w-[50vw] left-section-bg relative justify-between flex-col  ">
            <div className=" bg-[#001345]  flex justify-center items-center h-full ">
              <div className="">
                <div className="flex justify-center items-center">
                  <iframe
                    src="https://www.youtube.com/embed/phM9qqt_7gE?autoplay=1&mute=1&rel=0"
                    width="730"
                    height="602"
                    className="w-[95%] lg:w-[500px] h-[326px] border-[4px] border-light-blue rounded-lg"
                    allow="accelerometer; autoplay; muted; clipboard-write; encrypted-media; gyroscope;"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="mt-4">
                  <h3 className="text-white text-sm lg:text-2xl mb-3 font-medium font-sofia">
                    {lang('TrustedBy')}
                  </h3>

                  <div
                    className="bg-white p-4 rounded-lg w-inherit w-[100%] 
                  max-w-[380px] lg:max-w-[500px]"
                  >
                    <LogoSection
                      widthClassName="!w-[95%]"
                      scrollerInnerClassName="!gap-10"
                      logos={[
                        {
                          src: '/assets/images/logos/cqdm.svg',
                          alt: 'pharmaServ clients logo',
                        },
                        {
                          src: '/assets/images/logos/healthInnovation.svg',
                          alt: 'pharmaServ clients logo',
                        },
                        {
                          src: '/assets/images/logos/medtech.svg',
                          alt: 'pharmaServ clients logo',
                        },
                        {
                          src: '/assets/images/logos/lifeScience.svg',
                          alt: 'pharmaServ clients logo',
                        },
                        {
                          src: '/assets/images/logos/lifeScienceWashington.svg',
                          alt: 'pharmaServ clients logo',
                        },
                      ]}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className=" relative text-white z-10 bg-[#001651]  px-6 lg:px-8 pt-8 pb-4">
              <h1 className="text-3xl lg:text-4xl font-medium leading-tight mb-4">
                {lang('title')}
              </h1>
              <p className="text-base lg:text-lg  font-medium text-[#ACB5BB]">
                {lang('description')}
              </p>
              {/* <div className="flex justify-center items-center gap-2 pt-2">
                <div className="rounded-[100px] h-[6px] bg-white flex-1 w-full"></div>
                <div className="rounded-[100px] h-[6px] bg-[#FFFFFF1A] flex-1 w-full"></div>
              </div> */}
            </div>
          </div>

          <div className="w-full md:w-[50vw] flex items-center justify-between h-100vh  pt-6  py-4 bg-white ">
            <div className="flex-col flex items-center justify-between w-full">
              <div className=" sm:flex  flex-col items-center justify-center px-4 h-auto">
                {/* <div className="w-full flex items-center justify-center">
                <Link
                  href="/"
                  className="cursor-pointer flex gap-1.5 items-center mt-4"
                >
                  <Image
                    src="/assets/images/logos/pharmaserv_logo.svg"
                    alt="pharmaserv logo"
                    className="mb-5 cursor-pointer"
                    width={156}
                    height={156}
                  />
                </Link>
              </div> */}
                <div className="">
                  <div className="mb-8 text-center mx-auto">
                    <h2 className="text-2xl lg:text-3xl font-medium mb-6 text-[#1C2634] font-sofia">
                      {lang('Empower')}
                    </h2>
                  </div>

                  <form
                    className="space-y-6 flex flex-col items-center"
                    onSubmit={handleSubmit}
                  >
                    <div className="floating-label-group w-full">
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
                        {lang('form.YourCompanyEmail')}
                      </label>
                    </div>

                    <div className="w-full">
                      <button
                        type="submit"
                        // disabled={!checked}
                        className={`w-full  flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-base font-semibold text-white bg-[#001C64] `}
                      >
                        {loading
                          ? lang('Submitting') + '...'
                          : lang('ScheduleACall')}
                      </button>
                    </div>
                  </form>
                </div>
              </div>

              <div className="mt-16 text-center mb-4 text-xs text-gray-500 space-x-4 fixed bottom-0 left-1/2 md:left-3/4 -translate-x-1/2">
                <span>
                  © {new Date().getFullYear()} PharmaServ.{' '}
                  {lang('RightsReserved')}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Call_Feature_Demo_Video;
