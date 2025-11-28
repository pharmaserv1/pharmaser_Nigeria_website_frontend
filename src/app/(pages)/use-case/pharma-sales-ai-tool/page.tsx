'use client';
import Button from '@/components/common/button';
import LogoSection from '@/components/logoSection';
import PlatformOverview from '@/components/platformOverview';
import ProductHeroSection2 from '@/components/productHeroSection2';
import React from 'react';
import Image from 'next/image';
import Solutions from '@/components/solutions';

const PharmaSalesAiTool = () => {
  // const lang = useTranslations('PharmaSalesAiTool');

  return (
    <div>
      <ProductHeroSection2
        heading="Pharma Sales AI Tool"
        title="AI Sales Platform That Accelerates Revenue Intelligently"
        description="Give your sales, marketing and medical team the advantage of foresight.
PharmaServ’s AI Sales Platform helps pharma brands simplify rep workflows, automate scheduling, verify field visits in real time, and boost HCP engagement (All while staying compliant and data-driven)."
      />
      <section className=" flex justify-between items-center  mt-12 py-12 w-full border-y border-y-[#E9EBF1]">
        <div className="flex items-center justify-center gap-8 mx-auto  max-xl:px-4 xl:w-[1152px] max-md:flex-col ">
          <div className="flex gap-4 xl:gap-8 items-center justify-center">
            <div className="">
              <div className="!w-16 !h-16 bg-[#001C6433] rounded-full flex items-center justify-center">
                <Image
                  src="/assets/icons/icon3.svg"
                  alt="icon"
                  width={24}
                  height={24}
                />
              </div>
            </div>
            <p className="text-[#444444] text-base w-full md:max-w-[244px]">
              PharmaServ uses artificial intelligence to uncover new
              opportunities, target the right HCPs, and deliver the insights
              your team needs to lead with confidence
            </p>
          </div>
          <div className="flex gap-4 xl:gap-8 items-center justify-center">
            <div className="">
              <div className="w-16 h-16 bg-[#001C6433] rounded-full flex items-center justify-center">
                <Image
                  src="/assets/icons/icon2.svg"
                  alt="icon"
                  width={24}
                  height={24}
                />
              </div>
            </div>
            <p className="text-[#444444] text-base w-full md:max-w-[244px]">
              Get access to real time analytics and insights to sharpen
              targeting and boost revenue.
            </p>
          </div>
          <div className="flex gap-4 xl:gap-8 items-center justify-center">
            <div className="">
              <div className="w-16 h-16 bg-[#001C6433] rounded-full flex items-center justify-center">
                <Image
                  src="/assets/icons/icon1.svg"
                  alt="icon"
                  width={24}
                  height={24}
                />
              </div>
            </div>
            <p className="text-[#444444] text-base w-full md:max-w-[244px]">
              From predictive analytics to real-time recommendations, your team
              gets everything they need to make every call, visit, and
              conversation count.
            </p>
          </div>
        </div>
      </section>
      <section
        className=" bg-white flex gap-8 max-xl:px-4 xl:w-[1152px] mx-auto py-12
      items-center justify-between"
      >
        <div>
          <div className="space-y-3 mb-8">
            <p className="text-blue font-inter text-base">Powerful Features</p>
            <p className="font-medium text-2xl lg:text-[40px] lg:leading-[44px] text-dark-gray font-sofia">
              AI Sales Software That Drives Real Growth
            </p>
            <p className="text-gray-100 text-sm">
              Designed for the modern pharma landscape, PharmaServ’s AI-powered
              platform helps teams stay agile, compliant, and connected turning
              every insight into an opportunity for revenue growth.
            </p>
          </div>
          <div className="space-y-6">
            <div className="flex justify-between items-center gap-4 md:gap-14 xl:gap-[86px] max-md:flex-col">
              <div className="w-full md:w-[400px] lg:w-[531px]">
                <h2 className="text-dark-gray text-lg lg:text-2xl font-semibold mb-4 font-sofia">
                  Boost Revenue with AI-Powered Sales Acceleration
                </h2>
                <p className="text-sm ">
                  Help your reps focus on what really matters (Closing more
                  deals). PharmaServ uses AI to prioritize high-value HCPs,
                  recommend next steps, and automate low-value tasks, so your
                  team spends less time planning and more time winning.
                </p>
              </div>
              <div className="">
                <Image
                  src="https://imgur.com/v9wSl7p.jpeg"
                  alt="background_img"
                  width={670}
                  height={308}
                  className="max-md:w-full !rounded-[20px] !h-[308px] !object-cover"
                />
              </div>
            </div>

            <div className="flex justify-between items-center gap-4 md:gap-14 xl:gap-[86px] max-md:flex-col">
              <div className="w-full md:w-[400px] lg:w-[531px]">
                <h2 className="text-dark-gray text-lg lg:text-2xl font-semibold mb-4 font-sofia">
                  Use AI to Schedule Activities & Make Reports
                </h2>
                <p className="text-sm ">
                  Plan better, schedule ahead of time and summarise reports with
                  ease. Our AI engine helps you ensure everything you need to
                  make your bookings & reports is seamless, helping you increase
                  attendance, improve engagement, and build stronger HCP
                  relationships.
                </p>
              </div>
              <div className="">
                <Image
                  src="https://imgur.com/cqN57WO.jpeg"
                  alt="background_img"
                  width={670}
                  height={308}
                  className="max-md:w-full !rounded-[20px] !h-[308px] !object-cover"
                />
              </div>
            </div>

            <div className="flex justify-between items-center gap-4 md:gap-14 xl:gap-[86px] max-md:flex-col">
              <div className="w-full md:w-[400px] lg:w-[531px]">
                <h2 className="text-dark-gray text-lg lg:text-2xl font-semibold mb-4 font-sofia">
                  Qualify High-Value Prospects Faster with AI
                </h2>
                <p className="text-sm ">
                  Don’t waste time on cold leads. PharmaServ’s intelligent
                  qualification engine identifies high-potential HCPs early and
                  routes them to your best-performing reps, helping you convert
                  faster and grow faster.
                </p>
              </div>
              <div className="">
                <Image
                  src="https://imgur.com/jl5LAW6.jpeg"
                  alt="background_img"
                  width={670}
                  height={308}
                  className="max-md:w-full !rounded-[20px] !h-[308px] !object-cover"
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-12">
            <Button
              btnText="See How It Works"
              className=""
              btnType="secondary"
              onClick={() => {
                window.open('https://sandbox.pharmaserv.ng/', '_blank');
              }}
            />
          </div>
        </div>
      </section>
      <section className="flex flex-col  items-center justify-center bg-white pb-12">
        <div className="max-xl:px-4 w-full xl:w-[1152px]">
          <div className="bg-white text-center pt-12  flex flex-col items-center space-y-10 px-4 ">
            <h2 className="text-3xl lg:text-4xl text-center text-[#0A0A0A] max-w-[700x] font-sofia">
              Trusted by leading
              <br /> Pharma and Life Science Innovators
            </h2>
          </div>

          <div className=" my-8 bg-[#fbfcfd] py-2">
            <LogoSection
              logos={[
                {
                  src: '/assets/images/logos/haventis.svg',
                  alt: 'haventis logo',
                },
                {
                  src: '/assets/images/logos/krka.svg',
                  alt: 'health Innovation logo',
                },
                {
                  src: '/assets/images/logos/negus.svg',
                  alt: 'medtech logo',
                },
                {
                  src: '/assets/images/logos/ppm.svg',
                  alt: 'life science washington logo',
                },
                {
                  src: '/assets/images/logos/proline.svg',
                  alt: 'life science logo',
                },
              ]}
            />
          </div>
        </div>
      </section>
      <div className="mb-8">
        <Solutions />
      </div>
      <PlatformOverview
        hcp={false}
        text="PharmaServ helps pharma and healthcare sales teams reach hard-to-find customers and grow brand adoption with smarter targeting."
        addBg={true}
      />
    </div>
  );
};

export default PharmaSalesAiTool;
