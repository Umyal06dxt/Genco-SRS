import React from 'react';
import { FileText } from 'lucide-react';

interface NavbarProps {
  title: string;
}

const Navbar: React.FC<NavbarProps> = ({ title }) => {
  return (
    <header className="bg-gray-800 shadow-md z-10 border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <FileText className="h-8 w-8 text-purple-500" />
            <h1 className="ml-2 text-xl font-semibold text-gray-100">{title}</h1>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6">
              <span className="text-sm text-gray-400">IEEE Std 830-1998</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;