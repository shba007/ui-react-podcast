import CTAButton from '../CTAButton';

export default function SectionBrief() {
  return (
    <section id="brief" className="flex flex-col items-center gap-6 mb-16">
      <h2 className="w-fit text-2xl md:text-4xl text-center font-bold max-w-[80%]">
        We have what you’re looking for
      </h2>
      <p className="max-w-[596px] text-base md:text-lg font-[Poppins] text-[#8E54E9] text-center">
        Our services cater to all your requirements for a successful podcasting
        journey. Join us and start creating captivating content that leaves a
        lasting impact on your audience.
      </p>
      <CTAButton className="mt-10">Get Started Now</CTAButton>
    </section>
  );
}
