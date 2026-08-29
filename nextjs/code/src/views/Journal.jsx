import React from 'react';
import { motion } from 'framer-motion';
import { RiBookmarkLine } from 'react-icons/ri';
import { Card } from '../components/ui/Card';

const Journal = () => {
  return (
    <div className="p-6 md:p-12 min-h-[calc(100vh-100px)] text-[var(--text-primary)] relative">
      <motion.div
        className="mb-12"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex items-center gap-2 mb-4">
          <RiBookmarkLine className="text-[var(--aurora-3)]" />
          <span className="text-[var(--text-secondary)] text-[10px] font-bold uppercase tracking-widest text-[var(--aurora-3)]">Cognitive Log</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-[var(--text-primary)] mb-2 tracking-tight">
          Mental <span className="text-[var(--aurora-3)] text-gradient">Repository</span>
        </h1>
        <p className="text-[var(--text-secondary)] text-lg font-medium">Document your daily evolution.</p>
      </motion.div>

      <Card 
        padding="lg"
        className="opacity-80 shadow-none border-dashed"
      >
         <textarea 
           className="w-full bg-transparent border-none outline-none text-[var(--text-primary)] resize-none h-96 placeholder:text-[var(--text-secondary)]/50 font-medium text-lg leading-relaxed"
           placeholder="What progress did you make today?"
         />
      </Card>
    </div>
  );
};

export default Journal;
