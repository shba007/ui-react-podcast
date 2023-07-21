export default function AboutCard({
  title,
  description,
  className,
}: {
  title: string;
  description: string;
  className?: string;
}) {
  return (
    <div
      className={`flex flex-col gap-4 border-[0.5px] border-[#7A3199] rounded-[10px] p-4 md:p-7 max-w-[268px] aspect-[67/40] font-[Poppins] ${className}`}
    >
      <h4 className="text-lg md:text-xl text-center lg:text-left font-bold">
        {title}
      </h4>
      <p className="text-xs leading-relaxed text-justify">{description}</p>
    </div>
  );
}
