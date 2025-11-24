'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useTranslations } from 'next-intl';

const Footer = () => {
  const lang = useTranslations('footer');

  return (
    <div className="bg-blue text-white m-4 rounded-[14px] py-[56px] flex items-center justify-center flex-col">
      <div className="max-xl:px-4 w-full xl:w-[1152px]">
        <div className="mb-16">
          <Link href="/" className="cursor-pointer">
            <Image
              src="/assets/images/pharmaserv_logo.svg"
              alt={lang('alt.pharmaservLogo')}
              className="mb-5"
              width={156}
              height={156}
            />
          </Link>

          <p className="text-base">
            {lang('description')} <br />
            {lang('descriptionContinued')}
          </p>
        </div>
        <div className="flex justify-between gap-4 text-base flex-wrap max-md:space-y-4">
          <div className="w-[268px] space-y-2">
            <h3 className=" font-medium">{lang('contact.title')}</h3>
            <div className="flex items-center gap-2">
              <p className="text-gray-700">{lang('contact.phone')}</p>
            </div>
            <div className="flex items-center gap-2">
              <p className="text-gray-700">{lang('contact.email')}</p>
            </div>
            <div className="flex items-center gap-2">
              <p className="text-gray-700" style={{ whiteSpace: 'pre-line' }}>
                {lang('contact.address')}
              </p>
            </div>
          </div>
          <div className="w-[268px] space-y-2">
            <h3 className=" font-medium">{lang('services.title')}</h3>
            <div className="flex items-center gap-2">
              <Link href="/products/copilot" className="text-gray-700">
                {lang('services.copilot')}
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <Link
                href="/products/field-service-management"
                className="text-gray-700"
              >
                {lang('services.fieldService')}
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <Link href="#" className="text-gray-700">
                {lang('services.aboutUs')}
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <Link href="#" className="text-gray-700">
                {lang('services.resources')}
              </Link>
            </div>
          </div>
          <div className="w-[268px] space-y-2">
            <h3 className=" font-medium">{lang('policy.title')}</h3>
            <div className="flex items-center gap-2">
              <div
                className="text-gray-700 cursor-pointer"
                onClick={() => {
                  const a = document.createElement('a');
                  a.href = '/files/Pharmaserv_Privacy_Policy.docx';
                  a.download = 'Pharmaserv_Privacy_Policy.docx';
                  a.click();
                }}
              >
                {lang('policy.privacyPolicy')}
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Link href="#" className="text-gray-700">
                {lang('policy.riskAssessmentPolicy')}
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <Link href="#" className="text-gray-700">
                {lang('policy.acceptableUsePolicy')}
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <Link href="#" className="text-gray-700">
                {lang('policy.cookiePolicy')}
              </Link>
            </div>
          </div>
        </div>
        <div className="bg-[#FFFFFF0A] rounded-2xl flex items-center justify-between my-6 py-3 px-5 max-lg:flex-col max-lg:gap-4 max-lg:items-start">
          <p className="text-white text-sm">{lang('copyright')}</p>

          <div className="flex items-center gap-4">
            <Link
              target="_blank"
              href="https://www.facebook.com/share/1ExRR4AWNf/"
              className="w-6 h-6 lg:w-10 lg:h-10 flex items-center justify-center bg-[#FFFFFF1A] rounded-full"
            >
              <Image
                src="/assets/images/socials/Clip path group (1).svg"
                alt={lang('alt.socialIcon')}
                width={8}
                height={8}
              />
            </Link>
            <Link
              target="_blank"
              href="https://x.com/pharmaserv_?t=gxNY3X_Trrma7TJcXzWVjw&s=08"
              className="w-6 h-6 lg:w-10 lg:h-10 flex items-center justify-center bg-[#FFFFFF1A] rounded-full"
            >
              <Image
                src="/assets/images/socials/SVG (8).svg"
                alt={lang('alt.socialIcon')}
                width={16}
                height={16}
              />
            </Link>
            <Link
              target="_blank"
              href="https://youtube.com/@pharmaserv?si=oIfGjOyQ20UMqmvM"
              className="w-6 h-6 lg:w-10 lg:h-10 flex items-center justify-center bg-[#FFFFFF1A] rounded-full"
            >
              <Image
                src="/assets/images/socials/SVG (9).svg"
                alt={lang('alt.socialIcon')}
                width={16}
                height={16}
              />
            </Link>
            <Link
              target="_blank"
              href="https://g.co/kgs/kWg2RUD"
              className="w-6 h-6 lg:w-10 lg:h-10 flex items-center justify-center bg-[#FFFFFF1A] rounded-full"
            >
              <Image
                src="/assets/images/socials/SVG (10).svg"
                alt={lang('alt.socialIcon')}
                width={16}
                height={16}
              />
            </Link>
            <Link
              target="_blank"
              href="https://www.instagram.com/pharmaserv?igsh=MWlwcmFhMDJhOGZ0bQ=="
              className="w-6 h-6 lg:w-10 lg:h-10 flex items-center justify-center bg-[#FFFFFF1A] rounded-full"
            >
              <Image
                src="/assets/images/socials/SVG (11).svg"
                alt={lang('alt.socialIcon')}
                width={16}
                height={16}
              />
            </Link>
            <Link
              target="_blank"
              href="https://www.linkedin.com/company/pharmaserv./"
              className="w-6 h-6 lg:w-10 lg:h-10 flex items-center justify-center bg-[#FFFFFF1A] rounded-full"
            >
              <Image
                src="/assets/images/linkedinIcon.svg"
                alt={lang('alt.socialIcon')}
                width={16}
                height={16}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
