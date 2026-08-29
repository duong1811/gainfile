import React from 'react';
import { motion } from 'framer-motion';
import { RiPlaneLine, RiCalendarCheckLine, RiHealthBookLine, RiCheckLine, RiCloseLine } from 'react-icons/ri';

const TimeOff = () => {
  const balances = [
    { type: 'Paid Vacation', days: 14, icon: RiPlaneLine, color: 'blue' },
    { type: 'Sick Leave', days: 5, icon: RiHealthBookLine, color: 'rose' },
    { type: 'Personal Days', days: 3, icon: RiCalendarCheckLine, color: 'amber' },
  ];

  const requests = [
    { id: 1, name: 'Alice Smith', type: 'Paid Vacation', dates: 'Aug 12 - Aug 18', days: 5, status: 'Pending' },
    { id: 2, name: 'David Lee', type: 'Sick Leave', dates: 'Jul 02 - Jul 03', days: 2, status: 'Pending' },
    { id: 3, name: 'Sarah Jones', type: 'Personal', dates: 'Jun 15', days: 1, status: 'Approved' },
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
            Leave & <span className="text-gradient from-emerald-400 to-cyan-500">Time Off</span>
          </h1>
          <p className="text-[var(--text-secondary)] text-lg">Manage balances and approve team requests.</p>
        </div>
        <button className="px-5 py-3 rounded-2xl bg-[var(--text-primary)] text-[var(--bg-primary)] hover:opacity-90 transition-opacity text-sm font-bold flex items-center gap-2">
          <RiPlaneLine size={18} /> Request Leave
        </button>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {balances.map((bal, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="glass-card p-6 rounded-[2rem] border border-[var(--glass-border)] bg-[var(--glass-bg)] flex items-center gap-6"
          >
            <div className={`w-16 h-16 rounded-2xl bg-${bal.color}-500/10 text-${bal.color}-500 flex items-center justify-center text-3xl`}>
              <bal.icon />
            </div>
            <div>
              <p className="text-[var(--text-secondary)] font-bold text-sm uppercase tracking-wider mb-1">{bal.type}</p>
              <h2 className="text-4xl font-bold font-mono">{bal.days} <span className="text-base font-medium text-[var(--text-secondary)]">days left</span></h2>
            </div>
          </motion.div>
        ))}
      </div>

      <h3 className="text-2xl font-bold mb-6">Pending Approvals</h3>
      <div className="flex flex-col gap-4">
        {requests.map((req, idx) => (
          <motion.div
            key={req.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 + (idx * 0.1) }}
            className="glass-card p-5 md:p-6 rounded-[1.5rem] border border-[var(--glass-border)] bg-[var(--glass-bg)] flex flex-col md:flex-row md:items-center justify-between gap-6 hover:shadow-lg transition-all"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--aurora-1)] to-[var(--aurora-2)] flex items-center justify-center text-white font-bold text-lg shadow-md">
                {req.name.charAt(0)}
              </div>
              <div>
                <h4 className="font-bold text-lg">{req.name}</h4>
                <div className="flex items-center gap-3 text-sm text-[var(--text-secondary)] font-medium mt-1">
                  <span className="px-2 py-0.5 bg-[var(--glass-border)] rounded text-xs font-bold text-[var(--text-primary)]">{req.type}</span>
                  <span>{req.dates}</span>
                  <span className="font-mono text-[var(--text-primary)] font-bold">({req.days} days)</span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              {req.status === 'Pending' ? (
                <>
                  <button className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-500 hover:bg-emerald-500 hover:text-white transition-colors flex items-center justify-center border border-emerald-500/20" title="Approve">
                    <RiCheckLine size={20} />
                  </button>
                  <button className="w-10 h-10 rounded-xl bg-rose-500/10 text-rose-500 hover:bg-rose-500 hover:text-white transition-colors flex items-center justify-center border border-rose-500/20" title="Deny">
                    <RiCloseLine size={20} />
                  </button>
                </>
              ) : (
                <span className="px-4 py-2 bg-[var(--glass-border)] text-[var(--text-secondary)] rounded-xl text-sm font-bold border border-[var(--glass-border)]">
                  {req.status}
                </span>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TimeOff;
