import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LandingPage } from '@/pages/LandingPage';
import { Navigation } from '@/Navigation';
import { Providers } from '@/Providers';

export const App = () => (
  <BrowserRouter>
    <Providers>
      <Navigation />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* Placeholder routes for nav */}
        <Route path="/about" element={<div className="p-16 text-center text-2xl">About page coming soon...</div>} />
        <Route path="/features" element={<div className="p-16 text-center text-2xl">Features page coming soon...</div>} />
        <Route path="/login" element={<div className="p-16 text-center text-2xl">Login page coming soon...</div>} />
        <Route path="/signup" element={<div className="p-16 text-center text-2xl">Signup page coming soon...</div>} />
      </Routes>
    </Providers>
  </BrowserRouter>
);
