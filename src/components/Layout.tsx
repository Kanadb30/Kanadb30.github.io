import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
const navItems = [
  { to: "#home", label: "Home" },
  { to: "#about", label: "About" },
  { to: "#projects", label: "Projects" },
  { to: "#skills", label: "Skills" },
  { to: "#contact", label: "Contact" },
];

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => (localStorage.getItem('theme') as 'light' | 'dark') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'));
  useEffect(() => {
    if (theme === 'dark') document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
    localStorage.setItem('theme', theme);
  }, [theme]);
  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-40 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <nav className="container flex items-center justify-between h-16">
          <Link to="/" className="font-semibold text-lg hover-scale">KB</Link>
          <ul className="flex items-center gap-6">
            {navItems.map((item) => (
              <li key={item.to}>
                <a href={item.to} className="story-link px-1 py-2" aria-label={item.label}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              aria-label="Toggle theme"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            <Button asChild variant="accent" size="sm" className="hidden sm:inline-flex">
              <a href="#projects">View Projects</a>
            </Button>
          </div>
        </nav>
      </header>
      <main className="flex-1 container py-12 animate-enter">
        {children}
      </main>
      <footer className="border-t">
        <div className="container py-8 text-sm flex items-center justify-between">
          <p>© {new Date().getFullYear()} Kanad Bajpai</p>
          <div className="flex gap-4">
            <a className="story-link" href="https://www.linkedin.com/in/kanadbajpai/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">LinkedIn</a>
            <a className="story-link" href="https://www.instagram.com/kanad1902_b/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">Instagram</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
