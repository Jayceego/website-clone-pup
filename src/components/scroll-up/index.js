import { useState, useEffect } from "react";
import { FaAngleUp } from "react-icons/fa";

const ScrollUp = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
    const arrowUp = document.querySelector(".arrowUp");
      if (window.pageYOffset > 100) {
        setIsVisible(true);
        arrowUp.classList.add("visible");
      } else {
        setIsVisible(false);
        arrowUp.classList.remove("visible");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth"});
  };

  return (
    <div
      className="arrowUp"
      onClick={handleClick}
    >
      <FaAngleUp />
    </div>
  );
};

export default ScrollUp;
