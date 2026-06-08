import React, { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import './Header.css';
import logoImg from '../assets/logo.jpg';

const Header = () => {
    const { language, toggleLanguage } = useLanguage();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollTo = (id) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <header className={`header ${scrolled ? 'header-scrolled' : ''}`}>
            <div className="container header-container">
                <div className="logo-container" onClick={() => window.scrollTo(0, 0)}>
                    <img src={logoImg} alt="Naurelya Logo" className="logo-img" />
                    <span className="logo-text">NAURELYA</span>
                </div>

                <nav className="nav-links">
                    <button className="nav-item" onClick={() => scrollTo('features-section')}>
                        {language === 'ar' ? 'عن المنتج' : 'Features'}
                    </button>
                    <button className="nav-item" onClick={() => scrollTo('challenge-section')}>
                        {language === 'ar' ? 'التحدي' : 'Challenge'}
                    </button>
                    <button className="nav-item" onClick={() => scrollTo('order-form')}>
                        {language === 'ar' ? 'الطلب' : 'Order'}
                    </button>
                </nav>

                <div className="header-actions">
                    <button className="lang-toggle" onClick={toggleLanguage}>
                        {language === 'ar' ? 'Français' : 'العربية'}
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
