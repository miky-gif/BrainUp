import { Link } from 'react-router-dom'
import { ArrowRight, PhoneCall, Play, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-hero text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center py-20 lg:py-32">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-yellow-300" />
              <span className="text-sm font-medium">Startup Tech #1 à Bafia</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
              Transformez vos idées en solutions digitales avec
              <span className="block text-yellow-300">BrainUp Technology</span>
            </h1>

            <p className="text-lg md:text-xl text-gray-100 mb-8 leading-relaxed">
             Votre partenaire digital pour la transformation numérique à Bafia. Développement, design, formation et accompagnement digital pour entreprises et particuliers.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link to="/formations" className="btn bg-white text-primary-600 hover:bg-gray-100 hover:scale-105">
                Découvrir nos services
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/contact" className="btn border-2 border-white text-white hover:bg-white hover:text-primary-600">
                <PhoneCall className="w-5 h-5" />
                Demander un devis
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div>
                <div className="text-3xl font-bold text-yellow-300 mb-1">20+</div>
                <div className="text-sm text-gray-200">Projets réalisés</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-300 mb-1">10+</div>
                <div className="text-sm text-gray-200">Services digitaux</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-300 mb-1">95%</div>
                <div className="text-sm text-gray-200">Satisfaction</div>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Image/Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10">
              <img
                src="/images/hero-illustration.svg"
                alt="Formation informatique"
                className="w-full h-auto"
                  onError={(e) => {
                    e.target.style.display = 'none'
                    e.target.parentElement.innerHTML = `
                      <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-12 aspect-square flex items-center justify-center">
                        <div class="text-center">
                          <div class="w-32 h-32 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                            <svg class="w-16 h-16" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M3 17l6-6 4 4 8-8"/>
                              <path stroke-linecap="round" stroke-linejoin="round" d="M14 5h7v7"/>
                            </svg>
                          </div>
                          <p class="text-xl font-semibold">Performance et Innovation</p>
                        </div>
                      </div>
                    `
                  }}







              />
            </div>

            {/* Floating Cards */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute top-10 -left-4 bg-white rounded-lg shadow-xl p-4 max-w-[200px]"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">✓</span>
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-900">Services de </div>
                  <div className="text-xs text-gray-600">qualité</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
              className="absolute bottom-10 -right-4 bg-white rounded-lg shadow-xl p-4 max-w-[200px]"
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🎓</span>
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-900">Impact </div>
                  <div className="text-xs text-gray-600">Digital</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Wave Separator */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  )
}

export default HeroSection
