import { HashRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { Analytics } from '@vercel/analytics/react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import LearnJava from './pages/LearnJava';
import ModulePage from './pages/ModulePage';
import LessonPage from './pages/LessonPage';
import Downloads from './pages/Downloads';
import About from './pages/About';
import Contact from './pages/Contact';
import ExamplesPage from './pages/ExamplesPage';
import NotFound from './pages/NotFound';

import { AIProvider } from './components/ai/AIContext';
import AIChatPage from './components/ai/AIChatPage';
import FloatingChatbot from './components/ai/FloatingChatbot';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [pathname]);

  return null;
}

export default function App() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    let hideTimer: ReturnType<typeof setTimeout> | null = null;

    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
        if (hideTimer) clearTimeout(hideTimer);
        hideTimer = setTimeout(() => {
          setShowBackToTop(false);
        }, 3000);
      } else {
        if (hideTimer) clearTimeout(hideTimer);
        setShowBackToTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      if (hideTimer) clearTimeout(hideTimer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <Analytics />
      <AIProvider>
        <div className="flex flex-col min-h-screen bg-[#0B0B0F] transition-colors duration-300 relative">
          <Navbar />
          
          {/* Main Content Area */}
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/learn-java" element={<LearnJava />} />
              <Route path="/learn" element={<Navigate to="/learn-java" replace />} />
              <Route path="/module/:moduleSlug" element={<ModulePage />} />
              <Route path="/lesson/:lessonSlug" element={<LessonPage />} />
              <Route path="/downloads" element={<Downloads />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/examples" element={<ExamplesPage />} />
              <Route path="/bytecode-ai" element={<AIChatPage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          
          <Footer />

          {/* Floating AI Assistant Components */}
          <FloatingChatbot />

          {/* Floating Back To Top Button - Stacks vertically below the AI Button */}
          {showBackToTop && (
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="fixed bottom-6 right-6 p-2.5 rounded-full bg-[#FF0800] text-white hover:bg-rose-700 shadow-lg hover:shadow-xl transition-all duration-300 z-50 hover:-translate-y-0.5 active:scale-95 flex items-center justify-center cursor-pointer border border-transparent"
              title="Back to Top"
              aria-label="Back to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          )}
        </div>
      </AIProvider>
    </Router>
  );
}

