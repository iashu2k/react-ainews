import React from "react";

const Card = ({ card }) => {
  
  return (
    <div className="flex flex-col justify-between h-64 w-auto bg-gray-100 items-center rounded-lg p-4 mx-4 text-center shadow-sm border-2 border-blue-500">
      <div className="text-gray-900 font-bold text-xl">{card.title}</div>
      <div className="text-gray-600">{card.info}</div>
      <div className="text-base font-semibold text-indigo-500">{card.text}</div>
    </div>
  );
};

export default Card;
