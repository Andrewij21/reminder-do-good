"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Share2, MessageCircle, Mail, Copy, Check } from "lucide-react";
import { useState } from "react";

interface ShareDialogProps {
  isOpen: boolean;
  onClose: () => void;
  kindness: { id: number; text: string; emoji: string };
}

export default function ShareDialog({
  isOpen,
  onClose,
  kindness,
}: ShareDialogProps) {
  const [copied, setCopied] = useState(false);

  const shareMessage = `Today I'm doing an act of kindness: "${kindness.text}" ${kindness.emoji}\n\nYou can join me at reminderdogood.com and spread kindness every day!`;

  const shareUrl = `${
    typeof window !== "undefined" ? window.location.origin : ""
  }/share/${kindness.id}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(shareMessage);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleWhatsApp = () => {
    const encodedMessage = encodeURIComponent(shareMessage);
    window.open(`https://wa.me/?text=${encodedMessage}`, "_blank");
  };

  const handleTwitter = () => {
    const encodedMessage = encodeURIComponent(
      `${shareMessage}\n\n#RemindDoGood #ActsOfKindness`
    );
    window.open(
      `https://twitter.com/intent/tweet?text=${encodedMessage}`,
      "_blank"
    );
  };

  const handleEmail = () => {
    const subject = encodeURIComponent("Let's do good together!");
    const body = encodeURIComponent(`${shareMessage}\n\nVisit: ${shareUrl}`);
    window.open(`mailto:?subject=${subject}&body=${body}`, "_blank");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-40"
          />

          {/* Dialog */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="bg-card border border-border rounded-2xl shadow-xl max-w-md w-full">
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-border">
                <h2 className="text-xl font-bold flex items-center gap-2">
                  <Share2 className="w-5 h-5 text-green-600 dark:text-green-400" />
                  Share Your Kindness
                </h2>
                <button
                  onClick={onClose}
                  className="p-1 hover:bg-muted rounded-lg transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                {/* Message Preview */}
                <div className="bg-muted rounded-lg p-4 text-sm">
                  <p className="text-foreground whitespace-pre-wrap">
                    {shareMessage}
                  </p>
                </div>

                {/* Share Buttons */}
                <div className="space-y-3">
                  <button
                    onClick={handleWhatsApp}
                    className="w-full flex items-center gap-3 px-4 py-3 bg-green-100 dark:bg-green-900/30 hover:bg-green-200 dark:hover:bg-green-900/50 text-green-700 dark:text-green-400 rounded-lg font-semibold transition-colors"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Share on WhatsApp
                  </button>

                  <button
                    onClick={handleTwitter}
                    className="w-full flex items-center gap-3 px-4 py-3 bg-blue-100 dark:bg-blue-900/30 hover:bg-blue-200 dark:hover:bg-blue-900/50 text-blue-700 dark:text-blue-400 rounded-lg font-semibold transition-colors"
                  >
                    <Share2 className="w-5 h-5" />
                    Share on X/Twitter
                  </button>

                  <button
                    onClick={handleEmail}
                    className="w-full flex items-center gap-3 px-4 py-3 bg-purple-100 dark:bg-purple-900/30 hover:bg-purple-200 dark:hover:bg-purple-900/50 text-purple-700 dark:text-purple-400 rounded-lg font-semibold transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    Share via Email
                  </button>

                  <button
                    onClick={handleCopy}
                    className="w-full flex items-center gap-3 px-4 py-3 bg-gray-100 dark:bg-gray-900/30 hover:bg-gray-200 dark:hover:bg-gray-900/50 text-gray-700 dark:text-gray-400 rounded-lg font-semibold transition-colors"
                  >
                    {copied ? (
                      <>
                        <Check className="w-5 h-5" />
                        Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="w-5 h-5" />
                        Copy to Clipboard
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Footer */}
              <div className="px-6 py-4 border-t border-border">
                <button
                  onClick={onClose}
                  className="w-full px-4 py-2 bg-muted hover:bg-muted/80 text-foreground rounded-lg font-semibold transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
