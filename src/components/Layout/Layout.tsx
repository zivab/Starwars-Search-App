import React from 'react';
import { ModeToggle } from '../ui/modeToggle';
import { StarsBackground } from '../ui/stars-background';
import { ShootingStars } from '../ui/shooting-stars';

interface Layout {
  children: React.ReactNode;
}

const Layout = ({ children }: Layout) => {
  return (
    <div className="mt-10 flex w-full justify-center">
      <div className="z-10 h-96 w-[80%] p-4">{children}</div>
      <ShootingStars />
      <StarsBackground />
      <ModeToggle />
    </div>
  );
};

export default Layout;
