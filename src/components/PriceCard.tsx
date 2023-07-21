export default function PriceCard({
  name,
  price,
  keypoints,
  isActive = false,
}: {
  name: string;
  price: number;
  keypoints: string[];
  isActive?: boolean;
}) {
  return (
    <div
      className={`flex flex-col gap-6 max-w-[303px] border-[0.5px] border-[#7A3199] rounded-[10px] px-7 py-9 ${
        isActive ? 'bg-[#7A3199] text-white scale-110' : 'bg-white'
      }`}
    >
      <div className="flex flex-col gap-4">
        <h6 className="font-bold">{name} Plan</h6>
        <p className="text-xs font-['Poppins']">
          Lorem Ipsum is simply dummy text of the printing and typesetting
        </p>
      </div>
      <div
        className={`flex items-center gap-2 ${
          isActive ? 'text-white' : 'text-[#7A3199]'
        }`}
      >
        <span className="text-3xl font-bold">₹ {price}</span>
        <span className="font-[Poppins]">/ month</span>
      </div>
      <ul className="flex flex-col gap-2 text-xs list-['●']">
        {keypoints.map((keypoint, index) => (
          <li key={index} className="pl-3">
            {keypoint}
          </li>
        ))}
      </ul>
      <button className="rounded-[5px] border-[0.5px] border-[#7A3199] hover:border-white px-8 py-[14px] w-fit bg-white hover:bg-[#7A3199] text-[#7A3199] hover:text-white text-xs font-[Poppins] transition-colors duration-200">
        Start Free Trial
      </button>
    </div>
  );
}
