'use client';
import Image from 'next/image';
import React from 'react';
import Button from './common/button';
import { useRouter } from 'next/navigation';

const SolutionsSection: React.FC = () => {
  const router = useRouter();

  return (
    <section className="pt-10 bg-white lg:px-20 flex flex-col items-center lg:space-y-[60px]">
      <div className="flex flex-col md:flex-row items-center justify-between xl:w-[1152px] mb-[60px] ">
        <div className="md:w-[400px] lg:w-[510px] md:pr-2 lg:pr-10 lg:mb-0 gap-8 flex order-2 md:order-1">
          <div className="">
            <h3 className="text-2xl lg:text-[40px] lg:leading-[50px] font-semibold text-[#060B13] mb-4 font-sofia">
              PharmaServ Copilot
            </h3>
            <p className="text-[#363D4F] text-sm lg:text-[15px] mb-6">
              PharmaServ Copilot aggregates and analyzes information to help
              pharmaceutical leaders gain actionable insights into new-to-brand
              prescriptions (NBRx), total prescriptions (TRx), and supercharge
              brand adoption across different geographies
            </p>
            <div className="space-y-3 mb-6 font-medium">
              <div className="flex items-center gap-2">
                <Image
                  src="/assets/images/icons/tick-circle.svg"
                  alt="icon"
                  width={22}
                  height={22}
                  className=""
                />

                <p className="text-sm lg:text-[15px] text-dark-gray ">
                  Schedule and track meetings effortlessly
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Image
                  src="/assets/images/icons/tick-circle.svg"
                  alt="icon"
                  width={22}
                  height={22}
                  className=""
                />
                <p className="text-sm lg:text-[15px] text-dark-gray">
                  Plan events, launches, and campaigns with precision
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Image
                  src="/assets/images/icons/tick-circle.svg"
                  alt="icon"
                  width={22}
                  height={22}
                />
                <p className="text-sm lg:text-[15px] text-dark-gray">
                  Access personalized insights for HCPs and HCOs
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Image
                  src="/assets/images/icons/tick-circle.svg"
                  alt="icon"
                  width={22}
                  height={22}
                />
                <p className="text-sm lg:text-[15px] text-dark-gray">
                  Conduct physical or e-detailing meetings seamlessly
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Image
                  src="/assets/images/icons/tick-circle.svg"
                  alt="icon"
                  width={22}
                  height={22}
                />
                <p className="text-sm lg:text-[15px] text-dark-gray">
                  Simplify your business processes. Focus on what truly matters.
                </p>
              </div>
            </div>
            <Button
              btnText="Learn More"
              btnType="secondary"
              btnIcon={
                <Image
                  src="/assets/images/icons/arrow-right.svg"
                  alt="icon"
                  width={18}
                  height={18}
                />
              }
              onClick={() => {
                router.push('/products/copilot');
              }}
            />
          </div>
        </div>
        <div className="lg:w-1/2 flex justify-center items-center order-1 md:order-2 max-lg:mb-8">
          <div className="max-w-[658px] max-h-[400px] bg-white rounded-lg shadow-[0px_19px_38px_-7px_rgba(16,24,40,0.14)]">
            <video
              src="https://suppliers-product-img.s3.eu-west-2.amazonaws.com/FOr%20James/Home%20page/Field%20Service%20Platform.mp4"
              poster="https://suppliers-product-img.s3.eu-west-2.amazonaws.com/FOr%20James/Home%20page/Field%20Service%20Platform.mp4"
              playsInline
              controls={true}
              autoPlay={true}
              controlsList="nodownload nofullscreen"
              muted={true}
              loop
              className={` cursor-pointer w-[100%] rounded-lg h-full hide-audio-control`}
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between xl:w-[1152px] mb-[60px] ">
        <div className="md:w-[400px] lg:w-[510px] md:pr-2 lg:pr-10 lg:mb-0 gap-8 flex  order-2 md:order-1">
          <div className="">
            <h3 className="text-2xl lg:text-[40px] lg:leading-[50px] font-semibold text-[#060B13] mb-4 font-sofia">
              Field Service Platform
            </h3>
            <p className="text-[#363D4F] text-sm lg:text-[15px] mb-6">
              Sales Representatives can now close more calls and increase
              conversions by 70% with PharmaServ’s AI-powered Field Service
              Platform.
            </p>
            <div className="space-y-3 mb-6 font-medium">
              <div className="flex items-center gap-2">
                <Image
                  src="/assets/images/icons/tick-circle.svg"
                  alt="icon"
                  width={22}
                  height={22}
                  className=""
                />

                <p className="text-sm lg:text-[15px] text-dark-gray ">
                  Manage products and orders in real time
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Image
                  src="/assets/images/icons/tick-circle.svg"
                  alt="icon"
                  width={22}
                  height={22}
                  className=""
                />
                <p className="text-sm lg:text-[15px] text-dark-gray">
                  Prioritize and qualify leads automatically
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Image
                  src="/assets/images/icons/tick-circle.svg"
                  alt="icon"
                  width={22}
                  height={22}
                />
                <p className="text-sm lg:text-[15px] text-dark-gray">
                  Schedule and optimize visits
                </p>
              </div>
              <div className="flex items-center gap-2">
                <Image
                  src="/assets/images/icons/tick-circle.svg"
                  alt="icon"
                  width={22}
                  height={22}
                />
                <p className="text-sm lg:text-[15px] text-dark-gray">
                  Track performance and coverage from one dashboard
                </p>
              </div>
            </div>
            <Button
              btnText="Learn More"
              btnType="secondary"
              btnIcon={
                <Image
                  src="/assets/images/icons/arrow-right.svg"
                  alt="icon"
                  width={18}
                  height={18}
                />
              }
              onClick={() => {
                router.push('/products/copilot');
              }}
            />
          </div>
        </div>
        <div className="lg:w-1/2 flex justify-center items-center order-1 md:order-2 max-lg:mb-8">
          <div className="max-w-[658px] max-h-[400px] bg-white rounded-lg shadow-[0px_19px_38px_-7px_rgba(16,24,40,0.14)]">
            <video
              src="https://suppliers-product-img.s3.eu-west-2.amazonaws.com/FOr%20James/Home%20page/pharmaserv%20copilot.mp4"
              poster="https://suppliers-product-img.s3.eu-west-2.amazonaws.com/FOr%20James/Home%20page/pharmaserv%20copilot.mp4"
              playsInline
              controls={true}
              autoPlay={true}
              controlsList="nodownload nofullscreen noremoteplayback"
              muted={true}
              loop
              className={` cursor-pointer w-[100%] rounded-lg h-full hide-audio-control`}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
