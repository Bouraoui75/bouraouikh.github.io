const CONFIG = {
  github: {
    username: 'BouraouiKhoudi',
  },

  base: '/bouraouikh.github.io/',

  projects: {
    github: {
      display: false,
      header: 'Dépôts GitHub (code)',
      mode: 'manual',
      automatic: {
        sortBy: 'stars',
        limit: 8,
        exclude: {
          forks: false,
          projects: [],
        },
      },
      manual: {
        projects: [
          'BouraouiKhoudi/Data-Entrainement-SQL-et-creation-BDD',
          'BouraouiKhoudi/Mettre-en-place-un-pipeline-d-orchestration-des-flux',
        ],
      },
    },

    external: {
      header: 'Projets GitHub (code)',
      projects: [
        {
          title: 'Création et automatisation d’une infrastructure de données',
          description:
            'L’objectif est d’analyser les pratiques sportives des employés d’une entreprise, afin de calculer des avantages sociaux liés au sport (primes sportives, jours wellness, indicateurs RH)',
          imageUrl: 'LIEN_IMAGE_A_COMPLETER',
          link: 'LIEN_GITHUB_A_COMPLETER',
        },
        {
          title: 'Conception et deploiement d’un système RAG',
          description:
            'Développement d’un système RAG (Retrieval-Augmented Generation) pour améliorer les réponses des modèles de langage en intégrant des données externes.',
          imageUrl: 'LIEN_IMAGE_A_COMPLETER',
          link: 'LIEN_GITHUB_A_COMPLETER',
        },
        {
          title: 'Système IA du POC au MVP',
          description:
            'Guide complet pour développer un système d’IA évolutif, de la preuve de concept (POC) au produit minimum viable (MVP).',
          imageUrl: 'LIEN_IMAGE_A_COMPLETER',
          link: 'LIEN_GITHUB_A_COMPLETER',
        },
        {
          title: 'Construire et tester une infrastructure de données sur le cloud',
          description:
            'Automatiser la collecte, transformation, stockage et analyse des données pour simplifier la prise de décision.',
          imageUrl: 'LIEN_IMAGE_A_COMPLETER',
          link: 'LIEN_GITHUB_A_COMPLETER',
        },
        {
          title: 'Creation BDD NoSQL',
          description:
            'Concevoir un modèle de données NoSQL, charger des jeux de données dans une base MongoDB, puis réaliser des analyses à l’aide de requêtes (mongosh) et d’un notebook Python (PyMongo + Polars).',
          imageUrl: 'LIEN_IMAGE_A_COMPLETER',
          link: 'LIEN_GITHUB_A_COMPLETER',
        },
        {
          title: 'Creation BDD et entrainement SQL',
          description:
            'Le projet vise à collecter, modéliser, analyser et valoriser les données de transactions immobilières afin de répondre aux besoins stratégiques et opérationnels de l’entreprise.',
          imageUrl: 'LIEN_IMAGE_A_COMPLETER',
          link: 'LIEN_GITHUB_A_COMPLETER',
        },
        {
          title: 'Pipeline d’orchestration des flux de données',
          description:
            'Mise en place d’un pipeline data automatisé avec ingestion, transformations et orchestration.',
          imageUrl: 'LIEN_IMAGE_A_COMPLETER',
          link: 'LIEN_GITHUB_A_COMPLETER',
        },
        {
          title: 'Auditez un environnement de données d’un supermarché',
          description:
            'Audit complet d’un environnement de données pour un supermarché, incluant l’analyse des flux de données, la qualité des données et les recommandations d’amélioration.',
          imageUrl: 'LIEN_IMAGE_A_COMPLETER',
          link: 'LIEN_GITHUB_A_COMPLETER',
        },
        {
          title: 'Analyser les abonnés du journal ParisMatch',
          description:
            'Analyse des données des abonnés du journal ParisMatch pour identifier les tendances et comportements d’achat.',
          imageUrl: 'LIEN_IMAGE_A_COMPLETER',
          link: 'LIEN_GITHUB_A_COMPLETER',
        },
        {
          title: 'World Population Dashboard - Looker Studio Dashboard',
          description:
            'Croissance démographique par pays (1970-2022). Graphiques interactifs avec filtres par région et année. Indicateurs clés : densité, pourcentage mondial.',
          imageUrl: 'LIEN_IMAGE_A_COMPLETER',
          link: 'LIEN_GITHUB_A_COMPLETER',
        },
      ],
    },
  },

  seo: {
    title: 'Portfolio of Bouraoui Khoudi',
    description: 'Portfolio professionnel Data Engineer de Bouraoui Khoudi',
    imageURL: '',
  },

  social: {
    linkedin: 'LIEN_LINKEDIN_A_COMPLETER',
    website: 'https://BouraouiKhoudi.github.io/',
    phone: 'NUMERO_A_COMPLETER',
    email: 'EMAIL_A_COMPLETER',
  },

  resume: {
    fileUrl: 'LIEN_CV_PDF_A_COMPLETER',
  },

  skills: [
    'Python',
    'SQL',
    'JavaScript',
    'React',
    'Node.js',
    'HTML',
    'CSS',
    'Docker',
    'Git',
    'Linux',
    'Shell / Bash',
    'Apache Airflow',
    'Apache Spark',
    'ETL / ELT',
    'Data Engineering',
    'Data Pipelines',
    'PostgreSQL',
    'MongoDB',
    'AWS',
    'Microsoft Azure',
    'Google Cloud Platform',
    'Power BI',
    'Tableau',
    'Jupyter Notebooks',
    'Agile / Scrum',
    'Kanban',
    'AMOA Data',
    'Reporting',
    'Tests fonctionnels',
    'Documentation fonctionnelle',
    'RAG',
    'LangChain',
    'NLP',
  ],

  experiences: [
    {
      company: 'INFOCHALLENGE',
      position: 'AMOA Data / Gestion de projet Data',
      from: '03/2024',
      to: '09/2024',
      companyLink: 'https://www.infochallenge.com',
    },
    {
      company: 'AFPA Créteil',
      position: 'Développeur Web Full Stack',
      from: '07/2021',
      to: '09/2021',
      companyLink: '',
    },
  ],

  educations: [
    {
      institution: 'OpenClassrooms',
      degree: 'Data Engineering - Titre RNCP 7',
      from: '2025',
      to: '2026',
    },
    {
      institution: 'OpenClassrooms',
      degree: 'Développeur d’application JavaScript React - Titre RNCP 6',
      from: '2023',
      to: '2024',
    },
    {
      institution: 'AFPA Paris',
      degree: 'Concepteur Développeur d’Application',
      from: '2021',
      to: '2022',
    },
    {
      institution: 'AFPA Créteil',
      degree: 'Développeur Web et Web Mobile',
      from: '2020',
      to: '2021',
    },
    {
      institution: 'SIMPLON.co',
      degree: 'Formation Artis Culture et Technique du Numérique',
      from: '2020',
      to: '2020',
    },
    {
      institution: 'Lycée Jules Richard',
      degree: 'Baccalauréat STI2D',
      from: '2018',
      to: '2019',
    },
  ],

  certifications: [
    {
      name: 'Certification à compléter',
      year: '2025',
    },
  ],

  googleAnalytics: {
    id: '',
  },

  hotjar: {
    id: '',
    snippetVersion: 6,
  },

  themeConfig: {
    defaultTheme: 'lofi',
    disableSwitch: false,
    respectPrefersColorScheme: false,
    displayAvatarRing: true,
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'caramellatte',
      'abyss',
      'silk',
      'procyon',
    ],
  },

  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
