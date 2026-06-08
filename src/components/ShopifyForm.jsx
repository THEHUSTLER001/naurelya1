import React, { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import './ShopifyForm.css';

const ShopifyForm = () => {
    const { t } = useLanguage();
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        address: '',
        city: ''
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here we would integrate with Shopify API or a custom backend
        console.log("Form data ready for Shopify:", formData);
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);
    };

    return (
        <section id="order-form" className="shopify-form-section">
            <div className="container">
                <div className="form-wrapper glass">
                    <h2 className="section-title title-gradient">{t('formTitle')}</h2>

                    {submitted ? (
                        <div className="success-message">
                            <h3>🎉</h3>
                            <p>Thank you! Your order is being processed.</p>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="order-form">
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="firstName">{t('firstName')}</label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        required
                                        placeholder="e.g. Sara"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="lastName">{t('lastName')}</label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        required
                                        placeholder="e.g. Alami"
                                    />
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="phone">{t('phone')}</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    required
                                    placeholder="+212 6XX XX XX XX"
                                    dir="ltr"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="city">{t('city')}</label>
                                <input
                                    type="text"
                                    id="city"
                                    name="city"
                                    value={formData.city}
                                    onChange={handleChange}
                                    required
                                    placeholder="Casablanca"
                                />
                            </div>

                            <div className="form-group">
                                <label htmlFor="address">{t('address')}</label>
                                <textarea
                                    id="address"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleChange}
                                    required
                                    rows="3"
                                    placeholder="123 Rue..."
                                ></textarea>
                            </div>

                            <button type="submit" className="btn-primary form-submit-btn">
                                {t('submitOrder')}
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </section>
    );
};

export default ShopifyForm;
