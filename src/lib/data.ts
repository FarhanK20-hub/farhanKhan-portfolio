import { SkillsMap, Project, TimelineItem, WorkItem, Certificate } from '@/types';

// ══════════════════════════════════════
// ARCHITECT — Typewriter words
// ══════════════════════════════════════
export const TYPEWRITER_WORDS = [
  'ML Engineer & Systems Thinker',
  'Full-Stack Developer',
  'Creative Technologist',
  'Founder, FRK Productions',
  'Builder of Things That Last',
];

// ══════════════════════════════════════
// STORYTELLER — Rotating quotes
// ══════════════════════════════════════
export const STORY_QUOTES = [
  'Every frame is a deliberate act.',
  'Light tells what words cannot.',
  'The silence between cuts carries the meaning.',
  'A good story doesn\u2019t end when the screen goes dark.',
  'We don\u2019t create content. We create memory.',
];

// ══════════════════════════════════════
// BACKGROUND MUSIC TRACKS
// ══════════════════════════════════════
export const RADIO_TRACKS = [
  {
    title: 'Lose My Mind',
    artist: 'Don Toliver ft. Doja Cat',
    src: '/songs/Don Toliver - Lose My Mind (feat. Doja Cat) [From F1 The Movie] [Official Audio].mp3',
  },
  {
    title: 'Just Keep Watching',
    artist: 'Tate McRae',
    src: '/songs/Tate McRae - Just Keep Watching (From F1 The Movie) [Official Audio].mp3',
  },
  {
    title: 'Loser',
    artist: 'Tame Impala',
    src: '/songs/Tame Impala - Loser.mp3',
  },
  {
    title: 'Down',
    artist: 'Tujamo',
    src: '/songs/Tujamo - Down (Official Music Video).mp3',
  },
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
    title: 'ClimaTwin India',
    tagline: 'AI-Powered Digital Twin of India\'s Climate',
    badge: 'AI / DIGITAL TWIN',
    badgeClass: 'badge-deployed',
    desc: 'An interactive, AI-powered digital twin of India\'s climate system designed to bridge the gap between raw meteorological data and actionable decision-making. Built for ISRO Hack2Skill 2026. Features LSTM predictions with Monte Carlo Dropout uncertainty and What-If scenario simulations.',
    metrics: [
      { v: 'MC Dropout', k: 'Uncertainty' },
      { v: 'LSTM', k: 'Prediction' },
      { v: '35', k: 'Years Synthetic Data' },
    ],
    stack: ['Python', 'FastAPI', 'PyTorch', 'Leaflet.js', 'Chart.js', 'Pandas'],
    links: [
      { label: 'GitHub', url: 'https://github.com/FarhanK20-hub/ClimaTwin-India---AI-Powered-Digital-Twin-of-India-s-Climate' },
    ],
  },
  {
    num: '02',
    title: 'Surface Defect Inspection System',
    tagline: 'Industrial computer vision for automated quality assurance',
    badge: 'COMPUTER VISION',
    badgeClass: 'badge-deployed',
    desc: 'Steel plants lose millions to undetected surface defects. Built during an internship at Tata Steel, this system replaces manual inspection with a custom-trained YOLOv8 model that identifies and classifies six types of defects in real time. Grad-CAM explainability shows inspectors exactly what the model sees, while batch workflows, heatmap visualisation, and PDF reporting make it production-ready for the factory floor.',
    metrics: [
      { v: '87.3%', k: 'mAP@50' },
      { v: '~120ms', k: 'Inference' },
      { v: '6', k: 'Defect Types' },
    ],
    stack: ['YOLOv8', 'Flask', 'React', 'OpenCV', 'Docker', 'Grad-CAM'],
    links: [
      { label: 'GitHub', url: 'https://github.com/FarhanK20-hub/Metal-Sheet-Defect-Detector' },
      { label: 'Live Demo', url: 'https://metal-sheet-defect-detector.vercel.app/' },
    ],
  },
  {
    num: '03',
    title: 'Adaptive LiDAR Mapping',
    tagline: 'Adaptive Variable-Resolution 2.5D LiDAR Mapping for dynamic-environment perception',
    badge: 'PERCEPTION / AI',
    badgeClass: 'badge-deployed',
    desc: 'A comprehensive prototype for dynamic-environment perception using Adaptive Variable-Resolution 2.5D LiDAR Mapping. Developed for the DRDO Smart India Hackathon. Features operational modes for Disaster Relief, Military Operations, and Research Dashboard with real-time Hungarian tracking.',
    metrics: [
      { v: '2.5D', k: 'LiDAR Mapping' },
      { v: '3', k: 'Operational Modes' },
      { v: 'Tracking', k: 'Hungarian + IMM Kalman' },
    ],
    stack: ['Python', 'Streamlit', 'Optuna', 'QuadTrees', 'KITTI'],
    links: [
      { label: 'GitHub', url: 'https://github.com/FarhanK20-hub/Adaptive-Variable-Resolution-LiDAR-Mapping' },
    ],
  },
  {
    num: '04',
    title: 'NephroSense',
    tagline: 'Explainable AI for chronic kidney disease risk assessment',
    badge: 'HEALTHCARE AI',
    badgeClass: 'badge-deployed',
    desc: 'Clinicians needed a way to catch chronic kidney disease early, before symptoms become irreversible. NephroSense turns 24 routine lab values into an actionable risk score using XGBoost, then explains exactly why each prediction was made through SHAP-based reasoning. The result: faster clinical decisions, personalised care guidance, bulk patient triage, and exportable PDF reports, all through a medical-grade interface designed for trust.',
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
    num: '05',
    title: 'AttritionAI',
    tagline: 'Predictive workforce retention intelligence',
    badge: 'ENTERPRISE AI',
    badgeClass: 'badge-deployed',
    desc: 'Losing talent is expensive, and most companies only realise it after the resignation email. AttritionAI predicts which employees are at risk of leaving before they decide to, using a calibrated stacking ensemble of six ML models. HR teams get risk scores, behavioural flags, explainable retention recommendations, and executive dashboards that turn workforce data into decisions.',
    metrics: [
      { v: '89%', k: 'Accuracy' },
      { v: '0.92', k: 'AUC-ROC' },
      { v: '6', k: 'ML Models' },
    ],
    stack: ['FastAPI', 'React', 'XGBoost', 'LightGBM', 'CatBoost', 'scikit-learn'],
    links: [
      { label: 'GitHub', url: 'https://github.com/FarhanK20-hub/AttritionAI-Employee-Attrition-Prediction-System' },
      { label: 'Live Demo', url: 'https://attrition-ai-employee-attrition-pre.vercel.app/' },
    ],
  },
  {
    num: '06',
    title: 'BlockVote',
    tagline: 'Blockchain-powered transparent election infrastructure',
    badge: 'WEB3',
    badgeClass: 'badge-deployed',
    desc: 'Elections demand trust, and traditional systems struggle to provide it. BlockVote moves the entire voting process on-chain using Ethereum smart contracts, every vote is immutable, every result is publicly auditable. The platform handles wallet-based authentication, election lifecycle management, voter registries, and real-time result visualisation to deliver elections people can actually believe in.',
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
    num: '07',
    title: 'System Diagnostics Toolkit',
    tagline: 'Real-time system resource monitoring and network diagnostics',
    badge: 'FULL STACK',
    badgeClass: 'badge-deployed',
    desc: 'A comprehensive platform for monitoring system resources and performing real-time network diagnostics. Designed with a modern React frontend and a blazing-fast FastAPI backend via WebSockets. Includes real-time metrics, historical data, and HTTP/DNS network health checks.',
    metrics: [
      { v: 'Real-Time', k: 'WebSockets' },
      { v: 'Network', k: 'Diagnostics' },
      { v: '50', k: 'Max Hops Traceroute' },
    ],
    stack: ['Python', 'FastAPI', 'Uvicorn', 'React', 'Vite', 'Recharts', 'SQLite'],
    links: [
      { label: 'GitHub', url: 'https://github.com/FarhanK20-hub/System-Diagnostics-Toolkit' },
    ],
  },
  {
    num: '08',
    title: 'Money Tracker',
    tagline: 'Local-first architecture for absolute privacy and zero-latency performance',
    badge: 'WEB APP',
    badgeClass: 'badge-deployed',
    desc: 'A beautifully crafted, mobile-first web application designed for independently tracking personal and business finances. Built with a local-first architecture for absolute privacy and zero-latency performance. Features deep dark mode, smooth micro-interactions, and iOS automation API.',
    metrics: [
      { v: 'Zero', k: 'Latency' },
      { v: 'Local', k: 'First Sync' },
      { v: 'PWA', k: 'Ready' },
    ],
    stack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS v4', 'localStorage', 'GitHub Gist API'],
    links: [
      { label: 'GitHub', url: 'https://github.com/FarhanK20-hub/Money-Tracker' },
    ],
  },
  {
    num: '09',
    title: 'FitMind',
    tagline: 'AI-powered workout intelligence platform',
    badge: 'AI SAAS',
    badgeClass: 'badge-deployed',
    desc: 'Most fitness apps track reps. FitMind understands recovery. It monitors fatigue across muscle groups, calculates daily readiness scores, detects strength plateaus before they stall progress, and generates adaptive training sessions, all guided by a conversational AI coach powered by Claude. The result is a fitness platform that thinks with you, not just for you.',
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
    num: '10',
    title: 'Skin Health Assistant',
    tagline: 'AI-powered dermatology screening and skin analysis',
    badge: 'HEALTHCARE AI',
    badgeClass: 'badge-deployed',
    desc: 'Dermatology appointments can take weeks. This platform gives users an immediate preliminary assessment by analysing uploaded skin images through computer vision and machine learning. It identifies potential conditions, provides risk-level context, and offers educational guidance, making early screening accessible to anyone with a smartphone, not just those with a specialist on speed dial.',
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
    num: '11',
    title: 'ConnectX',
    tagline: 'Real-time messaging and collaboration platform',
    badge: 'FULL STACK',
    badgeClass: 'badge-deployed',
    desc: 'Communication tools should feel instant. ConnectX is a full-stack messaging platform built on WebSocket-driven architecture, real-time messaging, JWT-secured authentication, media sharing, and live presence tracking, all working seamlessly across devices. Every interaction is designed to feel immediate because the architecture behind it actually is.',
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
    num: '12',
    title: 'FRK Collectives',
    tagline: 'Luxury fashion commerce with cinematic storytelling',
    badge: 'FULL STACK',
    badgeClass: 'badge-deployed',
    desc: 'Luxury brands deserve digital experiences that match their craftsmanship. FRK Collectives is a fashion commerce platform where enterprise-grade Java backend architecture meets cinematic frontend storytelling, dynamic catalogues, editorial animations, custom cursor interactions, and accessibility-aware motion systems all working together to make online shopping feel like stepping into a flagship store.',
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
    num: '13',
    title: 'Kanecraft Web',
    tagline: 'Sustainability-focused enterprise commerce experience',
    badge: 'NEXT.JS',
    badgeClass: 'badge-deployed',
    desc: 'Sustainability products deserve more than a standard e-commerce page. Kanecraft Web turns ESG impact data into interactive visualisations, wraps the shopping experience in ASMR-inspired micro-interactions, and gives the brand full control through a MongoDB-backed admin system, proving that sustainable commerce and premium digital storytelling can coexist.',
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
    num: '14',
    title: 'Pizza Delivery App',
    tagline: 'Native Android food ordering experience',
    badge: 'ANDROID',
    badgeClass: 'badge-deployed',
    desc: 'A native Android application that strips food ordering down to what matters, fast menu discovery, frictionless checkout, and reliable order tracking. Built with Kotlin and Firebase, the app prioritises speed and simplicity over feature bloat, delivering a clean mobile-first experience that gets out of the user\'s way.',
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
      'Specialising in AI, cloud computing, and software engineering, while independently building production-grade systems across machine learning, computer vision, blockchain, and full-stack development. Not waiting for the degree to start shipping.',
  },
  {
    period: '2026',
    dot: 'past',
    title: 'Data Science & AI/ML Intern',
    org: 'Tata Motors · Jamshedpur',
    detail:
      'Applied AI and machine learning to real operational challenges, building predictive models, designing analytics pipelines, and transforming raw manufacturing data into insights that engineering teams could act on.',
  },

  {
    period: '2026',
    dot: 'past',
    title: 'Machine Learning Intern',
    org: 'HyBionics · Hyderabad',
    detail:
      'Contributed to AI-powered fall detection for next-generation smart prosthetics. Designed dataset architectures, built sensor validation pipelines, analysed gait patterns, and helped develop the ML systems that could one day prevent real injuries.',
  },

  {
    period: '2025',
    dot: 'past',
    title: 'AI/ML Engineer Intern',
    org: 'Tata Steel · Jamshedpur',
    detail:
      'Independently designed and delivered a complete industrial computer vision system, from custom YOLO model training on steel surface defects to a React-powered inspection dashboard. Owned the entire pipeline: dataset preparation, model architecture, frontend integration, and deployment.',
  },

  {
    period: '2025',
    dot: 'past',
    title: 'Project Administrator',
    org: 'GirlScript Summer of Code',
    detail:
      'Led contributor coordination across open-source projects, reviewing pull requests, mentoring developers, improving documentation, and building the systems that helped maintainers and contributors work better together.',
  },

  {
    period: '2025',
    dot: 'past',
    title: 'Campus Ambassador',
    org: 'GirlScript Summer of Code',
    detail:
      'Brought the open-source movement to campus, onboarding contributors, connecting students with collaborative development opportunities, and building bridges between local talent and national-level initiatives.',
  },

  {
    period: '2025',
    dot: 'past',
    title: 'Open Source Contributor',
    org: 'GirlScript Summer of Code',
    detail:
      'Shipped code to community-driven projects, collaborated with developers across diverse teams, and learned firsthand what it takes to build software at scale with people you have never met.',
  },
]
// ══════════════════════════════════════
// STORYTELLER — Work items
// ══════════════════════════════════════
export const WORK_ITEMS: WorkItem[] = [
  // ── Reels ──
  {
    tab: 'Reels',
    cat: 'Reel',
    title: 'Fana',
    desc: 'Not every disappearance is sudden… some fade, piece by piece, until only echoes remain.',
    grad: 'linear-gradient(135deg,#120F08,#1a1008,#080608)',
    videoId: '06qKvsmh09Y',
    metrics: [
      { v: '448k+', k: 'Views' },
      { v: '40k+', k: 'Likes' },
      { v: '400+', k: 'Comments' },
      { v: '9k+', k: 'Shares' },
    ],
  },
  {
    tab: 'Reels',
    cat: 'Reel',
    title: 'When Time Slows Down',
    desc: 'Where time slows down, and the soul finally catches up. ',
    grad: 'linear-gradient(45deg,#0A0808,#100A0A,#080608)',
    videoId: 'XLQg2Emjj3E',
    metrics: [
      { v: '29k+', k: 'Views' },
      { v: '1.2k+', k: 'Likes' },
    ],
  },
  {
    tab: 'Reels',
    cat: 'Reel',
    title: 'The Last Rewind',
    desc: 'Every memory has a final frame — the moment just before everything changed.',
    grad: 'linear-gradient(225deg,#08060A,#0E0A05,#080608)',
    videoId: 'MKVLxY-h-lk',
    metrics: [
      { v: '18k+', k: 'Views' },
      { v: '700+', k: 'Likes' },
    ],
  },
  {
    tab: 'Reels',
    cat: 'Reel',
    title: 'The Art of Letting Go',
    desc: 'Some things were never yours to keep — and releasing them was the bravest thing you ever did.',
    grad: 'linear-gradient(160deg,#0A0608,#120A0A,#080608)',
    videoId: '',
    metrics: [
      { v: '17k+', k: 'Views' },
      { v: '500+', k: 'Likes' },
    ],
  },

  // ── Edits ──
  {
    tab: 'Edits',
    cat: 'Edit',
    title: 'Kinetic',
    desc: 'High-energy fast-paced rhythmic editing.',
    grad: 'linear-gradient(180deg,#0F0C06,#0A0806,#060608)',
    videoId: 'y5eDTM3wwY8',
    metrics: [
      { v: '1.2M+', k: 'Views' },
      { v: '118k+', k: 'Likes' },
      { v: '500+', k: 'Comments' },
      { v: '3k+', k: 'Reposts' },
      { v: '36k+', k: 'Shares' },
      { v: '20k+', k: 'Saves' },
    ],
  },
  {
    tab: 'Edits',
    cat: 'Edit',
    title: 'Seamless',
    desc: 'Smooth transitions and invisible cuts.',
    grad: 'linear-gradient(160deg,#0C0A0A,#08060A,#0A0808)',
    videoId: 'ulJSNwWLfIY',
    metrics: [
      { v: '189k+', k: 'Views' },
      { v: '125k+', k: 'Likes' },
      { v: '2k+', k: 'Reposts' },
      { v: '6k+', k: 'Shares' },
      { v: '4k+', k: 'Saves' },
    ],
  },
  {
    tab: 'Edits',
    cat: 'Edit',
    title: 'Rhythm',
    desc: 'Editing driven entirely by the beat.',
    grad: 'linear-gradient(200deg,#0E0A06,#080808,#0A0606)',
    videoId: 'yrMKKuC8fAQ',
    metrics: [
      { v: '163k+', k: 'Views' },
      { v: '24k+', k: 'Likes' },
      { v: '2k+', k: 'Reposts' },
      { v: '5k+', k: 'Shares' },
      { v: '3k+', k: 'Saves' },
    ],
  },
  {
    tab: 'Edits',
    cat: 'Edit',
    title: 'Poetic',
    desc: 'A poetic approach to visual storytelling.',
    grad: 'linear-gradient(135deg,#0E0A06,#0A0808,#080606)',
    videoId: 'nw8gLXVEm20',
  },
  // ── Cinematography ──

  {
    tab: 'Cinematography',
    cat: 'Short Film',
    title: 'If time could wait',
    desc: 'A quiet meditation on the moments we wish we could hold still — frames that breathe instead of rush.',
    grad: 'linear-gradient(135deg,#100E0A,#0C0A08,#080608)',
    videoId: 'M-157vS2nVY',
  },
  {
    tab: 'Cinematography',
    cat: 'Landscape',
    title: 'Some sunsets stay with us forever',
    desc: 'Not for their colour, but for the person you were standing next to.',
    grad: 'linear-gradient(45deg,#120A06,#0E0806,#080608)',
    videoId: 'gISD0jBcHw4',
  },
  {
    tab: 'Cinematography',
    cat: 'Automotive',
    title: 'The Red Files',
    desc: 'Machines built for speed, shot like they were built for art.',
    grad: 'linear-gradient(200deg,#150606,#0E0404,#080608)',
    videoId: 'TPjBaDxPne0',
  },
  {
    tab: 'Cinematography',
    cat: 'Dreamy',
    title: 'Still Moving',
    desc: 'POV - You meet the girl youu2019ve been dreaming about',
    grad: 'linear-gradient(135deg,#100E08,#0C0A06,#080608)',
    videoId: '6xSP4OFPizw',
  },
  // ── Photography ──
  {
    tab: 'Photography',
    cat: 'Automotive',
    title: 'PIT JAM — Red Detail I',
    desc: 'The wheel that holds the road to its promise.',
    grad: 'linear-gradient(135deg,#150608,#0E0404,#080608)',
    image: '/photos/pitjam-mg-wheel-red.jpg',
  },
  {
    tab: 'Photography',
    cat: 'Automotive',
    title: 'PIT JAM — Red Detail II',
    desc: 'A headlight sharp enough to cut through silence.',
    grad: 'linear-gradient(200deg,#120608,#0C0406,#080608)',
    image: '/photos/pitjam-mg-headlight-red.jpg',
  },
  {
    tab: 'Photography',
    cat: 'Automotive',
    title: 'PIT JAM — MG Centre Cap',
    desc: 'Precision at the point where speed is born.',
    grad: 'linear-gradient(225deg,#080808,#0C0C0C,#080608)',
    image: '/photos/pitjam-mg-hub-white.jpg',
  },
  {
    tab: 'Photography',
    cat: 'Automotive',
    title: 'PIT JAM — Trio Lineup',
    desc: 'Three machines, one moment, zero hesitation.',
    grad: 'linear-gradient(45deg,#0A080A,#0C080C,#080608)',
    image: '/photos/pitjam-mg-trio-lineup.jpg',
  },
  {
    tab: 'Photography',
    cat: 'Automotive',
    title: 'PIT JAM — Fleet Wide',
    desc: 'India’s first supercar gala — where horsepower met heritage.',
    grad: 'linear-gradient(160deg,#0A0808,#100C0A,#080608)',
    image: '/photos/pitjam-mg-fleet-wide.jpg',
  },
  {
    tab: 'Photography',
    cat: 'Portrait',
    title: 'PIT JAM — At the Hood',
    desc: 'She made the car feel like a backdrop, not the subject.',
    grad: 'linear-gradient(315deg,#100A08,#0E0808,#080608)',
    image: '/photos/pitjam-portrait-red-mg.jpg',
  },
  {
    tab: 'Photography',
    cat: 'Automotive',
    title: 'PIT JAM — Lamborghini Huracán',
    desc: 'Loud enough to change how you see yellow forever.',
    grad: 'linear-gradient(135deg,#120A04,#100804,#080608)',
    image: '/photos/pitjam-lamborghini-huracan.jpg',
  },
  {
    tab: 'Photography',
    cat: 'Automotive',
    title: 'PIT JAM — Corvette Arrival',
    desc: 'The kind of entrance that rewrites the room.',
    grad: 'linear-gradient(45deg,#0E0E0A,#0C0C08,#080608)',
    image: '/photos/pitjam-corvette-entrance.jpg',
  },
  {
    tab: 'Photography',
    cat: 'Street',
    title: 'Threshold',
    desc: 'The space between entering and leaving.',
    grad: 'linear-gradient(135deg,#0C0A06,#100C08,#080608)',
    image: '/photos/photo-1.jpg',
  },
  {
    tab: 'Photography',
    cat: 'Editorial',
    title: 'Skin & Stone',
    desc: 'Textures that tell stories on their own.',
    grad: 'linear-gradient(225deg,#0E0A08,#0A0808,#080606)',
    image: '/photos/photo-2.jpg',
  },
  {
    tab: 'Photography',
    cat: 'Architecture',
    title: 'Negative Space',
    desc: 'What the architect left empty says more.',
    grad: 'linear-gradient(45deg,#0A0A08,#0C0C08,#080608)',
    image: '/photos/photo-3.jpg',
  },
  {
    tab: 'Photography',
    cat: 'Documentary',
    title: 'Midnight Chai',
    desc: 'The roadside conversations no one records.',
    grad: 'linear-gradient(315deg,#100A06,#0A0806,#080608)',
    image: '/photos/photo-4.jpg',
  },
  // ── CoverArt ──

  {
    tab: 'CoverArt',
    cat: 'Film Poster',
    title: 'If Time Could Wait',
    desc: 'A silhouette between stillness and longing — when the mind refuses to move on.',
    grad: 'linear-gradient(225deg,#0E0C0A,#0C0A08,#080608)',
    image: '/cover-art/cover-if-time-could-wait.png',
  },
  {
    tab: 'CoverArt',
    cat: 'Album Cover',
    title: 'Echoes',
    desc: 'Visualizing the soundscape of ambient music.',
    grad: 'linear-gradient(135deg,#0E0A06,#0A0808,#080606)',
    image: '/cover-art/cover-1.png',
  },
  {
    tab: 'CoverArt',
    cat: 'Book Cover',
    title: 'The Silent Observer',
    desc: 'A minimal take on a thriller novel.',
    grad: 'linear-gradient(225deg,#100C08,#0C0A06,#080608)',
    image: '/cover-art/cover-2.png',
  },
  {
    tab: 'CoverArt',
    cat: 'Poster',
    title: 'Neon Nights',
    desc: 'Retro-futuristic aesthetics.',
    grad: 'linear-gradient(45deg,#0A080A,#100C12,#080608)',
    image: '/cover-art/cover-3.png',
  },
  {
    tab: 'CoverArt',
    cat: 'Editorial',
    title: 'Time Slows Down',
    desc: 'When every second feels like an eternity.',
    grad: 'linear-gradient(315deg,#120C06,#0C0804,#0A0808)',
    image: '/cover-art/cover-4.jpg',
  },
  // ── 3d Animation ──
  {
    tab: '3d Animation',
    cat: 'Unreal Engine',
    title: '',
    desc: 'Environment and lighting created in Unreal Engine.',
    grad: 'linear-gradient(45deg,#08080A,#0A0A0C,#060608)',
    videoId: 'wJxplBvIqSw',
  },
  {
    tab: '3d Animation',
    cat: 'Unreal Engine',
    title: '',
    desc: 'Real-time 3D cinematic made in Unreal Engine.',
    grad: 'linear-gradient(315deg,#0C0A0A,#08060A,#0A0808)',
    videoId: 'CVHlyKSZxD8',
  },
];

