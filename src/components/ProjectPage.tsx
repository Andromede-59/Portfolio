import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, Cpu, Layout } from 'lucide-react';
import { projects, ProjectDetails } from '../data/projects';
import BackgroundEffects from './BackgroundEffects';
import githubLogo from '../assets/githubLogo.webp';


export default function ProjectPage() {
  const { title } = useParams<{ title: string }>();
  const navigate = useNavigate();

  // On cherche le projet par son titre (URL encodée)
  const project = projects.find(p => p.title === decodeURIComponent(title || '')) as ProjectDetails;

  for(const p of projects) {
      console.log(p.title, decodeURIComponent(title || ''));
  }

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 bg-background">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4 text-foreground">Projet introuvable</h1>
          <button
            onClick={() => navigate('/')}
            className="px-6 py-3 bg-gradient-to-r from-primary to-accent text-white rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all"
          >
            Retour à l'accueil
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-background min-h-screen relative overflow-hidden">
      <BackgroundEffects />
      
      <div className="max-w-4xl mx-auto py-16 sm:py-24 px-4 sm:px-6 relative z-10">
        {/* Back Button */}
        <button
          onClick={() => navigate('/', { state: { fromProject: true } })}
          className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-12 group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Retour aux projets
        </button>

        {/* Header Section */}
        <header className="mb-16">
          <div className="flex flex-wrap gap-2 mb-6">
            {project.categories.map((cat) => (
              <span key={cat} className="px-4 py-1.5 bg-primary/10 border border-primary/20 rounded-full text-primary text-sm font-medium flex items-center gap-2 capitalize">
                <Layout className="w-3.5 h-3.5" /> {cat}
              </span>
            ))}
          </div>
          
          <h1 className="text-4xl sm:text-6xl font-bold mb-8 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent">
            {project.title}
          </h1>
          
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-10 max-w-3xl">
            {project.fullDescription}
          </p>

          <div className="flex flex-wrap gap-4">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-accent text-white rounded-xl hover:shadow-xl hover:shadow-primary/40 transition-all font-semibold active:scale-95"
              >
                <img 
                    src={githubLogo} 
                    alt="GitHub" 
                    className="w-5 h-5 sm:w-6 sm:h-6 object-contain brightness-125 invert opacity-70 hover:opacity-100" 
                    />
                Voir sur GitHub
              </a>
            )}
          </div>
        </header>

        {/* Grid Content */}
        <div className="grid gap-12">
          
          {/* Technologies */}
          <section>
            <div className="flex items-center gap-3 mb-6">
              <Cpu className="text-primary w-6 h-6" />
              <h2 className="text-2xl font-bold text-foreground">Stack Technique</h2>
            </div>
            <div className="flex flex-wrap gap-3">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-5 py-2.5 bg-card/50 backdrop-blur-md border border-border text-foreground rounded-xl text-sm font-medium hover:border-primary/50 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>

          {/* Features (Si elles existent dans tes datas) */}
          {project.features && (
            <section>
              <h2 className="text-2xl font-bold mb-6 text-foreground">Fonctionnalités Clés</h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {project.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-card/30 border border-border/50 rounded-xl hover:border-primary/30 transition-all">
                    <CheckCircle2 className="text-primary w-5 h-5 mt-0.5 shrink-0" />
                    <span className="text-muted-foreground text-sm sm:text-base">{feature}</span>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Challenges & Impact */}
          {(project.challenges || project.impact) && (
            <section className="grid sm:grid-cols-2 gap-6">
              {project.challenges && (
                <div className="bg-card/40 backdrop-blur-sm border border-border rounded-2xl p-8">
                  <h3 className="text-xl font-bold mb-4 text-foreground flex items-center gap-2">
                    🚀 Défis Techniques
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                    {project.challenges}
                  </p>
                </div>
              )}
              {project.impact && (
                <div className="bg-card/40 backdrop-blur-sm border border-border rounded-2xl p-8">
                  <h3 className="text-xl font-bold mb-4 text-foreground flex items-center gap-2">
                    ✨ Résultat & Impact
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
                    {project.impact}
                  </p>
                </div>
              )}
            </section>
          )}

        </div>
      </div>
    </div>
  );
}