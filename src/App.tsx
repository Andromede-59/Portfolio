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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Création du FormData pour correspondre à upload.none() côté serveur
    const data = new FormData();
    data.append('name', formData.name);
    data.append('email', formData.email);
    data.append('message', formData.message);

    try {
      const response = await fetch('/api/sendMail', {
        method: 'POST',
        body: data, // On envoie le FormData directement (pas de JSON.stringify)
        // Note : Ne pas mettre de Header 'Content-Type', le navigateur le fait seul pour le FormData
      });

      if (response.ok) {
        alert('Message envoyé avec succès !');
        // Optionnel : reset du formulaire après envoi
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert("Erreur lors de l'envoi.");
      }
    } catch (error) {
      console.error("Erreur réseau :", error);
    }
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