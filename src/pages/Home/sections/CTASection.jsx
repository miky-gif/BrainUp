import { Link } from 'react-router-dom'
import { ArrowRight, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-hero text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-yellow-300" />
            <span className="text-sm font-medium">Prêt à digitaliser votre projet ?</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-6">
            Transformez votre vision en réalité digitale
          </h2>

          <p className="text-lg md:text-xl text-gray-100 mb-10 leading-relaxed">
            Que vous ayez besoin d'un site web, d'une application mobile, d'un accompagnement digital ou de formations, 
            BrainUp Technology est votre partenaire idéal à Bafia.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="btn bg-white text-primary-600 hover:bg-gray-100 hover:scale-105 text-lg px-8 py-4">
              Demandez votre devis gratuit
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a href="tel:+237XXXXXXXXX" className="btn border-2 border-white text-white hover:bg-white hover:text-primary-600 text-lg px-8 py-4">
              Appelez-nous maintenant
            </a>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-3xl font-bold text-yellow-300 mb-1">100%</div>
              <div className="text-sm text-gray-200">Solutions sur mesure</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-3xl font-bold text-yellow-300 mb-1">24/7</div>
              <div className="text-sm text-gray-200">Support disponible</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-3xl font-bold text-yellow-300 mb-1">∞</div>
              <div className="text-sm text-gray-200">Possibilités digitales</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CTASection
