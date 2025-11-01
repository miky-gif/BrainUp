import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Play, Download, CheckCircle, Lock } from 'lucide-react'
import { motion } from 'framer-motion'

const CourseViewer = () => {
  const { courseId } = useParams()
  const [selectedLesson, setSelectedLesson] = useState(1)

  const lessons = [
    { id: 1, title: 'Introduction au cours', duration: '10 min', completed: true, locked: false },
    { id: 2, title: 'Les bases', duration: '25 min', completed: true, locked: false },
    { id: 3, title: 'Concepts avancés', duration: '35 min', completed: false, locked: false },
    { id: 4, title: 'Projet pratique', duration: '45 min', completed: false, locked: true }
  ]

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="container-custom py-12">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="card sticky top-24">
              <h3 className="font-bold text-gray-900 mb-4">Contenu du cours</h3>
              <div className="space-y-2">
                {lessons.map((lesson) => (
                  <button
                    key={lesson.id}
                    onClick={() => !lesson.locked && setSelectedLesson(lesson.id)}
                    disabled={lesson.locked}
                    className={`w-full text-left p-3 rounded-lg transition-colors ${
                      selectedLesson === lesson.id
                        ? 'bg-primary-50 border-2 border-primary-500'
                        : lesson.locked
                        ? 'bg-gray-100 cursor-not-allowed'
                        : 'bg-gray-50 hover:bg-gray-100'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-semibold text-gray-900">{lesson.title}</span>
                      {lesson.completed ? (
                        <CheckCircle className="w-4 h-4 text-green-500" />
                      ) : lesson.locked ? (
                        <Lock className="w-4 h-4 text-gray-400" />
                      ) : null}
                    </div>
                    <span className="text-xs text-gray-600">{lesson.duration}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="card"
            >
              <div className="aspect-video bg-gray-900 rounded-lg mb-6 flex items-center justify-center">
                <Play className="w-16 h-16 text-white" />
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {lessons.find(l => l.id === selectedLesson)?.title}
              </h2>

              <div className="prose max-w-none mb-6">
                <p className="text-gray-700">
                  Contenu de la leçon ici. Dans une vraie application, cela contiendrait le contenu vidéo, 
                  les documents PDF téléchargeables, et les exercices pratiques.
                </p>
              </div>

              <div className="flex gap-4">
                <button className="btn btn-primary">
                  <Download className="w-5 h-5" />
                  Télécharger les ressources
                </button>
                <button className="btn btn-secondary">
                  Marquer comme terminé
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CourseViewer
