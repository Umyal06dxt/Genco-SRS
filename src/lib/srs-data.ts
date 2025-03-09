
import { BookOpen, Compass, Layout, Code, Shield, Zap, Bell, RefreshCw } from 'lucide-react';

export type DiagramType = 'flowchart' | 'usecase' | 'sequence' | 'architecture';

export interface Diagram {
  id: string;
  title: string;
  description: string;
  type: DiagramType;
  svgContent: string;
}

export interface SubSection {
  id: string;
  title: string;
  content: string;
}

export interface SRSSection {
  id: string;
  title: string;
  description: string;
  icon: any;
  subsections: SubSection[];
  diagrams?: Diagram[];
}

// SVG diagrams as strings
const useCaseDiagram = `
<svg width="100%" height="300" viewBox="0 0 800 300" xmlns="http://www.w3.org/2000/svg">
  <!-- Actor -->
  <g>
    <circle cx="100" cy="100" r="20" fill="#e5e7eb" stroke="#374151" stroke-width="2"/>
    <line x1="100" y1="120" x2="100" y2="180" stroke="#374151" stroke-width="2"/>
    <line x1="70" y1="140" x2="130" y2="140" stroke="#374151" stroke-width="2"/>
    <line x1="100" y1="180" x2="70" y2="220" stroke="#374151" stroke-width="2"/>
    <line x1="100" y1="180" x2="130" y2="220" stroke="#374151" stroke-width="2"/>
    <text x="100" y="250" text-anchor="middle" font-size="14">User</text>
  </g>
  
  <!-- Use Cases -->
  <ellipse cx="350" cy="80" rx="120" ry="40" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
  <text x="350" y="85" text-anchor="middle" font-size="14">View SRS Document</text>
  
  <ellipse cx="350" cy="160" rx="120" ry="40" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
  <text x="350" y="165" text-anchor="middle" font-size="14">Navigate SRS Sections</text>
  
  <ellipse cx="350" cy="240" rx="120" ry="40" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
  <text x="350" y="245" text-anchor="middle" font-size="14">Download SRS</text>
  
  <!-- System Boundary -->
  <rect x="230" y="40" width="400" height="240" rx="10" ry="10" fill="none" stroke="#9ca3af" stroke-width="2" stroke-dasharray="5,5"/>
  <text x="430" y="30" text-anchor="middle" font-size="14" font-weight="bold">SRS Document System</text>
  
  <!-- Actor Connections -->
  <line x1="120" y1="100" x2="230" y2="80" stroke="#9ca3af" stroke-width="1.5"/>
  <line x1="120" y1="140" x2="230" y2="160" stroke="#9ca3af" stroke-width="1.5"/>
  <line x1="120" y1="180" x2="230" y2="240" stroke="#9ca3af" stroke-width="1.5"/>
  
  <!-- Administrator Actor -->
  <g>
    <circle cx="700" cy="100" r="20" fill="#e5e7eb" stroke="#374151" stroke-width="2"/>
    <line x1="700" y1="120" x2="700" y2="180" stroke="#374151" stroke-width="2"/>
    <line x1="670" y1="140" x2="730" y2="140" stroke="#374151" stroke-width="2"/>
    <line x1="700" y1="180" x2="670" y2="220" stroke="#374151" stroke-width="2"/>
    <line x1="700" y1="180" x2="730" y2="220" stroke="#374151" stroke-width="2"/>
    <text x="700" y="250" text-anchor="middle" font-size="14">Admin</text>
  </g>
  
  <!-- Admin Connections -->
  <line x1="680" y1="100" x2="470" y2="80" stroke="#9ca3af" stroke-width="1.5"/>
  <line x1="680" y1="140" x2="470" y2="160" stroke="#9ca3af" stroke-width="1.5"/>
  <line x1="680" y1="180" x2="470" y2="240" stroke="#9ca3af" stroke-width="1.5"/>
</svg>
`;

