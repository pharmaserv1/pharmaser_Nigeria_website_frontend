'use client';
import Button from '@/components/common/button';
import LogoSection from '@/components/logoSection';
import PlatformOverview from '@/components/platformOverview';
import ProductHeroSection2 from '@/components/productHeroSection2';
import React from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Solutions from '@/components/solutions';

const EDetailing = () => {
  const lang = useTranslations('edetailing');

  return (
    <div>
      <ProductHeroSection2
        heading={lang('hero.heading')}
        title="Medical E-Detailing Software That Deepens HCP Engagement"
        description="Deliver smarter, compliant, and interactive detailing experiences. Whether your reps are meeting healthcare professionals face-to-face, virtually, or remotely.
PharmaServ helps pharma teams make every conversation count by improving HCP engagement, message recall, and prescribing confidence.
"
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
              Medical E-Detailing to Optimize Sales Visits
            </p>
            <p className="text-gray-100 text-base">
              Simplify how your field and marketing teams engage HCPs.
              <br /> Use AI insights to refine targeting, personalize
              conversations, and track impact helping your brand build trust,
              accelerate onboarding, and drive measurable growth.
            </p>
          </div>
          <div className="space-y-6">
            <div className="flex justify-between items-center gap-4 md:gap-14 xl:gap-[86px] max-md:flex-col">
              <div className="w-full md:w-[400px] lg:w-[531px]">
                <h2 className="text-dark-gray text-lg lg:text-2xl font-semibold mb-4 font-sofia">
                  Streamline HCP and Account Management
                </h2>
                <p className="text-sm ">
                  Keep everything your team needs in one place. <br />{' '}
                  PharmaServ centralizes all detailing content, customer data,
                  and engagement tools so reps can easily access approved
                  materials, upload updates, and track HCP interactions...
                  Saving time and keeping every message consistent and
                  compliant.
                </p>
              </div>
              <div className="">
                <Image
                  src="https://imgur.com/YwW0sWu.jpeg"
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
                  PharmaServ helps you plan impactful launches, manage
                  attendance, and track engagement... Reducing no-shows and
                  improving ROI for every educational or promotional activity
                  your team hosts.
                </p>
              </div>
              <div className="">
                <Image
                  src="https://imgur.com/VqEPifm.jpeg"
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
                  Know what’s happening across every territory. <br /> Managers
                  get full visibility into daily operations from rep routes and
                  call frequency to coverage gaps. No assumptions, no guesswork
                  just accurate, real-time reporting that drives accountability
                  and sharper performance.
                </p>
              </div>
              <div className="">
                <Image
                  src="https://imgur.com/RCfcMef.jpeg"
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
                  Verify Field Visits with Geo-Fencing
                </h2>
                <p className="text-sm ">
                  Stay compliant without hovering.
                  <br /> PharmaServ’s smart geo-fencing confirms rep check-ins
                  automatically, removing the need for manual reports while
                  ensuring territory coverage and full transparency.
                </p>
              </div>
              <div className="">
                <Image
                  src="https://imgur.com/hVt7GiU.jpeg"
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
                  Automate E-Detailing Workflows
                </h2>
                <p className="text-sm ">
                  Let automation handle the busywork.
                  <br /> PharmaServ updates content instantly, automates
                  repetitive tasks, and helps reps spend more time doing what
                  truly matters (Engaging prescribers, closing calls, and
                  growing relationships).
                </p>
              </div>
              <div className="">
                <Image
                  src="https://imgur.com/8wEJiu3.jpeg"
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

export default EDetailing;
