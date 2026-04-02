
import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-6 sm:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">

          {/* Brand */}
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground flex items-center justify-center md:justify-start">
              Made with <Heart className="w-4 h-4 mx-1 text-blue-500" fill="currentColor" /> by Pallavi Gonepalli
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              © 2024 All rights reserved.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-2">
            <a
              href="mailto:pallavigonepalli55@gmail.com"
              className="text-sm text-muted-foreground hover:text-purple-600 transition-colors duration-300"
            >
              Email
            </a>
            <a
              href="https://linkedin.com/in/pallavi-gonepalli"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-purple-600 transition-colors duration-300"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/Pallavi-Gonepalli"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-purple-600 transition-colors duration-300"
            >
              GitHub
            </a>
            <a
              href="https://hackerrank.com/profile/pallavigonepall1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-purple-600 transition-colors duration-300"
            >
              HackerRank
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
