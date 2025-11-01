import { GraduationCap, ShoppingBag, Wrench } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const ServicesSection = () => {
  const services = [
    {
      icon: GraduationCap,
      title: 'Formations Informatiques',
      description: 'Plus de 15 formations professionnelles dans tous les domaines de l\'informatique : développement, design, réseaux, robotique et plus.',
      features: ['Formations certifiantes', 'Formateurs expérimentés', 'Pratique intensive', 'Suivi personnalisé'],
      link: '/formations',
      color: 'primary',
      gradient: 'from-primary-500 to-primary-600'
    },
    {
      icon: ShoppingBag,
      title: 'Vente d\'Équipements',
      description: 'Ordinateurs, périphériques et accessoires informatiques de qualité à des prix compétitifs pour accompagner votre apprentissage.',
      features: ['Prix compétitifs', 'Matériel de qualité', 'Garantie incluse', 'Livraison disponible'],
      link: '/boutique',
      color: 'secondary',
      gradient: 'from-secondary-500 to-secondary-600'
    },
    {
      icon: Wrench,
      title: 'Maintenance Informatique',
      description: 'Service de réparation et maintenance pour tous vos équipements informatiques. Diagnostic gratuit et intervention rapide.',
      features: ['Diagnostic gratuit', 'Réparation rapide', 'Pièces d\'origine', 'Garantie service'],
      link: '/contact',
      color: 'accent',
      gradient: 'from-accent-500 to-accent-600'
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">
            Nos <span className="text-gradient">Services</span>
          </h2>
          <p className="section-subtitle">
            BrainUp Technology vous accompagne dans votre parcours numérique avec des services complets
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="card h-full hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-display font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>

                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                      <div className={`w-5 h-5 rounded-full bg-${service.color}-100 flex items-center justify-center flex-shrink-0`}>
                        <span className={`text-${service.color}-600 text-xs`}>✓</span>
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  to={service.link}
                  className={`btn btn-${service.color} w-full group-hover:scale-105`}
                >
                  En savoir plus
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesSection
