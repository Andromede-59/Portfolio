import React from 'react';

type NavigationProps = {
  onAboutClick: () => void;
  onProjectsClick: () => void;
  onContactClick: () => void;
};

export default function Navigation({ onAboutClick, onProjectsClick, onContactClick }: NavigationProps) {
  const navItems = [
    { label: 'À propos', onClick: onAboutClick },
    { label: 'Projets', onClick: onProjectsClick },
    { label: 'Contact', onClick: onContactClick }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 backdrop-blur-md bg-background/30 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 sm:py-5 flex justify-between items-center">
        <div className="font-semibold text-foreground text-sm sm:text-base">Julien Mattot</div>
        <div className="flex gap-6 sm:gap-10">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={item.onClick}
              className="relative text-muted-foreground hover:text-foreground transition-colors text-sm sm:text-base group"
            >
              {item.label}
              <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300 ease-out"></span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}