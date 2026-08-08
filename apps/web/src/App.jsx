import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { Toaster } from '@/components/ui/sonner';
import ScrollToTop from './components/ScrollToTop.jsx';
import HomePage from './pages/HomePage.jsx';
import SolucoesPage from './pages/SolucoesPage.jsx';
import CasesPage from './pages/CasesPage.jsx';
import SobrePage from './pages/SobrePage.jsx';
import ContatoPage from './pages/ContatoPage.jsx';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/solucoes" element={<SolucoesPage />} />
        <Route path="/cases" element={<CasesPage />} />
        <Route path="/sobre" element={<SobrePage />} />
        <Route path="/contato" element={<ContatoPage />} />
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;