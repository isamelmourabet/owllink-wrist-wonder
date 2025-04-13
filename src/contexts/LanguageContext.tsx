
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'es';

interface LanguageContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    'nav.features': 'Features',
    'nav.products': 'Products',
    'nav.medical': 'Medical',
    'nav.contact': 'Contact',
    'nav.earlyAccess': 'Get Early Access',
    
    // Hero section
    'hero.tagline': 'Pioneering Medical Wearables',
    'hero.title': 'Intelligent Health Monitoring at Your Wrist',
    'hero.description': 'Owllink\'s smart wrist bands and watches provide continuous health monitoring with medical-grade accuracy, helping patients and healthcare providers track vital signs in real-time.',
    'hero.cta.earlyAccess': 'Get Early Access',
    'hero.cta.viewProducts': 'View Products',
    
    // Features section
    'features.title': 'Advanced Health Monitoring Features',
    'features.subtitle': 'Our wearable devices come equipped with cutting-edge sensors and technology to provide accurate, real-time health data.',
    'features.heartRate.title': 'Heart Rate Monitoring',
    'features.heartRate.description': 'Continuous heart rate tracking with medical-grade accuracy and abnormality alerts.',
    'features.battery.title': 'Long Battery Life',
    'features.battery.description': 'Up to 7 days of continuous use on a single charge with power-saving modes.',
    'features.alerts.title': 'Real-time Alerts',
    'features.alerts.description': 'Immediate notifications for critical health changes sent to you and your healthcare provider.',
    'features.sleep.title': 'Sleep Analysis',
    'features.sleep.description': 'Comprehensive sleep tracking with detailed insights on sleep quality and patterns.',
    
    // Products section
    'products.title': 'Our Revolutionary Devices',
    'products.subtitle': 'Choose the perfect Owllink device to suit your specific medical monitoring needs.',
    
    // Medical section
    'medical.title': 'Medical Applications',
    'medical.subtitle': 'Owllink\'s wearable technology is designed for a wide range of medical applications.',
    
    // Testimonials section
    'testimonials.title': 'Trusted by Medical Professionals',
    'testimonials.subtitle': 'See what healthcare providers and patients are saying about Owllink\'s medical wearables.',
    
    // Contact section
    'contact.title': 'Get in Touch',
    'contact.description': 'Interested in Owllink for your medical practice or personal health monitoring? Reach out to our team for more information.',
    'contact.form.title': 'Send Us a Message',
    
    // CTA section
    'cta.title': 'Join Our Early Access Program',
    'cta.description': 'Be among the first to experience Owllink\'s revolutionary medical wearables and help shape the future of remote health monitoring.',
    'cta.button': 'Get Early Access',
    
    // Footer
    'footer.copyright': '© 2025 Owllink Medical Technologies. All rights reserved.',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.cookies': 'Cookie Policy',
  },
  es: {
    // Navigation
    'nav.features': 'Características',
    'nav.products': 'Productos',
    'nav.medical': 'Médico',
    'nav.contact': 'Contacto',
    'nav.earlyAccess': 'Acceso Anticipado',
    
    // Hero section
    'hero.tagline': 'Pioneros en Dispositivos Médicos Portátiles',
    'hero.title': 'Monitoreo Inteligente de Salud en tu Muñeca',
    'hero.description': 'Las pulseras y relojes inteligentes de Owllink proporcionan monitoreo continuo de salud con precisión médica, ayudando a pacientes y proveedores de atención médica a seguir los signos vitales en tiempo real.',
    'hero.cta.earlyAccess': 'Acceso Anticipado',
    'hero.cta.viewProducts': 'Ver Productos',
    
    // Features section
    'features.title': 'Características Avanzadas de Monitoreo de Salud',
    'features.subtitle': 'Nuestros dispositivos portátiles están equipados con sensores y tecnología de vanguardia para proporcionar datos de salud precisos en tiempo real.',
    'features.heartRate.title': 'Monitoreo de Ritmo Cardíaco',
    'features.heartRate.description': 'Seguimiento continuo del ritmo cardíaco con precisión médica y alertas de anomalías.',
    'features.battery.title': 'Larga Duración de Batería',
    'features.battery.description': 'Hasta 7 días de uso continuo con una sola carga con modos de ahorro de energía.',
    'features.alerts.title': 'Alertas en Tiempo Real',
    'features.alerts.description': 'Notificaciones inmediatas de cambios críticos de salud enviadas a ti y a tu proveedor de atención médica.',
    'features.sleep.title': 'Análisis del Sueño',
    'features.sleep.description': 'Seguimiento completo del sueño con información detallada sobre la calidad y los patrones del sueño.',
    
    // Products section
    'products.title': 'Nuestros Dispositivos Revolucionarios',
    'products.subtitle': 'Elige el dispositivo Owllink perfecto para satisfacer tus necesidades específicas de monitoreo médico.',
    
    // Medical section
    'medical.title': 'Aplicaciones Médicas',
    'medical.subtitle': 'La tecnología portátil de Owllink está diseñada para una amplia gama de aplicaciones médicas.',
    
    // Testimonials section
    'testimonials.title': 'Confiado por Profesionales Médicos',
    'testimonials.subtitle': 'Mira lo que los proveedores de atención médica y los pacientes dicen sobre los dispositivos médicos portátiles de Owllink.',
    
    // Contact section
    'contact.title': 'Ponte en Contacto',
    'contact.description': '¿Interesado en Owllink para tu práctica médica o monitoreo de salud personal? Comunícate con nuestro equipo para obtener más información.',
    'contact.form.title': 'Envíanos un Mensaje',
    
    // CTA section
    'cta.title': 'Únete a Nuestro Programa de Acceso Anticipado',
    'cta.description': 'Sé uno de los primeros en experimentar los revolucionarios dispositivos médicos portátiles de Owllink y ayuda a dar forma al futuro del monitoreo remoto de salud.',
    'cta.button': 'Acceso Anticipado',
    
    // Footer
    'footer.copyright': '© 2025 Owllink Medical Technologies. Todos los derechos reservados.',
    'footer.privacy': 'Política de Privacidad',
    'footer.terms': 'Términos de Servicio',
    'footer.cookies': 'Política de Cookies',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
