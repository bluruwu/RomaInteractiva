import React, { useState } from "react";

const LessonText = ({ title, paragraphs }) => {
  const [currentParagraph, setCurrentParagraph] = useState(0);

  const handleParagraphChange = (index) => {
    setCurrentParagraph(index);
  };

  return (
    <div className="w-full md:w-full lg:w-1/2 p-14 relative">
      {/* Botón de inicio */}
      <div className="mb-10 text-3xl">
        <p className="font-bold text-center filter drop-shadow-lg">{title}</p>
      </div>

      {/* Párrafo actual */}
      <div className="relative">
        {paragraphs.map((paragraph, index) => (
          <p
            key={index}
            className={`absolute top-0 left-0 w-full h-full transform ${
              currentParagraph === index
                ? "opacity-100 translate-x-0"
                : "-translate-x-full opacity-0"
            } transition-all duration-300`}
          >
            {paragraph}
          </p>
        ))}
      </div>

      {/* Botones circulares */}
      <div className="absolute bottom-4 right-4 z-10 flex space-x-2">
        {paragraphs.map((_, index) => (
          <button
            key={index}
            onClick={() => handleParagraphChange(index)}
            className={`rounded-full h-8 w-8 flex items-center justify-center text-base border ${
              currentParagraph === index
                ? "bg-[#e69200] text-white "
                : "bg-gray-300 text-gray-600"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default LessonText;
