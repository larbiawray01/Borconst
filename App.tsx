
import React, { useState, useEffect, useRef, useMemo } from 'react';
import { 
  Globe, 
  HardHat, 
  Users, 
  MessageSquare, 
  ArrowRight,
  Menu,
  X,
  Settings,
  MapPin,
  Briefcase,
  ChevronRight,
  ChevronLeft,
  Award,
  Zap,
  TrendingUp,
  Layers,
  Rocket,
  SearchCode,
  CheckCircle,
  ArrowUpRight,
  Phone,
  Mail,
  Cpu,
  Leaf,
  Users2,
  HelpCircle,
  ShieldCheck,
  Star,
  Quote,
  Anchor,
  Sun,
  Facebook,
  Linkedin,
  Instagram,
  ArrowUp,
  Clock,
  Navigation,
  ExternalLink,
  Shield,
  Info,
  Lock,
  Cookie,
  Target,
  Waves,
  History,
  GraduationCap,
  Building,
  ArrowLeft,
  Filter,
  SortAsc,
  SortDesc,
  ShieldAlert,
  ClipboardCheck,
  HeartPulse
} from 'lucide-react';
import { Language, PublicSubPage, ViewType, Project } from './types';
import { NAV_ITEMS, STRINGS, BORA_ACHIEVEMENTS } from './constants';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  direction?: 'up' | 'left' | 'right';
  delay?: number;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children, className = "", direction = 'up', delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) setIsVisible(true);
      });
    }, { threshold: 0.1 });
    if (domRef.current) observer.observe(domRef.current);
    return () => {
      if (domRef.current) observer.unobserve(domRef.current);
    };
  }, []);

  const getTransform = () => {
    if (isVisible) return 'translate(0, 0) opacity-100 scale-100';
    switch (direction) {
      case 'up': return 'translateY(20px) opacity-0 scale-95';
      case 'left': return 'translateX(-20px) opacity-0 scale-95';
      case 'right': return 'translateX(20px) opacity-0 scale-95';
      default: return 'translateY(20px) opacity-0';
    }
  };

  return (
    <div 
      ref={domRef} 
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 cubic-bezier(0.2, 0.8, 0.2, 1) transform ${getTransform()} ${className}`}
    >
      {children}
    </div>
  );
};

const BoraImage: React.FC<{ src: string; alt: string; className?: string; containerClass?: string }> = ({ src, alt, className = "", containerClass = "" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) setIsVisible(true);
      });
    }, { threshold: 0.1 });
    if (imgRef.current) observer.observe(imgRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={imgRef} className={`overflow-hidden ${containerClass}`}>
      <img 
        src={src} 
        alt={alt} 
        className={`w-full h-full object-cover transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 scale-100 blur-0' : 'opacity-0 scale-110 blur-sm'} ${className}`} 
      />
    </div>
  );
};

const PageHeader: React.FC<{ title: string; subtitle?: string; bgImage: string; lang: Language }> = ({ title, subtitle, bgImage, lang }) => (
  <section className="relative h-[60vh] lg:h-[70vh] flex items-center overflow-hidden bg-[#050a1a]">
    <div className="absolute inset-0 bg-gradient-to-t from-[#050a1a] via-[#050a1a]/60 to-[#050a1a]/20 z-10"></div>
    <BoraImage src={bgImage} alt={title} className="grayscale opacity-80" containerClass="absolute inset-0 w-full h-full" />
    <div className="relative max-w-7xl mx-auto px-4 lg:px-8 w-full z-20">
      <AnimatedSection direction="up" className="max-w-4xl">
        <h1 className="text-5xl md:text-7xl lg:text-9xl font-black text-white leading-tight uppercase tracking-tighter drop-shadow-2xl mb-6">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-xl lg:text-2xl text-red-500 font-black uppercase tracking-widest border-r-4 border-red-600 pr-6 mr-2 ltr:border-r-0 ltr:border-l-4 ltr:pl-6 ltr:ml-2 rtl:border-r-4 rtl:pr-6">
            {subtitle}
          </p>
        )}
      </AnimatedSection>
    </div>
  </section>
);

