import React from 'react';

const newsItems = [
  {
    title: "How Carney's election win will change direction of trade war",
    summary: "The Canadian PM outlines how he plans to tackle Trump.",
    time: "17h ago",
    category: "World"
  },
  {
    title: "Woman missing since 1962 found 'alive and well'",
    summary: "Audrey Backeberg left home 'by her own choice' and no foul play was involved.",
    time: "53m ago",
    category: "US & Canada"
  },
  {
    title: "Elon Musk's Starbase in Texas will officially become a city",
    summary: "Residents approved incorporating a patch of land as a new municipality.",
    time: "4h ago",
    category: "US & Canada"
  },
  {
    title: "Marvel's Thunderbolts* proves a hit at box office",
    summary: "The film also scores well with online audiences.",
    time: "35m ago",
    category: "Culture"
  },
];

export default function Card() {
  return (
    <div className="space-y-6 px-4 border-l border-gray-200">
      {newsItems.map((item, idx) => (
        <div key={idx} className="group cursor-pointer transition-all duration-200 hover:bg-gray-50 p-3 rounded-lg">
          <h3 className="text-base font-semibold text-gray-900 group-hover:text-blue-600">
            {item.title}
          </h3>
          <p className="text-sm text-gray-600 mt-1">{item.summary}</p>
          <div className="text-xs text-gray-400 mt-2">
            {item.time} &bull; <span>{item.category}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
