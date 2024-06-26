import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Function to close the menu if clicking outside of it
  const handleClickOutside = (event: MouseEvent) => {
    if (
      menuRef.current && !menuRef.current.contains(event.target as Node) &&
      buttonRef.current && !buttonRef.current.contains(event.target as Node)
    ) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="flex items-center justify-between px-4 py-8 md:px-6 bg-white mt-8 rounded">
      <Link href="#" className="flex items-center" prefetch={false}>
        <Image src="/XRPLRESOLVER BLACK.png" alt="XRPL Resolver" width={200} height={200} className="w-30 h-auto" />
      </Link>
      <div className="md:hidden">
        <button 
          ref={buttonRef}
          onClick={() => setIsOpen(!isOpen)} 
          className="text-gray-800 dark:text-gray-200 focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
      <nav ref={menuRef} className={`absolute md:static top-16 right-4 md:top-auto md:right-auto bg-white dark:bg-gray-950 border md:border-0 border-black rounded-md md:rounded-none p-4 md:p-0 ${isOpen ? 'flex' : 'hidden'} flex-col md:flex-row md:flex md:gap-6 gap-4`}>
        <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
          Home
        </Link>
        <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
          About
        </Link>
        <Link href="#" className="text-sm font-medium hover:underline underline-offset-4" prefetch={false}>
          Contact
        </Link>
      </nav>
    </header>
  );
}
