import { Link } from 'react-router-dom'
import { Users, BookOpen, FileText, Award, TrendingUp } from 'lucide-react'
import { motion } from 'framer-motion'

const AdminDashboard = () => {
  const stats = [
    { icon: Users, label: 'Étudiants inscrits', value: '247', color: 'primary', link: '/admin/students' },
    { icon: FileText, label: 'Inscriptions en attente', value: '12', color: 'accent', link: '/admin/inscriptions' },
    { icon: BookOpen, label: 'Cours actifs', value: '18', color: 'secondary', link: '/admin/courses' },
    { icon: Award, label: 'Attestations délivrées', value: '156', color: 'primary', link: '/admin/certificates' }
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
            Tableau de bord Administrateur
          </h1>
          <p className="text-gray-600 mb-8">
            Gérez votre centre de formation
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Link to={stat.link} className="card hover:shadow-xl transition-all">
                  <div className={`w-12 h-12 bg-${stat.color}-100 rounded-lg flex items-center justify-center mb-4`}>
                    <stat.icon className={`w-6 h-6 text-${stat.color}-600`} />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="card">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Accès rapide</h2>
              <div className="space-y-3">
                <Link to="/admin/inscriptions" className="block p-4 bg-gray-50 rounded-lg hover:bg-primary-50 transition-colors">
                  <h3 className="font-semibold text-gray-900">Gérer les inscriptions</h3>
                  <p className="text-sm text-gray-600">Valider et traiter les nouvelles inscriptions</p>
                </Link>
                <Link to="/admin/courses" className="block p-4 bg-gray-50 rounded-lg hover:bg-primary-50 transition-colors">
                  <h3 className="font-semibold text-gray-900">Gérer les cours</h3>
                  <p className="text-sm text-gray-600">Ajouter et modifier le contenu des formations</p>
                </Link>
                <Link to="/admin/certificates" className="block p-4 bg-gray-50 rounded-lg hover:bg-primary-50 transition-colors">
                  <h3 className="font-semibold text-gray-900">Générer les attestations</h3>
                  <p className="text-sm text-gray-600">Créer et délivrer les certificats</p>
                </Link>
              </div>
            </div>

            <div className="card">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                <TrendingUp className="w-6 h-6 inline mr-2" />
                Statistiques récentes
              </h2>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600">Taux de complétion</span>
                    <span className="font-semibold text-gray-900">78%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '78%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-gray-600">Satisfaction étudiants</span>
                    <span className="font-semibold text-gray-900">95%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: '95%' }}></div>
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

export default AdminDashboard
