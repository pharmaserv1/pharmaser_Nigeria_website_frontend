'use client';
import PlatformOverview from '@/components/platformOverview';
import Image from 'next/image';
import React, { useState } from 'react';
import Faq from '@/components/faq';
import LogoSection from '@/components/logoSection';
import Testimonials from '@/components/testimonials';
import Button from '@/components/common/button';
import { toast } from 'sonner';

const Page = () => {
  // const lang = useTranslations();
  const [loading, setLoading] = useState(false);
  const [contactData, setContactData] = useState<{
    name: string;
    phoneNumber: string;
    email: string;
    companyName: string;
    message: string;
  }>({
    name: '',
    phoneNumber: '',
    email: '',
    companyName: '',
    message: '',
  });

  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e?.target;

    setContactData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const body = {
        email: contactData.email,
        name: contactData.name,
        companyName: contactData.companyName,
        message: contactData.message,
        phoneNumber: contactData.phoneNumber,
      };
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASEURL}/api/v1/lead/contact-us`,
        {
          method: 'POST',
          body: JSON.stringify(body),
          headers: {
            'Content-Type': 'application/json',
          },
        },
      );
      const data = await response.json();
      if (data?.status) {
        setContactData({
          phoneNumber: '',
          email: '',
          name: '',
          companyName: '',
          message: '',
        });
        toast.success('Message sent successfully');
      } else {
        toast.error('An error occurred, try again');
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div
        className={`bg-[url("/assets/background_images/usecaseBackground.svg")] bg-cover bg-center flex flex-col  gap-8 px-4  xl:px-[72px] py-[72px] lg:py-[100px]`}
      >
        <div className="flex items-center justify-between gap-8 max-lg:flex-col">
          <div className=" space-y-6 text-center lg:text-left  lg:max-w-[704px] max-lg:flex max-lg:flex-col max-lg:items-center">
            <p className="bg-[#060B1326] text-[#060B13] font-medium text-sm rounded-[30px] py-2 px-6 w-fit">
              We Are Here To Help
            </p>
            <h1
              className={`text-3xl lg:text-[56px] lg:leading-[65px]  mb-5 text-dark-gray font-semibold font-sofia max-w-[600px]`}
            >
              PharmaServ <br />
              Help Center
            </h1>
            <p
              className={`text-sm lg:text-base text-dark-gray mb-8 !max-w-[533px]`}
            >
              Discover a wealth of resources and personalized assistance
              designed to empower you on your journey. PharmaServ Help Center is
              your go-to destination for answers, and a helping hand whenever
              you need it.
            </p>
          </div>

          <div className="bg-white rounded-[12px] flex flex-col items-center justify-center  max-w-[592px] p-1 shadow-[0px_0px_0px_4px_rgba(255,255,255,1),0px_16px_96px_0px_rgba(6,11,19,0.06)]">
            <div className="border border-[#E9EBF1] rounded-[12px] p-12">
              <h1 className="text-xl text-[#060B13] text-inter mb-10 font-medium">
                How can we help you?
              </h1>
              <form className="" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-4 gap-y-4 lg:gap-y-6">
                  <div className="floating-label-group">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={contactData?.name || ''}
                      onChange={(e) => handleFormChange(e)}
                      placeholder=""
                      required={true}
                      className="floating-input peer w-full p-4 rounded-[12px] focus:outline-none bg-[#F7F8FA] text-[#979FB4]"
                    />
                    <label
                      htmlFor="name"
                      className="floating-label peer-focus:text-blue-700 peer-focus:text-xs peer-focus:-top-3  peer-focus:px-1 peer-focus:font-semibold peer-not-placeholder-shown:text-blue-700 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:-top-3 peer-not-placeholder-shown:bg-[#fff] peer-not-placeholder-shown:px-1 peer-not-placeholder-shown:font-semibold peer-focus:bg-[#fff]"
                    >
                      Full Name
                    </label>
                  </div>
                  <div className="floating-label-group">
                    <input
                      type="email"
                      id="email"
                      placeholder=""
                      name="email"
                      value={contactData?.email || ''}
                      onChange={(e) => handleFormChange(e)}
                      required={true}
                      className="floating-input peer w-full p-4 rounded-[12px] focus:outline-none bg-[#F7F8FA] text-[#979FB4]"
                    />
                    <label
                      htmlFor="email"
                      className="floating-label peer-focus:text-blue-700 peer-focus:text-xs peer-focus:-top-3  peer-focus:px-1 peer-focus:font-semibold peer-not-placeholder-shown:text-blue-700 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:-top-3 peer-not-placeholder-shown:bg-[#fff] peer-not-placeholder-shown:px-1 peer-not-placeholder-shown:font-semibold peer-focus:bg-[#fff]"
                    >
                      Email
                    </label>
                  </div>

                  <div className="floating-label-group">
                    <input
                      type="tel"
                      id="phoneNumber"
                      placeholder=""
                      value={contactData?.phoneNumber || ''}
                      name="phoneNumber"
                      onChange={(e) => handleFormChange(e)}
                      required={true}
                      className="floating-input peer w-full p-4 rounded-[12px] focus:outline-none bg-[#F7F8FA] text-[#979FB4]"
                    />
                    <label
                      htmlFor="phoneNumber"
                      className="floating-label peer-focus:text-blue-700 peer-focus:text-xs peer-focus:-top-3  peer-focus:px-1 peer-focus:font-semibold peer-not-placeholder-shown:text-blue-700 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:-top-3 peer-not-placeholder-shown:bg-[#fff] peer-not-placeholder-shown:px-1 peer-not-placeholder-shown:font-semibold peer-focus:bg-[#fff]"
                    >
                      Number
                    </label>
                  </div>

                  <div className="floating-label-group">
                    <input
                      type="text"
                      id="companyName"
                      name="companyName"
                      placeholder=""
                      value={contactData?.companyName || ''}
                      onChange={(e) => handleFormChange(e)}
                      required={true}
                      className="floating-input peer w-full p-4 rounded-[12px] focus:outline-none bg-[#F7F8FA] text-[#979FB4]"
                    />
                    <label
                      htmlFor="companyName"
                      className="floating-label peer-focus:text-blue-700 peer-focus:text-xs peer-focus:-top-3  peer-focus:px-1 peer-focus:font-semibold peer-not-placeholder-shown:text-blue-700 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:-top-3 peer-not-placeholder-shown:bg-[#fff] peer-not-placeholder-shown:px-1 peer-not-placeholder-shown:font-semibold peer-focus:bg-[#fff]"
                    >
                      Company Name
                    </label>
                  </div>
                  <div className="floating-label-group md:col-span-2  ">
                    <textarea
                      id="message"
                      rows={5}
                      name="message"
                      value={contactData?.message || ''}
                      onChange={(e) => handleFormChange(e)}
                      required={true}
                      placeholder=""
                      className="floating-textarea peer w-full p-4  rounded-[12px] focus:outline-none bg-[#F7F8FA] text-[#979FB4] resize-y"
                    ></textarea>
                    <label
                      htmlFor="message"
                      className="floating-label textarea-floating-label peer-focus:text-blue-700 peer-focus:text-xs peer-focus:-top-3 peer-focus:bg-[#fff] peer-focus:px-1 peer-focus:font-semibold peer-not-placeholder-shown:text-blue-700 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:-top-3 peer-not-placeholder-shown:bg-[#fff] peer-not-placeholder-shown:px-1 peer-not-placeholder-shown:font-semibold "
                    >
                      Message
                    </label>
                  </div>
                </div>

                <div className="text-center mx-auto pt-4 flex items-center justify-center flex-col">
                  <Button
                    btnText={loading ? 'Sending...' : 'Send Message'}
                    btnType="secondary"
                    className="w-full !justify-center"
                    type="submit"
                  />
                  <p className="text-[#363D4F] text-sm mt-4">
                    We reply within 24 hours, send us your messages
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white flex items-center justify-center py-12">
        <div className="max-w-[1280px] mx-auto flex gap-8 flex-wrap items-center justify-center">
          <div className="w-[334px] rounded-[12px] border border-[#E9EBF1]  p-1 bg-white">
            <div className="bg-[#F7F8FA] flex flex-col items-center justify-center rounded-[12px] p-6">
              <div className="w-16 h-16 rounded-full border border-[#E9EBF1] flex items-center justify-center mb-6">
                <Image
                  src="/assets/icons/contactIcon1.svg"
                  alt="icon"
                  width={36}
                  height={36}
                  className="max-md:w-full"
                />
              </div>
              <p className="text-[#060B13] text-xl font-medium mb-3">
                Message Us
              </p>
              <p className="text-base text-[#363D4F]">pharmservng@gmail.com</p>
            </div>
          </div>
          <div className="w-[334px] rounded-[12px] border border-[#E9EBF1]  p-1 bg-white">
            <div className="bg-[#F7F8FA] flex flex-col items-center justify-center rounded-[12px] p-6">
              <div className="w-16 h-16 rounded-full border border-[#E9EBF1] flex items-center justify-center mb-6">
                <Image
                  src="/assets/icons/contactIcon2.svg"
                  alt="icon"
                  width={36}
                  height={36}
                  className="max-md:w-full"
                />
              </div>
              <p className="text-[#060B13] text-xl font-medium mb-3">
                Call Us!
              </p>
              <p className="text-base text-[#363D4F]">(01) 0000 0000</p>
            </div>
          </div>
          <div className="w-[334px] rounded-[12px] border border-[#E9EBF1]  p-1 bg-white">
            <div className="bg-[#F7F8FA] flex flex-col items-center justify-center rounded-[12px] p-6">
              <div className="w-16 h-16 rounded-full border border-[#E9EBF1] flex items-center justify-center mb-6">
                <Image
                  src="/assets/icons/contactIcon3.svg"
                  alt="icon"
                  width={36}
                  height={36}
                  className="max-md:w-full"
                />
              </div>
              <p className="text-[#060B13] text-xl font-medium mb-3">Address</p>
              <p className="text-base text-[#363D4F]">Ontario, Canada</p>
            </div>
          </div>
        </div>
      </div>
      <Testimonials hideButton={true} />

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
      <Faq text="Not sure which features fit your team? Contact us and we’ll guide you." />

      <PlatformOverview
        hcp={true}
        text="Whether you’re reaching new prescribers or strengthening relationships with long-term partners, PharmaServ makes engagement easy, measurable, and compliant helping you expand access and adoption for every treatment."
      />
    </div>
  );
};

export default Page;
