import React, { useState } from 'react';
import generixLogo from './assets/generix_logo.jpeg';

export default function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const projects = [
    {
      title: 'E-commerce Mobile App',
      description: 'Native mobile shopping experience with seamless checkout and push notifications.',
      technologies: ['React Native', 'TypeScript', 'Redux'],
      github: 'https://github.com',
      category: 'mobile'
    },
    {
      title: 'Task Management System',
      description: 'Collaborative task management application with real-time updates and team workflows.',
      technologies: ['React', 'TypeScript', 'Firebase'],
      github: 'https://github.com',
      category: 'web'
    },
    {
      title: 'Weather Dashboard',
      description: 'Interactive weather dashboard with real-time data and forecasts.',
      technologies: ['React', 'TypeScript', 'OpenWeather API'],
      github: 'https://github.com',
      category: 'web'
    },
    {
      title: 'RESTful API Gateway',
      description: 'Microservices API gateway with authentication, rate limiting, and monitoring.',
      technologies: ['Java', 'Spring Boot', 'PostgreSQL'],
      github: 'https://github.com',
      category: 'backend'
    },
    {
      title: 'Fitness Tracker',
      description: 'Cross-platform fitness app with workout tracking and progress analytics.',
      technologies: ['Flutter', 'Dart', 'SQLite'],
      github: 'https://github.com',
      category: 'mobile'
    },
    {
      title: 'GraphQL Server',
      description: 'Scalable GraphQL API with real-time subscriptions and data caching.',
      technologies: ['Node.js', 'GraphQL', 'Redis'],
      github: 'https://github.com',
      category: 'backend'
    }
  ];

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(p => p.category === selectedCategory);
    
  return (
    <div className="bg-background min-h-screen">
      <h1>Welcome to My Portfolio</h1>
      {/* Gradient Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 backdrop-blur-md bg-background/30 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 sm:py-5 flex justify-between items-center">
          <div className="font-semibold text-foreground text-sm sm:text-base">Julien Mattot</div>
          <div className="flex gap-6 sm:gap-10">
            <button
              onClick={() => scrollToSection('about')}
              className="relative text-muted-foreground hover:text-foreground transition-colors text-sm sm:text-base group"
            >
              About
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300 ease-out"></span>
            </button>
            <button
              onClick={() => scrollToSection('projects')}
              className="relative text-muted-foreground hover:text-foreground transition-colors text-sm sm:text-base group"
            >
              Projects
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300 ease-out"></span>
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="relative text-muted-foreground hover:text-foreground transition-colors text-sm sm:text-base group"
            >
              Contact
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300 ease-out"></span>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center px-4 sm:px-6 relative">
        <div className="max-w-6xl mx-auto w-full py-24">
          <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <div className="flex-1 text-center md:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary mb-6 text-sm sm:text-base">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                Currently working at <span className="font-semibold">TechCorp</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-4 sm:mb-6 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent font-bold tracking-tight">
                Julien Mattot
              </h1>

              <p className="text-lg sm:text-xl text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
                Software developer – Master's student
              </p>

              <p className="text-base sm:text-lg text-muted-foreground mb-8 sm:mb-10 leading-relaxed">
                Specializing in <span className="text-primary font-medium">Java</span>, <span className="text-accent font-medium">JavaScript</span>, <span className="text-primary font-medium">Node.js</span>, and <span className="text-accent font-medium">React</span>
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <button
                  onClick={() => scrollToSection('projects')}
                  className="px-6 sm:px-8 py-3 bg-gradient-to-r from-primary to-accent text-white rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all font-medium"
                >
                  View projects
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="px-6 sm:px-8 py-3 border border-border text-foreground rounded-lg hover:border-primary hover:bg-primary/5 transition-all font-medium"
                >
                  Contact me
                </button>
              </div>
            </div>

            {/* Developer Illustration */}
            <div className="relative mt-8 md:mt-0 w-full md:w-auto md:flex-1 max-w-lg">
              <div className="relative">
                {/* Background glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 rounded-full blur-3xl opacity-50"></div>

                {/* Illustration */}
                <div className="relative">
                  <img
                    src={"assets/image_developer.png"}
                    alt="Developer working at desk illustration"
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 sm:py-24 px-4 sm:px-6 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-8 sm:mb-12 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent font-bold">About me</h2>

          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
            <div className="flex-1">
              <div className="relative bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 sm:p-8">
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6">
                  I'm a passionate software developer currently pursuing my Master's degree in Computer Science.
                  With a strong foundation in both frontend and backend technologies, I specialize in building
                  scalable web applications that solve real-world problems.
                </p>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6">
                  My technical expertise spans across <span className="text-primary font-medium">Java</span>, <span className="text-accent font-medium">JavaScript</span>, <span className="text-primary font-medium">Node.js</span>, and <span className="text-accent font-medium">React</span>, allowing me to work
                  effectively on full-stack projects. I'm deeply interested in clean code architecture, performance
                  optimization, and creating exceptional user experiences.
                </p>
                <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                  When I'm not coding, you'll find me exploring new technologies, contributing to open-source
                  projects, or sharing knowledge with the developer community. I'm always eager to take on new
                  challenges and collaborate on innovative projects.
                </p>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-full blur-2xl opacity-50 animate-pulse"></div>
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 bg-gradient-to-br from-primary to-accent rounded-full p-1">
                <div className="w-full h-full bg-card rounded-full flex items-center justify-center overflow-hidden">
                  <div className="text-6xl sm:text-7xl lg:text-8xl">👨‍💻</div>
                </div>
              </div>
              {/* Company Logo Badge */}
              <div className="absolute bottom-2 right-2 bg-card border-2 border-primary rounded-full overflow-hidden shadow-lg w-16 h-16">
                <img src={generixLogo} alt="Generix Logo" className="w-full h-full object-cover block" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 sm:py-24 px-4 sm:px-6 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-6 sm:mb-8 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent font-bold">Projects</h2>

          {/* Category Filter */}
          <div className="flex gap-2 sm:gap-3 mb-8 sm:mb-12 flex-wrap">
            {[
              { id: 'all', label: 'All', icon: '🎯' },
              { id: 'web', label: 'Web', icon: '🌐' },
              { id: 'mobile', label: 'Mobile', icon: '📱' },
              { id: 'backend', label: 'Backend', icon: '⚙️' }
            ].map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg transition-all text-sm sm:text-base ${
                  selectedCategory === cat.id
                    ? 'bg-gradient-to-r from-primary to-accent text-white shadow-lg shadow-primary/30'
                    : 'bg-card border border-border text-muted-foreground hover:border-primary hover:text-foreground'
                }`}
              >
                <span className="mr-1 sm:mr-2">{cat.icon}</span>
                {cat.label}
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={index}
                className="group relative bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 sm:p-8 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <div className="inline-block px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-primary text-xs mb-3">
                        {project.category === 'web' && '🌐 Web'}
                        {project.category === 'mobile' && '📱 Mobile'}
                        {project.category === 'backend' && '⚙️ Backend'}
                      </div>
                      <h3 className="text-lg sm:text-xl text-foreground font-semibold">{project.title}</h3>
                    </div>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors ml-2 flex-shrink-0"
                      aria-label="View on GitHub"
                    >
                      <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </div>
                  <p className="text-sm sm:text-base text-muted-foreground mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2.5 sm:px-3 py-1 bg-muted/50 text-foreground rounded-full text-xs sm:text-sm border border-border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-24 px-4 sm:px-6 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-8 sm:mb-12 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent font-bold">Contact</h2>
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
            {/* Contact Info */}
            <div>
              <p className="text-base sm:text-lg text-muted-foreground mb-8 leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
              <div className="space-y-4">
                <a href="mailto:julien.mattot@example.com" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group">
                  <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="text-sm sm:text-base break-all">julien.mattot@example.com</span>
                </a>
                <a href="https://linkedin.com/in/julienmattot" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group">
                  <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors flex-shrink-0">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </div>
                  <span className="text-sm sm:text-base break-all">linkedin.com/in/julienmattot</span>
                </a>
                <a href="https://github.com/julienmattot" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group">
                  <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors flex-shrink-0">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-sm sm:text-base break-all">github.com/julienmattot</span>
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-foreground mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-foreground"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-foreground mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all text-foreground"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-foreground mb-2">Message</label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all resize-none text-foreground"
                />
              </div>
              <button
                type="submit"
                className="w-full px-8 py-3 bg-gradient-to-r from-primary to-accent text-white rounded-lg hover:shadow-lg hover:shadow-primary/30 transition-all"
              >
                Send message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 sm:py-8 px-4 sm:px-6 border-t border-border relative">
        <div className="max-w-6xl mx-auto text-center text-muted-foreground text-sm sm:text-base">
          <p>© 2026 Julien Mattot. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}