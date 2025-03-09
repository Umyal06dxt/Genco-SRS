
import { Bell, BookOpen, Code, Compass, Layout, RefreshCw, Shield } from 'lucide-react';
import d21 from '../assets/d2.1.svg';
import d21a from '../assets/d2.2 (1).svg';
import d23 from '../assets/d2.3.svg';
import d25 from '../assets/d2.5.svg';
import d31 from '../assets/d3.1.svg';
import d35 from '../assets/d3.5.drawio.svg';
import d41 from '../assets/d4.1.drawio.svg';
// import d25 from '../assets/d2.2 (1).svg';

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
        content: "The purpose of this Software Requirements Specification (SRS) document is to provide a comprehensive overview of an AI-powered educational platform that enhances learning experiences through interactive, AI-driven, and community-supported tools. This document outlines the functional and non-functional requirements, system architecture, and design constraints to guide the development team"
      },
      {
        id: "intro-scope",
        title: "1.2 Document Conventions",
        content: "This document follows the IEEE Std 830-1998 standard for Software Requirements Specifications. A hierarchical numbering system is used for clarity, and important terms are italicized."
      },
      {
        id: "intro-definitions",
        title: "1.3 Intended Audience and Reading Suggestions",
        content: "This document is intended for:\n•	Developers: To understand system design and implement features.\n•	Project Managers: To oversee development and track progress\n•	Investors: To evaluate feasibility and return on investment.\n•	Researchers: To analyze AI integration in education."
      },
      {
        id: "intro-conventions",
        title: "1.4 Project Scope",
        content: "It integrates AI-driven insights, community engagement, and adaptive content delivery to revolutionize online learning. It offers interactive quizzes, real-time feedback, and mental health support to create a personalized and effective learning environment"
      },
      {
        id: "intro-refrences",
        title: "1.5 References",
        content: "•	IEEE Std 830-1998 : Recommended Practice for Software Requirements Specifications\n•	TensorFlow, PyTorch, Keras Documentation\n•	MongoDB, Firebase Documentation"
      },
    ],
    // diagrams: [
    //   {
    //     id: "diagram-intro",
    //     title: "SRS Structure Overview",
    //     description: "High-level overview of the SRS document structure and organization.",
    //     type: "flowchart",
    //     svgContent: flowchartDiagram
    //   }
    // ]
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
        content: "GENCO is a standalone AI-enhanced learning platform accessible via web and mobile applications. It leverages machine learning, facial expression analysis, and adaptive learning algorithms to deliver a unique educational experience tailored to individual user needs",


      },
      {
        id: "desc-functions",
        title: "2.2 Product Features",
        content: "•	Emotion-Supported AI: Analyzes facial expressions for engagement and stress levels.\n•	Dynamic Quizzes: Adaptive assessments with real-time feedback.\n•	Interactive Community: AI-moderated Q&A forums.\n•	Smart Flashcards: AI-generated study materials tailored to users.\n•	Virtual Labs: Simulated experiments for STEM education.\n•	AI Grooming Advisor: Feedback on public speaking and soft skills."
      },
      {
        id: "desc-constraints",
        title: "2.3 User Classes and Characteristics",
        content: "•	Students – Primary users who engage with AI-powered learning tools.\n•	Teachers – Monitor student progress and customize educational content.\n•	Administrators – Manage system infrastructure and user accounts.\n•	Developers – Expand and maintain platform capability"
      },
      {
        id: "desc-assumptions",
        title: "2.4 Operating Environment",
        content: "•	Web Application – Built using React Native and Node.js.\n•	Mobile Application – Available on iOS and Android.\n•	Cloud Hosting – Deployed on AWS and Firebase"
      },
      {
        id: "desc-implementation",
        title: "2.5 Design and Implementation Constraints",
        content: "•	Compliance with GDPR and FERPA.\n•	Limitations of AI models and their training data.\n•	Support for multiple languages."
      },
      {
        id: "desc-Documentation",
        title: "2.6 User Documentation",
        content: "•	User Manuals\n•	FAQs\n•	Video Tutorials"
      },
      {
        id: "desc-Dependencies",
        title: "2.7 Assumptions and Dependencies",
        content: "•	Users will have a stable internet connection.\n•	AI models require periodic retraining.\n•	Community moderation is AI-assisted."
      },


    ],
    diagrams: [
      {
        id: "diagram-usecase",
        title: "",
        description: "",
        type: "usecase",
        svgContent: d21
      },
      {
        id: "diagram-usecase",
        title: "",
        description: "",
        type: "usecase",
        svgContent: d21a
      },
      {
        id: "diagram-usecase",
        title: "",
        description: "",
        type: "usecase",
        svgContent: d23
      },
      {
        id: "diagram-usecase",
        title: "",
        description: "",
        type: "usecase",
        svgContent: d25
      }
    ]

    // diagrams: [
    //   {
    //     id: "diagram-usecase",
    //     title: "Use Case Diagram",
    //     description: "Main use cases for the SRS Structure application.",
    //     type: "usecase",
    //     svgContent: useCaseDiagram
    //   }
    // ]
  },
  {
    id: "requirements",
    title: "3. System Features",
    description: "Detailed features of the platform",
    icon: Layout,
    subsections: [
      {
        id: "req-functional",
        title: "3.1 Emotion-Supported AI",
        content: "•	Real-time facial expression analysis.\n•	Engagement tracking during learning sessions."
      },
      {
        id: "req-performance",
        title: "3.2 Dynamic Quizzes",
        content: "•	AI-generated adaptive questions.\n•	Real-time feedback on user performance"
      },
      {
        id: "req-interface",
        title: "3.3 Interactive Community",
        content: "•	AI-moderated discussion forums.\n•	Peer-driven Q&A system."
      },
      {
        id: "req-Flashcards",
        title: "3.4 Smart Flashcards",
        content: "•	AI-curated study materials.\n•	Personalized learning based on syllabus."
      },
      {
        id: "req-Virtual",
        title: "3.5 Virtual Labs",
        content: "•	Simulated experiments for hands-on STEM learning"
      },
      {
        id: "req-security",
        title: "3.6 AI Grooming Advisor",
        content: "•	Public speaking feedback.\n•	Soft skills evaluation using AI."
      }

    ],
    diagrams: [
      {
        id: "diagram-sequence",
        title: "",
        description: "",
        type: "sequence",
        svgContent: d31
      },
      {
        id: "diagram-sequence",
        title: "",
        description: "",
        type: "sequence",
        svgContent: d35
      }
    ]

    // diagrams: [
    //   {
    //     id: "diagram-sequence",
    //     title: "Sequence Diagram",
    //     description: "Interaction sequence for viewing the SRS document.",
    //     type: "sequence",
    //     svgContent: sequenceDiagram
    //   }
    // ]
  },
  {
    id: "other-requirements",
    title: "4. External Interface Requirements",
    description: "Additional requirements and considerations",
    icon: Code,
    subsections: [
      {
        id: "other-attributes",
        title: "4.1 User Interfaces",
        content: "•	Intuitive UI for web and mobile.\n•	Dark mode and accessibility features"
      },
      {
        id: "other-Hardware",
        title: "4.2 Hardware Interfaces",
        content: "•	Compatible with standard webcams for emotion tracking.\n •Supports external microphones for voice analysis"
      },
      {
        id: "other-Software",
        title: "4.3 Software Interfaces",
        content: "•	Integrates with Firebase for authentication.\n•	Uses TensorFlow for AI-driven analysis."
      },
      {
        id: "other-Communications",
        title: "4.4 Communications Interfaces",
        content: "•	Secure API-based communication.\n•	Email and push notifications."
      }
    ],
    diagrams: [
      {
        id: "diagram-architecture",
        title: "",
        description: "",
        type: "architecture",
        svgContent: d41
      }
    ]
    // diagrams: [
    //   {
    //     id: "diagram-architecture",
    //     title: "Architecture Diagram",
    //     description: "High-level architecture of the SRS Structure application.",
    //     type: "architecture",
    //     svgContent: architectureDiagram
    //   }
    // ]
  },
  {
    id: "security",
    title: "5. Other Nonfunctional Requirements",
    description: "Other nonfunctional Requirements ",
    icon: Shield,
    subsections: [
      {
        id: "security-compliance",
        title: "5.1 Performance Requirements",
        content: "•	API response time < 200ms.\n•	Real-time emotion recognition latency < 300ms"
      },
      {
        id: "security-data",
        title: "5.2 Safety Requirements",
        content:" •	Daily system backups.\n•	Protection against unauthorized access."
      },
      {
        id: "security-Requirements",
        title: "5.3 Security Requirements",
        content:" •	End-to-end encryption.\n	Role-Based Access Control (RBAC)."
      },
      {
        id: "security-Quality ",
        title: "5.4 Software Quality Attributes",
        content:" •	Usability – Intuitive UI with accessibility support.\n•	Maintainability – Modular microservices architecture.\n•	Performance – AI models optimized for efficiency"
      }
    ]
  },
  {
    id: "future",
    title: "6. Other Requirements",
    description: "Future requirements and considerations",
    icon: Bell,
    subsections: [
      {
        id: "future-features",
        title: "7.1 Potential Future Features",
        content: "•	Multi-language support.\n•	Integration with external Learning Management Systems (LMS)."
      },
    ]
  },
  {
    id: "appendix",
    title: "Appendices",
    description: "Supporting information and references",
    icon: RefreshCw,
    subsections: [
      {
        id: "appendix-refs",
        title: "Appendix A: Glossary",
        content: "•	GoEmotions – A dataset for emotion detection.\n•	RBAC – Role-Based Access Control.\n•	LMS – Learning Management System."
      },
      {
        id: "appendix-glossary",
        title: "Appendix B: Analysis Models",
        content: "•	System flow diagrams and AI model architecture"
      },
      {
        id: "appendix-Issues",
        title: "Appendix C: Issues List",
        content: "•	Pending enhancements for AI training."
      }
    ]
  }
];
