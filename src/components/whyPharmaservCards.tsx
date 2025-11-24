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
    <div className="flex gap-8 justify-center relative flex-wrap items-stretch">
      {cards.map((card, index) => (
        <div
          key={index}
          className="justify-start items-center text-start md:min-w-[300px] md:max-w-[350px]  
          max-md:z-[10]  max-md:sticky max-md:h-[60vh]  max-md:bg-[url('/assets/background_images/Background.svg')] max-md:bg-cover max-md:bg-center max-md:bg-no-repeat"
          style={{
            top: `${(index + 1) * 30 + 200}px`,
          }}
        >
          <div
            className="border p-[32px] bg-white rounded-[16px]"
            style={{
              borderColor: card.color,
            }}
          >
            <div
              className={` rounded-full w-[60px] h-[60px] flex items-center justify-center mb-12`}
              style={{
                backgroundColor: card.color,
              }}
            >
              <Image src={card.icon} alt="check" width={23} height={23} />
            </div>
            <h6 className=" text-black text-base font-bold mb-2 font-sofia">
              {card.title}
            </h6>
            <p className={`text-xs text-[#364153]`}>{card.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WhyPharmaservCards;
