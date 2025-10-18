import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const Cursor = () => {
  const { theme } = useTheme();
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHoveringLink, setIsHoveringLink] = useState(false);

  useEffect(() => {
    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const onMouseEnter = () => setIsHoveringLink(true);
    const onMouseLeave = () => setIsHoveringLink(false);

    document.addEventListener("mousemove", onMouseMove);
    const links = document.querySelectorAll(".link");
    links.forEach((link) => {
      link.addEventListener("mouseenter", onMouseEnter);
      link.addEventListener("mouseleave", onMouseLeave);
    });

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      links.forEach((link) => {
        link.removeEventListener("mouseenter", onMouseEnter);
        link.removeEventListener("mouseleave", onMouseLeave);
      });
    };
  }, []);

  const cursorStyle = {
    position: "fixed",
    top: position.y,
    left: position.x,
    width: isHoveringLink ? "60px" : "30px",
    height: isHoveringLink ? "60px" : "30px",
    backgroundColor: theme === "dark" ? "#fff" : "#000",
    borderRadius: "50%",
    pointerEvents: "none",
    transform: "translate(-50%, -50%)",
    transition: "width 0.2s, height 0.2s",
    zIndex: 9999,
    opacity: isHoveringLink ? 0.5 : 1,
  };

  return <div style={cursorStyle} />;
};

export default Cursor;