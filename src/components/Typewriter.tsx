"use client";
import { useEffect, useState } from "react";

type Props = {
  strings?: string[];
  typeDelay?: number; // ms per char
  cursor?: string;
};

export default function HeroTypewriter({
  strings = [
    "Mi super poder está en hacer entender fácil lo difícil a través del contenido, logrando resultados medibles, teniendo como enfoque las personas usuarias.",
  ],
  typeDelay = 60,
  cursor = "|",
}: Props) {
  const [text, setText] = useState("");
  const [char, setChar] = useState(0);

  useEffect(() => {
    if (char >= strings[0].length) return; // stop typing

    const timer = window.setTimeout(() => {
      setText(strings[0].slice(0, char + 1));
      setChar(char + 1);
    }, typeDelay);

    return () => clearTimeout(timer);
  }, [char, strings, typeDelay]);

  return (
    <span aria-live='polite'>
      {text}
      <span aria-hidden='true'>{cursor}</span>
    </span>
  );
}
