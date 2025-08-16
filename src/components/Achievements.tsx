import React, { useState } from 'react';
import { motion,AnimatePresence } from 'framer-motion';
import { Award, Trophy, Star, ExternalLink, Sparkles } from 'lucide-react';

interface Achievement {
  title: string;
  description: string;
  image: string;
  date: string;
  category: string;
  link?: string;
  icon: React.ReactNode;
}

const Achievements: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  const achievements: Achievement[] = [
    {
      title: 'NPTEL Topper 2% in Cloud Computing',
      description: 'Achieved top 2% rank in NPTEL Cloud Computing course by IIT Kharagpur, mastering concepts like virtualization, IaaS, PaaS, SaaS, load balancing, cloud storage, and security, demonstrating strong technical skills and commitment to scalable, industry-relevant cloud technologies.',
      image: '/assets/toppernptel.png',
      date: '2025',
      category: 'Academic',
      link: 'https://www.linkedin.com/posts/kaviya-s-90b6a6257_nptel-nptelcourses-elitecertificate-activity-7362113912319758336-63G_?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD9Iz5sBE6J2ZA_aUATG5y4rXjNvToDlAlo',
      icon: <Star size={24} />,
    },
    {
      title: 'UGC NEP SAARTHI – Student Ambassador for Academic Reforms',
      description: 'Selected as a UGC NEP SAARTHI by the University Grants Commission to promote NEP 2020 through interdisciplinary learning, student-centric reforms, and holistic education, serving as a student ambassador driving change in higher education.',
      image: '/assets/nep.png',
      date: '2025',
      category: 'Academic',
      link: 'https://www.linkedin.com/posts/kaviya-s-90b6a6257_nepsaarthi-ugcindia-nep2020-activity-7348722950545514497-s95e?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD9Iz5sBE6J2ZA_aUATG5y4rXjNvToDlAlo',
      icon: <Star size={24} />,
    },
    {
      title: 'NPTEL Discipline star and Motivated Learner ',
      description: 'Awarded the NPTEL Discipline Star and recognized as a Motivated Learner for the Jan–April 2025 session by completing 8 NPTEL courses in the same discipline with consistent performance. These accolades reflect my dedication to continuous learning, deep subject expertise, and commitment to academic excellence through self-paced, goal-driven efforts.',
      image: '/assets/nptel.jpg',
      date: '2025',
      category: 'Academic',
      icon: <Award size={24} />,
    },
    {
      title: 'Paper Publication',
      description: 'Authored paper on "Secure Vote Revolutionising Democracy through Blockchain Technology" published in  2025 International Conference on Computing and Communication Technologies (ICCCT).',
      image: '/assets/paper.png',
      date: '2025',
      category: 'Research',
      link: 'https://ieeexplore.ieee.org/document/11018954',
      icon: <Star size={24} />,
    },
    {
      title: 'Innovathon 3.0 Finalist',
      description: 'I’m thrilled to share that our project, “Secure Vote: Revolutionizing Democracy through Blockchain Technology”, was selected under Goal 16: Peace,Justice and Strong Institutions (SDG) at Innovathon 3.0.',
      image: '/assets/innovathon.jpg',
      date: '2025',
      category: 'Competition',
      link: 'https://www.linkedin.com/posts/kaviya-s-90b6a6257_solveathon3-sdg10-reducedinequality-activity-7283800659437461504-5g5s?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD9Iz5sBE6J2ZA_aUATG5y4rXjNvToDlAlo',
      icon: <Trophy size={24} />,
    },
    {
      title: 'Best Student Volunteer of the NDLI Club',
      description: 'Recognized as the Best Student Volunteer of the NDLI Club for actively coordinating and leading multiple knowledge-based events such as INQUESTA 1.0, NDLI awareness programs, and National Library Week celebrations.',
      image: '/assets/ndli-club.jpg',
      date: '2025',
      category: 'Academic',
      link: 'https://www.linkedin.com/posts/kaviya-s-90b6a6257_bestvolunteer-ndliclub-sairaminstitutions-activity-7350108708233760768-t1qA?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD9Iz5sBE6J2ZA_aUATG5y4rXjNvToDlAlo',
      icon: <Star size={24} />,
    },
    {
  title: 'Coordinator – BIS Club at Benchmark Confluence 3.0',
  description: 'Served as Coordinator for the BIS Club at Benchmark Confluence 3.0, organized in collaboration with CODE CLUB, Department of CSE. Led the planning and execution of engaging activities including a Technical Quiz, a Presentation on Standards, a Crossword, and Writing Standards for IoT Devices.',
  image: '/assets/bench.png',
  date: '2025',
  category: 'Academic',
  link: 'https://www.linkedin.com/posts/kaviya-s-90b6a6257_bisclub-benchmarkconfluence-standards-activity-7361774569302478848-hjBf?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD9Iz5sBE6J2ZA_aUATG5y4rXjNvToDlAlo',
  icon: <Award size={24} />,
},

    {
      title: 'Coordinator – INQUESTA 1.0 | NDLI Club Symposium',
      description: 'Coordinated Day 5 of INQUESTA 1.0, a national-level symposium organized by the NDLI Club with a Harry Potter theme, overseeing event flow, designing creative rounds, and contributing to the successful execution of the Wizarding Quest and Valedictory Ceremony.',
      image: '/assets/inquesta.jpg',
      date: '2025',
      category: 'Academic',
      link: 'https://www.linkedin.com/posts/kaviya-s-90b6a6257_inquesta-ndli-srisairamengineeringcollege-activity-7349813096598622209-wS6q?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD9Iz5sBE6J2ZA_aUATG5y4rXjNvToDlAlo',
      icon: <Star size={24} />,
    },
    {
      title: 'Solveathon 3.0 Finalist',
      description: 'I’m thrilled to share that our project, “Secure Vote: Revolutionizing Democracy through Blockchain Technology”, was selected under Goal 10: Reduced Inequality (SDG) at Solveathon 3.0.',
      image: '/assets/solveathon.png',
      date: '2024',
      category: 'Competition',
      link: 'https://www.linkedin.com/posts/kaviya-s-90b6a6257_solveathon3-sdg10-reducedinequality-activity-7283800659437461504-5g5s?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD9Iz5sBE6J2ZA_aUATG5y4rXjNvToDlAlo',
      icon: <Trophy size={24} />,
    },
    {
      title: 'Event Volunteer – Synsara 2K24, CSE Symposium',
      description: 'Volunteered Synsara 2K24, the annual symposium of the CSE Department, managing event planning, team coordination, and smooth execution. Played a key role in ensuring engaging sessions, participant involvement, and a successful technical celebration for students and attendees.',
      image: '/assets/synsara.jpg',
      date: '2025',
      category: 'Academic',
      link:'https://www.linkedin.com/posts/kaviya-s-90b6a6257_synsara2k24-eventcoordinator-csedept-activity-7348629218999664641-RT63?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD9Iz5sBE6J2ZA_aUATG5y4rXjNvToDlAlo',
      icon: <Award size={24} />,
    },
    
    {
      title: 'Discus Throw Second Runner-up',
      description: 'I won third place in the Discus Throw event during the Sports Day 2024 showcasing strength, focus, and competitive spirit through consistent training and athletic performance.',
      image: '/assets/discuss.jpg',
      date: '2024',
      category: 'Sports',
      link: 'https://www.linkedin.com/posts/kaviya-s-90b6a6257_sportsday-discusthrow-thirdplace-activity-7283793519092080640-GKRB?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD9Iz5sBE6J2ZA_aUATG5y4rXjNvToDlAlo',
      icon: <Trophy size={24} />,
    },
    {
      title: 'Sairam SDG Ideathon 3.0 WINNER  Under Goal 5: Gender Equality',
      description: 'Our project focused on addressing the critical need for better women’s health management, particularly for those dealing with PCOD/PCOS. The application was designed to empower women by providing effective tools to track their health and make informed decisions for their well-being.',
      image: '/assets/ideathon.png',
      date: '2023',
      category: 'Competition',
      link: 'https://www.linkedin.com/posts/kaviya-s-90b6a6257_teamwork-innovation-womenempowerment-activity-7271900508565467137-JAnc?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD9Iz5sBE6J2ZA_aUATG5y4rXjNvToDlAlo',
      icon: <Trophy size={24} />,
    },
    {
      title: 'Sairam SDG Ideathon 3.0 WINNER  Under Goal 11: Sustainable Cities and Communities.',
      description: 'This project addresses the critical issue of food waste and its impact on urban sustainability. Through innovative solutions, we aimed to provide a second life to excess food, ensuring it benefits those in need while contributing to the environment and community well-being.',
      image: '/assets/ideath.png',
      date: '2023',
      category: 'Competition',
      link: 'https://www.linkedin.com/posts/kaviya-s-90b6a6257_teamwork-innovation-sustainability-activity-7271903856265994241-m9gK?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD9Iz5sBE6J2ZA_aUATG5y4rXjNvToDlAlo',
      icon: <Trophy size={24} />,
    },
    {
      title: 'Quiz Winner – Convergence Symposium',
      description: 'We secured First Prize in the Quiz Category awarded by Cash prize at Convergence 2023 22nd State Level Symposium, organized by the Department of Humanities & Sciences, Sri Sairam Engineering College.',
      image: '/assets/convergence.png',
      date: '2023',
      category: 'Competition',
      link: 'https://www.linkedin.com/posts/kaviya-s-90b6a6257_teamworkwins-convergence2023-quizwinners-activity-7272962928360792064-I-gp?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD9Iz5sBE6J2ZA_aUATG5y4rXjNvToDlAlo',
      icon: <Trophy size={24} />,
    },
    
    
    {
      title: 'Maths Club Quiz -IInd Runner-Up',
      description: 'I participated in Ramanujan Quiz organized by the Mathematics Club. irst place winner for developing a sustainable energy monitoring app that helps users reduce their carbon footprint by 30%.',
      image: '/assets/maths.png',
      date: '2023',
      category: 'Competition',
      link: 'https://www.linkedin.com/posts/kaviya-s-90b6a6257_ramanujan-srinivasaramanujan-mathsclub-activity-7282642612258271232-IokT?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD9Iz5sBE6J2ZA_aUATG5y4rXjNvToDlAlo',
      icon: <Award size={24} />,
    },
    
    {
      title: 'RJ & Content Creator – NSS Sairam RJ Family',
      description: 'Served as an RJ and content creator for NSS Sairam, hosting engaging audio and video podcasts on topics like education, festivals, and family. Strengthened storytelling, communication, and community connection while spreading joy, positivity, and heartfelt messages through every episode.',
      image: '/assets/Nss.jpg',
      date: '2023-2024',
      category: 'Academic',
      link: 'https://www.linkedin.com/posts/kaviya-s-90b6a6257_sec-linkedin-sairaminstitutions-activity-7289990380970725376-7wsw?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD9Iz5sBE6J2ZA_aUATG5y4rXjNvToDlAlo',
      icon: <Star size={24} />,
    },
    
    
    
    
    
    
  ];
   const visibleAchievements = showAll ? achievements : achievements.slice(0,3);


  const getCategoryColor = (category: string) => {
    const colors = {
      Academic: 'from-blue-500 to-cyan-500',
      Competition: 'from-green-500 to-emerald-500',
      'Open Source': 'from-purple-500 to-pink-500',
      Research: 'from-orange-500 to-red-500',
      Sports:'from-red-500 to-pink-500',
    };
    return colors[category as keyof typeof colors] || 'from-gray-500 to-gray-600';
  };

  return (
    <section id="achievements" className="py-20 bg-gradient-to-br from-gray-50 via-white to-yellow-50 dark:from-gray-900 dark:via-gray-800 dark:to-yellow-900/20">
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
            transition={{ duration: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-100 to-orange-100 dark:from-yellow-900/30 dark:to-orange-900/30 px-4 py-2 rounded-full mb-4"
          >
            <Sparkles className="text-yellow-600 dark:text-yellow-400" size={20} />
            <span className="text-yellow-800 dark:text-yellow-300 font-medium">Recognition & Awards</span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-yellow-800 to-orange-800 dark:from-white dark:via-yellow-200 dark:to-orange-200 bg-clip-text text-transparent mb-6">
            Achievements & Recognition
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Milestones and recognition that showcase my dedication to excellence and continuous learning
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
          {visibleAchievements.map((achievement) => (
            <motion.div
              key={achievement.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.05 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -10,
                rotateY: 5,
                rotateX: 5,
                scale: 1.02
              }}
              className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-200/50 dark:border-gray-700/50"
            >
              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${getCategoryColor(achievement.category)} opacity-0 group-hover:opacity-10 transition-all duration-500 rounded-3xl`}></div>
              
              {/* Animated Border */}
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${getCategoryColor(achievement.category)} opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10 blur-sm`}></div>

              <div className="relative overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                  src={achievement.image}
                  alt={achievement.title}
                  className="w-full h-48 object-cover rounded-t-3xl"
                />
                
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300"></div>

                
                <div className="absolute top-4 right-4">
                  <motion.span
                    whileHover={{ scale: 1.1 }}
                    className={`px-4 py-2 bg-gradient-to-r ${getCategoryColor(achievement.category)} text-white text-sm rounded-full font-bold shadow-lg`}
                  >
                    {achievement.category}
                  </motion.span>
                </div>
              </div>

              <div className="p-6 relative z-20">
                <div className="flex justify-between items-start mb-3">
                  <motion.h3
                    whileHover={{ x: 5 }}
                    className="text-lg font-bold text-gray-900 dark:text-white group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300"
                  >
                    {achievement.title}
                  </motion.h3>
                  <span className="text-sm text-gray-500 dark:text-gray-400 whitespace-nowrap ml-2 font-semibold">
                    {achievement.date}
                  </span>
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-4">
                  {achievement.description}
                </p>

                {achievement.link && (
                  <motion.a
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    href={achievement.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r ${getCategoryColor(achievement.category)} text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group/link`}
                  >
                    <span className="relative z-10 flex items-center space-x-2">
                      <span>Learn More</span>
                      <ExternalLink size={16} />
                    </span>
                    <div className="absolute inset-0 bg-white/10 opacity-0 group-hover/link:opacity-100 transition-opacity duration-300"></div>
                  </motion.a>
                )}
              </div>
            </motion.div>
          ))}
          </AnimatePresence>

        </div>
        {/* View All / Show Less Button */}
        <motion.div className="text-center mt-12">
          <motion.button
            onClick={() => {
              setShowAll(!showAll);
              if (showAll) {
                document.getElementById('achievements')?.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white rounded-2xl font-bold shadow-xl hover:shadow-2xl transition-all duration-300 relative overflow-hidden group"
          >
            <span className="relative z-10">
              {showAll ? 'Show Less Achievements' : 'View All Achievements'}
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </motion.button>
        </motion.div>
        

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.05 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { number: '30+', label: 'Certifications', color: 'from-blue-500 to-cyan-500' },
            { number: '5+', label: 'Awards won', color: 'from-green-500 to-emerald-500' },
            { number: '8+', label: 'Projects', color: 'from-purple-500 to-pink-500' },
            { number: '9.66', label: 'CGPA', color: 'from-orange-500 to-red-500' },
          ].map((stat) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2, delay: 0.05 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05, 
                y: -5,
                rotateY: 5
              }}
              className="text-center bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-200/50 dark:border-gray-700/50 group relative overflow-hidden"
            >
              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-10 transition-all duration-500 rounded-3xl`}></div>
              
              <div className="relative z-10">
                <div className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
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

export default Achievements;