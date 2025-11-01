import { Users, GraduationCap, Award, Star } from 'lucide-react'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

const StatsSection = () => {
  const stats = [
    {
      icon: Users,
      value: 500,
      suffix: '+',
      label: 'Étudiants Formés',
      color: 'primary'
    },
    {
      icon: GraduationCap,
      value: 15,
      suffix: '+',
      label: 'Formations Disponibles',
      color: 'secondary'
    },
    {
      icon: Award,
      value: 450,
      suffix: '+',
      label: 'Attestations Délivrées',
      color: 'accent'
    },
    {
      icon: Star,
      value: 95,
      suffix: '%',
      label: 'Taux de Satisfaction',
      color: 'primary'
    }
  ]

  const CountUp = ({ end, duration = 2000 }) => {
    const [count, setCount] = useState(0)

    useEffect(() => {
      let startTime
      let animationFrame

      const animate = (currentTime) => {
        if (!startTime) startTime = currentTime
        const progress = (currentTime - startTime) / duration

        if (progress < 1) {
          setCount(Math.floor(end * progress))
          animationFrame = requestAnimationFrame(animate)
        } else {
          setCount(end)
        }
      }

      animationFrame = requestAnimationFrame(animate)
      return () => cancelAnimationFrame(animationFrame)
    }, [end, duration])

    return count
  }

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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold mb-4">
            BrainUp en <span className="text-yellow-300">Chiffres</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-100 max-w-3xl mx-auto">
            Des résultats concrets qui témoignent de notre engagement envers l'excellence
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl mb-4">
                <stat.icon className="w-10 h-10 text-yellow-300" />
              </div>
              <div className="text-4xl md:text-5xl font-bold mb-2">
                <CountUp end={stat.value} />
                {stat.suffix}
              </div>
              <div className="text-gray-200 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StatsSection
