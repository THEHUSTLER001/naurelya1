import React from 'react'
import { LanguageProvider, useLanguage } from './contexts/LanguageContext'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Challenge from './components/Challenge'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import ShopifyForm from './components/ShopifyForm'
import Footer from './components/Footer'

const AppContent = () => {
  const { language } = useLanguage();
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <Features />
        <Challenge />
        <Testimonials />
        <FAQ />
        <ShopifyForm />
      </main>
      <Footer />

      <button
        className="fixed-cta-btn"
        onClick={() => document.getElementById('order-form').scrollIntoView({ behavior: 'smooth' })}
      >
        {language === 'ar' ? 'احصلي على منتجك الآن' : 'Obtenez votre produit maintenant'}
      </button>
    </div>
  );
};

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  )
}

export default App
