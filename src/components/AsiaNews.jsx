import NewsCard from "./NewsCard";


const newsList = [
  {
    image: "https://ichef.bbci.co.uk/ace/standard/960/cpsprodpb/4ce8/live/7bd36d60-290e-11f0-a0dd-990c04e36239.jpg.webp", // Replace with actual image import or URL
    title: "Real Madrid wins El Clasico in dramatic fashion",
    summary:
      "In a thrilling encounter, Real Madrid triumphed 3-2 over Barcelona with a last-minute header from Benzema.",
    time: "2 hrs ago",
    category: "Football",
  },
  {
    image: "https://ichef.bbci.co.uk/ace/standard/976/cpsprodpb/f0ac/live/3893d7c0-20e8-11f0-9380-95bc141806e6.jpg.webp", // Replace with actual image import or URL
    title: "Manchester United announces new signing",
    summary:
      "Manchester United completes the signing of talented midfielder Jude Bellingham from Borussia Dortmund.",
    time: "5 hrs ago",
    category: "Football",
  },
  {
    image: "https://ichef.bbci.co.uk/ace/standard/976/cpsprodpb/04f3/live/cab66d20-20e8-11f0-9380-95bc141806e6.jpg.webp", // Replace with actual image import or URL
    title: "Liverpool dominate Chelsea in Premier League clash",
    summary:
      "Liverpool produced a brilliant performance, winning 4-1 at Anfield, with Mohamed Salah scoring a brace.",
    time: "8 hrs ago",
    category: "Football",
  },
  {
    image: "https://ichef.bbci.co.uk/ace/standard/976/cpsprodpb/336f/live/ded88a40-20e8-11f0-9380-95bc141806e6.jpg.webp", // Replace with actual image import or URL
    title: "PSG confirms Messi's departure after contract expires",
    summary:
      "Paris Saint-Germain announces that Lionel Messi will leave the club after his contract ends this summer.",
    time: "12 hrs ago",
    category: "Football",
  },
  {
    image: "https://ichef.bbci.co.uk/ace/standard/800/cpsprodpb/a82c/live/8d670220-28e7-11f0-9f2f-f347b04268f5.jpg.webp", // Replace with actual image import or URL
    title: "Bayern Munich crowned Bundesliga champions",
    summary:
      "Bayern Munich secured their 11th consecutive Bundesliga title after a dominant 5-0 win over Wolfsburg.",
    time: "1 day ago",
    category: "Football",
  },
  {
    image: "https://ichef.bbci.co.uk/ace/standard/594/cpsprodpb/vivo/live/images/2025/5/4/47be5bc4-6997-4757-aec6-6b8773038be9.jpg.webp", // Replace with actual image import or URL
    title: "PSG confirms Messi's departure after contract expires",
    summary:
      "Paris Saint-Germain announces that Lionel Messi will leave the club after his contract ends this summer.",
    time: "12 hrs ago",
    category: "Football",
  },
];


export default function AsiaNews() {
    return(
        <>
        <div className="min-h-screen mt-10 bg-gradient-to-br from-white via-blue-50 to-slate-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-800 p-6 sm:p-10">
            <h1 className="text-4xl font-bold mb-10 text-gray-800 dark:text-white tracking-tight">
            📰 Top Asia News
            </h1>
            <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {newsList.map((item, i) => (
                <div key={i} className="h-full">
                <NewsCard {...item} />
                </div>
            ))}
            </div>
        </div>
        </>
    )
}