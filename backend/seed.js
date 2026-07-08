import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Project from './models/Project.js';

dotenv.config();

const projects = [
  {
    order: 1,
    title: 'Prep-AI',
    description: 'AI-powered interview prep platform — mock interviews, DSA tracking, resume analysis, and personalised roadmaps.',
    tech: ['React', 'Node.js', 'MongoDB', 'Groq', 'Gemini'],
    repoUrl: 'https://github.com/aditibh19/Prep-Ai',
    liveUrl: 'https://prep-ai-frontend-eosin.vercel.app/',
    image: '/projects/prep-ai.png',
  },
  {
    order: 2,
    title: 'CauseConnect',
    description: 'Responsive crowdfunding platform to create, discover, and donate to campaigns.',
    tech: ['React', 'Vite', 'Mantine'],
    repoUrl: 'https://github.com/aditibh19/causeconnect',
    liveUrl: 'https://causeconnect-black.vercel.app',
    image: '/projects/causeconnect.png',
  },
  {
    order: 3,
    title: 'Zerodha Clone',
    description: "Pixel-perfect, fully responsive recreation of Zerodha's homepage.",
    tech: ['React', 'Vite', 'TailwindCSS'],
    repoUrl: 'https://github.com/aditibh19/zerodha-clone',
    liveUrl: 'https://zerodha-clone-henna.vercel.app',
    image: '/projects/zerodha-clone.png',
  },
  {
    order: 4,
    title: 'SmartRail',
    description: 'Efficient railway booking system with visual seat selection and real-time availability.',
    tech: ['Java'],
    repoUrl: 'https://github.com/aditibh19/SmartRail',
    liveUrl: 'https://smart-rail.vercel.app',
    image: '/projects/smartrail.png',
  },
  {
    order: 5,
  title: "eFoods - Food Ordering & Delivery Platform",
  description:
    "A modern full-stack food ordering and delivery platform built using React, TypeScript, Express.js, PostgreSQL, and Drizzle ORM. It provides a seamless experience for browsing restaurants, placing orders, managing deliveries, and handling food service operations.",
  tech: [
    "React",
    "TypeScript",
    "Express.js",
    "PostgreSQL",
    "Drizzle ORM",
    "Node.js"
  ],
  image: "/projects/efoods.png",
  repoUrl: "https://github.com/aditibh19/e-foods",
  liveUrl: "https://e-foods-efoods.vercel.app/"


},
  
  {
    order: 6,
  title: "GoCars - Car Rental & Used Car Marketplace",
  description:
    "GoCars is an online car marketplace built with Node.js, Express.js, EJS, and MongoDB. It enables users to buy and sell used cars with features like Google Maps location detection, Razorpay payment integration, and Google OAuth authentication.",
  tech: [
    "Node.js",
    "Express.js",
    "MongoDB",
    "EJS",
    "Google Maps API",
    "Razorpay",
    "Google OAuth"
  ],
  image: "/projects/gocar.png",
  repoUrl: "https://github.com/aditibh19/GO-CAR.git",
  
},
  {
    order: 7,
    title: 'Support Ticket System',
    description: 'Full-stack ticket management with automatic LLM-based categorisation and priority assignment.',
    tech: ['Django', 'React', 'PostgreSQL', 'OpenAI GPT-4o-mini'],
    repoUrl: 'https://github.com/aditibh19/support-ticket-system',
    
  },
  
  {
    order: 8,
    title: 'AI Chat Bot',
    description: 'Full-stack chatbot with real-time messaging, persistent conversation history, and GPT-powered responses.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'OpenAI GPT-3.5'],
    repoUrl: 'https://github.com/aditibh19/AI-Chat-Bot',
    liveUrl: 'https://ai-chat-bot-ten-phi.vercel.app',
    image: '/projects/ai-chatbot.png',
  },
  {
    order: 9,
    title: 'Snappy',
    description: 'Real-time chat app with rooms, private messaging, typing indicators, and live presence.',
    tech: ['Node.js', 'Socket.IO'],
    repoUrl: 'https://github.com/aditibh19/Snappy',
    image: '/projects/snappy.png',
  },
   {
    order: 10,
    title: 'eFoods Microservices - Food Delivery System',
    description: 'Scalable food ordering and delivery platform on a microservices architecture — restaurant management, orders, auth, and real-time service communication.',
    tech: ['JavaScript', 'Microservices'],
    repoUrl: 'https://github.com/aditibh19/efoods',
    image: '/projects/food.png',
  },
  {
    order: 11,
    title: 'Scheduling Algorithm Visualiser',
    description: 'Interactive Gantt-chart visualisation of CPU scheduling algorithms — FCFS, SJF, Round Robin, and Priority.',
    tech: ['JavaScript'],
    repoUrl: 'https://github.com/aditibh19/Scheduling-Algo',
    
  },
  
  
  {
    order: 12,
    title: 'Document Intelligence',
    description: 'CPU-only, Docker-ready system that extracts structured headings and persona-driven relevant sections from PDFs.',
    tech: ['Python', 'Docker'],
    repoUrl: 'https://github.com/aditibh19/challenge_1a',
    
  },
  {
    order: 13,
    title: 'Job Portal',
    description: 'Job listing and application platform.',
    tech: ['JavaScript'],
    repoUrl: 'https://github.com/aditibh19/Job-Portal',
    
  },
  {
    order: 14,
    title: 'AI Fraud Call Detector',
    description: 'System to analyse and detect fraudulent phone calls using AI.',
    tech: ['AI'],
    repoUrl: 'https://github.com/aditibh19/Ai-Fraud-Call-Detector',
    
  },
];

async function seed() {
  await mongoose.connect(process.env.MONGODB_URI);
  await Project.deleteMany({});
  await Project.insertMany(projects);
  console.log('✅ Projects seeded!');
  mongoose.disconnect();
}

seed().catch(console.error);