import { NavLink } from "./NavLink";
import { Home, BookOpen, Calendar, Users, User } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const BottomNav = () => {
  const { t } = useLanguage();
  
  const navItems = [
    { to: "/", icon: Home, label: t("nav.home") },
    { to: "/services", icon: BookOpen, label: t("nav.services") },
    { to: "/booking", icon: Calendar, label: t("nav.booking") },
    { to: "/therapists", icon: Users, label: t("nav.therapists") },
    { to: "/profile", icon: User, label: t("nav.profile") },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-card border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex justify-around items-center h-16">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className="flex flex-col items-center justify-center gap-1 px-3 py-2 text-muted-foreground transition-colors hover:text-primary"
              activeClassName="text-primary"
            >
              <item.icon className="h-5 w-5" />
              <span className="text-xs font-medium">{item.label}</span>
            </NavLink>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default BottomNav;
