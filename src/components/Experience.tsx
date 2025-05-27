
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, MapPin, Briefcase, GraduationCap } from "lucide-react";

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const timelineData = [
    {
      id: 1,
      type: "work",
      title: "Junior QA",
      organization: "PixerFect Solutions LLP",
      location: "Surat, Gujarat",
      date: "December 2024 - Present",
      description: "Working on live projects, performing manual and automation testing, ensuring quality standards and collaborating with development teams.",
      icon: <Briefcase className="w-6 h-6" />,
      color: "from-blue-500 to-purple-600"
    },
    {
      id: 2,
      type: "milestone",
      title: "Started Live Project Work",
      organization: "PixerFect Solutions LLP",
      location: "Surat, Gujarat",
      date: "January 2025",
      description: "Began working on real-world projects, gaining hands-on experience with industry-standard practices and client requirements.",
      icon: <Briefcase className="w-6 h-6" />,
      color: "from-green-500 to-emerald-600"
    },
    {
      id: 3,
      type: "education",
      title: "Master of Computer Applications (MCA)",
      organization: "Shrimad Rajchandra Institute of Management and Computer Application",
      location: "Maliba, Gujarat",
      date: "2023 - Present",
      description: "Pursuing advanced studies in computer applications with focus on software development, database management, and system analysis.",
      icon: <GraduationCap className="w-6 h-6" />,
      color: "from-purple-500 to-pink-600"
    },
    {
      id: 4,
      type: "education",
      title: "Bachelor of Computer Applications (BCA)",
      organization: "K.R.P. Darji Indo American Institute of Computer Science",
      location: "Gujarat",
      date: "2020 - 2023",
      description: "Completed undergraduate studies with strong foundation in programming, web development, and computer science fundamentals.",
      icon: <GraduationCap className="w-6 h-6" />,
      color: "from-orange-500 to-red-600"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  const timelineVariants = {
    hidden: { scaleY: 0 },
    visible: {
      scaleY: 1,
      transition: {
        duration: 0.8,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section id="experience" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50/50 via-transparent to-blue-50/50 dark:from-purple-900/20 dark:to-blue-900/20" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              My Journey
            </span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-xl text-gray-600 dark:text-gray-400">
            Education and professional experience timeline
          </motion.p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <motion.div
            className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-blue-500 to-purple-600 origin-top"
            style={{ height: "100%" }}
            variants={timelineVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          />

          <motion.div
            className="space-y-12"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            {timelineData.map((item, index) => (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Timeline Node */}
                <motion.div
                  className={`absolute left-1/2 transform -translate-x-1/2 w-16 h-16 rounded-full bg-gradient-to-r ${item.color} flex items-center justify-center text-white shadow-lg z-10`}
                  whileHover={{ scale: 1.1 }}
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ delay: index * 0.2, type: "spring", stiffness: 200 }}
                >
                  {item.icon}
                </motion.div>

                {/* Content Card */}
                <motion.div
                  className={`w-full md:w-5/12 ${
                    index % 2 === 0 ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                  }`}
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="relative p-6 rounded-2xl backdrop-blur-lg bg-white/80 dark:bg-gray-900/80 border border-white/20 dark:border-gray-700/50 shadow-xl hover:shadow-2xl transition-all duration-300">
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-5 rounded-2xl`} />
                    
                    <div className="relative z-10">
                      <div className="flex items-center mb-2">
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${item.color}`}>
                          {item.type === "work" ? "Work" : item.type === "education" ? "Education" : "Milestone"}
                        </span>
                      </div>
                      
                      <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                        {item.title}
                      </h3>
                      
                      <div className="space-y-1 mb-3">
                        <div className="flex items-center text-gray-600 dark:text-gray-400">
                          <Briefcase className="w-4 h-4 mr-2" />
                          <span className="font-medium">{item.organization}</span>
                        </div>
                        <div className="flex items-center text-gray-500 dark:text-gray-500">
                          <MapPin className="w-4 h-4 mr-2" />
                          <span>{item.location}</span>
                        </div>
                        <div className="flex items-center text-gray-500 dark:text-gray-500">
                          <Calendar className="w-4 h-4 mr-2" />
                          <span>{item.date}</span>
                        </div>
                      </div>
                      
                      <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Current Focus */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ delay: 1 }}
        >
          <motion.div
            className="inline-block p-8 rounded-2xl backdrop-blur-lg bg-white/80 dark:bg-gray-900/80 border border-white/20 dark:border-gray-700/50 shadow-xl"
            whileHover={{ y: -5 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              Current Focus
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
              I'm currently focused on transitioning from QA to Full Stack Development while continuing 
              to excel in my current role. Learning new technologies and building projects to strengthen 
              my development skills.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {["React Development", "Node.js Backend", "MongoDB", "Testing Excellence", "Project Management"].map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
                  transition={{ delay: 1.2 + (index * 0.1) }}
                  className="px-4 py-2 bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-700 dark:text-blue-400 rounded-lg font-medium"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
