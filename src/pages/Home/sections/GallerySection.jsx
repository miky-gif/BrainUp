import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Play, Image as ImageIcon, Calendar } from 'lucide-react'

const GallerySection = () => {
  const [selectedMedia, setSelectedMedia] = useState(null)
  const [filter, setFilter] = useState('all')

  // Données de la galerie - À personnaliser avec vos vrais médias
  const galleryItems = [
    {
      id: 1,
      type: 'image',
      url: '/gallery/remise-attestation-1.jpg',
      thumbnail: '/gallery/remise-attestation-1.jpg',
      title: 'Remise des attestations - Promotion 2024',
      date: '15 Décembre 2024',
      category: 'attestations'
    },
    {
      id: 2,
      type: 'image',
      url: '/gallery/formation-web.jpg',
      thumbnail: '/gallery/formation-web.jpg',
      title: 'Formation Développement Web',
      date: '10 Novembre 2024',
      category: 'formations'
    },
    {
      id: 3,
      type: 'video',
      url: 'https://www.youtube.com/embed/VIDEO_ID',
      thumbnail: '/gallery/video-thumb-1.jpg',
      title: 'Témoignages des étudiants',
      date: '5 Octobre 2024',
      category: 'temoignages'
    },
    {
      id: 4,
      type: 'image',
      url: '/gallery/concours-2024.jpg',
      thumbnail: '/gallery/concours-2024.jpg',
      title: 'Concours BrainUp 2024',
      date: '20 Septembre 2024',
      category: 'evenements'
    },
    {
      id: 5,
      type: 'image',
      url: '/gallery/remise-attestation-2.jpg',
      thumbnail: '/gallery/remise-attestation-2.jpg',
      title: 'Cérémonie de remise des certificats',
      date: '15 Août 2024',
      category: 'attestations'
    },
    {
      id: 6,
      type: 'video',
      url: 'https://www.youtube.com/embed/VIDEO_ID',
      thumbnail: '/gallery/video-thumb-2.jpg',
      title: 'Visite de nos locaux',
      date: '1 Juillet 2024',
      category: 'evenements'
    }
  ]

  const categories = [
    { id: 'all', name: 'Tout' },
    { id: 'attestations', name: 'Remises d\'attestations' },
    { id: 'formations', name: 'Formations' },
    { id: 'evenements', name: 'Événements' },
    { id: 'temoignages', name: 'Témoignages' }
  ]

  const filteredItems = filter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter)

  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="section-title">
            Galerie & Événements
          </h2>
          <p className="section-subtitle">
            Découvrez nos moments forts en images et vidéos
          </p>
        </motion.div>

        {/* Filtres */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`px-6 py-2 rounded-lg font-semibold transition-all ${
                filter === category.id
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Grille de médias */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group cursor-pointer"
              onClick={() => setSelectedMedia(item)}
            >
              <div className="relative overflow-hidden rounded-xl shadow-md hover:shadow-2xl transition-all duration-300">
                {/* Thumbnail */}
                <div className="aspect-video bg-gradient-to-br from-primary-100 to-secondary-100 flex items-center justify-center">
                  {/* Placeholder - Remplacer par vraies images */}
                  <div className="text-center">
                    {item.type === 'video' ? (
                      <Play className="w-16 h-16 text-primary-600 mb-2" />
                    ) : (
                      <ImageIcon className="w-16 h-16 text-primary-600 mb-2" />
                    )}
                    <p className="text-sm text-gray-600 px-4">{item.title}</p>
                  </div>
                  {/* Pour utiliser vraies images/vidéos, décommenter :
                  <img 
                    src={item.thumbnail} 
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  */}
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 text-white w-full">
                    <h3 className="font-bold mb-1">{item.title}</h3>
                    <div className="flex items-center gap-2 text-sm">
                      <Calendar className="w-4 h-4" />
                      <span>{item.date}</span>
                    </div>
                  </div>
                </div>

                {/* Badge type */}
                {item.type === 'video' && (
                  <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                    <Play className="w-3 h-3" />
                    Vidéo
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal de visualisation */}
        <AnimatePresence>
          {selectedMedia && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedMedia(null)}
            >
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                className="relative max-w-5xl w-full"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Bouton fermer */}
                <button
                  onClick={() => setSelectedMedia(null)}
                  className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
                >
                  <X className="w-8 h-8" />
                </button>

                {/* Contenu */}
                <div className="bg-white rounded-xl overflow-hidden">
                  {selectedMedia.type === 'video' ? (
                    <div className="aspect-video">
                      <iframe
                        src={selectedMedia.url}
                        className="w-full h-full"
                        allowFullScreen
                        title={selectedMedia.title}
                      />
                    </div>
                  ) : (
                    <div className="aspect-video bg-gradient-to-br from-primary-100 to-secondary-100 flex items-center justify-center">
                      <div className="text-center p-8">
                        <ImageIcon className="w-24 h-24 text-primary-600 mx-auto mb-4" />
                        <p className="text-gray-700">{selectedMedia.title}</p>
                        <p className="text-sm text-gray-500 mt-2">{selectedMedia.date}</p>
                      </div>
                      {/* Pour afficher vraie image :
                      <img 
                        src={selectedMedia.url} 
                        alt={selectedMedia.title}
                        className="w-full h-full object-contain"
                      />
                      */}
                    </div>
                  )}
                  
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {selectedMedia.title}
                    </h3>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Calendar className="w-4 h-4" />
                      <span>{selectedMedia.date}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}

export default GallerySection
