import { ReactNode } from "react";
import BottomNav from "./BottomNav";
import LanguageSwitcher from "./LanguageSwitcher";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 left-0 right-0 z-40 bg-card/80 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 h-14 flex items-center justify-end">
          <LanguageSwitcher />
        </div>
      </header>
      <main className="pt-14">{children}</main>
      <BottomNav />
    </div>
  );
};

export default Layout;
