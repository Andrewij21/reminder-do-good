"use client";

import { motion } from "framer-motion";
import Navigation from "@/components/navigation";
import Link from "next/link";
import { Heart, Lightbulb, Users } from "lucide-react";

export default function AboutPage() {
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
            About Reminder Do Good
          </h1>
          <p className="text-lg text-muted-foreground">
            A simple yet powerful app dedicated to spreading kindness, one day
            at a time.
          </p>
        </motion.div>

        {/* Mission Section */}
        <motion.div
          variants={itemVariants}
          className="bg-gradient-to-br from-green-50 to-yellow-50 dark:from-green-900/20 dark:to-yellow-900/20 border-2 border-green-200 dark:border-green-700 rounded-2xl p-8 sm:p-10 max-w-2xl mb-8"
        >
          <div className="flex items-start gap-4 mb-4">
            <Heart className="w-8 h-8 text-green-600 dark:text-green-400 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-2xl font-bold mb-3">Our Mission</h2>
              <p className="text-foreground leading-relaxed text-pretty">
                To help people build positive habits by reminding them to
                perform small acts of kindness every day. We believe that small
                acts can change the world, and everyone has the power to make a
                difference.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Why It Matters */}
        <motion.div
          variants={itemVariants}
          className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-900/10 border-2 border-blue-200 dark:border-blue-700 rounded-2xl p-8 sm:p-10 max-w-2xl mb-8"
        >
          <div className="flex items-start gap-4 mb-4">
            <Lightbulb className="w-8 h-8 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-2xl font-bold mb-3">Why Kindness Matters</h2>
              <p className="text-foreground leading-relaxed text-pretty mb-4">
                Studies show that practicing kindness improves mental health,
                builds stronger communities, and creates a ripple effect of
                positivity. When you do good, you inspire others to do the same.
              </p>
              <ul className="space-y-2 text-foreground">
                <li>✓ Boosts your own happiness and well-being</li>
                <li>✓ Strengthens relationships and community bonds</li>
                <li>✓ Inspires others to spread kindness</li>
                <li>✓ Creates lasting positive change</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Who It's For */}
        <motion.div
          variants={itemVariants}
          className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-900/10 border-2 border-purple-200 dark:border-purple-700 rounded-2xl p-8 sm:p-10 max-w-2xl mb-12"
        >
          <div className="flex items-start gap-4">
            <Users className="w-8 h-8 text-purple-600 dark:text-purple-400 flex-shrink-0 mt-1" />
            <div>
              <h2 className="text-2xl font-bold mb-3">Who Can Use This?</h2>
              <p className="text-foreground leading-relaxed text-pretty mb-4">
                Reminder Do Good is for everyone who believes in the power of
                kindness:
              </p>
              <ul className="space-y-2 text-foreground">
                <li>✓ Individuals building positive daily habits</li>
                <li>✓ Schools and educational institutions</li>
                <li>✓ Community groups and organizations</li>
                <li>✓ Workplaces promoting positive culture</li>
                <li>✓ Families teaching children about kindness</li>
              </ul>
            </div>
          </div>
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
