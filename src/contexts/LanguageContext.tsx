import { createContext, useContext, useState, ReactNode } from "react";

type Language = "id" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  id: {
    // Home Page
    "home.welcome": "Selamat Datang",
    "home.subtitle": "Pengalaman kemewahan dan relaksasi menanti Anda",
    "home.bookNow": "Pesan Sekarang",
    "home.chooseTherapist": "Pilih Terapis",
    "home.featuredServices": "Layanan Unggulan",
    "home.viewAll": "Lihat Semua",
    "home.book": "Pesan",
    "home.testimonial": "Pengalaman spa terbaik di Dubai. Terapis sangat profesional dan suasananya sangat menenangkan.",
    
    // Navigation
    "nav.home": "Beranda",
    "nav.services": "Layanan",
    "nav.booking": "Pesan",
    "nav.therapists": "Terapis",
    "nav.profile": "Profil",
    
    // Common
    "common.minutes": "menit",
    "common.popular": "Paling Populer",
    "common.new": "Baru",
    
    // Services
    "service.signatureMassage": "Signature Royal Massage",
    "service.deepTissue": "Deep Tissue Therapy",
  },
  en: {
    // Home Page
    "home.welcome": "Welcome",
    "home.subtitle": "Luxury and relaxation experience awaits you",
    "home.bookNow": "Book Now",
    "home.chooseTherapist": "Choose Therapist",
    "home.featuredServices": "Featured Services",
    "home.viewAll": "View All",
    "home.book": "Book",
    "home.testimonial": "Best spa experience in Dubai. The therapists are very professional and the atmosphere is very calming.",
    
    // Navigation
    "nav.home": "Home",
    "nav.services": "Services",
    "nav.booking": "Booking",
    "nav.therapists": "Therapists",
    "nav.profile": "Profile",
    
    // Common
    "common.minutes": "minutes",
    "common.popular": "Most Popular",
    "common.new": "New",
    
    // Services
    "service.signatureMassage": "Signature Royal Massage",
    "service.deepTissue": "Deep Tissue Therapy",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>("id");

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.id] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
