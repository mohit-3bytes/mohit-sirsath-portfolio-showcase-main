
import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Send, Mail, Phone, MapPin, Github, Linkedin, CheckCircle, Instagram } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", message: "" });

      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }, 2000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
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
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
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
              Let's Connect
            </span>
          </motion.h2>
          <motion.p variants={itemVariants} className="text-xl text-gray-600 dark:text-gray-400">
            I'm always open to discussing new opportunities and interesting projects
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.div variants={cardVariants}>
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                Get in Touch
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
                I'm currently looking for new opportunities and would love to hear from you.
                Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
            </motion.div>

            {/* Contact Details */}
            <motion.div className="space-y-4" variants={containerVariants}>
              {[
                {
                  icon: <Mail className="w-6 h-6" />,
                  label: "Email",
                  value: "mohitsirsath12@gmail.com",
                  link: "mailto:mohitsirsath12@gmail.com",
                  color: "from-blue-500 to-cyan-500"
                },
                {
                  icon: <Phone className="w-6 h-6" />,
                  label: "Phone",
                  value: "+91 92656 23216",
                  link: "tel:+919265623216",
                  color: "from-green-500 to-emerald-500"
                },
                {
                  icon: <MapPin className="w-6 h-6" />,
                  label: "Location",
                  value: "Surat, Gujarat, India",
                  link: "https://maps.app.goo.gl/X5MtAHnVVEnBwHzEA",
                  color: "from-purple-500 to-pink-500"
                }
              ].map((contact, index) => (
                <motion.a
                  key={contact.label}
                  href={contact.link}
                  variants={itemVariants}
                  className="flex items-center p-4 rounded-xl backdrop-blur-lg bg-white/80 dark:bg-gray-900/80 border border-white/20 dark:border-gray-700/50 hover:shadow-lg transition-all duration-300 group"
                  whileHover={{ x: 10, scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <motion.div
                    className={`w-12 h-12 rounded-lg bg-gradient-to-r ${contact.color} flex items-center justify-center text-white mr-4`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    {contact.icon}
                  </motion.div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{contact.label}</p>
                    <p className="font-semibold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {contact.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </motion.div>

            {/* Social Links */}
            <motion.div variants={cardVariants} className="pt-8">
              <h4 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
                Follow Me
              </h4>
              <div className="flex space-x-4">
                {[
                  {
                    icon: <Github className="w-6 h-6" />,
                    label: "GitHub",
                    url: "https://github.com/mohit-3bytes",
                    color: "from-gray-600 to-gray-800"
                  },
                  {
                    icon: <Linkedin className="w-6 h-6" />,
                    label: "LinkedIn",
                    url: "https://www.linkedin.com/in/mohit-sirsath/",
                    color: "from-blue-600 to-blue-800"
                  },
                  {
                    icon: <Instagram className="w-6 h-6" />,
                    label: "Instagram",
                    url: "https://www.instagram.com/mohit_sirsath/",
                    color: "from-pink-500 to-red-500"
                  }
                ].map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-4 rounded-xl bg-gradient-to-r ${social.color} text-white hover:shadow-lg transition-all duration-300`}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="relative"
          >
            <div className="p-8 rounded-2xl backdrop-blur-lg bg-white/80 dark:bg-gray-900/80 border border-white/20 dark:border-gray-700/50 shadow-xl">
              <motion.form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Name
                  </label>
                  <motion.input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Your Name"
                    whileFocus={{ scale: 1.02 }}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email
                  </label>
                  <motion.input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="your.email@example.com"
                    whileFocus={{ scale: 1.02 }}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Message
                  </label>
                  <motion.textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Tell me about your project or just say hello!"
                    whileFocus={{ scale: 1.02 }}
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  className="w-full py-4 px-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                  whileHover={{ scale: isSubmitting || isSubmitted ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting || isSubmitted ? 1 : 0.98 }}
                >
                  <motion.div
                    className="flex items-center justify-center"
                    animate={isSubmitting ? { opacity: [1, 0.5, 1] } : {}}
                    transition={{ duration: 1, repeat: isSubmitting ? Infinity : 0 }}
                  >
                    {isSubmitted ? (
                      <>
                        <CheckCircle className="w-5 h-5 mr-2" />
                        Message Sent!
                      </>
                    ) : isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </motion.div>
                </motion.button>
              </motion.form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
