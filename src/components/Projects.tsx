import React from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink, Star, Code, Zap } from 'lucide-react';
import { useState } from 'react';

interface Project {
  title: string;
  description: string;
  image: string;
  tech: string[];
  github: string;
  live?: string;
  featured?: boolean;
}

const Projects: React.FC = () => {
  const [showAll, setShowAll] = useState(false);

  const projects: Project[] = [
    {
  title: 'Chat-based Portfolio Website',
  description: 'An interactive, WhatsApp-style portfolio with keyword based commands to explore resume, skills, projects, education, Languages and more ,all in a dynamic chat format.',
  image: '/assets/chat-based.jpg', // Placeholder image; replace if you have a screenshot
  tech: ['HTML5', 'CSS3', 'JavaScript', 'SVG'],
  github: 'https://github.com/KaviyaSathasivam/PortfolioViaWhatsapp', // Replace "yourusername" if needed
  live: 'https://kaviya-portfolio-via-whatsapp.vercel.app/', // Add once deployed (GitHub Pages / Netlify / Vercel)
  featured: true,
},
{
  title: 'Secure Vote – Revolutionizing Democracy through Blockchain Technology',
  description: 'A blockchain-powered e-voting system designed to ensure secure, transparent, and tamper-proof college elections. Built with Ethereum smart contracts and biometric authentication. Initially developed for college elections, the project demonstrates scalability for larger electoral frameworks.',
  image: '/assets/elect.png', // Replace with your actual screenshot if available
  tech: ['Blockchain', 'Hyperledger Fabric', 'Ethereum', 'Solidity', 'Node.js', 'Truffle', 'Metamask', 'Docker'],
  github: 'https://github.com/KaviyaSathasivam/SecureVote', // Replace with your actual repo link
  live: '', // Not deployed yet
  featured: true,
},


{
  title: 'SwasthTrack – Patient Health Tracking System',
  description: 'A modern health management system featuring role-based login for patients, doctors, and admins. Built with React, TypeScript, and Tailwind CSS, it includes interactive dashboards, health data visualizations, and a scalable frontend architecture.',
  image: '/assets/swasth.jpg', // Replace with your actual screenshot if available
  tech: ['React', 'TypeScript', 'Tailwind CSS', 'Recharts', 'Framer Motion', 'Vite'],
  github: 'https://github.com/KaviyaSathasivam/SwasthTrack_HealthTrackingSystem',
  live: '', // Not deployed
  featured: true,
},
{
  title: 'Egg Catcher Deluxe',
  description: 'A fun desktop arcade game built using Python and Tkinter where you catch colorful falling eggs and power-ups with a basket. Features include scoring, lives, level progression, and exciting power-up mechanics.',
  image: '/assets/egg catch.png', // Placeholder; replace with actual game screenshot if available
  tech: ['Python', 'Tkinter', 'Standard Library'],
  github: 'https://github.com/KaviyaSathasivam/Game_CatchingEggg',
  live: '', // Not applicable for desktop apps unless you host a demo video or executable
  featured: false,
},
{
  title: 'Rubik\'s Cube GUI Solver (Hackathon Edition)',
  description:
    'A Python-based interactive 2D GUI to scramble and solve a 3x3 Rubik’s Cube. Includes manual scrambling, auto-solving (kociemba or fallback), animated moves, screenshots, JSON export, and timer — built for hackathon challenges and educational demos.',
  image: '/assets/cubee.png', // Replace with actual screenshot path
  tech: ['Python', 'Tkinter', 'NumPy', 'PyAutoGUI', 'kociemba'],
  github: 'https://github.com/KaviyaSathasivam/Rubiks_Cube_Solver',
  live: '', // No live link for desktop app, leave empty
  featured: true,
},

{
  title: 'AI Chatbot – Gemini + FastAPI',
  description: 'A lightweight AI chatbot using Google Gemini 1.5 Flash, FastAPI backend, and a minimal HTML/CSS/JS frontend. It supports real-time intelligent conversations with a simple UI and CORS-enabled backend for integration.',
  image: '/assets/AI Chatbot.png', // Replace with actual UI screenshot if available
  tech: ['Google Gemini', 'FastAPI', 'HTML', 'CSS', 'JavaScript'],
  github: 'https://github.com/KaviyaSathasivam/GenAI_Chatbot',
  live: '', // Not deployed
  featured: false,
},
{
  title: 'Gemini TerminalBot – AI Chat in CLI',
  description: 'A terminal-based chatbot powered by Google Gemini 1.5 Flash. Simulates real-time chat with typing effects, timestamps, and graceful exit commands. Lightweight and clean Python project for command-line AI interaction.',
  image: '/assets/Gemini TerminalBot.png', // Terminal-themed placeholder — replace with your own if desired
  tech: ['Python', 'Google Gemini', 'CLI', 'Standard Library'],
  github: 'https://github.com/KaviyaSathasivam/Gemini_TerminalBot',
  live: '', // Not deployed
  featured: false,
},
{
  title: 'GenPlay Arcade – AI-Powered Learning Games',
  description: 'An educational platform that blends learning and play using Streamlit, Gemini API, and MySQL. Features include a Snake Game that teaches spelling, a ChatPDF bot, structured learning modules, and a high-score dashboard — all built for engaging AI-assisted education.',
  image: '/assets/arcade.png', // Replace with actual screenshot if available
  tech: ['Python', 'Streamlit', 'Gemini API', 'MySQL'],
  github: 'https://github.com/KaviyaSathasivam/GenPlayArcadeGame',
  live: 'https://drive.google.com/drive/folders/1XTZZiiMS8Hzdnrsu23SsKP44NNAa6CSZ', // Not deployed
  featured: true,
},
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-gray-50 via-white to-yellow-50 dark:from-gray-900 dark:via-gray-800 dark:to-yellow-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-100 to-orange-100 dark:from-yellow-900/30 dark:to-orange-900/30 px-4 py-2 rounded-full mb-4"
          >
            <Code className="text-yellow-600 dark:text-yellow-400" size={20} />
            <span className="text-yellow-800 dark:text-yellow-300 font-medium">Featured Work</span>
          </motion.div>
          
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A showcase of my recent work, from web applications to mobile apps and everything in between
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {(showAll ? projects : projects.slice(0, 3)).map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -10,
                rotateY: 5,
                rotateX: 5,
              }}
               className={`group relative 
    bg-gradient-to-br from-white/90 to-white/70 
    dark:from-gray-900 dark:to-gray-800
    rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl 
    transition-all duration-500 transform-gpu perspective-1000
    ${project.featured ? 'md:col-span-2 lg:col-span-1 ring-2 ring-blue-200 dark:ring-blue-800' : ''}`}
            >
              {/* Gradient Background on Hover */}
{/* Gradient Background on Hover */}
<div className="absolute inset-0 rounded-3xl
    bg-gradient-to-br from-blue-500/0 via-purple-500/0 to-pink-500/0
    group-hover:from-blue-500/20 group-hover:via-purple-500/20 group-hover:to-pink-500/20
    dark:bg-[radial-gradient(circle_at_center,rgba(96,165,250,0)_0%,rgba(96,165,250,0.3)_50%,rgba(236,72,153,0.4)_100%)]
    dark:opacity-0 dark:group-hover:opacity-100
    transition-all duration-500">
</div>

{/* Glow Border */}
<div className="absolute inset-0 rounded-3xl 
    bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500
    opacity-0 group-hover:opacity-20
    dark:opacity-0 dark:group-hover:opacity-40
    transition-opacity duration-500 blur-md">
</div>


              <div className="relative overflow-hidden rounded-t-3xl">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.05 }}
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                
                {/* Overlay Icons */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center space-x-4">
                  <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    whileHover={{ scale: 1, rotate: 0 }}
                    className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center"
                  >
                    <Zap className="text-white" size={20} />
                  </motion.div>
                </div>

                {project.featured && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.05 }}
                    className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold flex items-center space-x-1 shadow-lg"
                  >
                    <Star size={16} />
                    <span>Featured</span>
                  </motion.div>
                )}
              </div>

              <div className="p-6 relative z-20">
                <motion.h3
                  whileHover={{ x: 5 }}
