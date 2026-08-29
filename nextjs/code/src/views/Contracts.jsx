import React from 'react';
import { motion } from 'framer-motion';
import { RiFilePaper2Line, RiPenNibLine, RiTimeLine, RiDownloadCloud2Line } from 'react-icons/ri';

const Contracts = () => {
  const contracts = [
    { id: 'CTR-0012', title: 'Master Service Agreement', client: 'Acme Corp', status: 'Signed', date: 'Mar 15, 2026', value: '$120,000' },
    { id: 'CTR-0013', title: 'Non-Disclosure Agreement', client: 'Stark Industries', status: 'Awaiting', date: 'Mar 24, 2026', value: '-' },
    { id: 'CTR-0014', title: 'Annual Retainer 2026', client: 'Global Dynamics', status: 'Draft', date: 'Mar 27, 2026', value: '$85,000' },
    { id: 'CTR-0015', title: 'Vendor Partnership T&C', client: 'Amazon AWS', status: 'Signed', date: 'Jan 10, 2026', value: '$45,000' },
    { id: 'CTR-0016', title: 'Software License Agreement', client: 'Nexus Tech', status: 'Awaiting', date: 'Mar 26, 2026', value: '$30,000' },
  ];

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Signed': return <span className="px-3 py-1 bg-emerald-500/10 text-emerald-500 border border-emerald-500/20 rounded-lg text-xs font-bold flex items-center gap-1 w-max"><RiPenNibLine /> Signed</span>;
      case 'Awaiting': return <span className="px-3 py-1 bg-amber-500/10 text-amber-500 border border-amber-500/20 rounded-lg text-xs font-bold flex items-center gap-1 w-max"><RiTimeLine /> Awaiting Signature</span>;
      case 'Draft': return <span className="px-3 py-1 bg-[var(--glass-border)] text-[var(--text-secondary)] border border-[var(--glass-border)] rounded-lg text-xs font-bold w-max">Drafting</span>;
      default: return null;
    }
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
            Legal <span className="text-gradient from-blue-400 to-indigo-500">Contracts</span>
          </h1>
          <p className="text-[var(--text-secondary)] text-lg">Manage digital agreements and e-signatures.</p>
        </div>
        <button className="px-5 py-3 rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-500 text-white shadow-lg shadow-blue-500/20 hover:opacity-90 transition-opacity text-sm font-bold flex items-center gap-2">
          <RiFilePaper2Line size={18} /> New Document
        </button>
      </motion.div>

      <div className="grid grid-cols-1 gap-4">
        {contracts.map((contract, idx) => (
          <motion.div
            key={contract.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="glass-card p-6 border border-[var(--glass-border)] rounded-[1.5rem] bg-[var(--glass-bg)] hover:bg-[var(--glass-border)]/50 transition-colors flex flex-col md:flex-row md:items-center justify-between gap-6"
          >
            <div className="flex items-center gap-5 flex-1 min-w-0">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center text-xl flex-shrink-0">
                <RiFilePaper2Line />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <span className="font-mono text-xs font-bold text-[var(--text-secondary)]">{contract.id}</span>
                  <span className="w-1 h-1 rounded-full bg-[var(--glass-border)]" />
                  <span className="text-xs uppercase tracking-wider font-bold text-indigo-400">{contract.client}</span>
                </div>
                <h3 className="text-xl font-bold truncate">{contract.title}</h3>
              </div>
            </div>

            <div className="flex items-center justify-between md:justify-end gap-6 md:gap-10">
              <div className="flex flex-col gap-1 items-start md:items-end">
                <span className="text-xs font-medium text-[var(--text-secondary)] uppercase tracking-wider">Value</span>
                <span className="font-mono font-bold text-sm">{contract.value}</span>
              </div>
              <div className="flex flex-col gap-1 items-start md:items-end">
                <span className="text-xs font-medium text-[var(--text-secondary)] uppercase tracking-wider">Updated</span>
                <span className="font-medium text-sm">{contract.date}</span>
              </div>
              <div className="w-36 flex justify-end">
                {getStatusBadge(contract.status)}
              </div>
              <button className="w-10 h-10 rounded-xl bg-[var(--glass-border)] flex items-center justify-center text-[var(--text-primary)] hover:bg-[var(--text-primary)] hover:text-[var(--bg-primary)] transition-colors">
                <RiDownloadCloud2Line size={18} />
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Contracts;
