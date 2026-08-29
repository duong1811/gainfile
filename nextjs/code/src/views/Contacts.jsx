import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { RiContactsLine, RiMailLine, RiPhoneLine, RiSearchLine } from 'react-icons/ri';

const Contacts = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const contacts = [
    { id: 1, name: 'Emma Thompson', role: 'Design Lead', company: 'Creative Studio', email: 'emma@creativestudio.com', phone: '+1 (555) 123-4567', avatar: 'ET' },
    { id: 2, name: 'Liam Chen', role: 'Backend Dev', company: 'TechNova', email: 'liam@technova.io', phone: '+1 (555) 987-6543', avatar: 'LC' },
    { id: 3, name: 'Sophia Miller', role: 'Product Manager', company: 'Trackify', email: 'sophia@trackify.app', phone: '+1 (555) 456-7890', avatar: 'SM' },
    { id: 4, name: 'James Wilson', role: 'Marketing Head', company: 'Global Reach', email: 'james@globalreach.net', phone: '+1 (555) 234-5678', avatar: 'JW' },
    { id: 5, name: 'Olivia Garcia', role: 'UX Researcher', company: 'DesignWorks', email: 'olivia@designworks.com', phone: '+1 (555) 345-6789', avatar: 'OG' },
    { id: 6, name: 'Noah Patel', role: 'Data Scientist', company: 'Analytics Inc', email: 'noah@analyticsinc.io', phone: '+1 (555) 876-5432', avatar: 'NP' }
  ];

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    contact.company.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-6 md:p-12 min-h-[calc(100vh-100px)] text-[var(--text-primary)] relative">
      <motion.div
        className="mb-10 flex flex-col md:flex-row md:items-center justify-between gap-4"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-2 tracking-tight">
            Directory <span className="text-gradient from-blue-400 to-indigo-500">Contacts</span>
          </h1>
          <p className="text-[var(--text-secondary)] text-lg">Central hub for internal and external connections.</p>
        </div>

        <div className="relative w-full md:w-auto mt-4 md:mt-0">
          <RiSearchLine className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--text-secondary)]" size={20} />
          <input
            type="text"
            placeholder="Search contacts..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full md:w-80 bg-[var(--glass-border)] border border-[var(--glass-border)] rounded-2xl py-3 pl-12 pr-4 text-[var(--text-primary)] focus:outline-none focus:border-indigo-500 transition-colors"
          />
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredContacts.map((contact, idx) => (
          <motion.div
            key={contact.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.05 }}
            className="glass-card p-6 rounded-[2rem] border border-[var(--glass-border)] bg-[var(--glass-bg)] hover:border-indigo-500/50 hover:shadow-lg transition-all group"
          >
            <div className="flex items-start justify-between mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-xl font-bold font-mono shadow-md">
                {contact.avatar}
              </div>
              <span className="text-xs font-bold px-3 py-1 bg-[var(--glass-border)] text-[var(--text-secondary)] rounded-lg">
                {contact.company}
              </span>
            </div>

            <h3 className="text-xl font-bold mb-1 group-hover:text-indigo-400 transition-colors">{contact.name}</h3>
            <p className="text-[var(--text-secondary)] text-sm font-medium mb-6">{contact.role}</p>

            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <div className="w-8 h-8 rounded-xl bg-[var(--glass-border)] flex items-center justify-center text-[var(--text-secondary)]"><RiMailLine size={16} /></div>
                <span className="truncate flex-1 text-[var(--text-secondary)] font-medium hover:text-[var(--text-primary)] cursor-pointer transition-colors">{contact.email}</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <div className="w-8 h-8 rounded-xl bg-[var(--glass-border)] flex items-center justify-center text-[var(--text-secondary)]"><RiPhoneLine size={16} /></div>
                <span className="font-mono text-[var(--text-secondary)] hover:text-[var(--text-primary)] cursor-pointer transition-colors">{contact.phone}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {filteredContacts.length === 0 && (
        <div className="text-center py-20 text-[var(--text-secondary)] flex flex-col items-center">
          <RiContactsLine size={48} className="mb-4 opacity-50" />
          <p className="font-bold text-lg">No contacts found</p>
        </div>
      )}
    </div>
  );
};

export default Contacts;
