export const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export const skills = [
  {
    title: 'Backend Development',
    description: 'Specializing in robust server-side architectures, RESTful APIs, and performant ML model integration with production-grade scalability.',
    skills: ['Python', 'Flask', 'Node.js', 'PostgreSQL', 'MongoDB', 'Docker'],
    icon: 'server',
  },
  {
    title: 'AI & LLM Applications',
    description: 'Building intelligent systems using state-of-the-art LLMs, multi-agent architectures, and advanced NLP techniques for real-world impact.',
    skills: ['LangGraph', 'Llama 3.2', 'Transformers', 'Groq API', 'TensorFlow', 'Scikit-learn'],
    icon: 'brain',
  },
  {
    title: 'Full Stack Development',
    description: 'Creating end-to-end applications with modern frontend frameworks and scalable backend services, from concept to deployment.',
    skills: ['React', 'Tailwind CSS', 'Redux', 'Firebase', 'Next.js'],
    icon: 'globe',
  },
  {
    title: 'Hackathons & Innovation',
    description: 'Rapid prototyping and solution-building under pressure, with a track record of finalist placements and winning solutions.',
    skills: ['Rapid Prototyping', 'System Design', 'Public Speaking', 'Team Leadership'],
    icon: 'zap',
  },
];

export const techStack = [
  { name: 'Python', icon: 'python' },
  { name: 'React', icon: 'react' },
  { name: 'Flask', icon: 'flask' },
  { name: 'Node.js', icon: 'nodejs' },
  { name: 'TensorFlow', icon: 'tensorflow' },
  { name: 'Scikit-learn', icon: 'scikitlearn' },
  { name: 'MongoDB', icon: 'mongodb' },
  { name: 'PostgreSQL', icon: 'postgresql' },
  { name: 'Docker', icon: 'docker' },
  { name: 'Git', icon: 'git' },
  { name: 'Firebase', icon: 'firebase' },
];

export const projects = [
  {
    id: 1,
    title: 'Multi-Agent Text-to-SQL System',
    description: 'Built an LLM-powered system that converts natural language into SQL queries using multi-agent architecture.',
    highlight: '94% accuracy on Spider Benchmark',
    tech: ['Python', 'LangGraph', 'LLMs', 'PostgreSQL'],
    image: '/project-text-to-sql.png',
    github: 'https://github.com/Sidtripathi07',
  },
  {
    id: 2,
    title: 'AidConnect',
    description: 'AI-powered donation logistics platform connecting NGOs with vendors for efficient aid distribution.',
    highlight: 'Hackathon Finalist',
    tech: ['React', 'Node.js', 'Llama 3.2', 'MongoDB'],
    image: '/project-aidconnect.png',
    github: 'https://github.com/Sidtripathi07',
  },
  {
    id: 3,
    title: 'AI Resume Screening System',
    description: 'NLP-based system to match resumes with job descriptions using TF-IDF and cosine similarity.',
    tech: ['Python', 'NLP', 'Scikit-learn'],
    image: '/project-resume-screener.png',
    github: 'https://github.com/Sidtripathi07',
  },
  {
    id: 4,
    title: 'Emergency Vehicle Alert System',
    description: 'Browser extension for detecting emergency vehicles using AI signals and real-time alerts.',
    tech: ['Python', 'Transformers', 'Groq API', 'React'],
    image: '/project-emergency-alert.png',
    github: 'https://github.com/Sidtripathi07/Machine_learning_using_python',
  },
];

export const experience = [
  {
    company: 'Chums AI',
    role: 'Software Development Intern',
    period: 'May 2025 – Sep 2025',
    points: [
      'Built AI-based query classification system achieving 85%+ accuracy across diverse query types',
      'Developed and documented REST APIs following industry-standard best practices',
      'Improved UI/UX performance metrics by 40% through optimization and refactoring',
      'Automated complex ML pipelines reducing manual intervention by 60%',
    ],
  },
];

export const education = [
  {
    degree: 'B.E. AI & Data Science',
    school: 'Sandip Institute of Technology, Nashik',
    period: '2022 – 2026',
    score: 'CGPA: 8.21',
  },
];

export const achievements = [
  { text: 'TechHorizon Hackathon Finalist (Top 300+ teams)', icon: 'trophy' },
  { text: 'Smart India Hackathon Participant', icon: 'award' },
  { text: 'Winner – PBL Competition (Smart Home Automation Project)', icon: 'medal' },
];

export const socialLinks = {
  github: 'https://github.com/Sidtripathi07',
  linkedin: 'https://www.linkedin.com/in/siddharth-tripathi-547236232/',
  email: 'siddharthtripathi0704@gmail.com',
};
