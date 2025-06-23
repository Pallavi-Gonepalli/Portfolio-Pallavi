
import React from 'react';
import { Award, ExternalLink, Calendar, CheckCircle } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: "MERN Stack Developer",
      issuer: "Codegnan IT Solutions",
      date: "2024",
      description: "Comprehensive certification covering MongoDB, Express.js, React.js, and Node.js development",
      skills: ["MongoDB", "Express.js", "React.js", "Node.js", "Full Stack Development"],
      color: "from-green-500 to-emerald-500",
      status: "Completed"
    },
    {
      title: "Python Full Stack Developer",
      issuer: "ExcelR",
      date: "2023",
      description: "Full-stack Python development with Django, SQL, and frontend technologies",
      skills: ["Python", "Django", "SQL", "HTML", "CSS", "JavaScript"],
      color: "from-blue-500 to-cyan-500",
      status: "Completed"
    },
    {
      title: "Python Programming",
      issuer: "Tech-Mark | HODU Foundation",
      date: "2024",
      description: "Advanced Python programming with focus on machine learning and data analysis",
      skills: ["Python", "Machine Learning", "Data Analysis", "Pandas", "NumPy"],
      color: "from-purple-500 to-pink-500",
      status: "Completed"
    },
    {
      title: "Responsive Web Design",
      issuer: "freeCodeCamp",
      date: "2023",
      description: "Comprehensive course covering HTML, CSS, responsive design principles, and accessibility",
      skills: ["HTML5", "CSS3", "Responsive Design", "Flexbox", "Grid"],
      color: "from-orange-500 to-red-500",
      status: "Completed"
    },
    {
      title: "SQL Basics",
      issuer: "HackerRank",
      date: "2023",
      description: "Fundamental SQL concepts including queries, joins, and database management",
      skills: ["SQL", "Database Design", "Queries", "Joins", "Data Management"],
      color: "from-indigo-500 to-blue-500",
      status: "Completed"
    },
    {
      title: "Web Development using HTML/CSS",
      issuer: "Infosys Springboard",
      date: "2023",
      description: "Foundation course in web development with HTML and CSS best practices",
      skills: ["HTML", "CSS", "Web Standards", "Best Practices"],
      color: "from-pink-500 to-rose-500",
      status: "Completed"
    },
    {
      title: "Programming Foundations with Python",
      issuer: "Online Course",
      date: "2022",
      description: "Introduction to programming concepts and Python fundamentals",
      skills: ["Python Basics", "Programming Logic", "Problem Solving", "Algorithms"],
      color: "from-teal-500 to-green-500",
      status: "Completed"
    }
  ];

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Certifications & Achievements
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Continuous learning through structured courses and professional certifications
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mb-16">
          {certifications.map((cert, index) => (
            <div 
              key={index}
              className="group bg-card border border-border rounded-2xl p-6 hover:shadow-xl transition-all duration-500 transform hover:scale-105"
              style={{
                animationDelay: `${index * 0.1}s`,
                animation: 'fadeInUp 0.6s ease-out forwards'
              }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${cert.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <Award className="w-6 h-6 text-white" />
                </div>
                
                <div className="flex items-center space-x-2">
                  <span className={`flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                    cert.status === 'Completed' 
                      ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400'
                      : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
                  }`}>
                    <CheckCircle className="w-3 h-3 mr-1" />
                    {cert.status}
                  </span>
                  <button className="p-1 rounded-lg hover:bg-accent transition-colors duration-300">
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
              
              <h3 className="text-lg font-bold mb-2 group-hover:text-purple-600 transition-colors duration-300">
                {cert.title}
              </h3>
              
              <p className="text-purple-600 font-semibold mb-2">{cert.issuer}</p>
              
              <div className="flex items-center text-sm text-muted-foreground mb-4">
                <Calendar className="w-4 h-4 mr-1" />
                {cert.date}
              </div>
              
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {cert.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {cert.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="px-2 py-1 bg-muted rounded-md text-xs font-medium hover:bg-accent transition-colors duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="text-center p-6 bg-card border border-border rounded-xl hover:shadow-lg transition-shadow duration-300">
            <div className="text-3xl font-bold text-purple-600 mb-2">{certifications.length}</div>
            <div className="text-sm text-muted-foreground">Total Certifications</div>
          </div>
          
          <div className="text-center p-6 bg-card border border-border rounded-xl hover:shadow-lg transition-shadow duration-300">
            <div className="text-3xl font-bold text-green-600 mb-2">7</div>
            <div className="text-sm text-muted-foreground">Completed Courses</div>
          </div>
          
          <div className="text-center p-6 bg-card border border-border rounded-xl hover:shadow-lg transition-shadow duration-300">
            <div className="text-3xl font-bold text-blue-600 mb-2">24</div>
            <div className="text-sm text-muted-foreground">Weeks of Training</div>
          </div>
          
          <div className="text-center p-6 bg-card border border-border rounded-xl hover:shadow-lg transition-shadow duration-300">
            <div className="text-3xl font-bold text-orange-600 mb-2">5+</div>
            <div className="text-sm text-muted-foreground">Technologies Mastered</div>
          </div>
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white">
            <h2 className="text-2xl font-bold mb-4">Commitment to Continuous Learning</h2>
            <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
              I believe in staying current with technology trends and continuously upgrading my skills. 
              Each certification represents dedicated effort to master new technologies and methodologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://linkedin.com/in/pallavi-gonepalli"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-white text-purple-600 rounded-full font-semibold hover:bg-purple-50 transition-colors duration-300"
              >
                View Credentials
              </a>
              <a 
                href="/contact"
                className="inline-flex items-center px-6 py-3 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-colors duration-300"
              >
                Let's Connect
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

export default Certifications;
