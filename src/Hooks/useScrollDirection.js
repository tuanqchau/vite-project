import { useEffect, useState } from "react";
function useScrollDirection() {
  const [scrollDir, setScrollDir] = useState("down");

  useEffect(() => {
    let lastY = window.pageYOffset;

    const updateScrollDir = () => {
      const y = window.pageYOffset;
      if (y > lastY) {
        setScrollDir("down");
      } else if (y < lastY) {
        setScrollDir("up");
      }
      lastY = y;
    };

    window.addEventListener("scroll", updateScrollDir);
    return () => window.removeEventListener("scroll", updateScrollDir);
  }, []);

  return scrollDir;
}