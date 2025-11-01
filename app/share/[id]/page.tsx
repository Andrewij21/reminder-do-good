"use client";

import { motion } from "framer-motion";
import Navigation from "@/components/navigation";
import Link from "next/link";
import { Heart, ArrowRight } from "lucide-react";
import { KINDNESS_ACTIONS } from "@/lib/kindness-data";

export default function SharePage({ params }: { params: { id: string } }) {
  const kindnessId = Number.parseInt(params.id, 10);
  const kindness = KINDNESS_ACTIONS.find((k) => k.id === kindnessId);

  if (!kindness) {
    return (
      <main className="min-h-screen bg-background text-foreground">
        <Navigation />
        <div className="flex flex-col items-center justify-center px-4 py-20">
          <h1 className="text-4xl font-bold mb-4">Act Not Found</h1>
          <p className="text-lg text-muted-foreground mb-8">
            This kindness act could not be found.
          </p>
          <Link
            href="/"
            className="inline-block px-8 py-3 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-colors"
          >
            Back Home
          </Link>
        </div>
      </main>
    );
  }

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
          className="text-center mb-12 max-w-2xl"
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Join the Kindness Movement
          </h1>
          <p className="text-lg text-muted-foreground">
            Someone shared an act of kindness with you. Will you accept the
            challenge?
          </p>
        </motion.div>

        {/* Shared Kindness Card */}
        <motion.div
          variants={itemVariants}
          className="bg-gradient-to-br from-green-50 to-yellow-50 dark:from-green-900/20 dark:to-yellow-900/20 border-2 border-green-200 dark:border-green-700 rounded-2xl p-8 sm:p-10 max-w-md w-full mb-12 shadow-lg"
        >
          <div className="text-6xl sm:text-7xl mb-6 text-center">
            {kindness.emoji}
          </div>
          <h2 className="text-center text-2xl font-bold text-foreground mb-4">
            Today's Challenge
          </h2>
          <p className="text-center text-lg text-foreground leading-relaxed text-pretty">
            {kindness.text}
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 max-w-md w-full mb-12"
        >
          <Link
            href="/"
            className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg transition-colors"
          >
            <Heart className="w-5 h-5" />
            <span>Accept Challenge</span>
          </Link>
          <Link
            href="/"
            className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-muted hover:bg-muted/80 text-foreground font-semibold rounded-lg transition-colors"
          >
            <span>Learn More</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>

        {/* Info Section */}
        <motion.div
          variants={itemVariants}
          className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-700 rounded-lg p-6 max-w-md text-center"
        >
          <p className="text-foreground">
            Join thousands of people spreading kindness every day. Download
            Reminder Do Good to get your daily dose of inspiration.
          </p>
        </motion.div>
      </motion.div>
    </main>
  );
}
