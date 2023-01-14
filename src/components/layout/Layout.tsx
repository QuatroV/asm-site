import * as React from 'react';

import Header from '@/components/layout/Header';

export default function Layout({ children }: { children: React.ReactNode }) {
  // Put Header or Footer Here
  return (
    <>
      <div className='mesh-gradient-background overflow-overlay fixed h-screen w-screen overflow-auto'>
        <Header />
        {children}
      </div>
    </>
  );
}
