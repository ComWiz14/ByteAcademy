import React from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface ClearConfirmDialogProps {
  isOpen: boolean;
  onCancel: () => void;
  onConfirm: () => void;
}

export default function ClearConfirmDialog({ isOpen, onCancel, onConfirm }: ClearConfirmDialogProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 bg-black/60 backdrop-blur-[2px] z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="bg-zinc-900 border border-premium rounded-2xl p-5 w-full max-w-[280px] shadow-2xl text-center"
          >
            <h3 className="text-sm font-bold text-white mb-2">
              Clear conversation?
            </h3>
            <p className="text-xs text-zinc-400 mb-4 leading-normal">
              This will permanently delete your chat history.
            </p>
            <div className="flex gap-2.5">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onCancel();
                }}
                className="flex-1 py-2 px-3 text-xs font-bold rounded-xl bg-zinc-800 hover:bg-zinc-700 text-zinc-300 transition-colors cursor-pointer select-none"
              >
                Cancel
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onConfirm();
                }}
                className="flex-1 py-2 px-3 text-xs font-bold rounded-xl bg-[#FF0800] hover:bg-rose-700 text-white transition-colors cursor-pointer select-none"
              >
                Clear
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
