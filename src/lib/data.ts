import { SkillsMap, Project, TimelineItem, WorkItem, Certificate } from '@/types';

// ══════════════════════════════════════
// ARCHITECT — Typewriter words
// ══════════════════════════════════════
export const TYPEWRITER_WORDS = [
  'ML Engineer',
  'Full-Stack Developer',
  'Cloud Architect',
  'Problem Eliminator',
  'Builder of Inevitable Things',
];

// ══════════════════════════════════════
// STORYTELLER — Rotating quotes
// ══════════════════════════════════════
export const STORY_QUOTES = [
  'Every frame is a decision.',
  'Light is the language.',
  'Silence speaks loudest.',
  'The cut is the truth.',
  'Story outlives everything.',
];

// ══════════════════════════════════════
// SKILLS DATA
// ══════════════════════════════════════
export const SKILLS: SkillsMap = {
  Languages: [
    { icon: '©️', name: 'C', pct: 80 },
    { icon: '➕', name: 'C++', pct: 85 },
    { icon: '#️⃣', name: 'C#', pct: 75 },
    { icon: '☕', name: 'Java', pct: 80 },
    { icon: '🐍', name: 'Python', pct: 95 },
    { icon: '⚡', name: 'JavaScript', pct: 90 },
    { icon: '🔷', name: 'TypeScript', pct: 85 },
    { icon: '🐘', name: 'PHP', pct: 75 },
    { icon: '📱', name: 'Kotlin', pct: 70 },
    { icon: '📊', name: 'R', pct: 75 },
    { icon: '🌐', name: 'HTML5', pct: 95 },
    { icon: '🎨', name: 'CSS3', pct: 90 },
    { icon: '💻', name: 'PowerShell', pct: 70 },
  ],
  'Frameworks & Libraries': [
    { icon: '⚛', name: 'React', pct: 90 },
    { icon: '🎯', name: 'Next.js', pct: 85 },
    { icon: '🟢', name: 'Node.js', pct: 88 },
    { icon: '🚂', name: 'Express.js', pct: 85 },
    { icon: '🦅', name: 'NestJS', pct: 78 },
    { icon: '🚀', name: 'FastAPI', pct: 82 },
    { icon: '🌶️', name: 'Flask', pct: 80 },
    { icon: '🎸', name: 'Django', pct: 75 },
    { icon: '🖖', name: 'Vue.js', pct: 75 },
    { icon: '📱', name: 'React Native', pct: 80 },
    { icon: '🐦', name: 'Flutter', pct: 70 },
    { icon: '🔀', name: 'React Router', pct: 90 },
    { icon: '📝', name: 'React Hook Form', pct: 85 },
    { icon: '🔄', name: 'React Query', pct: 85 },
    { icon: '📦', name: 'Redux', pct: 80 },
    { icon: '⚡', name: 'Vite', pct: 88 },
    { icon: '🔐', name: 'JWT', pct: 85 },
    { icon: '🔗', name: 'Web3.js', pct: 70 },
    { icon: '📦', name: 'NPM', pct: 90 },
    { icon: '👀', name: 'Nodemon', pct: 90 },
  ],
  'AI / ML & Data Science': [
    { icon: '🧠', name: 'PyTorch', pct: 85 },
    { icon: '📊', name: 'TensorFlow', pct: 80 },
    { icon: '🔬', name: 'scikit-learn', pct: 88 },
    { icon: '📈', name: 'Pandas', pct: 90 },
    { icon: '🔄', name: 'MLflow', pct: 75 },
    { icon: '📊', name: 'Power BI', pct: 70 },
  ],
  'Cloud & DevOps': [
    { icon: '☁️', name: 'AWS', pct: 80 },
    { icon: '🌩️', name: 'Azure', pct: 70 },
    { icon: '☁️', name: 'Google Cloud', pct: 75 },
    { icon: '🐳', name: 'Docker', pct: 85 },
    { icon: '☸️', name: 'Kubernetes', pct: 65 },
    { icon: '🌐', name: 'Cloudflare', pct: 85 },
    { icon: '🔥', name: 'Firebase', pct: 80 },
    { icon: '▲', name: 'Vercel', pct: 90 },
    { icon: '💠', name: 'Netlify', pct: 80 },
    { icon: '🚀', name: 'Render', pct: 75 },
    { icon: '🟣', name: 'Heroku', pct: 70 },
    { icon: '☁️', name: 'OpenStack', pct: 60 },
    { icon: '🛠', name: 'Jenkins', pct: 70 },
    { icon: '⚙️', name: 'Ansible', pct: 65 },
    { icon: '🗂️', name: 'Git', pct: 90 },
    { icon: '🐙', name: 'GitHub', pct: 90 },
    { icon: '📬', name: 'Postman', pct: 85 },
    { icon: '💻', name: 'Windows Terminal', pct: 90 },
    { icon: '🪶', name: 'Apache', pct: 70 },
    { icon: '🐈', name: 'Apache Tomcat', pct: 65 },
    { icon: '🛠️', name: 'Apache Maven', pct: 70 },
    { icon: '🐘', name: 'Gradle', pct: 65 },
  ],
  Databases: [
    { icon: '🐘', name: 'PostgreSQL', pct: 85 },
    { icon: '🐬', name: 'MySQL', pct: 80 },
    { icon: '🍃', name: 'MongoDB', pct: 85 },
    { icon: '🪶', name: 'SQLite', pct: 80 },
    { icon: '◬', name: 'Prisma', pct: 85 },
    { icon: '⚡', name: 'Amazon DynamoDB', pct: 70 },
    { icon: '🔥', name: 'Firestore / Realtime', pct: 80 },
  ],
  'Design & Creative': [
    { icon: '🎨', name: 'Figma', pct: 85 },
    { icon: '🧊', name: 'Blender', pct: 65 },
    { icon: '🖌️', name: 'Canva', pct: 90 },
    { icon: '🖼️', name: 'Adobe Photoshop', pct: 80 },
    { icon: '✒️', name: 'Adobe Illustrator', pct: 75 },
    { icon: '🎞️', name: 'Adobe Premiere Pro', pct: 85 },
    { icon: '✨', name: 'Adobe After Effects', pct: 70 },
    { icon: '📸', name: 'Adobe Lightroom', pct: 80 },
    { icon: '☁️', name: 'Creative Cloud', pct: 85 },
  ],
  'Game Development': [
    { icon: '🎮', name: 'Unreal Engine', pct: 65 },
  ],
};

