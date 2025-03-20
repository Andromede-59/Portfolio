import React from 'react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
	const { t } = useTranslation();

    return (
        <footer className="bg-gray-800 text-white p-4">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                <div className="text-center md:text-left">
                    <p>&copy; {(new Date()).getFullYear()} Julien MATTOT. {t("allRightsReserved")}</p>
                </div>
                <div className="flex space-x-4 mt-4 md:mt-0">
                    <a 
                        href="https://www.linkedin.com/in/julien-mattot/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-blue-400 hover:underline"
                    >
                        LinkedIn
                    </a>
                    <a 
                        href="https://github.com/Andromede-59" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-blue-400 hover:underline"
                    >
                        GitHub
                    </a>
                    <a 
                        href="mailto:julien.mattot@protonmail.com" 
                        className="text-blue-400 hover:underline"
                    >
                        julien.mattot@protonmail.com
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
