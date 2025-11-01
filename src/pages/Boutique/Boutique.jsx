import { ShoppingCart, Package } from 'lucide-react'
import { motion } from 'framer-motion'

const Boutique = () => {
  const products = [
    { id: 1, name: 'PC Portable HP', price: 450000, category: 'Ordinateurs' },
    { id: 2, name: 'Souris sans fil', price: 15000, category: 'Accessoires' },
    { id: 3, name: 'Clavier mécanique', price: 35000, category: 'Accessoires' },
    { id: 4, name: 'Écran 24"', price: 120000, category: 'Moniteurs' }
  ]

  const formatPrice = (price) => {
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'XAF',
      minimumFractionDigits: 0
    }).format(price)
  }

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <section className="bg-gradient-hero text-white py-16">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <ShoppingCart className="w-16 h-16 mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Boutique
            </h1>
            <p className="text-xl text-gray-100">
              Équipements informatiques de qualité à prix compétitifs
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container-custom py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card"
            >
              <div className="w-full h-48 bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                <Package className="w-16 h-16 text-gray-400" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{product.name}</h3>
              <p className="text-sm text-gray-600 mb-4">{product.category}</p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-primary-600">
                  {formatPrice(product.price)}
                </span>
                <button className="btn btn-primary btn-sm">
                  <ShoppingCart className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Boutique
