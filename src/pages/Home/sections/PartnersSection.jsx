import { motion } from 'framer-motion'

const PartnersSection = () => {
  // Données des partenaires - À personnaliser avec vos vrais partenaires
  const partners = [
    {
      id: 1,
      name: 'Partenaire 1',
      logo: '/partners/partner1.png',
      description: 'Description du partenaire'
    },
    {
      id: 2,
      name: 'Partenaire 2',
      logo: '/partners/partner2.png',
      description: 'Description du partenaire'
    },
    {
      id: 3,
      name: 'Partenaire 3',
      logo: '/partners/partner3.png',
      description: 'Description du partenaire'
    },
    {
      id: 4,
      name: 'Partenaire 4',
      logo: '/partners/partner4.png',
      description: 'Description du partenaire'
    },
    {
      id: 5,
      name: 'Partenaire 5',
      logo: '/partners/partner5.png',
      description: 'Description du partenaire'
    },
    {
      id: 6,
      name: 'Partenaire 6',
      logo: '/partners/partner6.png',
      description: 'Description du partenaire'
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">
            Nos Partenaires
          </h2>
          <p className="section-subtitle">
            Ils nous font confiance et soutiennent notre mission
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="flex items-center justify-center"
            >
              <div className="w-full h-24 bg-gray-50 rounded-lg p-4 flex items-center justify-center hover:shadow-lg transition-all duration-300 group">
                {/* Placeholder - Remplacer par les vrais logos */}
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-lg mx-auto mb-2 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <span className="text-2xl font-bold text-primary-600">
                      {partner.name.charAt(0)}
                    </span>
                  </div>
                  {/* Pour utiliser un vrai logo, décommenter :
                  <img 
                    src={partner.logo} 
                    alt={partner.name}
                    className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all"
                  />
                  */}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Message pour devenir partenaire */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-4">
            Vous souhaitez devenir partenaire ?
          </p>
          <a
            href="/contact"
            className="btn btn-outline"
          >
            Contactez-nous
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default PartnersSection
