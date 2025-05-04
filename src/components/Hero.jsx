import NewsCard from "./NewsCard";
import news1 from '../assets/news1.jpg';
import news2 from '../assets/news1.jpg';
import news3 from '../assets/news1.jpg';
import SectionTitle from "./SectionTitle";
import ContentSlider from "./ContentSlider";
import RecentNews from "./RecentNews";
import MainBox from "./MainBox";
import AudioSlider from './AudioSlider'

const newsList = [
    {
      image: "https://ichef.bbci.co.uk/news/480/cpsprodpb/9195/live/0aae3bc0-2854-11f0-bac4-2778a19e7585.jpg.webp",
      title: "Thai prosecutors drop case against US academic",
      summary:
        "Paul Chambers, a lecturer at Naresuan University, was arrested after the army filed a complaint against him.",
      time: "1 day ago",
      category: "Asia",
    },
    {
      image: "https://ichef.bbci.co.uk/news/480/cpsprodpb/78bf/live/69b324b0-25e2-11f0-8c66-ebf25fc2cfef.jpg.webp",
      title: "Hong Kong police arrest family of activist",
      summary:
        "Anna Kwok's father and brother have been accused of helping the US-based pro-democracy activist with her finances.",
      time: "20 hrs ago",
      category: "Asia",
    },
    {
      image: "https://ichef.bbci.co.uk/news/480/cpsprodpb/2563/live/4f5f3640-2767-11f0-9bdb-2b348bd5e027.jpg.webp",
      title: "Wall Street stocks bounce back",
      summary:
        "Investors were buoyed by a better-than-expected jobs report and rising hope of US-China trade talks.",
      time: "9 hrs ago",
      category: "US & Canada",
    },
  ];

export default function Hero() {
    return(
        <div className="bg-gradient-to-br mt-10 from-white via-blue-50 to-slate-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-800 p-6 ">
        <RecentNews />
        <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-slate-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-800 p-6 sm:p-10">
            <SectionTitle title="Top Stories" />
            <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {newsList.map((item, i) => (
                <div key={i} className="h-full">
                <NewsCard {...item} />
                </div>
            ))}
            </div>
        </div>
        <AudioSlider />
        <MainBox />
        <ContentSlider />
        </div>
    )
}