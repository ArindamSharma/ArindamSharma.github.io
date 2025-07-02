import React, { useEffect, useState } from "react";

function WordSwitcher({ words, interval = 3000, typeSpeed = 40, className = "" }) {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    let typingTimeout;
    let word = words[index] || "";
    if (typing) {
      if (displayed.length < word.length) {
        typingTimeout = setTimeout(() => {
          setDisplayed(word.slice(0, displayed.length + 1));
        }, typeSpeed);
      } else {
        setTimeout(() => setTyping(false), interval - word.length * typeSpeed);
      }
    } else {
      setTimeout(() => {
        setDisplayed("");
        setTyping(true);
        setIndex((prev) => (prev + 1) % words.length);
      }, 400);
    }
    return () => clearTimeout(typingTimeout);
  }, [displayed, typing, index, words, interval, typeSpeed]);

  if (!words || words.length === 0) return null;
  return <span className={className}>{displayed}<span className="word-cursor">|</span></span>;
}

export default WordSwitcher;
