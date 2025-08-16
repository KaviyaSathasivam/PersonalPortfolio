import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, ExternalLink, Building, Shield } from 'lucide-react';

interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  duration: string;
  type: 'Full-time' | 'Part-time' | 'Internship' | 'Freelance';
  description: string[];
  github: string;
  technologies: string[];
  icon: React.ReactNode;
  color: string;
}

const Experience: React.FC = () => {
  const experiences: ExperienceItem[] = [
    {
  title: 'Industrial Training Intern  ',
  company: 'High Energy Projectile Factory (HEPF)',
  location: 'Trichy',
  duration: 'June 2024',
  type: 'Internship',
  
  github:'https://github.com/KaviyaSathasivam/GenAI_Chatbot',
  description: [
    'Gained hands-on training across departments like Information Technology Centre, QC, Machine Shop, and Surface Treatment etc',
    'Worked on the secure MAYA OS used in the defense sector & Studied and implemented LAN upgrades, server virtualization, and cybersecurity protocols including firewall and phishing analysis',
    'Explored CNC systems, PLC logic, WAN architecture, and endpoint security in a high-security defense environment',
    'Engineered an intelligent conversational AI assistant that autonomously resolved 85% of user queries, significantly improving user satisfaction and reducing manual support workload'
  ],
  technologies: ['Python', 'HTML,CSS','JavaScript', 'React.js', 'Google API'],
  icon: <Shield size={24} />,
  color: 'from-green-600 to-emerald-400'
},
    {
  title: 'Full-Stack Developer Intern',
  company: 'OneYes Infotech Solutions',
  location: 'Chennai, India',
  duration: 'Jan 2025',
  type: 'Internship',
  
  github: '',
  description: [
    'Developed a user-centric College Management System using HTML, CSS, JavaScript, React.js, Node.js, SQL, and Figma',
    'Optimized navigation and usability through student and faculty insights, achieving a 30% reduction in navigation time',
    'Integrated dynamic dashboards for admin, faculty, and students with role-based access control'
  ],
  technologies: ['HTML/CSS', 'JavaScript', 'React.js', 'Node.js', 'SQL', 'Figma'],
  icon: <Shield size={24} />,
  color: 'from-indigo-500 to-purple-500'
  },

    {
  title: 'Gen AI Interactive Learning Games – GenPlay Arcade',
  company: 'Intel® Unnati Industrial Training',
  location: 'Remote',
  duration: 'Feb – Apr 2025',
  type: 'Internship',
  
  github: 'https://github.com/KaviyaSathasivam/GenPlayArcadeGame',
  description: [
    'Developed GenPlay Arcade, a web-based learning platform integrating Generative AI with interactive games and educational content',
    'Built using Python Streamlit, the platform includes AI-powered Snake Game, course modules, and a chatbot that answers questions from user-uploaded PDFs using Gemini API',
    'Implemented user authentication, score tracking, and course progress dashboard using MySQL',
    'Designed a unique Snake Game where players form words by consuming letters generated dynamically by the Gemini API',
    'Enhanced user engagement and educational value through gamification and AI-driven interactivity'
  ],
  technologies: [
    'Python', 'Gemini API', 'MySQL', 'Gamification','PDF Processing'
  ],
  icon: <Shield size={24} />,
  color: 'from-yellow-400 to-orange-500'
},
    {
  title: 'Full-Stack Developer Intern',
  company: 'Vulture Lines Pvt. Ltd.',
  location: 'Chennai, India',
  duration: 'June 2025',
  type: 'Internship',
  github:'https://github.com/KaviyaSathasivam/SwasthTrack_HealthTrackingSystem',
  description: [
    'Developed SwasthTrack, a web-based patient record and health tracking system using HTML,CSS,JavaScript,React.js,SQL & Figma',
    'Enhanced workflow efficiency by 25% through optimized form design and reduced manual data entry errors',
    'Implemented responsive UI for seamless access across desktop and mobile devices',
    'Collaborated with a cross-functional team to integrate real-time patient data updates and secure login features'
  ],
  technologies: ['HTML', 'CSS', 'JavaScript', 'React.js', 'SQL', 'Figma'],
  icon: <Shield size={24} />,
  color: 'from-teal-500 to-lime-500'
},
{
  title: 'Student Coordinator',
  company: 'NDLI Club',
  location: 'SEC,Chennai',
  duration: '2023 – 2025',
  type: 'Part-time',
  github:'',
  description: [
    'Led the NDLI Club as Student Coordinator, organizing and managing multiple literary and academic events',
    'Planned and executed initiatives like National Library Week, and awareness programs across departments'
  ],
  technologies: ['Leadership', 'Communication', 'Event Planning', 'Collaboration'],
  icon: <Shield size={24} />,
  color: 'from-pink-500 to-rose-500'
},
{
  title: 'Student Volunteer',
  company: 'NSS Club',
  location: 'SEC,Chennai',
  duration: '2023 – Present',
  type: 'Part-time',
  github:'',
  description: [
    'Served as an RJ and presenter for NSS audio/video podcasts on education, festivals, and family-themed campaigns',
  'Contributed to social service initiatives including blood donation drives, awareness programs, and campus volunteering activities'
  ],
  technologies: ['Leadership', 'Communication', 'Event Planning', 'Collaboration'],
  icon: <Shield size={24} />,
  color: 'from-blue-500 to-indigo-500'
},
{
  title: 'Active Member – IEEE Student Chapter',
  company: 'Sri Sairam Engineering College',
  location: 'Chennai',
  duration: '2023 – Present',
  type: 'Full-time',
  github:'',
  description: [
    'Actively participated in IEEE chapter events, technical workshops, and knowledge-sharing seminars focused on emerging technologies',
    'Collaborated in participating student-led initiatives and competitions that fostered innovation, technical growth, and peer learning',
    'Published a research paper titled "Secure Vote: Revolutionizing Democracy Through Blockchain Technology"'
  ],
  technologies: ['Teamwork', 'Innovation', 'Technical Events', 'Professional Networking'],
  icon: <Shield size={24} />,
  color: 'from-lime-500 to-emerald-600'
},
    {
  title: 'Magic Scope Member',
  company: 'Varadharajapuram Village',
  location: 'Chennai',
  duration: '2024 – Present',
  type: 'Full-time',
  github:'',
  description: [
    'Engaged in rural development and awareness initiatives under the Magic Scope program',
    'Contributed to educational support, environmental activities, and community engagement efforts in Varadharajapuram village'
  ],
  technologies: ['Social Impact', 'Community Engagement', 'Teamwork'],
  icon: <Shield size={24} />,
  color: 'from-pink-500 to-rose-500'
},
{
  title: 'Member – Google Developer Student Club (GDSC)',
  company: 'Sri Sairam Engineering College',
  location: 'Chennai',
  duration: '2024 – Present',
  type: 'Full-time',
  github:'',
  description: [
    'Active member of GDSC, engaging in peer learning, tech talks, and collaborative coding activities',
    'Participated in Google Cloud Jam, exploring cloud fundamentals and hands-on labs through Qwiklabs platform'
  ],
  technologies: ['Google Cloud', 'Qwiklabs', 'Cloud Computing', 'Team Collaboration'],
  icon: <Shield size={24} />,
  color: 'from-sky-500 to-indigo-500'
},
{
  title: 'Coordinator – BIS Club',
  company: 'Sri Sairam Engineering College',
  location: 'Chennai',
  duration: '2025 – Present',
  type: 'Full-time',
  github: '',
  description: [
    'Led and organized events, workshops, and seminars under the BIS Club, promoting technical excellence and student engagement',
    'Collaborated with faculty and peers to plan and execute knowledge-sharing sessions on industry standards and best practices'
  ],
  technologies: ['Leadership', 'Event Management', 'Technical Seminars', 'Team Collaboration'],
  icon: <Shield size={24} />, // You can replace this with another icon if you want to differentiate
  color: 'from-purple-500 to-pink-500' // Custom gradient — change as you like
},
{
  title: 'Office Bearer – Skill Development Club',
  company: 'Sri Sairam Engineering College',
  location: 'Chennai',
  duration: '2023 – Present',
  type: 'Part-time',
  github: '',
  description: [
    'Contributed to organizing and coordinating technical and non-technical workshops aimed at student skill enhancement',
    'Collaborated with industry experts and faculty to plan events on communication, coding, and career readiness',
    'Facilitated peer learning sessions and hands-on activities to boost participation and engagement'
  ],
  technologies: ['Workshop Coordination', 'Soft Skills', 'Peer Learning', 'Public Speaking', 'Leadership'],
  icon: <Shield size={24} />, // Suitable icon, can be changed as needed
  color: 'from-yellow-500 to-orange-500'
}




  ];

  const getTypeColor = (type: string) => {
    const colors = {
      'Full-time': 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300',
      'Part-time': 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300',
      'Internship': 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300',
      'Freelance': 'bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300'
    };
    return colors[type as keyof typeof colors] || colors['Full-time'];
  };

  return (
    <section id="experience" className="py-20 bg-gradient-to-br from-indigo-50 via-white to-cyan-50 dark:from-indigo-900/20 dark:via-gray-800 dark:to-cyan-900/20">
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
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-indigo-100 to-cyan-100 dark:from-indigo-900/30 dark:to-cyan-900/30 px-4 py-2 rounded-full mb-4"
          >
            <Briefcase className="text-indigo-600 dark:text-indigo-400" size={20} />
            <span className="text-indigo-800 dark:text-indigo-300 font-medium">Professional Journey</span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-indigo-800 to-cyan-800 dark:from-white dark:via-indigo-200 dark:to-cyan-200 bg-clip-text text-transparent mb-6">
            My Journey
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            My professional journey through various roles, from industrial internships to full-stack development
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-gradient-to-b from-indigo-500 via-purple-500 to-cyan-500 rounded-full"></div>

          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:space-x-8`}
              >
                {/* Timeline Node */}
                <motion.div
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.4 }}
                  className={`absolute left-8 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1/2 top-1/2 w-16 h-16 bg-gradient-to-r ${experience.color} rounded-full flex items-center justify-center text-white shadow-xl z-10 border-4 border-white dark:border-gray-800`}
                >
                  {experience.icon}
                </motion.div>

                {/* Experience Card */}
                <motion.div
                  whileHover={{ 
                    y: -10,
                    rotateY: index % 2 === 0 ? 5 : -5,
                    rotateX: 5,
                    scale: 1.02
                  }}
                  className={`w-full md:w-5/12 ${
                    index % 2 === 0 ? 'md:mr-auto md:ml-0 ml-20' : 'md:ml-auto md:mr-0 ml-20'
                  } bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-200/50 dark:border-gray-700/50 group relative overflow-hidden`}
                >
                  {/* Gradient Background on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${experience.color} opacity-0 group-hover:opacity-10 transition-all duration-500 rounded-3xl`}></div>
                  
                  {/* Animated Border */}
                  <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${experience.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10 blur-sm`}></div>

                  <div className="relative z-10">
                    <div className="flex flex-wrap items-center justify-between mb-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-bold ${getTypeColor(experience.type)}`}>
                        {experience.type}
                      </span>
                      <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                        <Calendar size={16} className="mr-1" />
                        {experience.duration}
                      </div>
                    </div>

                    <h3 className={`text-2xl font-bold mb-2 bg-gradient-to-r ${experience.color} bg-clip-text text-transparent`}>
                      {experience.title}
                    </h3>
                    
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="flex items-center text-gray-700 dark:text-gray-300">
                        <Building size={16} className="mr-2" />
                        <span className="font-semibold">{experience.company}</span>
                      </div>
                      <div className="flex items-center text-gray-500 dark:text-gray-400">
                        <MapPin size={16} className="mr-1" />
                        <span>{experience.location}</span>
                      </div>
                    </div>

                    <ul className="space-y-2 mb-6">
                      {experience.description.map((item, itemIndex) => (
                        <motion.li
                          key={itemIndex}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: itemIndex * 0.1 }}
                          whileHover={{ x: 5 }}
                          className="flex items-start text-gray-600 dark:text-gray-300 text-sm leading-relaxed"
                        >
                          <div className={`w-2 h-2 bg-gradient-to-r ${experience.color} rounded-full mt-2 mr-3 flex-shrink-0`}></div>
                          {item}
                        </motion.li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          transition={{ delay: techIndex * 0.05 }}
                          whileHover={{ scale: 1.1, y: -2 }}
                          className={`px-3 py-1 bg-gradient-to-r ${experience.color} text-white text-xs rounded-full font-medium shadow-lg hover:shadow-xl transition-all duration-300`}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                    {experience.github && (
  <a
    href={experience.github}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center mt-4 text-indigo-600 dark:text-indigo-400 hover:underline"
  >
    <ExternalLink size={16} className="mr-2" />
    View on GitHub
  </a>
)}

                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { number: '8+', label: 'Projects', color: 'from-blue-500 to-cyan-500' },
            { number: '10+', label: 'Symposiums', color: 'from-green-500 to-emerald-500' },
            { number: '20+', label: 'Certifications', color: 'from-purple-500 to-pink-500' },
            { number: '30+', label: 'Events', color: 'from-orange-500 to-red-500' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
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

export default Experience;