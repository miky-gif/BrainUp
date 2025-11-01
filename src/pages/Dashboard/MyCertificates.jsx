import { Download, Award } from 'lucide-react'
import { motion } from 'framer-motion'

const MyCertificates = () => {
  const certificates = [
    {
      id: 1,
      title: 'Adobe Photoshop Professionnel',
      date: '2024-09-15',
      available: true
    }
  ]

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="container-custom py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl font-display font-bold text-gray-900 mb-8">
            Mes Attestations
          </h1>

          {certificates.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-6">
              {certificates.map((cert) => (
                <div key={cert.id} className="card">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 bg-accent-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Award className="w-8 h-8 text-accent-600" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900 mb-2">{cert.title}</h3>
                      <p className="text-sm text-gray-600 mb-4">
                        Délivrée le {new Date(cert.date).toLocaleDateString('fr-FR')}
                      </p>
                      {cert.available && (
                        <button className="btn btn-primary btn-sm">
                          <Download className="w-4 h-4" />
                          Télécharger
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="card text-center py-12">
              <Award className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600">Aucune attestation disponible pour le moment</p>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  )
}

export default MyCertificates
