// @ts-ignore
import { ReactComponent as Star } from '../assets/icons/star.svg';

export default function ReviewCard({
  image,
  name,
  rating,
  comment,
}: {
  image: string;
  name: string;
  rating: number;
  comment: string;
}) {
  return (
    <div className="rounded-[10px] border-[0.5px] border-[#E1A6FF]/40 px-12 py-9 w-[465px] h-[210px]">
      <div className="grid grid-rows-3 grid-cols-[auto,1fr] gap-x-6">
        <img
          src={image}
          className="row-span-3 rounded-full w-[70px] aspect-square object-cover"
        ></img>
        <span className="col-start-2 font-bold">{name}</span>
        <div className="col-start-2 flex gap-2 mt-1">
          {Array.from({ length: rating }).map((_, index) => (
            <Star key={index} />
          ))}
        </div>
      </div>
      <p className="mt-6 text-xs">{comment}</p>
    </div>
  );
}
