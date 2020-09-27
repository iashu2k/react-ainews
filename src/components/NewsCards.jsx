import React from "react";
import NewsCard from "./NewsCard";
import Card from "./Card";

const NewsCards = ({ articles }) => {
  const info = [
    { color: "100", title: "Latest News", text: "Give me the latest news" },
    {
      color: "200",
      title: "News by Categories",
      info:
        "Business, Entertainment, General, Health, Science, Sports, Technology",
      text: "Give me the latest Business News",
    },
    {
      color: "300",
      title: "News by Terms",
      info: "Covid19, EA Sports, iPhone, Narendra Modi...",
      text: "Tell me about India",
    },
    {
      color: "400",
      title: "News by Sources",
      info: "CNN, Wired, BBC News, Reuters, The Times of India...",
      text: "Get me news from The Hindu",
    },
  ];

  if (articles.length === 0) {
    return (
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 mt-8">
        {info.map((card) => (
          <Card key={card.title} card={card} />
        ))}
      </div>
    );
  }

  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mt-8">
      {articles.map((article, i) => (
        <div key={i}>
          <NewsCard index={i} article={article} />
        </div>
      ))}
    </div>

    // <div class="grid lg:grid-cols-4 sm:grid-cols-2 gap-4">
    //     <div>

    //     </div>
    // </div>
  );
};

export default NewsCards;
