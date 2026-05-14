import { useContext } from 'react'
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Header from './components/Header';
import { ParticipantesContext } from './context/ParticipantesContext';
import ListaPage from './pages/ListaPage';
import FormularioPage from './pages/FormularioPage';
import EditarPage from './pages/EditarPage';
import LoginPage from './pages/LoginPage';
import PublicaPage from './pages/PublicaPage';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import PrivateRoute from './routes/PrivateRoute';

function App() {
  const context = useContext(ParticipantesContext);
  const location = useLocation();
  const token = localStorage.getItem('token');
  
  if (!context) return null;

  const { state } = context;
  const { participantes } = state;

  const isLoginPage = location.pathname === '/login' || (location.pathname === '/' && !token);
  const isPublicPage = location.pathname === '/' || location.pathname === '/publica';

  return (
    <div className={`min-h-screen ${isLoginPage ? 'pt-12' : 'pt-24'} pb-12`}>
      <ScrollToTop />
      <Navbar />
      
      <div className="max-w-6xl mx-auto px-8 space-y-12">
        {/* Header Section - Solo en las páginas de gestión (no en landing ni login) */}
        {!isPublicPage && !isLoginPage && <Header participants={participantes.length} />}

        <main className="space-y-16">
          <Routes>
            <Route path="/" element={<PublicaPage />} />
            <Route path="/login" element={token ? <Navigate to="/lista" replace /> : <LoginPage />} />
            <Route path="/lista" element={
              <PrivateRoute>
                <ListaPage />
              </PrivateRoute>
            } />
            <Route path="/nuevo" element={
              <PrivateRoute rol="ADMIN">
                <FormularioPage />
              </PrivateRoute>
            } />
            <Route path="/editar/:id" element={
              <PrivateRoute rol="ADMIN">
                <EditarPage />
              </PrivateRoute>
            } />
            <Route path="/menu_inicio" element={
              <PrivateRoute>
                <ListaPage />
              </PrivateRoute>
            } />
          </Routes>
        </main>
      </div>
    </div>
  )
}

export default App
