export const testimonials = [
  {
    id: 1,
    name: 'Marie Nguema',
    role: 'Développeuse Web',
    formation: 'Développement Web Full Stack',
    image: '/images/testimonials/marie.jpg',
    rating: 5,
    comment: 'Grâce à BrainUp Technology, j\'ai pu me reconvertir dans le développement web. Les formateurs sont excellents et le suivi est personnalisé. Aujourd\'hui, je travaille comme développeuse freelance.',
    date: '2024-09-15'
  },
  {
    id: 2,
    name: 'Jean-Paul Mbida',
    role: 'Graphiste',
    formation: 'Adobe Photoshop Professionnel',
    image: '/images/testimonials/jean.jpg',
    rating: 5,
    comment: 'Formation très complète en infographie. J\'ai appris énormément et je peux maintenant créer des designs professionnels pour mes clients. Je recommande vivement!',
    date: '2024-08-20'
  },
  {
    id: 3,
    name: 'Aminata Diallo',
    role: 'Administratrice Réseau',
    formation: 'Certification Cisco CCNA',
    image: '/images/testimonials/aminata.jpg',
    rating: 5,
    comment: 'J\'ai obtenu ma certification CCNA grâce à cette formation. Le contenu est aligné sur l\'examen et les travaux pratiques sont très formateurs. Merci BrainUp!',
    date: '2024-07-10'
  },
  {
    id: 4,
    name: 'Patrick Essomba',
    role: 'Technicien Informatique',
    formation: 'Maintenance Matérielle Informatique',
    image: '/images/testimonials/patrick.jpg',
    rating: 4,
    comment: 'Formation pratique et orientée terrain. J\'ai ouvert mon atelier de réparation informatique à Bafia après cette formation. Les compétences acquises sont directement applicables.',
    date: '2024-06-25'
  },
  {
    id: 5,
    name: 'Fatima Bello',
    role: 'Data Analyst',
    formation: 'Excel Avancé et Business Intelligence',
    image: '/images/testimonials/fatima.jpg',
    rating: 5,
    comment: 'Excellente formation en Excel et Power BI. J\'ai pu améliorer mes compétences en analyse de données et obtenir une promotion dans mon entreprise. Formation très professionnelle!',
    date: '2024-05-30'
  },
  {
    id: 6,
    name: 'David Nkolo',
    role: 'Développeur Mobile',
    formation: 'Développement Mobile avec React Native',
    image: '/images/testimonials/david.jpg',
    rating: 5,
    comment: 'J\'ai développé ma première application mobile pendant cette formation. Les projets pratiques m\'ont permis de construire un portfolio solide. Aujourd\'hui, je développe des apps pour des clients.',
    date: '2024-04-18'
  },
  {
    id: 7,
    name: 'Sophie Kamga',
    role: 'Assistante Administrative',
    formation: 'Pack Microsoft Office Complet',
    image: '/images/testimonials/sophie.jpg',
    rating: 5,
    comment: 'Formation très utile pour mon travail quotidien. Je maîtrise maintenant Word, Excel et PowerPoint. Cela m\'a permis d\'être plus efficace et productive au bureau.',
    date: '2024-03-22'
  },
  {
    id: 8,
    name: 'Ibrahim Sow',
    role: 'Ingénieur Robotique',
    formation: 'Robotique avec Arduino',
    image: '/images/testimonials/ibrahim.jpg',
    rating: 5,
    comment: 'Passionnant! J\'ai découvert le monde de la robotique et créé plusieurs projets. Les formateurs sont passionnés et transmettent bien leur savoir. Une formation que je recommande à tous.',
    date: '2024-02-14'
  }
]

export const getTestimonialsByRating = (minRating) => {
  return testimonials.filter(t => t.rating >= minRating)
}

export const getRecentTestimonials = (count = 3) => {
  return testimonials
    .sort((a, b) => new Date(b.date) - new Date(a.date))
    .slice(0, count)
}
