import React from 'react';
import { motion } from 'framer-motion';
import { RiBankCardLine, RiCheckLine, RiDownload2Line } from 'react-icons/ri';
import { Button } from '../components/ui/Button';

const Billing = () => {
  return (
    <div className="p-6 md:p-12 min-h-[calc(100vh-100px)] text-[var(--text-primary)] relative">
      <motion.div
        className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <div>
          <h1 className="text-4xl md:text-6xl font-bold mb-2 tracking-tight">
            Account <span className="text-gradient from-purple-400 to-pink-500">Billing</span>
          </h1>
          <p className="text-[var(--text-secondary)] text-lg font-medium">Manage subscriptions and view invoices.</p>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <div className="glass-card p-8 rounded-3xl border-[var(--glass-border)] bg-gradient-to-br from-purple-500/10 to-transparent">
          <p className="text-[var(--text-secondary)] text-sm font-bold uppercase tracking-widest mb-2">Current Plan</p>
          <div className="flex items-end gap-4 mb-6">
            <h2 className="text-4xl font-bold">Pro Tier</h2>
            <span className="text-[var(--text-secondary)] text-lg mb-1">/ $49/mo</span>
          </div>
          <Button variant="purple" className="w-full md:w-auto">
            Manage Plan
          </Button>
        </div>

        <div className="glass-card p-8 rounded-3xl border-[var(--glass-border)] bg-[var(--glass-bg)] flex flex-col justify-center">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-xl bg-[var(--text-primary)]/5 flex items-center justify-center text-2xl">
              <RiBankCardLine />
            </div>
            <div>
              <p className="font-bold">Visa ending in 4242</p>
              <p className="text-[var(--text-secondary)] text-sm">Expires 12/28</p>
            </div>
          </div>
          <Button variant="ghost" size="sm" className="!text-purple-400 hover:!text-purple-500 px-0 font-bold">Update Payment Method</Button>
        </div>
      </div>

      <h3 className="text-xl font-bold mb-6">Recent Invoices</h3>
      <div className="space-y-4">
        {[1, 2, 3].map(i => (
          <div key={i} className="flex items-center justify-between glass-card p-4 rounded-2xl border-[var(--glass-border)] bg-[var(--glass-bg)] hover:bg-[var(--glass-border)] transition-colors cursor-pointer group">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center"><RiCheckLine /></div>
              <div>
                <p className="font-bold">Invoice #INV-202{6 - i}-{i}A</p>
                <p className="text-xs text-[var(--text-secondary)]">Paid on Oct {12 - i}, 2024</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <p className="font-bold font-mono">$49.00</p>
              <RiDownload2Line className="text-[var(--text-secondary)] group-hover:text-[var(--text-primary)] transition-colors" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Billing;
