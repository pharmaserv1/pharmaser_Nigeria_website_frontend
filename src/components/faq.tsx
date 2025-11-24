'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import Button from './common/button';
import { useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';

const Faq = ({ text }: { text?: string }) => {
  const [active, setActive] = useState<number[]>([]);
  const router = useRouter();
  const lang = useTranslations('faq');

  // Get the FAQ questions from translations
  // const faqs = lang.raw('questions') as Array<{
  //   title: string;
  //   description: string[];
  // }>;

  const faqs = [
    {
      title: 'Who is PharmaServ built for?',
      description: [
        'PharmaServ is a mobile and web-based software platform designed for pharmaceutical and life-science companies. It automates sales, marketing, and medical detailing through two core solutions: Copilot and Field Service Platform.',
        'The Copilot solution streamlines medical detailing, helping reps deliver professional, engaging presentations.',
        'The Field Service Platform optimizes real-time sales operations such as order generation, tracking, and territory management.',
        'Leaders & managers can assign tasks, set KPIs, and track field activities to ensure consistent performance across all territories.',
      ],
    },
    {
      title:
        "What is PharmaServ's e-detailing platform, and how does it improve HCP engagement?",
      description: [
        'PharmaServ Copilot Synchronizes Medical, Sales and Marketing engagement for desired outcome. Capture HCP trends and track KPIs in real time to help your reps close more calls with data-driven decisions',
        "PharmaServ Copilot's dashboard gives leaders & managers real-time visibility into HCP behavioral lead indicators, marketing trends. Consolidate reports, track team performance, and spot opportunities to strengthen brand adoption.",
      ],
    },
    {
      title:
        "How can PharmaServ's software help manage medical representatives?",
      description: [
        'PharmaServ’s field management tools lets you track rep activity through GPS geo-fencing, automate scheduling, and monitor KPIs in real time.You get full visibility into team performance and coverage, ensuring better accountability and consistent results.',
      ],
    },
    {
      title:
        'What benefits does PharmaServ offer for both physical and e-detailing presentations?',
      description: [
        'PharmaServ supports hybrid detailing whether your reps are visiting in person or presenting remotely.With easy uploads, real-time analytics, and multimedia features, your team can deliver powerful detailing sessions that build trust and drive prescribing decisions.',
      ],
    },
    {
      title:
        'How does PharmaServ support KPI monitoring and data reporting for pharma companies?',
      description: [
        'PharmaServ gives you real-time dashboards that track new-to-brand prescriptions, total prescriptions and general brand adoption, and performance at every level.',
        'It helps business leaders make informed decisions and gives reps the clarity they need to hit targets consistently.',
      ],
    },
    {
      title:
        'What types of content can be uploaded to the PharmaServ platform for medical detailing?',
      description: [
        "PharmaServ's platform enhances efficiency by allowing bulk uploads of e-detailing content, such as product presentations, infographics, and other essential marketing materials. This enables medical reps to share important information with healthcare professionals effortlessly, ensuring they are well-equipped for meetings and interactions. PharmaServ strategically enables reps to improve communication, increase customer engagement, and deliver more impactful e-detailing presentations by facilitating easy content management and distribution. That's a win for you, and we are making that happen.",
      ],
    },
    {
      title:
        'How does PharmaServ improve communication within sales teams and with healthcare professionals?',
      description: [
        'PharmaServ unifies communication with real-time data updates and integrated messaging tools.',
        'Your sales and medical teams can collaborate easily, share insights, and provide faster services to HCPs',
      ],
    },
    {
      title:
        'What are the key advantages of using Pharmaserv for pharma sales automation?',
      description: [
        'PharmaServ automates your sales cycle from order generation to performance tracking.',
        'PharmaServ also provides access to system aggregates and analyzes information to help pharmaceutical leaders gain actionable insights into new-to-brand prescriptions (NBRx), total prescriptions (TRx) and supercharge brand adoption across different geographies & multiple platforms ',
      ],
    },
    {
      title: 'What security measures does Pharmaserv implement?',
      description: [
        'PharmaServ uses secure cloud technology, end-to-end encryption, and strict access controls to protect your data. System updates are applied regularly, keeping your company’s information safe from unauthorized access. The system can also be hosted on your server.',
      ],
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center max-xl:px-4 w-full xl:w-[1152px] mx-auto">
      <div className=" py-6 lg:pt-20  lg:pb-24">
        <div className="text-center flex flex-col items-center mb-8 ">
          <p className=" text-blue font-medium text-sm">FAQs</p>
          <h2 className="text-3xl lg:text-[40px] font-semibold text-center text-dark-gray font-sofia">
            See How PharmaServ Can Help Your Team
          </h2>
        </div>

        <div className="space-y-4 my-14">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`  xl:w-[1152px] bg-white border border-blue  p-4 lg:p-8 rounded-lg lg:rounded-[20px] transition-all duration-700 ease-in-out`}
            >
              <div className="flex items-center justify-between">
                <h3
                  className="text-base lg:text-[20px] font-semibold text-blue cursor-pointer font-sofia"
                  onClick={() => {
                    if (active.includes(index)) {
                      setActive(active.filter((id) => id !== index));
                    } else {
                      setActive([...active, index]);
                    }
                  }}
                >
                  {faq.title}
                </h3>
                <Image
                  src={'/assets/images/icons/add.svg'}
                  alt={lang('alt.plusIcon')}
                  width={24}
                  height={24}
                  className={`cursor-pointer ${
                    active.includes(index) ? 'rotate-45' : ''
                  } transition-all duration-300 ease-in-out`}
                  onClick={() => {
                    if (active.includes(index)) {
                      setActive(active.filter((id) => id !== index));
                    } else {
                      setActive([...active, index]);
                    }
                  }}
                />
              </div>
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  active.includes(index)
                    ? 'max-h-screen opacity-100'
                    : 'max-h-0 opacity-0'
                }`}
              >
                <div className="space-y-4">
                  {faq.description.map((description, id) => (
                    <p
                      key={id}
                      className={`${
                        id === 0 && 'mt-6'
                      }  text-dark-gray text-sm lg:text-base font-medium`}
                    >
                      {description}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mx-auto text-center space-y-6 flex items-center flex-col">
          <p className="text-center mx-auto text-dark-gray text-base">
            {text ||
              'Need more information about our features and how they can help you and your team?'}
          </p>
          <Button
            btnText={lang('contactButton')}
            btnType="secondary"
            className="!text-sm"
            onClick={() => {
              router.push('/contact-us');
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Faq;
