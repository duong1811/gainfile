import React from 'react';
import { motion } from 'framer-motion';
import { RiDiscussLine, RiPushpinLine, RiChat3Line, RiArrowRightSLine } from 'react-icons/ri';

const Discussions = () => {
  const topics = [
    { id: 1, title: 'Release v1.0 Architecture Decisions', author: 'Alice S.', replies: 24, views: 342, pinned: true, category: 'Engineering' },
    { id: 2, name: 'Upcoming Company Retreat Suggestions', author: 'HR Dept', replies: 89, views: 512, pinned: true, category: 'General' },
    { id: 3, title: 'New UI component library guidelines', author: 'Design Team', replies: 12, views: 88, pinned: false, category: 'Design' },
    { id: 4, title: 'Issue setting up local dev environment on M2 Mac', author: 'John D.', replies: 5, views: 45, pinned: false, category: 'Help' },
    { id: 5, title: 'Client X Feature Request Prioritization', author: 'Product', replies: 31, views: 120, pinned: false, category: 'Product' },
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
            Team <span className="text-gradient from-indigo-400 to-purple-500">Discussions</span>
          </h1>
          <p className="text-[var(--text-secondary)] text-lg">Internal forums for knowledge sharing and debate.</p>
        </div>
        <button className="px-5 py-3 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-500 text-white shadow-lg shadow-indigo-500/20 hover:opacity-90 transition-opacity text-sm font-bold flex items-center gap-2">
          <RiDiscussLine size={18} /> New Topic
        </button>
      </motion.div>

      <div className="flex flex-col gap-4">
        {topics.map((topic, idx) => (
          <motion.div
            key={topic.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.1 }}
            className={`glass-card p-5 rounded-2xl border transition-all flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer hover:shadow-lg ${topic.pinned ? 'border-purple-500/30 bg-gradient-to-r from-[var(--glass-bg)] to-purple-500/5' : 'border-[var(--glass-border)] hover:border-indigo-500/30 bg-[var(--glass-bg)]'
              }`}
          >
            <div className="flex items-start gap-4 flex-1">
              <div className="mt-1">
                {topic.pinned ? (
                  <RiPushpinLine className="text-purple-500 w-6 h-6" />
                ) : (
                  <div className="w-10 h-10 rounded-full bg-[var(--glass-border)] flex items-center justify-center font-bold text-sm">
                    {topic.author.charAt(0)}
                  </div>
                )}
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="px-2 py-0.5 rounded text-[10px] uppercase font-bold tracking-wider bg-[var(--bg-primary)] border border-[var(--glass-border)] text-[var(--text-secondary)]">
                    {topic.category}
                  </span>
                  <span className="text-xs text-[var(--text-secondary)] font-medium">Started by {topic.author}</span>
                </div>
                <h3 className="text-xl font-bold hover:text-indigo-400 transition-colors">{topic.title || topic.name}</h3>
              </div>
            </div>

            <div className="flex items-center gap-6 ml-14 md:ml-0">
              <div className="flex items-center gap-4 text-sm font-bold text-[var(--text-secondary)]">
                <div className="flex flex-col items-center">
                  <span className="text-[var(--text-primary)]">{topic.replies}</span>
                  <span className="text-[10px] uppercase tracking-widest font-normal">Replies</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-[var(--text-primary)]">{topic.views}</span>
                  <span className="text-[10px] uppercase tracking-widest font-normal">Views</span>
                </div>
              </div>
              <div className="w-10 h-10 rounded-xl bg-[var(--glass-border)] flex items-center justify-center text-[var(--text-secondary)] hover:bg-[var(--text-primary)] hover:text-[var(--bg-primary)] transition-all ml-2 hidden sm:flex">
                <RiArrowRightSLine size={20} />
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Discussions;
