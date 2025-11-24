'use client';
import Image from 'next/image';
import React, { useEffect, useRef } from 'react';

const LogoSection = ({ logos, widthClassName, scrollerInnerClassName }: { logos: { src: string; alt: string }[], widthClassName?: string, scrollerInnerClassName?: string }) => {
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const addAnimation = (scrollerElement: HTMLDivElement | null) => {
      if (!scrollerElement) return; // Ensure the element exists

      // Check if the animation is already applied to prevent re-duplication on re-renders
      if (scrollerElement.dataset.animated === 'true') {
        return;
      }

      const scrollerInner = scrollerElement.querySelector(
        '.scroller__inner',
      ) as HTMLElement;
      if (!scrollerInner) return;

      // Clear existing children to prevent multiple duplications on re-renders
      // This is important if the component re-renders but the scroller element itself doesn't change
      // A more robust solution might be to check if children are already duplicated,
      // but for simplicity, we'll clear and re-add if needed.
      // However, for this specific animation, it's better to ensure it only runs once.

      const scrollerContent = Array.from(
        scrollerInner.children,
      ) as HTMLElement[];

      // Only add animation if the scroller has enough content to scroll
      // and if it hasn't been animated yet.
      if (
        scrollerContent.length > 0 &&
        scrollerElement.dataset.animated !== 'true'
      ) {
        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true) as HTMLElement;
          duplicatedItem.setAttribute('aria-hidden', 'true');
          scrollerInner.appendChild(duplicatedItem);
        });
        scrollerElement.dataset.animated = 'true'; // Mark as animated
      }
    };

    // Apply animation to both scroller instances
    addAnimation(scrollerRef.current);
    // addAnimation(scrollerRef2.current);

    // Cleanup function (optional for this specific animation, as it's a one-time duplication)
    // If you were adding event listeners, you'd remove them here.
    return () => {
      // No specific cleanup needed for cloneNode, but good practice for useEffect
    };
  }, []);

  return (
    <div className="">
      <div className="flex flex-col  items-center justify-center">
        <div
          className={`max-xl:px-4 w-[90vw] xl:w-[1152px] ${widthClassName}`}
        >
        {/* <div className="max-xl:px-4 w-[100px]"> */}
          <div className="scroller" ref={scrollerRef}>
            <div className={`flex items-center justify-around gap-10 lg:gap-20 scroller__inner ${scrollerInnerClassName}`}>
              {logos?.map((logo, index) => (
                <Image
                  key={index}
                  src={logo.src}
                  alt={logo.alt}
                  width={120}
                  height={40}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoSection;
