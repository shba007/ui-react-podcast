import PriceCard from '../PriceCard';
import ToggleButton from '../Toggle';

import {
  Splide,
  SplideTrack,
  SplideSlide,
  Options,
  // @ts-ignore
} from '@splidejs/react-splide';

import PodCastBgImage from '../../assets/images/podcast.svg?react';

const splideOption: Options = {
  arrows: false,
  pagination: false,
  padding: '1rem',
  gap: '3rem',
  focus: 'center',
  trimSpace: true,
  wheel: true,
  releaseWheel: true,
  autoWidth: true,
  breakpoints: {
    640: {
      padding: '5rem',
      gap: '1.25rem',
    },
  },
};

export default function SectionPricing() {
  const plans = [
    {
      name: 'Basic',
      price: 999,
      keypoints: [
        'Comprehensive podcasting fundamentals',
        'Basic audio equipment recommendations',
        'Support via email',
      ],
      isActive: false,
    },
    {
      name: 'Pro',
      price: 1999,
      keypoints: [
        'Advanced podcasting strategies and storytelling techniques',
        'Expanded analytics and listener feedback analysis',
        'Priority email support',
      ],
      isActive: true,
    },
    {
      name: 'Premium',
      price: 3999,
      keypoints: [
        'All features from Basic and Pro plans',
        'Personalized one-on-one coaching sessions',
        'Priority email and phone support for immediate assistance',
      ],
      isActive: false,
    },
  ];

  return (
    <section
      id="pricing"
      className="flex flex-col items-center gap-6 md:min-h-screen"
    >
      <PodCastBgImage className="absolute left-0 right-0 -z-10 -translate-y-[4.5rem]" />
      <h2 className="text-2xl md:text-4xl font-bold">Choose your plan</h2>
      {/* @ts-ignore */ /* prettier-ignore */}
      <p style={{ textWrap: 'balance' }} className="max-w-[500px] text-center text-base md:text-lg text-[Poppins] leading-relaxed" >
        Embark on your podcasting journey with our flexible and affordable
        options
      </p>
      <ToggleButton />
      <Splide
        options={splideOption}
        hasTrack={false}
        className="relative flex justify-between items-center md:mt-10 w-screen max-w-[1080px]"
      >
        <SplideTrack>
          {plans.map(({ name, price, keypoints, isActive }, index) => (
            <SplideSlide key={index}>
              <PriceCard
                name={name}
                price={price}
                keypoints={keypoints}
                isActive={isActive}
              />
            </SplideSlide>
          ))}
        </SplideTrack>
      </Splide>
    </section>
  );
}
