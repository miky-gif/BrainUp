import { Link } from 'react-router-dom'
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Youtube,
  Mail, 
  Phone, 
  MapPin,
  Send
} from 'lucide-react'
import { useState } from 'react'
import { toast } from 'react-toastify'

const Footer = () => {
  const [email, setEmail] = useState('')

  const handleNewsletterSubmit = (e) => {
    e.preventDefault()
    if (email) {
      toast.success('Merci de vous être abonné à notre newsletter!')
      setEmail('')
    }
  }

  const footerLinks = {
    formations: [
      { name: 'Infographie & Design', path: '/formations?category=infographie' },
      { name: 'Développement Web', path: '/formations?category=web-mobile' },
      { name: 'Programmation', path: '/formations?category=programmation' },
      { name: 'Robotique', path: '/formations?category=robotique' },
      { name: 'Réseaux', path: '/formations?category=reseaux' },
    ],
    entreprise: [
      { name: 'À propos', path: '/about' },
      { name: 'Nos formateurs', path: '/about#formateurs' },
      { name: 'Témoignages', path: '/about#temoignages' },
      { name: 'Blog', path: '/blog' },
      { name: 'Contact', path: '/contact' },
    ],
    services: [
      { name: 'Formations', path: '/formations' },
      { name: 'Concours', path: '/concours' },
      { name: 'Boutique', path: '/boutique' },
      { name: 'E-learning', path: '/dashboard/courses' },
      { name: 'Attestations', path: '/dashboard/certificates' },
    ]
  }

  const socialLinks = [
    { icon: Facebook, url: 'https://facebook.com/brainuptech', color: 'hover:bg-blue-600' },
    { icon: Twitter, url: 'https://twitter.com/brainuptech', color: 'hover:bg-sky-500' },
    { icon: Instagram, url: 'https://instagram.com/brainuptech', color: 'hover:bg-pink-600' },
    { icon: Linkedin, url: 'https://linkedin.com/company/brainuptech', color: 'hover:bg-blue-700' },
    { icon: Youtube, url: 'https://youtube.com/@brainuptech', color: 'hover:bg-red-600' },
  ]

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img 
                src="/logo.png" 
                alt="BrainUp Technology Logo" 
                className="w-12 h-12 object-contain"
              />
              <div>
                <h3 className="text-xl font-display font-bold text-white">
                  BrainUp Technology
                </h3>
                <p className="text-xs text-gray-400">Formation & Innovation</p>
              </div>
            </div>
            <p className="text-sm mb-4">
              Centre de formation en informatique à Bafia, Cameroun. 
              Notre mission : réduire la fracture numérique par des formations accessibles et de qualité.
            </p>
            <div className="flex gap-2">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center transition-all ${social.color} hover:text-white`}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Formations */}
          <div>
            <h4 className="text-lg font-display font-bold text-white mb-4">Formations</h4>
            <ul className="space-y-2">
              {footerLinks.formations.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path}
                    className="text-sm hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Entreprise */}
          <div>
            <h4 className="text-lg font-display font-bold text-white mb-4">Entreprise</h4>
            <ul className="space-y-2">
              {footerLinks.entreprise.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path}
                    className="text-sm hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h4 className="text-lg font-display font-bold text-white mb-4">Contact</h4>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-2">
                <MapPin className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm">Bafia, Région du Centre, Cameroun</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <a href="tel:+237690000000" className="text-sm hover:text-primary-400 transition-colors">
                  +237 690 00 00 00
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-primary-400 flex-shrink-0" />
                <a href="mailto:contact@brainup-tech.cm" className="text-sm hover:text-primary-400 transition-colors">
                  contact@brainup-tech.cm
                </a>
              </li>
            </ul>

            {/* Newsletter */}
            <div>
              <h5 className="text-sm font-semibold text-white mb-2">Newsletter</h5>
              <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Votre email"
                  className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-sm focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
                  required
                />
                <button
                  type="submit"
                  className="p-2 bg-primary-600 hover:bg-primary-700 rounded-lg transition-colors"
                >
                  <Send className="w-5 h-5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} BrainUp Technology. Tous droits réservés.
            </p>
            <div className="flex gap-6">
              <Link to="/privacy" className="text-sm text-gray-400 hover:text-primary-400 transition-colors">
                Politique de confidentialité
              </Link>
              <Link to="/terms" className="text-sm text-gray-400 hover:text-primary-400 transition-colors">
                Conditions d'utilisation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
