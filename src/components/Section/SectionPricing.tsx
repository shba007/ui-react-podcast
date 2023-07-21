import PriceCard from '../PriceCard';
import ToggleButton from '../Toggle';

// @ts-ignore
import { ReactComponent as PodCastBgImage } from '../../assets/images/podcast.svg';

export default function SectionPricing() {
  return (
    <section id="pricing" className="flex flex-col items-center gap-6 h-screen">
      <PodCastBgImage className="absolute left-0 right-0 -z-10 -translate-y-[4.5rem]" />
      <h2 className="text-3xl font-bold">Choose your plan</h2>
      <p
        className="max-w-[500px] text-center text-base text-[Poppins] leading-relaxed"
        style={{ textWrap: 'balance' }}
      >
        Embark on your podcasting journey with our flexible and affordable
        options
      </p>
      <ToggleButton />
      <ul className="flex justify-between mt-10 w-full max-w-[1080px]">
        <li>
          <PriceCard
            name="Basic"
            price={999}
            keypoints={[
              'Comprehensive podcasting fundamentals',
              'Basic audio equipment recommendations',
              'Support via email',
            ]}
          />
        </li>
        <li>
          <PriceCard
            name="Pro"
            price={1999}
            keypoints={[
              'Advanced podcasting strategies and storytelling techniques',
              'Expanded analytics and listener feedback analysis',
              'Priority email support',
            ]}
            isActive={true}
          />
        </li>
        <li>
          <PriceCard
            name="Premium"
            price={3999}
            keypoints={[
              'All features from Basic and Pro plans',
              'Personalized one-on-one coaching sessions',
              'Priority email and phone support for immediate assistance',
            ]}
          />
        </li>
      </ul>
    </section>
  );
}
