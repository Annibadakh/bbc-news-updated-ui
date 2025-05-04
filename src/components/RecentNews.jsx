import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const newsItems = [
  {
    title: "Netanyahu vows response after Houthi missile hits near Israel's main airport",
    summary: "Footage appeared to show a plume of black smoke rising from an area near the airport on the outskirts of Tel Aviv.",
    image: "https://ichef.bbci.co.uk/news/1024/cpsprodpb/a38d/live/31ab1030-28c8-11f0-9761-1905a59d240c.jpg.webp",
    time: "40 min ago",
    category: "Middle East",
  },
  {
    title: "Trump says he is not considering running for third term",
    summary: "This is not something I'm looking to do,' Trump says about speculation he may run again in 2028",
    image: "https://ichef.bbci.co.uk/news/1024/cpsprodpb/e4b4/live/79797370-28f0-11f0-9305-9155593c1dc1.jpg.webp",
    time: "2 hours ago",
    category: "US & Canada",
  },
  {
    title: "Elon Musk's Starbase to become official city in Texas",
    summary: "Votes confirm incorporation, paving way for more space projects.",
    image: "https://images.unsplash.com/photo-1549923746-c502d488b3ea?auto=format&fit=crop&w=1600&q=80",
    time: "1 day ago",
    category: "Technology",
  },
  {
    title: "Brazil police thwart bomb attack on Lady Gaga concert",
    summary: "Police say the plan was orchestrated by a group promoting hate speech and the radicalisation of teenagers.",
    image: "https://ichef.bbci.co.uk/news/480/cpsprodpb/9536/live/2d99cce0-28f8-11f0-8f57-b7237f6a66e6.jpg.webp",
    time: "2 hours ago",
    category: "Latin America",
  },
];

export default function RecentNews() {
  return (
    <div className="w-full mt-10 relative overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination]}
        slidesPerView={1}
        autoplay={{ delay: 6000 }}
        loop={true}
        pagination={{ clickable: true }}
        className="w-full h-[490px]"
      >
        {newsItems.map((item, idx) => (
          <SwiperSlide key={idx}>
            <div
              className="w-full h-[450px] bg-cover bg-center relative"
              style={{ backgroundImage: `url(${item.image})` }}
            >
              <div className="absolute inset-0 bg-black/40 dark:bg-black/60 z-0" />

              {/* Content container */}
              <div
                className="absolute bottom-8 right-8 max-w-xl w-[90%] sm:w-[500px]"
              >
                <div className="bg-white/20 dark:bg-gray-900/30 backdrop-blur-md text-white dark:text-gray-100 rounded-2xl shadow-xl border border-white/30 dark:border-gray-700 transition-all duration-300 hover:shadow-2xl h-full min-h-[230px] max-h-[230px] flex flex-col justify-between p-5">
                  <div className="flex flex-col gap-3">
                    <a
                      href="#"
                      className="text-lg sm:text-xl md:text-2xl font-semibold text-white dark:text-white hover:text-blue-400 dark:hover:text-blue-300 transition-colors duration-300 relative group"
                    >
                      {item.title}
                      <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-400 dark:bg-blue-300 transition-all duration-300 group-hover:w-full"></span>
                    </a>
                    <p className="text-gray-200 dark:text-gray-300 text-sm sm:text-base line-clamp-3">
                      {item.summary}
                    </p>
                  </div>

                  <div className="mt-4 pt-4 border-t border-white/30 dark:border-gray-700 flex justify-between text-xs sm:text-sm text-gray-300 dark:text-gray-400">
                    <span>{item.time}</span>
                    <span>{item.category}</span>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
