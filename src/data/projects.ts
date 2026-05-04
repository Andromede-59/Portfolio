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
    description: "Application Android de découverte de livres avec un backend haute performance en Rust et ExpressJS.",
    fullDescription: "BookAdviser est un projet d'envergure mené sur l'année 2025. Il s'agit d'un écosystème complet comprenant une application mobile native et une API hybride. L'objectif est de proposer des recommandations de lecture ultra-personnalisées en analysant la proximité sémantique et thématique entre les ouvrages.",
    technologies: ['Kotlin', 'Rust', 'Node', 'Jetpack Compose', 'ExpressJS'],
    link: 'https://github.com/Andromede-59',
    categories: ['mobile', 'backend'],
    features: [
      "Algorithme de recommandation de similarité développé en Rust",
      "Interface utilisateur moderne et réactive avec Jetpack Compose",
      "API REST optimisée pour les calculs de données massives",
      "Système de cache pour les requêtes fréquentes"
    ],
    challenges: "Le défi majeur a été l'apprentissage du langage Rust pour l'intégrer au backend. Il a fallu assurer une communication fluide entre le moteur de calcul en Rust et l'API en ExpressJS via des appels système performants.",
    impact: "Ce projet a prouvé ma capacité à monter en compétence sur des langages de bas niveau pour répondre à des besoins de performance critique."
  },
  {
    title: 'Bookera',
    description: "Site web de gestion de bibliothèque personnelle simulant une bibliothèque physique avec intégration d'APIs mondiales.",
    fullDescription: "Bookera est une plateforme web dédiée aux passionnés de lecture. Le site permet d'organiser sa collection de livres dans une interface visuelle rappelant de vraies étagères. Il agrège les données de Google Books et OpenLibrary pour fournir des fiches détaillées instantanément.",
    technologies: ['React', 'Node', 'BootStrap', 'CI/CD', 'Docker'],
    link: 'https://bookera.const-dev.fr',
    categories: ['web'],
    features: [
      "Interface de bibliothèque interactive et responsive",
      "Recherche globale via Google Books et OpenLibrary API",
      "Gestion d'états complexe pour l'organisation des collections",
      "Déploiement automatisé avec pipeline CI/CD"
    ],
    challenges: "La complexité résidait dans la gestion des données provenant de multiples sources externes ayant des formats différents, et dans l'optimisation du rendu visuel de la bibliothèque pour les appareils mobiles.",
    impact: "Déploiement en production réussi, avec une gestion complète du cycle de vie DevOps (hébergement VPS et Docker)."
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
    description: "Développement d'un serveur FTP complet et d'un outil de visualisation récursive en Java.",
    fullDescription: "Projet académique réalisé en 2024 visant à recréer le protocole FTP. Le serveur simule un environnement de stockage distant, tandis que la commande 'tree' développée en parallèle permet de visualiser l'arborescence des fichiers via des algorithmes récursifs.",
    technologies: ['Java', 'Maven', 'Sockets'],
    link: 'https://github.com/Andromede-59/FTPServer',
    categories: ['backend'],
    features: [
      "Implémentation des commandes RFC 959 (LIST, RETR, STOR, etc.)",
      "Algorithme de parcours d'arbre récursif pour la commande Tree",
      "Gestion des transferts en mode actif et passif",
      "Système de gestion de fichiers local simulé"
    ],
    challenges: "La gestion des flux de données via les Sockets Java et la synchronisation entre le canal de commande et le canal de données du protocole FTP.",
    impact: "Renforcement majeur de mes compétences en programmation réseau et en manipulation de structures de données arborescentes."
  },
  {
    title: 'Portfolio',
    description: "Migration complète d'un portfolio PHP vers une architecture moderne React et Tailwind CSS.",
    fullDescription: "Refonte totale de mon identité numérique. Initialement développé en PHP, j'ai migré ce portfolio vers React pour bénéficier d'une navigation Single Page Application (SPA) plus fluide et d'une maintenance facilitée via des composants réutilisables.",
    technologies: ['React', 'Tailwind CSS', 'TypeScript', 'Framer Motion'],
    link: 'https://github.com/Andromede-59/Portfolio',
    categories: ['web'],
    features: [
      "Architecture basée sur des composants fonctionnels React",
      "Design ultra-rapide et responsive avec Tailwind CSS",
      "Animations fluides et effets de fond dynamiques",
      "Routage dynamique pour les pages de détails de projets"
    ],
    challenges: "Passer d'un rendu côté serveur (PHP) à un rendu côté client (React) tout en optimisant les performances et l'accessibilité.",
    impact: "Un site plus moderne, performant et représentatif de mes compétences actuelles en développement front-end."
  },
  {
    title: 'Arbre B (B-Tree)',
    description: "Implémentation d'une structure de données d'Arbre B en Python avec règles de rééquilibrage.",
    fullDescription: "Ce projet portait sur la réalisation d'un Arbre B (B-Tree) respectant des contraintes strictes de remaniement. Utilisé massivement dans les bases de données, cet arbre permet de stocker de grandes quantités de données tout en garantissant des temps de recherche logarithmiques.",
    technologies: ['Python', 'Algorithmes'],
    link: 'https://github.com/Andromede-59/BTreePython',
    categories: ['backend'],
    features: [
      "Algorithmes d'insertion et de division de nœuds (splitting)",
      "Recherche optimisée dans des structures de données volumineuses",
      "Visualisation textuelle de l'arborescence",
      "Gestion dynamique de l'ordre n de l'arbre"
    ],
    challenges: "L'aspect mathématique du rééquilibrage de l'arbre lors de l'insertion pour maintenir la propriété de hauteur constante.",
    impact: "Compréhension approfondie du fonctionnement interne des index de bases de données relationnelles."
  },
  {
    title: 'Générateur de particules',
    description: "Simulation physique de particules en JavaScript avec gestion des collisions et de la gravité.",
    fullDescription: "Développement d'un moteur de rendu de particules sur Canvas. Chaque particule est soumise à des forces physiques réelles : accélération gravitationnelle, frottements et rebonds élastiques lors de collisions avec les bords ou d'autres objets.",
    technologies: ['JavaScript', 'HTML5 Canvas', 'Physics'],
    link: 'https://github.com/Andromede-59/II2D_Projet_final',
    categories: ['web'],
    features: [
      "Moteur physique personnalisé (vecteurs, vélocité, accélération)",
      "Paramétrage dynamique (couleur, taille, masse des particules)",
      "Optimisation du rendu pour gérer des centaines d'entités simultanées",
      "Interaction utilisateur en temps réel"
    ],
    challenges: "Optimiser les boucles d'animation pour maintenir 60 images par seconde (FPS) malgré le nombre croissant de calculs physiques à chaque itération.",
    impact: "Maîtrise des concepts de mathématiques appliquées au développement front-end et aux simulations graphiques."
  },
  {
    title: 'Pandemic - LOTR Edition',
    description: "Adaptation graphique et thématique du jeu Pandemic dans l'univers du Seigneur des Anneaux en Java 3D.",
    fullDescription: "Projet de binôme consistant à transformer le jeu Pandemic. Nous avons adapté l'intégralité de la logique métier aux Terres du Milieu, remplaçant les maladies par des menaces orques et les villes mondiales par des lieux iconiques comme Minas Tirith ou le Mordor.",
    technologies: ['Java', 'OpenGL', 'Swing'],
    link: 'https://github.com/Lucas-Zanardo/University-LOTRPandemic',
    categories: ['backend'],
    features: [
      "Moteur de rendu 3D avec la bibliothèque OpenGL",
      "IA simulant la propagation de l'ombre sur la carte",
      "Système de classes de personnages (Races de Tolkien)",
      "Logique de jeu multijoueur locale"
    ],
    challenges: "L'intégration d'OpenGL dans une application Java pour créer une interface graphique immersive tout en gérant une logique de jeu complexe.",
    impact: "Une expérience enrichissante sur le travail d'équipe et la conception de systèmes logiciels complexes alliant backend et rendu graphique."
  }
];

/**
 * Helper pour récupérer un projet par son titre (utile pour les routes)
 */
export const getProjectByTitle = (title: string): ProjectDetails | undefined => {
  return projects.find(p => p.title === title);
};