import React from 'react';
import Tag from './Tag';
import { Trans, useTranslation } from 'react-i18next';
import { link } from '../../server';

const Projects = () => {
    const { t } = useTranslation();

    const projects = [
        {
            id: 1,
            title: t("project.title1st"),
            description: (
                <Trans 
                    i18nKey="project.desc1st"
                    components={{ 
                        a: <a />,
                        u : <u />,
                    }} 
                />
            ),
            tags: ['Java'],
            link : "https://github.com/Lucas-Zanardo/University-LOTRPandemic"
        },
        {
            id: 2,
            title: t("project.title2nd"),
            description: t("project.desc2nd"),
            tags: ['JavaScript', 'Node', 'React', 'Tailwind'],
            link: "https://github.com/Andromede-59/Portfolio"
        },
        {
            id: 3,
            title: t("project.title3rd"),
            description: (
                <Trans 
                    i18nKey="project.desc3rd"
                    components={{ 
                        a: <a />,
                        u : <u />,
                    }} 
                />
            ),
            tags: ['JavaScript', 'Node', 'React', 'BootStrap', 'CICD'],
        },
        {
            id: 4,
            title: t("project.title4th"),
            description: t("project.desc4th"),
            tags: ['Python'],
            link: "https://github.com/Andromede-59/BTreePython"
        },
        {
            id: 5,
            title: t("project.title5th"),
            description: t("project.desc5th"),
            tags: ['JavaScript'],
            link: "https://github.com/Andromede-59/II2D_Projet_final"
        }
    ];

    return (
        <section id="projects" className="bg-white p-8">
        <div className="container mx-auto">
            <h2 className="text-3xl font-bold mb-4">{t("projects")}</h2>
            <div className="space-y-6">
            {projects.map(project => (
                <div key={project.id} className="border p-4 rounded-lg shadow-md">
                     <div className='flex flex-row items-center mb-2'>
                        <h3 className="text-xl font-semibold titleH3" dangerouslySetInnerHTML={{ __html: project.title }}></h3>
                        {
                            project.link &&
                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                                <img style={{height:"30px", width:"30px", marginLeft:"5px"}} src='https://cdn.const-dev.fr/images/githubLogo.png'/>
                            </a>
                        }
                    </div>
                    <p className="mb-4 text-justify">{project.description}</p>
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
