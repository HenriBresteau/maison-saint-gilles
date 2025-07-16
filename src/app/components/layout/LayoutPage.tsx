import { clsx } from 'clsx';
import { ReactNode } from 'react';

import Footer from '@/app/components/sections/Footer';
import Header from '@/app/components/sections/Header';

interface LayoutPageProps {
  children: ReactNode;
  className?: string;
}

const LayoutPage = ({ children, className = "" }: LayoutPageProps) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className={clsx("flex flex-col", className)}>{children}</main>
      <Footer />
    </div>
  );
};

export default LayoutPage;
