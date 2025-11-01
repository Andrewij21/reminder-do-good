"use client";

import { motion } from "framer-motion";
import { Calendar, TrendingUp, Trophy } from "lucide-react";
import Navigation from "@/components/navigation";
import { useKindnessStore } from "@/lib/store";
import Link from "next/link";

export default function StatsPage() {
  const { getTodayCount, getThisWeekCount, getThisMonthCount } =
    useKindnessStore();

  const todayCount = getTodayCount();
  const weekCount = getThisWeekCount();
  const monthCount = getThisMonthCount();

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
        <motion.div variants={itemVariants} className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Your Progress</h1>
          <p className="text-lg text-muted-foreground">
            Track your journey of kindness
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-2xl mb-12"
        >
          {/* Today */}
          <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-900/10 border-2 border-green-200 dark:border-green-700 rounded-xl p-8 text-center">
            <Calendar className="w-8 h-8 mx-auto mb-4 text-green-600 dark:text-green-400" />
            <p className="text-muted-foreground text-sm mb-2">Today</p>
            <p className="text-5xl font-bold text-green-600 dark:text-green-400">
              {todayCount}
            </p>
            <p className="text-xs text-muted-foreground mt-2">acts completed</p>
          </div>

          {/* This Week */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-900/10 border-2 border-blue-200 dark:border-blue-700 rounded-xl p-8 text-center">
            <TrendingUp className="w-8 h-8 mx-auto mb-4 text-blue-600 dark:text-blue-400" />
            <p className="text-muted-foreground text-sm mb-2">This Week</p>
            <p className="text-5xl font-bold text-blue-600 dark:text-blue-400">
              {weekCount}
            </p>
            <p className="text-xs text-muted-foreground mt-2">acts completed</p>
          </div>

          {/* This Month */}
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-900/10 border-2 border-purple-200 dark:border-purple-700 rounded-xl p-8 text-center">
            <Trophy className="w-8 h-8 mx-auto mb-4 text-purple-600 dark:text-purple-400" />
            <p className="text-muted-foreground text-sm mb-2">This Month</p>
            <p className="text-5xl font-bold text-purple-600 dark:text-purple-400">
              {monthCount}
            </p>
            <p className="text-xs text-muted-foreground mt-2">acts completed</p>
          </div>
        </motion.div>

        {/* Motivational Message */}
        <motion.div
          variants={itemVariants}
          className="max-w-md text-center mb-12"
        >
          <p className="text-lg text-foreground mb-6">
            {monthCount === 0 &&
              "Start your journey today by completing your first act of kindness!"}
            {monthCount > 0 &&
              monthCount < 10 &&
              "Great start! Keep spreading kindness every day."}
            {monthCount >= 10 &&
              monthCount < 30 &&
              "Amazing! You're making a real difference in the world."}
            {monthCount >= 30 && "Incredible! You're a kindness champion!"}
          </p>
        </motion.div>

        {/* Back Button */}
        <motion.div variants={itemVariants}>
          <Link
            href="/"
            className="inline-block px-8 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-colors"
          >
            Back Home
          </Link>
        </motion.div>
      </motion.div>
    </main>
  );
}
