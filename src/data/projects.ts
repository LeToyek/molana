export type ProjectCategory = 'all' | 'backend' | 'ai' | 'fullstack';

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: ProjectCategory;
  description: string;
  challenge: string;
  approach: string;
  result: string;
  tags: string[];
  featured: boolean;
  image?: string;
  previews?: string[];
  liveLink?: string;
}

export const PROJECTS: Project[] = [
  {
    id: 'mega-dashboards',
    title: 'Mega Dashboard',
    subtitle: 'Enterprise Analytics & Management Platform',
    category: 'fullstack',
    description:
      'A massive enterprise dashboard designed to handle multi-store management and complex data analytics. It serves as the central command center for large-scale operations with real-time performance tracking.',
    challenge:
      'The need for a unified platform to manage complex enterprise data across multiple stores while maintaining high performance and real-time synchronization.',
    approach:
      'Engineered with a high-performance frontend and a robust backend integration. Implemented real-time data visualization and a scalable architecture to handle massive concurrent data streams.',
    result:
      'Currently deployed and serving as the primary management interface for enterprise-level operations, significantly improving decision-making speed and operational visibility.',
    tags: ['React', 'TypeScript', 'Node.js', 'PostgreSQL'],
    featured: true,
    image: '/images/projects/mega-dashboards/thumb.png',
    previews: [
      '/images/projects/mega-dashboards/preview1.png',
      '/images/projects/mega-dashboards/preview2.png',
      '/images/projects/mega-dashboards/preview3.png',
    ],
    liveLink: 'https://dashboards.molana.my.id',
  },
  {
    id: 'margin-maestro',
    title: 'Omni Commerce',
    subtitle: 'Enterprise Landing & Margin Optimizer',
    category: 'fullstack',
    description:
      'A high-performance landing platform for multi-store management, specifically designed to stop revenue loss from manual operations. Integrated with real-time margin tracking and TikTok Shop Partner (TSP) capabilities.',
    challenge:
      'The need for a high-converting landing environment that could handle multiple business units with real-time performance tracking.',
    approach:
      'Built with Vite and Bun for speed, focusing on core web vitals. Integrated real-time conversion tracking and margin optimization tools.',
    result:
      'Successfully deployed for live operations, achieving high performance and providing a unified command center for margin management.',
    tags: ['Vite', 'React', 'Bun', 'Nginx'],
    featured: true,
    image: '/images/projects/omni-commerce/thumb.png',
    previews: [
      '/images/projects/omni-commerce/preview1.png',
      '/images/projects/omni-commerce/preview2.png',
      '/images/projects/omni-commerce/preview3.png',
    ],
    liveLink: 'https://landings.molana.my.id',
  },
  {
    id: 'manufacturing-analytics',
    title: 'Manufacturing Analytics',
    subtitle: 'Predictive Analytics for Production Quality',
    category: 'ai',
    description:
      'A manufacturing client was losing IDR 600M+ annually to undetected machine inefficiencies. I built a predictive analytics system with real-time dashboards that identified loss patterns before they escalated.',
    challenge:
      'The production department had no visibility into machine quality trends, relying on reactive maintenance that caused significant loss opportunities.',
    approach:
      'Developed a predictive analytics model to monitor and forecast machine quality. Created real-time dashboards for periodic reports and implemented OCR to automate lot number reading.',
    result:
      'Reduced loss opportunities by over IDR 600 million. The system now serves 100+ employees across the production department.',
    tags: ['Python', 'FastAPI', 'React', 'PostgreSQL'],
    featured: true,
  },
  {
    id: 'rag-chatbot',
    title: 'RAG Chatbot',
    subtitle: 'Enterprise Knowledge Base AI',
    category: 'ai',
    description:
      'Enterprise teams were spending hours searching internal documentation. I built a RAG-powered chatbot that provides instant, accurate answers from company knowledge bases.',
    challenge:
      'Internal data was scattered across documents and systems, making it difficult for employees to find accurate information quickly.',
    approach:
      'Built a chatbot leveraging Retrieval-Augmented Generation with LangChain and vector embeddings for accurate, contextual responses from internal data.',
    result:
      'Deployed to production, providing general information and processed internal data to enterprise users with high accuracy.',
    tags: ['Python', 'LangChain', 'RAG', 'Vector DB'],
    featured: true,
  },
  {
    id: 'delta-hq',
    title: 'Delta HQ Platform',
    subtitle: 'Japanese Property Management SaaS',
    category: 'backend',
    description:
      'Engineered core backend services for a property management system handling rates, availability, and real-time OTA integrations with Rakuten, Airbnb, and Neppan.',
    challenge:
      'The platform needed a v1 to v2 migration of business-critical modules without any downtime, while maintaining real-time sync with global OTAs.',
    approach:
      'Implemented a feature flag strategy for zero-downtime migration. Developed real-time API integrations with multiple OTAs ensuring high accuracy inventory synchronization.',
    result:
      'Successfully migrated core modules with zero downtime. Real-time availability sync now runs reliably across Rakuten, Airbnb, and Neppan.',
    tags: ['Go', 'NestJS', '.NET', 'Docker'],
    featured: true,
  },
  {
    id: 'bca-billing',
    title: 'BCA Billing App',
    subtitle: 'Call Center Billing for Banking',
    category: 'fullstack',
    description:
      'Built an enterprise billing application for monitoring call center operations at one of Indonesia\'s largest banks, handling 100K+ call detail records.',
    challenge:
      'The client needed to import and analyze massive volumes of Call Detail Records efficiently, with interactive visualizations for billing insights.',
    approach:
      'Designed a data flow pipeline to import 100K+ CDR into SQL Server efficiently. Built interactive dashboards with advanced charts and data virtualization.',
    result:
      'The system processes 100K+ records with high performance data retrieval, supporting 10,000+ transactions in production.',
    tags: ['.NET', 'Blazor', 'SQL Server', 'IIS'],
    featured: true,
  },
  {
    id: 'simrs',
    title: 'SIMRS Hospital System',
    subtitle: 'Medical Records Management',
    category: 'fullstack',
    description:
      'Developed a comprehensive hospital information system for managing medical records with multi-role access, real-time chat, and secure authentication.',
    challenge:
      'The hospital needed a digital system to manage medical records across four distinct user roles with strict security and real-time communication.',
    approach:
      'Built a multi-role website with RBAC, encrypted data flows, real-time chat via Pusher, and OTP-based authentication for security compliance.',
    result:
      'Deployed system serving multiple departments with secure role-based access and seamless real-time communication between staff.',
    tags: ['Laravel', 'Pusher', 'MySQL', 'RBAC'],
    featured: false,
  },
  {
    id: 'asn-indonesia',
    title: 'ASN Indonesia',
    subtitle: 'Education & Exam Platform',
    category: 'fullstack',
    description:
      'Built a course provider platform to help people prepare for Indonesia\'s civil servant exam, featuring payment integration and OCR-digitized exam materials.',
    challenge:
      'Existing exam materials were paper-based, making content management difficult. The platform needed secure payments and scalable content delivery.',
    approach:
      'Built with Laravel and payment gateway integration. Developed an OCR system to digitize paper-based exam materials for streamlined accessibility.',
    result:
      'Platform successfully serves students with digitized exam content and secure online transactions.',
    tags: ['Laravel', 'OCR', 'Payment Gateway', 'PHP'],
    featured: false,
  },
  {
    id: 'insight-dashboard',
    title: 'Insight Dashboard',
    subtitle: 'Real-Time Machine Visualization',
    category: 'fullstack',
    description:
      'A customizable web platform for real-time machine data visualization, allowing users to design their own layouts for monitoring manufacturing equipment.',
    challenge:
      'Factory operators needed flexible, personalized dashboards to monitor different machines with different data points in real-time.',
    approach:
      'Built a customizable layout system with drag-and-drop capabilities. Implemented a tree-structure file management system for intuitive data organization.',
    result:
      'Operators can now design personalized dashboards for their specific machine monitoring needs with real-time data subscriptions.',
    tags: ['React', 'WebSocket', 'Node.js', 'PostgreSQL'],
    featured: false,
  },
  {
    id: 'production-ereport',
    title: 'Production E-Report',
    subtitle: 'Employee Activity Management',
    category: 'fullstack',
    description:
      'A web-based system to manage activity reports for 100+ production department employees, with KPI dashboards for data-driven performance evaluations.',
    challenge:
      'The production department had no centralized system to track employee activities and performance metrics across 100+ staff.',
    approach:
      'Developed a web-based reporting system with a KPI dashboard to visualize employee performance metrics and streamline activity management.',
    result:
      'Now manages activities for 100+ employees with data-driven performance evaluations supporting management decisions.',
    tags: ['Laravel', 'React', 'PostgreSQL', 'KPI'],
    featured: false,
  },
];

export const CATEGORIES: { value: ProjectCategory; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'backend', label: 'Backend' },
  { value: 'ai', label: 'AI / ML' },
  { value: 'fullstack', label: 'Full Stack' },
];
