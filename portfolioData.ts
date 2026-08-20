import { EducationItem, InternshipItem, ProjectItem, SkillCategory } from '../types';

export const PERSONAL_INFO = {
  name: 'Vaishnavi D',
  title: 'MCA Student | Java Developer',
  email: 'vaishnavidhamodharan2004@gmail.com',
  location: 'Tamil Nadu, India',
  profileImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAFLX4DsFwqy8OPRgfx5xjMv1plUHpuX7oxpMWEYkKC_cEsiUmTSiUi3ILo83lASPZxCoBQvWreI63EOrbBjdsD-iZetWZgJHyM8lLpsFrP9Cshhhyh1J0RKOXzFzYWVvvqeIeyPNQH0c1ls1naW6_EBsauA6gP0TgG7HlV9c8tbpQ0KNN3bwieLIJbAEHtejE4duUtPgarLdO2wQTIufyiXgsK5RDeXY1x2z2fhh06zJ2dE79t7YN-Fwnfz8SGL2uduqo',
  bio: 'Motivated and enthusiastic MCA student with a strong academic background in Computer Applications and Mathematics. Seeking an opportunity to apply programming, analytical, and problem-solving skills in software development while continuously learning and contributing to organizational growth.',
  about: 'I am an MCA student with an academic background in Computer Applications and Mathematics. I am interested in software development, Java programming, data analytics and emerging technologies. I enjoy solving problems, learning new technologies and working collaboratively to build practical solutions.',
  githubUrl: 'https://github.com',
  linkedinUrl: 'https://linkedin.com',
};

export const HIGHLIGHT_CARDS = [
  {
    title: 'Programming',
    icon: 'terminal',
    description: 'Proficient in Advanced Java, C/C++, HTML/CSS, PHP, and SQL queries.',
  },
  {
    title: 'Problem Solving',
    icon: 'psychology',
    description: 'Strong mathematical foundation enabling structured algorithmic reasoning.',
  },
  {
    title: 'Data Analytics',
    icon: 'analytics',
    description: 'Skilled in mathematical modeling, data extraction, and performance evaluation.',
  },
  {
    title: 'Emerging Tech',
    icon: 'rocket_launch',
    description: 'Passionate about exploring IoT, cloud utilities, and modern software paradigms.',
  },
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: 'mca',
    degree: 'MCA',
    field: 'Master of Computer Applications',
    score: '8.30 CGPA',
    scoreLabel: '8.30 CGPA',
    year: '2023 - 2025',
    icon: 'school',
    isCurrent: true,
    highlights: [
      'Advanced Java Programming & Enterprise Application Architecture',
      'Database Management Systems (DBMS) & Data Analytics',
      'Software Engineering & Object-Oriented System Design',
      'Web Application Development & Network Security',
    ],
  },
  {
    id: 'bsc',
    degree: 'B.Sc Mathematics',
    field: 'Bachelor of Science in Mathematics',
    score: '7.50 CGPA',
    scoreLabel: '7.50 CGPA',
    year: '2020 - 2023',
    icon: 'calculate',
    highlights: [
      'Operations Research & Optimization Algorithms',
      'Discrete Mathematics & Linear Algebra',
      'Fuzzy Set Theory & Decision-Making Models',
      'Statistical Analysis & Numerical Methods',
    ],
  },
  {
    id: 'hsc',
    degree: 'HSC',
    field: 'Higher Secondary Certificate',
    score: '80.33%',
    scoreLabel: '80.33%',
    year: '2019 - 2020',
    icon: 'book',
    highlights: [
      'Focus on Physics, Chemistry, and Higher Mathematics',
      'Strong Academic Performance in Quantitative Reasoning',
    ],
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Programming Languages',
    skills: [
      { name: 'Advanced Java', highlight: true, level: 90 },
      { name: 'C / C++', level: 82 },
      { name: 'HTML / CSS', level: 88 },
      { name: 'PHP', level: 78 },
      { name: 'SQL', level: 85 },
    ],
  },
  {
    title: 'Tools & Environments',
    skills: [
      { name: 'NetBeans IDE', highlight: true, level: 88 },
      { name: 'Dev C++', level: 80 },
      { name: 'Ubuntu Linux', level: 82 },
      { name: 'VS Code', level: 85 },
      { name: 'Git & GitHub', level: 80 },
    ],
  },
  {
    title: 'Domains & Core Competencies',
    skills: [
      { name: 'Software Development', highlight: true, level: 88 },
      { name: 'Data Analytics', level: 84 },
      { name: 'IoT Applications', level: 78 },
      { name: 'Mathematical Optimization', level: 90 },
      { name: 'Problem Solving', level: 92 },
    ],
  },
];

