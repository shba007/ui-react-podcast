export default function CTAButton({ children }: { children: string }) {
	return (
		<button className="rounded-[10px] px-14 py-4 text-white text-xl font-[Poppins] font-bold bg-gradient-to-r from-[#4776E6] to-[#8E54E9]">{children}</button>
	);
}
