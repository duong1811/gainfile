import React from 'react';
import { motion } from 'framer-motion';
import Topbar from './Topbar';
import HorizontalMenu from './HorizontalMenu';
import Bottombar from './Footer';

// Shared shell for standalone public pages (legal, info, FAQ, API docs, ...)
// so each one doesn't have to re-implement the header/footer boilerplate.
const PublicPageLayout = ({ eyebrow, title, description, children, contentClassName = 'max-w-4xl' }) => (
  <div className="app-container">
    <div className="aurora-bg" />
    <motion.main
      className="main-content flex flex-col"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <Topbar isHorizontalMenu>
        <HorizontalMenu />
      </Topbar>

      <div className={`mx-auto w-full flex-1 px-4 py-12 md:px-10 md:py-16 ${contentClassName}`}>
        <div className="mb-12 text-center">
          {eyebrow && (
            <span className="mb-4 inline-block rounded-full border border-[var(--glass-border)] bg-[var(--glass-bg)] px-4 py-1 text-xs font-bold uppercase tracking-wider text-[var(--aurora-1)]">
              {eyebrow}
            </span>
          )}
          <h1 className="text-4xl font-extrabold tracking-tight text-[var(--text-primary)] md:text-5xl">{title}</h1>
          {description && <p className="mx-auto mt-4 max-w-2xl text-lg text-[var(--text-secondary)]">{description}</p>}
        </div>
        {children}
      </div>

      <Bottombar />
    </motion.main>
  </div>
);

export default PublicPageLayout;
