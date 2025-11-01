import { Award, Users, Clock, TrendingUp, Heart, Shield } from 'lucide-react'
import { motion } from 'framer-motion'

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Award,
      title: 'Attestations Officielles',
      description: 'Recevez une attestation reconnue à la fin de chaque formation'
    },
    {
      icon: Users,
      title: 'Formateurs Expérimentés',
      description: 'Apprenez avec des professionnels passionnés et pédagogues'
    },
    {
      icon: Clock,
      title: 'Horaires Flexibles',
      description: 'Choisissez les créneaux qui correspondent à votre emploi du temps'
    },
    {
      icon: TrendingUp,
      title: 'Formations Pratiques',
      description: 'Projets réels et compétences directement applicables'
    },
    {
      icon: Heart,
      title: 'Suivi Personnalisé',
      description: 'Accompagnement individuel tout au long de votre parcours'
    },
    {
      icon: Shield,
      title: 'Qualité Garantie',
      description: 'Programmes actualisés et alignés sur les besoins du marché'
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            Pourquoi choisir <span className="text-gradient">BrainUp Technology</span> ?
          </h2>
          <p className="section-subtitle">
            Nous nous engageons à vous offrir la meilleure expérience de formation
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-2xl mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <reason.icon className="w-10 h-10 text-primary-600" />
              </div>
              <h3 className="text-xl font-display font-bold text-gray-900 mb-3">
                {reason.title}
              </h3>
              <p className="text-gray-600">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
