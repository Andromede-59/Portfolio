import React, { useEffect, useState, type FormEvent } from 'react';
import AboutSection from './components/AboutSection';
import BackgroundEffects from './components/BackgroundEffects';
import ContactSection, { type ContactFormData } from './components/ContactSection';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import Navigation from './components/Navigation';
import ProjectsSection from './components/ProjectsSection';
import { ProjectDetails, projects, type FilterCategory } from './data/projects';
import { Route, Routes, useLocation, useNavigate} from 'react-router-dom';
import ProjectPage from './components/ProjectPage';
import ScrollToTop from './components/ScrollToTop';

export default function App() {
  const location = useLocation();
  const navigate = useNavigate();

  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: ''
  });

  const [selectedCategory, setSelectedCategory] = useState<FilterCategory>('all');
  const [showAllProjects, setShowAllProjects] = useState(false);
  
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

  useEffect(() => {
    // Si on arrive sur "/" et que l'état "fromProject" est présent
    if (location.pathname === '/' && location.state?.fromProject) {
      
      // 1. On déplie la liste automatiquement
      setShowAllProjects(true);

      // 2. On scroll vers la section projets
      // On utilise un léger délai pour laisser le temps au rendu
      setTimeout(() => {
        const element = document.getElementById('projects');
        element?.scrollIntoView({ behavior: 'smooth' });
        
        // 3. On nettoie l'état pour éviter de scroller à chaque refresh
        window.history.replaceState({}, document.title);
      }, 150);
    }
  }, [location]);

  const scrollToSection = (id: string) => {
    if (location.pathname !== '/') {
      // Si on n'est pas sur l'accueil, on y va d'abord
      navigate('/');
      // On attend un tout petit peu que la page charge pour scroller
      setTimeout(() => {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      // Si on est déjà sur l'accueil, on scroll direct
      const element = document.getElementById(id);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-background min-h-screen">
      <BackgroundEffects />
      <Navigation
        onAboutClick={() => scrollToSection('about')}
        onProjectsClick={() => scrollToSection('projects')}
        onContactClick={() => scrollToSection('contact')}
      />

      <ScrollToTop />
      
      <Routes>
        <Route path="/" element={
          <>
            <HeroSection
              onViewProjects={() => scrollToSection('projects')}
              onContact={() => scrollToSection('contact')}
            />
            <AboutSection />
            <ProjectsSection
              projects={projects}
              selectedCategory={selectedCategory}
              onSelectCategory={setSelectedCategory}
              showAll={showAllProjects} // Nouvelle prop
              onShowAllChange={setShowAllProjects} // Nouvelle prop
            />
            <ContactSection
              formData={formData}
              onChangeField={(field, value) => setFormData((current) => ({ ...current, [field]: value }))}
              onSubmit={handleSubmit}
            />
          </>
        } />

        <Route path="/projects/:title" element={<ProjectPage />} />
      </Routes>

      <Footer />
    </div>
  );
}