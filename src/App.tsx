import { useState } from 'react';
// @ts-ignore
import { Splide, SplideTrack, SplideSlide, Options } from '@splidejs/react-splide';
// @ts-ignore
import { ReactComponent as ArrowIcon } from './assets/icons/arrow.svg';
// @ts-ignore
import { ReactComponent as PodCastIcon } from './assets/icons/podcast.svg';
// @ts-ignore
import { ReactComponent as MicrophoneIcon } from './assets/icons/microphone.svg';
// @ts-ignore
import { ReactComponent as HeroBgFirstImage } from './assets/images/hero-first.svg';
// @ts-ignore
import { ReactComponent as DotGridImage } from './assets/images/dot-grid.svg';
// @ts-ignore
import { ReactComponent as PodCastBgImage } from './assets/images/podcast.svg';
// @ts-ignore
import { ReactComponent as HeroBgLastImage } from './assets/images/hero-last.svg';
import HeroImage_1 from './assets/images/image-1.jpg';
import HeroImage_2 from './assets/images/image-2.jpg';
import BgMic from './assets/images/bg-mic.png';

import NavBar from './components/Navbar';
import CTAButton from './components/CTAButton';
import AboutCard from './components/AboutCard';
import PriceCard from './components/PriceCard';
import ReviewCard from './components/ReviewCard';
import Footer from './components/Footer';
import ToggleButton from './components/Toggle';

const splideOption: Options = {
	arrows: true,
	pagination: true,
	classes: {
		pagination: 'pagination',
		page: 'pagination-page',
	},
	padding: '11rem',
	gap: '2rem',
	trimSpace: true,
	autoWidth: true,
};

export default function App() {
	const [slideState, setSlideState] = useState<'first' | 'last' | 'middle'>('first');

	function onMove(_slide: any, list: { items: string | any[] }, _prev: any, curr: { page: number }) {
		if (curr?.page === undefined) return;

		if (curr.page < 1) setSlideState('first');
		else if (curr.page > list.items.length - 2) setSlideState('last');
		else setSlideState('middle');
	}

	return (
		<main className="flex flex-col gap-32 mx-auto w-full px-8 pt-9 max-w-[1080px] ">
			<HeroBgFirstImage className="absolute top-0 left-0 right-0 -z-10" />
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
				<div className="relative left-8 grid grid-rows-5 grid-cols-11 w-1/2">
					<DotGridImage className="row-start-2 row-span-4 col-start-2 col-span-9 translate-x-[10%] -z-10" />
					<img src={HeroImage_2} className="row-start-1 row-span-5 col-start-2 col-span-9 rounded-[10px] aspect-[7/4] object-cover" />
					<img src={HeroImage_1} className="row-start-2 row-span-4 col-start-1 col-span-9 rounded-[10px] aspect-[7/4] object-cover" />
					<PodCastIcon class="absolute -right-[4.5rem] bottom-[6.5rem] scale-[80%] -rotate-[16.83deg]" />
					<MicrophoneIcon class="absolute -right-6 -bottom-10 scale-[80%] rotate-[15.14deg]" />
				</div>
			</section>
			<section id="about" className="flex gap-20 pt-40">
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
			<section id="pricing" className="flex flex-col items-center gap-6 pt-16">
				<PodCastBgImage className="absolute left-0 right-0 -z-10 -translate-y-[4.5rem]" />
				<h2 className="text-3xl font-bold">Choose your plan</h2>
				{/* @ts-ignore */}
				<p className="max-w-[455px] text-center text-sm text-[Poppins]" style={{ textWrap: 'balance' }}>
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
				</p>
				<ToggleButton />
				<ul className="flex justify-between mt-10 w-full">
					<li>
						<PriceCard />
					</li>
					<li>
						<PriceCard isActive={true} />
					</li>
					<li>
						<PriceCard />
					</li>
				</ul>
			</section>
			<section id="review" className="flex flex-col gap-6 pt-36">
				<h2 className="text-4xl font-bold">Review from customers</h2>
				<p className="max-w-[400px] text-xs font-[Poppins]">
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry
				</p>
				<div className="absolute mt-32 left-0 w-screen">
					<Splide options={splideOption} hasTrack={false} onPaginationUpdated={onMove}>
						<SplideTrack>
							<SplideSlide>
								<ReviewCard />
							</SplideSlide>
							<SplideSlide>
								<ReviewCard />
							</SplideSlide>
							<SplideSlide>
								<ReviewCard />
							</SplideSlide>
							<SplideSlide>
								<ReviewCard />
							</SplideSlide>
							<SplideSlide>
								<ReviewCard />
							</SplideSlide>
						</SplideTrack>
						<div className="splide__arrows absolute flex justify-between left-1/2 -translate-x-1/2 -translate-y-52 w-[70%]">
							<button
								className={`splide__arrow splide__arrow--prev p-1 bg-[#E1A6FF]/40 hover:bg-[#E1A6FF] transition-colors duration-200 rounded-full ${
									slideState === 'first' ? 'invisible' : 'visible'
								}`}
							>
								<ArrowIcon />
							</button>
							<button
								className={`splide__arrow splide__arrow--next transform rotate-180 p-1 bg-[#E1A6FF]/40 hover:bg-[#E1A6FF] transition-colors duration-200 rounded-full ${
									slideState === 'last' ? 'invisible' : 'visible'
								}`}
							>
								<ArrowIcon />
							</button>
						</div>
					</Splide>
				</div>
				{/* Placeholder */}
				<div className="mt-1 invisible">
					<ReviewCard />
				</div>
			</section>
			<section className="flex flex-col items-center gap-6 mt-28">
				<h2 className="w-fit text-3xl font-bold">We have what you’re looking for</h2>
				<p className="max-w-[596px] text-xs font-[Poppins] text-[#8E54E9] text-center">
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the
					1500s, when an unknown printer took a galley of type a
				</p>
				<CTAButton className="mt-10">Get Started Now</CTAButton>
			</section>
			<Footer />
			<HeroBgLastImage className="absolute bottom-0 left-0 right-0 -z-10" />
		</main>
	);
}
