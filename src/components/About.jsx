import React from 'react';
import { useTranslation } from 'react-i18next';

const About = () => {
    const { t } = useTranslation();

    return (
        <section id="about" className="bg-gray-100 p-8 mt-16">
        <div className="container mx-auto text-justify">
            <h2 className="text-3xl font-bold mb-4">{t("aboutMe")}</h2>
            <p className="text-lg">{t("academic-text")}</p>
            <p className="text-lg">{t("beginProg")}</p>
            <p className="text-lg">{t("internships")}</p>
            <p className="text-lg">{t("personnalProjects")}</p>
        </div>
        </section>
    );
};

export default About;
