import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Palette, Wrench, Zap } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  category: string;
}

const Skills: React.FC = () => {
  const skills: Skill[] = [
    // Frontend
    { name: 'React', level: 90, category: 'Frontend' },
    { name: 'TypeScript', level: 85, category: 'Frontend' },
    { name: 'Javascript', level: 80, category: 'Frontend' },
    { name: 'Tailwind CSS', level: 95, category: 'Frontend' },
    { name: 'HTML/CSS', level: 95, category: 'Frontend' },
    
    // Backend
    { name: 'Node.js', level: 85, category: 'Backend' },
    { name: 'Python', level: 80, category: 'Backend' },
    { name: 'Fast API', level: 85, category: 'Backend' },
    { name: 'FireBase', level: 75, category: 'Backend' },
    
    // Database
    { name: 'MongoDB', level: 80, category: 'Database' },
    { name: 'MySQL', level: 75, category: 'Database' },
    
    // Tools & Others
    { name: 'Git & GitHub', level: 90, category: 'Tools & Platforms' },
    { name: 'VSCode', level: 90, category: 'Tools & Platforms' },
    { name: 'Figma', level: 95, category: 'Tools & Platforms' },
    { name: 'Android Studio', level: 95, category: 'Tools & Platforms' },
    { name: 'Vercel', level: 85, category: 'Deployment' },
    { name: 'Netlify', level: 70, category: 'Deployment' },
    { name: 'Java', level: 95, category: 'Languages' },
    { name: 'Python', level: 70, category: 'Languages' },
    { name: 'C', level: 85, category: 'Languages' },
    { name: 'Javascript', level: 70, category: 'Languages' },
  ];

  const categories = [
    { name: 'Frontend', icon: <Code size={24} />, color: 'from-blue-500 to-cyan-500' },
    { name: 'Backend', icon: <Database size={24} />, color: 'from-green-500 to-emerald-500' },
    { name: 'Database', icon: <Database size={24} />, color: 'from-purple-500 to-pink-500' },
    { name: 'Tools & Platforms', icon: <Wrench size={24} />, color: 'from-orange-500 to-red-500' },
    { name: 'Deployment', icon: <Palette size={24} />, color: 'from-indigo-500 to-purple-500' },
    { name: 'Languages', icon: <Code size={24} />, color: 'from-blue-500 to-cyan-500' },
  ];

  const getSkillsByCategory = (category: string) => {
    return skills.filter(skill => skill.category === category);
  };

  const getCategoryData = (categoryName: string) => {
    return categories.find(cat => cat.name === categoryName) || categories[0];
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-purple-50 via-white to-pink-50 dark:from-purple-900/20 dark:via-gray-800 dark:to-pink-900/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 px-4 py-2 rounded-full mb-4"
          >
            <Zap className="text-purple-600 dark:text-purple-400" size={20} />
            <span className="text-purple-800 dark:text-purple-300 font-medium">Technical Expertise</span>
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-gray-900 via-purple-800 to-pink-800 dark:from-white dark:via-purple-200 dark:to-pink-200 bg-clip-text text-transparent mb-6">
            Skills & Technologies
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A comprehensive overview of my technical expertise and the tools I use to bring ideas to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, categoryIndex) => {
            const categorySkills = getSkillsByCategory(category.name);
            
            return (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -10,
                  rotateY: 5,
                  scale: 1.02
                }}
                className="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-200/50 dark:border-gray-700/50"
              >
                {/* Gradient Background on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 transition-all duration-500 rounded-3xl`}></div>
                
                {/* Animated Border */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10 blur-sm`}></div>

                <div className="relative z-10">
                  <div className="flex items-center space-x-3 mb-6">
                    <motion.div
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.5 }}
                      className={`p-3 rounded-2xl bg-gradient-to-r ${category.color} text-white shadow-lg`}
                    >
                      {category.icon}
                    </motion.div>
                    <h3 className={`text-2xl font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                      {category.name}
                    </h3>
                  </div>
                  
                  <div className="space-y-4">
                    {categorySkills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: (categoryIndex * 0.1) + (skillIndex * 0.05) }}
                        viewport={{ once: true }}
                        whileHover={{ x: 5 }}
                        className="space-y-2"
                      >
                        <div className="flex justify-between items-center">
                          <span className="text-gray-900 dark:text-white font-semibold">
                            {skill.name}
                          </span>
                          <motion.span
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{ delay: (categoryIndex * 0.1) + (skillIndex * 0.05) + 0.2 }}
                            className={`text-sm font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}
                          >
                            {skill.level}%
                          </motion.span>
                        </div>
                        
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 overflow-hidden shadow-inner">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            transition={{ 
                              duration: 1.5, 
                              delay: (categoryIndex * 0.1) + (skillIndex * 0.05),
                              ease: "easeOut"
                            }}
                            viewport={{ once: true }}
                            className={`h-3 bg-gradient-to-r ${category.color} rounded-full shadow-lg relative overflow-hidden`}
                          >
                            <div className="absolute inset-0 bg-white/30 animate-pulse"></div>
                          </motion.div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-purple-800 dark:from-white dark:to-purple-200 bg-clip-text text-transparent mb-8">
            Other Skills & Interests
          </h3>
          
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Problem Solving',
              'Leadership',
              'Communication',
              'Teamwork',
              'Performance Optimization',
              'Time Management',
              'Critical Thinking',
              'Public Speaking',
              ].map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.1, 
                  y: -5,
                  rotateZ: Math.random() * 10 - 5
                }}
                className="px-6 py-3 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white rounded-2xl text-sm font-bold shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer relative overflow-hidden group"
              >
                <span className="relative z-10">{skill}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;