// ══════════════════════════════════════
// PROJECTS DATA
// ══════════════════════════════════════
export const PROJECTS: Project[] = [
  {
    num: '01',
    title: 'NephroSense',
    tagline: 'Explainable AI for chronic kidney disease risk assessment',
    year: '2025',
    badge: 'HEALTHCARE AI',
    badgeClass: 'badge-deployed',
    desc: 'A full-stack clinical decision support platform that predicts Chronic Kidney Disease risk from patient laboratory panels using an XGBoost inference engine and SHAP-based explainability. Designed for clinicians, the system provides transparent risk scoring, feature-level reasoning, personalized care guidance, bulk patient triage, and PDF clinical reporting through an intuitive medical-grade interface.',
    metrics: [
      { v: '24', k: 'Clinical Features' },
      { v: 'SHAP', k: 'Explainability' },
      { v: '<1s', k: 'Inference' },
    ],
    stack: ['React', 'Flask', 'XGBoost', 'SHAP', 'Zustand', 'TailwindCSS'],
    links: [
      { label: 'GitHub', url: 'https://github.com/FarhanK20-hub/NephroSense-CKD-Risk-Assessment-Platform' },
    ],
  },
  {
    num: '02',
    title: 'BlockVote',
    tagline: 'Blockchain-powered transparent election infrastructure',
    year: '2025',
    badge: 'WEB3',
    badgeClass: 'badge-deployed',
    desc: 'A decentralized voting platform built on Ethereum that guarantees vote integrity through immutable smart contracts and on-chain verification. The system combines Solidity contracts, wallet-based authentication, election lifecycle management, voter registries, event indexing, and real-time result visualization to deliver a transparent and auditable digital election experience.',
    metrics: [
      { v: '100%', k: 'On-Chain Votes' },
      { v: 'JWT', k: 'Wallet Auth' },
      { v: 'Web3', k: 'Infrastructure' },
    ],
    stack: ['Solidity', 'Hardhat', 'React', 'Prisma', 'PostgreSQL', 'ethers.js'],
    links: [
      { label: 'GitHub', url: 'https://github.com/FarhanK20-hub/MatadhikarChain---Decentralized-Voting-Platform' },
    ],
  },
  {
    num: '03',
    title: 'Surface Defect Inspection System',
    tagline: 'Industrial computer vision for automated quality assurance',
    year: '2025',
    badge: 'COMPUTER VISION',
    badgeClass: 'badge-deployed',
    desc: 'Developed during an internship at Tata Steel, this production-grade inspection platform uses a custom-trained YOLOv8 model to detect and classify steel surface defects in real time. The system combines defect localization, severity scoring, Grad-CAM explainability, PDF report generation, heatmap visualization, batch inspection workflows, and a control-room dashboard designed for manufacturing environments.',
    metrics: [
      { v: '87.3%', k: 'mAP@50' },
      { v: '~120ms', k: 'Inference' },
      { v: '6', k: 'Defect Types' },
    ],
    stack: ['YOLOv8', 'Flask', 'React', 'OpenCV', 'Docker', 'Grad-CAM'],
    links: [
      { label: 'GitHub', url: 'https://github.com/FarhanK20-hub/Metal-Sheet-Defect-Detector' },
    ],
  },
  {
    num: '04',
    title: 'FitMind',
    tagline: 'AI-powered workout intelligence platform',
    year: '2025',
    badge: 'AI SAAS',
    badgeClass: 'badge-deployed',
    desc: 'A full-stack fitness intelligence platform that acts as a personalized AI coach. The system tracks recovery across muscle groups, calculates readiness scores, generates adaptive training sessions, detects strength plateaus, and delivers conversational coaching through Claude AI integration while maintaining a zero-configuration deployment experience.',
    metrics: [
      { v: 'AI', k: 'Workout Coach' },
      { v: '3D', k: 'Recovery Tracking' },
      { v: '24/7', k: 'Guidance' },
    ],
    stack: ['React', 'Express', 'MongoDB', 'Claude AI', 'Recharts', 'Mongoose'],
    links: [
      { label: 'GitHub', url: 'https://github.com/FarhanK20-hub/FitMind-AI-Powered-Workout-Intelligence' },
    ],
  },
  {
    num: '05',
    title: 'AttritionAI',
    tagline: 'Predictive workforce retention intelligence',
    year: '2025',
    badge: 'ENTERPRISE AI',
    badgeClass: 'badge-deployed',
    desc: 'An AI-powered HR analytics platform that predicts employee attrition risk using a calibrated stacking ensemble of six machine learning models. The platform transforms workforce data into actionable retention insights through risk scoring, behavioral flag detection, explainable recommendations, threshold tuning, and executive reporting dashboards.',
    metrics: [
      { v: '89%', k: 'Accuracy' },
      { v: '0.92', k: 'AUC-ROC' },
      { v: '6', k: 'ML Models' },
    ],
    stack: ['FastAPI', 'React', 'XGBoost', 'LightGBM', 'CatBoost', 'scikit-learn'],
    links: [
      { label: 'GitHub', url: 'https://github.com/FarhanK20-hub/AttritionAI-Employee-Attrition-Prediction-System' },
    ],
  },
  {
    num: '06',
    title: 'Skin Health Assistant',
    tagline: 'AI-powered dermatology screening and skin analysis',
    year: '2025',
    badge: 'HEALTHCARE AI',
    badgeClass: 'badge-deployed',
    desc: 'An intelligent skin health assessment platform that leverages computer vision and machine learning to analyse skin conditions from uploaded images and generate preliminary diagnostic insights. The system combines automated image analysis, risk assessment, educational guidance, and user-friendly reporting to improve accessibility to early dermatological screening.',
    metrics: [
      { v: 'AI', k: 'Image Analysis' },
      { v: 'CV', k: 'Detection Engine' },
      { v: '24/7', k: 'Accessibility' },
    ],
    stack: ['Python', 'TensorFlow', 'Flask', 'React', 'OpenCV', 'Docker'],
    links: [
      { label: 'GitHub', url: 'https://github.com/FarhanK20-hub/AI-powered-skin-health-assistant' },
    ],
  },
  {
    num: '07',
    title: 'FRK Collectives',
    tagline: 'Luxury fashion commerce with cinematic storytelling',
    year: '2025',
    badge: 'FULL STACK',
    badgeClass: 'badge-deployed',
    desc: 'A premium luxury-commerce platform engineered with Java Servlets and MySQL, combining enterprise-grade backend architecture with cinematic frontend experiences. The application features dynamic product catalogues, shopping workflows, custom cursor interactions, editorial animations, and accessibility-aware motion systems inspired by luxury fashion brands.',
    metrics: [
      { v: 'Java', k: 'Backend Core' },
      { v: 'GSAP', k: 'Motion System' },
      { v: 'MVC', k: 'Architecture' },
    ],
    stack: ['Java', 'JSP', 'MySQL', 'GSAP', 'Maven', 'React'],
    links: [
      { label: 'GitHub', url: 'https://github.com/FarhanK20-hub/FRK-Collectives' },
    ],
  },
  {
    num: '08',
    title: 'Kanecraft Web',
    tagline: 'Sustainability-focused enterprise commerce experience',
    year: '2025',
    badge: 'NEXT.JS',
    badgeClass: 'badge-deployed',
    desc: 'A premium digital experience built for a sustainable stationery brand, combining immersive ASMR-inspired interactions, dynamic ESG impact visualizations, and a secure MongoDB-backed administration system. The platform demonstrates how enterprise sustainability products can be presented through modern storytelling and high-performance web experiences.',
    metrics: [
      { v: 'ESG', k: 'Calculator' },
      { v: 'CMS', k: 'Admin Panel' },
      { v: 'ASMR', k: 'UX Design' },
    ],
    stack: ['Next.js', 'MongoDB', 'TailwindCSS', 'Framer Motion', 'GSAP', 'Mongoose'],
    links: [
      { label: 'GitHub', url: 'https://github.com/FarhanK20-hub/Kanecraft--website' },
    ],
  },
  {
    num: '09',
    title: 'ConnectX',
    tagline: 'Real-time messaging and collaboration platform',
    year: '2025',
    badge: 'FULL STACK',
    badgeClass: 'badge-deployed',
    desc: 'A modern full-stack communication platform enabling real-time messaging, secure authentication, media sharing, online presence tracking, and responsive cross-device experiences. Built around event-driven architecture using WebSockets to deliver low-latency communication and seamless user interactions.',
    metrics: [
      { v: 'Real-Time', k: 'Messaging' },
      { v: 'JWT', k: 'Authentication' },
      { v: 'WebSocket', k: 'Communication' },
    ],
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.io', 'JWT'],
    links: [
      { label: 'GitHub', url: 'https://github.com/FarhanK20-hub/ConnectX-Full-Stack-Chat-App' },
    ],
  },
  {
    num: '10',
    title: 'Pizza Delivery App',
    tagline: 'Native Android food ordering experience',
    year: '2024',
    badge: 'ANDROID',
    badgeClass: 'badge-deployed',
    desc: 'A native Android food-ordering application focused on usability, performance, and streamlined checkout experiences. The platform enables menu exploration, cart management, order tracking, and local order history while maintaining a clean mobile-first interface built with modern Android development practices.',
    metrics: [
      { v: 'Firebase', k: 'Backend' },
      { v: 'MVC', k: 'Architecture' },
      { v: 'Android', k: 'Native App' },
    ],
    stack: ['Kotlin', 'Firebase', 'RecyclerView', 'Glide', 'Data Binding', 'Android SDK'],
    links: [
      { label: 'GitHub', url: 'https://github.com/FarhanK20-hub/Pizza-Delivery-App-Android-' },
    ],
  },

];