export const CLIENT_EDITS_LIST = [
  {
    client: '',
    title: 'Event Showreel',
    desc: 'A dynamic showcase of event highlights.',
    grad: 'linear-gradient(135deg,#120E08,#0C0A06,#080608)',
    videoId: 'B9mLnxz53CU',
  },
  {
    client: '',
    title: 'Event Aftermovie',
    desc: 'Capturing the raw energy and rhythm of the live crowd.',
    grad: 'linear-gradient(225deg,#0A0808,#0E0808,#080608)',
    videoId: 'kOiOx6pK2c0',
  },
  {
    client: '',
    title: 'Podcast',
    desc: 'Engaging podcast edits for a better viewing experience.',
    grad: 'linear-gradient(45deg,#0E0E0A,#0C0C08,#080608)',
    videoId: 'TxvUOIEgZuw',
  },
  {
    client: '',
    title: 'Vlogs',
    desc: 'Cinematic and storytelling vlog edits.',
    grad: 'linear-gradient(135deg,#120E08,#0C0A06,#080608)',
    videoId: 'iuP--1l0EDE',
  },
  {
    client: '',
    title: 'Faceless reel',
    desc: 'High-retention short form faceless content.',
    grad: 'linear-gradient(225deg,#0A0808,#0E0808,#080608)',
    videoId: '3HDPUstQS4c',
  },
  {
    client: '',
    title: 'Talking head reel',
    desc: 'Professional talking head short form edit.',
    grad: 'linear-gradient(45deg,#0E0E0A,#0C0C08,#080608)',
    videoId: '_eBlu6KpIlc',
  },
];

