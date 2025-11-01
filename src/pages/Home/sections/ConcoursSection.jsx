import { Link } from 'react-router-dom'
import { Trophy, Calendar, Users, ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { activeConcoursData } from '../../../data/concours'

const ConcoursSection = () => {
  if (activeConcoursData.length === 0) return null

  const activeConcours = activeConcoursData[0]

  return (
    <section className="py-20 bg-gradient-to-br from-accent-50 to-primary-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-accent-500 text-white px-4 py-2 rounded-full mb-4">
            <Trophy className="w-4 h-4" />
            <span className="text-sm font-semibold">Concours en cours</span>
          </div>
          <h2 className="section-title">
            {activeConcours.title}
          </h2>
          <p className="section-subtitle">
            {activeConcours.description}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Prizes */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-display font-bold text-gray-900 mb-6">
              🎁 Lots à gagner
            </h3>
            <div className="space-y-4">
              {activeConcours.prizes.slice(0, 3).map((prize, index) => (
                <div
                  key={index}
                  className="card hover:shadow-xl transition-all duration-300 flex items-center gap-4"
                >
                  <div className={`w-16 h-16 rounded-xl flex items-center justify-center text-2xl font-bold ${
                    index === 0 ? 'bg-yellow-100 text-yellow-600' :
                    index === 1 ? 'bg-gray-100 text-gray-600' :
                    'bg-orange-100 text-orange-600'
                  }`}>
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-gray-900">{prize.item}</div>
                    <div className="text-sm text-gray-600">{prize.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right - Info & CTA */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="card bg-white">
              <div className="grid grid-cols-2 gap-6 mb-6">
                <div className="text-center p-4 bg-primary-50 rounded-lg">
                  <Calendar className="w-8 h-8 text-primary-600 mx-auto mb-2" />
                  <div className="text-sm text-gray-600 mb-1">Date limite</div>
                  <div className="font-bold text-gray-900">
                    {new Date(activeConcours.endDate).toLocaleDateString('fr-FR', {
                      day: 'numeric',
                      month: 'long'
                    })}
                  </div>
                </div>
                <div className="text-center p-4 bg-secondary-50 rounded-lg">
                  <Users className="w-8 h-8 text-secondary-600 mx-auto mb-2" />
                  <div className="text-sm text-gray-600 mb-1">Participants</div>
                  <div className="font-bold text-gray-900">
                    {activeConcours.participants}/{activeConcours.maxParticipants}
                  </div>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-bold text-gray-900 mb-3">Comment participer ?</h4>
                <ul className="space-y-2">
                  {activeConcours.howToParticipate.slice(0, 3).map((step, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="flex-shrink-0 w-6 h-6 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center text-xs font-bold">
                        {index + 1}
                      </span>
                      {step}
                    </li>
                  ))}
                </ul>
              </div>

              <Link to="/concours" className="btn btn-accent w-full">
                Participer maintenant
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ConcoursSection
