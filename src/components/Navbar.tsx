
import { FileText, Home, TestTube2Icon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ThemeToggle } from './theme-toogle';

const Navbar = () => {
  return (
    <header className="w-full backdrop-blur-md border-b border-border sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between animate-fade-in">
        <Link
          to="/"
          className="flex items-center gap-2 font-semibold text-primary hover:text-primary/80 transition-colors"
        >
          <FileText className="w-5 h-5" />
          <span>SRS Structure</span>
        </Link>

        <nav className="flex gap-6">
          <ThemeToggle />
          <Link
            to="/"
            className="flex items-center gap-1.5 text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
          >
            <Home className="w-4 h-4" />
            <span>Home</span>
          </Link>

          <Link
            to="/srs-document"
            className="flex items-center gap-1.5 text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
          >
            <FileText className="w-4 h-4" />
            <span>SRS Document</span>
          </Link>
          <Link
            to="/test-cases"
            className="flex items-center gap-1.5 text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
          >
            <TestTube2Icon className="w-4 h-4" />
            <span>Test Cases</span>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
