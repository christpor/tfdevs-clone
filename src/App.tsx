import React, { useEffect, useState, useRef } from 'react';
import Lenis from 'lenis';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AcademyPage } from './pages/AcademyPage';
import { AcademyPaymentPage } from './pages/AcademyPaymentPage';
import { AcademySuccessPage } from './pages/AcademySuccessPage';
import { ArticlesPage } from './pages/ArticlesPage';
import { ArticleDetailPage } from './pages/ArticleDetailPage';
import { AboutUsPage } from './pages/AboutUsPage';
import { CollaboratePage } from './pages/CollaboratePage';
import { ServicesPage } from './pages/ServicesPage';
import { CatalogPage } from './pages/CatalogPage';

export const App: React.FC = () => {
  // Normalize initial route to /en
  const getInitialPath = () => {
    const path = window.location.pathname;
    if (path === '/' || path === '') return '/en';
    if (!path.startsWith('/en')) return `/en${path.startsWith('/') ? path : `/${path}`}`;
    return path;
  };

  const [currentPath, setCurrentPath] = useState<string>(getInitialPath);
  const lenisRef = useRef<Lenis | null>(null);

  // Initialize Lenis Kinetic Smooth Scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 2.0,
    });

    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    const rafId = requestAnimationFrame(raf);

    const handlePopState = () => {
      const path = getInitialPath();
      setCurrentPath(path);
      lenis.scrollTo(0, { immediate: true });
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('popstate', handlePopState);
      lenis.destroy();
    };
  }, []);

  const navigate = (path: string) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  };

  // Route Dispatcher
  const renderRoute = () => {
    // 1. Home
    if (currentPath === '/en' || currentPath === '/en/') {
      return <HomePage onNavigate={navigate} />;
    }

    // 2. Academy
    if (currentPath === '/en/academy' || currentPath === '/en/academy/') {
      return <AcademyPage onNavigate={navigate} />;
    }
    if (currentPath === '/en/academy/payment') {
      return <AcademyPaymentPage onNavigate={navigate} />;
    }
    if (currentPath === '/en/academy/success') {
      return <AcademySuccessPage onNavigate={navigate} />;
    }

    // 3. Articles & Detail Views
    if (currentPath === '/en/articles' || currentPath === '/en/articles/') {
      return <ArticlesPage onNavigate={navigate} />;
    }
    if (currentPath.startsWith('/en/articles/')) {
      const slug = currentPath.replace('/en/articles/', '').replace(/\/$/, '');
      return <ArticleDetailPage slug={slug} onNavigate={navigate} />;
    }

    // 4. About Us
    if (currentPath === '/en/about-us' || currentPath === '/en/about' || currentPath === '/en/about-us/') {
      return <AboutUsPage onNavigate={navigate} />;
    }

    // 5. Collaborate
    if (currentPath === '/en/collaborate' || currentPath === '/en/collaborate/') {
      return <CollaboratePage onNavigate={navigate} />;
    }

    // 6. Services
    if (currentPath === '/en/services' || currentPath === '/en/services/') {
      return <ServicesPage onNavigate={navigate} />;
    }

    // 7. Courses Catalog
    if (currentPath === '/en/courses' || currentPath === '/en/courses/') {
      return (
        <CatalogPage
          title="Courses & Playrooms"
          subtitle="Interactive courses and practical hands-on curricula built for developers."
          category="courses"
          onNavigate={navigate}
        />
      );
    }

    // 8. Projects Catalog
    if (currentPath === '/en/projects' || currentPath === '/en/projects/') {
      return (
        <CatalogPage
          title="Projects Showcase"
          subtitle="Explore open source platforms, homelab architectures, and alumni capstones."
          category="projects"
          onNavigate={navigate}
        />
      );
    }

    // Default Fallback: Home Page
    return <HomePage onNavigate={navigate} />;
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0B1120] text-[#F3F4F6]">
      <Navbar currentPath={currentPath} onNavigate={navigate} />
      <main className="flex-1">
        {renderRoute()}
      </main>
      <Footer onNavigate={navigate} />
    </div>
  );
};
