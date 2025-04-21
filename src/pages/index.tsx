import { useEffect, useState } from "react";
import TypingText from "./TypingText";

export default function Home() {
  const [text, setText] = useState("Hey there!");

  useEffect(() => {
    const timer = setTimeout(() => {
      setText("I am Postbot, your friendly assistant for your API workflows.");
    } , 2000);

    return () => clearTimeout(timer);
  }, []); 

  return (
    <TypingText text={text} key={text} />
  );
}
