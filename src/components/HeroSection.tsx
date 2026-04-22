import React from 'react';
import imageDeveloper from '../assets/image_developer.png';

type HeroSectionProps = {
  onViewProjects: () => void;
  onContact: () => void;
};

export default function HeroSection({ onViewProjects, onContact }: HeroSectionProps) {
  return (
    <section className="min-h-screen flex items-center px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto w-full py-24">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-muted-foreground mb-6 text-sm sm:text-base">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              Actuellement en poste chez <span className="font-semibold text-accent">Generix</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-4 sm:mb-6 bg-gradient-to-r from-foreground via-primary to-accent bg-clip-text text-transparent font-bold tracking-tight">
              Julien Mattot
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
              Développeur mobile et web – Master e-Services
            </p>

            <p className="text-base sm:text-lg text-muted-foreground mb-8 sm:mb-10 leading-relaxed">
              Spécialisé en <span className="text-primary font-medium">Flutter</span>, <span className="text-accent font-medium">Kotlin</span>, <span className="text-primary font-medium">Node.js</span> et <span className="text-accent font-medium">React</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button
                onClick={onViewProjects}
                className="px-6 sm:px-8 py-3 bg-gradient-to-r from-primary to-accent text-white rounded-lg hover:shadow-lg hover:shadow-primary/50 transition-all font-medium"
              >
                View projects
              </button>
              <button
                onClick={onContact}
                className="px-6 sm:px-8 py-3 border border-border text-foreground rounded-lg hover:border-primary hover:bg-primary/5 transition-all font-medium"
              >
                Contact me
              </button>
            </div>
          </div>

          <div className="relative mt-8 md:mt-0 w-full md:w-auto md:flex-1 max-w-lg">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 rounded-full blur-3xl opacity-50"></div>
            <img
              src={imageDeveloper}
              alt="Developer working at desk illustration"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}