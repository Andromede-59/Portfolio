import React, { useState, type FormEvent } from 'react';
import AboutSection from './components/AboutSection';
import BackgroundEffects from './components/BackgroundEffects';
import ContactSection, { type ContactFormData } from './components/ContactSection';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import Navigation from './components/Navigation';
import ProjectsSection from './components/ProjectsSection';
import { projects, type FilterCategory } from './data/projects';

export default function App() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: ''
  });

  const [selectedCategory, setSelectedCategory] = useState<FilterCategory>('all');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-background min-h-screen">
      <BackgroundEffects />
      <Navigation
        onAboutClick={() => scrollToSection('about')}
        onProjectsClick={() => scrollToSection('projects')}
        onContactClick={() => scrollToSection('contact')}
      />
      <HeroSection
        onViewProjects={() => scrollToSection('projects')}
        onContact={() => scrollToSection('contact')}
      />
      <AboutSection />
      <ProjectsSection
        projects={projects}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      <ContactSection
        formData={formData}
        onChangeField={(field, value) => setFormData((current) => ({ ...current, [field]: value }))}
        onSubmit={handleSubmit}
      />
      <Footer />
    </div>
  );
}