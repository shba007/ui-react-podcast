// @ts-ignore
import { ReactComponent as HeroBgFirstImage } from './assets/images/hero-first.svg';
// @ts-ignore
import { ReactComponent as HeroBgLastImage } from './assets/images/hero-last.svg';

import NavBar from './components/Navbar';
import Footer from './components/Footer';
import SectionHero from './components/Section/SectionHero';
import SectionAbout from './components/Section/SectionAbout';
import SectionPricing from './components/Section/SectionPricing';
import SectionReview from './components/Section/SectionReview';
import SectionBrief from './components/Section/SectionBrief';

export default function App() {
  return (
    <main className="flex flex-col gap-32 mx-auto w-full px-8 pt-9 max-w-[1280px] ">
      <HeroBgFirstImage className="absolute top-0 left-0 right-0 -z-10" />
      <NavBar />
      <div className="flex flex-col gap-48">
        <SectionHero />
        <SectionAbout />
        <SectionPricing />
        <SectionReview />
        <SectionBrief />
      </div>
      <Footer />
      <HeroBgLastImage className="absolute bottom-0 left-0 right-0 -z-10" />
    </main>
  );
}
