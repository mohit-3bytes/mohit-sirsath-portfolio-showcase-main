
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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

  const cardVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        delay: 0.2
      }
    }
  };

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-purple-50/50 dark:from-blue-900/20 dark:to-purple-900/20" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10" ref={ref}>
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              About Me
            </span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-xl text-gray-600 dark:text-gray-400">
            Get to know more about my journey and aspirations
          </motion.p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.div
              variants={cardVariants}
              className="group relative p-8 rounded-2xl backdrop-blur-lg bg-white/80 dark:bg-gray-900/80 border border-white/20 dark:border-gray-700/50 shadow-xl hover:shadow-2xl transition-all duration-300"
              whileHover={{ y: -5 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 to-purple-600/10 rounded-2xl" />
              <div className="relative z-10">
                <motion.div
                  className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <span className="text-white font-bold text-xl">🎓</span>
                </motion.div>
                <h3 className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400">
                  Education
                </h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-lg">Master of Computer Applications (MCA)</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      Shrimad Rajchandra Institute of Management and Computer Application, Maliba
                    </p>
                    <span className="inline-block mt-1 px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full text-sm">
                      Currently Pursuing
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">Bachelor of Computer Applications (BCA)</h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      K.R.P. Darji Indo American Institute of Computer Science
                    </p>
                    <span className="inline-block mt-1 px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 rounded-full text-sm">
                      Completed
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={cardVariants}
              className="group relative p-8 rounded-2xl backdrop-blur-lg bg-white/80 dark:bg-gray-900/80 border border-white/20 dark:border-gray-700/50 shadow-xl hover:shadow-2xl transition-all duration-300"
              whileHover={{ y: -5 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400/10 to-pink-600/10 rounded-2xl" />
              <div className="relative z-10">
                <motion.div
                  className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <span className="text-white font-bold text-xl">💼</span>
                </motion.div>
                <h3 className="text-2xl font-bold mb-4 text-purple-600 dark:text-purple-400">
                  Current Role
                </h3>
                <div>
                  <h4 className="font-semibold text-lg">Junior QA Engineer</h4>
                  <p className="text-gray-600 dark:text-gray-400">PixerFect Solutions LLP, Surat</p>
                  <span className="inline-block mt-1 px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 rounded-full text-sm">
                    Since December 9, 2024
                  </span>
                  <p className="mt-3 text-gray-600 dark:text-gray-400">
                    Started working on live projects in January 2025, gaining valuable industry experience in quality assurance and testing methodologies.
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.div
              variants={cardVariants}
              className="group relative p-8 rounded-2xl backdrop-blur-lg bg-white/80 dark:bg-gray-900/80 border border-white/20 dark:border-gray-700/50 shadow-xl hover:shadow-2xl transition-all duration-300"
              whileHover={{ y: -5 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-400/10 to-blue-600/10 rounded-2xl" />
              <div className="relative z-10">
                <motion.div
                  className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-xl flex items-center justify-center mb-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <span className="text-white font-bold text-xl">🚀</span>
                </motion.div>
                <h3 className="text-2xl font-bold mb-4 text-green-600 dark:text-green-400">
                  Passion & Interests
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  I'm deeply passionate about Full Stack Web Development, particularly the MERN stack 
                  (MongoDB, Express.js, React, Node.js). I love creating scalable, user-friendly web 
                  applications that solve real-world problems and enhance user experiences.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={cardVariants}
              className="group relative p-8 rounded-2xl backdrop-blur-lg bg-white/80 dark:bg-gray-900/80 border border-white/20 dark:border-gray-700/50 shadow-xl hover:shadow-2xl transition-all duration-300"
              whileHover={{ y: -5 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-orange-400/10 to-red-600/10 rounded-2xl" />
              <div className="relative z-10">
                <motion.div
                  className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-xl flex items-center justify-center mb-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <span className="text-white font-bold text-xl">🎯</span>
                </motion.div>
                <h3 className="text-2xl font-bold mb-4 text-orange-600 dark:text-orange-400">
                  Career Goals
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  My ultimate goal is to transition into a Full Stack Developer role at a reputed 
                  tech company, where I can contribute to innovative projects, collaborate with 
                  talented teams, and continue growing my technical expertise while making a 
                  meaningful impact in the tech industry.
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {[
            { number: "7+", label: "Months Experience" },
            { number: "10+", label: "Projects Built" },
            { number: "5+", label: "Technologies" },
            { number: "1", label: "Live Project" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center p-6 rounded-xl backdrop-blur-lg bg-white/60 dark:bg-gray-900/60 border border-white/20 dark:border-gray-700/50"
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : { scale: 0 }}
                transition={{ delay: index * 0.1, type: "spring", stiffness: 200 }}
              >
                {stat.number}
              </motion.div>
              <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
