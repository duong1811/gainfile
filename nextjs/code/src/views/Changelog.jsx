import React from 'react';
import { motion } from 'framer-motion';
import { RiRocketLine, RiBugLine, RiShieldCheckLine, RiHistoryLine } from 'react-icons/ri';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';

const Changelog = () => {
  const versions = [
    {
      id: 'v2.4.0',
      date: 'Today, 09:00 AM',
      title: 'The AI Workflows Update',
      tags: ['Major', 'Feature'],
      changes: [
        { type: 'Feature', icon: RiRocketLine, color: 'blue', text: 'Introduced GPT-powered logic blocks in Automations.' },
        { type: 'Feature', icon: RiRocketLine, color: 'blue', text: 'Added new dark mode syntax highlighting for logs.' },
        { type: 'Fix', icon: RiBugLine, color: 'amber', text: 'Resolved dropdown overflow issue on mobile devices.' }
      ]
    },
    {
      id: 'v2.3.5',
      date: 'Mar 15, 2026',
      title: 'Security Patch & Optimizations',
      tags: ['Minor', 'Security'],
      changes: [
        { type: 'Security', icon: RiShieldCheckLine, color: 'emerald', text: 'Upgraded OAuth2 flow to comply with 2026 standards.' },
        { type: 'Fix', icon: RiBugLine, color: 'amber', text: 'Fixed memory leak in Dashboard metrics renderer.' }
      ]
    },
    {
      id: 'v2.3.0',
      date: 'Feb 28, 2026',
      title: 'CRM Deal Pipeline Released',
      tags: ['Major', 'Feature'],
      changes: [
        { type: 'Feature', icon: RiRocketLine, color: 'blue', text: 'Full Kanban interface for tracking Sales Pipelines.' },
        { type: 'Feature', icon: RiRocketLine, color: 'blue', text: 'Added E-signature tracking for legal contracts.' }
      ]
    }
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
            System <span className="text-gradient from-[var(--aurora-1)] to-[var(--aurora-3)]">Changelog</span>
          </h1>
          <p className="text-[var(--text-secondary)] text-lg">Product updates, fixes, and release notes.</p>
        </div>
        <Button variant="glass" className="gap-2">
          <RiHistoryLine size={18} /> View Archive
        </Button>
      </motion.div>

      <div className="max-w-4xl mx-auto pl-4 md:pl-8 border-l-2 border-[var(--glass-border)] relative space-y-12 pb-12">
        {versions.map((version, idx) => (
          <motion.div
            key={version.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.15 }}
            className="relative"
          >
            <div className="absolute -left-[41px] md:-left-[57px] top-0 w-6 h-6 rounded-full bg-[var(--glass-bg)] border-4 border-[var(--aurora-1)] shadow-[0_0_15px_rgba(99,102,241,0.5)] z-10" />

            <div className="mb-2">
              <span className="text-[10px] uppercase font-bold tracking-widest text-[var(--text-secondary)] bg-[var(--glass-border)] px-3 py-1 rounded-full">
                {version.date}
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-3 mb-4">
              <h2 className="text-2xl md:text-3xl font-bold">{version.id} &mdash; {version.title}</h2>
              <div className="flex gap-2">
                {version.tags.map(tag => (
                  <span key={tag} className={`px-2 py-0.5 rounded text-[10px] uppercase font-bold tracking-wider border ${tag === 'Major' ? 'bg-purple-500/10 text-purple-400 border-purple-500/20' :
                      tag === 'Security' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' :
                        'bg-[var(--glass-border)] text-[var(--text-secondary)] border-[var(--glass-border)]'
                    }`}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <Card
              padding="lg"
              className="p-6 md:p-8"
            >
              <ul className="space-y-5">
                {version.changes.map((change, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className={`mt-0.5 w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 bg-${change.color}-500/10 text-${change.color}-500 border border-${change.color}-500/20`}>
                      <change.icon size={16} />
                    </div>
                    <div>
                      <span className={`text-xs font-bold uppercase tracking-wider text-${change.color}-500 mb-1 block`}>{change.type}</span>
                      <p className="text-[var(--text-secondary)] font-medium leading-relaxed">{change.text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Changelog;
