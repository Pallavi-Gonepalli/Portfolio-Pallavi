
import React from 'react';
import { ExternalLink, Github, Shield, Brain, BookOpen, Users, Gamepad2 } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Reinforcing Social Network Security with Face Biometrics & Deep Learning",
      description: "Advanced facial recognition system combined with deep reinforcement learning to secure online identities and prevent unauthorized access.",
      technologies: ["Python", "Deep Learning", "Computer Vision", "TensorFlow", "OpenCV"],
      icon: Shield,
      color: "from-red-500 to-pink-500",
      category: "Cybersecurity"
    },
    {
      title: "Employee Turnover Prediction",
      description: "Machine learning-based tool using logistic regression to predict employee attrition based on various workplace factors and inputs.",
      technologies: ["Python", "Flask", "Machine Learning", "Scikit-learn", "Pandas"],
      icon: Brain,
      color: "from-blue-500 to-cyan-500",
      category: "Machine Learning"
    },
    {
      title: "Online Book Store (MERN)",
      description: "Full-featured e-commerce platform for book browsing and purchasing with complete CRUD operations and user management.",
      technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT"],
      icon: BookOpen,
      color: "from-green-500 to-emerald-500",
      category: "Full Stack"
    },
    {
      title: "Book Exchange Platform (MERN)",
      description: "Social platform enabling users to trade and share books with features like user profiles, book listings, and exchange tracking.",
      technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "Socket.io"],
      icon: Users,
      color: "from-purple-500 to-indigo-500",
      category: "Full Stack"
    },
    {
      title: "Number Guessing Game",
      description: "Interactive web-based game with engaging UI and game logic built using vanilla JavaScript, HTML, and CSS.",
      technologies: ["HTML", "CSS", "JavaScript", "DOM Manipulation"],
      icon: Gamepad2,
      color: "from-orange-500 to-red-500",
      category: "Frontend"
    }
  ];

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Featured Projects
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Showcasing my journey through various technologies and problem-solving approaches
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="group bg-card border border-border rounded-2xl p-8 hover:shadow-xl transition-all duration-500 transform hover:scale-105"
              style={{
                animationDelay: `${index * 0.1}s`,
                animation: 'fadeInUp 0.6s ease-out forwards'
              }}
            >
              <div className="flex items-start justify-between mb-6">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${project.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <project.icon className="w-7 h-7 text-white" />
                </div>
                
                <div className="flex space-x-2">
                  <button className="p-2 rounded-lg border border-border hover:bg-accent transition-colors duration-300">
                    <Github className="w-4 h-4" />
                  </button>
                  <button className="p-2 rounded-lg border border-border hover:bg-accent transition-colors duration-300">
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
              
              <div className="mb-4">
                <span className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${project.color} bg-opacity-10 text-opacity-90`}>
                  {project.category}
                </span>
              </div>
              
              <h3 className="text-xl font-bold mb-4 group-hover:text-purple-600 transition-colors duration-300">
                {project.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex}
                    className="px-3 py-1 bg-muted rounded-lg text-sm font-medium hover:bg-accent transition-colors duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">More Projects Coming Soon!</h2>
            <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
              I'm constantly working on new projects and exploring emerging technologies. 
              Check back regularly or follow my GitHub for the latest updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://github.com/Pallavi-Gonepalli"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-white text-purple-600 rounded-full font-semibold hover:bg-purple-50 transition-colors duration-300"
              >
                <Github className="w-5 h-5 mr-2" />
                View All Projects
              </a>
              <a 
                href="/contact"
                className="inline-flex items-center px-6 py-3 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-colors duration-300"
              >
                Let's Collaborate
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

export default Projects;
