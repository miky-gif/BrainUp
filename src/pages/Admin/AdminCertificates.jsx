import { Award, Download, Send } from 'lucide-react'
import { motion } from 'framer-motion'
import { toast } from 'react-toastify'

const AdminCertificates = () => {
  const certificates = [
    { id: 1, student: 'Alice Mbarga', formation: 'Développement Web', completed: true, generated: false },
    { id: 2, student: 'Boris Ndjock', formation: 'Photoshop Pro', completed: true, generated: true },
    { id: 3, student: 'Clarisse Fouda', formation: 'Python', completed: false, generated: false }
  ]

  const handleGenerate = (id) => {
    toast.success('Attestation générée avec succès')
  }

  const handleSend = (id) => {
    toast.success('Attestation envoyée par email')
  }

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="container-custom py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl font-display font-bold text-gray-900 mb-8">
            Gestion des Attestations
          </h1>

          <div className="card overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Étudiant</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Formation</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Statut</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Actions</th>
                </tr>
              </thead>
              <tbody>
                {certificates.map((cert) => (
                  <tr key={cert.id} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 px-4">{cert.student}</td>
                    <td className="py-3 px-4">{cert.formation}</td>
                    <td className="py-3 px-4">
                      {cert.completed ? (
                        cert.generated ? (
                          <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">
                            Générée
                          </span>
                        ) : (
                          <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-xs font-semibold">
                            À générer
                          </span>
                        )
                      ) : (
                        <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-semibold">
                          Formation en cours
                        </span>
                      )}
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex gap-2">
                        {cert.completed && !cert.generated && (
                          <button
                            onClick={() => handleGenerate(cert.id)}
                            className="btn btn-primary btn-sm"
                          >
                            <Award className="w-4 h-4" />
                            Générer
                          </button>
                        )}
                        {cert.generated && (
                          <>
                            <button className="btn btn-outline btn-sm">
                              <Download className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => handleSend(cert.id)}
                              className="btn btn-secondary btn-sm"
                            >
                              <Send className="w-4 h-4" />
                            </button>
                          </>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default AdminCertificates
