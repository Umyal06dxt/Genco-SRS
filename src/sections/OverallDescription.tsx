import React from 'react';

const OverallDescription: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="bg-gray-800 shadow-md rounded-lg overflow-hidden">
        <div className="p-6 bg-gradient-to-r from-purple-900 to-purple-600 text-white">
          <h1 className="text-3xl font-bold">2. Overall Description</h1>
        </div>
        
        <div className="p-6 space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-gray-100 mb-4">2.1 Product Perspective</h2>
            <p className="text-gray-300">
              GENCO is a standalone AI-enhanced learning platform accessible via web and mobile applications. It leverages machine learning, facial expression analysis, and adaptive learning algorithms to deliver a unique educational experience tailored to individual user needs.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold text-gray-100 mb-4">2.2 Product Functions</h2>
            <h3 className="text-xl font-medium text-purple-300 mb-2">Core Features</h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li><strong className="text-purple-300">Emotion-Supported AI:</strong> Real-time facial expression analysis to assess student engagement and stress levels.</li>
              <li><strong className="text-purple-300">Dynamic Quizzes:</strong> Adaptive assessments that provide real-time feedback based on user performance.</li>
              <li><strong className="text-purple-300">Interactive Community:</strong> Peer-driven Q&A forums moderated by AI to ensure constructive discussions.</li>
              <li><strong className="text-purple-300">Smart Flashcards:</strong> AI-generated study materials tailored to the user's syllabus and learning style.</li>
              <li><strong className="text-purple-300">Virtual Labs:</strong> Simulated experiments designed for STEM education.</li>
              <li><strong className="text-purple-300">AI Grooming Advisor:</strong> Feedback on public speaking and soft skills development.</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold text-gray-100 mb-4">2.3 User Classes and Characteristics</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li><strong className="text-purple-300">Students:</strong> Primary users who engage with the AI-powered learning tools.</li>
              <li><strong className="text-purple-300">Teachers:</strong> Users who monitor student progress and customize educational content.</li>
              <li><strong className="text-purple-300">Administrators:</strong> Users responsible for managing the system infrastructure and user accounts.</li>
              <li><strong className="text-purple-300">Developers:</strong> Technical team members who expand and maintain platform capabilities.</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold text-gray-100 mb-4">2.4 Operating Environment</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li><strong className="text-purple-300">Web Application:</strong> Built using React Native and Node.js, with a MongoDB database.</li>
              <li><strong className="text-purple-300">Mobile Application:</strong> Available on iOS and Android platforms.</li>
              <li><strong className="text-purple-300">Cloud Hosting:</strong> Deployed on AWS and Firebase for scalability and reliability.</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold text-gray-100 mb-4">2.5 Design and Implementation Constraints</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Compliance with data privacy regulations (GDPR, FERPA).</li>
              <li>Limitations of AI models and their training data.</li>
              <li>Support for multiple languages to cater to a diverse user base.</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold text-gray-100 mb-4">2.6 Assumptions and Dependencies</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>Users will have access to a stable internet connection.</li>
              <li>AI models will require periodic retraining to maintain accuracy.</li>
              <li>Community moderation will be supported by AI algorithms.</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default OverallDescription;