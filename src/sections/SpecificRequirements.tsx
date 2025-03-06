import React from 'react';

const SpecificRequirements: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="bg-gray-800 shadow-md rounded-lg overflow-hidden">
        <div className="p-6 bg-gradient-to-r from-purple-900 to-purple-600 text-white">
          <h1 className="text-3xl font-bold">3. Specific Requirements</h1>
        </div>
        
        <div className="p-6 space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-gray-100 mb-4">3.1 Functional Requirements</h2>
            
            <div className="space-y-4">
              <div className="bg-gray-700 p-4 rounded-lg border border-gray-600">
                <h3 className="text-xl font-medium text-purple-300 mb-2">3.1.1 User Authentication</h3>
                <p className="text-gray-300">
                  Users must register and authenticate using OAuth 2.0 and Firebase Authentication.
                </p>
              </div>
              
              <div className="bg-gray-700 p-4 rounded-lg border border-gray-600">
                <h3 className="text-xl font-medium text-purple-300 mb-2">3.1.2 AI-Driven Quiz System</h3>
                <ul className="list-disc pl-6 space-y-1 text-gray-300">
                  <li>The system shall generate dynamic questions based on user performance and learning objectives.</li>
                  <li>Real-time facial emotion analysis shall be employed to track user engagement during quizzes.</li>
                </ul>
              </div>
              
              <div className="bg-gray-700 p-4 rounded-lg border border-gray-600">
                <h3 className="text-xl font-medium text-purple-300 mb-2">3.1.3 Smart Flashcards</h3>
                <p className="text-gray-300">
                  The system shall create AI-curated flashcards based on the user's syllabus and interaction history.
                </p>
              </div>
              
              <div className="bg-gray-700 p-4 rounded-lg border border-gray-600">
                <h3 className="text-xl font-medium text-purple-300 mb-2">3.1.4 Mental Health & Emotion Analysis</h3>
                <p className="text-gray-300">
                  The platform shall integrate the GoEmotions dataset for real-time emotional tracking and support.
                </p>
              </div>
              
              <div className="bg-gray-700 p-4 rounded-lg border border-gray-600">
                <h3 className="text-xl font-medium text-purple-300 mb-2">3.1.5 Interactive Learning Community</h3>
                <p className="text-gray-300">
                  The platform shall feature AI-moderated discussion forums to facilitate constructive peer interactions.
                </p>
              </div>
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold text-gray-100 mb-4">3.2 Performance Requirements</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>The system shall ensure a response time of less than 200 milliseconds for API calls.</li>
              <li>Real-time emotion recognition latency shall be maintained at less than 300 milliseconds.</li>
              <li>The platform shall support over 100,000 concurrent users without performance degradation.</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold text-gray-100 mb-4">3.3 Security Requirements</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>The system shall implement end-to-end encryption for all user data.</li>
              <li>Role-Based Access Control (RBAC) shall be enforced to manage user permissions effectively.</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold text-gray-100 mb-4">3.4 Software Quality Attributes</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li><strong className="text-purple-300">Usability:</strong> The user interface shall be intuitive and accessible, accommodating users with disabilities.</li>
              <li><strong className="text-purple-300">Maintainability:</strong> The system architecture shall be modular, utilizing microservices for easier updates and maintenance.</li>
              <li><strong className="text-purple-300">Performance:</strong> AI models shall be optimized for low latency and high throughput.</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default SpecificRequirements;