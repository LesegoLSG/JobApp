import React, { useState, useEffect } from "react";
import { BiSolidArrowToTop } from "react-icons/bi";

const TopScroller = () => {
  const [backToTop, setBackToTop] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setBackToTop(true);
      } else {
        setBackToTop(false);
      }
    });
  }, [backToTop]);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div>
      {backToTop && (
        <button
          style={{
            position: "fixed",
            bottom: "50px",
            right: "5px",
            height: "30px",
            width: "30px",
            fontSize: "30px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "50%",
            background: "#1F6E8C",
            color: "#fff",
            border: "none",
            cursor: "pointer",
            zIndex: "9999",
            padding: "5px",
          }}
          onClick={scrollUp}
        >
          <BiSolidArrowToTop size={30} />
        </button>
      )}
    </div>
  );
};

export default TopScroller;
