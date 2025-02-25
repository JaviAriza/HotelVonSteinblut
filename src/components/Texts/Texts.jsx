import React, { useState, useEffect } from "react";
import data from "./data.json";

const Text = () => {
  const [texts, setTexts] = useState([]);

  useEffect(() => {
    if (data && data.texts) {
      setTexts(data.texts);
    }
  }, []);

  return (
    <div className="p-6 text-white max-w-7xl mx-auto">
      {texts.map((textItem, index) => (
        <div key={textItem.id} className="mb-4">
          <h3 className="text-3xl font-serif text-white mb-2">
            {textItem.title}
          </h3>
          <p className="text-gray-300 text-md leading-relaxed">
            {textItem.content}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Text;
