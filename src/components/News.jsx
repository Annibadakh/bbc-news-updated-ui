import NewsCard from "./NewsCard";

import { Outlet } from "react-router-dom";
import SectionTitle from "./SectionTitle";


const newsList = [
  {
    image: "https://ichef.bbci.co.uk/ace/standard/976/cpsprodpb/74f3/live/53e73b00-290a-11f0-a0dd-990c04e36239.jpg.webp",
    title: "India beats Australia in thrilling T20 match",
    summary:
      "India clinched victory in the final over as Suryakumar Yadav smashed a match-winning fifty in a high-scoring thriller.",
    time: "3 hrs ago",
    category: "Cricket",
  },
  {
    image: "https://ichef.bbci.co.uk/ace/standard/624/cpsprodpb/240e/live/2b35d720-28f6-11f0-aa71-07cab283f44a.jpg.webp",
    title: "Manchester City edges past Arsenal to reach FA Cup Final",
    summary:
      "A late goal from Haaland sent City through to the final after a tense match at Wembley.",
    time: "5 hrs ago",
    category: "Football",
  },
  {
    image: "https://ichef.bbci.co.uk/ace/standard/976/cpsprodpb/a05d/live/f7aa4b70-24c7-11f0-9341-7dd5c259f730.jpg.webp",
    title: "Iga Swiatek storms into French Open semifinals",
    summary:
      "Top seed Swiatek continued her dominant run on clay with a straight-set win over Gauff.",
    time: "7 hrs ago",
    category: "Tennis",
  },
  {
    image: "https://ichef.bbci.co.uk/ace/standard/976/cpsprodpb/11e8/live/e70771a0-2907-11f0-8f57-b7237f6a66e6.jpg.webp",
    title: "Lakers eliminate Warriors in NBA playoff clash",
    summary:
      "LeBron James led the Lakers with 36 points to knock out defending champions Golden State.",
    time: "9 hrs ago",
    category: "Basketball",
  },
  {
    image: "https://ichef.bbci.co.uk/ace/standard/976/cpsprodpb/44b1/live/a296b120-2907-11f0-a0dd-990c04e36239.jpg.webp",
    title: "Verstappen wins Monaco Grand Prix in rain-hit race",
    summary:
      "Max Verstappen managed tricky conditions to claim another dominant win for Red Bull.",
    time: "1 day ago",
    category: "Formula 1",
  },
  {
    image: "https://ichef.bbci.co.uk/ace/standard/624/cpsprodpb/240e/live/2b35d720-28f6-11f0-aa71-07cab283f44a.jpg.webp",
    title: "Manchester City edges past Arsenal to reach FA Cup Final",
    summary:
      "A late goal from Haaland sent City through to the final after a tense match at Wembley.",
    time: "5 hrs ago",
    category: "Football",
  },
];



export default function News() {
    return(
        <>
        <div className="min-h-screen mt-14 bg-gradient-to-br from-white via-blue-50 to-slate-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-800 p-6 sm:p-10">
            <SectionTitle title="Top Sports News" />
            <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {newsList.map((item, i) => (
                <div key={i} className="h-full">
                <NewsCard {...item} />
                </div>
            ))}
            </div>
        </div>
        <Outlet />
        </>
    )
}