const architectureDiagram = `
<svg width="100%" height="350" viewBox="0 0 800 350" xmlns="http://www.w3.org/2000/svg">
  <!-- Client Layer -->
  <rect x="100" y="50" width="600" height="80" rx="8" ry="8" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
  <text x="400" y="75" text-anchor="middle" font-size="16" font-weight="bold">Client Layer</text>
  <rect x="150" y="90" width="120" height="30" rx="5" ry="5" fill="#bfdbfe" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="210" y="110" text-anchor="middle" font-size="14">React UI</text>
  <rect x="340" y="90" width="120" height="30" rx="5" ry="5" fill="#bfdbfe" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="400" y="110" text-anchor="middle" font-size="14">Components</text>
  <rect x="530" y="90" width="120" height="30" rx="5" ry="5" fill="#bfdbfe" stroke="#3b82f6" stroke-width="1.5"/>
  <text x="590" y="110" text-anchor="middle" font-size="14">Router</text>
  
  <!-- Arrows -->
  <line x1="400" y1="130" x2="400" y2="160" stroke="#64748b" stroke-width="2" marker-end="url(#arrowhead)"/>
  
  <!-- Application Layer -->
  <rect x="100" y="160" width="600" height="80" rx="8" ry="8" fill="#e0f2fe" stroke="#0284c7" stroke-width="2"/>
  <text x="400" y="185" text-anchor="middle" font-size="16" font-weight="bold">Application Layer</text>
  <rect x="150" y="200" width="120" height="30" rx="5" ry="5" fill="#bae6fd" stroke="#0ea5e9" stroke-width="1.5"/>
  <text x="210" y="220" text-anchor="middle" font-size="14">Services</text>
  <rect x="340" y="200" width="120" height="30" rx="5" ry="5" fill="#bae6fd" stroke="#0ea5e9" stroke-width="1.5"/>
  <text x="400" y="220" text-anchor="middle" font-size="14">State Management</text>
  <rect x="530" y="200" width="120" height="30" rx="5" ry="5" fill="#bae6fd" stroke="#0ea5e9" stroke-width="1.5"/>
  <text x="590" y="220" text-anchor="middle" font-size="14">Utilities</text>
  
  <!-- Arrows -->
  <line x1="400" y1="240" x2="400" y2="270" stroke="#64748b" stroke-width="2" marker-end="url(#arrowhead)"/>
  
  <!-- Data Layer -->
  <rect x="100" y="270" width="600" height="80" rx="8" ry="8" fill="#f0f9ff" stroke="#0369a1" stroke-width="2"/>
  <text x="400" y="295" text-anchor="middle" font-size="16" font-weight="bold">Data Layer</text>
  <rect x="210" y="310" width="160" height="30" rx="5" ry="5" fill="#e0f7fa" stroke="#06b6d4" stroke-width="1.5"/>
  <text x="290" y="330" text-anchor="middle" font-size="14">Static SRS Content</text>
  <rect x="440" y="310" width="160" height="30" rx="5" ry="5" fill="#e0f7fa" stroke="#06b6d4" stroke-width="1.5"/>
  <text x="520" y="330" text-anchor="middle" font-size="14">Diagram Renderer</text>
  
  <!-- Define the arrowhead marker -->
  <defs>
    <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
      <polygon points="0 0, 10 3.5, 0 7" fill="#64748b"/>
    </marker>
  </defs>
</svg>
`;

