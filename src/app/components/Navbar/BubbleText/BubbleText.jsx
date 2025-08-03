import React from "react";
import { useTypewriter } from "react-simple-typewriter";
import styles from "./bubble.module.css";


const BubbleText = () => {
  const [typeEffect] = useTypewriter({
      words: ["Hello! ", "Hallo!", "Bonjour! ", "Hola!", "Namaste! "],
      loop: {},
      typeSpeed: 50,
      deleteSpeed: 30,
    });
    return (
      <h2 className="bonjour w-[100px] text-center text-4xl font-thin text-indigo-300">
        {<span className={styles.hoverText}>{typeEffect} </span> }

      </h2>
    );
  };

export default BubbleText;