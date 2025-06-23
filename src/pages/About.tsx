
import React from 'react';
import { GraduationCap, Award, Heart } from 'lucide-react';

const About = () => {
  const education = [
    {
      degree: "B.Tech in Computer Science & Engineering",
      institution: "Dhanekula Institute",
      period: "2021 - 2025",
      cgpa: "8.8",
      status: "Current"
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
    "Web Development", "Cybersecurity Research", "Machine Learning",
    "Reading Tech Blogs", "Coding Challenges", "Photography"
  ];

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            About Me
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Passionate about technology, security, and creating meaningful digital experiences
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <div className="bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <Heart className="w-6 h-6 mr-3 text-purple-600" />
                My Journey
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                I'm a passionate full-stack developer with a strong foundation in web technologies and a keen interest in cybersecurity. 
                I love building responsive, efficient web applications and exploring how deep learning can enhance online security.
              </p>
              <p className="text-muted-foreground leading-relaxed mt-4">
                My journey in technology started with curiosity about how websites work, which led me to explore programming languages, 
                frameworks, and eventually cybersecurity. I believe in continuous learning and staying updated with the latest technological advancements.
              </p>
            </div>

            <div className="bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
                <Heart className="w-6 h-6 mr-3 text-pink-600" />
                Interests & Hobbies
              </h2>
              <div className="grid grid-cols-2 gap-3">
                {hobbies.map((hobby, index) => (
                  <div 
                    key={index}
                    className="bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 
                             px-4 py-2 rounded-lg text-sm font-medium text-center
                             hover:from-purple-200 hover:to-pink-200 dark:hover:from-purple-800/40 dark:hover:to-pink-800/40
                             transition-all duration-300 transform hover:scale-105"
                  >
                    {hobby}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-card border border-border rounded-2xl p-8 hover:shadow-lg transition-shadow duration-300">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <GraduationCap className="w-6 h-6 mr-3 text-purple-600" />
                Education Timeline
              </h2>
              
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div key={index} className="relative">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center">
                        <Award className="w-6 h-6 text-white" />
                      </div>
                      
                      <div className="ml-4 flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="font-semibold text-lg">{edu.degree}</h3>
                          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                            edu.status === 'Current' 
                              ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                              : 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400'
                          }`}>
                            {edu.status}
                          </span>
                        </div>
                        
                        <p className="text-muted-foreground font-medium">{edu.institution}</p>
                        <p className="text-sm text-muted-foreground">{edu.period}</p>
                        
                        <div className="mt-2 inline-flex items-center px-3 py-1 bg-purple-100 dark:bg-purple-900/30 rounded-full">
                          <span className="text-sm font-semibold text-purple-800 dark:text-purple-300">
                            CGPA: {edu.cgpa}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    {index < education.length - 1 && (
                      <div className="absolute left-6 top-12 w-0.5 h-8 bg-gradient-to-b from-purple-600 to-pink-600"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">Let's Build Something Amazing Together!</h2>
            <p className="text-purple-100 mb-6">
              I'm always excited to work on new projects and collaborate with fellow developers and innovators.
            </p>
            <a 
              href="/contact"
              className="inline-flex items-center px-6 py-3 bg-white text-purple-600 rounded-full font-semibold hover:bg-purple-50 transition-colors duration-300"
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