const flowchartDiagram = `
<svg width="100%" height="400" viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg">
  <!-- Start -->
  <ellipse cx="400" cy="40" rx="80" ry="30" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
  <text x="400" y="45" text-anchor="middle" font-size="14">Start</text>
  
  <!-- Arrow -->
  <line x1="400" y1="70" x2="400" y2="100" stroke="#64748b" stroke-width="2" marker-end="url(#arrowhead)"/>
  
  <!-- Process: User Visits Landing Page -->
  <rect x="320" y="100" width="160" height="50" rx="8" ry="8" fill="#bfdbfe" stroke="#3b82f6" stroke-width="2"/>
  <text x="400" y="130" text-anchor="middle" font-size="14">User Visits Landing Page</text>
  
  <!-- Arrow -->
  <line x1="400" y1="150" x2="400" y2="180" stroke="#64748b" stroke-width="2" marker-end="url(#arrowhead)"/>
  
  <!-- Decision: View SRS? -->
  <polygon points="400,180 480,230 400,280 320,230" fill="#e0f2fe" stroke="#0284c7" stroke-width="2"/>
  <text x="400" y="230" text-anchor="middle" font-size="14">View SRS?</text>
  
  <!-- Arrow (No) -->
  <line x1="320" y1="230" x2="220" y2="230" stroke="#64748b" stroke-width="2" marker-end="url(#arrowhead)"/>
  <text x="270" y="220" text-anchor="middle" font-size="12">No</text>
  
  <!-- Process: Stay on Landing Page -->
  <rect x="120" y="205" width="100" height="50" rx="8" ry="8" fill="#bfdbfe" stroke="#3b82f6" stroke-width="2"/>
  <text x="170" y="230" text-anchor="middle" font-size="12">Stay on Landing</text>
  
  <!-- Arrow (Yes) -->
  <line x1="400" y1="280" x2="400" y2="310" stroke="#64748b" stroke-width="2" marker-end="url(#arrowhead)"/>
  <text x="410" y="300" text-anchor="middle" font-size="12">Yes</text>
  
  <!-- Process: Navigate to SRS Page -->
  <rect x="320" y="310" width="160" height="50" rx="8" ry="8" fill="#bfdbfe" stroke="#3b82f6" stroke-width="2"/>
  <text x="400" y="340" text-anchor="middle" font-size="14">Navigate to SRS Page</text>
  
  <!-- Connect back from Stay on Landing -->
  <line x1="170" y1="255" x2="170" y2="340" stroke="#64748b" stroke-width="2"/>
  <line x1="170" y1="340" x2="320" y2="340" stroke="#64748b" stroke-width="2" marker-end="url(#arrowhead)"/>
  
  <!-- Define the arrowhead marker -->
  <defs>
    <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
      <polygon points="0 0, 10 3.5, 0 7" fill="#64748b"/>
    </marker>
  </defs>
</svg>
`;

