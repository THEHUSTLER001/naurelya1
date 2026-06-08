import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Challenge.css';
import challengeImage from '../assets/challenge-woman.png';

const Challenge = () => {
    const { t, language } = useLanguage();
    const imgReveal = useScrollReveal({ threshold: 0.3 });
    const textReveal = useScrollReveal({ threshold: 0.3 });

    const isRtl = language === 'ar';

    return (
        <section id="challenge-section" className="challenge">
            <div className="container challenge-container">
                <div ref={imgReveal} className={`challenge-image-side scroll-slide-${isRtl ? 'right' : 'left'}`}>
                    <img src={challengeImage} alt="Naurelya 30 day challenge" className="challenge-img" />
                    <div className="img-overlay"></div>
                </div>

                <div ref={textReveal} className={`challenge-content-side scroll-slide-${isRtl ? 'left' : 'right'}`}>
                    <h2 className="section-title title-gradient">{t('challengeTitle')}</h2>
                    <p className="challenge-desc">
                        {t('challengeDesc')}
                    </p>

                    <button className="btn-primary" onClick={() => document.getElementById('order-form').scrollIntoView({ behavior: 'smooth' })}>
                        {t('btnChallenge')}
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Challenge;
