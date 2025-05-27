
import { motion } from "framer-motion";

const HireMeButton = () => {
  const scrollToContact = () => {
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.button
      onClick={scrollToContact}
      className="fixed bottom-8 left-8 z-50 px-6 py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 2 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      animate={{ 
        y: [0, -5, 0],
        boxShadow: [
          "0 10px 25px rgba(16, 185, 129, 0.3)",
          "0 15px 35px rgba(16, 185, 129, 0.4)",
          "0 10px 25px rgba(16, 185, 129, 0.3)"
        ]
      }}
      transition={{ 
        duration: 2, 
        repeat: Infinity,
        ease: "easeInOut"
      }}
    >
      💼 Hire Me
    </motion.button>
  );
};

export default HireMeButton;
