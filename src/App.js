import React, { useEffect, useState } from "react";
import NewsCards from "./components/NewsCards";
import alanBtn from "@alan-ai/alan-sdk-web";
import AiNews from "./AiNews.png";
import wordsToNumbers from "words-to-numbers";

const alanKey = process.env.REACT_APP_KEY;

function App() {
  const [articles, setArticles] = useState([]);
  const [activeArticle, setActiveArticle] = useState(-1);

  useEffect(() => {
    alanBtn({
      key: `${alanKey}`,
      onCommand: ({ command, articles, number }) => {
        if (command === "headlines") {
          setArticles(articles);
          setActiveArticle(-1);
        } else if (command === "highlight") {
          setActiveArticle((prevActiveArticle) => prevActiveArticle + 1);
        } else if (command === "open") {
          const parsedNumber =
            number.length > 2
              ? wordsToNumbers(number, { fuzzy: true })
              : number;
          const article = articles[parsedNumber - 1];

          if (parsedNumber > 20) {
            alanBtn().playText("Please try again.");
          } else {
            window.open(article.url, "_blank");
            alanBtn().playText("Opening.");
          }
        }
      },
    });
  }, []);

  return (
    <div className="bg-news bg-cover bg-fixed min-h-screen py-8 font-body">
      <div className="mx-auto container">
        <img
          className="rounded-lg h-auto mx-auto lg:w-1/4 w-1/2 border-4 shadow-xl border-indigo-300"
          src={AiNews}
          alt="logo"
        />
        <NewsCards articles={articles} activeArticle={activeArticle} />
      </div>
    </div>
  );
}

export default App;
