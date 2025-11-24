'use client';
import CopilotFlex from '@/components/copilotFlex';
import PlatformOverview from '@/components/platformOverview';
import ProductHeroSection from '@/components/productHeroSection';
import Testimonials from '@/components/testimonials';
import React from 'react';
// import { useTranslations } from 'next-intl';
import LogoSection from '@/components/logoSection';

const Copilot = () => {
  // const lang = useTranslations('copilot');

  return (
    <div>
      <ProductHeroSection
        heading="Copilot"
        title="The Modern Omnichannel Solution for Pharma Teams"
        description="Healthcare engagement can quickly become very complex; multiple channels, multiple roles, endless reporting… Too much back and forth. PharmaServ Copilot brings it all together."
        description2="Watch your medical reps, sales, and marketing teams work as one powered by AI automation, real-time insights, and secure content delivery. Every call, visit, and campaign becomes
      smarter, more compliant, and more personal."
        image="/assets/images/new_visuals/products_tab/Our_product.gif"
        contentClassName="xl:!max-w-[800px]"
      />

      <div className="bg-white px-4 xl:px-[144px] pt-6 pb-10 flex items-center justify-center ">
        <div className="flex items-center justify-center max-md:flex-col xl:w-[1152px] gap-10 lg:gap-40">
          <div className="">
            <h2 className="max-w-[376px] text-[#1A1C1E] text-xl lg:text-[40px] lg:leading-[44px] font-semibold font-sofia">
              Accelerate Product Adoption and Build Stronger HCP Relationships
            </h2>
          </div>
          <div className=" px-4 flex flex-col items-start max-w-[417px] max-lg:pt-5 text-[#363D4F] text-sm lg:text-base">
            <p className="">
              Africa&apos;s healthcare landscape is evolving quickly; speed,
              precision, and consistency are everything.
            </p>
            <p className="mt-6">
              PharmaServ’s Copilot equips your teams with tools and insights
              that help influence HCP decisions faster, leading to quicker
              new-to-brand prescriptions, total prescriptions, improved patient
              outcomes, and stronger business growth.
            </p>
          </div>
        </div>
      </div>
      <section className="">
        <div className=" bg-[url('/assets/background_images/copilotBackground.svg')] bg-cover bg-no-repeat h-[50px] bg-[#f7f8fa]"></div>
        <div className="pb-10  bg-[#f7f8fa]  text-center mx-auto space-y-6 px-4 flex flex-col items-center w-full">
          <div className="max-w-[1280px] mx-auto">
            <div className=" flex flex-col items-center pt-4">
              <p className=" text-[#1A1C1E] font-medium text-2xl lg:text-[40px] lg:leading-[44px] py-2 px-6 w-fit font-sofia">
                What is Copilot
              </p>
              <h2 className="text-base text-center  text-[#363D4F]  pb-10  max-w-[1000px]">
                Copilot is your all-in-one engagement assistant built
                specifically for pharma and life-science teams. <br />
                It connects your medical, sales, and marketing activities into
                one seamless flow, giving you real-time visibility, smarter
                automation, and personalized communication tools that fit your
                market realities.
              </h2>
            </div>
            <CopilotFlex
              title={'For Medical Representatives'}
              description={[
                'Your reps are the face of your brand. Copilot helps them show up prepared, confident, and equipped with everything they need to deliver value... even on days when the network isn’t on your side.',
                'From planning visits to sharing approved content, every tool is built to help them engage more effectively.',
              ]}
              video="https://suppliers-product-img.s3.eu-west-2.amazonaws.com/FOr%20James/Products%20%28copilot%20and%20fieldservice%29/For%20Medical%20Representatives.mp4"
              list={[
                'AI-Powered Scheduling and Check-Inst',
                'Call Planning and Reports',
                'Content Personalization and Compliance',
                'On-Demand Performance Feedback',
              ]}
              position="textFirst"
            />

            <CopilotFlex
              title="For Managers"
              description={[
                'Managing multiple reps across different territories shouldn’t feel like guesswork. Copilot’s Manager Dashboard gives you complete visibility into what’s happening in the field from HCP behavior and market activity to rep performance and campaign trends.',
                'You’ll make faster, more informed decisions that keep your team aligned, motivated, and performing at their best.',
              ]}
              video="https://suppliers-product-img.s3.eu-west-2.amazonaws.com/FOr%20James/Products%20%28copilot%20and%20fieldservice%29/For%20Managers.mp4"
              list={[
                'Account Visibility',
                'Cross-Team Collaboration Hub',
                'Summarize Reporting and Sentiment Analysis',
                'Master Data Management',
              ]}
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
      <Testimonials />
      <PlatformOverview
        hcp={true}
        text="PharmaServ helps pharma and healthcare medical affairs teams reach hard-to-find prescribers and grow brand adoption."
      />
    </div>
  );
};

export default Copilot;