export const INTERNSHIP_DATA: InternshipItem[] = [
  {
    id: 'java-dev-intern',
    role: 'Java Software Development Intern',
    company: 'Tech Solutions & Development Centre',
    period: 'May 2024 - July 2024',
    type: 'Practical Industry Internship',
    description:
      'Gained hands-on software development experience building object-oriented Java modules, creating custom NetBeans desktop components, and interfacing with relational databases.',
    keyContributions: [
      'Designed modular Java classes following object-oriented design principles (OOP).',
      'Built custom GUI forms in NetBeans connected with MySQL via JDBC driver.',
      'Developed data validation scripts reducing user entry errors by 30%.',
      'Collaborated with senior developers on testing, debugging, and code optimization.',
    ],
    technologies: ['Advanced Java', 'NetBeans', 'MySQL', 'JDBC', 'OOP'],
    certificateAvailable: true,
  },
  {
    id: 'analytics-research-intern',
    role: 'Data Analytics & Optimization Research Trainee',
    company: 'Department of Computer Applications & Mathematics',
    period: 'Dec 2023 - March 2024',
    type: 'Academic Research Training',
    description:
      'Worked on applying mathematical algorithms and fuzzy logic models to real-world transportation cost and time minimization problems.',
    keyContributions: [
      'Analyzed dual hesitant fuzzy sets for fractional programming calculations.',
      'Constructed algorithmic solver steps to evaluate optimal trade-offs in multi-objective transportation setups.',
      'Prepared detailed documentation and presented model outcomes at academic seminars.',
    ],
    technologies: ['Optimization', 'Fuzzy Sets', 'Data Analytics', 'Mathematics'],
    certificateAvailable: true,
  },
];

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'fuzzy-transportation',
    title: 'An Algorithm for Multi Objective Dual Hesitant Fuzzy Fractional Transportation Problem',
    subtitle: 'Mathematical Optimization & Fractional Programming Research',
    category: 'Mathematics & Research',
    description:
      'Developed a mathematical optimization approach to solve complex transportation problems using dual hesitant fuzzy sets, aiming to minimize cost and time simultaneously under uncertainty.',
    fullDescription:
      'This research project addresses complex logistics challenges where both cost and time objectives must be optimized simultaneously amidst uncertain and hesitant data. By combining Dual Hesitant Fuzzy Sets (DHFS) with fractional programming, the algorithm delivers optimal supply chain transportation plans.',
    keyFeatures: [
      'Simultaneous multi-objective optimization (Cost & Time minimization)',
      'Dual Hesitant Fuzzy membership and non-membership degree handling',
      'Fractional transportation ratio modeling for realistic resource efficiency',
      'Robust algorithm validation across multiple test transportation networks',
    ],
    methodology: [
      'Problem Formulation: Define fractional objective functions under fuzzy supply/demand.',
      'Fuzzy Defuzzification: Apply score functions to convert dual hesitant sets into crisp values.',
      'Simplex Solver Iteration: Execute modified fractional simplex method for multi-criteria optimal solution.',
    ],
    tags: ['Mathematics', 'Optimization', 'Dual Hesitant Fuzzy', 'Operations Research'],
    icon: 'functions',
    featured: true,
  },
  {
    id: 'student-mgmt-system',
    title: 'Java-Based Student Academic Management & Analytics System',
    subtitle: 'Desktop Application with NetBeans & MySQL Database',
    category: 'Java & Software',
    description:
      'A comprehensive Java desktop application built with NetBeans, featuring CRUD student operations, automated grade calculation, and performance analytics with SQL backend integration.',
    fullDescription:
      'Designed for educational institutions to streamline administrative workflows. Implements secure login roles, student enrollment management, subject mark tracking, and graphical attendance analytics.',
    keyFeatures: [
      'Object-oriented architecture with clean separation of logic and presentation layers',
      'NetBeans Swing GUI interface with smooth tab navigation and search filters',
      'JDBC-powered MySQL database connectivity for persistent data management',
      'Automated CGPA/percentage calculation and report generation',
    ],
    tags: ['Advanced Java', 'NetBeans', 'MySQL', 'JDBC', 'Software Dev'],
    icon: 'badge',
    featured: true,
  },
  {
    id: 'iot-smart-agri-dashboard',
    title: 'IoT Environmental & Smart Agriculture Monitoring Portal',
    subtitle: 'Web Application & Real-Time Data Visualization',
    category: 'Web & IoT',
    description:
      'A web-based dashboard utilizing HTML/CSS, PHP, and MySQL for aggregating and monitoring real-time soil moisture, temperature, and environmental data for automated farm analytics.',
    fullDescription:
      'Provides small-scale farm managers with an intuitive web dashboard to track environmental sensor readings. Sends threshold alerts when environmental metrics diverge from optimal crop cultivation ranges.',
    keyFeatures: [
      'Responsive web layout built with clean HTML5/CSS3 and modern card components',
      'PHP backend processing incoming sensor payload feeds into a MySQL database',
      'Interactive metrics visualization for quick data analytics and trends',
      'Alert system triggers for critical temperature and moisture levels',
    ],
    tags: ['HTML / CSS', 'PHP', 'IoT', 'Data Analytics', 'MySQL'],
    icon: 'sensors',
    featured: true,
  },
];