export const WORK_TABS_LIST = [
  'Reels',
  'Cinematography',
  'Photography',
  'Edits',
  'CoverArt',
  '3d Animation',
];

export const CLIENTS_LIST = [
  '/logos/18 craft media.jpg',
  '/logos/airavat.png',
  '/logos/Beyoung.png',
  '/logos/challengefitness.png',
  '/logos/COBC.png',
  '/logos/Dogue.png',
  '/logos/Fast&Up.png',
  '/logos/JK Cement.png',
  '/logos/K Nutrition.png',
  '/logos/Kenzo.png',
  '/logos/Kita P L A N S.png',
  '/logos/Kita.png',
  '/logos/knorrbremse.png',
  '/logos/Navneet-Logo-Name_2-1.png',
  '/logos/NOURRIR.png',
  '/logos/Panache 26 SPSU.png',
  '/logos/pitjam.PNG',
  '/logos/Plaques Wall.png',
  '/logos/Project 831 Jamshedpur.png',
  '/logos/sabkadentist.png',
  '/logos/shark fitness.png',
  '/logos/Skin Inspired.png',
  '/logos/taiso fitness.png',
  '/logos/tarnado fitness.png',
  '/logos/The Pet Partner.png',
];

// ══════════════════════════════════════
// CERTIFICATES DATA
// ══════════════════════════════════════
export const CERTIFICATES: Certificate[] = [
  // ── Internship Completions ──────────────────────────────────
  {
    name: 'Data Science & AI/ML Internship Completion',
    issuer: 'Tata Motors',
    category: 'Internship',
  },
  {
    name: 'Machine Learning Internship Completion',
    issuer: 'HyBionics',
    category: 'Internship',
  },
  {
    name: 'AI/ML Engineer Internship Completion',
    issuer: 'Tata Steel',
    category: 'Internship',
  },

  // ── Artificial Intelligence & ML ─────────────────────────────
  {
    name: 'AI for Business Professionals',
    issuer: 'HP',
    category: 'Artificial Intelligence',
  },
  {
    name: 'Deep Learning Fundamentals',
    issuer: 'Cognitive Class',
    category: 'Deep Learning',
  },
  {
    name: 'Machine Learning with Python',
    issuer: 'Cognitive Class',
    category: 'Machine Learning',
  },

  // ── Generative AI ────────────────────────────────────────────
  {
    name: 'Build Your Own Chatbot',
    issuer: 'Cognitive Class',
    category: 'Generative AI',
  },
  {
    name: 'Foundations of Prompt Engineering',
    issuer: 'AWS',
    category: 'Generative AI',
  },

  // ── Data Science & Analytics ──────────────────────────────────
  {
    name: 'Data Science Methodology',
    issuer: 'Cognitive Class',
    category: 'Data Science',
  },
  {
    name: 'Data Analysis with Python',
    issuer: 'Cognitive Class',
    category: 'Data Science',
  },
  {
    name: 'Data Visualization with R',
    issuer: 'Cognitive Class',
    category: 'Data Analytics',
  },
  {
    name: 'Statistics 101',
    issuer: 'Cognitive Class',
    category: 'Statistics',
  },

  // ── Cloud Computing ────────────────────────────────────────────
  {
    name: 'AWS Cloud Essentials',
    issuer: 'AWS',
    category: 'Cloud Computing',
  },

  // ── Blockchain ─────────────────────────────────────────────────
  {
    name: 'Blockchain Masterclass',
    issuer: 'CFTE',
    category: 'Blockchain',
  },
  {
    name: 'Bitcoin for Developers I',
    issuer: 'Saylor University',
    category: 'Blockchain Development',
  },

  // ── Computer Science ───────────────────────────────────────────
  {
    name: 'Elementary Data Structures',
    issuer: 'Saylor University',
    category: 'Computer Science',
  },

  // ── Database ───────────────────────────────────────────────────
  {
    name: 'SQL (Advanced)',
    issuer: 'HackerRank',
    category: 'Database Systems',
  },

  // ── IoT ────────────────────────────────────────────────────────
  {
    name: 'Introduction to IoT and Digital Transformation',
    issuer: 'Cisco Networking Academy',
    category: 'IoT',
  },

  // ── UI/UX Design ───────────────────────────────────────────────
  {
    name: 'Complete Figma Course: Web & Mobile Projects from Scratch',
    issuer: 'Udemy',
    category: 'UI/UX Design',
  },

  // ── Marketing ──────────────────────────────────────────────────
  {
    name: 'Fundamentals of Digital Marketing',
    issuer: 'Google',
    category: 'Marketing',
  },
  {
    name: 'Apple Ads Certification',
    issuer: 'Apple',
    category: 'Marketing',
  },

  // ── Professional Development ───────────────────────────────────
  {
    name: 'TCS iON Career Edge – Young Professional',
    issuer: 'TCS iON',
    category: 'Professional Development',
  },
  {
    name: 'Vocational Training Program',
    issuer: 'Tata Steel',
    category: 'Industrial Training',
  },
  {
    name: 'Critical thinking in the AI Era',
    issuer: 'HP',
    category: 'Professional Development',
  },
  {
    name: 'Growth Engine for your business',
    issuer: 'HP',
    category: 'Business',
  },
  {
    name: 'Power BI for Beginners',
    issuer: 'Microsoft',
    category: 'Data Analytics',
  },
  {
    name: 'Selling Online',
    issuer: 'HP',
    category: 'Business',
  },
  {
    name: 'Social Entrepreneurship',
    issuer: 'HP',
    category: 'Business',
  },
  {
    name: 'Starting a small Business',
    issuer: 'HP',
    category: 'Business',
  },
];
