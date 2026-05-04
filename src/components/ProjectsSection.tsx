import React, { useState } from 'react';
import githubLogo from '../assets/githubLogo.webp';
import type { FilterCategory, ProjectDetails, ProjectCategory } from '../data/projects';
import { Link } from 'react-router-dom';

type ProjectsSectionProps = {
  projects: ProjectDetails[];
  selectedCategory: FilterCategory;
  onSelectCategory: (category: FilterCategory) => void;
  showAll: boolean; 
  onShowAllChange: (val: boolean) => void; 
};

const categories: Array<{ id: FilterCategory; label: string; icon: string }> = [
  { id: 'all', label: 'All', icon: '🎯' },
  { id: 'web', label: 'Web', icon: '🌐' },
  { id: 'mobile', label: 'Mobile', icon: '📱' },
  { id: 'backend', label: 'Backend', icon: '⚙️' },
  { id: 'infra', label: 'Infra', icon: '☁️' }
];

export default function ProjectsSection({ projects, selectedCategory, onSelectCategory, showAll, onShowAllChange }: ProjectsSectionProps) {

  const allFiltered = selectedCategory === 'all'
    ? projects
    : projects.filter((project) => project.categories.includes(selectedCategory as ProjectCategory));

  const filteredProjects = selectedCategory === 'all' && !showAll
    ? allFiltered.slice(0, 4)
    : allFiltered;

  // 3. On s'assure que le record utilise ProjectCategory pour les clés (sauf 'all')
  const categoryLabels: Record<ProjectCategory, { label: string; icon: string }> = {
    web: { label: 'Web', icon: '🌐' },
    mobile: { label: 'Mobile', icon: '📱' },
    backend: { label: 'Backend', icon: '⚙️' },
    infra: { label: 'Infra', icon: '☁️' }
  };

  return (
    <section id="projects" className="py-16 sm:py-24 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-6 sm:mb-8 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent font-bold">Projects</h2>

        {/* Filtres de catégories */}
        <div className="flex gap-2 sm:gap-3 mb-8 sm:mb-12 flex-wrap">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => {
                onSelectCategory(category.id);
                onShowAllChange(false);
              }}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-lg transition-all text-sm sm:text-base ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-primary to-accent text-white shadow-lg shadow-primary/30'
                  : 'bg-card border border-border text-muted-foreground hover:border-primary hover:text-foreground'
              }`}
            >
              <span className="mr-1 sm:mr-2">{category.icon}</span>
              {category.label}
            </button>
          ))}
        </div>

        {/* Grille des projets */}
        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
          {filteredProjects.map((project, index) => (
            <Link 
              key={index} 
              to={`/projects/${encodeURIComponent(project.title)}`}
              className="group relative flex h-full flex-col bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 sm:p-8 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="relative flex h-full flex-col">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.categories.map((category: ProjectCategory) => (
                        <span key={category} className="inline-block px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-primary text-xs">
                          {categoryLabels[category].icon} {categoryLabels[category].label}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-lg sm:text-xl text-foreground font-semibold truncate">
                      {project.title}
                    </h3>
                  </div>

                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="text-muted-foreground hover:text-primary transition-colors flex-shrink-0 z-10"
                      aria-label="Open project link"
                    >
                      <img 
                        src={githubLogo} 
                        alt="GitHub" 
                        className="w-5 h-5 sm:w-6 sm:h-6 object-contain brightness-125 invert opacity-70 hover:opacity-100" 
                      />
                    </a>
                  )}
                </div>

                <p className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed line-clamp-4">
                  {project.description}
                </p>

                <div className="mt-auto pt-6 flex flex-wrap gap-2">
                  {/* CORRECTION ICI : On utilise string pour la techno */}
                  {project.technologies.map((technology: string, techIndex: number) => (
                    <span
                      key={techIndex}
                      className="px-2.5 sm:px-3 py-1 bg-muted/50 text-foreground rounded-full text-xs sm:text-sm border border-border"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bouton Voir plus */}
        {(selectedCategory === 'all' ? projects.length : allFiltered.length) > 4 && (
          <div className="mt-12 flex justify-center">
            <button
              onClick={() => onShowAllChange(!showAll)}
              className="px-8 py-3 bg-card border border-border text-foreground rounded-lg hover:border-primary hover:text-primary transition-all"
            >
              {showAll ? 'Voir moins' : 'Voir plus'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
}