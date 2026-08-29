import React from 'react';
import { cn } from '../../lib/utils';

const TypographyH1 = ({ className, children }) => (
  <h1 className={cn("text-4xl md:text-5xl font-extrabold text-[var(--text-primary)] tracking-tight", className)}>
    {children}
  </h1>
);

const TypographyH2 = ({ className, children }) => (
  <h2 className={cn("text-3xl md:text-4xl font-bold text-[var(--text-primary)] tracking-tight", className)}>
    {children}
  </h2>
);

const TypographyH3 = ({ className, children }) => (
  <h3 className={cn("text-2xl md:text-3xl font-bold text-[var(--text-primary)]", className)}>
    {children}
  </h3>
);

const TypographyH4 = ({ className, children }) => (
  <h4 className={cn("text-xl md:text-2xl font-bold text-zinc-200", className)}>
    {children}
  </h4>
);

const TypographyP = ({ className, children }) => (
  <p className={cn("leading-relaxed text-[var(--text-secondary)]", className)}>
    {children}
  </p>
);

const TypographyBlockquote = ({ className, children }) => (
  <blockquote className={cn("my-6 pl-4 border-l-4 border-[var(--aurora-1)] pt-1 pb-1", className)}>
    {children}
  </blockquote>
);

const TypographyInlineCode = ({ className, children }) => (
  <code className={cn("px-2 py-0.5 mx-1 bg-black/40 text-emerald-400 rounded-md font-mono text-sm border border-[var(--glass-border)]", className)}>
    {children}
  </code>
);

const TypographyKbd = ({ className, children }) => (
  <kbd className={cn("px-2 py-[2px] mx-1 border border-[var(--glass-border)] text-[var(--text-primary)] rounded-md font-sans text-xs shadow-[0_2px_0_var(--glass-border)] font-bold bg-black/50", className)}>
    {children}
  </kbd>
);

const TypographyGradient = ({ className, children, from = 'var(--aurora-1)', via = 'var(--aurora-2)', to = 'var(--aurora-3)' }) => (
  <span 
    className={cn("text-transparent bg-clip-text bg-gradient-to-r pb-1", className)}
    style={{ backgroundImage: `linear-gradient(to right, ${from}, ${via}, ${to})` }}
  >
    {children}
  </span>
);

export {
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyH4,
  TypographyP,
  TypographyBlockquote,
  TypographyInlineCode,
  TypographyKbd,
  TypographyGradient
};
