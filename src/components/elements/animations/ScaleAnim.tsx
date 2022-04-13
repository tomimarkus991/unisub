import { motion } from "framer-motion";

interface ScaleAnim1Props {
  children: React.ReactNode;
}

export const ScaleAnim1 = ({ children }: ScaleAnim1Props) => {
  return (
    <motion.div
      whileHover={{
        scale: [1, 1.1, 1.1],
      }}
      whileTap={{ scale: 0.8 }}
      transition={{
        duration: 1,
        ease: "easeIn",
        times: [0, 0.2, 0.7],
      }}
    >
      {children}
    </motion.div>
  );
};
