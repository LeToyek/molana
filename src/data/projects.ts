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
  badge?: string;
  image?: string;
  previews?: string[];
  liveLink?: string;
  githubLink?: string;
}

export const PROJECTS: Project[] = [
  // ── Live web / backend / fullstack first ─────────────────────────────────
  {
    id: 'delta-hq',
    title: 'Delta HQ Platform',
    subtitle: 'Zero-Downtime v2 Migration for Japanese Property SaaS',
    category: 'backend',
    description:
      'Backend services handling inventory management and real-time OTA integrations for Japanese property operators on Rakuten, Airbnb, and Booking.com.',
    challenge:
      'Delta HQ\'s v1 API was tightly coupled to Rakuten Travel, Airbnb, and Booking.com OTA integrations serving Japanese property operators around the clock. A hard cutover to v2 would break live inventory sync mid-stay — costing clients real money and trust.',
    approach:
      'Designed a feature flag migration strategy so v1 and v2 ran in parallel across the entire platform. Go microservices handled inventory state synchronization between versions during the transition window. NestJS API gateway maintained backward-compatible v1 endpoints for external OTA partners. .NET services kept legacy integrations stable until each property group was fully migrated, then cleanly cut over.',
    result:
      'Zero-downtime migration across all global OTA channels. Every Japanese property operator remained live with uninterrupted real-time inventory sync throughout. The v2 architecture now handles OTA sync at significantly lower infrastructure overhead.',
    tags: ['Go', 'NestJS', '.NET', 'Docker', 'OTA Integration', 'Feature Flags', 'Agile'],
    featured: true,
  },
  {
    id: 'bca-billing',
    title: 'BCA Call Center Billing',
    subtitle: 'Processing 100K+ CDR Records for Indonesia\'s Largest Bank',
    category: 'fullstack',
    description:
      'Enterprise billing application handling 100,000+ Call Detail Records daily for BCA\'s call center operations.',
    challenge:
      'BCA\'s call center generated 100,000+ Call Detail Records (CDR) daily. Manual billing reconciliation took days per cycle, dispute resolution was a bottleneck, and the data volume was growing faster than the team could handle with spreadsheets.',
    approach:
      'Built a .NET Blazor enterprise application on IIS with a carefully designed SQL Server schema — composite indexes on high-cardinality columns, bulk CDR import pipeline using batched transactions, and interactive filtering dashboards. Analysts can slice 100K+ records by agent, time range, call type, and duration in real time without hitting page lag.',
    result:
      '100K+ records processed with sub-second query response. Billing dispute resolution dropped from days to minutes. Bulk CDR import that previously took hours now completes in under 5 minutes. The team handles double the volume with the same headcount.',
    tags: ['.NET', 'Blazor', 'SQL Server', 'IIS', 'CDR Processing'],
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
    id: 'mega-dashboards',
    title: 'Mega Dashboard',
    subtitle: 'Unified Analytics Command Center for Multi-Store Operations',
    category: 'fullstack',
    description:
      'Enterprise analytics platform unifying 7+ store locations into a single real-time dashboard with role-based access for regional managers and HQ.',
    challenge:
      'Retail operators managing 7+ store locations had no unified performance view. Each store ran its own spreadsheets, making cross-location comparison a manual, error-prone process that took hours per week and always arrived one day too late to act on.',
    approach:
      'React + TypeScript frontend with a server-driven component architecture for flexible layout without rewrites. Node.js API layer with PostgreSQL materialized views for heavy aggregations — pre-computed on a schedule, not live-queried on each page load. RBAC so regional managers see their cluster, HQ sees everything, and store-level staff see only their own data.',
    result:
      '7+ locations unified in a single real-time command center. Weekly reporting cycle cut from hours to under 5 minutes. Store managers compare cross-location performance without exporting a single spreadsheet.',
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
    id: 'simrs',
    title: 'SIMRS Hospital System',
    subtitle: '4-Role Medical Records with Real-Time Cross-Department Coordination',
    category: 'fullstack',
    description:
      'Comprehensive hospital information system with RBAC for 4 department roles, real-time Pusher notifications, and OTP-secured patient record access.',
    challenge:
      'A hospital running entirely on paper across 4 departments — doctors, nurses, pharmacists, and admin. No coordination between wards: nurses couldn\'t see pharmacy stock in real time, doctors couldn\'t access lab results without physically walking to the lab, and admin had no audit trail for record changes.',
    approach:
      'Laravel with role-based access control (RBAC) designed specifically for hospital permission hierarchies — each role sees exactly what they need and nothing else. Pusher WebSocket integration for real-time cross-department notifications (prescription fulfilled → instant nurse alert, lab result ready → doctor notification). OTP-based authentication prevents unauthorized access to sensitive patient records. Full audit log on every record mutation.',
    result:
      'Deployed system serving all 4 hospital departments with zero shared-credential risk. Real-time ward notifications reduced drug dispensing delays. Full audit trail gives admin complete visibility into every record change.',
    tags: ['Laravel', 'Pusher', 'MySQL', 'RBAC', 'WebSocket', 'OTP Auth'],
    featured: true,
    liveLink: 'https://landings.molana.my.id/emr',
  },
  {
    id: 'omni-commerce',
    title: 'Omni Commerce',
    subtitle: 'High-Performance Landing & Margin Optimizer for E-Commerce Sellers',
    category: 'fullstack',
    description:
      'Performance-first e-commerce landing page and margin calculator helping Indonesian sellers track profitability across Tokopedia, Shopee, and Lazada.',
    challenge:
      'E-commerce sellers listing across multiple Indonesian marketplaces were losing 8–15% revenue to untracked margin drift — platform fees, promotional discounts, and shipping costs eating into profits invisibly with no unified view.',
    approach:
      'Vite + Bun stack for sub-1s cold build times. Core Web Vitals optimization targeting 95+ Lighthouse score. Nginx with brotli compression for production. React frontend with real-time margin calculator modeling per-channel fees so sellers see actual profit before they list.',
    result:
      '95+ Lighthouse performance score. Sub-2s LCP, zero CLS. Sellers can model margin impact across all channels before listing a single SKU — ending the guesswork on where to price for profit.',
    tags: ['Vite', 'React', 'Bun', 'Nginx', 'Performance Optimization'],
    featured: false,
    image: '/images/projects/omni-commerce/thumb.png',
    previews: [
      '/images/projects/omni-commerce/preview1.png',
      '/images/projects/omni-commerce/preview2.png',
      '/images/projects/omni-commerce/preview3.png',
    ],
    liveLink: 'https://landings.molana.my.id/omni-commerce',
  },
  {
    id: 'asn-indonesia',
    title: 'ASN Indonesia',
    subtitle: 'Civil Servant Exam Platform with OCR Content Digitization',
    category: 'fullstack',
    description:
      'Course platform for CPNS/PPPK civil servant exam preparation, with an integrated OCR pipeline to digitize printed exam booklets at scale.',
    challenge:
      'Indonesia\'s civil servant exam prep materials (CPNS and PPPK tracks) existed only as printed booklets. Content creators faced thousands of pages to manually type up, and students needed a secure, gated way to access purchased materials — not a shared PDF link.',
    approach:
      'Laravel platform with integrated Tesseract OCR pipeline: content team uploads scan photos, OCR extracts and structures the text, admin reviews and publishes. Midtrans payment gateway integration for course subscriptions with enrollment-gated content access — students can only see what they\'ve paid for.',
    result:
      'Thousands of exam questions digitized and distributed at scale. Students purchase course access and immediately receive their materials. Content digitization time reduced from days of manual typing to hours per booklet with the OCR pipeline.',
    tags: ['Laravel', 'Tesseract OCR', 'Midtrans', 'PHP', 'MySQL'],
    featured: false,
    liveLink: 'https://landings.molana.my.id/asn-learn',
  },
  {
    id: 'maissy',
    title: 'Maissy',
    subtitle: 'Real-Time Manufacturing Monitoring with Socket.IO Alerting',
    category: 'fullstack',
    description:
      'Production monitoring platform with live dashboards and instant Socket.IO threshold alerts for manufacturing supervisors.',
    challenge:
      'Production supervisors at a manufacturing plant had no centralized view of machine status. They physically walked the floor checking each station, meaning deviations went unnoticed for 30–60 minutes — long enough for a small issue to compound into a line stoppage.',
    approach:
      'Angular frontend with real-time chart updates driven by Socket.IO. Express.js backend processes incoming sensor data and broadcasts threshold breach events instantly — the dashboard updates and an alert fires simultaneously the moment a reading crosses the defined limit. MySQL stores production data for historical trend analysis and shift reporting.',
    result:
      'Supervisors monitor all production stations from a single screen in real time. Socket.IO alerts fire within milliseconds of a threshold breach — no more 30-minute discovery lag. Historical dashboard data enables pattern-based preventive scheduling.',
    tags: ['Angular', 'Express.js', 'Socket.IO', 'MySQL', 'Real-Time'],
    featured: false,
    image: '/images/blog/maissy-thumbnail.png',
    previews: ['/images/blog/maissy-raw.jpg'],
  },
  {
    id: 'insight',
    title: 'Insight',
    subtitle: 'Self-Hosted Industrial Monitoring with Telegram Alerting',
    category: 'fullstack',
    description:
      'Self-hosted real-time monitoring platform with customizable threshold charts, folder organization, and Telegram bot alerts — no vendor dependency.',
    challenge:
      'Industrial engineers needed customizable sensor monitoring without vendor lock-in — existing SaaS tools charged per-device, sent data to third-party servers they couldn\'t control, and offered no flexibility for custom threshold logic or alert routing.',
    approach:
      'Angular + Python Flask API, fully self-hosted — runs entirely on-premise with no external data dependency. Engineers create unlimited charts with user-defined thresholds, custom colors, and folder organization by machine or process line. Telegram Bot integration routes off-hours alerts directly to engineers\' phones without requiring them to be at a monitoring terminal.',
    result:
      'Self-hosted platform with full data ownership. Engineers configure custom threshold charts in minutes without writing code. Telegram alerts reduced after-hours incident response time from hours to under 5 minutes. Real-time chart generation keeps data latency below 2 seconds.',
    tags: ['Angular', 'Python', 'Flask', 'MySQL', 'Telegram Bot', 'Real-Time'],
    featured: false,
    image: '/images/blog/Insight-thumbnail.png',
    previews: ['/images/blog/insight-raw.jpg'],
  },
  // ── AI / research / competition ────────────────────────────────────────────
  {
    id: 'manufacturing-analytics',
    title: 'Manufacturing Analytics',
    subtitle: 'Predictive Maintenance That Saved IDR 600 Million',
    category: 'ai',
    description:
      'AI-powered predictive system that detects machine failure patterns before they cascade into costly downtime.',
    challenge:
      'A manufacturing client was losing IDR 600M+ per year from reactive maintenance — machines failing without warning, forcing emergency shutdowns that cascaded across production lines. They had sensor data going back years but no way to make sense of it.',
    approach:
      'Built a Python/FastAPI backend with an LSTM time-series model trained on historical sensor readings to predict failure windows. Added an OCR pipeline to digitize 3 years of analog gauge data that had never been captured digitally. Real-time React dashboard with threshold alerting and a Telegram bot so floor managers get warnings 72 hours before predicted failures — not after them.',
    result:
      'Predicted machine failures 72 hours in advance, eliminating the reactive maintenance cycle entirely. Loss opportunities reduced by over IDR 600 million — equivalent to $40K+ in recovered production value. OCR pipeline digitized 3 years of analog gauge history in under a week.',
    tags: ['Python', 'FastAPI', 'React', 'PostgreSQL', 'LSTM', 'OCR', 'Telegram API'],
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
    id: 'opticon',
    title: 'Opticon',
    subtitle: 'IoT Smart Glasses That Predict Driver Drowsiness with AI',
    category: 'ai',
    description:
      'End-to-end hardware-to-cloud system: custom IoT eyeglasses with embedded sensors, Flutter mobile app, and LSTM model that predicts drowsiness onset before the driver feels it.',
    challenge:
      'Drowsiness causes 30%+ of fatal road accidents in Indonesia. Existing detection systems require fixed dashboard cameras or expensive fleet hardware — impractical for individual long-haul drivers who need something they already wear.',
    approach:
      'Built with two researchers. Designed custom Arduino IoT glasses with an IR sensor measuring blink frequency and duration, and a PPG sensor tracking heart rate — both embedded directly in the frame. Flutter mobile app communicates via Classic Bluetooth, streams real-time readings to a GCP VM. Trained an LSTM model on time-series drowsiness patterns to predict the next hour\'s alertness level — giving drivers actionable warnings before impairment sets in. Firebase handles real-time state sync across devices.',
    result:
      'Functional hardware prototype + production mobile app + predictive ML pipeline, all integrated end-to-end. The system detects drowsiness onset before the driver consciously feels it. Won national-level smart systems competition. Selected for PKM research funding.',
    tags: ['Flutter', 'Arduino', 'LSTM', 'TensorFlow', 'Firebase', 'GCP', 'Bluetooth IoT'],
    featured: true,
    badge: 'National Champion',
    image: '/images/blog/opticon-lp.jpg',
    previews: [
      '/images/blog/opticon-mobile.png',
      '/images/blog/opticon-iot-architecture.png',
      '/images/blog/opticon-glasses.jpeg',
    ],
    githubLink: 'https://github.com/LeToyek/opticon_flutter',
  },
  {
    id: 'greeny',
    title: 'Greeny',
    subtitle: 'AR + IoT + AI Platform for Urban Agriculture',
    category: 'ai',
    description:
      'Complete urban farming intelligence: AR-guided pot placement, on-device CNN plant disease detection, and IoT-automated watering — all in one Flutter app.',
    challenge:
      'Urban farmers in Indonesian cities grow food without expert guidance. Wrong soil composition, poor pot placement, irregular watering cycles, and undetected diseases destroy crops before harvest. There was no accessible, affordable tool that combined all these problems into one solution.',
    approach:
      'Built with three teammates. Flutter app with TF Lite CNN model running on-device for instant plant disease detection — no server round-trip. Unity + Blender AR module overlays virtual plant placement guides using the phone camera, helping users find optimal sun and space positions. Arduino IoT device reads temperature and humidity sensors, syncs via Firebase Realtime Database, and auto-triggers the watering pump. Achievement system keeps casual users engaged with the app long-term.',
    result:
      'Complete urban farming platform: AR-guided planting → AI disease diagnosis → IoT-automated watering, all working together. Secured PKM government research funding — reviewed and backed by Indonesia\'s Ministry of Education. Open-sourced with YouTube demo showing the full hardware + software loop.',
    tags: ['Flutter', 'TF Lite', 'Unity AR', 'Arduino', 'Firebase', 'CNN', 'Python'],
    featured: true,
    badge: 'PKM Funded',
    image: '/images/blog/greeny-lp.jpg',
    previews: ['/images/blog/greeny-mobile.png'],
    githubLink: 'https://github.com/LeToyek/greeny',
  },
  {
    id: 'pitaID',
    title: 'Pita ID',
    subtitle: 'OCR-Powered Indonesian KTP Extraction with Job Match AI',
    category: 'ai',
    description:
      'Mobile app that extracts structured data from Indonesian national ID cards (KTP) using computer vision preprocessing and CNN OCR, then suggests matching jobs.',
    challenge:
      'Indonesian digital onboarding flows require manual KTP data entry — slow, error-prone, and a bottleneck at scale. Standard OCR libraries fail on real-world KTPs: low-contrast backgrounds, skewed angles, and inconsistent lighting make raw text extraction unreliable.',
    approach:
      'Flutter mobile app captures the KTP image and runs it through an OpenCV preprocessing pipeline — thresholding, dilation, and skew correction — to clean the image before recognition. A TensorFlow CNN model trained specifically on KTP text layout handles field extraction with structural awareness. Extracted fields (name, address, ID number, date of birth) feed a job-matching algorithm that surfaces relevant openings based on age and home region.',
    result:
      '90%+ field extraction accuracy on real-world KTP photos with varied lighting and angles. End-to-end flow — photo to verified structured data — completes in under 3 seconds. Competition finalist, open-sourced.',
    tags: ['Flutter', 'OpenCV', 'TensorFlow', 'CNN', 'Python', 'Firebase', 'GCP'],
    featured: false,
    badge: 'Competition Finalist',
    image: '/images/blog/pitaID-lp.png',
    githubLink: 'https://github.com/selyraa/project_pbl_2023',
  },
  {
    id: 'rag-chatbot',
    title: 'Enterprise RAG Chatbot',
    subtitle: 'AI Knowledge Base That Answers in Seconds, Not Wiki Hunts',
    category: 'ai',
    description:
      'LangChain-powered RAG chatbot that indexes a company\'s internal knowledge base and delivers cited, contextual answers in seconds.',
    challenge:
      'A growing enterprise had internal knowledge scattered across Notion, Confluence, internal PDFs, and Slack threads. New employee onboarding took two full weeks just to locate who knows what, and tribal knowledge walked out the door with every resignation.',
    approach:
      'LangChain + vector database pipeline with a chunking strategy tuned specifically for technical documentation — overlap windows sized to preserve context across section boundaries. Semantic search over embedded chunks, with streaming LLM responses that include source citations so users can verify every answer. Admin panel for re-indexing when documents update, without developer involvement.',
    result:
      'New employees find answers in seconds instead of two-week wiki hunts. Source citations build immediate trust in AI responses. Knowledge retention is now systemic — information lives in the platform, not in any single person\'s memory.',
    tags: ['Python', 'LangChain', 'RAG', 'Vector DB', 'LLM', 'FastAPI'],
    featured: false,
  },
];

export const CATEGORIES: { value: ProjectCategory; label: string }[] = [
  { value: 'all', label: 'All' },
  { value: 'backend', label: 'Backend' },
  { value: 'ai', label: 'AI / ML' },
  { value: 'fullstack', label: 'Full Stack' },
];
