import React, { useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Testimonials.css';

const Stars = ({ count = 5 }) => (
    <div className="stars" aria-label={`${count} stars`}>
        {Array.from({ length: count }).map((_, i) => (
            <span key={i} className="star">★</span>
        ))}
    </div>
);

const TestimonialCard = ({ review, index }) => {
    const ref = useScrollReveal({ threshold: 0.15 });
    const initials = review.name.charAt(0);
    return (
        <div
            ref={ref}
            className="testimonial-card glass scroll-reveal-up"
            style={{ transitionDelay: `${index * 130}ms` }}
        >
            <Stars count={review.stars} />
            <p className="testimonial-text">"{review.text}"</p>
            <div className="testimonial-author">
                <div className="author-avatar">{initials}</div>
                <div>
                    <strong className="author-name">{review.name}</strong>
                    <span className="author-city">{review.city}</span>
                </div>
            </div>
        </div>
    );
};

const Testimonials = () => {
    const { t } = useLanguage();
    const titleRef = useScrollReveal({ threshold: 0.2 });
    const reviews = t('reviews');

    return (
        <section className="testimonials-section">
            <div className="container">
                <h2 ref={titleRef} className="section-title title-gradient scroll-reveal-up">
                    {t('reviewsTitle')}
                </h2>
                <div className="testimonials-grid">
                    {Array.isArray(reviews) && reviews.map((review, i) => (
                        <TestimonialCard key={i} review={review} index={i} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
