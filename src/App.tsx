import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import './App.css';
import './i18n';

// Language selector component
const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const { lang } = useParams<{ lang: string }>();

  const changeLanguage = (newLang: string) => {
    i18n.changeLanguage(newLang);
    navigate(`/${newLang}`);
  };

  return (
    <div className="language-switcher">
      <button
        className={`language-btn ${lang === 'en' ? 'active' : ''}`}
        onClick={() => changeLanguage('en')}
      >
        EN
      </button>
      <button
        className={`language-btn ${lang === 'lv' ? 'active' : ''}`}
        onClick={() => changeLanguage('lv')}
      >
        LV
      </button>
    </div>
  );
};

// Navigation component
const Navigation: React.FC = () => {
  const { t } = useTranslation();

  return (
    <nav className="navbar">
      <div className="container">
        <div className="nav-container">
          <div className="logo-container">
            <div className="logo">NumiFlow</div>
            <div className="logo-subtext">AI-powered accounting platform</div>
          </div>
          <ul className="nav-menu">
            <li><a href="#features" className="nav-link">{t('nav.features')}</a></li>
            <li><a href="#solutions" className="nav-link">{t('nav.solutions')}</a></li>
            <li><a href="#onboarding" className="nav-link">{t('nav.onboarding')}</a></li>
            <li><a href="#contact" className="nav-link">{t('nav.contact')}</a></li>
          </ul>
          <LanguageSwitcher />
        </div>
      </div>
    </nav>
  );
};

