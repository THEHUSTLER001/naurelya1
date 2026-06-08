import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './FAQ.css';

const FAQItem = ({ item, index }) => {
    const [open, setOpen] = useState(false);
    const ref = useScrollReveal({ threshold: 0.15 });

    return (
        <div
            ref={ref}
            className={`faq-item scroll-reveal-up ${open ? 'faq-open' : ''}`}
            style={{ transitionDelay: `${index * 100}ms` }}
        >
            <button className="faq-question" onClick={() => setOpen(!open)}>
                <span>{item.q}</span>
                <span className="faq-icon">{open ? '−' : '+'}</span>
            </button>
            <div className="faq-answer">
                <p>{item.a}</p>
            </div>
        </div>
    );
};

const FAQ = () => {
    const { t } = useLanguage();
    const titleRef = useScrollReveal({ threshold: 0.2 });
    const faqs = t('faqs');

    return (
        <section className="faq-section">
            <div className="container faq-container">
                <h2 ref={titleRef} className="section-title title-gradient scroll-reveal-up">
                    {t('faqTitle')}
                </h2>
                <div className="faq-list">
                    {Array.isArray(faqs) && faqs.map((item, i) => (
                        <FAQItem key={i} item={item} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
