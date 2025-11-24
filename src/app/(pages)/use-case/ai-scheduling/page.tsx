'use client';
import Button from '@/components/common/button';
import CoreFeature from '@/components/coreFeature';
import LogoSection from '@/components/logoSection';
import PlatformOverview from '@/components/platformOverview';
import ProductHeroSection2 from '@/components/productHeroSection2';
import Solutions from '@/components/solutions';
import Image from 'next/image';
import React from 'react';

const AiScheduling = () => {
  return (
    <div>
      <ProductHeroSection2
        heading="Sales"
        title="AI Scheduling Assistant to Simplify Medical Representatives Visits"
        description="Say goodbye to endless manual planning."
        description2="PharmaServ’s AI Scheduling Assistant helps your team plan visits seamlessly, generate reports automatically, and uncover valuable insights. It keeps your medical reps productive, organized, and always ready to sell."
      />

      <section
        className=" bg-white flex gap-8 max-xl:px-4 xl:w-[1152px] mx-auto py-12
      items-center justify-between"
      >
        <div>
          <div className="space-y-3 mb-8">
            <p className="text-blue font-inter text-base">Powerful Features</p>
            <p className="font-medium text-2xl lg:text-[40px] lg:leading-[44px] text-dark-gray font-sofia">
              Simplify Pharma Field Planning with AI
            </p>
            <p className="text-gray-100 text-sm">
              Scheduling visits and mapping routes shouldn’t be a daily
              headache.
              <br /> PharmaServ’s AI-powered Scheduling Assistant automates
              visit planning, streamlines medical events, and ensures your reps
              are always in the right place at the right time with the right
              message.
            </p>
          </div>
          <div className="space-y-6">
            <div className="flex justify-between items-center gap-4 md:gap-14 xl:gap-[86px] max-md:flex-col">
              <div className="w-full md:w-[400px] lg:w-[531px]">
                <h2 className="text-dark-gray text-lg lg:text-2xl font-semibold mb-4 font-sofia">
                  Auto-Schedule HCP Visits and Maximize Rep Time
                </h2>
                <p className="text-sm ">
                  Your reps shouldn’t spend hours creating schedules manually.
                  PharmaServ automatically plans HCP visits, fills daily routes,
                  and syncs with live performance data... allowing your team to
                  focus on what truly matters: connecting, engaging, and
                  selling.
                  <br />
                  <br /> The result? More calls made. More prescriptions
                  written. More satisfied healthcare professionals across
                  Nigeria.
                </p>
              </div>
              <div className="">
                <Image
                  src="https://imgur.com/A5vQ6YE.jpeg"
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
                  Centralize Rep Schedules and Track Field Performance
                </h2>
                <p className="text-sm ">
                  Get the full picture at a glance. PharmaServ’s intelligent
                  dashboard gives managers real-time visibility into rep
                  activity, KPIs, and visit plans helping you spot bottlenecks,
                  optimize coverage, and eliminate missed opportunities. <br />{' '}
                  <br />
                  Field management has never been this seamless or this smart.
                </p>
              </div>
              <div className="">
                <Image
                  src="https://imgur.com/lDmQEZK.jpeg"
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
                  Simplify Reporting with your AI Assistant
                </h2>
                <p className="text-sm ">
                  Hosting meetings, product launches, or HCP visits? Let AI
                  handle the paperwork.
                  <br /> PharmaServ automatically generates meeting reports and
                  visit summaries... Saving valuable time and keeping both
                  managers and reps in sync.
                  <br /> <br /> Stay informed, aligned, and ready to act faster.
                </p>
              </div>
              <div className="">
                <Image
                  src="https://imgur.com/lDmQEZK.jpeg"
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
      <CoreFeature
        title="Maximize Pharma Sales Performance with 
AI-Powered Scheduling"
        features={[
          {
            title: 'Accelerate Onboarding',
            description:
              'AI-guided onboarding gets new reps up to speed quickly with tailored product details, customer insights, and contextual training that shortens the learning curve.',
            icon: '/assets/icons/coreFeatureIcon1.svg',
          },
          {
            title: 'Data to Sales',
            description:
              'Live field data and AI-generated summaries turn every call and visit into actionable insights helping you make smarter decisions that drive real growth.',
            icon: '/assets/icons/coreFeatureIcon2.svg',
          },
          {
            title: 'Equip Reps',
            description:
              'Give your team presentation-ready tools, AI prompts, and guided recommendations that build confidence and make every HCP interaction impactful.',
            icon: '/assets/icons/coreFeatureIcon3.svg',
          },
          {
            title: 'AI Insights',
            description:
              'Predictive analytics surface new opportunities, sharpen targeting, and keep your brand one step ahead of the competition whether you’re in Lagos, Cape Town, or Accra.',
            icon: '/assets/icons/coreFeatureIcon4.svg',
          },
        ]}
      />
      <section className="flex flex-col  items-center justify-center bg-white pb-12">
        <div className="max-xl:px-4 w-full xl:w-[1152px]">
          <div className="bg-white text-center pt-12  flex flex-col items-center space-y-10 px-4 ">
            <h2 className="text-3xl lg:text-4xl text-center text-[#0A0A0A] max-w-[700x] font-sofia">
              Trusted by Canada&apos;s Leading
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
        hcp={true}
        text="Whether you’re reaching new prescribers or strengthening relationships with long-term partners, PharmaServ makes engagement easy, measurable, and compliant helping you expand access and adoption for every treatment."
        addBg={true}
      />
    </div>
  );
};

export default AiScheduling;
