import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { CheckCircle, User, Mail, Phone, Calendar, CreditCard } from 'lucide-react'
import { motion } from 'framer-motion'
import { toast } from 'react-toastify'
import { formations, formationCategories } from '../../data/formations'

const Inscription = () => {
  const { formationId } = useParams()
  const navigate = useNavigate()
  const [step, setStep] = useState(1)
  const [inscriptionNumber, setInscriptionNumber] = useState(null)
  
  const { register, handleSubmit, watch, formState: { errors } } = useForm({
    defaultValues: {
      formationId: formationId || '',
    }
  })

  const selectedFormationId = watch('formationId')
  const selectedFormation = formations.find(f => f.id === selectedFormationId)

  const onSubmit = (data) => {
    // Simulate API call
    const generatedNumber = 'BU' + Date.now().toString().slice(-8)
    setInscriptionNumber(generatedNumber)
    setStep(3)
    
    toast.success('Inscription enregistrée avec succès!')
    
    // In real app, send email confirmation here
    console.log('Inscription data:', { ...data, inscriptionNumber: generatedNumber })
  }

  const formatPrice = (price) => {
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'XAF',
      minimumFractionDigits: 0
    }).format(price)
  }

  if (step === 3 && inscriptionNumber) {
    return (
      <div className="pt-20 min-h-screen bg-gray-50 flex items-center justify-center py-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="container-custom max-w-2xl"
        >
          <div className="card text-center">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-12 h-12 text-green-600" />
            </div>
            
            <h1 className="text-3xl font-display font-bold text-gray-900 mb-4">
              Inscription réussie !
            </h1>
            
            <p className="text-gray-600 mb-6">
              Votre inscription a été enregistrée avec succès. Vous recevrez un email de confirmation 
              avec tous les détails dans quelques instants.
            </p>

            <div className="bg-primary-50 border-2 border-primary-200 rounded-lg p-6 mb-6">
              <p className="text-sm text-gray-600 mb-2">Votre numéro d'inscription</p>
              <p className="text-3xl font-bold text-primary-600 mb-2">{inscriptionNumber}</p>
              <p className="text-sm text-gray-600">
                Conservez ce numéro précieusement, il vous sera demandé lors de votre première session.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 mb-6 text-left">
              <h3 className="font-bold text-gray-900 mb-3">Prochaines étapes :</h3>
              <ol className="space-y-2 text-sm text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="font-bold text-primary-600">1.</span>
                  <span>Vous recevrez un email de confirmation avec les détails de paiement</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-primary-600">2.</span>
                  <span>Effectuez le paiement selon les modalités indiquées</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="font-bold text-primary-600">3.</span>
                  <span>Présentez-vous le jour du début de la formation avec votre numéro d'inscription</span>
                </li>
              </ol>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => navigate('/dashboard')}
                className="btn btn-primary flex-1"
              >
                Accéder à mon espace
              </button>
              <button
                onClick={() => navigate('/')}
                className="btn btn-outline flex-1"
              >
                Retour à l'accueil
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-hero text-white py-12">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Inscription aux Formations
            </h1>
            <p className="text-xl text-gray-100">
              Remplissez le formulaire pour commencer votre parcours avec BrainUp Technology
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container-custom py-12">
        <div className="max-w-4xl mx-auto">
          {/* Progress Steps */}
          <div className="mb-8">
            <div className="flex items-center justify-center gap-4">
              <div className={`flex items-center gap-2 ${step >= 1 ? 'text-primary-600' : 'text-gray-400'}`}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                  step >= 1 ? 'bg-primary-600 text-white' : 'bg-gray-200'
                }`}>
                  1
                </div>
                <span className="hidden sm:inline font-semibold">Informations</span>
              </div>
              <div className={`w-16 h-1 ${step >= 2 ? 'bg-primary-600' : 'bg-gray-200'}`}></div>
              <div className={`flex items-center gap-2 ${step >= 2 ? 'text-primary-600' : 'text-gray-400'}`}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                  step >= 2 ? 'bg-primary-600 text-white' : 'bg-gray-200'
                }`}>
                  2
                </div>
                <span className="hidden sm:inline font-semibold">Confirmation</span>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Form */}
              <div className="lg:col-span-2">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="card"
                >
                  {step === 1 && (
                    <div className="space-y-6">
                      <h2 className="text-2xl font-display font-bold text-gray-900 mb-6">
                        Informations personnelles
                      </h2>

                      {/* Formation Selection */}
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Formation souhaitée *
                        </label>
                        <select
                          {...register('formationId', { required: 'Veuillez sélectionner une formation' })}
                          className="input-field"
                        >
                          <option value="">Choisir une formation</option>
                          {formationCategories.map(category => (
                            <optgroup key={category.id} label={category.name}>
                              {formations
                                .filter(f => f.category === category.id)
                                .map(formation => (
                                  <option key={formation.id} value={formation.id}>
                                    {formation.title} - {formatPrice(formation.price)}
                                  </option>
                                ))}
                            </optgroup>
                          ))}
                        </select>
                        {errors.formationId && (
                          <p className="text-red-500 text-sm mt-1">{errors.formationId.message}</p>
                        )}
                      </div>

                      {/* Personal Info */}
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Nom *
                          </label>
                          <input
                            type="text"
                            {...register('lastName', { required: 'Le nom est requis' })}
                            className="input-field"
                            placeholder="Votre nom"
                          />
                          {errors.lastName && (
                            <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>
                          )}
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Prénom *
                          </label>
                          <input
                            type="text"
                            {...register('firstName', { required: 'Le prénom est requis' })}
                            className="input-field"
                            placeholder="Votre prénom"
                          />
                          {errors.firstName && (
                            <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>
                          )}
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Email *
                          </label>
                          <input
                            type="email"
                            {...register('email', { 
                              required: 'L\'email est requis',
                              pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: 'Email invalide'
                              }
                            })}
                            className="input-field"
                            placeholder="votre@email.com"
                          />
                          {errors.email && (
                            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                          )}
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
                      </div>

                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Âge *
                          </label>
                          <input
                            type="number"
                            {...register('age', { 
                              required: 'L\'âge est requis',
                              min: { value: 12, message: 'Âge minimum : 12 ans' }
                            })}
                            className="input-field"
                            placeholder="Votre âge"
                          />
                          {errors.age && (
                            <p className="text-red-500 text-sm mt-1">{errors.age.message}</p>
                          )}
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">
                            Niveau d'études
                          </label>
                          <select {...register('educationLevel')} className="input-field">
                            <option value="">Sélectionner</option>
                            <option value="college">Collège</option>
                            <option value="lycee">Lycée</option>
                            <option value="bac">BAC</option>
                            <option value="licence">Licence</option>
                            <option value="master">Master</option>
                            <option value="autre">Autre</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Niveau de compétence
                        </label>
                        <select {...register('skillLevel')} className="input-field">
                          <option value="debutant">Débutant</option>
                          <option value="intermediaire">Intermédiaire</option>
                          <option value="avance">Avancé</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Période souhaitée
                        </label>
                        <select {...register('preferredPeriod')} className="input-field">
                          <option value="janvier-2025">Janvier 2025</option>
                          <option value="fevrier-2025">Février 2025</option>
                          <option value="mars-2025">Mars 2025</option>
                          <option value="avril-2025">Avril 2025</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Mode de paiement préféré
                        </label>
                        <select {...register('paymentMethod')} className="input-field">
                          <option value="cash">Espèces</option>
                          <option value="mobile">Mobile Money (MTN/Orange)</option>
                          <option value="bank">Virement bancaire</option>
                          <option value="installments">Paiement en plusieurs fois</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                          Message ou questions (optionnel)
                        </label>
                        <textarea
                          {...register('message')}
                          rows="4"
                          className="input-field"
                          placeholder="Avez-vous des questions ou des besoins particuliers ?"
                        ></textarea>
                      </div>

                      <div className="flex items-start gap-2">
                        <input
                          type="checkbox"
                          {...register('acceptTerms', { required: 'Vous devez accepter les conditions' })}
                          className="mt-1"
                        />
                        <label className="text-sm text-gray-700">
                          J'accepte les conditions générales et la politique de confidentialité de BrainUp Technology *
                        </label>
                      </div>
                      {errors.acceptTerms && (
                        <p className="text-red-500 text-sm">{errors.acceptTerms.message}</p>
                      )}

                      <button
                        type="button"
                        onClick={() => {
                          if (selectedFormationId) {
                            setStep(2)
                          } else {
                            toast.error('Veuillez sélectionner une formation')
                          }
                        }}
                        className="btn btn-primary w-full"
                      >
                        Continuer
                      </button>
                    </div>
                  )}

                  {step === 2 && (
                    <div className="space-y-6">
                      <h2 className="text-2xl font-display font-bold text-gray-900 mb-6">
                        Confirmation de l'inscription
                      </h2>

                      <div className="bg-gray-50 rounded-lg p-6">
                        <h3 className="font-bold text-gray-900 mb-4">Récapitulatif</h3>
                        <div className="space-y-3 text-sm">
                          <div className="flex justify-between">
                            <span className="text-gray-600">Nom complet :</span>
                            <span className="font-semibold">{watch('firstName')} {watch('lastName')}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Email :</span>
                            <span className="font-semibold">{watch('email')}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-gray-600">Téléphone :</span>
                            <span className="font-semibold">{watch('phone')}</span>
                          </div>
                          {selectedFormation && (
                            <>
                              <div className="pt-3 border-t border-gray-200">
                                <span className="text-gray-600">Formation :</span>
                                <p className="font-semibold mt-1">{selectedFormation.title}</p>
                              </div>
                              <div className="flex justify-between">
                                <span className="text-gray-600">Prix :</span>
                                <span className="font-bold text-primary-600 text-lg">
                                  {formatPrice(selectedFormation.price)}
                                </span>
                              </div>
                            </>
                          )}
                        </div>
                      </div>

                      <div className="flex gap-4">
                        <button
                          type="button"
                          onClick={() => setStep(1)}
                          className="btn btn-outline flex-1"
                        >
                          Retour
                        </button>
                        <button
                          type="submit"
                          className="btn btn-primary flex-1"
                        >
                          Confirmer l'inscription
                        </button>
                      </div>
                    </div>
                  )}
                </motion.div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="card sticky top-24"
                >
                  {selectedFormation ? (
                    <>
                      <h3 className="text-lg font-bold text-gray-900 mb-4">
                        Formation sélectionnée
                      </h3>
                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-2">
                          {selectedFormation.title}
                        </h4>
                        <p className="text-sm text-gray-600 mb-3">
                          {selectedFormation.shortDescription}
                        </p>
                        <div className="space-y-2 text-sm">
                          <div className="flex items-center gap-2 text-gray-700">
                            <Calendar className="w-4 h-4" />
                            <span>{selectedFormation.duration}</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-700">
                            <User className="w-4 h-4" />
                            <span>{selectedFormation.level}</span>
                          </div>
                        </div>
                      </div>
                      <div className="pt-4 border-t border-gray-200">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-gray-600">Prix total</span>
                          <span className="text-2xl font-bold text-primary-600">
                            {formatPrice(selectedFormation.price)}
                          </span>
                        </div>
                        <p className="text-xs text-gray-500">
                          Paiement en plusieurs fois disponible
                        </p>
                      </div>
                    </>
                  ) : (
                    <div className="text-center text-gray-500">
                      <p className="mb-2">Sélectionnez une formation pour voir les détails</p>
                    </div>
                  )}
                </motion.div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Inscription
