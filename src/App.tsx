// @ts-ignore
import { ReactComponent as HeroBgFirstImage } from './assets/images/hero-first.svg';
// @ts-ignore
import { ReactComponent as HeroBgLastImage } from './assets/images/hero-last.svg';

import NavBar from './components/Navbar';
import SectionHero from './components/Section/SectionHero';
import SectionAbout from './components/Section/SectionAbout';
import SectionPricing from './components/Section/SectionPricing';
import SectionReview from './components/Section/SectionReview';
import SectionBrief from './components/Section/SectionBrief';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative w-screen min-h-screen overflow-x-hidden">
      <HeroBgFirstImage className="absolute -left-96 md:left-0 -right-96 md:right-0 -z-10" />
      <main className="relative flex flex-col gap-8 md:gap-32 mx-auto px-4 md:px-8 pt-5 md:pt-9 max-w-[1280px]">
        <NavBar />
        <div className="flex flex-col gap-48 pt-4">
          <SectionHero />
          <SectionAbout />
          <SectionPricing />
          <SectionReview />
          <SectionBrief />
        </div>
        <Footer />
      </main>
      <HeroBgLastImage className="absolute bottom-0 -left-80 md:left-0 -right-80 md:right-0 -z-10" />
    </div>
  );
}
