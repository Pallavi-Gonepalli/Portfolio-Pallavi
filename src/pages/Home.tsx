
import { useState, useEffect } from 'react';
import { ArrowRight, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

const ROLES = [
  'UI Developer',
  'Full Stack Developer',
];

const TYPING_SPEED   = 80;   // ms per character while typing
const ERASING_SPEED  = 40;   // ms per character while erasing
const PAUSE_AFTER    = 1800; // ms to hold the completed word
const PAUSE_BEFORE   = 300;  // ms before starting to type the next word

function useTypewriter(roles: string[]) {
  const [display, setDisplay]   = useState('');
  const [roleIdx, setRoleIdx]   = useState(0);
  const [charIdx, setCharIdx]   = useState(0);
  const [erasing, setErasing]   = useState(false);
  const [pausing, setPausing]   = useState(false);

  useEffect(() => {
    if (pausing) return;

    const current = roles[roleIdx];

    if (!erasing) {
      if (charIdx < current.length) {
        const t = setTimeout(() => {
          setDisplay(current.slice(0, charIdx + 1));
          setCharIdx(c => c + 1);
        }, TYPING_SPEED);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => {
          setPausing(true);
          setTimeout(() => {
            setPausing(false);
            setErasing(true);
          }, PAUSE_AFTER);
        }, 0);
        return () => clearTimeout(t);
      }
    } else {
      if (charIdx > 0) {
        const t = setTimeout(() => {
          setDisplay(current.slice(0, charIdx - 1));
          setCharIdx(c => c - 1);
        }, ERASING_SPEED);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => {
          setErasing(false);
          setRoleIdx(i => (i + 1) % roles.length);
        }, PAUSE_BEFORE);
        return () => clearTimeout(t);
      }
    }
  }, [charIdx, erasing, pausing, roleIdx, roles]);

  return display;
}

const Home = () => {
  const typedText = useTypewriter(ROLES);

  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="flex items-center justify-center min-h-screen pt-20 sm:pt-24">
        <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">

            {/* Heading */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight">
              Hi, I'm Pallavi Gonepalli
            </h1>

            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-3 sm:mb-4 text-foreground min-h-[2.5rem] flex items-center justify-center gap-0.5">
              <span>{typedText}</span>
              <span className="inline-block w-0.5 h-[1.1em] bg-purple-500 ml-1 animate-blink" />
            </h2>

            <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed px-2">
              Building full-stack web applications with Python and React.js, Next.js from
              PostgreSQL, MySQL-backed FastAPI services to Tailwind CSS-based frontends,
              across real-world government and enterprise projects.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
              <Link
                to="/projects"
                className="group w-full sm:w-auto flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold text-base sm:text-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                View Projects
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>

              <a
                href="/Pallavi.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-full sm:w-auto flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white rounded-full font-semibold text-base sm:text-lg transition-all duration-300 transform hover:scale-105"
              >
                <Download className="mr-2 w-5 h-5 group-hover:animate-bounce" />
                Download Resume
              </a>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-12 sm:mt-16 pb-12 sm:pb-16 animate-fade-in">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-3xl mx-auto">
              <div className="text-center p-5 sm:p-6 rounded-xl bg-card border border-border hover:shadow-lg transition-shadow duration-300">
                <div className="text-3xl font-bold text-purple-600 mb-2">6+</div>
                <div className="text-sm text-muted-foreground">Months Experience</div>
                <div className="text-sm text-muted-foreground">As UI Developer</div>
              </div>

              <div className="text-center p-5 sm:p-6 rounded-xl bg-card border border-border hover:shadow-lg transition-shadow duration-300">
                <div className="text-3xl font-bold text-purple-600 mb-2">3+</div>
                <div className="text-sm text-muted-foreground">Projects Delivered</div>
                <div className="text-sm text-muted-foreground">End to End</div>
              </div>

              <div className="text-center p-5 sm:p-6 rounded-xl bg-card border border-border hover:shadow-lg transition-shadow duration-300">
                <div className="text-3xl font-bold text-purple-600 mb-2">10+</div>
                <div className="text-sm text-muted-foreground">Technologies Used</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