const sequenceDiagram = `
<svg width="100%" height="400" viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg">
  <!-- Actor: User -->
  <rect x="100" y="30" width="100" height="40" rx="5" ry="5" fill="#f1f5f9" stroke="#475569" stroke-width="2"/>
  <text x="150" y="55" text-anchor="middle" font-size="14">User</text>
  <line x1="150" y1="70" x2="150" y2="350" stroke="#94a3b8" stroke-width="1" stroke-dasharray="5,5"/>
  
  <!-- Component: Landing Page -->
  <rect x="250" y="30" width="100" height="40" rx="5" ry="5" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
  <text x="300" y="55" text-anchor="middle" font-size="14">Landing Page</text>
  <line x1="300" y1="70" x2="300" y2="350" stroke="#94a3b8" stroke-width="1" stroke-dasharray="5,5"/>
  
  <!-- Component: SRS Document -->
  <rect x="400" y="30" width="100" height="40" rx="5" ry="5" fill="#bfdbfe" stroke="#3b82f6" stroke-width="2"/>
  <text x="450" y="55" text-anchor="middle" font-size="14">SRS Document</text>
  <line x1="450" y1="70" x2="450" y2="350" stroke="#94a3b8" stroke-width="1" stroke-dasharray="5,5"/>
  
  <!-- Component: Diagram Viewer -->
  <rect x="550" y="30" width="100" height="40" rx="5" ry="5" fill="#e0f2fe" stroke="#0284c7" stroke-width="2"/>
  <text x="600" y="55" text-anchor="middle" font-size="14">Diagram Viewer</text>
  <line x1="600" y1="70" x2="600" y2="350" stroke="#94a3b8" stroke-width="1" stroke-dasharray="5,5"/>
  
  <!-- Message 1: Visit Site -->
  <line x1="150" y1="100" x2="300" y2="100" stroke="#475569" stroke-width="1.5" marker-end="url(#arrowhead)"/>
  <rect x="180" y="85" width="90" height="20" rx="3" ry="3" fill="#f1f5f9" stroke="none"/>
  <text x="225" y="100" text-anchor="middle" font-size="12">Visit Site</text>
  
  <!-- Activation Box 1 -->
  <rect x="295" y="100" width="10" height="40" fill="#2563eb" stroke="none"/>
  
  <!-- Message 2: Show Landing Page -->
  <line x1="305" y1="140" x2="150" y2="140" stroke="#475569" stroke-width="1.5" stroke-dasharray="5,3" marker-end="url(#arrowhead)"/>
  <rect x="180" y="125" width="90" height="20" rx="3" ry="3" fill="#f1f5f9" stroke="none"/>
  <text x="225" y="140" text-anchor="middle" font-size="12">Show Page</text>
  
  <!-- Message 3: Click View SRS -->
  <line x1="150" y1="180" x2="300" y2="180" stroke="#475569" stroke-width="1.5" marker-end="url(#arrowhead)"/>
  <rect x="170" y="165" width="110" height="20" rx="3" ry="3" fill="#f1f5f9" stroke="none"/>
  <text x="225" y="180" text-anchor="middle" font-size="12">Click View SRS</text>
  
  <!-- Activation Box 2 -->
  <rect x="295" y="180" width="10" height="40" fill="#2563eb" stroke="none"/>
  
  <!-- Message 4: Navigate to SRS Page -->
  <line x1="305" y1="220" x2="450" y2="220" stroke="#475569" stroke-width="1.5" marker-end="url(#arrowhead)"/>
  <rect x="335" y="205" width="90" height="20" rx="3" ry="3" fill="#f1f5f9" stroke="none"/>
  <text x="380" y="220" text-anchor="middle" font-size="12">Navigate</text>
  
  <!-- Activation Box 3 -->
  <rect x="445" y="220" width="10" height="80" fill="#3b82f6" stroke="none"/>
  
  <!-- Message 5: Display SRS Content -->
  <line x1="455" y1="260" x2="150" y2="260" stroke="#475569" stroke-width="1.5" stroke-dasharray="5,3" marker-end="url(#arrowhead)"/>
  <rect x="250" y="245" width="100" height="20" rx="3" ry="3" fill="#f1f5f9" stroke="none"/>
  <text x="300" y="260" text-anchor="middle" font-size="12">Display Content</text>
  
  <!-- Message 6: View Diagram -->
  <line x1="150" y1="300" x2="450" y2="300" stroke="#475569" stroke-width="1.5" marker-end="url(#arrowhead)"/>
  <rect x="250" y="285" width="100" height="20" rx="3" ry="3" fill="#f1f5f9" stroke="none"/>
  <text x="300" y="300" text-anchor="middle" font-size="12">View Diagram</text>
  
  <!-- Message 7: Load Diagram -->
  <line x1="455" y1="320" x2="600" y2="320" stroke="#475569" stroke-width="1.5" marker-end="url(#arrowhead)"/>
  <rect x="485" y="305" width="90" height="20" rx="3" ry="3" fill="#f1f5f9" stroke="none"/>
  <text x="530" y="320" text-anchor="middle" font-size="12">Load Diagram</text>
  
  <!-- Activation Box 4 -->
  <rect x="595" y="320" width="10" height="30" fill="#0284c7" stroke="none"/>
  
  <!-- Define the arrowhead marker -->
  <defs>
    <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="10" refY="3.5" orient="auto">
      <polygon points="0 0, 10 3.5, 0 7" fill="#475569"/>
    </marker>
  </defs>
</svg>
`;

