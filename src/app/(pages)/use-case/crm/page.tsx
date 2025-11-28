'use client';
import Button from '@/components/common/button';
import LogoSection from '@/components/logoSection';
import PlatformOverview from '@/components/platformOverview';
import ProductHeroSection2 from '@/components/productHeroSection2';
import React from 'react';
import Image from 'next/image';
import Solutions from '@/components/solutions';
import CoreFeature from '@/components/coreFeature';

const CRM = () => {
  // const lang = useTranslations('CRM');

  return (
    <div>
      <ProductHeroSection2
        heading="Pharma CRM"
        title="Pharma CRM Built to Strengthen Every HCP Relationship"
        description="PharmaServ CRM makes it easy for pharma teams to understand their customers better, plan smarter, and close prescriptions faster."
        description2="Gain full visibility into HCP activity, automate follow-ups, and help your team focus on what truly matters - building lasting trust and driving growth."
      />

      <section
        className=" bg-white flex gap-8 max-xl:px-4 xl:w-[1152px] mx-auto py-12
      items-center justify-between"
      >
        <div>
          <div className="space-y-3 mb-8">
            <p className="text-blue font-inter text-base">Powerful Features</p>
            <p className="font-medium text-2xl lg:text-[40px] lg:leading-[44px] text-dark-gray font-sofia">
              Your All-in-One CRM for Smarter Pharma Sales
            </p>
            <p className="text-gray-100 text-sm">
              PharmaServ CRM gives you one connected platform to manage HCP
              relationships, track field sales, automate workflows, and simplify
              collaboration across teams.
              <br /> Less admin. More clarity. Faster growth... From Lagos to
              Johannesburg and everywhere in between.
            </p>
          </div>
          <div className="space-y-6">
            <div className="flex justify-between items-center gap-4 md:gap-14 xl:gap-[86px] max-md:flex-col">
              <div className="w-full md:w-[400px] lg:w-[531px]">
                <h2 className="text-dark-gray text-lg lg:text-2xl font-semibold mb-4 font-sofia">
                  Understand Your Customers and Qualify Leads Faster
                </h2>
                <p className="text-sm ">
                  Stop guessing what your customers need. <br />
                  PharmaServ automatically qualifies leads, tracks HCP
                  interactions, and gives reps the full context they need for
                  timely, effective follow-ups that convert into real sales
                  opportunities.
                </p>
              </div>
              <div className="">
                <Image
                  src="https://imgur.com/BEZXZaH.jpeg"
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
                  Centralize Order History and Customer Data
                </h2>
                <p className="text-sm ">
                  Track past orders, manage customer records, and access key
                  buying behavior insights. Help your sales team meet healthcare
                  professional needs and secure repeat orders.
                </p>
              </div>
              <div className="">
                <Image
                  src="https://imgur.com/dwNEFJs.jpeg"
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
                  Simplify Team Communication and Field Collaboration
                </h2>
                <p className="text-sm ">
                  PharmaServ connects managers and field reps in real time
                  enabling instant feedback, shared updates, and quick
                  decision-making that keeps your team aligned and agile.
                </p>
              </div>
              <div className="">
                <Image
                  src="https://imgur.com/GIjgJsk.jpeg"
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
                  Plan Smarter Visits and Optimize Field Routines
                </h2>
                <p className="text-sm ">
                  PharmaServ CRM helps your reps plan the best visit routes,
                  prioritize top accounts, and make data-backed decisions,
                  ensuring no HCP is ever left out and every visit adds value.
                </p>
              </div>
              <div className="">
                <Image
                  src="https://imgur.com/IAKF3Js.jpeg"
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
                  Organize Sales Workflows and Reduce Admin Work
                </h2>
                <p className="text-sm ">
                  Let automation handle the busywork.
                  <br /> With PharmaServ’s smart workflow planner, your team
                  spends less time filling reports and more time engaging
                  healthcare professionals, closing calls, and driving
                  prescriptions.
                </p>
              </div>
              <div className="">
                <Image
                  src="https://imgur.com/eJgJ7iC.jpeg"
                  alt="background_img"
                  width={670}
                  height={308}
                  className="max-md:w-full !rounded-[20px] !h-[308px] !object-cover"
                />
              </div>
            </div>
            <div className="flex justify-between items-center gap-4 md:gap-14 xl:gap-[86px] max-md:flex-col">
              <div className="w-full md:w-[400px] lg:w-[531px]">
                <h2 className="text-dark-gray text-lg lg:text-2xl font-semibold mb-4">
                  Engage Healthcare Professionals with Smarter CRM Insights
                </h2>
                <p className="text-sm ">
                  Equip your sales team with powerful CRM analytics and clean,
                  interactive dashboards that turn insights into action. <br />
                  Spot opportunities faster, make informed decisions, and
                  strengthen every customer relationship... Everything in one
                  unified view.
                </p>
              </div>
              <div className="">
                <Image
                  src="https://imgur.com/2vokA8I.jpeg"
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
        title="Boost Compliance, Cut Costs, and Grow Sales"
        features={[
          {
            title: 'Stronger Relationships',
            description:
              'Get a complete 360° view of your customers to build deeper engagement and drive repeat prescriptions with confidence.',
            icon: '/assets/icons/coreFeatureIcon1.svg',
          },
          {
            title: 'Data Privacy',
            description:
              'Built-in audit trails protect data and ensure compliance giving your team and your customers peace of mind.',
            icon: '/assets/icons/coreFeatureIcon2.svg',
          },
          {
            title: 'Digital Transformation',
            description:
              'AI-powered insights and analytics help you optimize sales and marketing strategies for faster, measurable growth without disrupting your workflow.',
            icon: '/assets/icons/coreFeatureIcon3.svg',
          },
          {
            title: 'Cut Costs',
            description:
              'Automated processes reduce manual effort, lower operating costs, and let your reps focus on what matters most which is selling effectively and building strong, trusted relationships.',
            icon: '/assets/icons/coreFeatureIcon4.svg',
          },
        ]}
      />

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
        hcp={true}
        text="Whether you’re reaching new prescribers or strengthening relationships with long-term partners, PharmaServ makes engagement easy, measurable, and compliant helping you expand access and adoption for every treatment."
        addBg={true}
      />
    </div>
  );
};

export default CRM;
