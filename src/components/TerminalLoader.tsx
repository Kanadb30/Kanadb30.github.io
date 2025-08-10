import * as React from "react";

const commands = [
  "$ echo \"Running scripts to load this site...\"",
  "$ npm ci",
  "added 0 packages, audited 0 packages",
  "$ git pull origin main --ff-only",
  "Already up to date.",
  "$ npm run build",
  "vite building for production...",
  "✓ assets optimized",
  "✓ build completed in 2.3s",
  "$ node server.js",
  "Server running at http://localhost:3000",
];

interface TerminalLoaderProps {
  active: boolean;
}

const TerminalLoader: React.FC<TerminalLoaderProps> = ({ active }) => {
  const [displayed, setDisplayed] = React.useState<string>("");
  const [lineIndex, setLineIndex] = React.useState(0);
  const [charIndex, setCharIndex] = React.useState(0);

  React.useEffect(() => {
    if (!active) return;
    const currentLine = commands[lineIndex];

    const typer = setInterval(() => {
      setDisplayed((prev) => prev + currentLine.charAt(charIndex));
      setCharIndex((c) => c + 1);
    }, 50);

    if (charIndex >= currentLine.length) {
      clearInterval(typer);
      setTimeout(() => {
        setDisplayed((prev) => prev + "\n");
        setCharIndex(0);
        setLineIndex((i) => (i + 1) % commands.length);
      }, 400);
    }

    return () => clearInterval(typer);
  }, [active, charIndex, lineIndex]);

  return (
    <div
      className={`fixed inset-0 z-50 transition-opacity duration-500 ${
        active ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div className="terminal-screen w-full h-full flex items-center justify-center">
        <div className="max-w-2xl w-full px-6 py-8 border border-[hsl(var(--terminal-green))]/30 rounded-md">
          <div className="font-mono text-sm whitespace-pre-wrap leading-6">
            {displayed}
            <span className="terminal-cursor" aria-hidden="true" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TerminalLoader;
