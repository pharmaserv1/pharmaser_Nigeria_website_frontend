'use client';
import CopilotFlex from '@/components/copilotFlex';
import PlatformOverview from '@/components/platformOverview';
import ProductHeroSection from '@/components/productHeroSection';
import Testimonials from '@/components/testimonials';
import React from 'react';
import LogoSection from '@/components/logoSection';
import Image from 'next/image';
import Impact from '@/components/Impact';
import Button from '@/components/common/button';

const FieldServiceManagement = () => {
  return (
    <div>
      <ProductHeroSection
        heading="Field Management"
        title="Orchestrate Smarter Sales. Drive Real Results"
        description="Field sales can get truly messy; multiple teams, too many territories, and moving parts.
But PharmaServ Field Service brings everything together."
        description2="It gives your team the real control and confidence to perform at their best every single day."
        description3="With real-time insights, automated workflows, and visibility across every location, leaders can plan smarter, track better, and grow faster."
        // image="/assets/images/productHeader.svg"
        image="/assets/images/new_visuals/products_tab/Our_product.gif"
        btnText="Watch Demo"
        btnType="secondary"
        contentClassName="xl:!max-w-[800px]"
        // descriptionClassName="lg:!max-w-[580px]"
      />
      <div
        className={` gap-8 max-xl:px-4  mx-auto pt-8 pb-12  flex items-center justify-center bg-white w-full`}
      >
        <div className={` items-center justify-between flex `}>
          <div className=" space-y-6 text-left px-4  max-md:flex max-md:flex-col items-center">
            <div className="text-center">
              <p className=" text-blue font-medium text-sm ">Field Service</p>
              <h1
                className={`text-2xl lg:text-[40px] lg:leading-[44px] font-medium  mb-5 text-dark-gray text-center font-sofia`}
              >
                The Measurable Impact of <br /> PharmaServ Field Service
              </h1>
            </div>

            <div className="flex gap-6 lg:gap-14 !mt-16 ">
              <div className="space-y-5">
                <div>
                  <div className="w-12 h-12 rounded-full border border-[#E9EBF1] flex items-center justify-center mb-6">
                    <Image
                      src={'/assets/icons/coreFeatureIcon3.svg'}
                      alt="icon"
                      width={32}
                      height={32}
                      className="max-md:w-full"
                    />
                  </div>
                  <h2 className="text-[#1A1C1E] text-base font-medium mb-4">
                    Hit Your Revenue Goals
                  </h2>
                  <p className="text-sm text-[#363D4F] lg:w-[220px]">
                    Your team doesn’t need more reports. They need results. The
                    result? Less friction, more revenue, and a sales cycle that
                    actually flows seamlessly 
                    <br /> <br />
                  </p>
                </div>
                <div>
                  <div className="w-12 h-12 rounded-full border border-[#E9EBF1] flex items-center justify-center mb-6">
                    <Image
                      src={'/assets/icons/coreFeatureIcon3.svg'}
                      alt="icon"
                      width={32}
                      height={32}
                      className="max-md:w-full"
                    />
                  </div>
                  <h2 className="text-[#1A1C1E] text-base font-medium mb-4">
                    Unlock Revenue Growth
                  </h2>
                  <p className="text-sm text-[#363D4F] lg:w-[220px]">
                    PharmaServ doesn’t just track sales. It predicts them.
                    <br /> AI reveals buying patterns, forecasts opportunities,
                    and uncovers cross-sell potential helping your reps turn
                    every visit into steady, repeatable revenue growth.
                  </p>
                </div>
              </div>

              <Image
                src={'/assets/images/hcpProfile.svg'}
                alt="background_img"
                width={370}
                height={250}
                className="max-md:w-full max-md:hidden"
              />
              {/* </div> */}
              <div className="space-y-10">
                <div>
                  <div className="w-12 h-12 rounded-full border border-[#E9EBF1] flex items-center justify-center mb-6">
                    <Image
                      src={'/assets/icons/coreFeatureIcon3.svg'}
                      alt="icon"
                      width={32}
                      height={32}
                      className="max-md:w-full"
                    />
                  </div>
                  <h2 className="text-[#1A1C1E] text-base font-medium mb-4">
                    Deploy faster together
                  </h2>
                  <p className="text-sm text-[#363D4F] lg:w-[220px]">
                    No more waiting on updates or calling for status checks.
                    PharmaServ keeps every activity visible as it happens across
                    your entire field team.
                  </p>
                </div>
                <div>
                  <div className="w-12 h-12 rounded-full border border-[#E9EBF1] flex items-center justify-center mb-6">
                    <Image
                      src={'/assets/icons/coreFeatureIcon3.svg'}
                      alt="icon"
                      width={32}
                      height={32}
                      className="max-md:w-full"
                    />
                  </div>
                  <h2 className="text-[#1A1C1E] text-base font-medium mb-4">
                    Simplify Operations With AI
                  </h2>
                  <p className="text-sm text-[#363D4F] lg:w-[220px]">
                    Less manual work. More meaningful progress. <br />{' '}
                    PharmaServ connects orders, payments, and team activity in
                    one intelligent system, giving you instant insights and
                    operational clarity. Because the more you see, the better
                    you perform.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="">
        <div className="bg-[url('/assets/background_images/copilotBackground.svg')] bg-cover bg-no-repeat h-[50px] bg-[#f7f8fa]"></div>
        <div className="pb-10  bg-[#f7f8fa]  text-center mx-auto space-y-6 px-4 flex flex-col items-center w-full">
          <div className="max-w-[1280px] mx-auto">
            <div className=" flex flex-col items-center pt-4">
              <p className=" text-[#1A1C1E] font-medium text-2xl lg:text-[40px] lg:leading-[44px] py-2 px-6 w-fit font-sofia">
                Build Powerful AI-Agents to Drive Sales
              </p>
              <h2 className="text-base text-center  text-[#363D4F]  pb-4  max-w-[642px]">
                Find out how our intelligent field management tools make
                everyday sales operations easier, faster, and more profitable
                for your entire team.
              </h2>
            </div>
            <CopilotFlex
              title={'For Medical Representatives'}
              description={[
                'Your field reps don’t need five different apps to do one job.',
                'PharmaServ gives them a single, easy-to-use platform that handles orders, payments, leads, and performance tracking.They also get real-time market insights to help them close smarter and faster.',
              ]}
              video="https://suppliers-product-img.s3.eu-west-2.amazonaws.com/FOr%20James/Products%20%28copilot%20and%20fieldservice%29/For%20Medical%20Representatives.mp4"
              list={[
                'Smart Order Management',
                'Real-Time Payment Tracking',
                'Automated Discounts & Pricing Rules ',
                'Instant Product Updates',
              ]}
              position="textFirst"
            />

            <CopilotFlex
              title="For Managers"
              description={[
                'Managing field sales shouldn’t feel like guesswork.PharmaServ Field Service gives you a clear, unified view of your team’s activities, payments, and performance. No more waiting till end-of-day.',
                'Now, you can make faster decisions, set sharper goals, and lead your team with confidence.',
              ]}
              video="https://suppliers-product-img.s3.eu-west-2.amazonaws.com/FOr%20James/Products%20%28copilot%20and%20fieldservice%29/For%20Managers.mp4"
              list={[
                'Integrated CRM and Sales Data',
                'Live Field Force Tracking',
                'AI-Powered Revenue Forecasting ',
                'Seamless ERP Sync',
              ]}
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
      <section className="flex items-center justify-center">
        <div className=" px-4 xl:px-[144px] pt-20 pb-10">
          <div className="space-y-6 text-left">
            <p className="bg-[#51A2FF33] text-blue font-medium text-sm rounded-[30px] py-2 px-6 w-fit">
              Why Field Service Manager
            </p>
            <h2 className="text-3xl lg:text-5xl  text-dark-gray font-sofia">
              The Measurable Impact of PharmaServ Field Service
            </h2>
            <p className="text-base text-gray-100">
              Optimize sales operations, simplify invoicing, and improve payment
              tracking. Empower your team with real-time insights that increase
              revenue, improve transparency, and strengthen customer
              relationships.
            </p>
          </div>

          <div className="flex flex-col items-center justify-between pt-10 xl:pt-20">
            <div className="">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 xl:gap-12">
                <Impact
                  video="https://suppliers-product-img.s3.eu-west-2.amazonaws.com/Simplify+E-Detailing+and+Maximize+HCP+Impact/N5.mp4"
                  title="Align Teams and Hit Revenue Goals"
                  description="Give your sales team real-time data, streamline orders, and simplify receivables management. With AI-powered insights, your team stays aligned, exceeds targets, and grows revenue."
                />
                <Impact
                  video="https://suppliers-product-img.s3.eu-west-2.amazonaws.com/Standardize+Rep+Execution+for+Consistent+Results/N8.mp4"
                  title="Accelerate cash flow and team efficiency"
                  description="PharmaServ Field Service Software helps sales teams accelerate invoice-to-pay cycles, track field staff in real time, and unlock data-driven insights to boost cash flow and operational efficiency."
                />
                <Impact
                  video="https://suppliers-product-img.s3.eu-west-2.amazonaws.com/Align+Managers+and+Reps+to+Hit+Sales+Goals/N2.mp4"
                  title="Simplify Field Operations With AI Scheduling"
                  description="PharmaServ's Field Service software helps your team gain valuable customer insights, streamline order management, and improve service efficiency. Simplify workflows, boost productivity, and align with business goals to achieve impactful results within Africa."
                />

                <Impact
                  video="https://suppliers-product-img.s3.eu-west-2.amazonaws.com/Verify+Visits+Instantly+With+Geo-Tracking/N12.mp4"
                  title="Unlock Revenue Growth Opportunities"
                  description="Leverage detailed sales trends and AI-driven insights to set clear targets, motivate teams, and uncover new cross-sell opportunities. Make data-backed decisions and optimize pricing to boost conversions and accelerate revenue growth."
                />
              </div>
            </div>
            <div className=" flex flex-col items-center pt-6">
              {/* <Impact
                video="https://suppliers-product-img.s3.eu-west-2.amazonaws.com/Boost+Compliance+and+Engagement+With+Content+Control/N4.mp4"
                title={lang('impacts.compliance.title')}
                description={lang('impacts.compliance.description')}
              /> */}
              <Button
                btnText="Get Free Trial"
                btnType="secondary"
                className="w-fit mt-8 xl:mt-12"
              />
            </div>
          </div>
        </div>
      </section>

      <Testimonials />
      <PlatformOverview
        hcp={true}
        text="PharmaServ helps pharma and healthcare sales teams reach hard-to-find customers and grow brand adoption with smarter targeting."
      />
    </div>
  );
};

export default FieldServiceManagement;
