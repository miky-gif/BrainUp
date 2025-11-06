import { Code, Users, Zap, Target, CheckCircle, Ruler } from 'lucide-react'
import { motion } from 'framer-motion'

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: Ruler,
      title: 'Solutions Sur Mesure',
      description: 'Chaque projet est unique. Nous créons des solutions parfaitement adaptées à vos besoins et objectifs.'
    },
    {
      icon: Code,
      title: 'Expertise Technique',
      description: 'Une équipe polyvalente maîtrisant les dernières technologies et tendances du digital.'
    },
    {
      icon: Users,
      title: 'Accompagnement Complet',
      description: 'De la conception à la maintenance, nous restons à vos côtés tout au long de votre projet.'
    },
    {
      icon: Target,
      title: 'Approche Pratique',
      description: 'Des solutions concrètes, testées et directement applicables pour votre business.'
    },
    {
      icon: CheckCircle,
      title: 'Qualité Garantie',
      description: 'Technologies modernes, standards professionnels et résultats mesurables.'
    },
    {
      icon: Zap,
      title: 'Rapidité d\'Exécution',
      description: 'Mise en œuvre rapide et efficace de vos solutions digitales.'
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
            POURQUOI CHOISIR <span className="text-gradient">BRAINUP TECHNOLOGY</span> ?
          </h2>
          <p className="section-subtitle max-w-3xl mx-auto">
            Nous nous engageons à vous offrir des solutions digitales d'excellence
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