// ══════════════════════════════════════
// TIMELINE DATA
// ══════════════════════════════════════
export const TIMELINE: TimelineItem[] = [
  {
    period: '2023 — Now',
    dot: 'current',
    title: 'BCA (Hons.) with Research',
    org: 'Symbiosis International University · Pune',
    detail:
      'Specialising in AI, cloud computing, and software engineering while building production-grade applications spanning machine learning, computer vision, blockchain, and full-stack development.',
  },
  {
    period: '2026',
    dot: 'current',
    title: 'Data Science & AI/ML Intern',
    org: 'Tata Motors · Jamshedpur',
    detail:
      'Worked on real-world AI and machine learning solutions, contributing to data preprocessing, predictive modelling, and analytics pipelines. Collaborated with engineering teams to transform operational data into actionable business insights.',
  },

  {
    period: '2026',
    dot: 'past',
    title: 'Machine Learning Intern',
    org: 'HyBionics · Hyderabad',
    detail:
      'Contributed to AI-powered fall detection systems for next-generation smart prosthetics. Designed dataset structures, defined sensor sanity checks, analysed gait patterns, and supported the development of machine learning pipelines for fall prediction.',
  },

  {
    period: '2025',
    dot: 'past',
    title: 'AI/ML Engineer Intern',
    org: 'Tata Steel · Jamshedpur',
    detail:
      'Independently built an industrial computer vision platform for automated steel surface defect detection using a custom-trained YOLO model. Delivered the complete solution from dataset preparation and model training to React frontend integration and deployment.',
  },

  {
    period: '2025',
    dot: 'past',
    title: 'Project Administrator',
    org: 'GirlScript Summer of Code',
    detail:
      'Led contributor coordination across open-source projects, reviewed pull requests, mentored developers, improved documentation, and streamlined collaboration workflows between maintainers and contributors.',
  },

  {
    period: '2025',
    dot: 'past',
    title: 'Campus Ambassador',
    org: 'GirlScript Summer of Code',
    detail:
      'Represented the open-source community on campus, driving awareness, onboarding contributors, and connecting students with collaborative development opportunities and national-level initiatives.',
  },

  {
    period: '2025',
    dot: 'past',
    title: 'Open Source Contributor',
    org: 'GirlScript Summer of Code',
    detail:
      'Contributed to community-driven software projects, collaborated with developers across diverse teams, and gained hands-on experience with large-scale open-source development practices.',
  },
]
// ══════════════════════════════════════
// STORYTELLER — Work items
// ══════════════════════════════════════
export const WORK_ITEMS: WorkItem[] = [
  {
    cat: 'Brand Film',
    title: 'Unnamed, 2024',
    grad: 'linear-gradient(135deg,#120F08,#1a1008,#080608)',
  },
  {
    cat: 'Short Film',
    title: 'The Long Way, 2024',
    grad: 'linear-gradient(225deg,#08060A,#0E0A05,#080608)',
  },
  {
    cat: 'Music Video',
    title: 'After Hours, 2023',
    grad: 'linear-gradient(45deg,#0A0808,#100A0A,#080608)',
  },
  {
    cat: 'Documentary',
    title: 'Silhouettes, 2023',
    grad: 'linear-gradient(315deg,#0A0A08,#080A08,#080608)',
  },
];

