export const testimonials = [
  {
    id: 1,
    name: 'Marie Nguema',
    role: 'Entrepreneuse, E-commerce',
    formation: 'Service utilisé: Développement Web E-commerce',
    image: '/images/testimonials/marie.jpg',
    rating: 5,
    comment: 'BrainUp Technology a développé ma boutique en ligne de A à Z. Le site est magnifique, rapide et mes ventes ont triplé en 3 mois. Un investissement très rentable!',
    date: '2024-10-15'
  },
  {
    id: 2,
    name: 'Jean-Paul Mbida',
    role: 'Directeur, PME',
    formation: 'Service utilisé: Accompagnement Digital Complet',
    image: '/images/testimonials/jean.jpg',
    rating: 5,
    comment: 'Excellent accompagnement pour notre transformation digitale. Site web, réseaux sociaux, formation des équipes... BrainUp a géré tout notre projet avec professionnalisme.',
    date: '2024-10-10'
  },
  {
    id: 3,
    name: 'Aminata Diallo',
    role: 'Restaurant Le Palmier',
    formation: 'Service utilisé: Community Management',
    image: '/images/testimonials/aminata.jpg',
    rating: 5,
    comment: 'La gestion de nos réseaux sociaux par BrainUp a transformé notre visibilité. Nos réservations ont augmenté de 60% grâce à leur stratégie social media!',
    date: '2024-10-05'
  },
  {
    id: 4,
    name: 'Patrick Essomba',
    role: 'Gérant, Boutique Informatique',
    formation: 'Service utilisé: Réseaux & Infrastructure',
    image: '/images/testimonials/patrick.jpg',
    rating: 5,
    comment: 'BrainUp a installé notre réseau informatique complet. Configuration impeccable, sécurisée et un support technique toujours disponible. Je recommande!',
    date: '2024-09-28'
  },
  {
    id: 5,
    name: 'Fatima Bello',
    role: 'Startup Tech',
    formation: 'Service utilisé: Développement Mobile',
    image: '/images/testimonials/fatima.jpg',
    rating: 5,
    comment: 'Notre application mobile a été développée dans les délais avec une qualité exceptionnelle. L\'équipe BrainUp est réactive et très compétente.',
    date: '2024-09-20'
  },
  {
    id: 6,
    name: 'David Nkolo',
    role: 'Entrepreneur',
    formation: 'Service utilisé: Design & Développement Web',
    image: '/images/testimonials/david.jpg',
    rating: 5,
    comment: 'J\'ai fait confiance à BrainUp pour mon site web et mon logo. Le résultat est professionnel et moderne. Excellent rapport qualité-prix!',
    date: '2024-09-15'
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
