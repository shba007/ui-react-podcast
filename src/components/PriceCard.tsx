export default function PriceCard({ isActive = false }: { isActive?: boolean }) {
	return (
		<div
			className={`flex flex-col gap-6 max-w-[303px] border-[0.5px] border-[#7A3199] rounded-[10px] px-7 py-9 ${
				isActive ? 'bg-[#7A3199] text-white' : 'bg-white'
			}`}
		>
			<div className="flex flex-col gap-4">
				<h6 className="font-bold">{isActive ? 'Premium Plan' : 'Basic Plan'}</h6>
				<p className="text-xs font-['Poppins']">Lorem Ipsum is simply dummy text of the printing and typesetting</p>
			</div>
			<div className={`flex items-center gap-5 ${isActive ? 'text-white' : 'text-[#7A3199]'}`}>
				<span className="text-3xl font-bold">$ 54</span>
				<span className="font-[Poppins]">/month</span>
			</div>
			<ul className="flex flex-col gap-2 text-xs list-['●']">
				<li className="pl-3">Free access to video class</li>
				<li className="pl-3">Free access to video class</li>
				<li className="pl-3">Free access to video class</li>
			</ul>
			<button className="rounded-[5px] border-[0.5px] border-[#7A3199] hover:border-white px-8 py-[14px] w-fit bg-white hover:bg-[#7A3199] text-[#7A3199] hover:text-white text-xs font-[Poppins] transition-colors duration-200">
				Start Free Trial
			</button>
		</div>
	);
}
