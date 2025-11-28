import Image from 'next/image';
import React from 'react';

const WhyPharmaservCards = () => {
  const cards = [
    {
      title: 'Enhanced Client Satisfaction',
      description:
        'Delight your customers and speed up sales with tools that personalize experiences, simplify updates, and help you build lasting HCP relationships.',
      color: '#FF5E99',
      icon: '/assets/images/icons/SVG (2).svg',
    },
    {
      title: 'Effective Field Management',
      description:
        'Monitor field staff performance, manage invoicing, orders, and schedules all in one place. Keep operations compliant and organized, no matter the team size.',
      color: '#00C2FF',
      icon: '/assets/images/icons/SVG (4).svg',
    },
    {
      title: 'Real-Time GPS Geo Facing',
      description:
        'Verify rep locations instantly with accurate, real-time geo-fencing. No guesswork, no manual reporting, just accountability that builds trust.',
      color: '#FFC529',
      icon: '/assets/images/icons/SVG (5).svg',
    },
    {
      title: 'Field Sales Analytics',
      description:
        'Turn field data into strategy. Identify growth opportunities, track progress, and make decisions that drive higher performance across every region.',
      color: '#84D72F',
      icon: '/assets/images/icons/SVG (7).svg',
    },
    {
      title: 'Improved Communication',
      description:
        'Stay connected and aligned with your team through automated updates, smart notifications, and data-backed communication that enhances coordination.',
      color: '#2A9DF4',
      icon: '/assets/images/icons/SVG (6).svg',
    },

    {
      title: 'Optimized Medical Detailing',
      description:
        'Real-time tracking and reporting help streamline workflows, boost productivity, and ensure every HCP engagement is consistent and compliant.',
      icon: '/assets/images/icons/SVG (3).svg',
      color: '#C142F5',
    },
  ];

  return (
    <div className="flex flex-col gap-4 justify-start items-start text-start relative z-[10] ">
      {cards.map((card, index) => (
        <div
          key={index}
          className="flex flex-col gap-4 justify-start items-center text-start z-[10] h-[80vh] sticky w-[100vw] bg-[url('/assets/background_images/Background.svg')] "
          style={{
            // borderColor: card.color,
            top: `${(index + 1) * 30 + 200}px`,
            // boxShadow: `0px 4px 20px -5px ${card.color}33`,
          }}
        >
          <div
            className={`  w-[95%] px-4 md:px-[50px] pt-12 md:pt-[66px] sm:max-w-[600px] md:max-w-[775px] bg-white rounded-[16px] p-4 border z-[10]`}
            style={{
              borderColor: card.color,
              // top: ` ${(index + 1) * 50 + 100}px`,
              boxShadow: `0px 4px 20px -5px ${card.color}33`,
            }}
          >
            <div
              className={` rounded-full w-[60px] h-[60px] flex items-center justify-center mb-6`}
              style={{
                backgroundColor: card.color,
              }}
            >
              <Image src={card.icon} alt="check" width={28} height={28} />
            </div>
            <h3 className="text-2xl lg:text-4xl text-black mb-4 font-sofia">
              {card.title}
            </h3>
            <p
              className={`text-base lg:text-lg text-[#364153]`}
            >
              {card.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WhyPharmaservCards;
