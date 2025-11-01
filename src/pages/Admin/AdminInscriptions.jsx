import { useState } from 'react'
import { CheckCircle, XCircle, Eye } from 'lucide-react'
import { motion } from 'framer-motion'
import { toast } from 'react-toastify'

const AdminInscriptions = () => {
  const [inscriptions, setInscriptions] = useState([
    { id: 1, name: 'Jean Dupont', email: 'jean@email.com', formation: 'Développement Web', date: '2024-10-30', status: 'pending' },
    { id: 2, name: 'Marie Martin', email: 'marie@email.com', formation: 'Photoshop Pro', date: '2024-10-29', status: 'pending' },
    { id: 3, name: 'Paul Bernard', email: 'paul@email.com', formation: 'Python', date: '2024-10-28', status: 'approved' }
  ])

  const handleApprove = (id) => {
    setInscriptions(inscriptions.map(ins => 
      ins.id === id ? { ...ins, status: 'approved' } : ins
    ))
    toast.success('Inscription approuvée')
  }

  const handleReject = (id) => {
    setInscriptions(inscriptions.map(ins => 
      ins.id === id ? { ...ins, status: 'rejected' } : ins
    ))
    toast.error('Inscription rejetée')
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
            Gestion des Inscriptions
          </h1>

          <div className="card overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Nom</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Email</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Formation</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Date</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Statut</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-700">Actions</th>
                </tr>
              </thead>
              <tbody>
                {inscriptions.map((inscription) => (
                  <tr key={inscription.id} className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="py-3 px-4">{inscription.name}</td>
                    <td className="py-3 px-4">{inscription.email}</td>
                    <td className="py-3 px-4">{inscription.formation}</td>
                    <td className="py-3 px-4">{new Date(inscription.date).toLocaleDateString('fr-FR')}</td>
                    <td className="py-3 px-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        inscription.status === 'approved' ? 'bg-green-100 text-green-700' :
                        inscription.status === 'rejected' ? 'bg-red-100 text-red-700' :
                        'bg-yellow-100 text-yellow-700'
                      }`}>
                        {inscription.status === 'approved' ? 'Approuvée' :
                         inscription.status === 'rejected' ? 'Rejetée' : 'En attente'}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex gap-2">
                        {inscription.status === 'pending' && (
                          <>
                            <button
                              onClick={() => handleApprove(inscription.id)}
                              className="p-2 bg-green-100 text-green-600 rounded-lg hover:bg-green-200 transition-colors"
                              title="Approuver"
                            >
                              <CheckCircle className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => handleReject(inscription.id)}
                              className="p-2 bg-red-100 text-red-600 rounded-lg hover:bg-red-200 transition-colors"
                              title="Rejeter"
                            >
                              <XCircle className="w-4 h-4" />
                            </button>
                          </>
                        )}
                        <button
                          className="p-2 bg-blue-100 text-blue-600 rounded-lg hover:bg-blue-200 transition-colors"
                          title="Voir détails"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
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

export default AdminInscriptions
