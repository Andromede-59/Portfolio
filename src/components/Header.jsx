import React from 'react';
import { useTranslation } from 'react-i18next';

const Header = () => {
	const { t } = useTranslation();
	return (
		<header className="bg-gray-800 text-white p-4 fixed w-full top-0 z-50">
		<div className="container mx-auto flex justify-between items-center specificWidth">
			<div className="text-center w-100">
				<h1 className="text-2xl font-bold">{t("name-grade")}</h1>
			</div>
			<nav>
				<ul className="flex space-x-4">
					<li><a href="#about" className="hover:underline">{t("about")}</a></li>
					<li><a href="#projects" className="hover:underline">{t("projects")}</a></li>
					<li><a href="#contact" className="hover:underline">{t("contact")}</a></li>
				</ul>
			</nav>
		</div>
		</header>
	);
};

export default Header;
