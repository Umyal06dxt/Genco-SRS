import React from 'react';

const Wireframes: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="bg-gray-800 shadow-md rounded-lg overflow-hidden">
        <div className="p-6 bg-gradient-to-r from-purple-900 to-purple-600 text-white">
          <h1 className="text-3xl font-bold">UI Wireframes</h1>
        </div>
        
        <div className="p-6 space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-gray-100 mb-4">Dashboard</h2>
            <div className="bg-gray-700 p-6 rounded-lg border border-gray-600">
              <div className="flex justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                  alt="Dashboard Wireframe" 
                  className="max-w-full h-auto rounded-lg shadow-md"
                />
              </div>
              <div className="mt-6">
                <h3 className="text-xl font-medium text-purple-300 mb-2">Key Components:</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>Learning progress overview</li>
                  <li>Recommended courses</li>
                  <li>Recent activity</li>
                  <li>Upcoming deadlines</li>
                  <li>Mental health status indicator</li>
                </ul>
              </div>
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold text-gray-100 mb-4">Quiz Interface</h2>
            <div className="bg-gray-700 p-6 rounded-lg border border-gray-600">
              <div className="flex justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                  alt="Quiz Interface Wireframe" 
                  className="max-w-full h-auto rounded-lg shadow-md"
                />
              </div>
              <div className="mt-6">
                <h3 className="text-xl font-medium text-purple-300 mb-2">Key Components:</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>Question display area</li>
                  <li>Multiple choice options</li>
                  <li>Progress indicator</li>
                  <li>Timer</li>
                  <li>Hint button</li>
                  <li>Camera feed for emotion tracking (minimized)</li>
                </ul>
              </div>
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold text-gray-100 mb-4">Community Forum</h2>
            <div className="bg-gray-700 p-6 rounded-lg border border-gray-600">
              <div className="flex justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                  alt="Community Forum Wireframe" 
                  className="max-w-full h-auto rounded-lg shadow-md"
                />
              </div>
              <div className="mt-6">
                <h3 className="text-xl font-medium text-purple-300 mb-2">Key Components:</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>Topic categories</li>
                  <li>Search functionality</li>
                  <li>Question posting form</li>
                  <li>AI-recommended answers</li>
                  <li>User reputation indicators</li>
                  <li>Moderation status</li>
                </ul>
              </div>
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold text-gray-100 mb-4">Smart Flashcards</h2>
            <div className="bg-gray-700 p-6 rounded-lg border border-gray-600">
              <div className="flex justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                  alt="Smart Flashcards Wireframe" 
                  className="max-w-full h-auto rounded-lg shadow-md"
                />
              </div>
              <div className="mt-6">
                <h3 className="text-xl font-medium text-purple-300 mb-2">Key Components:</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>Flashcard display area</li>
                  <li>Flip animation</li>
                  <li>Difficulty rating buttons</li>
                  <li>Progress through deck indicator</li>
                  <li>AI-generated hints</li>
                  <li>Related concepts</li>
                </ul>
              </div>
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold text-gray-100 mb-4">Mobile App Views</h2>
            <div className="bg-gray-700 p-6 rounded-lg border border-gray-600">
              <div className="flex justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                  alt="Mobile App Views" 
                  className="max-w-full h-auto rounded-lg shadow-md"
                />
              </div>
              <div className="mt-6">
                <h3 className="text-xl font-medium text-purple-300 mb-2">Key Components:</h3>
                <ul className="list-disc pl-6 space-y-2 text-gray-300">
                  <li>Responsive navigation</li>
                  <li>Touch-optimized controls</li>
                  <li>Offline mode indicators</li>
                  <li>Push notification center</li>
                  <li>Quick access to learning materials</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Wireframes;