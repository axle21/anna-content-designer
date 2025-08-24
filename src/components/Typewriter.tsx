"use client";
import { useEffect, useState } from "react";

type Props = {
  strings?: string[];
  typeDelay?: number; // ms per char when typing
  deleteDelay?: number; // ms per char when deleting
  pauseMs?: number; // pause at end of a word
  cursor?: string;
  loop?: boolean;
};

export default function HeroTypewriter({
  strings = [
    "Mi super poder está en hacer entender fácil lo difícil a través del contenido, logrando resultados medibles, teniendo como enfoque las personas usuarias.",
  ],
  typeDelay = 60,
  deleteDelay = 20,
  pauseMs = 5000,
  cursor = "|",
  loop = false,
}: Props) {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [idx, setIdx] = useState(0); // which string
  const [char, setChar] = useState(0); // char position

  useEffect(() => {
    let timer: number;

    // finished typing current string
    if (!isDeleting && char === strings[idx].length) {
      timer = window.setTimeout(() => setIsDeleting(true), pauseMs);
      return () => clearTimeout(timer);
    }

    // finished deleting -> move to next string
    if (isDeleting && char === 0) {
      const next = (idx + 1) % strings.length;
      if (!loop && next === 0) return; // stop if not looping
      setIdx(next);
      setIsDeleting(false);
    }

    const step = () => {
      const current = strings[idx];
      const nextLen = isDeleting
        ? Math.max(0, char - 1)
        : Math.min(current.length, char + 1);
      setText(current.slice(0, nextLen));
      setChar(nextLen);
    };

    timer = window.setTimeout(step, isDeleting ? deleteDelay : typeDelay);
    return () => clearTimeout(timer);
  }, [char, idx, isDeleting, strings, typeDelay, deleteDelay, pauseMs, loop]);

  return (
    <span aria-live='polite'>
      {text}
      <span aria-hidden='true'>{cursor}</span>
    </span>
  );
}
