
import React from 'react';
import { Briefcase, Calendar, MapPin, Award } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "UI Developer",
      company: "Innomax IT Solutions",
      duration: "~6 Months",
      period: "2024 – Present",
      location: "Hyderabad",
      description: "Built responsive UI components for production-grade web applications, integrated React frontends with FastAPI and PHP backends, and rapidly prototyped full-stack features across government and enterprise projects.",
      achievements: [
        "Developed responsive UI components for Hop Atlas (flight booking platform on PHP) with cross-browser compatibility and improved UX",
        "Integrated frontend views with PHP backend for flight search and booking workflows",
        "Built full-stack hackathon features using React, Next.js, FastAPI, MySQL/PostgreSQL",
        "Designed and consumed RESTful APIs with FastAPI, connecting React/Next.js with Python backend logic",
        "Collaborated with cross-functional teams to rapidly prototype under tight hackathon deadlines"
      ],
      technologies: ["React.js", "Next.js", "FastAPI", "PHP", "MySQL", "PostgreSQL", "JavaScript"],
      color: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <div className="min-h-screen pt-20 pb-12 sm:pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-10 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Professional Experience
          </h1>
          <p className="text-base sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            My professional experience building full-stack applications across government, enterprise, and hackathon projects
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line — left on mobile, centered on md+ */}
          <div className="absolute left-5 sm:left-6 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-600 to-pink-600"></div>

          <div className="space-y-10 sm:space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex items-start ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                style={{
                  animationDelay: `${index * 0.2}s`,
                  animation: 'fadeInUp 0.6s ease-out forwards'
                }}
              >
                {/* Timeline dot */}
                <div className="absolute left-5 sm:left-6 md:left-1/2 md:-translate-x-1/2 w-3.5 h-3.5 sm:w-4 sm:h-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full border-4 border-background z-10 mt-3"></div>

                {/* Card — offset from dot on mobile, half-width on md+ */}
                <div className={`w-full pl-12 sm:pl-14 md:pl-0 md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                  <div className="bg-card border border-border rounded-2xl p-5 sm:p-8 hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02]">

                    {/* Card header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-r ${exp.color} flex items-center justify-center flex-shrink-0`}>
                        <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                      <span className={`px-2 sm:px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${exp.color} bg-opacity-10`}>
                        {exp.duration}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">{exp.title}</h3>
                    <h4 className="text-base sm:text-lg font-semibold text-purple-600 mb-3 sm:mb-4">{exp.company}</h4>

                    <div className="flex flex-wrap items-center text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4 gap-x-4 gap-y-1">
                      <span className="flex items-center">
                        <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1 flex-shrink-0" />
                        {exp.period}
                      </span>
                      <span className="flex items-center">
                        <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1 flex-shrink-0" />
                        {exp.location}
                      </span>
                    </div>

                    <p className="text-muted-foreground mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div className="mb-4 sm:mb-6">
                      <h5 className="font-semibold mb-2 sm:mb-3 flex items-center text-sm sm:text-base">
                        <Award className="w-4 h-4 mr-2 text-purple-600 flex-shrink-0" />
                        Key Achievements
                      </h5>
                      <ul className="space-y-1.5 sm:space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="text-xs sm:text-sm text-muted-foreground flex items-start">
                            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-600 rounded-full mt-1.5 sm:mt-2 mr-2 sm:mr-3 flex-shrink-0"></span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech tags */}
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 sm:px-3 py-1 bg-muted rounded-lg text-xs sm:text-sm font-medium hover:bg-accent transition-colors duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 sm:mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-6 sm:p-8 text-white">
            <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Ready for New Challenges</h2>
            <p className="text-purple-100 mb-4 sm:mb-6 max-w-2xl mx-auto text-sm sm:text-base">
              Each project has contributed to my growth as a developer. I'm excited to apply these
              experiences to new opportunities and continue learning in a professional environment.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-5 sm:px-6 py-2.5 sm:py-3 bg-white text-purple-600 rounded-full font-semibold hover:bg-purple-50 transition-colors duration-300 text-sm sm:text-base"
              >
                Hire Me
              </a>
              <a
                href="/Pallavi.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-5 sm:px-6 py-2.5 sm:py-3 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-colors duration-300 text-sm sm:text-base"
              >
                Download Resume
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

export default Experience;
