import { Routes, Route } from 'react-router-dom'
import Layout from './components/layout/Layout'
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Formations from './pages/Formations/Formations'
import FormationDetail from './pages/Formations/FormationDetail'
import Inscription from './pages/Inscription/Inscription'
import Concours from './pages/Concours/Concours'
import Boutique from './pages/Boutique/Boutique'
import Contact from './pages/Contact/Contact'
import Blog from './pages/Blog/Blog'
import BlogPost from './pages/Blog/BlogPost'
import Login from './pages/Auth/Login'
import Register from './pages/Auth/Register'
import Dashboard from './pages/Dashboard/Dashboard'
import MyCourses from './pages/Dashboard/MyCourses'
import CourseViewer from './pages/Dashboard/CourseViewer'
import MyProgress from './pages/Dashboard/MyProgress'
import MyCertificates from './pages/Dashboard/MyCertificates'
import AdminDashboard from './pages/Admin/AdminDashboard'
import AdminInscriptions from './pages/Admin/AdminInscriptions'
import AdminCourses from './pages/Admin/AdminCourses'
import AdminStudents from './pages/Admin/AdminStudents'
import AdminCertificates from './pages/Admin/AdminCertificates'
import PrivateRoute from './components/common/PrivateRoute'
import AdminRoute from './components/common/AdminRoute'
import NotFound from './pages/NotFound'
import Services from './pages/Services/Services'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* Public routes */}
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="formations" element={<Formations />} />
        <Route path="formations/:id" element={<FormationDetail />} />
        <Route path="inscription" element={<Inscription />} />
        <Route path="inscription/:formationId" element={<Inscription />} />
        <Route path="concours" element={<Concours />} />
        <Route path="boutique" element={<Boutique />} />
        <Route path="services" element={<Services />} />
        <Route path="contact" element={<Contact />} />
        <Route path="blog" element={<Blog />} />
        <Route path="blog/:id" element={<BlogPost />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />

        {/* Protected student routes */}
        <Route path="dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
        <Route path="dashboard/courses" element={<PrivateRoute><MyCourses /></PrivateRoute>} />
        <Route path="dashboard/courses/:courseId" element={<PrivateRoute><CourseViewer /></PrivateRoute>} />
        <Route path="dashboard/progress" element={<PrivateRoute><MyProgress /></PrivateRoute>} />
        <Route path="dashboard/certificates" element={<PrivateRoute><MyCertificates /></PrivateRoute>} />

        {/* Protected admin routes */}
        <Route path="admin" element={<AdminRoute><AdminDashboard /></AdminRoute>} />
        <Route path="admin/inscriptions" element={<AdminRoute><AdminInscriptions /></AdminRoute>} />
        <Route path="admin/courses" element={<AdminRoute><AdminCourses /></AdminRoute>} />
        <Route path="admin/students" element={<AdminRoute><AdminStudents /></AdminRoute>} />
        <Route path="admin/certificates" element={<AdminRoute><AdminCertificates /></AdminRoute>} />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
