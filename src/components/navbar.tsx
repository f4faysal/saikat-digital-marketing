'use client';
import { Menu } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  // State to track the visibility of the mobile menu
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Function to toggle mobile menu visibility
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <div className='header min-w-screen fixed left-0 top-0 z-50 w-screen bg-[#f2f8f5] px-1 transition-all duration-500 ease-out md:px-7'>
      <div className='container mx-auto'>
        <div className='relative flex h-16 items-center justify-between px-1 sm:px-6 md:px-4 lg:px-8'>
          <Link href='/' className='ml-4 flex gap-x-2 lg:ml-0'>
            <p className='text-xl font-bold'>Saikat</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
