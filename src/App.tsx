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
          <div className="logo">NumiFlow</div>
          <ul className="nav-menu">
            <li><a href="#features" className="nav-link">{t('nav.features')}</a></li>
            <li><a href="#solutions" className="nav-link">{t('nav.solutions')}</a></li>
            <li><a href="#pricing" className="nav-link">{t('nav.pricing')}</a></li>
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
      icon: '🤖',
    },
    {
      key: 'aiCopilot',
      icon: '💡',
    },
    {
      key: 'accountsPayable',
      icon: '📄',
    },
    {
      key: 'bankReconciliation',
      icon: '🏦',
    },
    {
      key: 'duplicateDetection',
      icon: '🔍',
    },
    {
      key: 'approvalWorkflows',
      icon: '✅',
    },
    {
      key: 'accountsReceivable',
      icon: '💳',
    },
    {
      key: 'insightsAnalytics',
      icon: '📊',
    },
    {
      key: 'documentManagement',
      icon: '📁',
    },
    {
      key: 'periodClosing',
      icon: '📅',
    },
    {
      key: 'apiIntegration',
      icon: '🔗',
    },
    {
      key: 'compliance',
      icon: '🛡️',
    },
  ];

  return (
    <section id="features" className="features">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {t('features.title')}
        </motion.h2>
        <div className="features-grid">
          {features.map((feature, index) => (
            <motion.div
              key={feature.key}
              className="feature-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="feature-icon">{feature.icon}</div>
              <h3>{t(`features.${feature.key}.title`)}</h3>
              <p>{t(`features.${feature.key}.description`)}</p>
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
    { key: 'accountants', icon: '👨‍💼' },
    { key: 'financeTeam', icon: '📊' },
    { key: 'auditors', icon: '🔎' },
  ];

  const sizeSolutions = [
    { key: 'smallCompany', icon: '🏢' },
    { key: 'mediumCompany', icon: '🏭' },
    { key: 'largeCompany', icon: '🏬' },
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
          style={{ textAlign: 'center', marginBottom: '1.5rem', fontSize: '1.75rem', color: 'var(--color-eminence)', fontWeight: '700' }}
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
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{solution.icon}</div>
              <h3>{t(`solutions.${solution.key}.title`)}</h3>
              <p>{t(`solutions.${solution.key}.description`)}</p>
            </motion.div>
          ))}
        </div>

        <motion.h3 
          style={{ textAlign: 'center', margin: '4rem 0 1.5rem', fontSize: '1.75rem', color: 'var(--color-eminence)', fontWeight: '700' }}
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
              <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{solution.icon}</div>
              <h3>{t(`solutions.${solution.key}.title`)}</h3>
              <p>{t(`solutions.${solution.key}.description`)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Pricing section component
const PricingSection: React.FC = () => {
  const { t } = useTranslation();
  const [isAnnual, setIsAnnual] = React.useState(true);

  const plans = [
    {
      key: 'starter',
      popular: false,
    },
    {
      key: 'professional',
      popular: true,
    },
    {
      key: 'enterprise',
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="pricing">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {t('pricing.title')}
        </motion.h2>
        <motion.p 
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {t('pricing.subtitle')}
        </motion.p>

        <div className="pricing-toggle">
          <button 
            className={!isAnnual ? 'active' : ''} 
            onClick={() => setIsAnnual(false)}
          >
            {t('pricing.monthly')}
          </button>
          <button 
            className={isAnnual ? 'active' : ''} 
            onClick={() => setIsAnnual(true)}
          >
            {t('pricing.annually')}
            <span className="save-badge">{t('pricing.save')}</span>
          </button>
        </div>

        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.key}
              className={`pricing-card ${plan.popular ? 'popular' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              {plan.popular && <div className="popular-badge">{t('pricing.popular')}</div>}
              <h3>{t(`pricing.${plan.key}.name`)}</h3>
              <div className="price">
                <span className="amount">{t(`pricing.${plan.key}.price`)}</span>
                <span className="period">{t(`pricing.${plan.key}.period`)}</span>
              </div>
              <p className="description">{t(`pricing.${plan.key}.description`)}</p>
              <ul className="features-list">
                {(t(`pricing.${plan.key}.features`, { returnObjects: true }) as string[]).map((feature: string, i: number) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
              <motion.a
                href="#contact"
                className="btn btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {t(`pricing.${plan.key}.cta`)}
              </motion.a>
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
            <h3>{t('onboarding.foundation.title')}</h3>
            <ul className="timeline-list">
              {(t('onboarding.foundation.items', { returnObjects: true }) as string[]).map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  viewport={{ once: true }}
                >
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
            <h3>{t('onboarding.validation.title')}</h3>
            <ul className="timeline-list">
              {(t('onboarding.validation.items', { returnObjects: true }) as string[]).map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  viewport={{ once: true }}
                >
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
      <PricingSection />
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
