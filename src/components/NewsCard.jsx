import React, { useState, useEffect, createRef } from "react";

const NewsCard = ({ article, index, activeArticle }) => {
  const date = new Date(article.publishedAt).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    weekday: "short",
    year: "numeric",
  });
  let cardStyle =
    "flex flex-col justify-between bg-white h-full rounded-lg mx-2";
  if (activeArticle === index) {
    cardStyle = `${cardStyle} border-b-4 border-blue-500`;
  }

  const [elRefs, setElRefs] = useState([]);
  const scrollToRef = (ref) => window.scroll(0, ref.current.offsetTop - 50);

  useEffect(() => {
    setElRefs((refs) =>
      Array(20)
        .fill()
        .map((_, j) => refs[j] || createRef())
    );
  }, []);

  useEffect(() => {
    if (index === activeArticle && elRefs[activeArticle]) {
      scrollToRef(elRefs[activeArticle]);
    }
  }, [index, activeArticle, elRefs]);

  return (
    <div ref={elRefs[index]} className={cardStyle}>
      <div>
        <div
          className="h-56 bg-cover overflow-hidden rounded-t-lg"
          style={{
            backgroundImage: `url(${article.urlToImage})`,
          }}
          title={`image of ${article.title}`}
        ></div>
        <div className="p-4 leading-normal">
          <div>
            <div className="text-xs flex justify-between items-center">
              <p className="text-gray-600 leading-none">{article.author}</p>
              <p className="text-gray-600 uppercase">{date}</p>
            </div>
            <div className="text-gray-900 font-bold text-xl mb-2">
              {article.title}
            </div>
            <div className="text-gray-700 text-base">{article.description}</div>
          </div>
        </div>
      </div>

      <div className="flex justify-between p-4">
        <a target="_blank" rel="noopener noreferrer" href={article.url}>
          <p className="text-blue-500">Learn More</p>
        </a>
        <p className="text-gray-400">{index + 1}</p>
      </div>
    </div>
  );
};

export default NewsCard;
