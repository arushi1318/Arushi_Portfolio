import {
  logo,
  backend,
  creator,
  mobile,
  web,
  github,
  menu,
  close,
  css,
  gearXpert,
  project2,
  project3,
  mysql,
  express,
  aws,
  mui,
  
  gsap,
  framer,
  figma,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  threejs,
  firstTestimonial,
  secondTestimonial,
  thirdTestimonial,
} from '../assets'

// Import Tekisky separately
import tekisky from "../assets/company/tekisky.png";
import techIcons from './autoIcons';

// --- Arushi Gupta Portfolio Data ---

const services = [
  {
    title: "RLHF Code Specialist",
    icon: creator,
  },
  {
    title: "AI/ML Researcher",
    icon: web,
  },
  {
    title: "Aspiring Software Engineer",
    icon: backend,
  },
  {
    title: "Technical Community Leader",
    icon: aws,
  },
];

const technologies = [
  { name: "Python", icon: techIcons['python'] || nodejs },
  { name: "JavaScript (ES6+)", icon: techIcons['javascript'] || nodejs },
  { name: "TypeScript", icon: techIcons['typescript'] || nodejs },
  { name: "C", icon: techIcons['c'] || nodejs },
  { name: "C++", icon: techIcons['cpp'] || nodejs },
  { name: "Scala", icon: techIcons['scala'] || nodejs },
  { name: "Java", icon: techIcons['java'] || nodejs },
  { name: "HTML", icon: techIcons['html'] || nodejs },
  { name: "CSS", icon: techIcons['css'] || nodejs },
  { name: "React", icon: techIcons['reactjs'] || nodejs },
  { name: "Next.js", icon: techIcons['nextjs'] || nodejs },
  { name: "Tailwind CSS", icon: techIcons['tailwind'] || nodejs },
  { name: "Streamlit", icon: techIcons['streamlit'] || nodejs },
  { name: "React Native", icon: techIcons['reactnative'] || nodejs },
  { name: "Android", icon: techIcons['android'] || nodejs },
  { name: "Arduino", icon: techIcons['arduino'] || nodejs },
  { name: "Embedded C", icon: techIcons['embeddedc'] || nodejs },
  { name: "8051 microcontrollers", icon: techIcons['8051microcontrollers'] || nodejs },
  { name: "OpenCV", icon: techIcons['opencv'] || nodejs },
  { name: "OpenGL ES", icon: techIcons['opengl'] || nodejs },
  { name: "JNI", icon: techIcons['jni'] || nodejs },
  { name: "NDK", icon: techIcons['ndk'] || nodejs },
  { name: "Camera2", icon: techIcons['camera2'] || nodejs },
  { name: "GLSurfaceView", icon: techIcons['glsurfaceview'] || nodejs },
  { name: "CMake", icon: techIcons['cmake'] || nodejs },
  { name: "Gradle", icon: techIcons['gradle'] || nodejs },
  { name: "TensorFlow", icon: techIcons['tensorflow'] || nodejs },
  { name: "CNNs", icon: techIcons['cnns'] || nodejs },
  { name: "EfficientNet", icon: techIcons['efficientnet'] || nodejs },
  { name: "InceptionResNet", icon: techIcons['inceptionresnet'] || nodejs },
  { name: "MediaPipe", icon: techIcons['mediapipe'] || nodejs },
  { name: "LangChain", icon: techIcons['langchain'] || nodejs },
  { name: "OpenAI API", icon: techIcons['openaiapi'] || nodejs },
  { name: "Hadoop/HDFS", icon: techIcons['hadoop'] || nodejs },
  { name: "Spark", icon: techIcons['spark'] || nodejs },
  { name: "Hive", icon: techIcons['hive'] || nodejs },
  { name: "Pig", icon: techIcons['pig'] || nodejs },
  { name: "HBase", icon: techIcons['hbase'] || nodejs },
  { name: "MongoDB", icon: techIcons['mongodb'] || nodejs },
  { name: "Kafka", icon: techIcons['kafka'] || nodejs },
  { name: "Docker", icon: techIcons['docker'] || nodejs },
  { name: "GitHub Actions", icon: techIcons['githubactions'] || nodejs },
  { name: "n8n", icon: techIcons['n8n'] || nodejs },
  { name: "Apify", icon: techIcons['apify'] || nodejs },
  { name: "AWS", icon: techIcons['aws'] || nodejs },
  { name: "PostgreSQL", icon: techIcons['postgresql'] || nodejs },
  { name: "SQLite", icon: techIcons['sqlite'] || nodejs },
  { name: "MySQL", icon: techIcons['mysql'] || nodejs },
  { name: "Linux (Ubuntu)", icon: techIcons['linux'] || nodejs },
  { name: "VS Code", icon: techIcons['vscode'] || nodejs },
  { name: "Git", icon: techIcons['git'] || nodejs },
  { name: "Postman", icon: techIcons['postman'] || nodejs },
  { name: "JIRA", icon: techIcons['jira'] || nodejs },
  { name: "Confluence", icon: techIcons['confluence'] || nodejs },
];

