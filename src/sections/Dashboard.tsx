import React from 'react';
import { BookOpen, Users, Code, BarChart4, Workflow, Layout } from 'lucide-react';

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="bg-gray-800 shadow-md rounded-lg overflow-hidden">
        <div className="p-6 bg-gradient-to-r from-purple-900 to-purple-600 text-white">
          <h1 className="text-3xl font-bold">GENCO</h1>
          <p className="mt-2 text-purple-100">
            AI-powered educational platform - Software Requirements Specification
          </p>
        </div>
        <div className="p-6">
          <p className="text-gray-300">
            This document provides a comprehensive overview of the requirements for the GENCO platform,
            adhering to IEEE standards to ensure clarity, completeness, and usability for all stakeholders
            involved in the development process.
          </p>
          
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-700 p-4 rounded-lg border border-gray-600">
              <h3 className="font-semibold text-purple-300 flex items-center">
                <BookOpen className="mr-2 h-5 w-5" /> Document Purpose
              </h3>
              <p className="mt-2 text-sm text-gray-300">
                To provide a detailed description of the GENCO platform, an AI-powered educational tool
                designed to enhance learning experiences.
              </p>
            </div>
            
            <div className="bg-gray-700 p-4 rounded-lg border border-gray-600">
              <h3 className="font-semibold text-purple-300 flex items-center">
                <Users className="mr-2 h-5 w-5" /> Intended Audience
              </h3>
              <p className="mt-2 text-sm text-gray-300">
                Developers, Project Managers, Investors, and Researchers involved in the GENCO project.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
          <div className="flex items-center">
            <Code className="h-10 w-10 text-purple-500" />
            <h2 className="ml-3 text-xl font-semibold text-gray-100">Core Features</h2>
          </div>
          <ul className="mt-4 space-y-2 text-gray-300">
            <li className="flex items-start">
              <span className="h-6 w-6 text-purple-400 mr-2">•</span>
              <span>Emotion-Supported AI</span>
            </li>
            <li className="flex items-start">
              <span className="h-6 w-6 text-purple-400 mr-2">•</span>
              <span>Dynamic Quizzes</span>
            </li>
            <li className="flex items-start">
              <span className="h-6 w-6 text-purple-400 mr-2">•</span>
              <span>Interactive Community</span>
            </li>
            <li className="flex items-start">
              <span className="h-6 w-6 text-purple-400 mr-2">•</span>
              <span>Smart Flashcards</span>
            </li>
          </ul>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
          <div className="flex items-center">
            <BarChart4 className="h-10 w-10 text-purple-500" />
            <h2 className="ml-3 text-xl font-semibold text-gray-100">Documentation</h2>
          </div>
          <ul className="mt-4 space-y-2 text-gray-300">
            <li className="flex items-start">
              <span className="h-6 w-6 text-purple-400 mr-2">•</span>
              <span>Introduction</span>
            </li>
            <li className="flex items-start">
              <span className="h-6 w-6 text-purple-400 mr-2">•</span>
              <span>Overall Description</span>
            </li>
            <li className="flex items-start">
              <span className="h-6 w-6 text-purple-400 mr-2">•</span>
              <span>Specific Requirements</span>
            </li>
            <li className="flex items-start">
              <span className="h-6 w-6 text-purple-400 mr-2">•</span>
              <span>Appendices</span>
            </li>
          </ul>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
          <div className="flex items-center">
            <Workflow className="h-10 w-10 text-purple-500" />
            <h2 className="ml-3 text-xl font-semibold text-gray-100">Visual Resources</h2>
          </div>
          <ul className="mt-4 space-y-2 text-gray-300">
            <li className="flex items-start">
              <span className="h-6 w-6 text-purple-400 mr-2">•</span>
              <span>System Diagrams</span>
            </li>
            <li className="flex items-start">
              <span className="h-6 w-6 text-purple-400 mr-2">•</span>
              <span>Workflow Charts</span>
            </li>
            <li className="flex items-start">
              <span className="h-6 w-6 text-purple-400 mr-2">•</span>
              <span>UI Wireframes</span>
            </li>
            <li className="flex items-start">
              <span className="h-6 w-6 text-purple-400 mr-2">•</span>
              <span>Data Models</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="bg-gray-800 p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold text-gray-100 mb-4">Document Revision History</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-700">
            <thead className="bg-gray-700">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Version</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Changes</th>
              </tr>
            </thead>
            <tbody className="bg-gray-800 divide-y divide-gray-700">
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">1.0</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">2025-03-03</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">Initial Draft</td>
              </tr>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">1.1</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">TBD</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">Review Changes</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;