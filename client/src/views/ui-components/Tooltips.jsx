import React from 'react';
import { motion } from 'framer-motion';
import { Tooltip } from '../../components/ui/Tooltip';
import { Card } from '../../components/ui/Card';

const Tooltips = () => {
  return (
    <div className="py-6 md:py-12 min-h-[calc(100vh-100px)] text-[var(--text-primary)] space-y-10 z-0 relative">
      <div>
        <h1 className="text-3xl font-bold text-[var(--text-primary)] mb-2">Tooltips & Popovers</h1>
        <p className="text-[var(--text-secondary)]">Animated hover data components spanning simple bubbles to rich-content cards.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-10">

        {/* Positional */}
        <Card padding="lg" className="flex flex-col items-center justify-center space-y-12">
          <h2 className="text-xl font-semibold text-[var(--text-primary)] self-start w-full">Positional Arrows</h2>

          <div className="grid grid-cols-3 gap-4 place-items-center w-full max-w-sm pb-8">
            <div className="col-start-2">
              <Tooltip content="Tooltip on Top" position="top">
                <button className="w-16 h-16 bg-[var(--text-primary)] text-black rounded-xl text-xs font-bold tracking-widest uppercase hover:bg-gray-200 transition shadow-lg">Top</button>
              </Tooltip>
            </div>

            <div className="col-start-1 row-start-2">
              <Tooltip content="Tooltip on Left" position="left">
                <button className="w-16 h-16 bg-[var(--glass-border)] rounded-xl text-xs font-bold tracking-widest uppercase text-[var(--text-primary)] hover:bg-white/10 transition shadow-lg border border-[var(--glass-border)]">Left</button>
              </Tooltip>
            </div>

            <div className="col-start-3 row-start-2">
              <Tooltip content="Tooltip on Right" position="right">
                <button className="w-16 h-16 bg-[var(--glass-border)] rounded-xl text-xs font-bold tracking-widest uppercase text-[var(--text-primary)] hover:bg-white/10 transition shadow-lg border border-[var(--glass-border)]">Right</button>
              </Tooltip>
            </div>

            <div className="col-start-2 row-start-3">
              <Tooltip content="Tooltip on Bottom" position="bottom">
                <button className="w-16 h-16 bg-gradient-to-r from-[var(--aurora-1)] to-[var(--aurora-2)] text-white font-bold rounded-xl text-xs tracking-widest uppercase hover:opacity-90 transition shadow-lg">Bot</button>
              </Tooltip>
            </div>
          </div>
        </Card>

        {/* Rich HTML / Media Popovers */}
        <Card padding="lg" className="space-y-12 shrink-0">
          <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-8">Rich Content Popovers</h2>

          <div className="space-y-10">
            <div>
              <p className="text-[var(--text-secondary)] mb-6 text-sm">Hover over the user profile badge to see an injected HTML tooltip showing profile actions and detailed statistics.</p>

              <Tooltip
                position="top"
                content={
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center gap-3">
                      <img src="/images/user/user-1.jpg" className="w-10 h-10 rounded-full border border-zinc-600" alt="Avatar" />
                      <div>
                        <div className="text-sm font-bold text-white leading-tight">Alex Programmer</div>
                        <div className="text-xs text-emerald-400 font-medium">@alexpandora</div>
                      </div>
                    </div>
                    <p className="text-xs text-zinc-400 border-t border-zinc-700/50 pt-2">Fullstack Engineer. Building scalable microservices.</p>
                    <button className="w-full py-1.5 mt-1 bg-white text-black text-xs font-bold rounded-lg hover:bg-gray-200">Follow Profile</button>
                  </div>
                }
              >
                <button className="flex items-center gap-2 px-4 py-2 bg-black/20 border border-[var(--glass-border)] rounded-full text-sm font-bold text-white hover:bg-white/5 transition">
                  <img src="/images/user/user-1.jpg" className="w-6 h-6 rounded-full" alt="Avatar" /> @alexpandora
                </button>
              </Tooltip>
            </div>

            <div className="border-t border-[var(--glass-border)] pt-8">
              <p className="text-[var(--text-secondary)] text-sm mb-4 leading-relaxed">
                Tooltips are perfect for contextual hints inside paragraphs. By wrapping <Tooltip content="The visual interface"><span className="text-[var(--aurora-1)] border-b border-[var(--aurora-1)] cursor-help font-medium">UI Elements</span></Tooltip> with a tooltip wrapper, we keep documentation minimalist while still offering profound <Tooltip content="Extended knowledge regarding concepts"><span className="text-[var(--aurora-2)] border-b border-[var(--aurora-2)] cursor-help font-medium">depth</span></Tooltip> precisely when the user needs it.
              </p>
            </div>
          </div>
        </Card>

      </div>
    </div>
  );
};

export default Tooltips;
