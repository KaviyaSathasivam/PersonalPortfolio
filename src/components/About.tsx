    import React from 'react';
    import { motion } from 'framer-motion';
    import { GraduationCap, Heart, Code, Coffee, User, BookOpen, Mic } from 'lucide-react';

    const About: React.FC = () => {
      const interests = [
        { icon: <Code size={24} />, title: 'Coding', description: 'Passionate about clean, efficient code using Java, Python, C', color: 'from-blue-500 to-cyan-500' },
        { icon: <Coffee size={24} />, title: 'Coffee', description: 'Fuel for late-night coding sessions', color: 'from-amber-500 to-orange-500' },
        { icon: <Heart size={24} />, title: 'Design', description: 'Creating beautiful user experiences (UI/UX)', color: 'from-pink-500 to-rose-500' },
        { icon: <GraduationCap size={24} />, title: 'Learning', description: 'Always exploring new technologies like Blockchain', color: 'from-purple-500 to-indigo-500' },
        { icon: <Mic size={24} />, title: 'Public Speaking', description: 'Confident communicator and presenter', color: 'from-red-500 to-orange-500' },
        { icon: <User size={24} />, title: 'Teamwork', description: 'Thrives in collaborative environments', color: 'from-green-500 to-teal-500' },
      ];

      return (
        <section id="about" className="py-20 bg-gradient-to-br from-green-50 via-white to-blue-50 dark:from-green-900/20 dark:via-gray-800 dark:to-blue-900/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-green-100 to-blue-100 dark:from-green-900/30 dark:to-blue-900/30 px-4 py-2 rounded-full mb-4"
              >
                <User className="text-green-600 dark:text-green-400" size={20} />
                <span className="text-green-800 dark:text-green-300 font-medium">About Me</span>
              </motion.div>

              <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-green-800 to-blue-800 dark:from-white dark:via-green-200 dark:to-blue-200 bg-clip-text text-transparent mb-6">
                About Me
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Get to know me better - my journey, education, and what drives my passion for technology
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Bio Section */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-200/50 dark:border-gray-700/50 relative overflow-hidden group"
                >
                  {/* Gradient Background on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-3xl"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="p-3 bg-gradient-to-r from-green-500 to-blue-500 text-white rounded-2xl">
                        <User size={24} />
                      </div>
                      <h3 className="text-2xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">My Story</h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                      I'm a passionate Computer Science Engineering student driven by the thrill of turning ideas into impactful digital experiences. What began as a curiosity for how systems work soon grew into a love for crafting smart, scalable solutions through code.
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      Beyond the screen, you’ll often find me exploring fresh UI/UX design trends, contributing to open-source communities, or simply sipping coffee while sketching out the next big idea. For me, tech isn't just a field-it's a space to innovate, collaborate, and create lasting change.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ y: -5 }}
                  className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-200/50 dark:border-gray-700/50 relative overflow-hidden group"
                >
                  {/* Gradient Background on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-pink-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-3xl"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-2xl">
                        <BookOpen size={24} />
                      </div>
                      <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Education</h3>
                    </div>
                    <div className="space-y-4">
      <motion.div 
        whileHover={{ x: 5 }}
        className="flex items-start space-x-4"
      >
        <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-2 flex-shrink-0"></div>
        <div>
          <h4 className="font-bold text-gray-900 dark:text-white">
            Bachelor of Engineering in Computer Science
          </h4>
          <p className="text-gray-600 dark:text-gray-300 font-semibold">Sri Sairam Engineering College • 2022 - 2026</p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Focus on Software Engineering, Data Structures, and Web Development
          </p>
        </div>
      </motion.div>

      <motion.div 
        whileHover={{ x: 5 }}
        className="flex items-start space-x-4"
      >
        <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-2 flex-shrink-0"></div>
        <div>
          <h4 className="font-bold text-gray-900 dark:text-white">
            Higher Secondary Education
          </h4>
          <p className="text-gray-600 dark:text-gray-300 font-semibold">Kendriya Vidyalaya No 2 • 2020 - 2021</p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Majored in Biology with 95.8%
          </p>
        </div>
      </motion.div>
                  </div>

                  </div>
                </motion.div>
              </motion.div>

              {/* Interests Grid */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="grid grid-cols-2 gap-6"
              >
                {interests.map((interest, index) => (
                  <motion.div
                    key={interest.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    whileHover={{ 
                      scale: 1.05, 
                      y: -10,
                      rotateY: 5,
                      rotateX: 5
                    }}
                    className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 text-center group border border-gray-200/50 dark:border-gray-700/50 relative overflow-hidden"
                  >
                    {/* Gradient Background on Hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${interest.color} opacity-0 group-hover:opacity-10 transition-all duration-500 rounded-3xl`}></div>
                    
                    {/* Animated Border */}
                    <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${interest.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10 blur-sm`}></div>

                    <div className="relative z-10">
                      <motion.div
                        whileHover={{ rotate: 360, scale: 1.2 }}
                        transition={{ duration: 0.3 }}
                        className={`text-white mb-4 flex justify-center p-4 rounded-2xl bg-gradient-to-r ${interest.color} shadow-lg mx-auto w-fit`}
                      >
                        {interest.icon}
                      </motion.div>
                      <h4 className={`font-bold mb-2 bg-gradient-to-r ${interest.color} bg-clip-text text-transparent text-lg`}>
                        {interest.title}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                        {interest.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>
      );
    };

    export default About;