export const formationCategories = [
  {
    id: 'infographie',
    name: 'Infographie et Design',
    icon: 'Palette',
    description: 'Créez des visuels professionnels et impactants'
  },
  {
    id: 'web-mobile',
    name: 'Développement Web et Mobile',
    icon: 'Code',
    description: 'Construisez des applications modernes'
  },
  {
    id: 'programmation',
    name: 'Programmation',
    icon: 'Terminal',
    description: 'Maîtrisez les langages de programmation'
  },
  {
    id: 'robotique',
    name: 'Robotique',
    icon: 'Bot',
    description: 'Explorez l\'intelligence artificielle et la robotique'
  },
  {
    id: 'reseaux',
    name: 'Réseaux et Télécommunications',
    icon: 'Network',
    description: 'Administrez et sécurisez les réseaux'
  },
  {
    id: 'bureautique',
    name: 'Bureautique',
    icon: 'FileText',
    description: 'Maîtrisez les outils de productivité'
  },
  {
    id: 'maintenance',
    name: 'Maintenance Informatique',
    icon: 'Wrench',
    description: 'Réparez et entretenez les équipements'
  }
]

export const formations = [
  // Infographie et Design
  {
    id: 'photoshop-pro',
    title: 'Adobe Photoshop Professionnel',
    category: 'infographie',
    level: 'Débutant à Avancé',
    duration: '3 mois',
    price: 75000,
    image: '/images/formations/photoshop.jpg',
    description: 'Maîtrisez Photoshop de A à Z pour créer des designs professionnels',
    shortDescription: 'Retouche photo et design graphique professionnel',
    prerequisites: 'Aucun prérequis',
    objectives: [
      'Maîtriser les outils de retouche photo',
      'Créer des montages professionnels',
      'Concevoir des visuels pour le web et l\'impression',
      'Optimiser les images pour différents supports'
    ],
    program: [
      'Interface et outils de base',
      'Sélections et détourages',
      'Calques et masques',
      'Retouche photo avancée',
      'Effets et filtres',
      'Design graphique',
      'Projet final'
    ],
    schedule: 'Lundi, Mercredi, Vendredi - 14h-17h',
    certification: true,
    popular: true
  },
  {
    id: 'illustrator-pro',
    title: 'Adobe Illustrator Professionnel',
    category: 'infographie',
    level: 'Débutant à Avancé',
    duration: '3 mois',
    price: 75000,
    image: '/images/formations/illustrator.jpg',
    description: 'Créez des illustrations vectorielles et logos professionnels',
    shortDescription: 'Design vectoriel et création de logos',
    prerequisites: 'Aucun prérequis',
    objectives: [
      'Maîtriser le dessin vectoriel',
      'Créer des logos professionnels',
      'Concevoir des illustrations complexes',
      'Préparer des fichiers pour l\'impression'
    ],
    program: [
      'Outils de dessin vectoriel',
      'Formes et pathfinders',
      'Typographie et texte',
      'Couleurs et dégradés',
      'Création de logos',
      'Illustrations avancées',
      'Projet final'
    ],
    schedule: 'Mardi, Jeudi - 14h-17h',
    certification: true,
    popular: false
  },
  {
    id: 'video-editing',
    title: 'Montage Vidéo Professionnel',
    category: 'infographie',
    level: 'Intermédiaire',
    duration: '2 mois',
    price: 60000,
    image: '/images/formations/video.jpg',
    description: 'Montez et éditez des vidéos professionnelles avec Premiere Pro',
    shortDescription: 'Montage vidéo avec Adobe Premiere Pro',
    prerequisites: 'Connaissances de base en informatique',
    objectives: [
      'Maîtriser Premiere Pro',
      'Monter des vidéos professionnelles',
      'Ajouter des effets et transitions',
      'Exporter pour différentes plateformes'
    ],
    program: [
      'Interface Premiere Pro',
      'Montage de base',
      'Transitions et effets',
      'Correction colorimétrique',
      'Audio et son',
      'Exportation optimisée',
      'Projet final'
    ],
    schedule: 'Samedi - 9h-13h',
    certification: true,
    popular: true
  },

  // Développement Web et Mobile
  {
    id: 'web-fullstack',
    title: 'Développement Web Full Stack',
    category: 'web-mobile',
    level: 'Débutant à Avancé',
    duration: '6 mois',
    price: 150000,
    image: '/images/formations/fullstack.jpg',
    description: 'Devenez développeur web full stack avec React, Node.js et MongoDB',
    shortDescription: 'Formation complète en développement web moderne',
    prerequisites: 'Bases en informatique',
    objectives: [
      'Maîtriser HTML, CSS, JavaScript',
      'Développer avec React.js',
      'Créer des APIs avec Node.js',
      'Gérer des bases de données',
      'Déployer des applications web'
    ],
    program: [
      'HTML5 et CSS3 avancé',
      'JavaScript moderne (ES6+)',
      'React.js et hooks',
      'Node.js et Express',
      'MongoDB et bases de données',
      'API REST et GraphQL',
      'Déploiement et DevOps',
      'Projet final complet'
    ],
    schedule: 'Lundi à Vendredi - 9h-12h',
    certification: true,
    popular: true
  },
  {
    id: 'react-native',
    title: 'Développement Mobile avec React Native',
    category: 'web-mobile',
    level: 'Intermédiaire',
    duration: '4 mois',
    price: 120000,
    image: '/images/formations/mobile.jpg',
    description: 'Créez des applications mobiles iOS et Android avec React Native',
    shortDescription: 'Applications mobiles cross-platform',
    prerequisites: 'Connaissances en JavaScript et React',
    objectives: [
      'Maîtriser React Native',
      'Créer des apps iOS et Android',
      'Gérer la navigation mobile',
      'Intégrer des APIs',
      'Publier sur les stores'
    ],
    program: [
      'Introduction à React Native',
      'Composants natifs',
      'Navigation et routing',
      'Gestion d\'état',
      'APIs et données',
      'Notifications push',
      'Publication sur stores',
      'Projet final'
    ],
    schedule: 'Mardi, Jeudi - 14h-18h',
    certification: true,
    popular: false
  },
  {
    id: 'wordpress',
    title: 'Création de Sites avec WordPress',
    category: 'web-mobile',
    level: 'Débutant',
    duration: '2 mois',
    price: 50000,
    image: '/images/formations/wordpress.jpg',
    description: 'Créez des sites web professionnels sans coder avec WordPress',
    shortDescription: 'Sites web professionnels avec WordPress',
    prerequisites: 'Aucun prérequis',
    objectives: [
      'Installer et configurer WordPress',
      'Créer des sites professionnels',
      'Personnaliser des thèmes',
      'Gérer le contenu et SEO',
      'Sécuriser et maintenir le site'
    ],
    program: [
      'Installation WordPress',
      'Interface et administration',
      'Thèmes et personnalisation',
      'Plugins essentiels',
      'SEO et référencement',
      'E-commerce avec WooCommerce',
      'Sécurité et maintenance',
      'Projet final'
    ],
    schedule: 'Samedi - 14h-17h',
    certification: true,
    popular: true
  },

  // Programmation
  {
    id: 'python-programming',
    title: 'Programmation Python',
    category: 'programmation',
    level: 'Débutant à Avancé',
    duration: '4 mois',
    price: 100000,
    image: '/images/formations/python.jpg',
    description: 'Apprenez Python pour le développement, data science et automation',
    shortDescription: 'Python pour tous les usages',
    prerequisites: 'Aucun prérequis',
    objectives: [
      'Maîtriser les bases de Python',
      'Programmer de manière orientée objet',
      'Manipuler des données',
      'Créer des scripts d\'automation',
      'Introduction au machine learning'
    ],
    program: [
      'Syntaxe et bases Python',
      'Structures de données',
      'Programmation orientée objet',
      'Manipulation de fichiers',
      'Bibliothèques essentielles',
      'Data science avec Pandas',
      'Introduction au ML',
      'Projets pratiques'
    ],
    schedule: 'Lundi, Mercredi, Vendredi - 9h-12h',
    certification: true,
    popular: true
  },
  {
    id: 'java-programming',
    title: 'Programmation Java',
    category: 'programmation',
    level: 'Intermédiaire',
    duration: '5 mois',
    price: 110000,
    image: '/images/formations/java.jpg',
    description: 'Développez des applications robustes avec Java',
    shortDescription: 'Java pour applications d\'entreprise',
    prerequisites: 'Bases en programmation',
    objectives: [
      'Maîtriser Java et la POO',
      'Développer des applications desktop',
      'Créer des APIs avec Spring Boot',
      'Gérer les bases de données',
      'Tester et déployer'
    ],
    program: [
      'Fondamentaux Java',
      'POO avancée',
      'Collections et streams',
      'JavaFX pour desktop',
      'Spring Boot',
      'JPA et bases de données',
      'Tests unitaires',
      'Projet final'
    ],
    schedule: 'Mardi, Jeudi - 9h-13h',
    certification: true,
    popular: false
  },

  // Robotique
  {
    id: 'arduino-robotics',
    title: 'Robotique avec Arduino',
    category: 'robotique',
    level: 'Débutant',
    duration: '3 mois',
    price: 80000,
    image: '/images/formations/arduino.jpg',
    description: 'Créez vos propres robots et objets connectés avec Arduino',
    shortDescription: 'Robotique et objets connectés',
    prerequisites: 'Aucun prérequis',
    objectives: [
      'Comprendre l\'électronique de base',
      'Programmer Arduino',
      'Créer des circuits',
      'Construire des robots',
      'Développer des projets IoT'
    ],
    program: [
      'Introduction à Arduino',
      'Électronique de base',
      'Programmation C/C++',
      'Capteurs et actionneurs',
      'Communication sans fil',
      'Projets robotiques',
      'IoT et domotique',
      'Projet final'
    ],
    schedule: 'Samedi - 9h-13h',
    certification: true,
    popular: true
  },
  {
    id: 'ai-machine-learning',
    title: 'Intelligence Artificielle et Machine Learning',
    category: 'robotique',
    level: 'Avancé',
    duration: '6 mois',
    price: 180000,
    image: '/images/formations/ai.jpg',
    description: 'Plongez dans l\'IA et créez des modèles de machine learning',
    shortDescription: 'IA et apprentissage automatique',
    prerequisites: 'Python et mathématiques',
    objectives: [
      'Comprendre les concepts d\'IA',
      'Créer des modèles ML',
      'Utiliser TensorFlow et PyTorch',
      'Traiter des données complexes',
      'Déployer des modèles'
    ],
    program: [
      'Fondamentaux de l\'IA',
      'Mathématiques pour ML',
      'Algorithmes de ML',
      'Deep Learning',
      'TensorFlow et Keras',
      'Computer Vision',
      'NLP et traitement du langage',
      'Projets pratiques'
    ],
    schedule: 'Lundi à Vendredi - 14h-17h',
    certification: true,
    popular: false
  },

  // Réseaux et Télécommunications
  {
    id: 'cisco-ccna',
    title: 'Certification Cisco CCNA',
    category: 'reseaux',
    level: 'Intermédiaire',
    duration: '5 mois',
    price: 200000,
    image: '/images/formations/cisco.jpg',
    description: 'Préparez la certification CCNA et devenez administrateur réseau',
    shortDescription: 'Administration réseau Cisco',
    prerequisites: 'Connaissances de base en réseaux',
    objectives: [
      'Comprendre les réseaux TCP/IP',
      'Configurer des routeurs Cisco',
      'Administrer des switches',
      'Sécuriser les réseaux',
      'Passer la certification CCNA'
    ],
    program: [
      'Fondamentaux réseaux',
      'Modèle OSI et TCP/IP',
      'Configuration routeurs',
      'VLANs et switching',
      'Routage dynamique',
      'Sécurité réseau',
      'IPv6 et services',
      'Préparation certification'
    ],
    schedule: 'Lundi, Mercredi, Vendredi - 14h-18h',
    certification: true,
    popular: true
  },
  {
    id: 'cybersecurity',
    title: 'Cybersécurité et Ethical Hacking',
    category: 'reseaux',
    level: 'Avancé',
    duration: '6 mois',
    price: 220000,
    image: '/images/formations/security.jpg',
    description: 'Devenez expert en sécurité informatique et ethical hacking',
    shortDescription: 'Sécurité informatique avancée',
    prerequisites: 'Connaissances en réseaux et systèmes',
    objectives: [
      'Maîtriser la cybersécurité',
      'Effectuer des tests de pénétration',
      'Sécuriser les infrastructures',
      'Analyser les vulnérabilités',
      'Répondre aux incidents'
    ],
    program: [
      'Fondamentaux de la sécurité',
      'Cryptographie',
      'Tests de pénétration',
      'Sécurité des applications',
      'Sécurité réseau avancée',
      'Forensics et investigation',
      'Gestion des incidents',
      'Projets pratiques'
    ],
    schedule: 'Mardi, Jeudi - 14h-18h',
    certification: true,
    popular: true
  },

  // Bureautique
  {
    id: 'microsoft-office',
    title: 'Pack Microsoft Office Complet',
    category: 'bureautique',
    level: 'Débutant à Intermédiaire',
    duration: '2 mois',
    price: 40000,
    image: '/images/formations/office.jpg',
    description: 'Maîtrisez Word, Excel, PowerPoint et Outlook',
    shortDescription: 'Suite Microsoft Office complète',
    prerequisites: 'Aucun prérequis',
    objectives: [
      'Maîtriser Word pour documents pro',
      'Créer des tableaux Excel avancés',
      'Concevoir des présentations PowerPoint',
      'Gérer emails et calendrier Outlook',
      'Automatiser avec les macros'
    ],
    program: [
      'Word : documents professionnels',
      'Excel : tableaux et formules',
      'Excel : graphiques et tableaux croisés',
      'PowerPoint : présentations impactantes',
      'Outlook : gestion emails et agenda',
      'Collaboration et partage',
      'Macros et automation',
      'Projet final intégré'
    ],
    schedule: 'Lundi, Mercredi - 17h-19h',
    certification: true,
    popular: true
  },
  {
    id: 'excel-advanced',
    title: 'Excel Avancé et Business Intelligence',
    category: 'bureautique',
    level: 'Avancé',
    duration: '2 mois',
    price: 60000,
    image: '/images/formations/excel.jpg',
    description: 'Devenez expert Excel avec Power BI et analyse de données',
    shortDescription: 'Excel avancé et analyse de données',
    prerequisites: 'Connaissances de base en Excel',
    objectives: [
      'Maîtriser les formules avancées',
      'Créer des tableaux de bord',
      'Utiliser Power Query et Power Pivot',
      'Analyser des données avec Power BI',
      'Automatiser avec VBA'
    ],
    program: [
      'Formules et fonctions avancées',
      'Tableaux croisés dynamiques',
      'Power Query',
      'Power Pivot et DAX',
      'Tableaux de bord interactifs',
      'Introduction à Power BI',
      'VBA et macros',
      'Projets d\'analyse'
    ],
    schedule: 'Samedi - 14h-18h',
    certification: true,
    popular: false
  },

  // Maintenance Informatique
  {
    id: 'hardware-maintenance',
    title: 'Maintenance Matérielle Informatique',
    category: 'maintenance',
    level: 'Débutant',
    duration: '3 mois',
    price: 70000,
    image: '/images/formations/hardware.jpg',
    description: 'Apprenez à réparer et maintenir ordinateurs et périphériques',
    shortDescription: 'Réparation et maintenance PC',
    prerequisites: 'Aucun prérequis',
    objectives: [
      'Comprendre l\'architecture PC',
      'Diagnostiquer les pannes',
      'Remplacer les composants',
      'Installer et configurer',
      'Optimiser les performances'
    ],
    program: [
      'Architecture des ordinateurs',
      'Composants et périphériques',
      'Diagnostic de pannes',
      'Démontage et remontage',
      'Installation OS et drivers',
      'Maintenance préventive',
      'Récupération de données',
      'Atelier pratique'
    ],
    schedule: 'Mardi, Jeudi - 14h-17h',
    certification: true,
    popular: true
  },
  {
    id: 'system-admin',
    title: 'Administration Systèmes Windows/Linux',
    category: 'maintenance',
    level: 'Intermédiaire',
    duration: '4 mois',
    price: 120000,
    image: '/images/formations/sysadmin.jpg',
    description: 'Administrez des serveurs Windows et Linux en entreprise',
    shortDescription: 'Administration de serveurs',
    prerequisites: 'Connaissances de base en informatique',
    objectives: [
      'Installer et configurer serveurs',
      'Gérer utilisateurs et permissions',
      'Automatiser les tâches',
      'Sauvegarder et restaurer',
      'Surveiller et optimiser'
    ],
    program: [
      'Introduction aux systèmes',
      'Windows Server',
      'Linux Ubuntu/CentOS',
      'Active Directory',
      'Scripts et automation',
      'Virtualisation',
      'Sauvegardes et DR',
      'Monitoring et logs'
    ],
    schedule: 'Lundi, Mercredi, Vendredi - 14h-17h',
    certification: true,
    popular: false
  }
]

export const getFormationById = (id) => {
  return formations.find(f => f.id === id)
}

export const getFormationsByCategory = (categoryId) => {
  return formations.filter(f => f.category === categoryId)
}

export const getPopularFormations = () => {
  return formations.filter(f => f.popular)
}
