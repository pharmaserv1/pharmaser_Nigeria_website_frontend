'use client';
import Faq from '@/components/faq';
import Footer from '@/components/footer';
import HcpEngagement from '@/components/hcpEngagement';
import Header from '@/components/Header';
import HeroSection from '@/components/heroSection';
import LogoSection from '@/components/logoSection';
import PlatformOverview from '@/components/platformOverview';
import SolutionsSection from '@/components/solutionsSections';
import Testimonials from '@/components/testimonials';
import WhyPharmaservCards from '@/components/whyPharmaservCards';

export default function Home() {
  // const lang = useTranslations('HomePage');

  return (
    <div className="inter antialiased ">
      <Header />
      <main className="pt-[60px] ">
        <HeroSection />

        {/* our solutions */}
        <section className="py-[60px] px-4">
          <div className="bg-white text-center  flex flex-col items-center space-y-6 mb-14">
            <p className="bg-light-blue text-blue font-medium text-sm rounded-[30px] py-2 px-6 w-fit">
              Our Solutions
            </p>
            <h2 className="text-3xl lg:text-[40px] lg:leading-[52px] font-semibold text-center text-dark-gray !font-sofia">
              Explore PharmaServ’s Omnichannel
              <br className="" />
              AI-Powered Solutions
            </h2>
          </div>
          <SolutionsSection />
        </section>

        <HcpEngagement />

        {/* why pharmaserve */}

        <section className="bg-[url('/assets/background_images/Background.svg')] bg-cover bg-center bg-no-repeat mt-8 ">
          <div className=" text-center pt-24  mx-auto space-y-6 px-4 flex flex-col items-center max-w-[1280px]">
            <div className="sticky top-[100px] z-[9]  flex flex-col items-center">
              <p className=" text-blue font-bold text-2xl lg:text-4xl py-2 px-6 w-fit">
                Why PharmaServ Works for You
              </p>
              <h2 className="text-base lg:text-xl text-center font-semibold text-black pb-10 font-sofia max-w-[957px]">
                We&apos;ve designed PharmaServ around what Pharma teams need
                most... clarity, efficiency, and control. <br />
                Here&apos;s how we help you stand out in a crowded market.
              </h2>
            </div>
            <WhyPharmaservCards />
          </div>
        </section>

        {/* trusted by */}

        <section className="flex flex-col  items-center justify-center bg-white">
          <div className="max-xl:px-4 w-full xl:w-[1152px]">
            <div className="bg-white text-center pt-12  flex flex-col items-center space-y-10 px-4 ">
              <p className="bg-[#008CFF33] text-blue font-blue font-medium text-sm rounded-[30px] py-2 px-6 w-fit">
                Our Clients
              </p>
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
            {/* <div className="">
              <CounterSection />
            </div> */}
          </div>
        </section>

        <Testimonials />
        <Faq />
      </main>
      <PlatformOverview hcp={true} />
      <Footer />
    </div>
  );
}
