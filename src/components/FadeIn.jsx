
import { motion } from "framer-motion";

const FadeIn = ({ children, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95, y: 30 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 1, delay, ease: [0.4, 0, 0.2, 1] }}
      viewport={{ once: true, amount: 0.6 }}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
