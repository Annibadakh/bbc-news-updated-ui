import Slider from "react-slick";
import { ArrowLeft, ArrowRight } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SectionTitle from "./SectionTitle";

const podcasts = [
  {
    title: "Prince Harry: Is his safety at risk?",
    subtitle: "The Interview",
    duration: "22 mins",
    image: "https://ichef.bbci.co.uk/images/ic/1024x576/p0l822jx.jpg.webp",
  },
  {
    title: "Agent Zo's Leap of Faith",
    subtitle: "History's Heroes",
    duration: "28 mins",
    image: "https://ichef.bbci.co.uk/images/ic/1024x576/p0kthrxj.jpg.webp",
  },
  {
    title: "Are 80% of women really only attracted to 20% of men?",
    subtitle: "More or Less",
    duration: "8 mins",
    image: "https://ichef.bbci.co.uk/images/ic/1024x576/p0l6hvlc.jpg.webp",
  },
  {
    title: "Snake: Popularising mobile gaming",
    subtitle: "Witness History",
    duration: "10 mins",
    image: "https://ichef.bbci.co.uk/images/ic/1024x576/p0l6zs62.jpg.webp",
  },
  {
    title: "Selena Gomez: Actress, singer, beauty mogul",
    subtitle: "Good Bad Billionaire",
    duration: "47 mins",
    image: "https://ichef.bbci.co.uk/images/ic/1024x576/p0l3ty3q.jpg.webp",
  },
  {
    title: "From guerillas to entrepreneurs",
    subtitle: "Business Daily",
    duration: "21 mins",
    image: "https://ichef.bbci.co.uk/images/ic/1024x576/p0l7b3h9.jpg.webp",
  },
];

function NextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute right-[-20px] top-[40%] z-10 cursor-pointer bg-gray-200 dark:bg-gray-700 p-2 rounded-full hover:bg-gray-300"
      onClick={onClick}
    >
      <ArrowRight size={20} />
    </div>
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="absolute left-[-20px] top-[40%] z-10 cursor-pointer bg-gray-200 dark:bg-gray-700 p-2 rounded-full hover:bg-gray-300"
      onClick={onClick}
    >
      <ArrowLeft size={20} />
    </div>
  );
}

export default function AudioSlider() {
  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <section className="py-8 px-4 relative">
      <div className="flex items-center justify-between mb-4">
        <SectionTitle title="This Week in Audio" />
      </div>

      <Slider {...settings}>
        {podcasts.map((item, idx) => (
          <div key={idx} className="px-2">
            <div className="w-[250px] h-[360px] bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-800 flex flex-col transition-all duration-300 hover:shadow-2xl">
              <img
                src={item.image}
                alt={item.title}
                className="h-40 w-full object-cover"
              />
              <div className="p-4 flex flex-col justify-between flex-1">
                <div>
                  <h4 className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                    {item.subtitle}
                  </h4>
                  <h3 className="text-base font-semibold text-gray-900 dark:text-white line-clamp-2">
                    {item.title}
                  </h3>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-3">
                  {item.duration}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}
