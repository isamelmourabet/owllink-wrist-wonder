
import React from 'react';
import { Button } from "@/components/ui/button";
import { Menu } from 'lucide-react';
import { 
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  return (
    <header className="w-full py-4 px-6 md:px-12 flex items-center justify-between bg-white/80 backdrop-blur-sm fixed top-0 z-50">
      <div className="flex items-center">
        <LogoIcon />
        <span className="ml-2 font-bold text-2xl">
          <span className="text-owllink-pink">Owl</span>
          <span className="text-owllink-blue">link</span>
        </span>
      </div>
      
      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center space-x-8">
        <a href="#features" className="text-gray-700 hover:text-owllink-pink transition-colors">Features</a>
        <a href="#products" className="text-gray-700 hover:text-owllink-pink transition-colors">Products</a>
        <a href="#medical" className="text-gray-700 hover:text-owllink-pink transition-colors">Medical</a>
        <a href="#contact" className="text-gray-700 hover:text-owllink-pink transition-colors">Contact</a>
        <Button className="gradient-button text-white">Get Early Access</Button>
      </nav>
      
      {/* Mobile Navigation */}
      <Sheet>
        <SheetTrigger asChild className="md:hidden">
          <Button variant="ghost" size="icon">
            <Menu className="h-6 w-6" />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <div className="flex flex-col space-y-4 mt-8">
            <a href="#features" className="text-gray-700 hover:text-owllink-pink transition-colors py-2">Features</a>
            <a href="#products" className="text-gray-700 hover:text-owllink-pink transition-colors py-2">Products</a>
            <a href="#medical" className="text-gray-700 hover:text-owllink-pink transition-colors py-2">Medical</a>
            <a href="#contact" className="text-gray-700 hover:text-owllink-pink transition-colors py-2">Contact</a>
            <Button className="gradient-button text-white w-full mt-4">Get Early Access</Button>
          </div>
        </SheetContent>
      </Sheet>
    </header>
  );
};

// Logo component
const LogoIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="16" cy="16" r="16" fill="url(#gradient)" />
    <path d="M10 14C11.1046 14 12 13.1046 12 12C12 10.8954 11.1046 10 10 10C8.89543 10 8 10.8954 8 12C8 13.1046 8.89543 14 10 14Z" fill="white" />
    <path d="M22 14C23.1046 14 24 13.1046 24 12C24 10.8954 23.1046 10 22 10C20.8954 10 20 10.8954 20 12C20 13.1046 20.8954 14 22 14Z" fill="white" />
    <path d="M12 20C12 23.3137 13.7909 24 16 24C18.2091 24 20 23.3137 20 20" stroke="white" strokeWidth="2" strokeLinecap="round" />
    <defs>
      <linearGradient id="gradient" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
        <stop stopColor="#ff80b6" />
        <stop offset="1" stopColor="#57a7dd" />
      </linearGradient>
    </defs>
  </svg>
);

export default Navbar;
