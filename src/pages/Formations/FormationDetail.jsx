import { useParams, Link, useNavigate } from 'react-router-dom'
import { Clock, Users, Award, CheckCircle, ArrowRight, Calendar } from 'lucide-react'
import { motion } from 'framer-motion'
import { getFormationById } from '../../data/formations'

const FormationDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const formation = getFormationById(id)

  if (!formation) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Formation non trouvée</h2>
          <Link to="/formations" className="btn btn-primary">
            Retour aux formations
          </Link>
        </div>
      </div>
    )
  }

  const formatPrice = (price) => {
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'XAF',
      minimumFractionDigits: 0
    }).format(price)
  }

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-16">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-2 text-sm mb-4">
              <Link to="/formations" className="hover:underline">Formations</Link>
              <span>/</span>
              <span>{formation.title}</span>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                {formation.popular && (
                  <div className="inline-block bg-accent-500 text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">
                    Formation populaire
                  </div>
                )}
                <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
                  {formation.title}
                </h1>
                <p className="text-xl text-gray-100 mb-6">
                  {formation.description}
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    <span>{formation.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    <span>{formation.level}</span>
                  </div>
                  {formation.certification && (
                    <div className="flex items-center gap-2">
                      <Award className="w-5 h-5" />
                      <span>Certification incluse</span>
                    </div>
                  )}
                </div>
              </div>

              <div className="card bg-white text-gray-900">
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold text-primary-600 mb-2">
                    {formatPrice(formation.price)}
                  </div>
                  <p className="text-gray-600">Prix de la formation</p>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between py-2 border-b border-gray-200">
                    <span className="text-gray-600">Durée</span>
                    <span className="font-semibold">{formation.duration}</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-gray-200">
                    <span className="text-gray-600">Niveau</span>
                    <span className="font-semibold">{formation.level}</span>
                  </div>
                  <div className="flex items-center justify-between py-2 border-b border-gray-200">
                    <span className="text-gray-600">Horaires</span>
                    <span className="font-semibold text-sm">{formation.schedule}</span>
                  </div>
                  <div className="flex items-center justify-between py-2">
                    <span className="text-gray-600">Certification</span>
                    <span className="font-semibold text-green-600">
                      {formation.certification ? 'Oui' : 'Non'}
                    </span>
                  </div>
                </div>

                <Link
                  to={`/inscription/${formation.id}`}
                  className="btn btn-primary w-full mb-3"
                >
                  S'inscrire maintenant
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/contact"
                  className="btn btn-outline w-full"
                >
                  Poser une question
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <div className="container-custom py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Prerequisites */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="card"
            >
              <h2 className="text-2xl font-display font-bold text-gray-900 mb-4">
                Prérequis
              </h2>
              <p className="text-gray-700">{formation.prerequisites}</p>
            </motion.div>

            {/* Objectives */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="card"
            >
              <h2 className="text-2xl font-display font-bold text-gray-900 mb-4">
                Objectifs de la formation
              </h2>
              <ul className="space-y-3">
                {formation.objectives.map((objective, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{objective}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Program */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="card"
            >
              <h2 className="text-2xl font-display font-bold text-gray-900 mb-4">
                Programme de formation
              </h2>
              <div className="space-y-3">
                {formation.program.map((module, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg hover:bg-primary-50 transition-colors">
                    <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900">{module}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Certification */}
            {formation.certification && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="card bg-gradient-to-br from-primary-50 to-secondary-50 border-2 border-primary-200"
              >
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-primary-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Attestation de fin de formation
                    </h3>
                    <p className="text-gray-700">
                      À l'issue de cette formation, vous recevrez une attestation officielle 
                      de BrainUp Technology certifiant vos nouvelles compétences. Cette attestation 
                      est reconnue et valorisera votre CV.
                    </p>
                  </div>
                </div>
              </motion.div>
            )}
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              {/* Quick Info */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="card"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-4">
                  Informations pratiques
                </h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex items-center gap-2 text-primary-600 mb-1">
                      <Calendar className="w-5 h-5" />
                      <span className="font-semibold">Prochaine session</span>
                    </div>
                    <p className="text-sm text-gray-600 ml-7">
                      Début : Janvier 2025
                    </p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 text-primary-600 mb-1">
                      <Clock className="w-5 h-5" />
                      <span className="font-semibold">Horaires</span>
                    </div>
                    <p className="text-sm text-gray-600 ml-7">
                      {formation.schedule}
                    </p>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 text-primary-600 mb-1">
                      <Users className="w-5 h-5" />
                      <span className="font-semibold">Places limitées</span>
                    </div>
                    <p className="text-sm text-gray-600 ml-7">
                      Maximum 15 étudiants par session
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="card bg-gradient-primary text-white"
              >
                <h3 className="text-xl font-bold mb-3">
                  Besoin d'aide ?
                </h3>
                <p className="text-gray-100 mb-4">
                  Notre équipe est là pour répondre à toutes vos questions.
                </p>
                <Link to="/contact" className="btn bg-white text-primary-600 hover:bg-gray-100 w-full">
                  Nous contacter
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FormationDetail
