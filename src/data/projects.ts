export type ProjectCategory = 'web' | 'mobile' | 'backend' | 'infra';
export type FilterCategory = 'all' | ProjectCategory;

export interface ProjectDetails {
  title: string;
  description: string;      // Version courte pour les cartes
  fullDescription: string;  // Version longue pour la page détail
  technologies: string[];
  link?: string;            // URL externe (GitHub ou Live)
  categories: ProjectCategory[];
  features: string[];       // Points clés
  challenges: string;       // Difficultés rencontrées
  impact: string;           // Résultat ou apprentissage
}

export const projects: ProjectDetails[] = [
  {
    title: 'BookAdviser',
    description: "Application Android de découverte de livres basée sur les centres d'intérêt, avec une API développée en ExpressJS.",
    fullDescription: "Projet mené sur l'année 2025. BookAdviser est une application Android qui aide a decouvrir de nouveaux livres en fonction des lectures appreciees par l'utilisateur. Pour ce projet, j'ai egalement developpe une API dediee en ExpressJS afin de renvoyer des recommandations de livres proches de ceux deja lus ou aimes.",
    technologies: ['Kotlin', 'Node', 'Jetpack Compose', 'ExpressJS'],
    categories: ['mobile', 'backend'],
    features: [
      "Application Android developpee en Kotlin avec Jetpack Compose",
      "API REST dediee en ExpressJS",
      "Recommandation de livres selon les centres d'interet utilisateur",
      "Architecture separant clairement le mobile et le backend"
    ],
    challenges: "Le principal défi a ete de maintenir une architecture claire entre application mobile et backend tout en faisant evoluer la logique de recommandation.",
    impact: "Ce projet m'a permis de progresser fortement en backend ExpressJS et en developpement Android."
  },
  {
    title: 'Bookera',
    description: "Site web de gestion de bibliothèque personnelle avec interface inspirée d'une bibliothèque physique.",
    fullDescription: "Bookera est un site web qui permet de gerer les livres deja lus et ceux que l'on souhaite lire. L'interface reprend l'idee d'une bibliotheque physique. Le projet s'appuie sur plusieurs APIs (Google Books, OpenLibrary, etc.) pour recuperer les informations des ouvrages.",
    technologies: ['React', 'Node', 'BootStrap', 'CI/CD', 'Docker'],
    link: 'https://bookera.const-dev.fr',
    categories: ['web'],
    features: [
      "Gestion des livres lus et de la liste de lecture",
      "Integration de plusieurs APIs de donnees de livres",
      "Interface web inspiree d'une bibliotheque",
      "Mise en production de l'application en ligne"
    ],
    challenges: "Le projet a demande de gerer une application de taille importante, aussi bien en frontend qu'en backend, ainsi que le deploiement et l'automatisation CI/CD.",
    impact: "Bookera m'a fait gagner en autonomie sur la conception d'applications web completes et sur la partie DevOps."
  },
  {
    title: 'Infrastructure auto-hébergée',
    description: "Serveur personnel domestique sécurisé avec Docker, Traefik et Cloudflare.",
    fullDescription: "Ce projet consiste en la mise en place d'une infrastructure complète d'auto-hébergement (Self-Hosting). En recyclant un ancien PC en serveur Linux, j'ai créé un environnement capable d'héberger mes propres services web de manière professionnelle et sécurisée.",
    technologies: ['Docker', 'Traefik', 'Cloudflare', 'Linux', 'Security'],
    categories: ['infra', 'backend'],
    features: [
      "Reverse Proxy avec Traefik pour la gestion automatique du SSL (Let's Encrypt)",
      "Tunnel Cloudflare pour une exposition web sans ouverture de ports sur la box",
      "Conteneurisation de tous les services pour une maintenance simplifiée",
      "Monitoring et centralisation des logs via Docker"
    ],
    challenges: "Sécuriser l'accès externe tout en maintenant une isolation stricte entre les différents conteneurs et en gérant le routage DNS dynamique.",
    impact: "Une autonomie numérique totale pour mes outils de développement et une maîtrise concrète de l'administration système Linux."
  },
  {
    title: 'Serveur FTP et commande tree',
    description: "Projet Java de serveur FTP local et implementation d'une commande tree pour lister l'arborescence distante.",
    fullDescription: "Projet scolaire realise en 2024. L'objectif etait de creer un serveur FTP en Java ainsi qu'une commande tree permettant de lister les fichiers presents sur le serveur, de la meme maniere que la commande tree sous Linux.",
    technologies: ['Java', 'Maven', 'Sockets'],
    link: 'https://github.com/Andromede-59/FTPServer',
    categories: ['backend'],
    features: [
      "Simulation d'un serveur FTP local dans un dossier du projet",
      "Connexion client/serveur pour envoyer et recuperer des fichiers",
      "Commande tree pour afficher l'arborescence des fichiers distants",
      "Implementation Java avec build Maven"
    ],
    challenges: "Le principal enjeu etait de gerer proprement les echanges reseau et la logique de parcours recursif de l'arborescence distante.",
    impact: "Ce projet a renforce mes bases en programmation reseau et en manipulation de structures de fichiers."
  },
  {
    title: 'Portfolio',
    description: "Migration de mon portfolio de PHP vers React pour un site plus rapide et plus dynamique.",
    fullDescription: "Ce projet correspond a la mise a jour de mon portfolio personnel. Le site a ete migre de PHP vers React, avec un frontend plus dynamique et une meilleure fluidite de navigation. Le code source est disponible sur GitHub.",
    technologies: ['React', 'Tailwind CSS', 'TypeScript', 'Framer Motion'],
    link: 'https://github.com/Andromede-59/Portfolio',
    categories: ['web'],
    features: [
      "Refonte complete du frontend en React",
      "Amelioration des performances perçues",
      "Interface plus dynamique pour la navigation",
      "Code source versionne sur GitHub"
    ],
    challenges: "Le principal défi a ete de migrer proprement la structure existante PHP vers une base React sans perdre le contenu ni la lisibilite.",
    impact: "Cette migration a abouti a un portfolio plus rapide, plus moderne et plus simple a faire evoluer."
  },
  {
    title: 'Arbre B (B-Tree)',
    description: "Projet scolaire Python d'implementation d'un arbre B avec regles strictes de remaniement a l'insertion.",
    fullDescription: "Projet realise en 2024 durant l'annee scolaire. Le but etait de construire un arbre B en Python avec des contraintes precises lors de l'ajout de nouvelles valeurs, notamment sur la redistribution et le remaniement des noeuds.",
    technologies: ['Python', 'Algorithmes'],
    link: 'https://github.com/Andromede-59/BTreePython',
    categories: ['backend'],
    features: [
      "Insertion de nouvelles valeurs avec remaniement de l'arbre",
      "Gestion d'un nombre de cles fixe par noeud",
      "Support des relations parent/enfants avec n+1 enfants",
      "Implementation complete en Python"
    ],
    challenges: "Le plus complexe a ete de respecter les regles de reequilibrage a chaque insertion tout en conservant une structure valide.",
    impact: "Ce projet m'a permis de consolider mes bases en algorithmique et en structures de donnees."
  },
  {
    title: 'Générateur de particules',
    description: "Projet JavaScript de generateur de particules paramétrable avec couleurs et physique terrestre.",
    fullDescription: "Projet scolaire realise en 2024. L'objectif etait de creer un generateur de particules en JavaScript, configurable et capable de produire des particules de differentes couleurs avec un comportement inspire de la physique terrestre.",
    technologies: ['JavaScript', 'HTML5 Canvas', 'Physics'],
    link: 'https://github.com/Andromede-59/II2D_Projet_final',
    categories: ['web'],
    features: [
      "Generation de particules colorees",
      "Parametrage du comportement du generateur",
      "Gestion des collisions et rebonds",
      "Prise en compte de l'acceleration due a la gravite"
    ],
    challenges: "L'equilibre entre fidelite de la simulation et fluidite du rendu a ete le principal point d'attention.",
    impact: "Ce projet m'a aide a mieux comprendre les simulations physiques simples en JavaScript."
  },
  {
    title: 'Pandemic - LOTR Edition',
    description: "Adaptation de Pandemic en binome, version Seigneur des Anneaux, avec simulation et interface 3D en Java.",
    fullDescription: "Projet scolaire realise en 2022-2023 en binome. Le projet initial consistait a reproduire Pandemic en console, avec un algorithme prenant toujours une decision (souvent menant a la defaite). Nous avons ensuite adapte le jeu a l'univers du Seigneur des Anneaux en renommant les classes selon les races de Tolkien et en remplaçant les 48 villes d'origine par des lieux conformes aux livres.",
    technologies: ['Java', 'OpenGL', 'Swing'],
    link: 'https://github.com/Lucas-Zanardo/University-LOTRPandemic',
    categories: ['backend'],
    features: [
      "Base du jeu d'abord simulee en console",
      "Classes adaptees aux races de l'univers Tolkien",
      "Carte revisitée avec 48 lieux inspires du Seigneur des Anneaux",
      "Ajout d'une interface graphique 3D avec OpenGL"
    ],
    challenges: "L'integration d'une interface 3D OpenGL a la logique existante du jeu a ete la partie la plus exigeante du projet.",
    impact: "Ce projet m'a fait progresser en travail d'equipe, en Java et en conception de logique de jeu."
  }
];

/**
 * Helper pour récupérer un projet par son titre (utile pour les routes)
 */
export const getProjectByTitle = (title: string): ProjectDetails | undefined => {
  return projects.find(p => p.title === title);
};