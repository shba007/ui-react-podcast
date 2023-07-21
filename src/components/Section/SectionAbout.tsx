import BgMic from '../../assets/images/bg-mic.png';

import AboutCard from '../AboutCard';
import CTAButton from '../CTAButton';

export default function SectionAbout() {
  return (
    <section id="about" className="flex gap-20 h-screen">
      <img
        src={BgMic}
        className="absolute right-0 -translate-y-64 -z-10 opacity-20"
      />
      <div className="w-3/5">
        <div className="grid grid-rows-2 grid-cols-2 justify-center items-center gap-4 mr-auto w-fit">
          <AboutCard
            title="Content Planning"
            description="Develop a compelling podcast concept and outline episodes in advance to maintain a structured and engaging format."
            className="row-start-1 col-start-1 mb-8"
          />
          <AboutCard
            title="Sound Quality"
            description="Invest in high-quality audio equipment, find a quiet recording space, and master editing techniques for clear and professional sound."
            className="row-start-1 col-start-2 mt-8"
          />
          <AboutCard
            title="Engaging Delivery"
            description="Speak clearly, use an inviting tone, and engage the audience with a conversational approach to captivate listeners."
            className="row-start-2 col-start-1 mb-8"
          />
          <AboutCard
            title="Feedback & Improvement"
            description="Seek feedback from listeners, analyze performance metrics, and continuously refine your podcast to meet audience preferences."
            className="row-start-2 col-start-2 mt-8"
          />
        </div>
      </div>
      <div className="w-2/5 my-auto">
        <h1 className="text-5xl !text-[44px] font-bold max-w-[580px]">
          About the Course
        </h1>
        <p className="mt-6 mb-12 max-w-[433px] text-lg leading-relaxed">
          You will learn content planning, sound quality, engaging delivery,
          interviews, promotion, analytics, and more to create impactful
          podcasts that captivate audiences worldwide.
        </p>
        <CTAButton>Explore Now</CTAButton>
      </div>
    </section>
  );
}