// Hero section component
const HeroSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="hero">
      <div className="container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>{t('hero.title')}</h1>
          <h2>{t('hero.subtitle')}</h2>
          <p>{t('hero.description')}</p>
          <div className="hero-buttons">
            <motion.a 
              href="#contact" 
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t('hero.cta')}
            </motion.a>
            <motion.a 
              href="#features" 
              className="btn btn-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t('hero.learnMore')}
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Features section component
const FeaturesSection: React.FC = () => {
  const { t } = useTranslation();

  const features = [
    {
      key: 'automatedAccounting',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
        </svg>
      ),
      color: '#FF6B6B',
    },
    {
      key: 'aiCopilot',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16z"/>
          <path d="M12 6v6l4 2"/>
        </svg>
      ),
      color: '#4ECDC4',
    },
    {
      key: 'accountsPayable',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
          <path d="M14 2v6h6"/>
          <path d="M16 13H8"/>
          <path d="M16 17H8"/>
          <path d="M10 9H8"/>
        </svg>
      ),
      color: '#45B7D1',
    },
    {
      key: 'bankReconciliation',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 6h18M3 12h18M3 18h18"/>
          <path d="M21 6l-3 3-3-3"/>
          <path d="M21 12l-3 3-3-3"/>
          <path d="M21 18l-3 3-3-3"/>
        </svg>
      ),
      color: '#96CEB4',
    },
    {
      key: 'duplicateDetection',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
          <path d="M10 10l4 4"/>
        </svg>
      ),
      color: '#FFEEAD',
    },
    {
      key: 'approvalWorkflows',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      ),
      color: '#D4A5A5',
    },
    {
      key: 'accountsReceivable',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      ),
      color: '#9B59B6',
    },
    {
      key: 'insightsAnalytics',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 3v18h18"/>
          <path d="M18.7 8l-5.1 5.2-2.8-2.7L7 14.3"/>
        </svg>
      ),
      color: '#3498DB',
    },
    {
      key: 'documentManagement',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
          <path d="M14 2v6h6"/>
          <path d="M16 13H8"/>
          <path d="M16 17H8"/>
          <path d="M10 9H8"/>
        </svg>
      ),
      color: '#2ECC71',
    },
    {
      key: 'periodClosing',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M19 4H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2z"/>
          <path d="M16 2v4"/>
          <path d="M8 2v4"/>
          <path d="M3 10h18"/>
        </svg>
      ),
      color: '#E67E22',
    },
    {
      key: 'apiIntegration',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
        </svg>
      ),
      color: '#1ABC9C',
    },
    {
      key: 'compliance',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
        </svg>
      ),
      color: '#34495E',
    },
    {
      key: 'userManagement',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
          <circle cx="12" cy="7" r="4"/>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>
      ),
      color: '#7F8C8D',
    },
  ];

  return (
    <section id="features" className="features">
      <div className="features-background" />
      <div className="container">
        <motion.div
          className="features-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="section-title">{t('features.title')}</h2>
          <p className="section-subtitle">{t('features.subtitle')}</p>
        </motion.div>
        
        <div className="features-grid">
          {features.map((feature, index) => (
            <motion.div
              key={feature.key}
              className="feature-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.05,
                type: "spring",
                stiffness: 100
              }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.03,
                transition: { duration: 0.2 }
              }}
            >
              <div 
                className="feature-icon"
                style={{ 
                  backgroundColor: `${feature.color}15`,
                  color: feature.color
                }}
              >
                {feature.icon}
              </div>
              <div className="feature-content">
                <h3>{t(`features.${feature.key}.title`)}</h3>
                <p>{t(`features.${feature.key}.description`)}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Solutions section component
const SolutionsSection: React.FC = () => {
  const { t } = useTranslation();

  const rolesSolutions = [
    { 
      key: 'accountants',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2"/>
        </svg>
      )
    },
    { 
      key: 'financeTeam',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
          <path d="M12 6v6l4 2"/>
        </svg>
      )
    },
    { 
      key: 'auditors',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
          <path d="M12 8v4l3 3"/>
        </svg>
      )
    },
  ];

  const sizeSolutions = [
    { 
      key: 'smallCompany',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11m16-11v11M8 14v3m4-3v3m4-3v3"/>
        </svg>
      )
    },
    { 
      key: 'mediumCompany',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0H5m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
        </svg>
      )
    },
    { 
      key: 'largeCompany',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0H5m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
          <path d="M17 21v-2a4 4 0 00-4-4H7a4 4 0 00-4 4v2"/>
        </svg>
      )
    },
  ];

  return (
    <section id="solutions" className="solutions">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {t('solutions.title')}
        </motion.h2>
        
        <motion.h3 
          style={{ textAlign: 'center', marginBottom: '1.5rem', fontSize: '1.75rem', color: 'var(--color-secondary)', fontWeight: '700' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {t('solutions.byRole')}
        </motion.h3>
        <div className="solutions-grid">
          {rolesSolutions.map((solution, index) => (
            <motion.div
              key={solution.key}
              className="solution-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
            >
              <div className="solution-icon">{solution.icon}</div>
              <h3>{t(`solutions.${solution.key}.title`)}</h3>
              <p>{t(`solutions.${solution.key}.description`)}</p>
            </motion.div>
          ))}
        </div>

        <motion.h3 
          style={{ textAlign: 'center', margin: '4rem 0 1.5rem', fontSize: '1.75rem', color: 'var(--color-secondary)', fontWeight: '700' }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {t('solutions.bySize')}
        </motion.h3>
        <div className="solutions-grid">
          {sizeSolutions.map((solution, index) => (
            <motion.div
              key={solution.key}
              className="solution-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
            >
              <div className="solution-icon">{solution.icon}</div>
              <h3>{t(`solutions.${solution.key}.title`)}</h3>
              <p>{t(`solutions.${solution.key}.description`)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Onboarding section component
const OnboardingSection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="onboarding" className="onboarding">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {t('onboarding.title')}
        </motion.h2>
        <motion.p 
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {t('onboarding.subtitle')}
        </motion.p>

        <div className="onboarding-timeline">
          <motion.div 
            className="timeline-phase"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="timeline-header">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="timeline-icon">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
              <h3>{t('onboarding.foundation.title')}</h3>
            </div>
            <ul className="timeline-list">
              {(t('onboarding.foundation.items', { returnObjects: true }) as string[]).map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  className="timeline-item"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="timeline-check">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            className="timeline-phase"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="timeline-header">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="timeline-icon">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                <path d="M12 8v4l3 3"/>
              </svg>
              <h3>{t('onboarding.validation.title')}</h3>
            </div>
            <ul className="timeline-list">
              {(t('onboarding.validation.items', { returnObjects: true }) as string[]).map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  className="timeline-item"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="timeline-check">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Contact section component
const ContactSection: React.FC = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    company: '',
    employees: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [submitStatus, setSubmitStatus] = React.useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Here you would typically send the form data to your backend
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulated API call
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        company: '',
        employees: '',
        message: ''
      });
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {t('contact.title')}
        </motion.h2>
        <motion.p 
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {t('contact.subtitle')}
        </motion.p>

        <div className="contact-container">
          <motion.form 
            className="contact-form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="form-group">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder={t('contact.form.name')}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={t('contact.form.email')}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder={t('contact.form.company')}
                required
              />
            </div>
            <div className="form-group">
              <select
                name="employees"
                value={formData.employees}
                onChange={handleChange}
                required
              >
                <option value="">{t('contact.form.employees')}</option>
                <option value="1-10">{t('contact.employeeOptions.1-10')}</option>
                <option value="11-50">{t('contact.employeeOptions.11-50')}</option>
                <option value="51-200">{t('contact.employeeOptions.51-200')}</option>
                <option value="200+">{t('contact.employeeOptions.200+')}</option>
              </select>
            </div>
            <div className="form-group">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder={t('contact.form.message')}
                required
              />
            </div>
            <motion.button
              type="submit"
              className="btn btn-primary"
              disabled={isSubmitting}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isSubmitting ? t('contact.form.sending') : t('contact.form.submit')}
            </motion.button>
            {submitStatus === 'success' && (
              <motion.p 
                className="success-message"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {t('contact.form.success')}
              </motion.p>
            )}
            {submitStatus === 'error' && (
              <motion.p 
                className="error-message"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
              >
                {t('contact.form.error')}
              </motion.p>
            )}
          </motion.form>

          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3>{t('contact.info.title')}</h3>
            <p>{t('contact.info.subtitle')}</p>
            <ul className="benefits-list">
              {(t('contact.info.benefits', { returnObjects: true }) as string[]).map((benefit: string, index: number) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// CTA section component
const CTASection: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="cta">
      <div className="container">
        <motion.div 
          className="cta-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>{t('cta.title')}</h2>
          <p>{t('cta.description')}</p>
          <motion.button 
            className="btn btn-cta"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t('cta.button')}
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

// Footer component
const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p>{t('footer.copyright')}</p>
          <div className="footer-links">
            <a href="/privacy">{t('footer.privacy')}</a>
            <a href="/terms">{t('footer.terms')}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Main landing page component
const LandingPage: React.FC = () => {
  return (
    <>
      <Navigation />
      <HeroSection />
      <FeaturesSection />
      <SolutionsSection />
      <OnboardingSection />
      <ContactSection />
      <CTASection />
      <Footer />
    </>
  );
};

// Language wrapper component
const LanguageWrapper: React.FC = () => {
  const { lang } = useParams<{ lang: string }>();
  const { i18n } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    const supportedLangs = ['en', 'lv'];
    const currentLang = lang || 'en';
    
    if (!supportedLangs.includes(currentLang)) {
      navigate('/en');
      return;
    }
    
    if (i18n.language !== currentLang) {
      i18n.changeLanguage(currentLang);
    }
  }, [lang, i18n, navigate]);

  return <LandingPage />;
};

// Main App component with routing
const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/:lang" element={<LanguageWrapper />} />
        <Route path="/" element={<LanguageWrapper />} />
      </Routes>
    </Router>
  );
};

export default App;
