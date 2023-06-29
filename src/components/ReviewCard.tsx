// @ts-ignore
import { ReactComponent as Star } from '../assets/icons/star.svg';
import ProfileImage from '../assets/images/profile.jpg';

export default function ReviewCard() {
	return (
		<div className="rounded-[10px] border-[0.5px] border-[#E1A6FF]/40 px-12 py-9 w-[465px] h-[238px]">
			<div className="grid grid-rows-3 grid-cols-[auto,1fr] gap-x-6">
				<img src={ProfileImage} className="row-span-3 rounded-full w-[70px] aspect-square"></img>
				<span className="col-start-2 font-bold">Lolla Smith</span>
				<span className="col-start-2 mt-auto text-sm font-[Poppins]">Microsoft</span>
				<div className="col-start-2 flex gap-2">
					<Star />
					<Star />
					<Star />
					<Star />
					<Star />
				</div>
			</div>
			<p className="mt-6 text-xs">
				Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
				when an unknown printer took a galley of type and scrambled it to make
			</p>
		</div>
	);
}
