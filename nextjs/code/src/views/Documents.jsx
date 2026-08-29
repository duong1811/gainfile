import React from 'react';
import { motion } from 'framer-motion';
import { RiBookReadLine, RiFileTextLine, RiSearchLine } from 'react-icons/ri';

const Documents = () => {
  return (
    <div className="p-6 md:p-12 min-h-[calc(100vh-100px)] text-[var(--text-primary)] relative">
      <motion.div
        className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <div>
          <h1 className="text-4xl md:text-6xl font-bold mb-2 tracking-tight">
            Doc<span className="text-gradient from-teal-400 to-emerald-500">Vault</span>
          </h1>
          <p className="text-[var(--text-secondary)] text-lg font-medium">Knowledge base and company wikis.</p>
        </div>
        <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[var(--glass-border)] border border-[var(--glass-border)] w-full md:w-64">
          <RiSearchLine className="text-[var(--text-secondary)]" />
          <input type="text" placeholder="Search docs..." className="bg-transparent border-none outline-none text-sm w-full" />
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[1, 2, 3, 4].map((i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="glass-card p-6 rounded-3xl border-[var(--glass-border)] bg-[var(--glass-bg)] hover:bg-[var(--glass-border)] transition-colors cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-lg bg-teal-500/10 flex items-center justify-center text-teal-400 mb-6 group-hover:scale-110 transition-transform">
              <RiFileTextLine size={24} />
            </div>
            <h3 className="font-bold mb-2">Architecture Guidelines {i}</h3>
            <p className="text-xs text-[var(--text-secondary)]">Updated 2 days ago</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Documents;
