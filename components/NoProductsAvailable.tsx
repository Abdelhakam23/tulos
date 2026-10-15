import { Loader2 } from "lucide-react";
import { cn } from "../lib/utils";
import { motion } from "motion/react";
const NoProductsAvailable = ({
  selectedTab,
  className,
}: {
  selectedTab: string;
  className?: string;
}) => {
  return (
    <motion.div
      className={cn(
        "flex flex-col space-y-4 text-center mt-10 w-full items-center justify-center bg-gray-100 py-10 rounded-lg min-h-80",
        className,
      )}
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}

        className="text-2xl font-bold text-gray-800"
      >
        No Product Available
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-gray-600"
      >
        We&apos;re Sorry, but there are no products matching on{" "}
        <span className="text-base text-darkColor font-semibold">
          {" "}
          {selectedTab}
        </span>{" "}
        criteria at the moment
      </motion.p>
      <motion.div
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
        className="flex items-center text-blue-600 space-x-2"
      >
        <Loader2 className="w-4 h-4 animate-spin" />
        <span>We&apos;re resocking shortly</span>
      </motion.div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="text-sm text-gray-600"
      >
        Please check back later or explore our other product categories
      </motion.p>
    </motion.div>
  );
};

export default NoProductsAvailable;
