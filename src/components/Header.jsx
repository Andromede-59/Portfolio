import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4 fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">Mon Portfolio</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#about" className="hover:underline">À Propos</a></li>
            <li><a href="#projects" className="hover:underline">Projets</a></li>
            <li><a href="#contact" className="hover:underline">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
