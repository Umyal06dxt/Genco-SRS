import React, { useState } from 'react';
import { Menu, X, BookOpen, FileText, Workflow, Layout, BarChart, Users, Home } from 'lucide-react';

// Components
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Introduction from './sections/Introduction';
import OverallDescription from './sections/OverallDescription';
import SpecificRequirements from './sections/SpecificRequirements';
import Appendices from './sections/Appendices';
import Diagrams from './sections/Diagrams';
import Workflows from './sections/Workflows';
import Wireframes from './sections/Wireframes';
import Dashboard from './sections/Dashboard';

function App() {
  const [activeSection, setActiveSection] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: <Home size={20} /> },
    { id: 'introduction', label: 'Introduction', icon: <BookOpen size={20} /> },
    { id: 'overall-description', label: 'Overall Description', icon: <FileText size={20} /> },
    { id: 'specific-requirements', label: 'Specific Requirements', icon: <BarChart size={20} /> },
    { id: 'appendices', label: 'Appendices', icon: <Users size={20} /> },
    { id: 'diagrams', label: 'Diagrams', icon: <Layout size={20} /> },
    { id: 'workflows', label: 'Workflows', icon: <Workflow size={20} /> },
    { id: 'wireframes', label: 'Wireframes', icon: <Layout size={20} /> },
  ];

  const renderContent = () => {
    switch (activeSection) {
      case 'dashboard':
        return <Dashboard />;
      case 'introduction':
        return <Introduction />;
      case 'overall-description':
        return <OverallDescription />;
      case 'specific-requirements':
        return <SpecificRequirements />;
      case 'appendices':
        return <Appendices />;
      case 'diagrams':
        return <Diagrams />;
      case 'workflows':
        return <Workflows />;
      case 'wireframes':
        return <Wireframes />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex h-screen bg-gray-900">
      {/* Mobile sidebar toggle */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <button
          onClick={toggleSidebar}
          className="p-2 rounded-md bg-gray-800 shadow-md text-gray-200 hover:bg-gray-700 focus:outline-none"
        >
          {sidebarOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Sidebar */}
      <Sidebar
        menuItems={menuItems}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar title="GENCO SRS Documentation" />
        <main className="flex-1 overflow-y-auto bg-gray-900 p-4 md:p-6">
          <div className="max-w-7xl mx-auto">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;