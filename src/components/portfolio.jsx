import React, { useEffect, useState } from 'react';

const PortfolioItem = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/projects')
      .then(response => response.json())
      .then(data => setProjects(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-xl mb-4">Mes Projets</h2>
      <ul>
        {projects.map(project => (
          <li key={project.id} className="mb-2">
            <h3 className="text-lg font-semibold">{project.title}</h3>
            <p>{project.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PortfolioItem;
