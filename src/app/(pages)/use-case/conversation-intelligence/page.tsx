'use client';
import Button from '@/components/common/button';
import LogoSection from '@/components/logoSection';
import PlatformOverview from '@/components/platformOverview';
import ProductHeroSection2 from '@/components/productHeroSection2';
import React from 'react';
import Image from 'next/image';
import Solutions from '@/components/solutions';
import CoreFeature from '@/components/coreFeature';

const ConversationIntelligence = () => {
  // const lang = useTranslations('ConversationIntelligence');

  return (
    <div>
      <ProductHeroSection2
        heading="Sales"
        title="Conversation Intelligence That Helps You Sell Smarter"
        description="PharmaServ’s AI-powered Conversation Intelligence helps pharma teams uncover deeper insights, close more deals, and deliver consistent, data-backed HCP engagement...every single time."
      />

      <section
        className=" bg-white flex gap-8 max-xl:px-4 xl:w-[1152px] mx-auto py-12
      items-center justify-between"
      >
        <div>
          <div className="space-y-3 mb-8">
            <p className="text-blue font-inter text-base">Powerful Features</p>
            <p className="font-medium text-2xl lg:text-3xl text-dark-gray font-sofia">
              Pharma CRM to Boost Sales Efficiency and Customer Relationships
            </p>
            <p className="text-gray-100 text-sm">
              No more scattered notes or endless follow-ups.
              <br /> PharmaServ helps you track every conversation, qualify
              leads, and personalize engagement. This means your reps can focus
              on building stronger trust, deeper relationships, and higher
              prescriptions
            </p>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between items-center gap-4 md:gap-14 xl:gap-[86px] max-md:flex-col">
              <div className="w-full md:w-[400px] lg:w-[531px]">
                <h2 className="text-dark-gray text-lg lg:text-2xl font-semibold mb-4 font-sofia">
                  Streamline HCP and Account Management
                </h2>
                <p className="text-sm ">
                  Keep every HCP interaction well-organized and easy to access.
                  <br />
                  PharmaServ centralizes your detailing content, integrates your
                  tools, and lets reps update records instantly... Saving hours
                  of admin time every week while ensuring your team stays
                  compliant, connected, and in sync.
                </p>
              </div>
              <div className="">
                <Image
                  src="https://i.imgur.com/EwIZcRP.jpeg"
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
                  Plan, Monitor & Optimize Pharma Events
                </h2>
                <p className="text-sm ">
                  Make every event worth the time and effort.
                  <br /> Whether it’s Lagos, Port Harcourt, or Kano, PharmaServ
                  helps you plan impactful meetings, manage attendance, and
                  track engagement outcomes. Reduce no-shows, improve
                  coordination, and maximize ROI with real-time analytics.
                </p>
              </div>
              <div className="">
                <Image
                  src="https://imgur.com/EDSm1zB.jpeg"
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
                  Track Field Activity in Real Time
                </h2>
                <p className="text-sm ">
                  See what’s happening in the field as it happens.
                  <br /> Managers get full visibility into rep visits, route
                  coverage, and performance reports, helping you drive
                  accountability, close gaps, and make informed decisions on the
                  spot.
                </p>
              </div>
              <div className="">
                <Image
                  src="https://imgur.com/gmLQAwS.jpeg"
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
        title="Turn Conversations Into Conversions"
        features={[
          {
            title: 'Unlock HCP insights',
            description:
              'Know your audience better. PharmaServ analyzes call data, notes, and engagement trends helping your team personalize outreach and improve your close rates.',
            icon: '/assets/icons/coreFeatureIcon1.svg',
          },
          {
            title: 'Optimize Sales',
            description:
              'Turn every data point into a competitive edge. With AI-powered analytics, you’ll always know where to focus, which HCPs matter most, and how to increase rep productivity across all regions.',
            icon: '/assets/icons/coreFeatureIcon2.svg',
          },
          {
            title: 'Verify Rep Activity',
            description:
              'Say goodbye to manual updates and delayed reports. PharmaServ automatically verifies rep visits in real time giving you accurate, reliable activity data without the stress of chasing numbers.',
            icon: '/assets/icons/coreFeatureIcon3.svg',
          },
          {
            title: 'Automate followup',
            description:
              'Never miss a key moment again. PharmaServ intelligently recommends and schedules follow-ups, keeping your reps proactive, consistent, and top-of-mind with every HCP.',
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
        hcp={false}
        text="PharmaServ helps pharma and healthcare sales teams reach hard-to-find customers and grow brand adoption with smarter targeting."
        addBg={true}
      />
    </div>
  );
};

export default ConversationIntelligence;