// SRS document data
export const srsSections: SRSSection[] = [
  {
    id: "intro",
    title: "1. Introduction",
    description: "Overview and purpose of the Software Requirements Specification",
    icon: BookOpen,
    subsections: [
      {
        id: "intro-purpose",
        title: "1.1 Purpose",
        content: "This Software Requirements Specification (SRS) document provides a detailed description of the requirements for the SRS Structure application. It outlines the functional and non-functional requirements and helps the development team understand what is to be built and how it should perform."
      },
      {
        id: "intro-scope",
        title: "1.2 Scope",
        content: "The SRS Structure application is a web-based platform that allows users to view and navigate through a Software Requirements Specification document following IEEE standards. The system provides an interactive interface for exploring SRS content, including diagrams and figures. The application is intended for project managers, developers, stakeholders, and other individuals involved in software development projects."
      },
      {
        id: "intro-definitions",
        title: "1.3 Definitions, Acronyms, and Abbreviations",
        content: "• SRS: Software Requirements Specification\n• IEEE: Institute of Electrical and Electronics Engineers\n• UI: User Interface\n• UX: User Experience\n• UML: Unified Modeling Language\n• PDF: Portable Document Format\n• DOCX: Microsoft Word Document format"
      }
    ],
    diagrams: [
      {
        id: "diagram-intro",
        title: "SRS Structure Overview",
        description: "High-level overview of the SRS document structure and organization.",
        type: "flowchart",
        svgContent: flowchartDiagram
      }
    ]
  },
  {
    id: "overall-desc",
    title: "2. Overall Description",
    description: "Product perspective, constraints, and assumptions",
    icon: Compass,
    subsections: [
      {
        id: "desc-perspective",
        title: "2.1 Product Perspective",
        content: "The SRS Structure application is a standalone web-based system that provides a modern interface for viewing and navigating Software Requirements Specification documents. It is designed to replace traditional static document formats with an interactive experience that enhances readability and understanding of software requirements."
      },
      {
        id: "desc-functions",
        title: "2.2 Product Functions",
        content: "• Display a landing page with information about SRS and IEEE standards\n• Provide navigation to view the detailed SRS document\n• Allow users to expand/collapse different sections of the SRS\n• Display interactive diagrams related to software requirements\n• Enable users to download the SRS document in different formats\n• Support responsive design for different device sizes"
      },
      {
        id: "desc-constraints",
        title: "2.3 Design and Implementation Constraints",
        content: "• The application must be developed using React.js and Tailwind CSS\n• All interactive diagrams must be rendered using SVG\n• The application must conform to IEEE standards for SRS documentation\n• The system must be compatible with modern web browsers (Chrome, Firefox, Safari, Edge)\n• The application should maintain a light theme with a professional look and feel"
      },
      {
        id: "desc-assumptions",
        title: "2.4 Assumptions and Dependencies",
        content: "• Users have basic knowledge of software development concepts\n• Users have internet access and a modern web browser\n• The system does not require a backend database for the initial release\n• The SRS content will be statically defined in the application"
      }
    ],
    diagrams: [
      {
        id: "diagram-usecase",
        title: "Use Case Diagram",
        description: "Main use cases for the SRS Structure application.",
        type: "usecase",
        svgContent: useCaseDiagram
      }
    ]
  },
  {
    id: "requirements",
    title: "3. Specific Requirements",
    description: "Detailed functional and non-functional requirements",
    icon: Layout,
    subsections: [
      {
        id: "req-functional",
        title: "3.1 Functional Requirements",
        content: "3.1.1 Landing Page\n• The system shall display a welcome message introducing SRS and IEEE standards\n• The system shall provide a call-to-action button to view the SRS document\n• The system shall display a professional background illustration related to software documentation\n\n3.1.2 SRS Document Page\n• The system shall display organized sections of an IEEE-compliant SRS document\n• The system shall enable users to expand and collapse different sections\n• The system shall render interactive diagrams and figures within relevant sections\n• The system shall provide navigation back to the landing page"
      },
      {
        id: "req-performance",
        title: "3.2 Performance Requirements",
        content: "• The application shall load the landing page within 2 seconds on standard broadband connections\n• The application shall render interactive diagrams within 1 second of expanding a section\n• The application shall support at least 100 concurrent users without performance degradation\n• Page transitions shall be smooth and appear within 300ms"
      },
      {
        id: "req-interface",
        title: "3.3 Interface Requirements",
        content: "3.3.1 User Interface\n• The UI shall follow a light theme with soft shades of blue, gray, and white\n• The UI shall use rounded buttons with soft shadows\n• The UI shall implement subtle animations for page transitions and interactions\n• The typography shall be modern and readable (e.g., Inter, Roboto, or Open Sans)\n\n3.3.2 Software Interfaces\n• The application shall be compatible with modern web browsers\n• The application shall use React.js for the frontend implementation\n• The application shall use Tailwind CSS for styling components"
      },
      {
        id: "req-security",
        title: "3.4 Security Requirements",
        content: "• The application shall enforce content security policies to prevent XSS attacks\n• The application shall implement appropriate measures to protect against common web vulnerabilities\n• The application shall not collect or store user personal information"
      }
    ],
    diagrams: [
      {
        id: "diagram-sequence",
        title: "Sequence Diagram",
        description: "Interaction sequence for viewing the SRS document.",
        type: "sequence",
        svgContent: sequenceDiagram
      }
    ]
  },
  {
    id: "other-requirements",
    title: "4. Other Requirements",
    description: "Additional requirements and considerations",
    icon: Code,
    subsections: [
      {
        id: "other-attributes",
        title: "4.1 Quality Attributes",
        content: "4.1.1 Usability\n• The system shall be intuitive enough that users can navigate the SRS without training\n• The system shall use consistent UI patterns throughout\n• The system shall provide clear visual feedback for user interactions\n\n4.1.2 Reliability\n• The system shall display appropriate error messages when errors occur\n• The system shall recover gracefully from user input errors\n\n4.1.3 Maintainability\n• The code shall be well-structured and documented\n• The system shall use component-based architecture for easy updates"
      },
      {
        id: "other-analysis",
        title: "4.2 Analysis Models",
        content: "The following analysis models are included to provide additional context for the requirements:\n• Use Case Diagram - showing the main use cases of the system\n• Sequence Diagram - illustrating the typical flow of operations\n• Architecture Diagram - showing the system components and their relationships"
      }
    ],
    diagrams: [
      {
        id: "diagram-architecture",
        title: "Architecture Diagram",
        description: "High-level architecture of the SRS Structure application.",
        type: "architecture",
        svgContent: architectureDiagram
      }
    ]
  },
  {
    id: "security",
    title: "5. Security Considerations",
    description: "Security aspects and protection measures",
    icon: Shield,
    subsections: [
      {
        id: "security-compliance",
        title: "5.1 Compliance Requirements",
        content: "The application shall comply with relevant web security standards, including OWASP guidelines for secure web application development. Regular security assessments shall be conducted to ensure compliance with these standards."
      },
      {
        id: "security-data",
        title: "5.2 Data Protection",
        content: "Although the application does not collect personal data in the initial release, appropriate measures shall be implemented to protect any information displayed or processed by the application."
      }
    ]
  },
  {
    id: "performance",
    title: "6. Performance Requirements",
    description: "Performance criteria and benchmarks",
    icon: Zap,
    subsections: [
      {
        id: "perf-response",
        title: "6.1 Response Time",
        content: "• The application shall load the landing page within 2 seconds on standard broadband connections\n• Navigation between pages shall complete within 1 second\n• Interactive elements shall respond to user input within 200ms"
      },
      {
        id: "perf-capacity",
        title: "6.2 Capacity",
        content: "• The application shall support at least a 100KB SRS document without performance degradation\n• The application shall support at least 20 interactive diagrams within a single SRS document"
      },
      {
        id: "perf-scalability",
        title: "6.3 Scalability",
        content: "The application architecture shall support future enhancements including handling larger SRS documents and additional interactive features without requiring major redesign."
      }
    ]
  },
  {
    id: "future",
    title: "7. Future Enhancements",
    description: "Planned improvements and extensions",
    icon: Bell,
    subsections: [
      {
        id: "future-features",
        title: "7.1 Potential Future Features",
        content: "• User authentication and personalized SRS views\n• Collaborative editing of SRS documents\n• Integration with requirements management tools\n• Version history and comparison of SRS documents\n• Support for multiple SRS templates and standards"
      },
      {
        id: "future-tech",
        title: "7.2 Technology Considerations",
        content: "Future versions may incorporate additional technologies to enhance functionality:\n• Backend database for storing multiple SRS documents\n• Real-time collaboration features using WebSockets\n• Advanced rendering options for complex diagrams and models\n• Machine learning for requirements analysis and validation"
      }
    ]
  },
  {
    id: "appendix",
    title: "8. Appendix",
    description: "Supporting information and references",
    icon: RefreshCw,
    subsections: [
      {
        id: "appendix-refs",
        title: "8.1 References",
        content: "• IEEE 830-1998 - IEEE Recommended Practice for Software Requirements Specifications\n• IEEE 29148-2018 - ISO/IEC/IEEE International Standard - Systems and software engineering - Life cycle processes - Requirements engineering\n• React.js Documentation - https://reactjs.org/docs\n• Tailwind CSS Documentation - https://tailwindcss.com/docs"
      },
      {
        id: "appendix-glossary",
        title: "8.2 Glossary",
        content: "• Frontend: The user-facing part of an application\n• Component: A reusable piece of UI in React\n• Responsive Design: Design approach that makes web pages render well on different devices and window sizes\n• SVG: Scalable Vector Graphics, an XML-based vector image format\n• IEEE Standard: A published specification developed by the Institute of Electrical and Electronics Engineers"
      }
    ]
  }
];
