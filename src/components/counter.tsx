'use client';
import React, { useRef, useEffect, useState } from 'react';
// import { useTranslations } from 'next-intl';

// Custom hook for the counting animation
const useCounterAnimation = (targetValue: number, duration: number = 2000) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null); // Ref for the element to observe
  const hasStarted = useRef(false); // To ensure animation runs only once

  useEffect(() => {
    // Reset the animation state when dependencies change
    hasStarted.current = false;
    setCount(0);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasStarted.current) {
            hasStarted.current = true; // Mark as started
            let startTimestamp: number | null = null;
            const animateCount = (timestamp: number) => {
              if (!startTimestamp) startTimestamp = timestamp;
              const progress = timestamp - startTimestamp;
              const currentCount = Math.min(
                targetValue,
                Math.ceil((progress / duration) * targetValue),
              );
              setCount(currentCount);

              if (progress < duration) {
                requestAnimationFrame(animateCount);
              }
            };
            requestAnimationFrame(animateCount);
            observer.unobserve(entry.target); // Stop observing once animation starts
          }
        });
      },
      {
        threshold: 0.5, // Trigger when 50% of the component is visible
      },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [targetValue, duration]); // Re-run if targetValue or duration changes

  return [ref, count];
};

interface CounterItemProps {
  target: number;
  label: string;
  duration?: number; // Optional duration for the animation
}

const CounterItem: React.FC<CounterItemProps> = ({
  target,
  label,
  duration,
}) => {
  const [ref, count] = useCounterAnimation(target, duration) as [
    React.RefObject<HTMLDivElement>,
    number,
  ];

  // Function to format number with commas and add a '+' sign
  const formatNumber = (num: number) => {
    return num.toLocaleString() + '+';
  };

  return (
    <div ref={ref} className="flex flex-col items-center text-center px-4 py-6">
      <h3 className="text-2xl lg:text-4xl text-dark-gray mb-2">
        {formatNumber(count)}
      </h3>
      <p className="text-sm lg:text-base text-[#6A7282] max-w-[170px]">
        {label}
      </p>
    </div>
  );
};

const CounterSection: React.FC = () => {
  // const lang = useTranslations('counterSection');

  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
        <CounterItem target={4834} label="Agents" />
        <CounterItem target={24834} label="Users Worldwide" />
        <CounterItem
          target={49834}
          label="Integration with technology partners"
        />
      </div>
    </section>
  );
};

export default CounterSection;