className="text-xl font-bold text-gray-900 dark:text-white mb-3 
  group-hover:bg-gradient-to-r group-hover:from-pink-700 group-hover:via-purple-700 group-hover:to-blue-700
  dark:group-hover:from-pink-300 dark:group-hover:via-purple-300 dark:group-hover:to-blue-300
  group-hover:bg-clip-text group-hover:text-transparent
  transition-all duration-300"
                >
                  {project.title}
                </motion.h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed text-sm">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: techIndex * 0.1 }}
                      whileHover={{ scale: 1.1 }}
                      className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-800 dark:text-blue-300 text-xs rounded-full font-medium border border-blue-200/50 dark:border-blue-700/50"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                <div className="flex space-x-3">
                  <motion.a
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-gray-800 to-gray-900 dark:from-gray-700 dark:to-gray-600 text-white rounded-xl hover:from-gray-900 hover:to-black dark:hover:from-gray-600 dark:hover:to-gray-500 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    <Github size={18} />
                    <span className="font-medium">Code</span>
                  </motion.a>
                  
                  {project.live && (
                    <motion.a
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      <ExternalLink size={18} />
                      <span className="font-medium">Live</span>
                    </motion.a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.05 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.button
  onClick={() => {
    if (showAll) {
      setShowAll(false); // collapse projects
      const projectsSection = document.getElementById('projects');
      if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      setShowAll(true); // expand projects
    }
  }}
  whileHover={{ scale: 1.05, y: -2 }}
  whileTap={{ scale: 0.95 }}
  className="px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-2xl font-bold shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
>
  <span className="relative z-10">
    {showAll ? 'Show Less Projects' : 'View All Projects'}
  </span>
  <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
</motion.button>


        </motion.div>
      </div>
    </section>
  );
};

export default Projects;