import React from 'react';
import { useState } from "react";
import { motion } from 'framer-motion';
import { Award, ExternalLink, Calendar, CheckCircle, Zap } from 'lucide-react';

interface Certification {
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
  image: string;
  description: string;
  skills: string[];
  verifyLink?: string;
  color: string;
  featured?: boolean;
}

const Certifications: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [expandedSkillsIndex, setExpandedSkillsIndex] = useState(null); // For skills
  const certifications: Certification[] = [
    {
  name: 'NPTEL Discipline Star & Motivated Learner',
  issuer: 'NPTEL (IITs & IISc)',
  date: '2023 – 2025',
  image: './assets/discipline.jpg', // Thumbnail: Discipline Star & Motivated Learner badge image
  description: 'Recognized as an NPTEL Discipline Star & Motivated Learner for consistent academic excellence across multiple courses from 2023–2025. Achieved Top 2% performance in "Cloud Computing" and completed advanced certifications in emerging technologies and core computing skills.',
  skills: [
  'Blockchain and its Applications',
  'Cloud Computing (Topper)','Software Testing',
  'Ethical Hacking',
  'Intellectual Property',
  'Internet of Things (IoT)','Google Cloud Computing Foundations'
],
  credentialId: 'NPTELSS1250103303 & NPTELSS1250107535',
  verifyLink: 'https://drive.google.com/drive/folders/1mD13VhWg6BUDIb_vqxcCGE6H3gtKkf6w?usp=sharing', // Google Drive link with all NPTEL certs
  color: 'from-yellow-500 to-orange-400',
  featured: false
},
{
  "name": "Master JavaScript, HTML, and CSS with 30 Projects in 30 Days",
  "issuer": "Udemy (Instructor: Vijay Kumar)",
  "date": "August 4, 2025",
  "credentialId": "UC-82971d25-71a3-40dd-a6cc-0746aeac08ed",
  "image": "./assets/jshtml.png",
  "description": "Successfully completed the 'Master JavaScript, HTML, and CSS with 30 Projects in 30 Days' course on Udemy, building 30 real-world projects to strengthen front-end development skills and gain hands-on experience with core web technologies.",
  "skills": ["JavaScript", "HTML5", "CSS3", "Responsive Web Design", "Front-End Development", "Web Project Implementation"],
  "verifyLink": "https://ude.my/UC-82971d25-71a3-40dd-a6cc-0746aeac08ed",
  "color": "from-purple-500 to-pink-600"
},
{
  "name": "Schema Patterns and Antipatterns",
  "issuer": "MongoDB, Inc.",
  "date": "August 2025",
  "credentialId": "MDBz6q2p4bqcx",
  "image": "./assets/mongo.png",
  "description": "Successfully completed the 'Schema Patterns and Antipatterns' course by MongoDB, gaining expertise in designing optimal database schemas and avoiding common pitfalls.",
  "skills": ["Database Schema Design", "MongoDB Best Practices", "Schema Patterns", "Schema Antipatterns"],
  "verifyLink": "https://ti-user-certificates.s3.amazonaws.com/ae62dcd7-abdc-4e90-a570-83eccba49043/911b976a-bc5d-4fa6-9107-ff1161de6efb-kaviya-s-3aff89ab-6b0f-4f60-bcfb-e57b0f31c79c-certificate.pdf",
  "color": "from-green-600 to-emerald-500"
},
{
  name: 'Managed Services Launchpad Program - Cloud',
  issuer: 'PwC India',
  date: 'July 24, 2025',
  image: './assets/pwc.png',
  description: 'Successfully completed the PwC Managed Services Launchpad Program (Cloud), gaining insights and skills in cloud service management, client solutions, and operational excellence.',
  skills: [
  'RDBMS','IT Fundamentals',
  'Programming Fundamentals',
  'Data Engineering (Intro)',
  'DevOps & Cloud Fundamentals'
],
  credentialId: '',
  verifyLink: 'https://drive.google.com/file/d/1q4GtB8MPVnLf9igOpMjPfLz6Mi87HVWe/view?usp=sharing',
  color: 'from-orange-500 to-red-500',
  featured: false
},
{
  "name": "Learn Blockchain and Crypto from Beginning",
  "issuer": "Udemy (Instructor: Zechariah Tech)",
  "date": "July 27, 2025",
  "credentialId": "UC-15a2e7a4-14d2-4490-aefc-93c28f641b0f",
  "image": "./assets/block.png",
  "description": "Successfully completed the 'Learn Blockchain and Crypto from Beginning' course on Udemy, gaining foundational knowledge of blockchain technology, cryptocurrency concepts, decentralized networks, and digital assets.",
  "skills": ["Blockchain Technology", "Cryptocurrency Basics", "Decentralization", "Digital Assets", "Distributed Ledger"],
  "verifyLink": "https://ude.my/UC-15a2e7a4-14d2-4490-aefc-93c28f641b0f",
  "color": "from-green-600 to-emerald-500"
},
 

    {
  name: 'Software Engineering Job Simulation',
  issuer: 'Accenture (via Forage)',
  date: 'July 3, 2025',
  image: './assets/forage.png',
  description: 'Completed a virtual job simulation program focusing on software engineering practices, gaining practical experience in multiple technical areas.',
  skills: [
    'Agile',
    'Analysis',
    'Debugging Code',
    'Identification',
    'Maturity Level Assessments',
    'Reading Code',
    'SSDLC',
    'Waterfall'
  ],
  credentialId: 'SY8izkkyB3ng86jTc',
  verifyLink: 'https://drive.google.com/file/d/1LE9c0TFkxoJPFh-eAiVQl-yUwkYXSggh/view?usp=sharing',
  color: 'from-yellow-500 to-orange-400',
  featured: false
},
{
  name: 'Introduction to Modern AI',
  issuer: 'Cisco Networking Academy',
  date: '07 May 2025',
  credentialId: '06522cfa-34c5-4bf8-b052-8207f08d105b', // replace with actual credential ID if available
  image: './assets/modernai.png',
  description: 'Completed the Cisco Networking Academy "Introduction to Modern AI" course, gaining foundational knowledge of Artificial Intelligence concepts, applications, and ethical considerations.',
  skills: ['Artificial Intelligence', 'Machine Learning Basics', 'AI Applications', 'Data-Driven Decision Making', 'Ethical AI'],
  verifyLink: 'https://www.credly.com/badges/06522cfa-34c5-4bf8-b052-8207f08d105b/public_url', // replace with your actual verification link
  color: 'from-blue-500 to-indigo-500'
},
{
  name: 'Sairam - Generative AI',
  issuer: 'GUVI | HCL',
  date: 'April 3 2025',
  credentialId: '76X0nz1l46v643y38h',
  image: './assets/genaii.png',
  description: 'Successfully completed the "Sairam - Generative AI - English" course offered by GUVI in collaboration with HCL, gaining knowledge in generative AI concepts, tools, and applications.',
  skills: ['Generative AI', 'AI Tools', 'Prompt Engineering', 'AI Applications', 'Machine Learning Basics'],
  verifyLink: 'https://www.guvi.in/share-certificate/76X0nz1146v643y38h',
  color: 'from-purple-500 to-pink-600'
},
  {
  name: 'Cisco Ideathon',
  issuer: 'Cisco Networking Academy',
  date: '2025',
  credentialId: '973cc675-2e57-45f5-8ff2-e50de81f50af', // replace with actual credential ID
  image: './assets/ccna.png',
  description: 'Covered advanced networking, cybersecurity, IoT, Python, and data analytics concepts.',
  skills: ['Networking', 'Cybersecurity', 'IoT', 'Python', 'Data Analytics', 'Problem Solving'],
  verifyLink: 'https://drive.google.com/drive/folders/1Iec74hiB1-GbH-bouBRlijs4ZqWRvEii?usp=sharing', // replace with actual verification link
  color: 'from-blue-500 to-cyan-500'
},
{
  "name": "Generative AI - SAWIT.AI Learnathon",
  "issuer": "GUVI | HCLTech",
  "date": "October 2024",
  "credentialId": "178Rv182d74Zz307gO",
  "image": "./assets/sawit.png",
  "description": "Successfully completed the SAWIT.AI Learnathon Program held on 21st September, covering the fundamentals of Generative AI, supported by Women Techmakers and HCLTech.",
  "skills": ["Generative AI Fundamentals", "AI Concepts", "Machine Learning Basics", "Innovation in AI"],
  "verifyLink": "https://www.guvi.in/share-certificate/178Rv182d74Zz307gO",
  "color": "from-green-600 to-emerald-500"
},
{
  "name": "MERN Fullstack Development Training",
  "issuer": "REVAMP Academy",
  "date": "September 2024",
  "credentialId": '',
  "image": "./assets/mern.png",
  "description": "Successfully completed a 4-month training program (10/06/2024 - 25/09/2024) on MERN Fullstack Development at REVAMP Academy, showcasing exceptional dedication, punctuality, and responsiveness throughout the course.",
  "skills": ["MongoDB", "Express.js", "React.js", "Node.js", "Fullstack Development", "Web Application Development"],
  "verifyLink": 'https://drive.google.com/file/d/16Qq974B2z7slJUdXwH0hna1YEQ58v31n/view?usp=sharing',
  "color": "from-yellow-500 to-orange-400"
},

   
   
    {
  name: 'IEEE Xtreme 18.0 Programming Competition',
  issuer: 'IEEE',
  date: 'October 2024',
  credentialId: 'okzAB3NirZdSr6',
  image: './assets/xtreme.png',
  description: 'Served as the Team Leader of UpsideDown in the IEEE Xtreme 18.0 Programming Competition, competing among over 19,000 participants worldwide and showcasing expertise in leadership, competitive programming, and problem-solving.',
  skills: ['Competitive Programming', 'Problem Solving', 'Algorithm Design', 'Team Collaboration', 'Time Management'],
  verifyLink: 'https://certificate.ieeextreme.org/generate-email-certificate/okzAB3NirZdSr6',
  color: 'from-blue-600 to-indigo-500'
},
{
  "name": "Learnathon 2024",
  "issuer": "ICT Academy",
  "date": "October 2024",
  "credentialId": "b8af5132-473b-4af7-b907-5bb42e6dc765",
  "image": "./assets/l2024.png",
  "description": "Successfully completed 8 courses in Learnathon 2024, organized by ICT Academy from August to October 2024, in collaboration with global technology partners.",
  "skills": ["Technology Fundamentals", "Cloud Computing", "Data Analytics", "AI & Machine Learning", "Programming", "Industry Tools"],
  "verifyLink": "https://www.credly.com/badges/b8af5132-473b-4af7-b907-5bb42e6dc765/public_url",
  "color": "from-orange-500 to-yellow-500"
},
{
  name: 'Introduction to Data Science',
  issuer: 'Cisco Networking Academy',
  date: '16 Apr 2024',
  credentialId: '8a029590-fad9-407d-a826-8b44949fc4a4', // replace with actual credential ID if available
  image: './assets/ds.png',
  description: 'Completed the Cisco Networking Academy "Introduction to Data Science" course, covering data analysis, visualization, and data-driven decision-making concepts.',
  skills: ['Data Science', 'Data Analysis', 'Data Visualization', 'Problem Solving', 'Analytics'],
  verifyLink: 'https://www.credly.com/badges/8a029590-fad9-407d-a826-8b44949fc4a4/public_url', // replace with your actual verification link
  color: 'from-green-600 to-emerald-500'
},
{
  name: 'Blockchain Process',
  issuer: 'Great Learning Academy',
  date: 'May 2024',
  credentialId: 'PAEATDEU',
  image: './assets/blockchaa.png',
  description: 'Successfully completed the free online course "Blockchain Process" offered by Great Learning Academy, gaining foundational knowledge of blockchain technology, processes, and its applications.',
  skills: ['Blockchain Fundamentals', 'Distributed Ledger Technology', 'Consensus Mechanisms', 'Smart Contracts', 'Blockchain Applications'],
  verifyLink: 'https://www.mygreatlearning.com/certificate/PAEATDEU',
  color: 'from-purple-500 to-pink-600'
},
  
{
  name: 'Global Summit for Career & Skill Development 2023',
  issuer: 'Global Emerging Leadership Programs',
  date: '2023',
  credentialId: '',
  image: './assets/gelp.png',
  description: 'Completed the 2023 Global Summit for Career & Skill Development, demonstrating skill-based learning in Local Knowledge in a Global Context, Capacity to Engage in Respectful Relationships, Technological Literacies, Critical Thinking, Active Learning, and Indigenous Perspectives.',
  skills: ['Local Knowledge in a Global Context', 'Capacity to Engage in Respectful Relationships', 'Technological Literacies', 'Critical Thinking', 'Active Learning', 'Indigenous Perspectives'],
  verifyLink: 'https://app.gelp.ca/badge?id=I5PQ2CSIB8JSG1BT',
  color: 'from-blue-500 to-indigo-500'
},

{
  "name": "Advanced C++ Training",
  "issuer": "Spoken Tutorial Project, IIT Bombay",
  "date": "December 18, 2023",
  "credentialId": "33987120V2",
  "image": "./assets/cppp.png",
  "description": "Successfully completed the Advanced C++ training test organized at Sri Sairam Engineering College by A. Sheela Jeyakumar, with course material provided by the Spoken Tutorial Project, IIT Bombay. Achieved a perfect score of 100% in the online examination conducted remotely by IIT Bombay.",
  "skills": ["C++ Programming", "Advanced C++ Concepts", "Object-Oriented Programming", "Problem Solving", "Software Development"],
  "verifyLink": "https://drive.google.com/file/d/1vMTC1MWeqJAtP8C1_mw33te_W22RWi8G/view?usp=sharing",
  "color": "from-purple-500 to-pink-600"
},
{
  "name": "Fullstack Android App Development Training",
  "issuer": "REVAMP Academy",
  "date": "December 2023",
  "credentialId": '',
  "image": "./assets/android.png",
  "description": "Successfully completed a 5-week training program (15/11/2023 - 25/12/2023) on Fullstack Android App Development at REVAMP Academy, demonstrating strong technical skills, punctuality, and dedication throughout the training.",
  "skills": ["Android Development", "Fullstack Development", "Java", "Kotlin", "Mobile App Architecture"],
  "verifyLink": 'https://drive.google.com/file/d/1YdStE1SWkObx_QEKBYbx21wD905UyHa_/view?usp=sharing',
  "color": "from-yellow-500 to-orange-600"
},


{
  "name": "Java Fundamentals - Final Exam Completion",
  "issuer": "Oracle Academy",
  "date": "January 2024",
  "credentialId": '',
  "image": "./assets/oacle.png",
  "description": "Successfully completed the final exam for the Java Fundamentals course offered by Oracle Academy, demonstrating foundational skills in Java programming.",
  "skills": ["Java Programming", "Object-Oriented Programming", "Java Syntax", "Core Java Concepts"],
  "verifyLink": 'https://drive.google.com/file/d/1Mxf4l3GsG7DRBy1ABzNdbZOWcObqGQcg/view?usp=sharing',
  "color": "from-green-600 to-emerald-500"
},
  {
  "name": "Python Object-Oriented Programming (2020)",
  "issuer": "LinkedIn Learning",
  "date": "April 2023",
  "credentialId": "56bd1defea01dedb967d554df05ca5195d3d53a8a4fcf46b46850fdee6ec8c3d",
  "image": "./assets/linkedin.png",
  "description": "Completed the 'Python Object-Oriented Programming (2020)' course on LinkedIn Learning, covering key concepts of Python programming and Object-Oriented Programming (OOP) principles.",
  "skills": ["Python (Programming Language)", "Object-Oriented Programming (OOP)"],
  "verifyLink": "https://www.linkedin.com/learning/certificates/56bd1defea01dedb967d554df05ca5195d3d53a8a4fcf46b46850fdee6ec8c3d?trk=share_certificate",
  "color": "from-blue-600 to-indigo-500"
},

{
  "name": "Learnathon 2023",
  "issuer": "ICT Academy",
  "date": "September 2023",
  "credentialId": "0018b88a-4015-4f22-9e73-b4410afad7fb",
  "image": "./assets/l2023.png",
  "description": "Successfully participated in Learnathon 2023, organized by ICT Academy during August to September 2023, in collaboration with global technology partners.",
  "skills": ["Technology Fundamentals", "Cloud Computing", "Data Analytics", "AI & Machine Learning", "Programming", "Industry Tools"],
  "verifyLink": "https://www.credly.com/badges/0018b88a-4015-4f22-9e73-b4410afad7fb/public_url",
  "color": "from-orange-500 to-yellow-500"
  }  ];

  return (
    <section id="certifications" className="py-20 bg-gradient-to-br from-emerald-50 via-white to-teal-50 dark:from-emerald-900/20 dark:via-gray-800 dark:to-teal-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.4}}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-emerald-100 to-teal-100 dark:from-emerald-900/30 dark:to-teal-900/30 px-4 py-2 rounded-full mb-4"
          >
            <Zap className="text-emerald-600 dark:text-emerald-400" size={20} />
            <span className="text-emerald-800 dark:text-emerald-300 font-medium">Professional Credentials</span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-emerald-800 to-teal-800 dark:from-white dark:via-emerald-200 dark:to-teal-200 bg-clip-text text-transparent mb-6">
            Certifications & Credentials
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Professional certifications that validate my expertise across various technologies and methodologies
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {(showAll ? certifications : certifications.slice(0, 8)).map((cert, index) => (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.05 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -15,
                rotateY: 5,
                rotateX: 5,
                scale: 1.03
              }}
              className={`group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-200/50 dark:border-gray-700/50 ${
                cert.featured ? 'ring-2 ring-emerald-200 dark:ring-emerald-800' : ''
              }`}
            >
              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-15 transition-all duration-500 rounded-3xl`}></div>
              
              {/* Animated Border */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${cert.color} opacity-0 group-hover:opacity-25 transition-opacity duration-500 -z-10 blur-sm`}></div>

              <div className="relative overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                  src={cert.image}
                  alt={cert.name}
                  className="w-full h-40 object-cover"
                />
                
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>

                {cert.featured && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.05 }}
                    className="absolute top-3 left-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center space-x-1 shadow-lg"
                  >
                    <CheckCircle size={14} />
                    <span>Featured</span>
                  </motion.div>
                )}

                
              </div>

              <div className="p-6 relative z-20">
                <div className="flex items-center justify-between mb-3">
                  <motion.h3
                    whileHover={{ x: 5 }}
                    className="text-lg font-bold text-gray-900 dark:text-white group-hover:bg-gradient-to-r group-hover:from-emerald-600 group-hover:to-teal-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 leading-tight"
                  >
                    {cert.name}
                  </motion.h3>
                </div>
                
                <div className="flex items-center space-x-2 mb-3">
                  <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                    {cert.issuer}
                  </span>
                  <div className="flex items-center text-gray-500 dark:text-gray-400 text-xs">
                    <Calendar size={12} className="mr-1" />
                    {cert.date}
                  </div>
                </div>

                 <p
            className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4 cursor-pointer"
            onClick={() =>
              setExpandedIndex(expandedIndex === index ? null : index)
            }
          >
            {expandedIndex === index
              ? cert.description
              : `${cert.description.slice(0, 120)}...`}
          </p>


                {cert.credentialId && (
                  <div className="mb-4 p-2 bg-gray-50 dark:bg-gray-700/50 rounded-lg">
                    <span className="text-xs text-gray-500 dark:text-gray-400">Credential ID:</span>
                    <p className="text-xs font-mono text-gray-700 dark:text-gray-300 break-all">
                      {cert.credentialId}
                    </p>
                  </div>
                )}

                <div className="flex flex-wrap gap-1 mb-4">
  {(expandedSkillsIndex === index ? cert.skills : cert.skills.slice(0, 4)).map((skill, skillIndex) => (
    <motion.span
      key={skill}
      initial={{ opacity: 0, scale: 0 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.05 }}
      whileHover={{ scale: 1.05, y: -1 }}
      className={`px-2 py-1 bg-gradient-to-r ${cert.color} text-white text-xs rounded-full font-medium shadow-sm hover:shadow-md transition-all duration-300`}
    >
      {skill}
    </motion.span>
  ))}

  {cert.skills.length > 4 && expandedSkillsIndex !== index && (
    <span
      className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded-full font-medium cursor-pointer"
      onClick={() => setExpandedSkillsIndex(index)}
    >
      +{cert.skills.length - 4}
    </span>
  )}

  {expandedSkillsIndex === index && (
    <span
      className="px-2 py-1 bg-red-100 dark:bg-red-700 text-red-600 dark:text-red-300 text-xs rounded-full font-medium cursor-pointer"
      onClick={() => setExpandedSkillsIndex(null)}
    >
      Show less
    </span>
  )}
