import React from 'react';

// Consistent heading + copy block used across the legal/info pages.
const LegalSection = ({ title, children }) => (
  <section className="mb-10 last:mb-0">
    {title && <h2 className="mb-4 text-2xl font-bold text-[var(--text-primary)]">{title}</h2>}
    <div className="space-y-4 leading-relaxed text-[var(--text-secondary)]">{children}</div>
  </section>
);

export default LegalSection;
