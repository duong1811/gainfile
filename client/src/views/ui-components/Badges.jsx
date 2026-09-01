import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RiStarLine, RiCheckLine, RiErrorWarningLine, RiTimeLine, RiCloseLine, RiFacebookCircleFill, RiTwitterXLine, RiGithubFill } from 'react-icons/ri';
import { Badge, badgeVariants } from '../../components/ui/Badge';
import { cn } from '../../lib/utils';

const Badges = () => {
  const [tags, setTags] = useState(['React', 'TailwindCSS', 'Framer Motion', 'Vite']);

  const removeTag = (tagToRemove) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  return (
    <div className="py-6 md:py-12 min-h-[calc(100vh-100px)] text-[var(--text-primary)] space-y-10 z-0 relative">
      <div>
        <h1 className="text-3xl font-bold text-[var(--text-primary)] mb-2">Badges & Tags</h1>
        <p className="text-[var(--text-secondary)]">Small status indicators, interactive tags, and category labels.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Soft Badges */}
        <motion.div className="glass-card p-6 rounded-2xl border border-[var(--glass-border)]">
          <h2 className="text-lg font-semibold text-[var(--text-primary)] mb-6">Soft Badges</h2>
          <div className="flex flex-wrap gap-3">
            <Badge color="neutral">Neutral</Badge>
            <Badge color="primary">Primary</Badge>
            <Badge color="success">Success</Badge>
            <Badge color="warning">Warning</Badge>
            <Badge color="danger">Danger</Badge>
            <Badge color="purple">Info</Badge>
          </div>
        </motion.div>

        {/* Dismissible Tags */}
        <motion.div className="glass-card p-6 rounded-2xl border border-[var(--glass-border)]">
          <h2 className="text-lg font-semibold text-[var(--text-primary)] mb-6">Interactive Tags</h2>
          <div className="flex flex-wrap gap-3 p-4 bg-black/10 rounded-xl min-h-[80px]">
            <AnimatePresence>
              {tags.map((tag) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className={cn(badgeVariants({ variant: "interactive" }))}
                >
                  {tag}
                  <button onClick={() => removeTag(tag)} className="hover:text-rose-400 p-0.5 rounded-full hover:bg-black/20 transition-colors">
                    <RiCloseLine className="text-xs" />
                  </button>
                </motion.span>
              ))}
              {tags.length === 0 && (
                <button onClick={() => setTags(['React', 'TailwindCSS', 'Framer Motion', 'Vite'])} className="text-sm text-[var(--aurora-1)] font-semibold hover:underline">Reset Tags</button>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Icon Badges */}
        <motion.div className="glass-card p-6 rounded-2xl border border-[var(--glass-border)] md:col-span-2">
          <h2 className="text-lg font-semibold text-[var(--text-primary)] mb-6">Icon Badges & Social Badges</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-sm text-[var(--text-secondary)]">Status Icons</h3>
              <div className="flex flex-wrap gap-3">
                <Badge color="warning" className="gap-1.5">
                  <RiStarLine className="text-sm" /> Premium
                </Badge>
                <Badge color="success" className="gap-1.5">
                  <RiCheckLine className="text-sm" /> Verified
                </Badge>
                <Badge color="danger" className="gap-1.5">
                  <RiErrorWarningLine className="text-sm" /> Blocked
                </Badge>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-sm text-[var(--text-secondary)]">Platform Indication</h3>
              <div className="flex flex-wrap gap-3">
                <Badge variant="social" color="facebook">
                  <RiFacebookCircleFill className="text-base" /> Facebook
                </Badge>
                <Badge variant="social" color="twitter">
                  <RiTwitterXLine className="text-base" /> X (Twitter)
                </Badge>
                <Badge variant="social" color="github">
                  <RiGithubFill className="text-base" /> Github
                </Badge>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Notification Dots & Avatar Badges */}
        <motion.div className="glass-card p-6 rounded-2xl border border-[var(--glass-border)] md:col-span-2">
          <h2 className="text-lg font-semibold text-[var(--text-primary)] mb-6">Indicator Dots & Avatars</h2>
          <div className="flex flex-wrap gap-10 items-center p-8 bg-black/10 rounded-xl border border-[var(--glass-border)]">

            {/* Pure Status Dot */}
            <div className="flex gap-4">
              <span className="flex items-center gap-2 text-sm font-medium text-[var(--text-primary)]">
                <Badge variant="dot" color="online" /> Online
              </span>
              <span className="flex items-center gap-2 text-sm font-medium text-[var(--text-primary)]">
                <Badge variant="dot" color="dnd" /> Do Not Disturb
              </span>
              <span className="flex items-center gap-2 text-sm font-medium text-[var(--text-primary)]">
                <Badge variant="dot" color="offline" /> Offline
              </span>
            </div>

            <div className="w-px h-10 bg-[var(--glass-border)]"></div>

            {/* Overlapping Badges */}
            <div className="flex gap-8">
              <div className="relative">
                <button className="px-4 py-2 bg-[var(--glass-border)] text-[var(--text-primary)] rounded-lg font-semibold text-sm hover:bg-white/10 transition">
                  Inbox
                </button>
                <Badge variant="overlap">
                  99+
                </Badge>
              </div>

              <div className="relative inline-flex items-center p-1 rounded-full bg-gradient-to-r from-[var(--aurora-1)] to-[var(--aurora-2)]">
                <img src="/images/user/user-1.jpg" className="w-12 h-12 rounded-full border-2 border-[var(--bg-primary)]" alt="avatar" />
                <Badge variant="dot" color="avatar" size="avatar" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Badges;
