
import { Award, GraduationCap, Heart } from 'lucide-react';

const About = () => {
  const education = [
    {
      degree: "B.Tech in Computer Science & Engineering",
      institution: "Dhanekula Institute",
      period: "2021 - 2025",
      cgpa: "8.8",
      status: "Completed"
    },
    {
      degree: "Intermediate",
      institution: "Narayana Jr. College",
      period: "2019 - 2021",
      cgpa: "9.4",
      status: "Completed"
    },
    {
      degree: "SSC",
      institution: "Ravindra Bharathi School",
      period: "2018 - 2019",
      cgpa: "9.8",
      status: "Completed"
    }
  ];

  const hobbies = [
    "Full Stack Development", "API Design", "Machine Learning",
    "Open Source", "Hackathons", "Tech Blogs"
  ];

  return (
    <div className="min-h-screen pt-20 pb-12 sm:pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-10 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            About Me
          </h1>
          <p className="text-base sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Passionate about building full-stack applications that solve real-world problems across government and enterprise sectors
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 mb-10 sm:mb-16">

          {/* Left column */}
          <div className="space-y-5 sm:space-y-6">
            <div className="bg-card border border-border rounded-2xl p-5 sm:p-8 hover:shadow-lg transition-shadow duration-300">
              <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 flex items-center">
                <Heart className="w-5 h-5 sm:w-6 sm:h-6 mr-3 text-purple-600 flex-shrink-0" />
                My Journey
              </h2>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                I'm a Python Full Stack Developer with around 6 months of experience building web applications across frontend and backend.
                I've worked on real-world government projects like the IndiaAI MSME Agent Mapping Portal and the Smart Mutation platform for the AP Government, building UIs in React.js and APIs in FastAPI.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-3 sm:mt-4 text-sm sm:text-base">
                I enjoy turning complex requirements into clean, functional interfaces and I'm comfortable working across the full stack —
                from PostgreSQL schemas to Tailwind-based frontends.
              </p>
            </div>

            <div className="bg-card border border-border rounded-2xl p-5 sm:p-8 hover:shadow-lg transition-shadow duration-300">
              <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 flex items-center">
                <Heart className="w-5 h-5 sm:w-6 sm:h-6 mr-3 text-pink-600 flex-shrink-0" />
                Interests &amp; Hobbies
              </h2>
              <div className="grid grid-cols-2 gap-2 sm:gap-3">
                {hobbies.map((hobby, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30
                             px-3 py-2 rounded-lg text-xs sm:text-sm font-medium text-center
                             hover:from-purple-200 hover:to-pink-200 dark:hover:from-purple-800/40 dark:hover:to-pink-800/40
                             transition-all duration-300 transform hover:scale-105"
                  >
                    {hobby}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right column — Education */}
          <div>
            <div className="bg-card border border-border rounded-2xl p-5 sm:p-8 hover:shadow-lg transition-shadow duration-300">
              <h2 className="text-xl sm:text-2xl font-bold mb-5 sm:mb-6 flex items-center">
                <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 mr-3 text-purple-600 flex-shrink-0" />
                Education Timeline
              </h2>

              <div className="space-y-5 sm:space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="relative">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                        <Award className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>

                      <div className="ml-3 sm:ml-4 flex-1 min-w-0">
                        <div className="flex flex-wrap items-start justify-between gap-2 mb-1 sm:mb-2">
                          <h3 className="font-semibold text-sm sm:text-lg leading-snug">{edu.degree}</h3>
                          <span className={`flex-shrink-0 px-2 sm:px-3 py-1 rounded-full text-xs font-medium ${
                            edu.status === 'Current'
                              ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                              : 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400'
                          }`}>
                            {edu.status}
                          </span>
                        </div>

                        <p className="text-muted-foreground font-medium text-sm">{edu.institution}</p>
                        <p className="text-xs sm:text-sm text-muted-foreground">{edu.period}</p>

                        <div className="mt-2 inline-flex items-center px-2 sm:px-3 py-1 bg-purple-100 dark:bg-purple-900/30 rounded-full">
                          <span className="text-xs sm:text-sm font-semibold text-purple-800 dark:text-purple-300">
                            CGPA: {edu.cgpa}
                          </span>
                        </div>
                      </div>
                    </div>

                    {index < education.length - 1 && (
                      <div className="absolute left-5 sm:left-6 top-10 sm:top-12 w-0.5 h-6 sm:h-8 bg-gradient-to-b from-purple-600 to-pink-600"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-6 sm:p-8 text-white">
            <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Let's Build Something Amazing Together!</h2>
            <p className="text-purple-100 mb-4 sm:mb-6 text-sm sm:text-base">
              I'm always excited to work on new projects and collaborate with fellow developers and innovators.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-5 sm:px-6 py-2.5 sm:py-3 bg-white text-purple-600 rounded-full font-semibold hover:bg-purple-50 transition-colors duration-300 text-sm sm:text-base"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
