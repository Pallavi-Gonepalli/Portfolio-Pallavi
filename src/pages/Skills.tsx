
import React from 'react';
import { Code, Database, Wrench, Users } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["Python", "JavaScript", "HTML5", "CSS3"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Frameworks & Libraries",
      icon: Code,
      skills: ["React.js", "Next.js", "FastAPI", "Node.js", "Express.js", "Bootstrap", "Tailwind CSS"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Databases & Tools",
      icon: Database,
      skills: ["MySQL", "PostgreSQL", "GitHub", "VS Code", "Cursor"],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Fundamentals",
      icon: Wrench,
      skills: ["OSI Model", "TCP/IP", "Routing Protocols"],
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Soft Skills",
      icon: Users,
      skills: ["Problem-Solving", "Leadership", "Communication", "Time Management"],
      color: "from-indigo-500 to-purple-500"
    }
  ];

  const proficiencyLevels = {
    "Python": 90,
    "JavaScript": 85,
    "React.js": 85,
    "FastAPI": 82,
    "Next.js": 80,
    "HTML5": 92,
    "CSS3": 88,
    "Node.js": 78,
    "PostgreSQL": 80,
    "MySQL": 76
  };

  return (
    <div className="min-h-screen pt-20 pb-12 sm:pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-10 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Skills &amp; Expertise
          </h1>
          <p className="text-base sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A comprehensive overview of my technical abilities and professional skills
          </p>
        </div>

        {/* Skill Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-8 mb-10 sm:mb-16">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-2xl p-5 sm:p-8 hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center mb-4 sm:mb-6`}>
                <category.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>

              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">{category.title}</h3>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className={`px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium bg-gradient-to-r ${category.color} bg-opacity-10
                               hover:bg-opacity-20 transition-all duration-300 cursor-pointer
                               border border-transparent hover:border-current`}
                    style={{
                      animationDelay: `${skillIndex * 0.1}s`,
                      animation: 'fadeIn 0.5s ease-out forwards'
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Proficiency Levels */}
        <div className="bg-card border border-border rounded-2xl p-5 sm:p-8">
          <h2 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-center">Proficiency Levels</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {Object.entries(proficiencyLevels).map(([skill, level], index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-sm sm:text-base">{skill}</span>
                  <span className="text-xs sm:text-sm text-muted-foreground">{level}%</span>
                </div>

                <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-purple-600 to-pink-600 rounded-full transition-all duration-1000 ease-out"
                    style={{
                      width: `${level}%`,
                      animation: `growWidth 1s ease-out ${index * 0.1}s forwards`
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Always Learning */}
        <div className="mt-10 sm:mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-6 sm:p-8 text-white">
            <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Always Learning &amp; Growing</h2>
            <p className="text-purple-100 mb-4 sm:mb-6 max-w-2xl mx-auto text-sm sm:text-base">
              Technology evolves rapidly, and I'm committed to staying current with the latest trends and best practices in full-stack development and AI-powered systems.
            </p>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
              <span className="px-3 sm:px-4 py-2 bg-white bg-opacity-20 rounded-full text-xs sm:text-sm font-medium">
                Currently Learning: TypeScript
              </span>
              <span className="px-3 sm:px-4 py-2 bg-white bg-opacity-20 rounded-full text-xs sm:text-sm font-medium">
                Exploring: Docker &amp; Cloud Deployment
              </span>
              <span className="px-3 sm:px-4 py-2 bg-white bg-opacity-20 rounded-full text-xs sm:text-sm font-medium">
                Interested in: Generative AI &amp; LLMs
              </span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes growWidth {
          from { width: 0%; }
          to   { width: var(--target-width); }
        }
      `}</style>
    </div>
  );
};

export default Skills;
