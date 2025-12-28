
import { Language, NavItem, Project } from './types';
import { Zap, Leaf, ShieldCheck, Anchor, Target, HardHat, Award, Users, Building2, Factory, Ship, ShieldAlert, HeartPulse, ClipboardCheck, GraduationCap } from 'lucide-react';

export const NAV_ITEMS: NavItem[] = [
  { label: { ar: 'الرئيسية', fr: 'Accueil', en: 'Home', es: 'Inicio' }, href: '#home' },
  { label: { ar: 'من نحن', fr: 'À Propos', en: 'About Us', es: 'Nosotros' }, href: '#about' },
  { label: { ar: 'خدماتنا', fr: 'Services', en: 'Services', es: 'Servicios' }, href: '#services' },
  { label: { ar: 'مشاريعنا', fr: 'Projets', en: 'Projects', es: 'Proyectos' }, href: '#projects' },
  { label: { ar: 'التوظيف', fr: 'Carrières', en: 'Careers', es: 'Carreras' }, href: '#careers' },
  { label: { ar: 'اتصل بنا', fr: 'Contact', en: 'Contact', es: 'Contacto' }, href: '#contact' },
];

export const BORA_ACHIEVEMENTS: Project[] = [
  { 
    id: 1, 
    title: { ar: 'توسعة ميناء الدار البيضاء', fr: 'Extension du Port de Casablanca', en: 'Casablanca Port Expansion', es: 'Expansión del Puerto de Casablanca' },
    img: 'https://fidxoclkjdjhmabssquu.supabase.co/storage/v1/object/sign/bora%20Org/boraconstruction_orig.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8xMWQxNmRkYi0yZTNhLTQyNWEtYWFlNy1hZjkxMjQ0YmU4MmUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJib3JhIE9yZy9ib3JhY29uc3RydWN0aW9uX29yaWcuanBnIiwiaWF0IjoxNzY2ODUxNzY4LCJleHAiOjE3Njg1Nzk3Njh9.X9PdwIZIzr-k-fjgUjTHOtW4xnK7E3ynC3hUfOXxnAg',
    category: 'Marine',
    client: { ar: 'الوكالة الوطنية للموانئ', fr: 'ANP Maroc', en: 'ANP Morocco', es: 'ANP Marruecos' },
    scope: { ar: 'هندسة بحرية وبناء أرصفة', fr: 'Génie maritime', en: 'Marine Engineering', es: 'Ingeniería Marítima' },
    year: '2023-2025',
    location: { ar: 'الدار البيضاء، المغرب', fr: 'Casablanca, Maroc', en: 'Casablanca, Morocco', es: 'Casablanca, Marruecos' },
    projectType: { ar: 'منشآت بحرية', fr: 'Infrastructures Maritimes', en: 'Maritime Infrastructure', es: 'Infraestructura Marítima' }
  },
  { 
    id: 2, 
    title: { ar: 'البنية التحتية للمنطقة الصناعية', fr: 'Infrastructure Zone Industrielle', en: 'Industrial Zone Infrastructure', es: 'Infraestructura de Zona Industrial' },
    img: 'https://fidxoclkjdjhmabssquu.supabase.co/storage/v1/object/sign/bora%20Org/boraconstruction.6_orig.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8xMWQxNmRkYi0yZTNhLTQyNWEtYWFlNy1hZjkxMjQ0YmU4MmUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJib3JhIE9yZy9ib3JhY29uc3RydWN0aW9uLjZfb3JpZy5qcGciLCJpYXQiOjE3NjY4NTE3ODQsImV4cCI6MTc2ODU3OTc4NH0.fC4V8m5t0zih3Il1IHQJl9grYYpB8CvF1vM6PiIyP9I',
    category: 'Industrial',
    client: { ar: 'وزارة الصناعة', fr: 'Ministère de l\'Industrie', en: 'Ministry of Industry', es: 'Ministerio de Industria' },
    scope: { ar: 'أعمال خرسانية ضخمة', fr: 'Gros œuvres béton', en: 'Mass Concrete Works', es: 'Obras de Hormigón' },
    year: '2022-2024',
    location: { ar: 'طنجة، المغرب', fr: 'Tanger, Maroc', en: 'Tangier, Morocco', es: 'Tánger, Marruecos' },
    projectType: { ar: 'منشآت صناعية', fr: 'Projet Industriel', en: 'Industrial Project', es: 'Proyecto Industrial' }
  },
  { 
    id: 3, 
    title: { ar: 'مركز الخدمات اللوجستية البحرية', fr: 'Hub Logistique Maritime', en: 'Maritime Logistics Hub', es: 'Centro de Logística Marítima' },
    img: 'https://fidxoclkjdjhmabssquu.supabase.co/storage/v1/object/sign/bora%20Org/boraconstruction2_orig.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8xMWQxNmRkYi0yZTNhLTQyNWEtYWFlNy1hZjkxMjQ0YmU4MmUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJib3JhIE9yZy9ib3JhY29uc3RydWN0aW9uMl9vcmlnLmpwZyIsImlhdCI6MTc2Njg1MTgwMywiZXhwIjoxNzY4NTc5ODAzfQ.y8lRtFUNoei_IfAIOU5cuYKQrRGTlalzxJy243XyGDU',
    category: 'Logistics',
    client: { ar: 'مجموعة لوجيستيك', fr: 'Groupe Logistique', en: 'Logistics Group', es: 'Grupo Logístico' },
    scope: { ar: 'هندسة مدنية ثقيلة', fr: 'Génie civil lourd', en: 'Heavy Civil Engineering', es: 'Ingeniería Civil Pesada' },
    year: '2021-2023',
    location: { ar: 'أكادير، المغرب', fr: 'Agadir, Maroc', en: 'Agadir, Morocco', es: 'Agadir, Marruecos' },
    projectType: { ar: 'مرافق استراتيجية', fr: 'Facilités Stratégiques', en: 'Strategic Facilities', es: 'Instalaciones Estratégicas' }
  },
  { 
    id: 4, 
    title: { ar: 'شبكة الجسور الاستراتيجية', fr: 'Réseau de Ponts Stratégiques', en: 'Strategic Bridge Network', es: 'Red de Puentes Estratégicos' },
    img: 'https://fidxoclkjdjhmabssquu.supabase.co/storage/v1/object/sign/bora%20Org/boraconstruction3.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8xMWQxNmRkYi0yZTNhLTQyNWEtYWFlNy1hZjkxMjQ0YmU4MmUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJib3JhIE9yZy9ib3JhY29uc3RydWN0aW9uMy5qcGciLCJpYXQiOjE3NjY4NTE4MTksImV4cCI6MTc2ODU3OTgxOX0.JwyClZG7Hkd7CqfsSOburTRWrVhSv8uZSD_515jqlQw',
    category: 'Infrastructure',
    client: { ar: 'الطرق السيارة للمغرب', fr: 'ADM Maroc', en: 'ADM Morocco', es: 'ADM Marruecos' },
    scope: { ar: 'منشآت فنية معقدة', fr: 'Ouvrages d\'art complexes', en: 'Complex Art Structures', es: 'Estructuras de Arte' },
    year: '2023-2025',
    location: { ar: 'الرباط، المغرب', fr: 'Rabat, Maroc', en: 'Rabat, Morocco', es: 'Rabat, Marruecos' },
    projectType: { ar: 'بنية تحتية وطنية', fr: 'Infrastructure Nationale', en: 'National Infrastructure', es: 'Infraestructura Nacional' }
  },
  { 
    id: 5, 
    title: { ar: 'أعمال حماية السواحل', fr: 'Travaux de Protection Littorale', en: 'Coastal Protection Works', es: 'Obras de Protección Costera' },
    img: 'https://fidxoclkjdjhmabssquu.supabase.co/storage/v1/object/sign/bora%20Org/boraconstruction4.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8xMWQxNmRkYi0yZTNhLTQyNWEtYWFlNy1hZjkxMjQ0YmU4MmUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJib3JhIE9yZy9ib3JhY29uc3RydWN0aW9uNC5qcGciLCJpYXQiOjE3NjY4NTE4MzQsImV4cCI6MTc2ODU3OTgzNH0.Ml7Z4ZUjAkETxpL-WzsYvsfU6JUFpe2SMbrOwnOJuCI',
    category: 'Marine',
    client: { ar: 'وكالة تهيئة الساحل', fr: 'Agence de l\'Aménagement', en: 'Coastal Agency', es: 'Agencia Costera' },
    scope: { ar: 'هندسة حماية البيئة', fr: 'Protection environnementale', en: 'Environmental Protection', es: 'Protección Ambiental' },
    year: '2024-2026',
    location: { ar: 'الناظور، المغرب', fr: 'Nador, Maroc', en: 'Nador, Morocco', es: 'Nador, Marruecos' },
    projectType: { ar: 'منشآت بحرية', fr: 'Ouvrages Maritimes', en: 'Marine Structures', es: 'Obras Marítimas' }
  },
  { 
    id: 6, 
    title: { ar: 'مشروع توسعة الطريق السيار', fr: 'Élargissement de l\'Autoroute', en: 'Highway Extension Project', es: 'Proyecto de Extensión de Autopista' },
    img: 'https://fidxoclkjdjhmabssquu.supabase.co/storage/v1/object/sign/bora%20Org/boraconstruction5_orig.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8xMWQxNmRkYi0yZTNhLTQyNWEtYWFlNy1hZjkxMjQ0YmU4MmUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJib3JhIE9yZy9ib3JhY29uc3RydWN0aW9uNV9vcmlnLmpwZyIsImlhdCI6MTc2Njg1MTg1MCwiZXhwIjoxNzY4NTc5ODUwfQ._Nevbi-rgLKzIo-1G9H0z34bM4Bk9ekYWWQbTWG3Xe0',
    category: 'Infrastructure',
    client: { ar: 'وزارة النقل', fr: 'Ministère du Transport', en: 'Ministry of Transport', es: 'Ministerio de Transporte' },
    scope: { ar: 'أعمال ترابية وخراسانية', fr: 'Terrassement et béton', en: 'Earthworks & Concrete', es: 'Movimiento de Tierras' },
    year: '2022-2024',
    location: { ar: 'القنيطرة، المغرب', fr: 'Kénitra, Maroc', en: 'Kenitra, Morocco', es: 'Kenitra, Marruecos' },
    projectType: { ar: 'بنية تحتية نقل', fr: 'Infrastructure Transport', en: 'Transport Infrastructure', es: 'Infraestructura de Transporte' }
  },
  { 
    id: 7, 
    title: { ar: 'التميز في الأساسات الخرسانية', fr: 'Excellence en Fondations', en: 'Concrete Foundations Excellence', es: 'Excelencia en Cimientos' },
    img: 'https://fidxoclkjdjhmabssquu.supabase.co/storage/v1/object/sign/bora%20Org/boraconstruction7_orig.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8xMWQxNmRkYi0yZTNhLTQyNWEtYWFlNy1hZjkxMjQ0YmU4MmUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJib3JhIE9yZy9ib3JhY29uc3RydWN0aW9uN19vcmlnLmpwZyIsImlhdCI6MTc2Njg1MTg2NywiZXhwIjoxNzY4NTc5ODY3fQ.mJQoXOaLsnCgJnBke4AYEc4K1lccj8ZpfLq4TDfLFas',
    category: 'Civil',
    client: { ar: 'وكالة التعمير', fr: 'Agence Urbaine', en: 'Urban Agency', es: 'Agencia Urbana' },
    scope: { ar: 'أساسات عميقة وخاصة', fr: 'Fondations spéciales', en: 'Special Foundations', es: 'Cimientos Especiales' },
    year: '2021-2022',
    location: { ar: 'الدار البيضاء، المغرب', fr: 'Casablanca, Maroc', en: 'Casablanca, Morocco', es: 'Casablanca, Marruecos' },
    projectType: { ar: 'هندسة مدنية', fr: 'Génie Civil', en: 'Civil Engineering', es: 'Ingeniería Civil' }
  },
  { 
    id: 8, 
    title: { ar: 'تطوير الواجهة البحرية', fr: 'Développement du Front de Mer', en: 'Waterfront Development', es: 'Desarrollo del Frente Marítimo' },
    img: 'https://fidxoclkjdjhmabssquu.supabase.co/storage/v1/object/sign/bora%20Org/boraconstruction8_orig.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8xMWQxNmRkYi0yZTNhLTQyNWEtYWFlNy1hZjkxMjQ0YmU4MmUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJib3JhIE9yZy9ib3JhY29uc3RydWN0aW9uOF9vcmlnLmpwZyIsImlhdCI6MTc2Njg1MTg4MiwiZXhwIjoxNzY4NTc5ODgyfQ.4D1glApheW8rnRr0KOqBx5KoGgmuoAx3jviPmjCmO7A',
    category: 'Urban',
    client: { ar: 'مجلس المدينة', fr: 'Conseil de la Ville', en: 'City Council', es: 'Consejo de la Ciudad' },
    scope: { ar: 'هندسة معمارية وبناء', fr: 'Architecture et construction', en: 'Arch & Construction', es: 'Arquitectura' },
    year: '2024-2027',
    location: { ar: 'طنجة، المغرب', fr: 'Tanger, Maroc', en: 'Tangier, Morocco', es: 'Tánger, Marruecos' },
    projectType: { ar: 'تطوير حضري', fr: 'Développement Urbain', en: 'Urban Development', es: 'Desarrollo Urbano' }
  },
  { 
    id: 9, 
    title: { ar: 'المجمع الإداري الحديث', fr: 'Complexe Administratif Moderne', en: 'Modern Administrative Complex', es: 'Complejo Administrativo Moderno' },
    img: 'https://fidxoclkjdjhmabssquu.supabase.co/storage/v1/object/sign/bora%20Org/boraconstruction9_orig.jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8xMWQxNmRkYi0yZTNhLTQyNWEtYWFlNy1hZjkxMjQ0YmU4MmUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJib3JhIE9yZy9ib3JhY29uc3RydWN0aW9uOV9vcmlnLmpwZyIsImlhdCI6MTc2Njg1MTg5OCwiZXhwIjoxNzY4NTc5ODk4fQ.jPu9a48J1PiYEyeci5425Uj7yIdP9XXJz67lunBc1N8',
    category: 'Civil',
    client: { ar: 'القطاع الخاص', fr: 'Secteur Privé', en: 'Private Sector', es: 'Sector Privado' },
    scope: { ar: 'هندسة أبراج ومكاتب', fr: 'Immeubles de bureaux', en: 'Office Buildings', es: 'Edificios de Oficinas' },
    year: '2023-2025',
    location: { ar: 'الرباط، المغرب', fr: 'Rabat, Maroc', en: 'Rabat, Morocco', es: 'Rabat, Marruecos' },
    projectType: { ar: 'بناء تجاري', fr: 'Bâtiment Commercial', en: 'Commercial Building', es: 'Construcción Comercial' }
  }
];

