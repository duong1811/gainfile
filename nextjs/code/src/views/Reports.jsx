import React from 'react';
import { motion } from 'framer-motion';
import { RiFileDownloadLine, RiFileCopy2Line } from 'react-icons/ri';

const Reports = () => {
  return (
    <div className="p-6 md:p-12 min-h-[calc(100vh-100px)] text-[var(--text-primary)]">
      <motion.div
        className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-2 tracking-tight">
            Financial <span className="text-[var(--aurora-4)]">Reports</span>
          </h1>
          <p className="text-[var(--text-secondary)] text-lg">Generate and download historical data.</p>
        </div>
        <button className="px-5 py-2.5 rounded-xl bg-[var(--aurora-4)] text-white hover:bg-cyan-600 transition-colors text-sm font-bold flex items-center gap-2">
          <RiFileCopy2Line /> Create New Report
        </button>
      </motion.div>

      <motion.div
        className="glass-card p-6 md:p-10 rounded-[2rem] border border-[var(--glass-border)] bg-[var(--glass-bg)]"
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 border border-[var(--glass-border)] rounded-2xl flex items-center justify-between hover:border-[var(--aurora-4)] transition-colors cursor-pointer group">
            <div>
              <h4 className="font-bold text-lg">Q1 2026 Earnings</h4>
              <p className="text-sm text-[var(--text-secondary)]">Generated on Mar 15</p>
            </div>
            <RiFileDownloadLine size={24} className="text-[var(--aurora-4)] opacity-50 group-hover:opacity-100 transition-opacity" />
          </div>
          <div className="p-6 border border-[var(--glass-border)] rounded-2xl flex items-center justify-between hover:border-[var(--aurora-4)] transition-colors cursor-pointer group">
            <div>
              <h4 className="font-bold text-lg">Annual Tax Summary</h4>
              <p className="text-sm text-[var(--text-secondary)]">Generated on Jan 05</p>
            </div>
            <RiFileDownloadLine size={24} className="text-[var(--aurora-4)] opacity-50 group-hover:opacity-100 transition-opacity" />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Reports;
