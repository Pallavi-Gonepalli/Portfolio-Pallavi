
import React from 'react';
import { ArrowRight, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import FloatingPetals from '../components/FloatingPetals';

const Home = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <FloatingPetals />
      
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in">
            <div className="mb-8">
              <div className="w-48 h-48 mx-auto mb-8 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 p-1 animate-pulse">
                <div className="w-full h-full rounded-full bg-background flex items-center justify-center">
                  <div className="w-40 h-40 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-6xl font-bold text-white">
                    PG
                  </div>
                </div>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Hi, I'm Pallavi Gonepalli
            </h1>
            
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-foreground">
              Full Stack Developer | Cybersecurity Enthusiast
            </h2>
            
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Crafting secure, scalable, and smart web experiences with modern technologies and a passion for innovation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                to="/projects"
                className="group flex items-center justify-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold text-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                View Projects
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
              
              <a 
                href="#"
                className="group flex items-center justify-center px-8 py-4 border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              >
                <Download className="mr-2 w-5 h-5 group-hover:animate-bounce" />
                Download Resume
              </a>
            </div>
          </div>
          
          <div className="mt-16 animate-fade-in delay-500">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="text-center p-6 rounded-xl bg-card border border-border hover:shadow-lg transition-shadow duration-300">
                <div className="text-3xl font-bold text-purple-600 mb-2">3+</div>
                <div className="text-sm text-muted-foreground">Years of Learning</div>
              </div>
              
              <div className="text-center p-6 rounded-xl bg-card border border-border hover:shadow-lg transition-shadow duration-300">
                <div className="text-3xl font-bold text-purple-600 mb-2">5+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              
              <div className="text-center p-6 rounded-xl bg-card border border-border hover:shadow-lg transition-shadow duration-300">
                <div className="text-3xl font-bold text-purple-600 mb-2">8.8</div>
                <div className="text-sm text-muted-foreground">CGPA</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
