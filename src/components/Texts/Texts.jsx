import { useState, useEffect } from "react";
import data from "./data.json";

const Text = () => {
  const [texts, setTexts] = useState([]);

  useEffect(() => {
    if (data && data.texts) {
      setTexts(data.texts);
    }
  }, []);

  return (
    <div className="px-[10%] md:px-[20%] text-white w-full">
      {texts.map((textItem) => (
        <div key={textItem.id} className="mb-4 px-6">
          <h4 className="text-3xl font-serif text-white text-center tracking-widest mb-15">
            {textItem.title}
          </h4>
          <p className="text-gray-300 text-md leading-relaxed text-justify">
            {textItem.content}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Text;
