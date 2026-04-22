import React, { useState } from 'react';
import githubLogo from '../assets/githubLogo.png';
import type { FilterCategory, Project } from '../data/projects';

type ProjectsSectionProps = {
  projects: Project[];
  selectedCategory: FilterCategory;
  onSelectCategory: (category: FilterCategory) => void;
};

const categories: Array<{ id: FilterCategory; label: string; icon: string }> = [
  { id: 'all', label: 'All', icon: '🎯' },
  { id: 'web', label: 'Web', icon: '🌐' },
  { id: 'mobile', label: 'Mobile', icon: '📱' },
  { id: 'backend', label: 'Backend', icon: '⚙️' },
  { id: 'infra', label: 'Infra', icon: '☁️' }
];

export default function ProjectsSection({ projects, selectedCategory, onSelectCategory }: ProjectsSectionProps) {
  const [showAll, setShowAll] = useState(false);

  const allFiltered = selectedCategory === 'all'
    ? projects
    : projects.filter((project) => project.categories.indexOf(selectedCategory) !== -1);

  const filteredProjects = selectedCategory === 'all' && !showAll
    ? allFiltered.slice(0, 4)
    : allFiltered;

  const categoryLabels: Record<FilterCategory, { label: string; icon: string }> = {
    all: { label: 'All', icon: '🎯' },
    web: { label: 'Web', icon: '🌐' },
    mobile: { label: 'Mobile', icon: '📱' },
    backend: { label: 'Backend', icon: '⚙️' },
    infra: { label: 'Infra', icon: '☁️' }
  };

  return (
    <section id="projects" className="py-16 sm:py-24 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-6 sm:mb-8 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent font-bold">Projects</h2>

        <div className="flex gap-2 sm:gap-3 mb-8 sm:mb-12 flex-wrap">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => {
                onSelectCategory(category.id);
                setShowAll(false);
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

        <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="group relative flex h-full flex-col bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 sm:p-8 hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/10"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative flex h-full flex-col">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.categories.map((category) => (
                        <span key={category} className="inline-block px-3 py-1 bg-primary/10 border border-primary/20 rounded-full text-primary text-xs">
                          {categoryLabels[category].icon} {categoryLabels[category].label}
                        </span>
                      ))}
                    </div>
                    <h3
                      className="text-lg sm:text-xl text-foreground font-semibold overflow-hidden whitespace-nowrap text-ellipsis"
                      style={{ maxWidth: '100%' }}
                    >
                      {project.title}
                    </h3>
                  </div>
                  {project.link ? (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors flex-shrink-0"
                      aria-label="Open project link"
                    >
                      <img src={githubLogo} alt="GitHub" className="w-5 h-5 sm:w-6 sm:h-6 object-contain brightness-125 invert opacity-70 transition-all duration-200 hover:scale-110 hover:opacity-100 hover:drop-shadow-[0_0_8px_rgba(99,102,241,0.85)]" />
                    </a>
                  ) : null}
                </div>
                <p
                  className="mt-4 text-sm sm:text-base text-muted-foreground leading-relaxed overflow-hidden"
                  style={{ display: '-webkit-box', WebkitLineClamp: 4, WebkitBoxOrient: 'vertical' }}
                >
                  {project.description}
                </p>
                <div className="mt-auto pt-6 flex flex-wrap gap-2">
                  {project.technologies.map((technology, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2.5 sm:px-3 py-1 bg-muted/50 text-foreground rounded-full text-xs sm:text-sm border border-border"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {(selectedCategory === 'all' ? projects.length : allFiltered.length) > 4 && (
          <div className="mt-12 flex justify-center">
            <button
              onClick={() => setShowAll(!showAll)}
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