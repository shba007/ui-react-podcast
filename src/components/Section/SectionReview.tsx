import { useState } from 'react';

import ReviewCard from '../ReviewCard';
// @ts-ignore
import { ReactComponent as ArrowIcon } from '../../assets/icons/arrow.svg';

import {
  Splide,
  SplideTrack,
  SplideSlide,
  Options,
  // @ts-ignore
} from '@splidejs/react-splide';

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

export default function SectionReview() {
  const [slideState, setSlideState] = useState<'first' | 'last' | 'middle'>(
    'first'
  );

  function onMove(
    _slide: any,
    list: { items: string | any[] },
    _prev: any,
    curr: { page: number }
  ) {
    if (curr?.page === undefined) return;

    if (curr.page < 1) setSlideState('first');
    else if (curr.page > list.items.length - 2) setSlideState('last');
    else setSlideState('middle');
  }

  const reviews = [
    {
      image: '/profiles/john_doe.jpg',
      name: 'John Doe',
      rating: 5,
      comment: `Great course! I learned so much about podcasting, 
      and the content was well-structured and easy to follow.`,
    },
    {
      image: '/profiles/emma_johnson.jpg',
      name: 'Emma Johnson',
      rating: 4,
      comment: `The podcasting course was a game-changer for me. 
      The tips on sound quality and engaging delivery were invaluable.`,
    },
    {
      image: '/profiles/michael_williams.jpg',
      name: 'Michael Williams',
      rating: 3,
      comment: `The course provided a solid foundation, but I 
      wish there were more in-depth interview techniques covered.`,
    },
    {
      image: '/profiles/sophia_lee.jpg',
      name: 'Sophia Lee',
      rating: 5,
      comment: `Highly recommended! The personalized coaching 
      sessions and promotion strategies were fantastic.`,
    },
  ];

  return (
    <section id="review" className="flex flex-col gap-6 h-screen">
      <h2 className="text-4xl font-bold">Review from customers</h2>
      <h3 className="max-w-[400px] text-xs font-[Poppins]">
        Check out of some unbiased Reviews, Ratings & Recommendations from the
        Real Users
      </h3>
      <div className="absolute mt-32 left-0 w-screen">
        <Splide
          options={splideOption}
          hasTrack={false}
          onPaginationUpdated={onMove}
        >
          <SplideTrack>
            {reviews.map(({ image, name, rating, comment }, index) => (
              <SplideSlide key={index}>
                <ReviewCard
                  image={image}
                  name={name}
                  rating={rating}
                  comment={comment}
                />
              </SplideSlide>
            ))}
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
      <div className="mt-1 invisible w-[465px] h-[238px]" />
    </section>
  );
}
