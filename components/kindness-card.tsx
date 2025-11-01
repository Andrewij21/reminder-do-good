"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Shuffle, ThumbsUp, Share2 } from "lucide-react";
import { useKindnessStore } from "@/lib/store";
import ShareDialog from "./share-dialog";

interface KindnessCardProps {
  kindness: { id: number; text: string; emoji: string };
  onComplete: () => void;
}

export default function KindnessCard({
  kindness,
  onComplete,
}: KindnessCardProps) {
  const [showConfetti, setShowConfetti] = useState(false);
  const [showShareDialog, setShowShareDialog] = useState(false);
  const { getNextKindness } = useKindnessStore();

  const handleComplete = () => {
    setShowConfetti(true);
    onComplete();
    setTimeout(() => setShowConfetti(false), 2000);
  };

  const handleNext = () => {
    getNextKindness();
  };

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          key={kindness.id}
          initial={{ opacity: 0, scale: 0.95, rotateY: 90 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          exit={{ opacity: 0, scale: 0.95, rotateY: -90 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-br from-green-50 to-yellow-50 dark:from-green-900/20 dark:to-yellow-900/20 border-2 border-green-200 dark:border-green-700 rounded-2xl p-8 sm:p-10 shadow-lg hover:shadow-xl transition-shadow"
        >
          {/* Emoji */}
          <motion.div
            className="text-6xl sm:text-7xl mb-6 text-center"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
          >
            {kindness.emoji}
          </motion.div>

          {/* Title */}
          <h2 className="text-center text-xl sm:text-2xl font-bold text-foreground mb-2">
            Today's Kindness
          </h2>

          {/* Description */}
          <p className="text-center text-lg sm:text-xl text-foreground mb-8 leading-relaxed text-pretty">
            {kindness.text}
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleComplete}
              className="flex-1 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 sm:py-4 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              <ThumbsUp className="w-5 h-5" />
              <span>I Did It!</span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleNext}
              className="flex-1 bg-yellow-100 dark:bg-yellow-900/30 hover:bg-yellow-200 dark:hover:bg-yellow-900/50 text-yellow-700 dark:text-yellow-400 font-semibold py-3 sm:py-4 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              <Shuffle className="w-5 h-5" />
              <span>Next</span>
            </motion.button>
          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setShowShareDialog(true)}
            className="w-full mt-4 bg-blue-100 dark:bg-blue-900/30 hover:bg-blue-200 dark:hover:bg-blue-900/50 text-blue-600 dark:text-blue-400 font-semibold py-3 px-4 rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            <Share2 className="w-5 h-5" />
            <span>Share This Act</span>
          </motion.button>

          {/* Completion Feedback */}
          <AnimatePresence>
            {showConfetti && (
              <motion.div
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 pointer-events-none flex items-center justify-center"
              >
                <motion.div
                  animate={{ scale: [1, 1.2, 1], opacity: [1, 0] }}
                  transition={{ duration: 1.5 }}
                  className="text-5xl"
                >
                  ✨
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </AnimatePresence>

      <ShareDialog
        isOpen={showShareDialog}
        onClose={() => setShowShareDialog(false)}
        kindness={kindness}
      />
    </>
  );
}
