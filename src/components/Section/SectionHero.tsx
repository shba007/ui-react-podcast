import HeroImage_1 from '../../assets/images/image-1.jpg';
import HeroImage_2 from '../../assets/images/image-2.jpg';

import CTAButton from '../CTAButton';

import PodCastIcon from '../../assets/icons/podcast.svg?react';
import MicrophoneIcon from '../../assets/icons/microphone.svg?react';
import DotGridImage from '../../assets/images/dot-grid.svg?react';

export default function SectionHero() {
  return (
    <section
      id="hero"
      className="flex flex-col gap-20 md:gap-0 md:flex-row text-lg text-white"
    >
      <div className="mx-auto flex flex-col items-center md:items-start px-2 sm:w-full md:w-1/2">
        <h1 className="max-w-[580px] text-center md:text-left text-2xl sm:text-4xl leading-snug font-bold">
          Learn How to Launch a <br /> Successful Podcast
        </h1>
        <p className="mt-6 mb-14 md:mb-20 max-w-[433px] text-center md:text-left text-base sm:text-lg leading-relaxed">
          Master content planning, sound quality, engaging delivery, interviews,
          promotion, and analytics for podcast success.
        </p>
        <CTAButton>Sign Up Now</CTAButton>
      </div>
      <div className="relative grid grid-rows-5 grid-cols-11 mx-auto w-[90%] md:w-1/2">
        <DotGridImage className="row-start-2 row-span-4 col-start-2 col-span-9 translate-x-[10%] -z-10" />
        <img
          src={HeroImage_2}
          className="row-start-1 row-span-5 col-start-2 col-span-9 rounded-[10px] aspect-[7/4] object-cover"
        />
        <img
          src={HeroImage_1}
          className="row-start-2 row-span-4 col-start-1 col-span-9 rounded-[10px] aspect-[7/4] object-cover"
        />
        <PodCastIcon className="absolute -right-[4.5rem] bottom-[6.5rem] scale-[60%] md:scale-[80%] -rotate-[16.83deg]" />
        <MicrophoneIcon className="absolute -right-6 -bottom-10 scale-[60%] md:scale-[80%] rotate-[15.14deg]" />
      </div>
    </section>
  );
}
