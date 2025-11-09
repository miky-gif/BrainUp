export const concours = [
  {
    id: 'concours-noel-2024',
    title: 'Grand Concours de Noël 2024',
    status: 'active',
    startDate: '2024-12-01',
    endDate: '2024-12-24',
    description: 'Participez à notre grand concours de Noël et gagnez des équipements informatiques de dernière génération!',
    image: '/images/concours/noel-2024.jpg',
    prizes: [
      {
        position: '1er Prix',
        item: 'PC Portable HP Pavilion 15',
        value: '450 000 FCFA',
        image: '/images/prizes/laptop.jpg'
      },
      {
        position: '2ème Prix',
        item: 'Tablette Samsung Galaxy Tab S9',
        value: '280 000 FCFA',
        image: '/images/prizes/tablet.jpg'
      },
      {
        position: '3ème Prix',
        item: 'Smartphone Samsung A54',
        value: '220 000 FCFA',
        image: '/images/prizes/phone.jpg'
      },
      {
        position: '4ème au 10ème Prix',
        item: 'Accessoires informatiques (souris, clavier, casque)',
        value: '30 000 FCFA chacun',
        image: '/images/prizes/accessories.jpg'
      }
    ],
    rules: [
      'Être inscrit à au moins une formation chez BrainUp Technology',
      'Remplir le formulaire de participation en ligne',
      'Répondre correctement au quiz technique',
      'Partager le concours sur vos réseaux sociaux',
      'Le tirage au sort aura lieu le 24 décembre 2024',
      'Les gagnants seront contactés par email et téléphone',
      'Les prix doivent être réclamés dans les 30 jours'
    ],
    howToParticipate: [
      'Inscrivez-vous à une formation (si ce n\'est pas déjà fait)',
      'Remplissez le formulaire de participation ci-dessous',
      'Répondez au quiz technique (10 questions)',
      'Partagez le concours sur Facebook, WhatsApp ou Instagram',
      'Attendez le tirage au sort du 24 décembre!'
    ],
    participants: 247,
    maxParticipants: 500
  },
  {
    id: 'challenge-coding-2024',
    title: 'Challenge Coding BrainUp 2024',
    status: 'upcoming',
    startDate: '2025-01-15',
    endDate: '2025-01-31',
    description: 'Testez vos compétences en programmation et gagnez des prix incroyables!',
    image: '/images/concours/coding-challenge.jpg',
    prizes: [
      {
        position: '1er Prix',
        item: 'MacBook Air M2',
        value: '850 000 FCFA',
        image: '/images/prizes/macbook.jpg'
      },
      {
        position: '2ème Prix',
        item: 'PC Portable Dell XPS',
        value: '550 000 FCFA',
        image: '/images/prizes/dell.jpg'
      },
      {
        position: '3ème Prix',
        item: 'iPad Pro 11"',
        value: '400 000 FCFA',
        image: '/images/prizes/ipad.jpg'
      }
    ],
    rules: [
      'Ouvert à tous les étudiants de BrainUp Technology',
      'Résoudre des défis de programmation en ligne',
      'Plusieurs niveaux de difficulté',
      'Classement basé sur le score et le temps',
      'Les 3 meilleurs gagnent les prix',
      'Langages acceptés: Python, JavaScript, Java, C++'
    ],
    howToParticipate: [
      'Créez un compte sur la plateforme de challenge',
      'Choisissez votre langage de programmation',
      'Résolvez un maximum de défis',
      'Soumettez vos solutions avant la deadline',
      'Consultez le classement en temps réel'
    ],
    participants: 0,
    maxParticipants: 200
  }
]

export const activeConcoursData = concours.filter(c => c.status === 'active')
export const upcomingConcoursData = concours.filter(c => c.status === 'upcoming')

export const previousWinners = [
  {
    id: 1,
    name: 'Alice Mbarga',
    concours: 'Concours Rentrée 2024',
    prize: 'PC Portable',
    date: '2024-09-30',
    image: '/images/winners/alice.jpg'
  },
  {
    id: 2,
    name: 'Boris Ndjock',
    concours: 'Challenge Coding 2023',
    prize: 'MacBook Pro',
    date: '2024-02-15',
    image: '/images/winners/boris.jpg'
  },
  {
    id: 3,
    name: 'Clarisse Fouda',
    concours: 'Concours Noël 2023',
    prize: 'Tablette Samsung',
    date: '2023-12-24',
    image: '/images/winners/clarisse.jpg'
  },
  {
    id: 4,
    name: 'Daniel Owona',
    concours: 'Concours Rentrée 2024',
    prize: 'Smartphone',
    date: '2024-09-30',
    image: '/images/winners/daniel.jpg'
  },
  {
    id: 1,
    name: 'Alice Mbarga',
    concours: 'Concours Rentrée 2024',
    prize: 'PC Portable',
    date: '2024-09-30',
    image: '/images/winners/alice.jpg'
  },
  {
    id: 2,
    name: 'Boris Ndjock',
    concours: 'Challenge Coding 2023',
    prize: 'MacBook Pro',
    date: '2024-02-15',
    image: '/images/winners/boris.jpg'
  },
  {
    id: 3,
    name: 'Clarisse Fouda',
    concours: 'Concours Noël 2023',
    prize: 'Tablette Samsung',
    date: '2023-12-24',
    image: '/images/winners/clarisse.jpg'
  },
  {
    id: 4,
    name: 'Daniel Owona',
    concours: 'Concours Rentrée 2024',
    prize: 'Smartphone',
    date: '2024-09-30',
    image: '/images/winners/daniel.jpg'
  }
]
