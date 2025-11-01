import { Link } from 'react-router-dom'
import { Home, ArrowLeft } from 'lucide-react'
import { motion } from 'framer-motion'

const NotFound = () => {
  return (
    <div className="pt-20 min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="text-9xl font-bold text-primary-600 mb-4">404</div>
          <h1 className="text-4xl font-display font-bold text-gray-900 mb-4">
            Page non trouvée
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/" className="btn btn-primary">
              <Home className="w-5 h-5" />
              Retour à l'accueil
            </Link>
            <button onClick={() => window.history.back()} className="btn btn-outline">
              <ArrowLeft className="w-5 h-5" />
              Page précédente
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default NotFound
