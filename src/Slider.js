import React, { useState, useEffect } from "react";

const Slider = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentText, setCurrentText] = useState(items[0].text);

  useEffect(() => {
    setCurrentText(items[currentIndex].text);
  }, [currentIndex, items]);

  const handleNext = () => {
    if (currentIndex === items.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex === 0) {
      setCurrentIndex(items.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div>
      <button type="button" onClick={handlePrev}>
        Prev
      </button>
      <span>{currentText}</span>
      <button type="button" onClick={handleNext}>
        Next
      </button>
    </div>
  );
};

export default Slider;
