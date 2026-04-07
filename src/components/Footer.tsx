
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Mail, Send } from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setEmail('');
    setTimeout(() => setSubscribed(false), 4000);
  };

  const navLinks = [
    { label: 'Home', to: '/' },
    { label: 'About', to: '/about' },
    { label: 'Skills', to: '/skills' },
    { label: 'Projects', to: '/projects' },
    { label: 'Experience', to: '/experience' },
    { label: 'Certifications', to: '/certifications' },
    { label: 'Contact', to: '/contact' },
  ];

  const platformLinks = [
    { label: 'LinkedIn', href: 'https://linkedin.com/in/pallavi-gonepalli' },
    { label: 'GitHub', href: 'https://github.com/Pallavi-Gonepalli' },
    { label: 'HackerRank', href: 'https://hackerrank.com/profile/pallavigonepall1' },
  ];

  return (
    <footer className="bg-card border-t border-border">

      {/* Main grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 lg:gap-8">

          {/* Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-foreground">
              Navigation
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-xs text-muted-foreground hover:text-purple-600 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Platform links */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-foreground">
              Platforms
            </h4>
            <ul className="space-y-2">
              {platformLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-muted-foreground hover:text-purple-600 transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick connect */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-foreground">
              Quick Connect
            </h4>
            <a
              href="mailto:pallavigonepalli55@gmail.com"
              className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-purple-600 transition-colors duration-200"
            >
              <Mail className="w-3.5 h-3.5 flex-shrink-0" />
              pallavigonepalli55@gmail.com
            </a>
            <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
              Vijayawada, India
            </p>
            <div className="flex items-center gap-1.5 pt-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs font-medium text-green-500">Available for Hire</span>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-widest text-foreground">
              Stay Updated
            </h4>
            <form onSubmit={handleSubscribe} className="space-y-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="w-full px-3 py-2 rounded-lg border border-border bg-background text-xs focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-all duration-200 placeholder:text-muted-foreground/60"
              />
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-1.5 px-3 py-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white text-xs font-semibold rounded-lg transition-all duration-300 hover:scale-105"
              >
                <Send className="w-3.5 h-3.5" />
                {subscribed ? 'Subscribed!' : 'Subscribe'}
              </button>
            </form>
            {subscribed && (
              <p className="text-xs text-green-500 font-medium">You're on the list — thanks!</p>
            )}
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-col sm:flex-row items-center justify-between gap-1">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Pallavi Gonepalli. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Built with React · Next.js · Tailwind CSS
          </p>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
