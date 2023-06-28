export default function AboutCard({ className }: { className?: string }) {
	return (
		<div className={`flex flex-col gap-4 border-[0.5px] border-[#7A3199] rounded-[10px] p-7 max-w-[268px] aspect-[67/40] font-[Poppins] ${className}`}>
			<h4 className="text-xl font-bold">Interactive Features</h4>
			<p className="text-xs">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been</p>
		</div>
	);
}
