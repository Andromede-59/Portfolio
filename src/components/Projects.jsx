import React from 'react';
import Tag from './Tag';
import { Trans, useTranslation } from 'react-i18next';

const Projects = () => {
    const { t } = useTranslation();

    const renderDescription = (key) => {
        return ;
    };

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
            tags: ['JavaScript', 'Node', 'React', 'Tailwind']
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
            tags: ['JavaScript', 'Node', 'React', 'BootStrap']
        },
    ];

    return (
        <section id="projects" className="bg-white p-8">
        <div className="container mx-auto">
            <h2 className="text-3xl font-bold m-4">{t("projects")}</h2>
            <div className="space-y-6">
            {projects.map(project => (
                <div key={project.id} className="border p-4 rounded-lg shadow-md">
                     <div className='flex flex-row items-center mb-2'>
                        <h3 className="text-xl font-semibold" dangerouslySetInnerHTML={{ __html: project.title }}></h3>
                        {
                            project.link &&
                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                                <img style={{height:"30px", width:"30px", marginLeft:"5px"}} src='http://cws800wsk4g8ccsosccgcgk4.92.113.27.135.sslip.io/images/githubLogo.png'/>
                            </a>
                        }
                    </div>
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
