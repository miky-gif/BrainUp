import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Palette, Code, Smartphone, Network, Share2, GraduationCap } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Palette,
      title: 'Design & Création Graphique',
      description: 'Design d\'interfaces modernes, identité visuelle, logos, supports marketing. Créez une image professionnelle qui marque les esprits.',
      features: ['UI/UX Design professionnel', 'Identité visuelle & branding', 'Design réactif et moderne', 'Supports marketing percutants'],
      color: 'primary',
      gradient: 'from-indigo-500 to-purple-600'
    },
    {
      icon: Code,
      title: 'Développement Web',
      description: 'Sites web vitrine, e-commerce, applications web sur mesure. Du concept au déploiement, nous créons des solutions web performantes.',
      features: ['Sites responsive et modernes', 'E-commerce & plateformes web', 'Applications web complexes', 'Optimisation SEO incluse'],
      color: 'primary',
      gradient: 'from-blue-500 to-cyan-600'
    },
    {
      icon: Smartphone,
      title: 'Développement Mobile',
      description: 'Applications mobiles natives et multiplateformes (iOS & Android). Transformez vos idées en apps performantes et intuitives.',
      features: ['Apps Android & iOS', 'Design intuitif et fluide', 'Performance optimisée', 'Publication sur les stores'],
      color: 'primary',
      gradient: 'from-indigo-500 to-purple-600'
    },
    {
      icon: Network,
      title: 'Réseaux & Infrastructure',
      description: 'Installation, configuration et sécurisation de réseaux informatiques. Infrastructures fiables pour votre entreprise.',
      features: ['Configuration réseau complète', 'Sécurité informatique', 'Serveurs & infrastructure cloud', 'Support technique continu'],
      color: 'primary',
      gradient: 'from-blue-500 to-cyan-600'
    },
    {
      icon: Share2,
      title: 'Community Management',
      description: 'Gestion professionnelle de votre présence digitale. Boostez votre visibilité et vos ventes grâce aux réseaux sociaux.',
      features: ['Gestion réseaux sociaux', 'Création de contenu engageant', 'Stratégie marketing digital', 'Augmentation des ventes'],
      color: 'primary',
      gradient: 'from-indigo-500 to-purple-600'
    },
    {
      icon: GraduationCap,
      title: 'Formations Professionnelles',
      description: 'Plus de 15 formations certifiantes en informatique. Développez vos compétences ou celles de vos équipes.',
      features: ['Formations certifiantes', 'Programmes personnalisés', 'Pratique intensive', 'Formateurs expérimentés'],
      color: 'primary',
      gradient: 'from-blue-500 to-cyan-600'
    }
  ];

  return (
    <div className="min-h-screen pt-20 bg-gray-50">
      <div className="container-custom py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            Nos <span className="text-gradient">Services</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Découvrez notre gamme complète de services pour répondre à tous vos besoins numériques
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className="card h-full hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-display font-bold text-gray-900 mb-3">
                  {service.title}
                </h3>

                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                      <div className={`w-5 h-5 rounded-full bg-${service.color}-100 flex items-center justify-center flex-shrink-0`}>
                        <span className={`text-${service.color}-600 text-xs`}>✓</span>
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`btn btn-${service.color} w-full group-hover:scale-105`}
                >
                  En savoir plus
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
