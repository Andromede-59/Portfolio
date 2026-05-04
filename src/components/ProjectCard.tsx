import React from 'react';
import { ProjectDetails } from '../data/projects';
import { ProjectCategory, FilterCategory } from '../data/projects';

interface Props {
  project: ProjectDetails;
}

const ProjectCard = ({ project }: Props) => {
  const categoriesList = project.categories.map((category) => (
    <li key={category}>{category}</li>
  ));

  return (
    <div className="flex flex-col h-full w-full p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-4xl font-bold mb-4 text-center underline decoration-orange-500">{project.title}</h1>
      <div className="flex flex-wrap justify-center items-center gap-6">
        {project.technologies.map((technology) => (
          <span key={technology} className="bg-gray-200 text-black px-4 py-2 rounded-full text-sm font-semibold">{technology}</span>
        ))}
      </div>
      <hr className="my-6" />
      <p className="text-justify">{project.description}</p>
      <ul className="flex flex-wrap justify-center items-center gap-2 mt-6">
        {categoriesList}
      </ul>
      {project.link && (
        <a href={project.link} target="_blank" rel="noopener noreferrer" className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold">Voir le projet</a>
      )}
    </div>
  );
};

export default ProjectCard;