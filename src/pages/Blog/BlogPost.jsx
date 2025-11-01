import { useParams, Link } from 'react-router-dom'
import { Calendar, Clock, ArrowLeft } from 'lucide-react'
import { motion } from 'framer-motion'
import { getBlogPostBySlug } from '../../data/blog'

const BlogPost = () => {
  const { id } = useParams()
  const post = getBlogPostBySlug(id)

  if (!post) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Article non trouvé</h2>
          <Link to="/blog" className="btn btn-primary">
            Retour au blog
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-20 min-h-screen bg-gray-50">
      <div className="container-custom py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <Link to="/blog" className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 mb-6">
            <ArrowLeft className="w-5 h-5" />
            Retour au blog
          </Link>

          <article className="card">
            <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                {new Date(post.date).toLocaleDateString('fr-FR')}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
              <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-semibold">
                {post.category}
              </span>
            </div>

            <h1 className="text-4xl font-display font-bold text-gray-900 mb-6">
              {post.title}
            </h1>

            <div className="prose max-w-none">
              <p className="text-xl text-gray-700 mb-8">{post.excerpt}</p>
              <div dangerouslySetInnerHTML={{ __html: post.content }} />
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
        </motion.div>
      </div>
    </div>
  )
}

export default BlogPost
