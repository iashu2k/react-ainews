import React, { useEffect, useState } from "react";
import NewsCards from "./components/NewsCards";
import alanBtn from "@alan-ai/alan-sdk-web";
import AiNews from "./AiNews.png";

const alanKey = process.env.REACT_APP_KEY;

function App() {
  const [articles, SetArticles] = useState([]);

  useEffect(() => {
    alanBtn({
      key: `${alanKey}`,
      onCommand: ({ command, articles }) => {
        if (command === "headlines") {
          SetArticles(articles);
          
        }
      },
    });
  }, []);

  return (
    <div className="bg-news bg-cover bg-fixed min-h-screen py-8">
      <div className="mx-auto container">
        <img
          className="rounded-lg h-auto mx-auto lg:w-1/4 w-1/2 border-4 shadow-xl border-indigo-300"
          src={AiNews}
          alt="logo"
        />
         <NewsCards articles={articles} />
      </div>

     
    </div>
  );
}

export default App;
