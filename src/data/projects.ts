export type ProjectCategory = 'web' | 'mobile' | 'backend' | 'infra';
export type FilterCategory = 'all' | ProjectCategory;

export type Project = {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  categories: ProjectCategory[];
};

export const projects: Project[] = [
  {
    title: 'BookAdviser',
    description: "Projet réalisé durant toute l'année 2025. Le projet consiste en une application Android qui permet de découvrir des livres selon des centres d'intérêts. Elle fait appel à une API que j'ai développée spécialement pour l'occasion en ExpressJS et RUST. Cette API permet de renvoyer des livres \"proches\" de ceux que l'utilisateur a déjà lu ou aimé. Ce projet a demandé beaucoup de travail, notamment pour la partie backend où j'ai dû apprendre RUST afin d'optimiser au maximum les performances de mon modèle. L'application Android a été développée en Kotlin et utilise notamment la librairie Jetpack Compose pour l'interface utilisateur.",
    technologies: ['JavaScript', 'Node', 'Rust', 'Kotlin'],
    categories: ['mobile', 'backend']
  },
  {
    title: 'Bookera',
    description: "Il s'agit d'un site web de gestion de bibliothèque. Le site permet de gérer les livres qu'on a déjà lu où qu'on souhaite lire. Il possède une interface ressemblant à une bibliothèque physique. Il utilise différentes APIs pour récupérer les informations des livres (Google Books, OpenLibrary, etc.). Vous pouvez retrouver le site en ligne à cette adresse : https://bookera.const-dev.fr. Le projet m'a permis d'apprendre à gérer de grosses applications tant en backend qu'en frontend ainsi que toute la partie DevOps pour le déploiement du site.",
    technologies: ['JavaScript', 'Node', 'React', 'BootStrap', 'CICD'],
    link: 'https://bookera.const-dev.fr',
    categories: ['web']
  },
  {
    title: 'Infrastructure auto-hébergée',
    description: "Projet d'infrastructure né du recyclage d'un ancien PC transformé en serveur personnel. J'y ai mis en place l'ensemble de la stack d'auto-hébergement avec Docker, Traefik en reverse proxy et la liaison Cloudflare pour exposer proprement les services. Le projet couvre aussi toute la configuration système et réseau nécessaire pour faire tourner une infrastructure stable, maintenable et accessible à distance.",
    technologies: ['Docker', 'Traefik', 'Cloudflare', 'Linux'],
    categories: ['infra', 'backend']
  },
  {
    title: 'Serveur FTP et commande "tree"',
    description: "Projet réalisé en 2024 durant l'année scolaire. Le but était de réaliser un serveur FTP en java ainsi qu'une commande \"tree\" qui consiste à lister tous les fichiers présents sur un serveur FTP de la même manière que la commande Tree le fait dans un dossier sous linus. Le serveur FTP, quant à lui, consistait à simuler un serveur en local (dans un dossier du projet) et à permettre de se connecter à ce serveur pour récupérer des fichiers ou en envoyer.",
    technologies: ['Java', 'Maven'],
    link: 'https://github.com/Andromede-59/FTPServer',
    categories: ['backend']
  },
  {
    title: 'Portfolio',
    description: 'Mise à jour de mon Portfolio pour le migrer de PHP à React. Le site est maintenant plus rapide et plus dynamique. Vous pouvez retrouver le code source sur mon GitHub.',
    technologies: ['JavaScript', 'Node', 'React', 'Tailwind'],
    link: 'https://github.com/Andromede-59/Portfolio',
    categories: ['web']
  },
  {
    title: 'Arbre B (B-Tree)',
    description: "Projet réalisé en 2024 durant l'année scolaire. Le but était de réaliser un arbre B en python selon des règles très spécifiques concernant le remaniement de l'arbre dès qu'une nouvelle valeur était ajoutée. Chaque noeud devait possèder un nombre de clé défini à l'initialisation et pouvait posséder n+1 enfants.",
    technologies: ['Python'],
    link: 'https://github.com/Andromede-59/BTreePython',
    categories: ['backend']
  },
  {
    title: 'Générateur de particules',
    description: "Projet réalisé en 2024 durant l'année scolaire. Le but était de réaliser un générateur de particules en javascript. Le générateur devait être paramétrable et devait permettre de générer des particules de différentes couleurs qui répondaient à la phyisque terrestre (rebonds lors de collisions, acceleration due à la gravité ...).",
    technologies: ['JavaScript'],
    link: 'https://github.com/Andromede-59/II2D_Projet_final',
    categories: ['web']
  },
  {
    title: 'Pandemic (version seigneur des anneaux)',
    description: "Projet réalisé durant l'année scolaire 2022-2023 en binôme en Java. Le projet initial était de reproduire le jeu Pandemic. Le jeu était supposé être simulé dans la console et l'agorithme devait toujours faire un choix (souvent qui amène à la défaite). Nous avons décidé d'améliorer ce jeu selon une passion commune : Le Seigneur des Anneaux. Nous avons donc modifié le nom des classes selon les races de l'univers de Tolkien. De plus, les 48 villes dans le jeu initial ont été adaptées à l'univers fantastique en reprenant des informations conformes au livre. De plus, nous avons implanté une interface graphique 3D avec la librairie OpenGL adaptée à l'univers.",
    technologies: ['Java'],
    link: 'https://github.com/Lucas-Zanardo/University-LOTRPandemic',
    categories: ['backend']
  }
];