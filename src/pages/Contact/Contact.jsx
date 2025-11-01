import { useForm } from 'react-hook-form'
import { MapPin, Phone, Mail, Send } from 'lucide-react'
import { motion } from 'framer-motion'
import { toast } from 'react-toastify'

const Contact = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm()

  const onSubmit = (data) => {
    console.log('Contact form:', data)
    toast.success('Message envoyé avec succès!')
    reset()
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
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Contactez-nous
            </h1>
            <p className="text-xl text-gray-100">
              Notre équipe est là pour répondre à toutes vos questions
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container-custom py-12">
        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Envoyez-nous un message</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="card space-y-4">
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

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Sujet *
                </label>
                <input
                  type="text"
                  {...register('subject', { required: 'Le sujet est requis' })}
                  className="input-field"
                  placeholder="Sujet de votre message"
                />
                {errors.subject && (
                  <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  {...register('message', { required: 'Le message est requis' })}
                  rows="6"
                  className="input-field"
                  placeholder="Votre message..."
                ></textarea>
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                )}
              </div>

              <button type="submit" className="btn btn-primary w-full">
                <Send className="w-5 h-5" />
                Envoyer le message
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Informations de contact</h2>
            
            <div className="card">
              <MapPin className="w-8 h-8 text-primary-600 mb-3" />
              <h3 className="font-bold text-gray-900 mb-2">Adresse</h3>
              <p className="text-gray-700">
                Bafia, Région du Centre<br />
                Cameroun
              </p>
            </div>

            <div className="card">
              <Phone className="w-8 h-8 text-secondary-600 mb-3" />
              <h3 className="font-bold text-gray-900 mb-2">Téléphone</h3>
              <p className="text-gray-700">
                +237 690 00 00 00<br />
                +237 670 00 00 00
              </p>
            </div>

            <div className="card">
              <Mail className="w-8 h-8 text-accent-600 mb-3" />
              <h3 className="font-bold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-700">
                contact@brainup-tech.cm<br />
                info@brainup-tech.cm
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Contact
