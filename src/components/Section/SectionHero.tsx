import HeroImage_1 from '../../assets/images/image-1.jpg';
import HeroImage_2 from '../../assets/images/image-2.jpg';

import CTAButton from '../CTAButton';

// @ts-ignore
import { ReactComponent as PodCastIcon } from '../../assets/icons/podcast.svg';
// @ts-ignore
import { ReactComponent as MicrophoneIcon } from '../../assets/icons/microphone.svg';
// @ts-ignore
import { ReactComponent as DotGridImage } from '../../assets/images/dot-grid.svg';

export default function SectionHero() {
  return (
    <section id="hero" className="flex text-lg text-white">
      <div className="w-1/2">
        <h1 className="text-4xl leading-snug font-bold max-w-[580px]">
          Learn How to Launch a Successful Podcast
        </h1>
        <p className="mt-6 mb-20 max-w-[433px] text-lg leading-relaxed">
          Master content planning, sound quality, engaging delivery, interviews,
          promotion, and analytics for podcast success.
        </p>
        <CTAButton>Sign Up Now</CTAButton>
      </div>
      <div className="relative left-8 grid grid-rows-5 grid-cols-11 w-1/2">
        <DotGridImage className="row-start-2 row-span-4 col-start-2 col-span-9 translate-x-[10%] -z-10" />
        <img
          src={HeroImage_2}
          className="row-start-1 row-span-5 col-start-2 col-span-9 rounded-[10px] aspect-[7/4] object-cover"
        />
        <img
          src={HeroImage_1}
          className="row-start-2 row-span-4 col-start-1 col-span-9 rounded-[10px] aspect-[7/4] object-cover"
        />
        <PodCastIcon className="absolute -right-[4.5rem] bottom-[6.5rem] scale-[80%] -rotate-[16.83deg]" />
        <MicrophoneIcon className="absolute -right-6 -bottom-10 scale-[80%] rotate-[15.14deg]" />
      </div>
    </section>
  );
}
