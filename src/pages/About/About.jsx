import { Target, Eye, Users, Award, Linkedin, Mail } from 'lucide-react'
import { motion } from 'framer-motion'

const About = () => {
  // Données de l'équipe - À personnaliser avec vos vraies informations
  const team = [
    {
      id: 1,
      name: 'Micheal Domguia Wawo',
      role: 'Responsable Technique',
      description: 'Expert en développement web avec 10 ans d\'expérience',
      image: '/team/ceo.jpg', // Remplacer par vos vraies photos
      linkedin: 'https://linkedin.com',
      email: 'jean@brainup-tech.cm'
    },
    {
      id: 2,
      name: 'Rayan Prevert Ketchatcham',
      role: 'Responsable de la communication & Digital',
      description: 'Ingenieur des Travaux des Telecom Option Informatique et Reseaux',
      image: '/team/directrice.jpg',
      linkedin: 'https://linkedin.com',
      email: 'marie@brainup-tech.cm'
    },
    {
      id: 3,
      name: 'Camille Mouthe Megue',
      role: 'Formateur Senior',
      description: 'Expert en infographie et design graphique',
      image: '/team/formateur1.jpg',
      linkedin: 'https://linkedin.com',
      email: 'paul@brainup-tech.cm'
    }
  ]

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <section className="bg-gradient-hero text-white py-16">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
              À Propos de BrainUp Technology
            </h1>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto">
              Accélérer la digitalisation des entreprises et particuliers à travers des solutions innovantes et accessibles
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container-custom py-16">
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-display font-bold text-gray-900 mb-6">
              Notre Histoire
            </h2>
            <div className="space-y-4 text-gray-700">
              <p>
               BrainUp Technology est née d'une vision simple : démocratiser l'accès aux technologies digitales à Bafia.Tout a commencé lors des vacances scolaires, avec des formations en informatique pour les jeunes de Bafia. Face à l'enthousiasme et à la soif d'apprendre le numérique, nous avons rapidement compris qu'il y avait un réel besoin dans notre ville.
              </p>
              <p>
                Au fil des formations, nous avons observé un besoin criant de digitalisation à Bafia. Des particuliers nous sollicitaient pour créer leurs sites web, développer leurs applications, gérer leur présence en ligne... Les entreprises locales cherchaient des solutions digitales mais ne savaient pas vers qui se tourner.
              </p>
              <p>
                C'est ainsi que BrainUp est devenue une startup tech complète. Notre connaissance du terrain nous a permis de proposer des solutions adaptées au contexte local. Aujourd'hui, nous accompagnons pres de 15 clients - entrepreneurs et particuliers - dans leur transformation numérique. Du développement web et mobile au community management, en passant par les réseaux informatiques et la formation, nous offrons une expertise 360° sur tous les besoins digitaux.
               </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-6"
          >
            <div className="card text-center">
              <Target className="w-12 h-12 text-primary-600 mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">Notre Mission</h3>
              <p className="text-sm text-gray-600">
                Démocratiser l'accès aux technologies digitales
              </p>
            </div>
            <div className="card text-center">
              <Eye className="w-12 h-12 text-secondary-600 mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">Notre Vision</h3>
              <p className="text-sm text-gray-600">
                Etre leader dans le domaine et impacte les entreprises de notre entourage 
              </p>
            </div>
            <div className="card text-center">
              <Users className="w-12 h-12 text-accent-600 mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">Nos Valeurs</h3>
              <p className="text-sm text-gray-600">
                Excellence, accessibilité, innovation et accompagnement
              </p>
            </div>
            <div className="card text-center">
              <Award className="w-12 h-12 text-primary-600 mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">Notre Engagement</h3>
              <p className="text-sm text-gray-600">
                Solutions de qualité et accompagnement continu
              </p>
            </div>
          </motion.div>
        </div>

        {/* Section Équipe */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
              Notre Équipe
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Des professionnels passionnés et expérimentés, dédiés à votre réussite
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card text-center group hover:shadow-2xl transition-all duration-300"
              >
                {/* Photo */}
                <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary-400 to-secondary-400 p-1">
                  <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                    <Users className="w-16 h-16 text-gray-400" />
                    {/* Pour utiliser une vraie photo, remplacer par :
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                    */}
                  </div>
                </div>

                {/* Info */}
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {member.name}
                </h3>
                <p className="text-primary-600 font-semibold mb-3">
                  {member.role}
                </p>
                <p className="text-sm text-gray-600 mb-4">
                  {member.description}
                </p>

                {/* Social Links */}
                <div className="flex justify-center gap-3">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href={`mailto:${member.email}`}
                    className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center hover:bg-primary-600 hover:text-white transition-all"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default About
