import React from 'react';
import { motion } from 'framer-motion';
import { RiMegaphoneLine, RiArrowRightUpLine, RiAddLine } from 'react-icons/ri';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Progress } from '../components/ui/Progress';

const Campaigns = () => {
  const campaigns = [
    { id: 1, name: 'Summer Sale 2026', platform: 'Instagram Ads', budget: 15000, spent: 12450, roi: '+142%', status: 'Active' },
    { id: 2, name: 'B2B Lead Gen', platform: 'LinkedIn', budget: 8000, spent: 3200, roi: '+45%', status: 'Active' },
    { id: 3, name: 'Retargeting Display', platform: 'Google Display', budget: 5000, spent: 5000, roi: '+88%', status: 'Completed' },
    { id: 4, name: 'Newsletter Promo', platform: 'Email', budget: 1200, spent: 800, roi: '+210%', status: 'Active' },
  ];

  return (
    <div className="p-6 md:p-12 min-h-[calc(100vh-100px)] text-[var(--text-primary)] relative">
      <motion.div
        className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-2 tracking-tight">
            Marketing <span className="text-gradient from-pink-500 to-rose-500">Campaigns</span>
          </h1>
          <p className="text-[var(--text-secondary)] text-lg">Track spend, ROI, and active ad pushes.</p>
        </div>
        <Button variant="primary" className="shadow-lg shadow-pink-500/20 text-sm font-bold gap-2">
          <RiAddLine size={18} /> Launch Campaign
        </Button>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {campaigns.map((camp, idx) => {
          const progress = (camp.spent / camp.budget) * 100;
          return (
            <Card
              key={camp.id}
              transition={{ delay: idx * 0.1 }}
              className="p-6 md:p-8 hover:border-pink-500/30 transition-all hover:shadow-lg"
            >
              <div className="flex justify-between items-start mb-6">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className={`px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-lg ${
                      camp.status === 'Active' ? 'bg-emerald-500/10 text-emerald-500 border border-emerald-500/20' : 'bg-[var(--glass-border)] text-[var(--text-secondary)]'
                    }`}>
                      {camp.status}
                    </span>
                    <span className="text-xs font-bold text-[var(--text-secondary)] px-3 py-1 bg-[var(--glass-border)] rounded-lg">
                      {camp.platform}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold">{camp.name}</h3>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-pink-500/10 text-pink-500 flex items-center justify-center text-xl">
                  <RiMegaphoneLine />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="p-4 rounded-2xl bg-[var(--bg-primary)] border border-[var(--glass-border)]">
                  <p className="text-xs text-[var(--text-secondary)] font-bold uppercase tracking-wider mb-1">Budget Spent</p>
                  <p className="text-xl font-mono font-bold">${camp.spent.toLocaleString()} <span className="text-sm text-[var(--text-secondary)]">/ ${camp.budget.toLocaleString()}</span></p>
                </div>
                <div className="p-4 rounded-2xl bg-emerald-500/5 border border-emerald-500/10">
                  <p className="text-xs text-[var(--text-secondary)] font-bold uppercase tracking-wider mb-1 flex items-center gap-1"><RiArrowRightUpLine className="text-emerald-500" /> Current ROI</p>
                  <p className="text-xl font-bold text-emerald-500">{camp.roi}</p>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-xs font-bold mb-2">
                  <span className="text-[var(--text-secondary)]">Budget Utilization</span>
                  <span>{progress.toFixed(0)}%</span>
                </div>
                <Progress 
                  value={progress} 
                  variant={progress >= 100 ? "default" : "danger"} 
                  size="sm"
                  indicatorClassName={progress < 100 ? "bg-gradient-to-r from-pink-500 to-rose-500 shadow-pink-500/20" : ""}
                />
              </div>
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default Campaigns;
