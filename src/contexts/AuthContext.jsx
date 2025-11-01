import { createContext, useContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

const AuthContext = createContext(null)

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    // Check if user is logged in on mount
    const storedUser = localStorage.getItem('brainup_user')
    const storedToken = localStorage.getItem('brainup_token')
    
    if (storedUser && storedToken) {
      try {
        const parsedUser = JSON.parse(storedUser)
        setUser(parsedUser)
      } catch (error) {
        console.error('Error parsing stored user:', error)
        localStorage.removeItem('brainup_user')
        localStorage.removeItem('brainup_token')
      }
    }
    setLoading(false)
  }, [])

  const login = async (email, password) => {
    try {
      // Simulate API call - Replace with actual API call
      // const response = await axios.post('/api/auth/login', { email, password })
      
      // Mock login for demonstration
      const mockUser = {
        id: '1',
        email: email,
        firstName: 'John',
        lastName: 'Doe',
        role: email === 'admin@brainup.cm' ? 'admin' : 'student',
        enrolledCourses: [],
        progress: {},
      }
      
      const mockToken = 'mock-jwt-token-' + Date.now()
      
      localStorage.setItem('brainup_user', JSON.stringify(mockUser))
      localStorage.setItem('brainup_token', mockToken)
      setUser(mockUser)
      
      toast.success('Connexion réussie!')
      
      // Redirect based on role
      if (mockUser.role === 'admin') {
        navigate('/admin')
      } else {
        navigate('/dashboard')
      }
      
      return { success: true }
    } catch (error) {
      toast.error('Erreur de connexion. Vérifiez vos identifiants.')
      return { success: false, error: error.message }
    }
  }

  const register = async (userData) => {
    try {
      // Simulate API call - Replace with actual API call
      // const response = await axios.post('/api/auth/register', userData)
      
      // Mock registration
      const newUser = {
        id: Date.now().toString(),
        email: userData.email,
        firstName: userData.firstName,
        lastName: userData.lastName,
        role: 'student',
        enrolledCourses: [],
        progress: {},
      }
      
      const mockToken = 'mock-jwt-token-' + Date.now()
      
      localStorage.setItem('brainup_user', JSON.stringify(newUser))
      localStorage.setItem('brainup_token', mockToken)
      setUser(newUser)
      
      toast.success('Inscription réussie! Bienvenue chez BrainUp Technology.')
      navigate('/dashboard')
      
      return { success: true }
    } catch (error) {
      toast.error('Erreur lors de l\'inscription.')
      return { success: false, error: error.message }
    }
  }

  const logout = () => {
    localStorage.removeItem('brainup_user')
    localStorage.removeItem('brainup_token')
    setUser(null)
    toast.info('Déconnexion réussie')
    navigate('/')
  }

  const updateUser = (updatedData) => {
    const updatedUser = { ...user, ...updatedData }
    localStorage.setItem('brainup_user', JSON.stringify(updatedUser))
    setUser(updatedUser)
  }

  const isAuthenticated = () => {
    return !!user
  }

  const isAdmin = () => {
    return user?.role === 'admin'
  }

  const value = {
    user,
    loading,
    login,
    register,
    logout,
    updateUser,
    isAuthenticated,
    isAdmin,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
