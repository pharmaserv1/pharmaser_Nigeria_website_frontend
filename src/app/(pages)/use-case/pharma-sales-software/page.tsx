'use client';
import Button from '@/components/common/button';
import LogoSection from '@/components/logoSection';
import ProductHeroSection2 from '@/components/productHeroSection2';
import React from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import PlatformOverview from '@/components/platformOverview';
import Solutions from '@/components/solutions';

const FieldServiceManagement = () => {
  const lang = useTranslations('pharmaSales');

  return (
    <div>
      <ProductHeroSection2
        heading={lang('hero.heading')}
        title="Pharma Sales Software That Simplifies Field Operations and Grows Results"
        description="Strengthen your field teams with tools built for real-world performance."
        description2="PharmaServ helps pharma brands simplify daily operations, boost rep productivity, and gain real-time visibility that translates into measurable revenue growth across every region."
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
              Managing field sales in pharma can be complex, from visit planning
              to follow-ups and data tracking. <br />
              PharmaServ turns that complexity into simple, data-driven actions.
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
              With AI-powered insights and smarter route planning, your team can
              reach more healthcare professionals, nurture stronger
              relationships, and grow brand adoption all on one seamless
              platform.
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
              PharmaServ gives your team the ability to execute smarter and lead
              with confidence. Get real-time insights that show what’s working,
              what’s not, and where your biggest opportunities lie.
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
              Pharma Sales Software to Boost Revenue and Productivity
            </p>
            <p className="text-gray-100 text-base">
              Boost performance, streamline operations, and optimize every part
              of your sales cycle with technology built for modern life sciences
              teams.
            </p>
          </div>
          <div className="space-y-6">
            <div className="flex justify-between items-center gap-4 md:gap-14 xl:gap-[86px] max-md:flex-col">
              <div className="w-full md:w-[400px] lg:w-[531px]">
                <h2 className="text-dark-gray text-lg lg:text-2xl font-semibold mb-4 font-sofia">
                  Unlock Actionable Insights from Sales Trends
                </h2>
                <p className="text-sm ">
                  Spot opportunities before they slip away.
                  <br /> PharmaServ transforms complex data into clear insights
                  that help your team make faster, smarter decisions...
                  Improving coverage, conversions, and sales outcomes.
                </p>
              </div>
              <div className="">
                <Image
                  src="https://imgur.com/NX4wHWq.jpeg"
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
                  Build Stronger Sales Plans with Target Setting and Tracking
                </h2>
                <p className="text-sm ">
                  Give managers confidence and control in the field.
                  <br /> Set realistic targets, track them in real time, and
                  make instant adjustments so every rep stays focused and every
                  goal feels achievable.
                </p>
              </div>
              <div className="">
                <Image
                  src="https://imgur.com/ChuaAx7.jpeg"
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
                  Boost Cash Flow with Smart Dynamic Discounts
                </h2>
                <p className="text-sm ">
                  Keep your business cash-positive and agile. <br />
                  PharmaServ identifies early payment opportunities, automates
                  discount rules, and reduces delays helping you stay ahead
                  financially while rewarding timely customers.
                </p>
              </div>
              <div className="">
                <Image
                  src="https://imgur.com/bp0WRoc.jpeg"
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
                  View Live Sales Reports in Real-time
                </h2>
                <p className="text-sm ">
                  Know what’s happening as it happens. <br />
                  Track orders, monitor performance, and view field activity on
                  a clean, intuitive dashboard that gives you total operational
                  transparency.
                </p>
              </div>
              <div className="">
                <Image
                  src="https://i.imgur.com/hy3y334.jpg"
                  alt="background_img"
                  width={670}
                  height={308}
                  className="max-md:w-full !rounded-[20px] !h-[308px] !object-cover"
                />
              </div>
            </div>

            <div className="flex justify-between items-center gap-4 md:gap-14 xl:gap-[86px] max-md:flex-col">
              <div className="w-full md:w-[400px] lg:w-[531px]">
                <h2 className="text-dark-gray text-lg lg:text-2xl font-semibold mb-4 font-sofia ">
                  Take Charge of Receivables and Reduce Debt
                </h2>
                <p className="text-sm ">
                  No more chasing numbers across multiple spreadsheets.
                  <br />
                  PharmaServ’s receivables dashboard gives you a full view of
                  outstanding balances, helping you manage collections
                  efficiently and improve cash recovery.
                </p>
              </div>
              <div className="">
                <Image
                  src="https://imgur.com/XjgL9QZ.jpeg"
                  alt="background_img"
                  width={670}
                  height={308}
                  className="max-md:w-full !rounded-[20px] !h-[308px] !object-cover "
                />
              </div>
            </div>

            <div className="flex justify-between items-center gap-4 md:gap-14 xl:gap-[86px] max-md:flex-col">
              <div className="w-full md:w-[400px] lg:w-[531px]">
                <h2 className="text-dark-gray text-lg lg:text-2xl font-semibold mb-4 font-sofia">
                  Easily Export Sales Data to Excel
                </h2>
                <p className="text-sm ">
                  Work your way without limits.
                  <br /> Export reports and performance data in one click for
                  management reviews, collaboration, or team analysis...All in
                  your preferred format.
                </p>
              </div>
              <div className="">
                <Image
                  src="https://imgur.com/ZeedyQb.jpeg"
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

export default FieldServiceManagement;
