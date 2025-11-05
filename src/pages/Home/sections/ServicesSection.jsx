import { Palette, Code, Smartphone, Network, Wrench, Share2, GraduationCap } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const ServicesSection = () => {
  const services = [
    {
      icon: Palette,
      title: 'Design & Création Graphique',
      description: 'Design d\'interfaces modernes, identité visuelle, logos, supports marketing. Créez une image professionnelle qui marque les esprits.',
      features: ['UI/UX Design professionnel', 'Identité visuelle & branding', 'Design réactif et moderne', 'Supports marketing percutants'],
      link: '/services/design',
      color: 'primary',
      gradient: 'from-purple-500 to-pink-600'
    },
    {
      icon: Code,
      title: 'Développement Web',
      description: 'Sites web vitrine, e-commerce, applications web sur mesure. Du concept au déploiement, nous créons des solutions web performantes.',
      features: ['Sites responsive et modernes', 'E-commerce & plateformes web', 'Applications web complexes', 'Optimisation SEO incluse'],
      link: '/services/web',
      color: 'primary',
      gradient: 'from-primary-500 to-primary-600'
    },
    {
      icon: Smartphone,
      title: 'Développement Mobile',
      description: 'Applications mobiles natives et multiplateformes (iOS & Android). Transformez vos idées en apps performantes et intuitives.',
      features: ['Apps Android & iOS', 'Design intuitif et fluide', 'Performance optimisée', 'Publication sur les stores'],
      link: '/services/mobile',
      color: 'secondary',
      gradient: 'from-blue-500 to-cyan-600'
    },
    {
      icon: Network,
      title: 'Réseaux & Infrastructure',
      description: 'Installation, configuration et sécurisation de réseaux informatiques. Infrastructures fiables pour votre entreprise.',
      features: ['Configuration réseau complète', 'Sécurité informatique', 'Serveurs & infrastructure cloud', 'Support technique continu'],
      link: '/services/reseaux',
      color: 'accent',
      gradient: 'from-green-500 to-emerald-600'
    },
    // {
    //   icon: Wrench,
    //   title: 'Maintenance & Support',
    //   description: 'Réparation, maintenance préventive et support technique pour tous vos équipements. Gardez vos systèmes opérationnels 24/7.',
    //   features: ['Diagnostic gratuit', 'Réparation rapide garantie', 'Maintenance préventive', 'Support technique réactif'],
    //   link: '/services/maintenance',
    //   color: 'accent',
    //   gradient: 'from-orange-500 to-red-600'
    // },
    {
      icon: Share2,
      title: 'Community Management',
      description: 'Gestion professionnelle de votre présence digitale. Boostez votre visibilité et vos ventes grâce aux réseaux sociaux.',
      features: ['Gestion réseaux sociaux', 'Création de contenu engageant', 'Stratégie marketing digital', 'Augmentation des ventes'],
      link: '/services/community',
      color: 'secondary',
      gradient: 'from-pink-500 to-rose-600'
    },
    {
      icon: GraduationCap,
      title: 'Formations Professionnelles',
      description: 'Plus de 15 formations certifiantes en informatique. Développez vos compétences ou celles de vos équipes.',
      features: ['Formations certifiantes', 'Programmes personnalisés', 'Pratique intensive', 'Formateurs expérimentés'],
      link: '/formations',
      color: 'primary',
      gradient: 'from-indigo-500 to-purple-600'
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
            BrainUp Technology vous accompagne dans votre transformation digitale avec une gamme complète de services
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