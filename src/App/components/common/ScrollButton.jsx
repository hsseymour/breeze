import { useEffect, useState, useCallback } from "react";

const ScrollButton = ({ isLeft, isParentMounted, scrollElement }) => {
  const [isScrollEnd, setIsScrollEnd] = useState(false);
  const element = document.getElementById(scrollElement);
  const scrollDistance = isParentMounted ? element.offsetWidth / 2 : 0;

  const checkIfScrollEnd = useCallback(() => {
    const isAtEnd = isLeft
      ? element.scrollLeft <= 0
      : element.scrollLeft >= element.scrollWidth - element.clientWidth;
    setIsScrollEnd(isAtEnd);
  }, [isLeft, element]);

  useEffect(() => {
    if (element) {
      checkIfScrollEnd();
      element.addEventListener("scroll", checkIfScrollEnd);
      return () => element.removeEventListener("scroll", checkIfScrollEnd);
    }
  }, [element, checkIfScrollEnd]);

  const handleClick = () => {
    element.scrollBy({
      left: isLeft ? -scrollDistance : scrollDistance,
      behavior: "smooth",
    });
  };

  return (
    <button
      className="buttons scrollButton"
      onClick={handleClick}
      disabled={isScrollEnd}
    >
      <svg className="svg" viewBox="0 0 30 50">
        <polyline
          points={isLeft ? "25,10 5,25 25,40" : "5,10 25,25 5,40"}
          stroke="white"
          strokeWidth="5"
          fill="none"
        />
      </svg>
    </button>
  );
};

export default ScrollButton;
