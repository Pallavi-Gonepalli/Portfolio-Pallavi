
import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';
import { useToast } from '../hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "pallavigonepalli55@gmail.com",
      href: "mailto:pallavigonepalli55@gmail.com",
      color: "from-red-500 to-pink-500"
    },
    {
      icon: Phone,
      label: "Mobile",
      value: "+91 9381060523",
      href: "tel:+919381060523",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Vijayawada, India",
      href: "https://maps.google.com/?q=Vijayawada,India",
      color: "from-blue-500 to-cyan-500"
    }
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/pallavi-gonepalli",
      color: "hover:text-blue-600"
    },
    {
      name: "GitHub",
      url: "https://github.com/Pallavi-Gonepalli",
      color: "hover:text-gray-800 dark:hover:text-gray-200"
    },
    {
      name: "HackerRank",
      url: "https://hackerrank.com/profile/pallavigonepall1",
      color: "hover:text-green-600"
    }
  ];

  return (
    <div className="min-h-screen pt-20 pb-12 sm:pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-10 sm:mb-16">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Let's Connect
          </h1>
          <p className="text-base sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">

          {/* Contact Form */}
          <div className="bg-card border border-border rounded-2xl p-5 sm:p-8 hover:shadow-lg transition-shadow duration-300">
            <h2 className="text-xl sm:text-2xl font-bold mb-5 sm:mb-6 flex items-center">
              <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 mr-3 text-purple-600 flex-shrink-0" />
              Send a Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1.5 sm:mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-colors duration-300 text-sm sm:text-base"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1.5 sm:mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-colors duration-300 text-sm sm:text-base"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1.5 sm:mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-purple-600 focus:border-transparent transition-colors duration-300 resize-none text-sm sm:text-base"
                  placeholder="Tell me about your project or how I can help you..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center px-6 py-3.5 sm:py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
              >
                {isSubmitting ? (
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                ) : (
                  <>
                    <Send className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Right column */}
          <div className="space-y-5 sm:space-y-8">

            {/* Contact info */}
            <div className="bg-card border border-border rounded-2xl p-5 sm:p-8 hover:shadow-lg transition-shadow duration-300">
              <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Contact Information</h2>

              <div className="space-y-3 sm:space-y-6">
                {contactInfo.map((contact, index) => (
                  <a
                    key={index}
                    href={contact.href}
                    target={contact.href.startsWith('http') ? '_blank' : undefined}
                    rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center p-3 sm:p-4 rounded-lg hover:bg-accent transition-colors duration-300 group"
                  >
                    <div className={`w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-r ${contact.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                      <contact.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div className="ml-3 sm:ml-4 min-w-0">
                      <p className="font-medium text-xs sm:text-sm text-muted-foreground">{contact.label}</p>
                      <p className="font-semibold group-hover:text-purple-600 transition-colors duration-300 text-sm sm:text-base truncate">
                        {contact.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Social links */}
            <div className="bg-card border border-border rounded-2xl p-5 sm:p-8 hover:shadow-lg transition-shadow duration-300">
              <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Follow Me</h2>

              <div className="grid grid-cols-1 gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-between p-3 sm:p-4 rounded-lg border border-border hover:bg-accent ${social.color} transition-all duration-300 group`}
                  >
                    <span className="font-medium text-sm sm:text-base">{social.name}</span>
                    <span className="text-xs sm:text-sm text-muted-foreground group-hover:text-current">
                      Visit Profile →
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability badge */}
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-5 sm:p-8 text-white">
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4">Quick Response</h3>
              <p className="text-purple-100 mb-3 sm:mb-4 text-sm sm:text-base">
                I typically respond to messages within 24 hours. For urgent inquiries,
                feel free to reach out via phone or LinkedIn.
              </p>
              <div className="flex items-center text-xs sm:text-sm text-purple-100">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse flex-shrink-0"></div>
                Available for new opportunities
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
