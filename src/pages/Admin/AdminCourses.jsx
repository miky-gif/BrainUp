import { Plus, Edit, Trash2 } from 'lucide-react'
import { motion } from 'framer-motion'

const AdminCourses = () => {
  const courses = [
    { id: 1, title: 'Introduction à React', lessons: 12, students: 45 },
    { id: 2, title: 'JavaScript Avancé', lessons: 18, students: 38 },
    { id: 3, title: 'Photoshop Basics', lessons: 15, students: 52 }
  ]

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="container-custom py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-display font-bold text-gray-900">
              Gestion des Cours
            </h1>
            <button className="btn btn-primary">
              <Plus className="w-5 h-5" />
              Nouveau cours
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <div key={course.id} className="card">
                <h3 className="font-bold text-gray-900 mb-4">{course.title}</h3>
                <div className="space-y-2 text-sm text-gray-600 mb-4">
                  <p>{course.lessons} leçons</p>
                  <p>{course.students} étudiants inscrits</p>
                </div>
                <div className="flex gap-2">
                  <button className="btn btn-outline btn-sm flex-1">
                    <Edit className="w-4 h-4" />
                    Modifier
                  </button>
                  <button className="btn btn-sm bg-red-100 text-red-600 hover:bg-red-200">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default AdminCourses
