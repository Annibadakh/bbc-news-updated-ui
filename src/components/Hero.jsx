import NewsCard from "./NewsCard";
import news1 from '../assets/news1.jpg';
import news2 from '../assets/news1.jpg';
import news3 from '../assets/news1.jpg';
import SectionTitle from "./SectionTitle";
import ContentSlider from "./ContentSlider";


const newsList = [
    {
      image: news1,
      title: "Thai prosecutors drop case against US academic",
      summary:
        "Paul Chambers, a lecturer at Naresuan University, was arrested after the army filed a complaint against him.",
      time: "1 day ago",
      category: "Asia",
    },
    {
      image: news2,
      title: "Hong Kong police arrest family of activist",
      summary:
        "Anna Kwok's father and brother have been accused of helping the US-based pro-democracy activist with her finances.",
      time: "20 hrs ago",
      category: "Asia",
    },
    {
      image: news3,
      title: "Wall Street stocks bounce back",
      summary:
        "Investors were buoyed by a better-than-expected jobs report and rising hope of US-China trade talks.",
      time: "9 hrs ago",
      category: "US & Canada",
    },
  ];

export default function Hero() {
    return(
        <div className="bg-gradient-to-br from-white via-blue-50 to-slate-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-800 p-6 ">
        <div className="min-h-screen mt-10 bg-gradient-to-br from-white via-blue-50 to-slate-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-800 p-6 sm:p-10">
            <SectionTitle title="Top Stories" />
            <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {newsList.map((item, i) => (
                <div key={i} className="h-full">
                <NewsCard {...item} />
                </div>
            ))}
            </div>
        </div>
        <ContentSlider />
        </div>
    )
}