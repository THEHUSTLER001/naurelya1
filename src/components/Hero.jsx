import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import './Hero.css';
import productBottle from '../assets/product-bottle.jpg';

const Hero = () => {
    const { t } = useLanguage();

    const scrollToForm = () => {
        const formEl = document.getElementById('order-form');
        if (formEl) {
            formEl.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="hero">
            <div className="hero-bg-accent"></div>
            <div className="container hero-container">
                <div className="hero-content animate-fade-in-up">
                    <h1 className="hero-title">{t('heroTitle')}</h1>
                    <p className="hero-subtitle">{t('heroSubtitle')}</p>

                    <ul className="hero-features">
                        {t('heroFeatures').map((feature, index) => (
                            <li key={index} className="feature-item">
                                <span className="feature-icon">✨</span>
                                {feature}
                            </li>
                        ))}
                    </ul>

                    <div className="hero-cta-wrapper">
                        <button className="btn-primary hero-btn" onClick={scrollToForm}>
                            {t('btnOrderHero')}
                        </button>
                        <p className="security-badge">🛡️ {t('originalProduct')}</p>
                    </div>
                </div>

                <div className="hero-image-wrapper">
                    <div className="glow-ring"></div>
                    <div className="image-backdrop"></div>
                    <img src={productBottle} alt="Naurelya Product" className="hero-img" />
                    <div className="hero-pills">
                        <div className="pill pill-1"></div>
                        <div className="pill pill-2"></div>
                        <div className="pill pill-3"></div>
                    </div>
                    <div className="floating-badge">30 Days Focus</div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