export const STRINGS = {
  heroTitle: {
    ar: 'إتقان هندسي بلا حدود',
    fr: 'Maîtrise de l\'Ingénierية Sans Limites',
    en: 'Engineering Mastery Without Limits',
    es: 'Maestría en Ingeniería Sin Límites'
  },
  heroSubtitle: {
    ar: 'نحن في بورا كونستراكشن نحول المخططات الهندسية المعقدة إلى واقع ملموس يخدم التنمية المستدامة في المملكة.',
    fr: 'Chez BORA Construction, nous transformons les plans complexes en réalités tangibles pour le développement durable du Royaume.',
    en: 'At BORA Construction, we transform complex blueprints into tangible realities serving the Kingdom\'s sustainable development.',
    es: 'En BORA Construction, transformamos planos complejos en realidades tangibles al servicio del desarrollo sostenible del Reino.'
  },
  aboutTitle: {
    ar: 'عقود من الريادة في البنية التحتية الاستراتيجية',
    fr: 'Décennies de Leadership en Infrastructures Stratégiques',
    en: 'Decades of Leadership in Strategic Infrastructure',
    es: 'Décadas de Liderazgo en Infraestructuras Estratégicas'
  },
  aboutDetailed: {
    mission: {
      ar: 'مهمتنا هي أن نكون الخيار الأول والآمن لعملائنا في تنفيذ مشاريع البنية التحتية البحرية والمدنية الثقيلة.',
      fr: 'Notre mission est d\'être le premier choix sécurisé pour nos clients.',
      en: 'Our mission is to be the premier, safe choice for our clients.',
      es: 'Nuestra misión es ser la primera opción segura para nuestros clientes.'
    },
    expertiseTitle: { ar: 'تخصصنا الدقيق', fr: 'Notre Expertise', en: 'Specialized Expertise', es: 'Experticia' },
    expertiseDesc: { ar: 'نحن متخصصون في المنشآت الخرسانية الضخمة.', fr: 'Spécialistes des ouvrages en béton.', en: 'Specialized in concrete structures.', es: 'Expertos en hormigón.' }
  },
  servicesTitle: { ar: 'خدماتنا الهندسية', fr: 'Nos Services', en: 'Engineering Services', es: 'Servicios' },
  projectsTitle: { ar: 'محفظة المشاريع', fr: 'Portefeuille de Projets', en: 'Project Portfolio', es: 'Proyectos' },
  careersTitle: { ar: 'التوظيف', fr: 'Carrières', en: 'Careers', es: 'Carreras' },
  contactTitle: { ar: 'اتصل بنا', fr: 'Contact', en: 'Contact', es: 'Contacto' },
  footerMission: {
    ar: 'نحن نبني المستقبل بمعايير مغربية وروح عالمية.',
    fr: 'Nous construisons l\'avenir avec des normes marocaines.',
    en: 'We build the future with Moroccan standards.',
    es: 'Construimos el futuro con estándares marroquíes.'
  },
  stats: {
    built: { ar: 'م² من البناء', fr: 'm² Construits', en: 'm² Built', es: 'm² Construidos' },
    safety: { ar: 'ساعة عمل آمنة', fr: 'Heures Sécurisées', en: 'Safe Hours', es: 'Horas Seguras' },
    projects: { ar: 'مشروعاً مكتملاً', fr: 'Projets Achevés', en: 'Completed Projects', es: 'Proyectos Completados' }
  },
  ui: {
    explore: { ar: 'استكشف مشاريعنا', fr: 'Explorer', en: 'Explore', es: 'Explorar' },
    learnMore: { ar: 'تعرف على المزيد', fr: 'En savoir plus', en: 'Learn More', es: 'Saber más' },
    hideDetails: { ar: 'إخفاء التفاصيل', fr: 'Masquer', en: 'Hide Details', es: 'Ocultار' },
    joinUs: { ar: 'انضم إلينا الآن', fr: 'Rejoignez-nous', en: 'Join Us', es: 'Únete' },
    send: { ar: 'إرسال', fr: 'Envoyer', en: 'Send', es: 'Enviar' },
    namePlaceholder: { ar: 'الاسم بالكامل', fr: 'Nom Complet', en: 'Full Name', es: 'Nombre' },
    emailPlaceholder: { ar: 'البريد الإلكتروني', fr: 'E-mail', en: 'Email', es: 'Email' },
    phonePlaceholder: { ar: 'رقم الهاتف', fr: 'Téléphone', en: 'Phone', es: 'Teléfono' },
    companyPlaceholder: { ar: 'المؤسسة', fr: 'Entreprise', en: 'Company', es: 'Empresa' },
    messagePlaceholder: { ar: 'رسالتك...', fr: 'Votre message...', en: 'Message...', es: 'Mensaje...' },
    directMessage: { ar: 'راسلنا مباشرة', fr: 'Message Direct', en: 'Direct Message', es: 'Mensaje Directo' },
    location: { ar: 'الدار البيضاء، المغرب', fr: 'Casablanca Finance City, Maroc', en: 'Casablanca Finance City, Morocco', es: 'Casablanca Finance City, Marruecos' },
    valuesTitle: { ar: 'قيمنا الأساسية', fr: 'Nos Valeurs', en: 'Our Core Values', es: 'Valores' },
    investInMinds: { ar: 'نستثمر في العقول', fr: 'Investir dans l\'Esprit', en: 'Investing in Minds', es: 'Invertير en Mentes' },
    investInMindsDesc: { ar: 'بورا هي بيئة عمل تهدف للإبداع والنمو.', fr: 'BORA est un milieu de croissance.', en: 'BORA is an environment for growth.', es: 'BORA es un entorno de crecimiento.' },
    projectType: { ar: 'مشروع استراتيجي', fr: 'Projet Stratégique', en: 'Strategic Project', es: 'Proyecto Estratégico' },
    newsletterTitle: { ar: 'مقرنا الرئيسي', fr: 'Siège Social', en: 'Global HQ', es: 'Sede' },
    newsletterDesc: { ar: 'تفضل بزيارة مكاتبنا في القطب المالي.', fr: 'Visitez nos bureaux au CFC.', en: 'Visit our CFC offices.', es: 'Visite nuestras oficinas.' },
    hours: { ar: 'ساعات العمل', fr: 'Heures d\'ouverture', en: 'Working Hours', es: 'Horas' },
    workingDays: { ar: 'الإثنين - الجمعة: 08:30 - 18:30', fr: 'Lun - Ven : 08:30 - 18:30', en: 'Mon - Fri: 08:30 - 18:30', es: 'Lun - Vie: 08:30 - 18:30' },
    quickLinks: { ar: 'روابط سريعة', fr: 'Liens Rapides', en: 'Quick Links', es: 'Enlaces' },
    directions: { ar: 'الاتجاهات', fr: 'Itinéraire', en: 'Directions', es: 'Rutas' },
    privacy: { ar: 'الخصوصية', fr: 'Confidentialité', en: 'Privacy', es: 'Privacidad' },
    cookies: { ar: 'الكوكيز', fr: 'Cookies', en: 'Cookies', es: 'Cookies' },
    cookieTitle: { ar: 'ملفات تعريف الارتباط', fr: 'Politique Cookies', en: 'Cookie Policy', es: 'Cookies' },
    cookieText: { ar: 'نحن نستخدم الكوكيز لتحسين تجربتك.', fr: 'Nous utilisons des cookies.', en: 'We use cookies.', es: 'Usamos cookies.' },
    accept: { ar: 'قبول', fr: 'Accepter', en: 'Accept', es: 'Aceptar' },
    decline: { ar: 'رفض', fr: 'Refuser', en: 'Decline', es: 'Rechazar' },
    backToProjects: { ar: 'العودة', fr: 'Retour', en: 'Back', es: 'Volver' },
    prevProject: { ar: 'السابق', fr: 'Précédent', en: 'Previous', es: 'Previo' },
    nextProject: { ar: 'التالي', fr: 'Suivant', en: 'Next', es: 'Siguiente' },
    safetyPageTitle: { ar: 'ميثاق السلامة HMS', fr: 'Charte de Sécurité HMS', en: 'HMS Safety Charter', es: 'Carta de Seguridad HMS' },
    safetyBtn: { ar: 'السلامة', fr: 'Sécurité', en: 'Safety', es: 'Seguridad' },
    safetyTitle: { ar: 'التزامنا بالسلامة', fr: 'Engagement de Sécurité', en: 'Safety Commitment', es: 'Compromiso de Seguridad' },
    copyrightText: {
      ar: '© 2025 مجموعة بورا للمقاولات. جميع الحقوق محفوظة.',
      fr: '© 2025 Groupe BORA Construction. Tous droits réservés.',
      en: '© 2025 BORA Construction Group. All rights reserved.',
      es: '© 2025 Grupo BORA Construction. Reservados todos los derechos.'
    }
  },
  safetyPledge: {
    ar: 'السلامة في بورا ليست مجرد إجراء، بل هي ثقافة تضمن بيئة عمل خالية من الحوادث.',
    fr: 'La sécurité chez BORA est une culture.',
    en: 'Safety at BORA is a fundamental culture.',
    es: 'La seguridad en BORA es una culture.'
  },
  safetyContent: {
    title: { ar: 'التزامنا بالسلامة الصارمة', fr: 'Engagement de Sécurité', en: 'Commitment to Safety', es: 'Compromiso de Seguridad' },
    intro: { 
        ar: 'في بورا كونستراكشن، تعتبر السلامة والصحة المهنية (HSE) القيمة الأساسية التي تسبق كل شيء. نحن نطبق نظام إدارة HMS متكامل يهدف إلى تحقيق "الرؤية الصفرية" للحوادث.',
        fr: 'Chez BORA, la sécurité passe avant tout. Nous visons le Zéro Accident.',
        en: 'At BORA Construction, HSE is the core value above all else. We aim for Zero Vision.',
        es: 'En BORA, la seguridad es lo primero. Nuestro objetivo es Cero Accidentes.'
    },
    pillars: [
        { 
            title: { ar: 'الرؤية الصفرية', fr: 'Vision Zéro', en: 'Vision Zero', es: 'Visión Cero' },
            desc: { ar: 'لا يوجد عمل مهم لدرجة تعريض حياة الفريق للخطر.', fr: 'Aucun travail ne justifie le risque.', en: 'No job is worth a human life.', es: 'Ningún trabajo justifica el riesgo.' },
            icon: ShieldAlert
        },
        { 
            title: { ar: 'تدقيق يومي', fr: 'Audit Quotidien', en: 'Daily Audits', es: 'Auditoría Diaria' },
            desc: { ar: 'فحص دوري لكل المعدات ومواقع العمل لضمان الامتثال.', fr: 'Contرôle continu de l\'équipement.', en: 'Continuous checking of all equipment.', es: 'Control continuo de equipos.' },
            icon: ClipboardCheck
        },
        { 
            title: { ar: 'التدريب المستمر', fr: 'Formation Continue', en: 'Constant Training', es: 'Formación Continue' },
            desc: { ar: 'تأهيل كل فرد من أفراد الطاقم على أحدث بروتوكولات الأمان.', fr: 'Formation aux protocoles.', en: 'Advanced safety protocol training.', es: 'Formación en protocolos.' },
            icon: GraduationCap
        },
        { 
            title: { ar: 'صحة الطاقم', fr: 'Santé des Équipes', en: 'Health & Wellness', es: 'Salud del Equipo' },
            desc: { ar: 'الاهتمام بالرفاهية النفسية والبدنية لفرق العمل الميدانية.', fr: 'Bien-être des équipes.', en: 'Caring for our team\'s wellbeing.', es: 'Bienestar de los equipos.' },
            icon: HeartPulse
        }
    ]
  },
  privacyPolicy: {
    title: { ar: 'سياسة الخصوصية', fr: 'Politique de Confidentialité', en: 'Privacy Policy', es: 'Política de Privacidad' },
    content: { 
      ar: 'نحن نلتزم بحماية بياناتك الشخصية وفقاً للمعايير المعمول بها.', 
      fr: 'Nous nous engageons à protéger vos données personnelles.', 
      en: 'We are committed to protecting your personal data.', 
      es: 'Nos comprometemos a proteger sus datos personales.' 
    }
  },
  cookiesPolicy: {
    title: { ar: 'سياسة ملفات تعريف الارتباط', fr: 'Politique des Cookies', en: 'Cookies Policy', es: 'Política de Cookies' },
    content: { 
      ar: 'نستخدم ملفات تعريف الارتباط لتحسين تجربة المستخدم على موقعنا.', 
      fr: 'Nous utilisons des cookies pour améliorer votre expérience.', 
      en: 'We use cookies to improve your user experience.', 
      es: 'Utilizamos cookies para mejorar su experiencia de usuario.' 
    }
  },
  values: [
    {
      id: 'innovation',
      title: { ar: 'الابتكار التقني', fr: 'Innovation Technique', en: 'Technical Innovation', es: 'Innovación Técnica' },
      desc: { ar: 'نستخدم أحدث تقنيات BIM ونماذج الـ 3D لضمان الدقة.', fr: 'Nous utilisons les technologies BIM.', en: 'We use the latest BIM technologies.', es: 'Usamos tecnologías BIM.' },
      image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80',
      icon: Zap
    }
  ],
  services: [
    { 
      id: 'civil',
      title: "Civil", 
      icon: Building2,
      desc: { ar: 'نبني الأبراج السكنية والمراكز المالية.', fr: 'Construction résidentielle.', en: 'Residential construction.', es: 'Construcción residencial.' },
      features: {
        ar: ['بناء ناطحات السحاب', 'المراكز المالية'],
        en: ['Skyscraper Construction', 'Financial Centers']
      }
    }
  ],
  sectors: [
    { 
      title: { ar: 'المنشآت البحرية', fr: 'Ouvrages Maritimes', en: 'Marine Structures', es: 'Obras Marítimas' }, 
      desc: { ar: 'هندسة الموانئ وحواجز الأمواج.', fr: 'Génie portuaire.', en: 'Port engineering.', es: 'Ingeniería portuaria.' },
      icon: Anchor
    },
    { 
      title: { ar: 'البنية التحتية', fr: 'Infrastructures', en: 'Infrastructure', es: 'Infraestructura' }, 
      desc: { ar: 'بناء الجسور والطرق الاستراتيجية.', fr: 'Ponts et routes.', en: 'Bridges and roads.', es: 'Puentes y carreteras.' },
      icon: HardHat
    }
  ]
};
