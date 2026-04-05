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
      'A massive enterprise dashboard designed to handle multi-store management and complex data analytics.',
    challenge: 'Need for unified platform for multi-store management.',
    approach: 'High-performance frontend with robust backend.',
    result: 'Significantly improved operational visibility.',
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
    id: 'omni-commerce',
    title: 'Omni Commerce',
    subtitle: 'Enterprise Landing & Margin Optimizer',
    category: 'fullstack',
    description: 'Stop revenue loss from manual management with real-time margin tracking.',
    challenge: 'High-converting landing with real-time performance tracking.',
    approach: 'Vite and Bun for speed, focusing on core web vitals.',
    result: 'High performance unified command center for margin management.',
    tags: ['Vite', 'React', 'Bun', 'Nginx'],
    featured: true,
    image: '/images/projects/omni-commerce/thumb.png',
    previews: [
      '/images/projects/omni-commerce/preview1.png',
      '/images/projects/omni-commerce/preview2.png',
      '/images/projects/omni-commerce/preview3.png',
    ],
    liveLink: 'https://landings.molana.my.id/omni-commerce',
  },
  {
    id: 'manufacturing-analytics',
    title: 'Manufacturing Analytics',
    subtitle: 'Predictive Analytics for Production Quality',
    category: 'ai',
    description: 'AI-powered predictive system for detecting machine inefficiencies.',
    challenge: 'Reacting maintenance causing IDR 600M+ annual loss.',
    approach: 'Predictive model with real-time dashboards and OCR.',
    result: 'Reduced loss opportunities by over IDR 600 million.',
    tags: ['Python', 'FastAPI', 'React', 'PostgreSQL'],
    featured: true,
    image: '/images/projects/manufacturing-analytics/thumb.png',
    previews: [
      '/images/projects/manufacturing-analytics/preview1.png',
      '/images/projects/manufacturing-analytics/preview2.png',
      '/images/projects/manufacturing-analytics/preview3.png',
    ],
    liveLink: 'https://landings.molana.my.id/manufacture',
  },
  {
    id: 'bca-billing',
    title: 'BCA Billing App',
    subtitle: 'Call Center Billing for Banking',
    category: 'fullstack',
    description: 'Enterprise billing app handling 100K+ CDR for a large bank.',
    challenge: 'Efficient import and analysis of massive volumes of CDR.',
    approach: 'SQL Server optimization and interactive dashboards.',
    result: 'Processes 100K+ records with high performance.',
    tags: ['.NET', 'Blazor', 'SQL Server', 'IIS'],
    featured: true,
    image: '/images/projects/bca-billing/thumb.png',
    previews: [
      '/images/projects/bca-billing/preview1.png',
      '/images/projects/bca-billing/preview2.png',
      '/images/projects/bca-billing/preview3.png',
    ],
    liveLink: 'https://landings.molana.my.id/central-comm',
  },
  {
    id: 'simrs',
    title: 'SIMRS Hospital System',
    subtitle: 'Medical Records Management',
    category: 'fullstack',
    description: 'Comprehensive hospital information system with real-time features.',
    challenge: 'Digital management of records across 4 user roles with high security.',
    approach: 'RBAC, Pusher real-time chat, and OTP-based authentication.',
    result: 'Deployed system serving multiple departments with secure access.',
    tags: ['Laravel', 'Pusher', 'MySQL', 'RBAC'],
    featured: true,
    image: '/images/projects/simrs/thumb.png',
    previews: [
      '/images/projects/simrs/preview1.png',
      '/images/projects/simrs/preview2.png',
      '/images/projects/simrs/preview3.png',
    ],
    liveLink: 'https://landings.molana.my.id/emr',
  },
  {
    id: 'asn-indonesia',
    title: 'ASN Indonesia',
    subtitle: 'Education & Exam Platform',
    category: 'fullstack',
    description: 'Course provider platform for civil servant exams with OCR.',
    challenge: 'Digitizing paper-based materials for scalable content delivery.',
    approach: 'Laravel with OCR system for digitized exam materials.',
    result: 'Platform serves students with digitized content and secure transactions.',
    tags: ['Laravel', 'OCR', 'Payment Gateway', 'PHP'],
    featured: true,
    image: '/images/projects/asn-indonesia/thumb.png',
    previews: [
      '/images/projects/asn-indonesia/preview1.png',
      '/images/projects/asn-indonesia/preview2.png',
      '/images/projects/asn-indonesia/preview3.png',
    ],
    liveLink: 'https://landings.molana.my.id/asn-learn',
  },
  {
    id: 'rag-chatbot',
    title: 'RAG Chatbot',
    subtitle: 'Enterprise Knowledge Base AI',
    category: 'ai',
    description: 'RAG-powered chatbot for instant answers from company knowledge base.',
    challenge: 'Scattered internal documentation across multiple systems.',
    approach: 'LangChain and vector embeddings for contextual responses.',
    result: 'Providing processed internal data with high accuracy.',
    tags: ['Python', 'LangChain', 'RAG', 'Vector DB'],
    featured: true,
  },
  {
    id: 'delta-hq',
    title: 'Delta HQ Platform',
    subtitle: 'Japanese Property Management SaaS',
    category: 'backend',
    description: 'Backend services handling inventory and real-time OTA integrations.',
    challenge: 'Zero-downtime v1 to v2 migration for global OTAs.',
    approach: 'Feature flag strategy with real-time API integrations.',
    result: 'Successfully migrated with reliable real-time sync.',
    tags: ['Go', 'NestJS', '.NET', 'Docker'],
    featured: true,
  },
];

export const CATEGORIES: { value: ProjectCategory; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'backend', label: 'Backend' },
  { value: 'ai', label: 'AI / ML' },
  { value: 'fullstack', label: 'Full Stack' },
];
