import * as React from "react";

interface TypewriterProps {
  phrases: string[];
  typingSpeed?: number; // ms per char
  pause?: number; // pause between phrases
}

const Typewriter: React.FC<TypewriterProps> = ({ phrases, typingSpeed = 70, pause = 1000 }) => {
  const [text, setText] = React.useState("");
  const [phraseIndex, setPhraseIndex] = React.useState(0);
  const [charIndex, setCharIndex] = React.useState(0);
  const [deleting, setDeleting] = React.useState(false);

  React.useEffect(() => {
    const current = phrases[phraseIndex];

    if (!deleting && charIndex <= current.length) {
      const id = setTimeout(() => {
        setText(current.slice(0, charIndex));
        setCharIndex((c) => c + 1);
      }, typingSpeed);
      return () => clearTimeout(id);
    }

    if (!deleting && charIndex > current.length) {
      const id = setTimeout(() => setDeleting(true), pause);
      return () => clearTimeout(id);
    }

    if (deleting && charIndex >= 0) {
      const id = setTimeout(() => {
        setText(current.slice(0, charIndex));
        setCharIndex((c) => c - 1);
      }, typingSpeed / 2);
      return () => clearTimeout(id);
    }

    if (deleting && charIndex < 0) {
      setDeleting(false);
      setPhraseIndex((i) => (i + 1) % phrases.length);
      setCharIndex(0);
    }
  }, [phrases, phraseIndex, charIndex, deleting, typingSpeed, pause]);

  return (
    <span>
      {text}
      <span className="inline-block w-1 h-5 bg-foreground ml-1 animate-pulse align-middle" aria-hidden="true" />
    </span>
  );
};

export default Typewriter;