const BoraLogo: React.FC<{ light?: boolean; className?: string }> = ({ light, className = "h-20 lg:h-32" }) => (
  <div className={`flex items-center ${className} group cursor-pointer transition-transform hover:scale-105`}>
    <img 
      src="https://fidxoclkjdjhmabssquu.supabase.co/storage/v1/object/sign/bora%20Org/LOGOboraconstruction2.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV8xMWQxNmRkYi0yZTNhLTQyNWEtYWFlNy1hZjkxMjQ0YmU4MmUiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJib3JhIE9yZy9MT0dPYm9yYWNvbnN0cnVjdGlvbjIucG5nIiwiaWF0IjoxNzY2ODUxOTU1LCJleHAiOjE3Njg3NTI3NTV9._qvM0kurfDQwX-ziO-YPftZqXkMyFVLN7YkylctZAjQ" 
      alt="BORA Construction Logo" 
      className="h-full w-auto object-contain"
    />
  </div>
);

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>(Language.AR);
  const [view, setView] = useState<ViewType>('public');
  const [subPage, setSubPage] = useState<PublicSubPage>('home');
  const [selectedProjectId, setSelectedProjectId] = useState<number | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showCookieBanner, setShowCookieBanner] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handleScroll);
    
    const consent = localStorage.getItem('bora-cookie-consent');
    if (!consent) {
      setTimeout(() => setShowCookieBanner(true), 2000);
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    document.documentElement.dir = lang === Language.AR ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [lang, subPage, view, selectedProjectId]);

  const handleNavClick = (pageId: PublicSubPage) => {
    setView('public');
    setSubPage(pageId);
    setSelectedProjectId(null);
    setIsMenuOpen(false);
  };

  const handleProjectClick = (id: number) => {
    setSelectedProjectId(id);
    setSubPage('projects');
  };

  const acceptCookies = () => {
    localStorage.setItem('bora-cookie-consent', 'accepted');
    setShowCookieBanner(false);
  };

  const getFlagUrl = (l: Language) => {
    switch(l) {
      case Language.AR: return 'https://flagcdn.com/w80/ma.png';
      case Language.FR: return 'https://flagcdn.com/w80/fr.png';
      case Language.EN: return 'https://flagcdn.com/w80/us.png';
      case Language.ES: return 'https://flagcdn.com/w80/es.png';
      default: return '';
    }
  };

  const LanguageSelector = ({ darkMode = false, animated = false }: { darkMode?: boolean; animated?: boolean }) => (
    <div className={`flex items-center gap-1.5 p-1.5 rounded-2xl border transition-all ${darkMode ? 'bg-white/5 border-white/10' : scrolled || view !== 'public' || subPage !== 'home' ? 'bg-slate-50 border-slate-200 shadow-sm' : 'bg-white/10 backdrop-blur-md border-white/20'}`}>
      <Globe size={16} className={`${darkMode ? 'text-red-500' : scrolled || view !== 'public' || subPage !== 'home' ? 'text-[#003399]' : 'text-white'} ml-1.5 rtl:ml-0 rtl:mr-1.5`} />
      <div className="flex gap-2">
        {[Language.AR, Language.FR, Language.EN, Language.ES].map((l, idx) => (
          <button
            key={l}
            onClick={() => setLang(l)}
            style={animated ? { animationDelay: `${idx * 120}ms` } : {}}
            className={`relative group w-9 h-9 flex items-center justify-center rounded-xl overflow-hidden border-2 transition-all transform hover:scale-110 active:scale-95 ${animated ? 'animate-in fade-in zoom-in-50 duration-700 fill-mode-both' : ''} ${lang === l ? 'border-[#CC0000] ring-4 ring-red-600/20' : 'border-transparent grayscale opacity-60 hover:grayscale-0 hover:opacity-100'}`}
          >
            <img 
              src={getFlagUrl(l)} 
              alt={l} 
              className="w-full h-full object-cover" 
            />
          </button>
        ))}
      </div>
    </div>
  );

  const isFullFooter = subPage === 'home' || subPage === 'contact';

  return (
    <div className="min-h-screen font-sans text-slate-900 bg-white selection:bg-red-100 scroll-smooth overflow-x-hidden">
      <nav className={`fixed top-0 left-0 right-0 z-[150] transition-all duration-500 ${scrolled ? 'bg-white/95 backdrop-blur-md py-2 shadow-lg border-b border-slate-100' : 'bg-transparent py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 lg:px-8 flex justify-between items-center">
          <div onClick={() => handleNavClick('home')}>
            <BoraLogo className={scrolled ? 'h-14 lg:h-16' : 'h-24 lg:h-32'} />
          </div>
          
          <div className="hidden lg:flex items-center gap-8">
            <ul className={`flex items-center gap-6 font-bold uppercase tracking-wider text-[11px] ${scrolled || view !== 'public' || subPage !== 'home' ? 'text-[#003399]' : 'text-white'}`}>
              {NAV_ITEMS.map((item) => {
                const pageId = item.href.replace('#', '') as PublicSubPage;
                const isActive = subPage === pageId && !selectedProjectId;
                return (
                  <li key={pageId} onClick={() => handleNavClick(pageId)} className={`cursor-pointer transition-all hover:text-[#CC0000] relative group`}>
                    {item.label[lang]}
                    <span className={`absolute -bottom-1.5 left-0 h-[2px] bg-[#CC0000] transition-all duration-300 ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
                  </li>
                );
              })}
            </ul>
            <LanguageSelector />
            <button onClick={() => setView('admin')} className={`px-4 py-2 rounded-lg text-[10px] font-black transition-all ${view === 'admin' ? 'bg-[#CC0000] text-white' : 'bg-[#003399] text-white hover:bg-red-600 shadow-md'}`}>ADMIN</button>
          </div>

          <button className={`lg:hidden p-3 rounded-xl transition-all shadow-md ${scrolled || view !== 'public' || subPage !== 'home' ? 'bg-[#003399] text-white' : 'bg-white/10 text-white backdrop-blur-md border border-white/20'}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden fixed inset-0 z-[200] bg-[#050a1a] flex flex-col animate-in slide-in-from-top duration-500">
            <div className="p-4 flex justify-between items-center border-b border-white/5">
              <BoraLogo className="h-16" />
              <button onClick={() => setIsMenuOpen(false)} className="p-3 bg-[#CC0000] text-white rounded-xl shadow-lg">
                <X size={24} />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-6 space-y-12">
               <div className="space-y-6">
                  <p className="text-[10px] font-black text-red-500 uppercase tracking-[0.4em] mb-4 text-center">Choose Language</p>
                  <div className="flex justify-center">
                    <LanguageSelector darkMode={true} animated={true} />
                  </div>
               </div>
               <ul className="space-y-6">
                 {NAV_ITEMS.map((item, i) => {
                   const pageId = item.href.replace('#', '') as PublicSubPage;
                   const isActive = subPage === pageId;
                   return (
                     <li key={pageId} 
                         onClick={() => handleNavClick(pageId)} 
                         style={{ animationDelay: `${(i + 5) * 60}ms` }}
                         className={`text-3xl font-black flex justify-between items-center group transition-all animate-in slide-in-from-bottom-6 duration-700 fill-mode-both ${isActive ? 'text-[#CC0000]' : 'text-white'}`}>
                       <span>{item.label[lang]}</span>
                       <ChevronRight className={`w-8 h-8 ${isActive ? 'rotate-90 text-[#CC0000]' : 'opacity-20 rtl:rotate-180'}`} />
                     </li>
                   );
                 })}
               </ul>
            </div>
          </div>
        )}
      </nav>

      <main className="min-h-screen">
        {view === 'admin' && <AdminDashboard />}
        {view === 'public' && (
          <div className="animate-in fade-in duration-700">
            {subPage === 'home' && <HomePage lang={lang} setSubPage={setSubPage} />}
            {subPage === 'about' && <AboutPage lang={lang} />}
            {subPage === 'services' && <ServicesPage lang={lang} />}
            {subPage === 'projects' && (
              selectedProjectId 
                ? <ProjectDetailPage id={selectedProjectId} lang={lang} setSelectedProjectId={setSelectedProjectId} />
                : <ProjectsPage lang={lang} onProjectClick={handleProjectClick} />
            )}
            {subPage === 'careers' && <CareersPage lang={lang} />}
            {subPage === 'contact' && <ContactPage lang={lang} />}
            {subPage === 'privacy' && <PrivacyPage lang={lang} />}
            {subPage === 'cookies' && <CookiesPage lang={lang} />}
            {subPage === 'safety' && <SafetyPage lang={lang} />}
          </div>
        )}
      </main>

      <footer className={`bg-[#040915] text-white relative overflow-hidden transition-all duration-500 ${isFullFooter ? 'pt-20 pb-10' : 'py-8'}`}>
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 via-blue-600 to-red-600"></div>
        {isFullFooter && (
          <div className="max-w-7xl mx-auto px-4 lg:px-8 grid lg:grid-cols-12 gap-12 mb-20">
            <div className="lg:col-span-4 space-y-8">
              <BoraLogo className="h-24 lg:h-32" />
              <p className="text-slate-400 text-lg leading-relaxed">{STRINGS.footerMission[lang]}</p>
            </div>
            <div className="lg:col-span-2 space-y-6">
               <h4 className="text-xl font-black uppercase text-[#CC0000]">{STRINGS.ui.quickLinks[lang]}</h4>
               <ul className="space-y-3 text-slate-400 font-bold uppercase text-[10px] tracking-widest">
                  {NAV_ITEMS.map((item) => (
                    <li key={item.href} onClick={() => handleNavClick(item.href.replace('#', '') as PublicSubPage)} className="hover:text-white cursor-pointer transition-colors flex items-center gap-2">
                      <div className="w-1 h-1 bg-blue-600 rounded-full"></div> {item.label[lang]}
                    </li>
                  ))}
               </ul>
            </div>
            <div className="lg:col-span-6 space-y-8">
                <h4 className="text-xl font-black uppercase text-[#CC0000]">{STRINGS.ui.hours[lang]}</h4>
                <div className="flex items-center gap-4 text-slate-300">
                  <Clock size={22} className="text-[#CC0000]"/>
                  <span className="font-bold text-sm tracking-tight">{STRINGS.ui.workingDays[lang]}</span>
                </div>
            </div>
          </div>
        )}
        <div className="max-w-7xl mx-auto px-4 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-[10px] font-black uppercase tracking-widest border-t border-white/5 pt-8">
           <p>{STRINGS.ui.copyrightText[lang]}</p>
           <ul className="flex gap-6">
              <li onClick={() => setSubPage('privacy')} className="hover:text-white cursor-pointer transition-all">{STRINGS.ui.privacy[lang]}</li>
              <li onClick={() => setSubPage('cookies')} className="hover:text-white cursor-pointer transition-all">{STRINGS.ui.cookies[lang]}</li>
              <li onClick={() => setSubPage('safety')} className="hover:text-white cursor-pointer transition-all text-[#CC0000] font-black">{STRINGS.ui.safetyBtn[lang]}</li>
           </ul>
        </div>
      </footer>
      <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className={`fixed bottom-6 right-6 z-[190] w-14 h-14 bg-[#CC0000] text-white rounded-2xl shadow-xl flex items-center justify-center transition-all duration-500 hover:-translate-y-2 ${scrolled ? 'opacity-100 scale-100' : 'opacity-0 scale-50 pointer-events-none'}`}><ArrowUp size={24} /></button>
    </div>
  );
};

const HomePage: React.FC<{ lang: Language; setSubPage: (p: PublicSubPage) => void }> = ({ lang, setSubPage }) => (
  <div className="overflow-hidden">
    <section className="relative h-[90vh] lg:h-screen flex items-center overflow-hidden bg-[#050a1a]">
      <BoraImage src="https://images.unsplash.com/photo-1541976590-713941681591?w=2400" alt="Hero" containerClass="absolute inset-0 w-full h-full opacity-60" />
      <div className="relative max-w-7xl mx-auto px-4 lg:px-8 w-full z-20">
        <AnimatedSection className="max-w-4xl space-y-8" direction="left">
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-black text-white leading-tight uppercase tracking-tighter">{STRINGS.heroTitle[lang]}</h1>
          <p className="text-lg md:text-xl lg:text-3xl text-slate-200 font-medium leading-relaxed max-w-2xl border-l-8 border-[#CC0000] pl-6 rtl:border-l-0 rtl:border-r-8 rtl:pr-6">{STRINGS.heroSubtitle[lang]}</p>
          <button onClick={() => setSubPage('projects')} className="px-10 py-5 bg-[#CC0000] text-white font-black rounded-2xl hover:bg-red-700 shadow-xl flex items-center gap-4 group transition-all"><span className="text-sm uppercase tracking-widest">{STRINGS.ui.explore[lang]}</span><ArrowRight className="group-hover:translate-x-2 transition-transform rtl:rotate-180" /></button>
        </AnimatedSection>
      </div>
    </section>
  </div>
);

const AboutPage: React.FC<{ lang: Language }> = ({ lang }) => (
  <div className="bg-white pb-32">
    <PageHeader title={STRINGS.aboutTitle[lang]} subtitle="Engineering Credibility" bgImage="https://images.unsplash.com/photo-1541888946425-d81bb19480c5?w=2000" lang={lang} />
    <div className="max-w-7xl mx-auto px-4 lg:px-8 mt-24">
      <AnimatedSection direction="right" className="space-y-10">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-[#003399] tracking-tighter leading-none">{STRINGS.aboutTitle[lang]}</h1>
        <p className="text-xl md:text-2xl text-slate-500 font-medium leading-relaxed">{STRINGS.aboutDetailed.mission[lang]}</p>
      </AnimatedSection>
    </div>
  </div>
);

const SafetyPage: React.FC<{ lang: Language }> = ({ lang }) => (
  <div className="pt-32 lg:pt-48 pb-32 bg-white">
    <div className="max-w-7xl mx-auto px-4 lg:px-8">
      <AnimatedSection className="text-center mb-20">
        <div className="w-20 h-20 bg-red-50 rounded-3xl flex items-center justify-center text-[#CC0000] mx-auto mb-8 shadow-sm"><ShieldAlert size={48} /></div>
        <h1 className="text-5xl lg:text-8xl font-black text-[#003399] tracking-tighter leading-none uppercase mb-6">{STRINGS.ui.safetyPageTitle[lang]}</h1>
        <p className="text-xl lg:text-3xl text-slate-500 font-medium max-w-4xl mx-auto leading-relaxed">{STRINGS.safetyContent.intro[lang]}</p>
      </AnimatedSection>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
        {STRINGS.safetyContent.pillars.map((pillar, i) => {
          const Icon = pillar.icon;
          return (
            <AnimatedSection key={i} delay={i * 100} className="bg-slate-50 p-10 rounded-[3rem] border border-slate-100 shadow-sm hover:-translate-y-2 transition-transform group">
               <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-[#CC0000] mb-8 shadow-sm group-hover:bg-[#CC0000] group-hover:text-white transition-all"><Icon size={32} /></div>
               <h3 className="text-2xl font-black text-[#003399] mb-4 tracking-tighter uppercase">{pillar.title[lang]}</h3>
               <p className="text-lg text-slate-500 font-medium leading-relaxed">{pillar.desc[lang]}</p>
            </AnimatedSection>
          )
        })}
      </div>
    </div>
  </div>
);

const ServicesPage: React.FC<{ lang: Language }> = ({ lang }) => (
    <div className="bg-slate-50 pb-32">
      <PageHeader title={STRINGS.servicesTitle[lang]} subtitle="Full Spectrum Engineering" bgImage="https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=2000" lang={lang} />
      <div className="max-w-7xl mx-auto px-4 lg:px-8 mt-24">
        <div className="grid lg:grid-cols-3 gap-8">
          {STRINGS.services.map((s, i) => (
            <AnimatedSection key={s.id} delay={i * 100} className="bg-white p-10 rounded-[3rem] shadow-lg border border-slate-100 group hover:ring-2 hover:ring-[#CC0000] transition-all">
               <div className="w-16 h-16 bg-slate-50 rounded-2xl flex items-center justify-center text-[#003399] mb-6 group-hover:bg-[#CC0000] group-hover:text-white transition-all"><s.icon size={32}/></div>
               <h3 className="text-2xl font-black text-slate-900 mb-6">{s.title} Engineering</h3>
               <p className="text-lg text-slate-500 mb-8">{s.desc[lang]}</p>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
);

const ProjectsPage: React.FC<{ lang: Language; onProjectClick: (id: number) => void }> = ({ lang, onProjectClick }) => (
    <div className="bg-white pb-32">
      <PageHeader title={STRINGS.projectsTitle[lang]} subtitle="The BORA Legacy" bgImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=2000" lang={lang} />
      <div className="max-w-7xl mx-auto px-4 lg:px-8 mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {BORA_ACHIEVEMENTS.map((project, i) => (
          <AnimatedSection key={project.id} delay={i * 50} className="rounded-[3rem] overflow-hidden shadow-xl cursor-pointer hover:border-[#CC0000] border-8 border-transparent transition-all" >
             <div onClick={() => onProjectClick(project.id)} className="aspect-[4/5] relative">
                <BoraImage src={project.img} alt={project.title[lang]} containerClass="w-full h-full" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050a1a] to-transparent p-10 flex items-end"><h3 className="text-3xl font-black text-white">{project.title[lang]}</h3></div>
             </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
);

const ProjectDetailPage: React.FC<{ id: number; lang: Language; setSelectedProjectId: (id: number | null) => void }> = ({ id, lang, setSelectedProjectId }) => {
  const project = BORA_ACHIEVEMENTS.find(p => p.id === id);
  if (!project) return null;
  return (
    <div className="pt-32 lg:pt-48 pb-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <button onClick={() => setSelectedProjectId(null)} className="flex items-center gap-2 text-[#CC0000] font-black uppercase text-[10px] tracking-widest mb-12 hover:translate-x-2 transition-all"><ArrowLeft size={16} /> {STRINGS.ui.backToProjects[lang]}</button>
        <h1 className="text-5xl lg:text-8xl font-black text-[#003399] tracking-tighter mb-12 uppercase">{project.title[lang]}</h1>
        <BoraImage src={project.img} alt={project.title[lang]} containerClass="w-full aspect-video rounded-[3rem] shadow-2xl border-8 border-slate-50" />
      </div>
    </div>
  );
};

const CareersPage: React.FC<{ lang: Language }> = ({ lang }) => (
  <div className="pt-32 lg:pt-48 pb-32 bg-slate-50">
    <div className="max-w-7xl mx-auto px-4 lg:px-8 text-center">
      <h1 className="text-5xl lg:text-8xl font-black text-[#003399] tracking-tighter uppercase mb-20">{STRINGS.careersTitle[lang]}</h1>
      <button className="px-12 py-6 bg-[#003399] text-white font-black rounded-2xl hover:bg-[#CC0000] transition-all text-lg shadow-lg uppercase tracking-widest">{STRINGS.ui.joinUs[lang]}</button>
    </div>
  </div>
);

const ContactPage: React.FC<{ lang: Language }> = ({ lang }) => (
    <div className="pt-32 lg:pt-48 pb-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <h1 className="text-5xl lg:text-8xl font-black text-[#003399] text-center mb-20 tracking-tighter uppercase">{STRINGS.contactTitle[lang]}</h1>
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="bg-[#050a1a] p-12 lg:p-16 rounded-[3rem] shadow-2xl space-y-8">
             <input type="text" placeholder={STRINGS.ui.namePlaceholder[lang]} className="w-full bg-white/5 border border-white/10 px-8 py-5 rounded-2xl text-white outline-none focus:border-[#CC0000]" />
             <input type="email" placeholder={STRINGS.ui.emailPlaceholder[lang]} className="w-full bg-white/5 border border-white/10 px-8 py-5 rounded-2xl text-white outline-none focus:border-[#CC0000]" />
             <textarea rows={4} placeholder={STRINGS.ui.messagePlaceholder[lang]} className="w-full bg-white/5 border border-white/10 px-8 py-5 rounded-2xl text-white outline-none focus:border-[#CC0000]"></textarea>
             <button className="w-full py-6 bg-[#CC0000] text-white font-black rounded-2xl text-xl hover:bg-red-700 transition-all shadow-lg uppercase tracking-widest">{STRINGS.ui.send[lang]}</button>
          </div>
          <div className="bg-slate-50 p-12 lg:p-16 rounded-[3rem] shadow-sm space-y-12">
             <div><h4 className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-4">Email</h4><p className="text-2xl font-black text-[#003399]">contact@bora.ma</p></div>
             <div><h4 className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-4">HQ Address</h4><p className="text-2xl font-black text-[#003399]">{STRINGS.ui.location[lang]}</p></div>
          </div>
        </div>
      </div>
    </div>
);

const PrivacyPage: React.FC<{ lang: Language }> = ({ lang }) => (
  <div className="pt-32 lg:pt-48 pb-32 bg-white">
    <div className="max-w-4xl mx-auto px-4 lg:px-8">
      <h1 className="text-4xl lg:text-6xl font-black text-[#003399] tracking-tighter mb-12">{STRINGS.privacyPolicy.title[lang]}</h1>
      <p className="text-xl text-slate-600 font-medium leading-relaxed">{STRINGS.privacyPolicy.content[lang]}</p>
    </div>
  </div>
);

const CookiesPage: React.FC<{ lang: Language }> = ({ lang }) => (
  <div className="pt-32 lg:pt-48 pb-32 bg-white">
    <div className="max-w-4xl mx-auto px-4 lg:px-8">
      <h1 className="text-4xl lg:text-6xl font-black text-[#003399] tracking-tighter mb-12">{STRINGS.cookiesPolicy.title[lang]}</h1>
      <p className="text-xl text-slate-600 font-medium leading-relaxed">{STRINGS.cookiesPolicy.content[lang]}</p>
    </div>
  </div>
);

const AdminDashboard: React.FC = () => (
  <div className="bg-[#f8fafc] min-h-screen pt-40 pb-20 px-4">
    <div className="max-w-7xl mx-auto bg-white p-20 rounded-[4rem] shadow-xl border border-slate-100">
      <h1 className="text-4xl lg:text-6xl font-black text-[#003399] mb-16 tracking-tighter flex items-center gap-6"><Settings size={48}/> BORA PANEL</h1>
      <div className="grid md:grid-cols-4 gap-6">
        {[{ label: "Visits", val: "14.2K", icon: TrendingUp }, { label: "Requests", val: "42", icon: MessageSquare }, { label: "Apps", val: "186", icon: Briefcase }, { label: "Status", val: "OK", icon: Zap }].map((s, i) => (
          <div key={i} className="p-10 bg-slate-50 rounded-[2.5rem] border border-slate-100 text-center">
            <p className="text-4xl font-black mb-2">{s.val}</p>
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default App;
