import React from 'react';

export default function Footer() {
  return (
    <footer className="py-6 sm:py-8 px-4 sm:px-6 border-t border-border relative">
      <div className="max-w-6xl mx-auto text-center text-muted-foreground text-sm sm:text-base">
        <p>© {new Date().getFullYear()} Julien Mattot. Tous droits réservés.</p>
      </div>
    </footer>
  );
}