import { Link } from 'react-router-dom'
import { Clock, TrendingUp, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { getPopularFormations } from '../../../data/formations'

const PopularFormations = () => {
  const popularFormations = getPopularFormations().slice(0, 6)

  const formatPrice = (price) => {
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'XAF',
      minimumFractionDigits: 0
    }).format(price)
  }

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
          <div className="inline-flex items-center gap-2 bg-accent-100 text-accent-700 px-4 py-2 rounded-full mb-4">
            <TrendingUp className="w-4 h-4" />
            <span className="text-sm font-semibold">Formations populaires</span>
          </div>
          <h2 className="section-title">
            Nos formations <span className="text-gradient">les plus demandées</span>
          </h2>
          <p className="section-subtitle">
            Découvrez les formations qui transforment des vies et lancent des carrières
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {popularFormations.map((formation, index) => (
            <motion.div
              key={formation.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link to={`/formations/${formation.id}`} className="block group">
                <div className="card h-full hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden p-0">
                  {/* Image */}
                  <div className="relative h-48 bg-gradient-to-br from-primary-400 to-secondary-400 overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-white text-6xl opacity-20">
                        {formation.category === 'infographie' && '🎨'}
                        {formation.category === 'web-mobile' && '💻'}
                        {formation.category === 'programmation' && '⚡'}
                        {formation.category === 'robotique' && '🤖'}
                        {formation.category === 'reseaux' && '🌐'}
                        {formation.category === 'bureautique' && '📊'}
                        {formation.category === 'maintenance' && '🔧'}
                      </div>
                    </div>
                    {formation.popular && (
                      <div className="absolute top-4 right-4 bg-accent-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        Populaire
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                      <Clock className="w-4 h-4" />
                      <span>{formation.duration}</span>
                      <span className="mx-2">•</span>
                      <span className="text-primary-600 font-semibold">{formation.level}</span>
                    </div>

                    <h3 className="text-xl font-display font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                      {formation.title}
                    </h3>

                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {formation.shortDescription}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                      <div>
                        <div className="text-2xl font-bold text-primary-600">
                          {formatPrice(formation.price)}
                        </div>
                        <div className="text-xs text-gray-500">Prix de la formation</div>
                      </div>
                      <div className="btn btn-primary btn-sm group-hover:scale-110">
                        Voir plus
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Link to="/formations" className="btn btn-primary btn-lg">
            Voir toutes les formations
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default PopularFormations
