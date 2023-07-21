export default function CTAButton({
  children,
  className,
}: {
  children: string;
  className?: string;
}) {
  return (
    <button
      className={`rounded-[10px] px-10 md:px-14 py-3 md:py-4 text-white text-base md:text-xl font-[Poppins] font-bold bg-gradient-to-r hover:bg-gradient-to-l from-[#4776E6] to-[#8E54E9] transition-colors duration-300 ${className}`}
    >
      {children}
    </button>
  );
}
