import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RiMoneyDollarCircleLine, RiTrophyLine, RiFilter3Line } from 'react-icons/ri';

const Deals = () => {
  const columns = [
    { id: 'lead', title: 'New Leads', value: '$45,000', count: 3 },
    { id: 'contact', title: 'Contacted', value: '$120,500', count: 2 },
    { id: 'proposal', title: 'Proposal Sent', value: '$85,000', count: 2 },
    { id: 'won', title: 'Closed Won', value: '$240,000', count: 4 },
  ];

  const deals = [
    { id: 1, name: 'Acme Corp Integration', company: 'Acme Corp', value: '$15,000', stage: 'lead', owner: 'JS' },
    { id: 2, name: 'Global Dynamics ERP', company: 'Global Dynamics', value: '$30,000', stage: 'lead', owner: 'AL' },
    { id: 3, name: 'Stark Ind. Security', company: 'Stark Industries', value: '$75,500', stage: 'contact', owner: 'JS' },
    { id: 4, name: 'Wayne Ent. Consulting', company: 'Wayne Enterprises', value: '$45,000', stage: 'contact', owner: 'DK' },
    { id: 5, name: 'Nexus Tech API', company: 'Nexus Technologies', value: '$85,000', stage: 'proposal', owner: 'AL' },
    { id: 6, name: 'Massive Dynamic Cloud', company: 'Massive Dynamic', value: '$120,000', stage: 'won', owner: 'JS' },
    { id: 7, name: 'Cyberdyne Systems AI', company: 'Cyberdyne', value: '$120,000', stage: 'won', owner: 'DK' },
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
            Sales <span className="text-gradient from-emerald-400 to-teal-500">Pipeline</span>
          </h1>
          <p className="text-[var(--text-secondary)] text-lg">Track CRM deals, potential revenue, and conversions.</p>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-3 rounded-2xl glass-card font-bold flex items-center gap-2 border-[var(--glass-border)] hover:bg-[var(--glass-border)] transition-colors">
            <RiFilter3Line size={18} /> Filter
          </button>
          <button className="px-5 py-3 rounded-2xl bg-[var(--text-primary)] text-[var(--bg-primary)] hover:opacity-90 transition-opacity text-sm font-bold flex items-center gap-2">
            <RiMoneyDollarCircleLine size={18} /> New Deal
          </button>
        </div>
      </motion.div>

      <div className="flex gap-6 overflow-x-auto pb-6 no-scrollbar snap-x">
        {columns.map((col, idx) => (
          <motion.div
            key={col.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.1 }}
            className="flex-shrink-0 w-80 lg:w-96 glass-card p-5 rounded-[2rem] border border-[var(--glass-border)] bg-[var(--glass-bg)]/50 min-h-[600px] flex flex-col snap-center"
          >
            <div className="flex justify-between items-center mb-6 px-1">
              <div>
                <h3 className="font-bold text-lg flex items-center gap-2">
                  <span className={`w-2.5 h-2.5 rounded-full ${col.id === 'won' ? 'bg-emerald-500' : col.id === 'proposal' ? 'bg-amber-500' : col.id === 'contact' ? 'bg-blue-500' : 'bg-[var(--text-secondary)]'}`} />
                  {col.title} <span className="text-[var(--text-secondary)] text-sm ml-1 font-normal">({col.count})</span>
                </h3>
                <p className="text-[var(--text-secondary)] text-sm font-mono mt-1">{col.value}</p>
              </div>
              {col.id === 'won' && <RiTrophyLine className="text-emerald-500 text-2xl" />}
            </div>

            <div className="flex flex-col gap-4 flex-1">
              {deals.filter(d => d.stage === col.id).map((deal, i) => (
                <div key={deal.id} className="p-4 rounded-2xl border border-[var(--glass-border)] bg-[var(--bg-primary)] cursor-pointer hover:border-emerald-500/30 hover:shadow-lg transition-all group">
                  <div className="flex justify-between items-start mb-3">
                    <span className="text-xs font-bold uppercase tracking-wider px-2 py-1 rounded bg-[var(--glass-border)] text-[var(--text-secondary)] group-hover:bg-emerald-500/10 group-hover:text-emerald-400 transition-colors">
                      {deal.company}
                    </span>
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[var(--aurora-1)] to-[var(--aurora-2)] flex items-center justify-center text-[10px] text-white font-bold opacity-80">
                      {deal.owner}
                    </div>
                  </div>
                  <h4 className="font-bold mb-3">{deal.name}</h4>
                  <div className="flex justify-between items-center pt-3 border-t border-[var(--glass-border)] text-sm">
                    <span className="text-[var(--text-secondary)] font-medium">Est. Value</span>
                    <span className="font-mono font-bold text-emerald-500">{deal.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Deals;
