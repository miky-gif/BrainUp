import { Link } from 'react-router-dom'
import { BookOpen, TrendingUp, Award, Calendar } from 'lucide-react'
import { motion } from 'framer-motion'
import { useAuth } from '../../contexts/AuthContext'

const Dashboard = () => {
  const { user } = useAuth()

  const stats = [
    { icon: BookOpen, label: 'Cours en cours', value: '3', color: 'primary' },
    { icon: TrendingUp, label: 'Progression', value: '65%', color: 'secondary' },
    { icon: Award, label: 'Attestations', value: '1', color: 'accent' },
    { icon: Calendar, label: 'Jours restants', value: '45', color: 'primary' }
  ]

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="container-custom py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl font-display font-bold text-gray-900 mb-2">
            Bienvenue, {user?.firstName} !
          </h1>
          <p className="text-gray-600 mb-8">
            Voici un aperçu de votre parcours d'apprentissage
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card"
              >
                <div className={`w-12 h-12 bg-${stat.color}-100 rounded-lg flex items-center justify-center mb-4`}>
                  <stat.icon className={`w-6 h-6 text-${stat.color}-600`} />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="card">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Accès rapide</h2>
              <div className="space-y-3">
                <Link to="/dashboard/courses" className="block p-4 bg-gray-50 rounded-lg hover:bg-primary-50 transition-colors">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-gray-900">Mes cours</h3>
                      <p className="text-sm text-gray-600">Accéder à vos formations</p>
                    </div>
                    <BookOpen className="w-6 h-6 text-primary-600" />
                  </div>
                </Link>
                <Link to="/dashboard/progress" className="block p-4 bg-gray-50 rounded-lg hover:bg-primary-50 transition-colors">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-gray-900">Ma progression</h3>
                      <p className="text-sm text-gray-600">Suivre vos progrès</p>
                    </div>
                    <TrendingUp className="w-6 h-6 text-secondary-600" />
                  </div>
                </Link>
                <Link to="/dashboard/certificates" className="block p-4 bg-gray-50 rounded-lg hover:bg-primary-50 transition-colors">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-gray-900">Mes attestations</h3>
                      <p className="text-sm text-gray-600">Télécharger vos certificats</p>
                    </div>
                    <Award className="w-6 h-6 text-accent-600" />
                  </div>
                </Link>
              </div>
            </div>

            <div className="card">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Activité récente</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">Cours complété</p>
                    <p className="text-xs text-gray-600">Introduction à React - Il y a 2 jours</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">Nouveau cours disponible</p>
                    <p className="text-xs text-gray-600">Hooks avancés - Il y a 3 jours</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Dashboard
