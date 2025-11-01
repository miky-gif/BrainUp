import { Link } from 'react-router-dom'
import { BookOpen, Play, CheckCircle } from 'lucide-react'
import { motion } from 'framer-motion'

const MyCourses = () => {
  const courses = [
    {
      id: 1,
      title: 'Développement Web Full Stack',
      progress: 65,
      totalLessons: 40,
      completedLessons: 26,
      lastAccessed: '2024-10-30'
    },
    {
      id: 2,
      title: 'Adobe Photoshop Professionnel',
      progress: 80,
      totalLessons: 25,
      completedLessons: 20,
      lastAccessed: '2024-10-29'
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
            Mes Cours
          </h1>

          <div className="grid md:grid-cols-2 gap-6">
            {courses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center">
                      <BookOpen className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">{course.title}</h3>
                      <p className="text-sm text-gray-600">
                        {course.completedLessons}/{course.totalLessons} leçons
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span className="text-gray-600">Progression</span>
                    <span className="font-semibold text-primary-600">{course.progress}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-primary-600 h-2 rounded-full transition-all"
                      style={{ width: `${course.progress}%` }}
                    ></div>
                  </div>
                </div>

                <Link
                  to={`/dashboard/courses/${course.id}`}
                  className="btn btn-primary w-full"
                >
                  <Play className="w-5 h-5" />
                  Continuer le cours
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default MyCourses
