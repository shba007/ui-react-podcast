import NavBar from './components/Navbar';
import CTAButton from './components/CTAButton';
import { ReactComponent as HeroBgFirst } from './assets/images/hero-first.svg';
import { ReactComponent as HeroBgLast } from './assets/images/hero-last.svg';
import HeroImage_1 from './assets/images/image-1.jpg';
import HeroImage_2 from './assets/images/image-2.jpg';
import BgMic from './assets/images/bg-mic.png';
import AboutCard from './components/AboutCard';
import PriceCard from './components/PriceCard';

export default function App() {
	return (
		<main className="flex flex-col gap-32 mx-auto w-full px-8 py-9 max-w-[1080px] h-[3300px]">
			<HeroBgFirst className="absolute top-0 left-0 right-0 -z-10" />
			<NavBar />
			<section className="flex text-lg text-white">
				<div className="w-1/2">
					<h1 className="text-5xl font-bold max-w-[580px]">Learn how to launch a successful podcast</h1>
					<p className="mt-6 mb-20 max-w-[433px] text-sm !text-[16px]">
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
						1500s
					</p>
					<CTAButton>Sign Up Now</CTAButton>
				</div>
				<div className="grid grid-rows-4 grid-cols-9 w-1/2">
					<img src={HeroImage_2} className="row-start-1 row-span-5 col-start-2 col-span-8 rounded-[10px] aspect-[7/4] object-cover" />
					<img src={HeroImage_1} className="row-start-2 row-span-5 col-start-1 col-span-8 rounded-[10px] aspect-[7/4] object-cover" />
				</div>
			</section>
			<section className="flex gap-20 mt-28">
				<img src={BgMic} className="absolute right-0 -translate-y-64 -z-10 opacity-20" />
				<div className="w-3/5">
					<div className="grid grid-rows-2 grid-cols-2 justify-center items-center gap-4 mr-auto w-fit">
						<AboutCard className="row-start-1 col-start-1 mb-8" />
						<AboutCard className="row-start-1 col-start-2 mt-8" />
						<AboutCard className="row-start-2 col-start-1 mb-8" />
						<AboutCard className="row-start-2 col-start-2 mt-8" />
					</div>
				</div>
				<div className="w-2/5 my-auto">
					<h1 className="text-5xl !text-[44px] font-bold max-w-[580px]">About the Course</h1>
					<p className="mt-6 mb-12 max-w-[433px] text-sm !text-[16px]">
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
						1500s, when an unkno
					</p>
					<CTAButton>Explore Now</CTAButton>
				</div>
			</section>
			<section>
				<h2>Choose your plan</h2>
				<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
				<div>Toggle</div>
				<ul>
					<li>
						<PriceCard />
					</li>
					<li>
						<PriceCard />
					</li>
					<li>
						<PriceCard />
					</li>
				</ul>
			</section>
			<section>Review section</section>
			<section>Get started now section</section>
			<footer>Footer</footer>
			<HeroBgLast className="absolute bottom-0 left-0 right-0 -z-10" />
		</main>
	);
}
