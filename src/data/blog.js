export const blogPosts = [
  {
    id: 'carriere-developpeur-web-2024',
    title: 'Comment devenir développeur web en 2024',
    slug: 'carriere-developpeur-web-2024',
    category: 'Carrière',
    author: 'BrainUp Technology',
    authorImage: '/images/authors/brainup.jpg',
    date: '2024-10-15',
    readTime: '8 min',
    image: '/images/blog/dev-web.jpg',
    excerpt: 'Découvrez le parcours complet pour devenir développeur web en 2024, les compétences requises et les opportunités de carrière.',
    content: `
      <p>Le développement web est l'un des métiers les plus demandés en 2024. Voici comment vous pouvez démarrer votre carrière...</p>
      <h2>Les compétences essentielles</h2>
      <p>Pour devenir développeur web, vous devez maîtriser...</p>
    `,
    tags: ['Développement Web', 'Carrière', 'Formation'],
    featured: true
  },
  {
    id: 'importance-cybersecurite',
    title: 'L\'importance de la cybersécurité pour les entreprises',
    slug: 'importance-cybersecurite',
    category: 'Sécurité',
    author: 'BrainUp Technology',
    authorImage: '/images/authors/brainup.jpg',
    date: '2024-10-10',
    readTime: '6 min',
    image: '/images/blog/cybersecurity.jpg',
    excerpt: 'La cybersécurité est devenue cruciale pour toutes les entreprises. Découvrez pourquoi et comment vous protéger.',
    content: `
      <p>Les cyberattaques sont en constante augmentation. Voici pourquoi votre entreprise doit investir dans la cybersécurité...</p>
    `,
    tags: ['Cybersécurité', 'Entreprise', 'Sécurité'],
    featured: true
  },
  {
    id: 'tendances-design-2024',
    title: 'Les tendances du design graphique en 2024',
    slug: 'tendances-design-2024',
    category: 'Design',
    author: 'BrainUp Technology',
    authorImage: '/images/authors/brainup.jpg',
    date: '2024-10-05',
    readTime: '5 min',
    image: '/images/blog/design-trends.jpg',
    excerpt: 'Explorez les dernières tendances en design graphique et comment les appliquer à vos projets.',
    content: `
      <p>Le design graphique évolue constamment. Voici les tendances à suivre en 2024...</p>
    `,
    tags: ['Design', 'Infographie', 'Tendances'],
    featured: false
  },
  {
    id: 'python-data-science',
    title: 'Python : Le langage incontournable pour la Data Science',
    slug: 'python-data-science',
    category: 'Programmation',
    author: 'BrainUp Technology',
    authorImage: '/images/authors/brainup.jpg',
    date: '2024-09-28',
    readTime: '7 min',
    image: '/images/blog/python-data.jpg',
    excerpt: 'Pourquoi Python est-il le langage préféré des data scientists? Découvrez ses avantages et comment démarrer.',
    content: `
      <p>Python domine le domaine de la data science. Voici pourquoi...</p>
    `,
    tags: ['Python', 'Data Science', 'Programmation'],
    featured: true
  },
  {
    id: 'reussir-entretien-tech',
    title: 'Comment réussir son entretien technique',
    slug: 'reussir-entretien-tech',
    category: 'Carrière',
    author: 'BrainUp Technology',
    authorImage: '/images/authors/brainup.jpg',
    date: '2024-09-20',
    readTime: '10 min',
    image: '/images/blog/interview.jpg',
    excerpt: 'Préparez-vous efficacement pour vos entretiens techniques avec nos conseils d\'experts.',
    content: `
      <p>Les entretiens techniques peuvent être stressants. Voici comment vous préparer...</p>
    `,
    tags: ['Carrière', 'Entretien', 'Conseils'],
    featured: false
  },
  {
    id: 'robotique-education',
    title: 'La robotique dans l\'éducation : Un atout majeur',
    slug: 'robotique-education',
    category: 'Robotique',
    author: 'BrainUp Technology',
    authorImage: '/images/authors/brainup.jpg',
    date: '2024-09-15',
    readTime: '6 min',
    image: '/images/blog/robotics-edu.jpg',
    excerpt: 'Découvrez comment la robotique transforme l\'éducation et prépare les jeunes aux métiers de demain.',
    content: `
      <p>La robotique éducative offre de nombreux avantages...</p>
    `,
    tags: ['Robotique', 'Éducation', 'Innovation'],
    featured: false
  }
]

export const getBlogPostBySlug = (slug) => {
  return blogPosts.find(post => post.slug === slug)
}

export const getFeaturedPosts = () => {
  return blogPosts.filter(post => post.featured)
}

export const getPostsByCategory = (category) => {
  return blogPosts.filter(post => post.category === category)
}

export const getRecentPosts = (count = 3) => {
  return blogPosts
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, count)
}
