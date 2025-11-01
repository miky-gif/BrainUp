import { TrendingUp, Award, Clock, Target } from 'lucide-react'
import { motion } from 'framer-motion'

const MyProgress = () => {
  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="container-custom py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl font-display font-bold text-gray-900 mb-8">
            Ma Progression
          </h1>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="card">
              <TrendingUp className="w-8 h-8 text-primary-600 mb-3" />
              <div className="text-3xl font-bold text-gray-900 mb-1">65%</div>
              <div className="text-sm text-gray-600">Progression globale</div>
            </div>
            <div className="card">
              <Clock className="w-8 h-8 text-secondary-600 mb-3" />
              <div className="text-3xl font-bold text-gray-900 mb-1">42h</div>
              <div className="text-sm text-gray-600">Temps d'apprentissage</div>
            </div>
            <div className="card">
              <Target className="w-8 h-8 text-accent-600 mb-3" />
              <div className="text-3xl font-bold text-gray-900 mb-1">26/40</div>
              <div className="text-sm text-gray-600">Leçons complétées</div>
            </div>
          </div>

          <div className="card">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Détails par formation</h2>
            <div className="space-y-6">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-gray-900">Développement Web Full Stack</h3>
                  <span className="text-primary-600 font-bold">65%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-primary-600 h-3 rounded-full" style={{ width: '65%' }}></div>
                </div>
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-gray-900">Adobe Photoshop Professionnel</h3>
                  <span className="text-primary-600 font-bold">80%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div className="bg-primary-600 h-3 rounded-full" style={{ width: '80%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default MyProgress
