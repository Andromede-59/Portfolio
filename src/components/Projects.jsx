import React from 'react';
import Tag from './Tag';

const projects = [
  {
    id: 1,
    title: 'Projet 1',
    description: 'Description du projet 1.',
    tags: ['JavaScript', 'React', 'Node.js']
  },
  {
    id: 2,
    title: 'Projet 2',
    description: 'Description du projet 2.',
    tags: ['Python', 'Django']
  }
];

const Projects = () => {
  return (
    <section id="projects" className="bg-white p-8">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4">Projets</h2>
        <div className="space-y-6">
          {projects.map(project => (
            <div key={project.id} className="border p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <Tag key={index} label={tag} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
