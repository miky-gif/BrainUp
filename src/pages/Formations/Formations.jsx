import { useState, useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { Search, Filter, Clock, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { formations, formationCategories } from '../../data/formations'

const Formations = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'all')
  const [selectedLevel, setSelectedLevel] = useState('all')
  const [priceRange, setPriceRange] = useState('all')

  useEffect(() => {
    const category = searchParams.get('category')
    if (category) {
      setSelectedCategory(category)
    }
  }, [searchParams])

  const filteredFormations = formations.filter(formation => {
    const matchesSearch = formation.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         formation.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || formation.category === selectedCategory
    const matchesLevel = selectedLevel === 'all' || formation.level.includes(selectedLevel)
    
    let matchesPrice = true
    if (priceRange === 'low') matchesPrice = formation.price < 60000
    else if (priceRange === 'medium') matchesPrice = formation.price >= 60000 && formation.price < 120000
    else if (priceRange === 'high') matchesPrice = formation.price >= 120000

    return matchesSearch && matchesCategory && matchesLevel && matchesPrice
  })

  const formatPrice = (price) => {
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'XAF',
      minimumFractionDigits: 0
    }).format(price)
  }

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-hero text-white py-16">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Nos Formations
            </h1>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto">
              Découvrez nos formations professionnelles et choisissez celle qui correspond à vos objectifs
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container-custom py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar Filters */}
          <aside className="lg:col-span-1">
            <div className="card sticky top-24">
              <div className="flex items-center gap-2 mb-6">
                <Filter className="w-5 h-5 text-primary-600" />
                <h3 className="text-lg font-bold text-gray-900">Filtres</h3>
              </div>

              {/* Search */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Rechercher
                </label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Nom de formation..."
                    className="input-field pl-10"
                  />
                </div>
              </div>

              {/* Category */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Catégorie
                </label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="input-field"
                >
                  <option value="all">Toutes les catégories</option>
                  {formationCategories.map(cat => (
                    <option key={cat.id} value={cat.id}>{cat.name}</option>
                  ))}
                </select>
              </div>

              {/* Level */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Niveau
                </label>
                <select
                  value={selectedLevel}
                  onChange={(e) => setSelectedLevel(e.target.value)}
                  className="input-field"
                >
                  <option value="all">Tous les niveaux</option>
                  <option value="Débutant">Débutant</option>
                  <option value="Intermédiaire">Intermédiaire</option>
                  <option value="Avancé">Avancé</option>
                </select>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Prix
                </label>
                <select
                  value={priceRange}
                  onChange={(e) => setPriceRange(e.target.value)}
                  className="input-field"
                >
                  <option value="all">Tous les prix</option>
                  <option value="low">Moins de 60 000 FCFA</option>
                  <option value="medium">60 000 - 120 000 FCFA</option>
                  <option value="high">Plus de 120 000 FCFA</option>
                </select>
              </div>

              {/* Reset */}
              <button
                onClick={() => {
                  setSearchTerm('')
                  setSelectedCategory('all')
                  setSelectedLevel('all')
                  setPriceRange('all')
                  setSearchParams({})
                }}
                className="btn btn-outline w-full"
              >
                Réinitialiser
              </button>
            </div>
          </aside>

          {/* Formations Grid */}
          <div className="lg:col-span-3">
            <div className="mb-6 flex items-center justify-between">
              <p className="text-gray-600">
                <span className="font-semibold text-gray-900">{filteredFormations.length}</span> formation(s) trouvée(s)
              </p>
            </div>

            {filteredFormations.length === 0 ? (
              <div className="card text-center py-12">
                <p className="text-gray-600 mb-4">Aucune formation ne correspond à vos critères</p>
                <button
                  onClick={() => {
                    setSearchTerm('')
                    setSelectedCategory('all')
                    setSelectedLevel('all')
                    setPriceRange('all')
                  }}
                  className="btn btn-primary"
                >
                  Réinitialiser les filtres
                </button>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 gap-6">
                {filteredFormations.map((formation, index) => (
                  <motion.div
                    key={formation.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                  >
                    <Link to={`/formations/${formation.id}`} className="block group">
                      <div className="card h-full hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 overflow-hidden p-0">
                        {/* Image */}
                        <div className="relative h-48 bg-gradient-to-br from-primary-400 to-secondary-400">
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
                            </div>
                            <div className="btn btn-primary btn-sm group-hover:scale-110">
                              Voir détails
                              <ArrowRight className="w-4 h-4" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Formations
