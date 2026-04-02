
import { ArrowRight, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <div className="flex items-center justify-center min-h-screen pt-20 sm:pt-24">
        <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">

            {/* Avatar */}
            <div className="mb-6 sm:mb-8">
              <div className="w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 mx-auto rounded-full bg-gradient-to-r from-purple-400 to-pink-400 p-1 animate-pulse">
                <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                  <div className="w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                    PG
                  </div>
                </div>
              </div>
            </div>

            {/* Heading */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent leading-tight">
              Hi, I'm Pallavi Gonepalli
            </h1>

            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-3 sm:mb-4 text-foreground">
              Python Full Stack Developer
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
