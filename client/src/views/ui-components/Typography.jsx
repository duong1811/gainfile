import React from 'react';
import { motion } from 'framer-motion';
import { RiCheckDoubleLine } from 'react-icons/ri';
import { Card } from '../../components/ui/Card';
import {
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyH4,
  TypographyP,
  TypographyBlockquote,
  TypographyInlineCode,
  TypographyKbd,
  TypographyGradient
} from '../../components/ui/Typography';

const TypographyDemo = () => {
  return (
    <div className="py-6 md:py-12 min-h-[calc(100vh-100px)] text-[var(--text-primary)] space-y-10 z-0 relative">
      <div>
        <h1 className="text-3xl font-bold text-[var(--text-primary)] mb-2">Typography Setup</h1>
        <p className="text-[var(--text-secondary)]">Explore fonts, text-scale hierarchy, gradients, lists, and structural emphasis.</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Core Headers */}
        <Card padding="lg" className="space-y-8 lg:row-span-2">
          <h2 className="text-xs font-bold tracking-[0.2em] text-[var(--aurora-1)] uppercase border-b border-[var(--glass-border)] pb-3 mb-8">Header Hierarchy (H1 - H4)</h2>
          
          <div className="space-y-6">
            <div className="group">
              <span className="text-xs font-bold text-zinc-500 font-mono mb-2 block">// TypographyH1</span>
              <TypographyH1>The quick brown fox</TypographyH1>
            </div>
            <div className="group border-t border-[var(--glass-border)] pt-4">
              <span className="text-xs font-bold text-zinc-500 font-mono mb-2 block">// TypographyH2</span>
              <TypographyH2>Jumps over the lazy dog</TypographyH2>
            </div>
            <div className="group border-t border-[var(--glass-border)] pt-4">
              <span className="text-xs font-bold text-zinc-500 font-mono mb-2 block">// TypographyH3</span>
              <TypographyH3>Sphinx of black quartz</TypographyH3>
            </div>
            <div className="group border-t border-[var(--glass-border)] pt-4">
              <span className="text-xs font-bold text-zinc-500 font-mono mb-2 block">// TypographyH4</span>
              <TypographyH4>Judge my vow</TypographyH4>
            </div>
          </div>
        </Card>

        {/* Display Gradients */}
        <Card padding="lg" className="flex flex-col justify-center bg-black/20 text-center relative overflow-hidden">
          <div className="absolute -top-32 -left-32 w-64 h-64 border border-[var(--aurora-1)] opacity-20 rounded-full blur-2xl"></div>
          <h2 className="text-[10px] font-bold tracking-[0.2em] text-[var(--text-secondary)] uppercase mb-6 relative z-10">Hero Text / Gradient Clips</h2>
          
          <TypographyGradient className="text-5xl sm:text-6xl font-black tracking-tighter relative z-10 hero-glow">
             Next Generation UI.
          </TypographyGradient>
          <TypographyP className="max-w-sm mx-auto mt-4 font-medium relative z-10">
            Paint with light. Fluid gradients mask header boundaries creating a stunning focal point entirely in CSS.
          </TypographyP>
        </Card>

        {/* Prose & Layout Text */}
        <Card padding="lg" className="space-y-6">
           <h2 className="text-xs font-bold tracking-[0.2em] text-[var(--aurora-1)] uppercase border-b border-[var(--glass-border)] pb-3 mb-6">Paragraph & Inline Styles</h2>
           
           <div className="space-y-6 text-[15px]">
             
             <TypographyP className="first-letter:text-5xl first-letter:font-black first-letter:text-white first-letter:mr-2 flex-initial first-letter:float-left first-letter:bg-black/40 first-letter:p-2 first-letter:rounded-xl first-letter:border first-letter:border-white/10">
               <strong className="text-[var(--text-primary)]">Drop caps</strong> instantly draw the user's eye, bringing editorial polish to standard blocks of text. The spacing ensures maximum legibility while defining the start of an important section seamlessly without interrupting the natural flow of reading vertically down the screen edge.
             </TypographyP>

             <TypographyBlockquote>
               <span className="text-lg italic text-[var(--text-primary)]">"Any fool can write code that a computer can understand. Good programmers write code that humans can understand."</span>
               <footer className="text-xs text-[var(--text-secondary)] mt-3 not-italic font-bold tracking-widest uppercase">— Martin Fowler</footer>
             </TypographyBlockquote>
             
             <TypographyP>
               In a paragraph, you may need to mention system commands or directory paths. Use a small tag: <TypographyInlineCode>npm install</TypographyInlineCode> to differentiate it. Keyboard shortcuts look great formatted like this: <TypographyKbd>Ctrl + Shift + C</TypographyKbd>.
             </TypographyP>
           </div>
        </Card>

        {/* Structured Lists */}
        <Card padding="lg" className="lg:col-span-2">
           <h2 className="text-xs font-bold tracking-[0.2em] text-[var(--aurora-1)] uppercase border-b border-[var(--glass-border)] pb-3 mb-8">Structured Data Lists</h2>
           
           <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
             
             {/* Check List */}
             <div>
               <h3 className="text-sm font-bold text-white mb-6 tracking-wide">Included Features</h3>
               <ul className="space-y-4">
                 {['100GB Fast NVME Storage', 'Instant Global CDN Replication', 'Priority 24/7 Slack Support', 'Free Wildcard SSL Configs'].map((item, idx) => (
                   <li key={idx} className="flex items-center gap-4 text-sm font-medium text-[var(--text-secondary)]">
                     <span className="w-6 h-6 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/20"><RiCheckDoubleLine /></span>
                     <span>{item}</span>
                   </li>
                 ))}
               </ul>
             </div>

             {/* Outlined / Numbered Stack List */}
             <div>
               <h3 className="text-sm font-bold text-white mb-6 tracking-wide">Deployment Steps</h3>
               <ol className="relative border-l border-[var(--glass-border)] ml-3 space-y-8">
                 <li className="pl-6 relative text-sm">
                   <div className="absolute w-6 h-6 bg-[var(--bg-primary)] rounded-full -left-3 border-2 border-[var(--aurora-1)] flex items-center justify-center text-[10px] font-black text-white shadow-[0_0_10px_var(--aurora-1)]">1</div>
                   <h4 className="font-bold text-[var(--text-primary)] leading-none mb-1 mt-1">Compile Build Assets</h4>
                   <p className="text-[var(--text-secondary)] text-xs">Run production optimizer pipeline securely.</p>
                 </li>
                 <li className="pl-6 relative text-sm">
                   <div className="absolute w-6 h-6 bg-[var(--glass-border)] rounded-full -left-3 border-2 border-[var(--bg-primary)] flex items-center justify-center text-[10px] font-bold text-[var(--text-primary)]">2</div>
                   <h4 className="font-bold text-[var(--text-primary)] leading-none mb-1 mt-1">Docker Image Generation</h4>
                   <p className="text-[var(--text-secondary)] text-xs">Container spins off base alpine linux node.</p>
                 </li>
                 <li className="pl-6 relative text-sm">
                   <div className="absolute w-6 h-6 bg-[var(--glass-border)] rounded-full -left-3 border-2 border-[var(--bg-primary)] flex items-center justify-center text-[10px] font-bold text-[var(--text-primary)]">3</div>
                   <h4 className="font-bold text-[var(--text-primary)] leading-none mb-1 mt-1">Registry Synchronization</h4>
                   <p className="text-[var(--text-secondary)] text-xs opacity-50">Awaiting steps 1 and 2 to finalize states.</p>
                 </li>
               </ol>
             </div>

           </div>
        </Card>

      </div>
    </div>
  );
};

export default TypographyDemo;
