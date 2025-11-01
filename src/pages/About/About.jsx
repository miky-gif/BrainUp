import { Target, Eye, Users, Award, Linkedin, Mail } from 'lucide-react'
import { motion } from 'framer-motion'

const About = () => {
  // Données de l'équipe - À personnaliser avec vos vraies informations
  const team = [
    {
      id: 1,
      name: 'Jean Dupont',
      role: 'Fondateur & CEO',
      description: 'Expert en développement web avec 10 ans d\'expérience',
      image: '/team/ceo.jpg', // Remplacer par vos vraies photos
      linkedin: 'https://linkedin.com',
      email: 'jean@brainup-tech.cm'
    },
    {
      id: 2,
      name: 'Marie Martin',
      role: 'Directrice Pédagogique',
      description: 'Spécialiste en pédagogie numérique et formation',
      image: '/team/directrice.jpg',
      linkedin: 'https://linkedin.com',
      email: 'marie@brainup-tech.cm'
    },
    {
      id: 3,
      name: 'Paul Bernard',
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
              Réduire la fracture numérique à Bafia et former la prochaine génération de professionnels de l'informatique
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
                BrainUp Technology est né d'une vision simple mais ambitieuse : rendre l'éducation informatique accessible à tous à Bafia et ses environs. Fondé par des passionnés de technologie et d'éducation, notre centre s'est rapidement imposé comme une référence dans la formation professionnelle.
              </p>
              <p>
                Depuis notre création, nous avons formé plus de 500 étudiants dans divers domaines de l'informatique, de la bureautique basique au développement web avancé, en passant par la robotique et la cybersécurité.
              </p>
              <p>
                Notre approche pédagogique unique combine théorie et pratique intensive, avec un suivi personnalisé de chaque apprenant. Nous croyons fermement que chacun peut réussir dans le numérique avec les bons outils et le bon accompagnement.
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
                Réduire la fracture numérique par des formations accessibles et de qualité
              </p>
            </div>
            <div className="card text-center">
              <Eye className="w-12 h-12 text-secondary-600 mx-auto mb-4" />
              <h3 className="font-bold text-gray-900 mb-2">Notre Vision</h3>
              <p className="text-sm text-gray-600">
                Faire de Bafia un hub technologique reconnu au Cameroun
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
                Former des professionnels compétents et employables
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
