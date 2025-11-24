'use client';
import Image from 'next/image';
import React from 'react';
import Button from './common/button';
import { useRouter } from 'next/navigation';

const Testimonials = ({ hideButton }: { hideButton?: boolean }) => {
  const router = useRouter();

  const testimonials = [
    {
      name: 'Mrs Ijeoma',
      position: 'Director Marketing & Sales',
      company: '- Grinta Pharma',
      quote:
        'Personalization at scale made my MSR more proactive and daily task execution much easier.',
    },
    {
      name: 'Mohamed Attye',
      position: 'CEO',
      company: '- Global Care Distribution',
      quote:
        'Impressive software tool for healthcare brands, with an amazing team and strong industry insights. Keep up the great work.',
    },

    {
      name: 'Justin Biaye',
      // position: 'Head of Commercial Strategy',
      company: 'PROMOTION MEDICALE DU SENEGAL',
      quote:
        'This tool is a better guide for our business. It helps us plan our visits well and serves as a memory aid when we forget the name of a prospect already registered. Simple and easy to use.',
    },
    {
      name: 'Aliou Ndiaye',
      // position: 'Marketing Lead',
      company: 'PROMOTION MEDICALE DU SENEGAL',
      quote:
        'This app is both practical and effective, and it makes working with healthcare professionals much easier. Well done PharmaServ!',
    },
    // {
    //   name: 'Mrs Ruth',
    //   position: 'Regional Director',
    //   company: '- VitaWell Pharmaceuticals',
    //   quote:
    //     'We can focus on selling, knowing our data and processes meet every regulatory standard.',
    // },
    // {
    //   name: 'Mr David',
    //   position: 'National Sales Head',
    //   company: '- CurePath Pharma',
    //   quote:
    //     'Now our reps spend more time with HCPs and less on admin tasks, driving real productivity ',
    // },
  ];

  return (
    <section className="">
      <div className="bg-[url('/assets/background_images/Background2.svg')] bg-cover bg-no-repeat h-[50px] bg-[#f7f8fa]"></div>
      <div className=" bg-[#f7f8fa]  text-center mx-auto space-y-6 px-4 flex flex-col items-center w-full">
        <div className="max-w-[1280px] mx-auto">
          <div className=" flex flex-col items-center">
            <p className=" text-blue font-medium text-xl py-2 px-6 w-fit">
              Our Reviews
            </p>
            <h2 className="text-2xl lg:text-4xl text-center font-semibold text-dark-gray pb-10 font-sofia">
              See what our customers are saying
            </h2>
          </div>
          <div
            className={`flex flex-wrap gap-8 justify-center items-stretch ${
              hideButton ? 'mb-6' : ''
            }`}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white rounded-[16px] p-8 w-[90%] max-w-[90%] sm:w-[405px] flex flex-col border border-[#DCE4E8]"
              >
                <div className="flex justify-between items-center gap-2">
                  <div className="flex gap-4 items-center">
                    <Image
                      src="/assets/images/testimonial.svg"
                      alt="testimonial icon"
                      width={40}
                      height={40}
                    />{' '}
                    <p className="text-blue text-sm text-left">
                      {testimonial.name} <br />
                      {testimonial.position && (
                        <span className="">
                          {testimonial.position} <br />
                        </span>
                      )}
                      {testimonial.company}
                    </p>
                  </div>
                  <p className="text-blue text-base">
                    <Image
                      src="/assets/images/quote.svg"
                      alt="icon"
                      width={30}
                      height={20}
                    />
                  </p>
                </div>
                <p className="text-[#364153] text-sm pt-[30px] text-left">
                  {testimonial.quote}
                </p>
              </div>
            ))}
          </div>
          {!hideButton && (
            <div className="flex flex-col items-center justify-center gap-6 my-10">
              <p className="text-blue text-base">
                Need more information about our features and how they can help
                you and your team?
              </p>
              <Button
                btnText="Contact Us"
                btnType="secondary"
                onClick={() => {
                  router.push('/contact-us');
                }}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