</div>


                {cert.verifyLink && (
                  <motion.a
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    href={cert.verifyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r ${cert.color} text-white rounded-xl text-sm font-semibold shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group/link w-full justify-center`}
                  >
                    <span className="relative z-10 flex items-center space-x-2">
                      <span>Verify Certificate</span>
                      <ExternalLink size={14} />
                    </span>
                    <div className="absolute inset-0 bg-white/10 opacity-0 group-hover/link:opacity-100 transition-opacity duration-300"></div>
                  </motion.a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
  {certifications.length > 8 && (
    <button
  onClick={() => {
    setShowAll(prev => {
      const newState = !prev;

      if (prev === true) {
        // Scroll to certifications section after collapsing
        setTimeout(() => {
          const section = document.getElementById("certifications");
          section?.scrollIntoView({ behavior: "smooth" });
        }, 100); // slight delay to allow UI to update
      }

      return newState;
    });
  }}
  className="px-6 py-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 font-semibold"
>
  {showAll ? "Show Less" : "View All Certifications"}
</button>

  )}
</div>


        {/* Certification Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { number: '22+', label: 'Certifications', color: 'from-emerald-500 to-teal-500' },
            { number: '5+', label: 'Tech Domains', color: 'from-blue-500 to-cyan-500' },
            { number: '100%', label: 'Verified', color: 'from-green-500 to-emerald-500' },
            { number: '2025', label: 'Latest Cert', color: 'from-purple-500 to-pink-500' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.05 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05, 
                y: -5,
                rotateY: 5
              }}
              className="text-center bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-200/50 dark:border-gray-700/50 group relative overflow-hidden"
            >
              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-all duration-500 rounded-3xl`}></div>
              
              <div className="relative z-10">
                <div className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                  {stat.number}
                </div>
                <div className="text-gray-600 dark:text-gray-300 text-sm font-semibold">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;