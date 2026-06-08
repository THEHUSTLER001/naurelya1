import React from 'react';
import './Footer.css';
import logoImg from '../assets/logo.jpg';
import { useLanguage } from '../contexts/LanguageContext';

const Footer = () => {
    const { language } = useLanguage();

    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-brand">
                    <img src={logoImg} alt="Naurelya Logo" className="footer-logo" />
                    <p className="footer-desc">
                        {language === 'ar'
                            ? 'نوريليا، رفيقتك اليومية لتعزيز الأنوثة والثقة.'
                            : 'Naurelya, your daily companion to enhance femininity and confidence.'}
                    </p>
                </div>

                <div className="footer-social">
                    <h3>{language === 'ar' ? 'تابعونا' : 'Follow Us'}</h3>
                    <div className="social-icons">
                        <a href="#" className="social-link">Instagram</a>
                        <a href="#" className="social-link">Facebook</a>
                        <a href="#" className="social-link">TikTok</a>
                    </div>
                </div>

                <div className="footer-contact">
                    <h3>{language === 'ar' ? 'تواصل معنا' : 'Contact'}</h3>
                    <p>contact@naurelya.com</p>
                    <p dir="ltr">+212 600-000000</p>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Naurelya. {language === 'ar' ? 'جميع الحقوق محفوظة' : 'All rights reserved'}.</p>
            </div>
        </footer>
    );
};

export default Footer;
