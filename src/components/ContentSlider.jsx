import React from 'react';
import Slider from 'react-slick';
import { ChevronLeft, ChevronRight, PlayCircle } from 'lucide-react';
import news from '../assets/news1.jpg'
import SectionTitle from './SectionTitle';

const data = [
  {
    image: 'https://via.placeholder.com/600x300',
    title: 'How an earthquake changed the course of history',
    summary: 'An earthquake in 1755 had such a profound effect on the world that we are still feeling its impact today.',
    time: '29 Jul 2022',
    category: 'History'
  },
  {
    image: 'https://via.placeholder.com/600x300',
    title: "Why the Dutch don't say sorry",
    summary: "The Dutch are known for many things, including cheese, windmills, and being the world's tallest people.",
    time: '22 Sep 2022',
    category: 'Culture'
  },
  {
    image: 'https://via.placeholder.com/600x300',
    title: 'Watch rare sperm found by AI in IVF lab',
    summary: 'New tech to increase IVF success rates for patients.',
    time: '1 day ago',
    category: 'Tech Now'
  }
];

const NextArrow = ({ onClick }) => (
  <button onClick={onClick} className="absolute right-0 top-1/2 z-10 -translate-y-1/2 bg-black/30 hover:bg-black/60 p-2 rounded-full">
    <ChevronRight className="text-white w-6 h-6" />
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button onClick={onClick} className="absolute left-0 top-1/2 z-10 -translate-y-1/2 bg-black/30 hover:bg-black/60 p-2 rounded-full">
    <ChevronLeft className="text-white w-6 h-6" />
  </button>
);

const ContentSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1050,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  return (
    <div className="relative px-4 py-6 max-w-7xl mx-auto">
      <SectionTitle title="Editor's Picks" />
      <Slider {...settings}>
        {data.map((item, index) => (
          <div
          key={index}
          className="px-2"
        >
          <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 dark:border-gray-800 overflow-hidden h-[430px] flex flex-col">
            <div className="relative">
              <img
                src={news}
                alt={item.title}
                className="w-full h-64 object-cover"
              />
              <PlayCircle className="absolute top-4 left-4 text-white w-8 h-8 opacity-80" />
            </div>
            <div className="p-4 flex flex-col justify-between flex-grow">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white line-clamp-2">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mt-2 line-clamp-2">
                {item.summary}
              </p>
              <div className="flex justify-between items-center text-xs text-gray-500 dark:text-gray-400 mt-auto pt-4">
                <span>{item.time}</span>
                <span className="bg-blue-100 text-blue-700 dark:bg-blue-900 dark:text-blue-300 px-2 py-0.5 rounded">
                  {item.category}
                </span>
              </div>
            </div>
          </div>
        </div>
        
        ))}
      </Slider>
    </div>
  );
};

export default ContentSlider;
