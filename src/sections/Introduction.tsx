import React from 'react';

const Introduction: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="bg-gray-800 shadow-md rounded-lg overflow-hidden">
        <div className="p-6 bg-gradient-to-r from-purple-900 to-purple-600 text-white">
          <h1 className="text-3xl font-bold">1. Introduction</h1>
        </div>
        
        <div className="p-6 space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-gray-100 mb-4">1.1 Purpose</h2>
            <p className="text-gray-300">
              The purpose of this Software Requirements Specification (SRS) document is to provide a detailed description of the GENCO platform, an AI-powered educational tool designed to enhance learning experiences through interactive, AI-driven, and community-supported features. This document outlines the functional and non-functional requirements, system architecture, and design constraints to guide the development team in creating a robust and effective educational platform.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold text-gray-100 mb-4">1.2 Document Conventions</h2>
            <p className="text-gray-300">
              This document adheres to the IEEE Std 830-1998 standard for Software Requirements Specifications. Sections are organized using a hierarchical numbering system for clarity and ease of reference.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold text-gray-100 mb-4">1.3 Intended Audience and Reading Suggestions</h2>
            <p className="text-gray-300 mb-4">
              This document is intended for the following stakeholders:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li><strong className="text-purple-300">Developers:</strong> Responsible for implementing the system.</li>
              <li><strong className="text-purple-300">Project Managers:</strong> Overseeing the development process and timelines.</li>
              <li><strong className="text-purple-300">Investors:</strong> Evaluating the feasibility and potential return on investment.</li>
              <li><strong className="text-purple-300">Researchers:</strong> Analyzing the integration of AI in educational contexts.</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold text-gray-100 mb-4">1.4 Product Scope</h2>
            <p className="text-gray-300">
              GENCO aims to revolutionize online learning by integrating AI-driven insights, community engagement, and adaptive content delivery. The platform will offer interactive quizzes, real-time feedback, and mental health support, creating a personalized and effective learning environment.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold text-gray-100 mb-4">1.5 References</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>IEEE Std 830-1998 – Recommended Practice for Software Requirements Specifications</li>
              <li>TensorFlow, PyTorch, Keras Documentation</li>
              <li>MongoDB, Firebase Documentation</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Introduction;