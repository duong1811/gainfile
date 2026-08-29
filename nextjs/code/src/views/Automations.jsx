import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { RiRobot2Line, RiToggleLine, RiToggleFill, RiFlashlightLine, RiNodeTree, RiAddLine } from 'react-icons/ri';

const Automations = () => {
  const [workflows, setWorkflows] = useState([
    { id: 1, name: 'New User OnboardingSequence', trigger: 'When User Joins', actions: 3, active: true, runs: 1245 },
    { id: 2, name: 'Failed Payment Alert', trigger: 'Stripe: Charge Failed', actions: 2, active: true, runs: 12 },
    { id: 3, name: 'Monthly Report Generator', trigger: 'Schedule: 1st of Month', actions: 5, active: false, runs: 24 },
    { id: 4, name: 'Support Ticket Escalation', trigger: 'SLA Breach (>24h)', actions: 2, active: true, runs: 89 },
  ]);

  const toggleStatus = (id) => {
    setWorkflows(workflows.map(wf => wf.id === id ? { ...wf, active: !wf.active } : wf));
  };

  return (
    <div className="p-6 md:p-12 min-h-[calc(100vh-100px)] text-[var(--text-primary)] relative">
      <motion.div
        className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-2 tracking-tight">
            Workflow <span className="text-gradient from-blue-400 to-cyan-400">Automations</span>
          </h1>
          <p className="text-[var(--text-secondary)] text-lg">Build logic flows to automate repetitive system tasks.</p>
        </div>
        <button className="px-5 py-3 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/20 hover:opacity-90 transition-opacity text-sm font-bold flex items-center gap-2">
          <RiAddLine size={18} /> Create Workflow
        </button>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {workflows.map((wf, idx) => (
          <motion.div
            key={wf.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.1 }}
            className={`glass-card p-6 rounded-[2rem] border transition-all duration-300 ${wf.active
                ? 'border-blue-500/30 bg-gradient-to-br from-[var(--glass-bg)] to-blue-500/5'
                : 'border-[var(--glass-border)] bg-[var(--glass-bg)]/50'
              }`}
          >
            <div className="flex justify-between items-start mb-6">
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center text-xl shadow-inner ${wf.active ? 'bg-blue-500/10 text-blue-400' : 'bg-[var(--glass-border)] text-[var(--text-secondary)]'
                }`}>
                <RiRobot2Line />
              </div>
              <button
                onClick={() => toggleStatus(wf.id)}
                className={`text-3xl transition-colors ${wf.active ? 'text-blue-500' : 'text-[var(--text-secondary)]'}`}
              >
                {wf.active ? <RiToggleFill /> : <RiToggleLine />}
              </button>
            </div>

            <h3 className={`text-xl font-bold mb-4 line-clamp-1 ${!wf.active && 'opacity-60'}`}>{wf.name}</h3>

            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-sm">
                <RiFlashlightLine className="text-amber-400" size={16} />
                <span className="text-[var(--text-secondary)] font-medium">Trigger:</span>
                <span className={`font-bold ${!wf.active && 'opacity-60'}`}>{wf.trigger}</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <RiNodeTree className="text-emerald-400" size={16} />
                <span className="text-[var(--text-secondary)] font-medium">Steps:</span>
                <span className={`font-bold ${!wf.active && 'opacity-60'}`}>{wf.actions} actions</span>
              </div>
            </div>

            <div className="pt-4 border-t border-[var(--glass-border)] flex items-center justify-between text-xs font-bold uppercase tracking-wider">
              <span className="text-[var(--text-secondary)]">Total Runs</span>
              <span className={wf.active ? 'text-blue-400' : 'text-[var(--text-secondary)]'}>{wf.runs.toLocaleString()}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Automations;
