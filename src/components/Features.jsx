import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Features.css';

const FeatureCard = ({ item, index }) => {
    const revealRef = useScrollReveal({ threshold: 0.2 });
    return (
        <div
            ref={revealRef}
            className="feature-card glass scroll-reveal-up"
            style={{ transitionDelay: `${index * 150}ms` }}
        >
            <div className="feature-icon-lg" dangerouslySetInnerHTML={{ __html: item.icon }} />
            <h3 className="feature-title">{item.title}</h3>
            <p className="feature-desc">{item.desc}</p>
        </div>
    );
};

const Features = () => {
    const { t } = useLanguage();

    const featuresList = [
        {
            title: t('qualityFeature'),
            desc: t('qualityDesc'),
            icon: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 3h12l4 6-10 13L2 9Z"/><path d="M11 3 8 9l4 13"/><path d="M13 3l3 6-4 13"/></svg>'
        },
        {
            title: t('easyFeature'),
            desc: t('easyDesc'),
            icon: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="16" height="6" x="4" y="9" rx="3"/><path d="M12 9v6"/></svg>'
        },
        {
            title: t('amountFeature'),
            desc: t('amountDesc'),
            icon: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 8h14"/><path d="M7 8v11a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V8"/><path d="M10 5a2 2 0 0 1 4 0v3h-4V5z"/></svg>'
        },
        {
            title: t('wellnessFeature'),
            desc: t('wellnessDesc'),
            icon: '<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>'
        }
    ];

    return (
        <section id="features-section" className="features">
            <div className="container">
                <h2 className="section-title title-gradient">{t('whyNaurelya')}</h2>

                <div className="features-grid">
                    {featuresList.map((item, index) => (
                        <FeatureCard key={index} item={item} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
