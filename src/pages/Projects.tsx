
import React from 'react';
import { ExternalLink, Github, Shield, Brain, BookOpen } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "MSME – Intelligent Agent Mapping",
      description: "B2B ecosystem platform with real-time business intelligence dashboard and supply chain visibility. Implemented RAG framework with NIC code analysis to auto-categorize enterprises. UUID-based PostgreSQL schema with OTP auth and automated financial tracking.",
      technologies: ["React.js", "Tailwind CSS", "FastAPI", "PostgreSQL", "RAG"],
      icon: Shield,
      color: "from-red-500 to-pink-500",
      category: "Full Stack"
    },
    {
      title: "Hop Atlas – Flight Booking Platform",
      description: "Responsive flight booking UI with search, filters, and booking flows. Integrated React frontend with PHP backend APIs for real-time listings and confirmations. Reusable components with full mobile responsiveness.",
      technologies: ["React.js", "PHP", "HTML5", "CSS3"],
      icon: Brain,
      color: "from-blue-500 to-cyan-500",
      category: "Full Stack"
    },
    {
      title: "Smart Mutation – Land & Revenue",
      description: "AI-driven land mutation automation for Andhra Pradesh Lands & Revenue Department with smart compliance engine. OCR document verification and ML fraud detection for suspicious transactions. Real-time analytics dashboard for mutation approvals and compliance.",
      technologies: ["FastAPI", "PostgreSQL", "OCR", "Machine Learning", "React.js"],
      icon: BookOpen,
      color: "from-green-500 to-emerald-500",
      category: "Gov Tech"
    },
  ];

  return (
    <div className="min-h-screen pt-20 pb-12 sm:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-10 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Featured Projects
          </h1>
          <p className="text-base sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Showcasing my journey through various technologies and problem-solving approaches
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-10 sm:mb-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-card border border-border rounded-2xl p-5 sm:p-8 hover:shadow-xl transition-all duration-500 transform hover:scale-105"
              style={{
                animationDelay: `${index * 0.1}s`,
                animation: 'fadeInUp 0.6s ease-out forwards'
              }}
            >
              <div className="flex items-start justify-between mb-4 sm:mb-6">
                <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-r ${project.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                  <project.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                </div>

                <div className="flex space-x-2">
                  <button className="p-2 rounded-lg border border-border hover:bg-accent transition-colors duration-300 min-w-[36px] min-h-[36px] flex items-center justify-center">
                    <Github className="w-4 h-4" />
                  </button>
                  <button className="p-2 rounded-lg border border-border hover:bg-accent transition-colors duration-300 min-w-[36px] min-h-[36px] flex items-center justify-center">
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="mb-3 sm:mb-4">
                <span className={`px-2.5 sm:px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${project.color} bg-opacity-10 text-opacity-90`}>
                  {project.category}
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 group-hover:text-purple-600 transition-colors duration-300">
                {project.title}
              </h3>

              <p className="text-muted-foreground mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2.5 sm:px-3 py-1 bg-muted rounded-lg text-xs sm:text-sm font-medium hover:bg-accent transition-colors duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-6 sm:p-8 text-white">
            <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">More Projects Coming Soon!</h2>
            <p className="text-purple-100 mb-4 sm:mb-6 max-w-2xl mx-auto text-sm sm:text-base">
              I'm constantly working on new projects and exploring emerging technologies.
              Check back regularly or follow my GitHub for the latest updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <a
                href="https://github.com/Pallavi-Gonepalli"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-5 sm:px-6 py-2.5 sm:py-3 bg-white text-purple-600 rounded-full font-semibold hover:bg-purple-50 transition-colors duration-300 text-sm sm:text-base"
              >
                <Github className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                View All Projects
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-5 sm:px-6 py-2.5 sm:py-3 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-colors duration-300 text-sm sm:text-base"
              >
                Let's Collaborate
              </a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default Projects;
