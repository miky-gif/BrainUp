import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Trophy, Calendar, Users, Gift } from 'lucide-react'
import { motion } from 'framer-motion'
import { toast } from 'react-toastify'
import { activeConcoursData, previousWinners } from '../../data/concours'

const Concours = () => {
  const [showForm, setShowForm] = useState(false)
  const { register, handleSubmit, reset, formState: { errors } } = useForm()

  const onSubmit = (data) => {
    console.log('Participation:', data)
    toast.success('Votre participation a été enregistrée!')
    reset()
    setShowForm(false)
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
            <Trophy className="w-16 h-16 mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Concours BrainUp
            </h1>
            <p className="text-xl text-gray-100 max-w-3xl mx-auto">
              Participez à nos concours et gagnez des équipements informatiques de dernière génération
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container-custom py-12">
        {activeConcoursData.length > 0 ? (
          activeConcoursData.map((concours) => (
            <div key={concours.id} className="mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="card mb-8"
              >
                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
                      {concours.title}
                    </h2>
                    <p className="text-gray-700 mb-6">{concours.description}</p>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-primary-50 p-4 rounded-lg">
                        <Calendar className="w-6 h-6 text-primary-600 mb-2" />
                        <div className="text-sm text-gray-600">Date limite</div>
                        <div className="font-bold text-gray-900">
                          {new Date(concours.endDate).toLocaleDateString('fr-FR')}
                        </div>
                      </div>
                      <div className="bg-secondary-50 p-4 rounded-lg">
                        <Users className="w-6 h-6 text-secondary-600 mb-2" />
                        <div className="text-sm text-gray-600">Participants</div>
                        <div className="font-bold text-gray-900">
                          {concours.participants}/{concours.maxParticipants}
                        </div>
                      </div>
                    </div>

                    <button
                      onClick={() => setShowForm(true)}
                      className="btn btn-accent w-full"
                    >
                      Participer maintenant
                    </button>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      <Gift className="w-6 h-6 inline mr-2" />
                      Lots à gagner
                    </h3>
                    <div className="space-y-3">
                      {concours.prizes.map((prize, index) => (
                        <div key={index} className="bg-gray-50 p-4 rounded-lg">
                          <div className="flex items-center justify-between">
                            <div>
                              <div className="font-bold text-gray-900">{prize.position}</div>
                              <div className="text-sm text-gray-700">{prize.item}</div>
                            </div>
                            <div className="text-primary-600 font-bold">{prize.value}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {showForm && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="card"
                >
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">
                    Formulaire de participation
                  </h3>
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Nom complet *
                        </label>
                        <input
                          type="text"
                          {...register('name', { required: 'Le nom est requis' })}
                          className="input-field"
                          placeholder="Votre nom"
                        />
                        {errors.name && (
                          <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                        )}
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          {...register('email', { required: 'L\'email est requis' })}
                          className="input-field"
                          placeholder="votre@email.com"
                        />
                        {errors.email && (
                          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                        )}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Téléphone *
                      </label>
                      <input
                        type="tel"
                        {...register('phone', { required: 'Le téléphone est requis' })}
                        className="input-field"
                        placeholder="+237 6XX XX XX XX"
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                      )}
                    </div>

                    <div className="flex gap-4">
                      <button
                        type="button"
                        onClick={() => setShowForm(false)}
                        className="btn btn-outline flex-1"
                      >
                        Annuler
                      </button>
                      <button type="submit" className="btn btn-primary flex-1">
                        Valider ma participation
                      </button>
                    </div>
                  </form>
                </motion.div>
              )}
            </div>
          ))
        ) : (
          <div className="card text-center py-12">
            <Trophy className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600">Aucun concours actif pour le moment</p>
          </div>
        )}

        {/* Previous Winners */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12"
        >
          <h2 className="text-3xl font-display font-bold text-gray-900 mb-8 text-center">
            Gagnants précédents
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {previousWinners.map((winner) => (
              <div key={winner.id} className="card text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-primary-400 to-secondary-400 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                  {winner.name.charAt(0)}
                </div>
                <h3 className="font-bold text-gray-900 mb-1">{winner.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{winner.prize}</p>
                <p className="text-xs text-gray-500">{winner.concours}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Concours
