import React from 'react';

const Diagrams: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="bg-gray-800 shadow-md rounded-lg overflow-hidden">
        <div className="p-6 bg-gradient-to-r from-purple-900 to-purple-600 text-white">
          <h1 className="text-3xl font-bold">System Diagrams</h1>
        </div>
        
        <div className="p-6 space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-gray-100 mb-4">System Architecture</h2>
            <div className="bg-gray-700 p-6 rounded-lg border border-gray-600">
              <div className="flex justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                  alt="System Architecture Diagram" 
                  className="max-w-full h-auto rounded-lg shadow-md"
                />
              </div>
              <p className="mt-4 text-gray-300 text-center">
                Figure 1: High-level system architecture showing the interaction between frontend, backend, and AI services.
              </p>
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold text-gray-100 mb-4">Data Flow Diagram</h2>
            <div className="bg-gray-700 p-6 rounded-lg border border-gray-600">
              <div className="flex justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                  alt="Data Flow Diagram" 
                  className="max-w-full h-auto rounded-lg shadow-md"
                />
              </div>
              <p className="mt-4 text-gray-300 text-center">
                Figure 2: Data flow diagram illustrating how information moves through the GENCO platform.
              </p>
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold text-gray-100 mb-4">Entity Relationship Diagram</h2>
            <div className="bg-gray-700 p-6 rounded-lg border border-gray-600">
              <div className="flex justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1542903660-eedba2cda473?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                  alt="Entity Relationship Diagram" 
                  className="max-w-full h-auto rounded-lg shadow-md"
                />
              </div>
              <p className="mt-4 text-gray-300 text-center">
                Figure 3: Entity relationship diagram showing the database structure and relationships.
              </p>
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold text-gray-100 mb-4">AI Component Integration</h2>
            <div className="bg-gray-700 p-6 rounded-lg border border-gray-600">
              <div className="flex justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                  alt="AI Component Integration" 
                  className="max-w-full h-auto rounded-lg shadow-md"
                />
              </div>
              <p className="mt-4 text-gray-300 text-center">
                Figure 4: Diagram showing how AI components integrate with the core platform services.
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Diagrams;