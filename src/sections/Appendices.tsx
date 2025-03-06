import React from 'react';

const Appendices: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="bg-gray-800 shadow-md rounded-lg overflow-hidden">
        <div className="p-6 bg-gradient-to-r from-purple-900 to-purple-600 text-white">
          <h1 className="text-3xl font-bold">4. Appendices</h1>
        </div>
        
        <div className="p-6 space-y-6">
          <section>
            <h2 className="text-2xl font-semibold text-gray-100 mb-4">4.1 Glossary</h2>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-700">
                <thead className="bg-gray-700">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Term</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Definition</th>
                  </tr>
                </thead>
                <tbody className="bg-gray-800 divide-y divide-gray-700">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-purple-300">GoEmotions</td>
                    <td className="px-6 py-4 text-sm text-gray-300">A dataset developed by Google for emotion detection using natural language processing.</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-purple-300">RBAC</td>
                    <td className="px-6 py-4 text-sm text-gray-300">Role-Based Access Control, a method for regulating access to system resources based on user roles.</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-purple-300">LMS</td>
                    <td className="px-6 py-4 text-sm text-gray-300">Learning Management System, software for delivering, tracking, and managing training and education.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold text-gray-100 mb-4">4.2 References</h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              <li>TensorFlow, OpenCV, Firebase Documentation.</li>
              <li>GDPR Compliance Standards.</li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold text-gray-100 mb-4">5. Revision History</h2>
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
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold text-gray-100 mb-4">Final Notes</h2>
            <p className="text-gray-300">
              This SRS document provides a comprehensive overview of the requirements for the GENCO platform, adhering to IEEE standards to ensure clarity, completeness, and usability for all stakeholders involved in the development process.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Appendices;