export const WORK_TABS_LIST = [
  'Reels',
  'Edits',
  'Cinematography',
  'Photography',
];

export const CLIENTS_LIST = [
  'BRAND ONE',
  'STUDIO CO.',
  'ARTIST XYZ',
  'LABEL NAME',
  'AGENCY INC',
  'COLLECTIVE',
  'BRAND TWO',
  'INDIE FILM',
];

// ══════════════════════════════════════
// CERTIFICATES DATA
// ══════════════════════════════════════
export const CERTIFICATES: Certificate[] = [
  // ── Internship Completions ──────────────────────────────────
  {
    year: '2026',
    name: 'Data Science & AI/ML Internship Completion',
    issuer: 'Tata Motors',
    category: 'Internship',
  },
  {
    year: '2026',
    name: 'Machine Learning Internship Completion',
    issuer: 'HyBionics',
    category: 'Internship',
  },
  {
    year: '2025',
    name: 'AI/ML Engineer Internship Completion',
    issuer: 'Tata Steel',
    category: 'Internship',
  },

  // ── Artificial Intelligence & ML ─────────────────────────────
  {
    year: '2026',
    name: 'AI for Business Professionals',
    issuer: 'HP',
    category: 'Artificial Intelligence',
  },
  {
    year: '2025',
    name: 'Deep Learning Fundamentals',
    issuer: 'Cognitive Class',
    category: 'Deep Learning',
  },
  {
    year: '2025',
    name: 'Machine Learning with Python',
    issuer: 'Cognitive Class',
    category: 'Machine Learning',
  },

  // ── Generative AI ────────────────────────────────────────────
  {
    year: '2026',
    name: 'Build Your Own Chatbot',
    issuer: 'Cognitive Class',
    category: 'Generative AI',
  },
  {
    year: '2025',
    name: 'Foundations of Prompt Engineering',
    issuer: 'AWS',
    category: 'Generative AI',
  },

  // ── Data Science & Analytics ──────────────────────────────────
  {
    year: '2025',
    name: 'Data Science Methodology',
    issuer: 'Cognitive Class',
    category: 'Data Science',
  },
  {
    year: '2025',
    name: 'Data Analysis with Python',
    issuer: 'Cognitive Class',
    category: 'Data Science',
  },
  {
    year: '2025',
    name: 'Data Visualization with R',
    issuer: 'Cognitive Class',
    category: 'Data Analytics',
  },
  {
    year: '2025',
    name: 'Statistics 101',
    issuer: 'Cognitive Class',
    category: 'Statistics',
  },

  // ── Cloud Computing ────────────────────────────────────────────
  {
    year: '2025',
    name: 'AWS Cloud Essentials',
    issuer: 'AWS',
    category: 'Cloud Computing',
  },

  // ── Blockchain ─────────────────────────────────────────────────
  {
    year: '2025',
    name: 'Blockchain Masterclass',
    issuer: 'CFTE',
    category: 'Blockchain',
  },
  {
    year: '2025',
    name: 'Bitcoin for Developers I',
    issuer: 'Saylor University',
    category: 'Blockchain Development',
  },

  // ── Computer Science ───────────────────────────────────────────
  {
    year: '2025',
    name: 'Elementary Data Structures',
    issuer: 'Saylor University',
    category: 'Computer Science',
  },

  // ── Database ───────────────────────────────────────────────────
  {
    year: '2025',
    name: 'SQL (Advanced)',
    issuer: 'HackerRank',
    category: 'Database Systems',
  },

  // ── IoT ────────────────────────────────────────────────────────
  {
    year: '2025',
    name: 'Introduction to IoT and Digital Transformation',
    issuer: 'Cisco Networking Academy',
    category: 'IoT',
  },

  // ── UI/UX Design ───────────────────────────────────────────────
  {
    year: '2025',
    name: 'Complete Figma Course: Web & Mobile Projects from Scratch',
    issuer: 'Udemy',
    category: 'UI/UX Design',
  },

  // ── Marketing ──────────────────────────────────────────────────
  {
    year: '2025',
    name: 'Fundamentals of Digital Marketing',
    issuer: 'Google',
    category: 'Marketing',
  },
  {
    year: '2025',
    name: 'Apple Ads Certification',
    issuer: 'Apple',
    category: 'Marketing',
  },

  // ── Professional Development ───────────────────────────────────
  {
    year: '2025',
    name: 'TCS iON Career Edge – Young Professional',
    issuer: 'TCS iON',
    category: 'Professional Development',
  },
  {
    year: '2025',
    name: 'Vocational Training Program',
    issuer: 'Tata Steel',
    category: 'Industrial Training',
  },
];
