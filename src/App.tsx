import { useContext } from 'react'
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import { ParticipantesContext } from './context/ParticipantesContext';
import ListaPage from './pages/ListaPage';
import FormularioPage from './pages/FormularioPage';
import EditarPage from './pages/EditarPage';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const context = useContext(ParticipantesContext);
  
  if (!context) return null;

  const { state } = context;
  const { participantes } = state;

  return (
    <div className="min-h-screen pt-24 pb-12">
      <ScrollToTop />
      <Navbar />
      
      <div className="max-w-6xl mx-auto px-8 space-y-12">
        {/* Header Section */}
        <Header participants={participantes.length} />

        <main className="space-y-16">
          <Routes>
            <Route path="/" element={<ListaPage />} />
            <Route path="/nuevo" element={<FormularioPage />} />
            <Route path="/editar/:id" element={<EditarPage />} />
          </Routes>
        </main>
      </div>
    </div>
  )
}

export default App
