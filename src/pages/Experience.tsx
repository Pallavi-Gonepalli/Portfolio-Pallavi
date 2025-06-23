
import React from 'react';
import { Briefcase, Calendar, MapPin, Award } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: "MERN Stack Intern",
      company: "Codegnan IT Solutions",
      duration: "7 weeks",
      period: "2024",
      location: "Remote",
      description: "Developed full-stack applications including a comprehensive Book Exchange Platform using MongoDB, Express.js, React.js, and Node.js.",
      achievements: [
        "Built a complete Book Exchange Platform with user authentication",
        "Implemented real-time features using Socket.io",
        "Designed responsive UI components with React.js",
        "Integrated MongoDB for efficient data management"
      ],
      technologies: ["React.js", "Node.js", "MongoDB", "Express.js", "Socket.io"],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Python Intern",
      company: "Tech-Mark | HODU Foundation",
      duration: "11 weeks",
      period: "2024",
      location: "Remote",
      description: "Developed machine learning models for employee attrition prediction using advanced Python libraries and statistical analysis.",
      achievements: [
        "Created ML models for employee turnover prediction",
        "Achieved 85% accuracy in attrition prediction",
        "Implemented data preprocessing and feature engineering",
        "Developed interactive dashboards for data visualization"
      ],
      technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Python Full Stack Intern",
      company: "ExcelR",
      duration: "6 weeks",
      period: "2023",
      location: "Hyderabad",
      description: "Gained hands-on experience with Django framework, SQL databases, and frontend technologies to build complete web applications.",
      achievements: [
        "Developed web applications using Django framework",
        "Implemented database operations with SQL",
        "Created responsive frontend interfaces",
        "Learned best practices for full-stack development"
      ],
      technologies: ["Python", "Django", "SQL", "HTML", "CSS", "JavaScript"],
      color: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Professional Experience
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            My journey through various internships and hands-on learning experiences in technology
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-600 to-pink-600"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                style={{
                  animationDelay: `${index * 0.2}s`,
                  animation: 'fadeInUp 0.6s ease-out forwards'
                }}
              >
                {/* Timeline Node */}
                <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full border-4 border-background z-10"></div>

                {/* Content Card */}
                <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                  <div className="bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${exp.color} flex items-center justify-center`}>
                        <Briefcase className="w-6 h-6 text-white" />
                      </div>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${exp.color} bg-opacity-10`}>
                        {exp.duration}
                      </span>
                    </div>

                    <h3 className="text-xl font-bold mb-2">{exp.title}</h3>
                    <h4 className="text-lg font-semibold text-purple-600 mb-4">{exp.company}</h4>
                    
                    <div className="flex items-center text-sm text-muted-foreground mb-4 space-x-4">
                      <span className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {exp.period}
                      </span>
                      <span className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {exp.location}
                      </span>
                    </div>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="mb-6">
                      <h5 className="font-semibold mb-3 flex items-center">
                        <Award className="w-4 h-4 mr-2 text-purple-600" />
                        Key Achievements
                      </h5>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="text-sm text-muted-foreground flex items-start">
                            <span className="w-2 h-2 bg-purple-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="px-3 py-1 bg-muted rounded-lg text-sm font-medium hover:bg-accent transition-colors duration-300"
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

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">Ready for New Challenges</h2>
            <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
              Each internship has contributed to my growth as a developer. I'm excited to apply these experiences 
              to new opportunities and continue learning in a professional environment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-white text-purple-600 rounded-full font-semibold hover:bg-purple-50 transition-colors duration-300"
              >
                Hire Me
              </a>
              <a 
                href="#"
                className="inline-flex items-center px-6 py-3 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-colors duration-300"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default Experience;
