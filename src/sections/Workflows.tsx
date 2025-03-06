import React from 'react';

const Workflows: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="bg-gray-800 shadow-md rounded-lg overflow-hidden">
        <div className="p-6 bg-gradient-to-r from-purple-900 to-purple-600 text-white">
          <h1 className="text-3xl font-bold">Workflow Charts</h1>
        </div>
        
        <div className="p-6 space-y-8">
          <section>
            <h2 className="text-2xl font-semibold text-gray-100 mb-4">User Authentication Flow</h2>
            <div className="bg-gray-700 p-6 rounded-lg border border-gray-600">
              <div className="flex justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1584433144859-1fc3ab64a957?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                  alt="User Authentication Flow" 
                  className="max-w-full h-auto rounded-lg shadow-md"
                />
              </div>
              <div className="mt-6 space-y-4">
                <h3 className="text-xl font-medium text-purple-300">Process Steps:</h3>
                <ol className="list-decimal pl-6 space-y-2 text-gray-300">
                  <li>User initiates login/registration</li>
                  <li>System presents authentication options</li>
                  <li>User provides credentials</li>
                  <li>System validates credentials</li>
                  <li>System creates session and redirects to dashboard</li>
                </ol>
              </div>
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold text-gray-100 mb-4">AI-Driven Quiz Generation</h2>
            <div className="bg-gray-700 p-6 rounded-lg border border-gray-600">
              <div className="flex justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                  alt="AI-Driven Quiz Generation" 
                  className="max-w-full h-auto rounded-lg shadow-md"
                />
              </div>
              <div className="mt-6 space-y-4">
                <h3 className="text-xl font-medium text-purple-300">Process Steps:</h3>
                <ol className="list-decimal pl-6 space-y-2 text-gray-300">
                  <li>System analyzes user learning history</li>
                  <li>AI identifies knowledge gaps</li>
                  <li>System generates personalized questions</li>
                  <li>User completes quiz</li>
                  <li>AI analyzes responses and facial expressions</li>
                  <li>System provides personalized feedback</li>
                  <li>Learning profile is updated</li>
                </ol>
              </div>
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold text-gray-100 mb-4">Emotion Analysis Workflow</h2>
            <div className="bg-gray-700 p-6 rounded-lg border border-gray-600">
              <div className="flex justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                  alt="Emotion Analysis Workflow" 
                  className="max-w-full h-auto rounded-lg shadow-md"
                />
              </div>
              <div className="mt-6 space-y-4">
                <h3 className="text-xl font-medium text-purple-300">Process Steps:</h3>
                <ol className="list-decimal pl-6 space-y-2 text-gray-300">
                  <li>Camera captures user's facial expressions</li>
                  <li>AI model processes facial data</li>
                  <li>Emotion is classified using GoEmotions dataset</li>
                  <li>System determines engagement/stress level</li>
                  <li>Learning content is adjusted in real-time</li>
                  <li>Mental health support is triggered if needed</li>
                </ol>
              </div>
            </div>
          </section>
          
          <section>
      <h2 className="text-2xl font-semibold text-gray-100 mb-4">Community Interaction Flow</h2>
            <div className="bg-gray-700 p-6 rounded-lg border border-gray-600">
              <div className="flex justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
                  alt="Community Interaction Flow" 
                  className="max-w-full h-auto rounded-lg shadow-md"
                />
              </div>
              <div className="mt-6 space-y-4">
                <h3 className="text-xl font-medium text-purple-300">Process Steps:</h3>
                <ol className="list-decimal pl-6 space-y-2 text-gray-300">
                  <li>User posts question or response</li>
                  <li>AI moderator reviews content</li>
                  <li>Content is published to community</li>
                  <li>Other users interact with content</li>
                  <li>AI ranks responses by quality and relevance</li>
                  <li>System awards engagement points</li>
                </ol>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Workflows;
