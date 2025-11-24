import Footer from '@/components/footer';
import Header from '@/components/Header';
import React from 'react';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      <div className="pt-[40px] md:pt-[40px]">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
