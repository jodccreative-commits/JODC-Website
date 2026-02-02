import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import StarryBackground from './StarryBackground';
import FloatingAstronaut from './FloatingAstronaut';

interface LayoutProps {
  children: ReactNode;
  showAstronaut?: boolean;
}

const Layout = ({ children, showAstronaut = true }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col relative">
      <StarryBackground />
      {showAstronaut && <FloatingAstronaut />}
      <Header />
      <main className="flex-1 relative z-10 pt-16 lg:pt-20">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