const experiences = [
  {
    title: "RLHF Code Specialist (Freelance)",
    company_name: "Outlier AI",
    icon: creator,
    iconBg: "#383E56",
    date: "2024 — Present",
    points: [
      "Designed and validated production-grade prompts that tune LLM behavior for faster, more accurate generative AI deployments.",
      "Partnered with research, product, and safety teams to align AI output quality with business requirements across diverse domains.",
      "Evaluated model responses for accuracy, relevance, coherence, and policy compliance while curating gold-standard datasets.",
      "Engineered distributed backend services and RESTful APIs with Flask and Node.js to support scalable RLHF experimentation.",
      "Iterated on reward strategies and prompt templates to continually refine model performance and user experience.",
    ],
  },
  {
    title: "Chairperson & Research Associate",
    company_name: "IEEE PSIT (Student Branch)",
    icon: web,
    iconBg: "#383E56",
    date: "2023 — 2024",
    points: [
      "Led the IEEE student branch, orchestrating research fellowships, flagship events, and high-impact technical initiatives.",
      "Built a Python-based dual-path deepfake detector that fuses EfficientNet and InceptionResNet feature streams for high-accuracy video forensics.",
      "Developed and presented a deepfake research pipeline at national and international conferences while mentoring junior researchers.",
      "Drove cross-team knowledge sharing, publication reviews, and innovation workshops that elevated the chapter’s national standing.",
    ],
  },
];

const testimonials = [
  {
    testimonial: "Arushi translates ambiguous AI problems into clear experiments and delivers with remarkable speed.",
    name: "Program Manager",
    designation: "Generative AI",
    company: "Outlier AI",
    image: firstTestimonial,
  },
  {
    testimonial: "Her leadership at IEEE PSIT raised our research output and inspired an entire cohort of student innovators.",
    name: "Faculty Advisor",
    designation: "IEEE PSIT",
    company: "Pranveer Singh Institute of Technology",
    image: secondTestimonial,
  },
  {
    testimonial: "Arushi combines research rigor with product thinking—exactly what ML-heavy initiatives need.",
    name: "Technical Mentor",
    designation: "AI/ML Practice",
    company: "Community Labs",
    image: thirdTestimonial,
  },
];

const projects = [
  {
    name: "PSIT Virtual Labs",
    description:
      "Immersive HTML/CSS/JS lab platform that delivers interactive simulations, assessments, and feedback loops for PSIT learners across DS, AI/ML, and electronics domains—no setup required.",
    tags: [
      { name: "HTML5", color: "blue-text-gradient" },
      { name: "CSS3", color: "green-text-gradient" },
      { name: "JavaScript", color: "pink-text-gradient" },
      { name: "EduTech", color: "white-text-gradient" },
    ],
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80",
    source_code_link: "https://github.com/arushi1318/Virtual-Labs",
  },
  {
    name: "Hybrid Deepfake Detection System",
    description:
      "Production-grade dual-path video forgery detector combining ASCII conversion, EfficientNet/InceptionResNet fusion, and BiLSTM temporal reasoning to hit 96%+ accuracy on FaceForensics++.",
    tags: [
      { name: "TensorFlow", color: "blue-text-gradient" },
      { name: "OpenCV", color: "green-text-gradient" },
      { name: "EfficientNet", color: "pink-text-gradient" },
      { name: "InceptionResNet", color: "white-text-gradient" },
    ],
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1400&q=80",
    source_code_link: "https://github.com/arushi1318/Hybrid-Deepfake-Detection-System",
  },
  {
    name: "Stock Price Prediction",
    description:
      "Advanced ML-powered stock forecasting system using LSTM, KNN, and Decision Tree models with real-time Yahoo Finance data. Features a merged hybrid model and interactive Streamlit dashboard for comparative analysis and visualization.",
    tags: [
      { name: "Python", color: "blue-text-gradient" },
      { name: "TensorFlow", color: "green-text-gradient" },
      { name: "PyTorch", color: "pink-text-gradient" },
      { name: "Streamlit", color: "white-text-gradient" },
      { name: "LSTM", color: "blue-text-gradient" },
      { name: "KNN", color: "green-text-gradient" },
      { name: "Decision Tree", color: "green-text-gradient" },
    ],
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1400&q=80",
    source_code_link: "https://github.com/arushi1318/Stock-Price-Prediction",
  },
  {
    name: "Referral Track",
    description:
      "AI-powered referral management platform with intelligent campaign tracking, automated rewards, real-time analytics, and predictive insights. Built with Node.js, MongoDB, and OpenAI integration for modern referral marketing.",
    tags: [
      { name: "Node.js", color: "blue-text-gradient" },
      { name: "Express.js", color: "green-text-gradient" },
      { name: "MongoDB", color: "pink-text-gradient" },
      { name: "OpenAI API", color: "white-text-gradient" },
      { name: "JWT", color: "blue-text-gradient" },
    ],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1400&q=80",
    source_code_link: "https://github.com/arushi1318/Referral-Track",
  },
  {
    name: "FairPlay App",
    description:
      "Comprehensive anti-doping education platform featuring AR modules, real-time WebSocket messaging, AI-driven adaptive quizzes, and gamified learning. Cloud-native architecture with React, TypeScript, Node.js, and AWS deployment.",
    tags: [
      { name: "React", color: "blue-text-gradient" },
      { name: "TypeScript", color: "green-text-gradient" },
      { name: "Node.js", color: "pink-text-gradient" },
      { name: "MongoDB", color: "white-text-gradient" },
      { name: "AWS", color: "blue-text-gradient" },
      { name: "Docker", color: "green-text-gradient" },
    ],
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1400&q=80",
    source_code_link: "https://github.com/arushi1318/FAIRPLAY-APP",
  },
];

export { services, technologies, experiences, testimonials, projects };

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "codinghandles",
    title: "Coding Handles",
  },
];
