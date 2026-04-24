import React from 'react';
import myAvatar from '../assets/myAvatar.webp';
import generixLogo from '../assets/generix_logo.webp';

export default function AboutSection() {
  return (
    <section id="about" className="py-16 sm:py-24 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-8 sm:mb-12 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent font-bold">A propos de moi</h2>

        <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
          <div className="flex-1">
            <div className="relative bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-6 sm:p-8">
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6">
                Actuellement en Master e-Services et développeur stagiaire spécialisé en 
                <span className="text-primary font-medium"> Flutter</span>, je conçois des applications 
                mobiles et web où la performance rencontre l'expérience utilisateur. Mon approche repose 
                sur la création de solutions concrètes et scalables.
              </p>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6">
                Mon expertise technique se concentre sur le développement mobile avec 
                <span className="text-primary font-medium"> Flutter</span> et 
                <span className="text-accent font-medium"> Kotlin</span>, complétée par une solide maîtrise 
                du stack <span className="text-primary font-medium">Node.js / React</span>. 
                De mon expérience chez <span className="font-medium text-accent">IANord</span> à mes 
                projets personnels, je privilégie toujours une architecture propre et optimisée.
              </p>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Passionné par les défis techniques, j'ai notamment participé au 
                <span className="text-accent font-medium"> Hackathon Exolegend</span> (robotique en C++), 
                renforçant ma capacité à builder des solutions sous pression. Curieux de nature, 
                j'explore aussi des langages comme <span className="italic">Java, Python ou Rust</span> pour 
                élargir mon champ d'action.
              </p>
            </div>
          </div>

          <div className="relative w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64">
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent rounded-full blur-2xl opacity-50 animate-pulse"></div>
            <div className="relative w-full h-full bg-gradient-to-br from-primary to-accent rounded-full p-1">
              <div className="w-full h-full bg-zinc-800 rounded-full flex items-center justify-center overflow-hidden">
                <img
                  src={myAvatar}
                  alt="Julien Mattot"
                  width={256}
                  height={256}
                  fetchPriority="high"
                  className="w-full h-full object-cover object-[50%_25%]"
                />
              </div>
            </div>
            <div className="absolute -bottom-3 right-4 md:bottom-2 md:right-2 bg-card border-2 border-primary rounded-full overflow-hidden shadow-lg w-16 h-16">
              <img 
                src={generixLogo}
                alt="Generix Logo" 
                width={64} 
                height={64} 
                fetchPriority="high"
                className="w-full h-full object-cover block" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}