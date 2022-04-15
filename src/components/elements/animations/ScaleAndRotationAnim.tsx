import { motion } from "framer-motion";

interface ScaleAndRotationAnim1Props {
  children: React.ReactNode;
}

export const ScaleAndRotationAnim1 = ({ children }: ScaleAndRotationAnim1Props) => {
  return (
    <motion.div
      whileHover={{
        scale: [1, 1.3, 1.3],
        rotate: [0, 0, 270],
      }}
      whileTap={{ scale: 0.8 }}
      transition={{
        duration: 1,
        ease: "easeIn",
        times: [0, 0.2, 0.5],
      }}
    >
      {children}
    </motion.div>
  );
};
export const ScaleAndRotationAnim1Small = ({ children }: ScaleAndRotationAnim1Props) => {
  return (
    <motion.div
      whileHover={{
        scale: [1, 1, 1],
        rotate: [0, 0, 270],
      }}
      whileTap={{ scale: 0.8 }}
      transition={{
        duration: 1,
        ease: "easeIn",
        times: [0, 0.2, 0.5],
      }}
    >
      {children}
    </motion.div>
  );
};
