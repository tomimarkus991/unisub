import { motion } from "framer-motion";

interface ScaleAnim1Props {
  children: React.ReactNode;
  scaleVariant?: keyof typeof scaleVariants;
}
const scaleVariants = {
  small: [1, 1.1, 1.1],
  medium: [1, 1.3, 1.3],
  large: [1, 1.5, 1.5],
};

export const ScaleAnim1 = ({ children, scaleVariant = "small" }: ScaleAnim1Props) => {
  return (
    <motion.div
      whileHover={{
        scale: scaleVariants[scaleVariant],
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
