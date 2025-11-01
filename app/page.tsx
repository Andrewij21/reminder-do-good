"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Sparkles, BarChart3 } from "lucide-react";
import Navigation from "@/components/navigation";
import KindnessCard from "@/components/kindness-card";
import { useKindnessStore } from "@/lib/store";

export default function Home() {
  const { currentKindness, completeKindness, getTodayCount } =
    useKindnessStore();
  const todayCount = getTodayCount();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navigation />

      <motion.div
        className="flex flex-col items-center justify-center px-4 py-12 sm:py-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header */}
        <motion.div
          variants={itemVariants}
          className="text-center mb-8 sm:mb-12"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-green-600" />
            <h1 className="text-3xl sm:text-5xl font-bold text-pretty">
              Reminder Do Good
            </h1>
            <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-green-600" />
          </div>
          <p className="text-base sm:text-lg text-muted-foreground max-w-md">
            A little kindness every day — because small acts can change the
            world.
          </p>
        </motion.div>

        {/* Today's Counter */}
        <motion.div
          variants={itemVariants}
          className="mb-8 sm:mb-12 text-center"
        >
          <p className="text-sm text-muted-foreground mb-2">
            Today's Acts of Kindness
          </p>
          <div className="inline-block bg-green-100 dark:bg-green-900/30 px-6 py-3 rounded-full">
            <p className="text-4xl sm:text-5xl font-bold text-green-600 dark:text-green-400">
              {todayCount}
            </p>
          </div>
        </motion.div>

        {/* Kindness Card */}
        <motion.div variants={itemVariants} className="w-full max-w-md mb-8">
          <KindnessCard
            kindness={currentKindness}
            onComplete={completeKindness}
          />
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 w-full max-w-md"
        >
          <Link
            href="/stats"
            className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg font-semibold hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors"
          >
            <BarChart3 className="w-5 h-5" />
            <span>Stats</span>
          </Link>
          <Link
            href="/about"
            className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded-lg font-semibold hover:bg-purple-200 dark:hover:bg-purple-900/50 transition-colors"
          >
            <span>About</span>
          </Link>
        </motion.div>

        {/* Footer CTA */}
        <motion.div
          variants={itemVariants}
          className="mt-12 sm:mt-16 text-center text-sm text-muted-foreground"
        >
          <p>
            Share your kindness with the world and inspire others to do good.
          </p>
        </motion.div>
      </motion.div>
    </main>
  );
}
