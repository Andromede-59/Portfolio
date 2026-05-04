import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Remonte en haut de la page dès que le chemin change
    window.scrollTo(0, 0);
  }, [pathname]);

  return null; // Ce composant n'affiche rien
}