/**
 * useTypewriter — cycles through phrases with a typing/deleting effect.
 */
import { useEffect, useState } from "react";

interface Options {
  phrases: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseTime?: number;
}

export function useTypewriter({
  phrases,
  typingSpeed = 80,
  deletingSpeed = 40,
  pauseTime = 1600,
}: Options) {
  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[phraseIndex % phrases.length];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && text === current) {
      timeout = setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setPhraseIndex((i) => (i + 1) % phrases.length);
    } else {
      timeout = setTimeout(
        () => {
          setText((prev) =>
            isDeleting ? current.substring(0, prev.length - 1) : current.substring(0, prev.length + 1)
          );
        },
        isDeleting ? deletingSpeed : typingSpeed
      );
    }
    return () => clearTimeout(timeout);
  }, [text, isDeleting, phraseIndex, phrases, typingSpeed, deletingSpeed, pauseTime]);

  return text;
}
