import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import DashboardPage from './pages/DashboardPage';
import PricingPage from './pages/PricingPage';
import AboutUsPage from './pages/AboutUsPage';
import AuthPage from './pages/AuthPage';
import { AuthProvider } from './contexts/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/pricing" element={<PricingPage />} />
              <Route path="/about" element={<AboutUsPage />} />
              <Route path="/auth" element={<AuthPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;