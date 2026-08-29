import React from 'react';
import { 
  RiHome4Line, 
  RiFolder2Line, 
  RiDashboard2Line, 
  RiSettingsLine,
  RiArrowRightLine
} from 'react-icons/ri';
import Link from 'next/link';
import { Card } from '../../components/ui/Card';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
  BreadcrumbEllipsis
} from '../../components/ui/Breadcrumb';

const Breadcrumbs = () => {
  return (
    <div className="p-6 md:p-12 min-h-[calc(100vh-100px)] text-[var(--text-primary)] space-y-10 z-0 relative">
      <div>
        <h1 className="text-3xl font-bold text-[var(--text-primary)] mb-2">Breadcrumbs</h1>
        <p className="text-[var(--text-secondary)]">Clear structural path navigation showing localized contextual hierarchy.</p>
      </div>
      
      <div className="grid grid-cols-1 gap-8">
        
        {/* Standard Clean Navigation */}
        <Card padding="lg">
          <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-6">Standard Structural Path</h2>
          
          <Breadcrumb className="bg-black/30 px-6 py-4 rounded-xl border border-white/5 shadow-inner w-fit">
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link href="/dashboard" className="flex items-center group">
                  <RiHome4Line className="mr-2 text-lg group-hover:drop-shadow-[0_0_8px_white]" /> Home
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink>Operations</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink>Projects</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Alpha Redesign</BreadcrumbPage>
            </BreadcrumbItem>
          </Breadcrumb>
        </Card>

        {/* Directory / Codebase Style */}
        <Card padding="lg">
          <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-6">Code & Directory Tree Style</h2>
          
          <Breadcrumb className="font-mono text-sm tracking-tight border border-[var(--glass-border)] rounded-xl py-3 px-5 bg-[#0d1117] overflow-x-auto no-scrollbar shadow-inner">
            <BreadcrumbItem>
              <RiFolder2Line className="text-blue-500 text-lg mr-2" />
              <BreadcrumbLink className="text-zinc-400 hover:text-white hover:underline">src</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="mx-2 text-zinc-600 font-bold opacity-100">/</BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink className="text-zinc-400 hover:text-white hover:underline">components</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="mx-2 text-zinc-600 font-bold opacity-100">/</BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink className="text-zinc-400 hover:text-white hover:underline">charts</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="mx-2 text-zinc-600 font-bold opacity-100">/</BreadcrumbSeparator>
            <BreadcrumbItem>
              <span className="text-amber-300 font-bold py-1 px-2 bg-amber-500/10 border border-amber-500/20 rounded-md ring-1 ring-amber-500/50">RadarAnalytics.jsx</span>
            </BreadcrumbItem>
          </Breadcrumb>
        </Card>

        {/* Dense Collapsed Architecture Tracker */}
        <Card padding="lg">
          <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-6">Condensed Dashboard Navigation</h2>
          
          <Breadcrumb className="bg-black/10 border border-[var(--glass-border)] rounded-2xl w-full p-2 items-center shadow-xl max-w-2xl">
            <BreadcrumbItem>
              <BreadcrumbLink className="flex items-center gap-2 px-3 py-2 hover:bg-white/5 rounded-xl transition">
                <RiDashboard2Line /> System Base
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="mx-1 opacity-100">
              <RiArrowRightLine className="text-[var(--glass-border)]" />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbEllipsis />
            </BreadcrumbItem>
            <BreadcrumbSeparator className="mx-1 opacity-100">
              <RiArrowRightLine className="text-[var(--glass-border)]" />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink className="flex items-center gap-2 px-3 py-2 hover:bg-white/5 rounded-xl transition">
                <RiSettingsLine /> User Permissions
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator className="mx-1 opacity-100">
              <RiArrowRightLine className="text-[var(--glass-border)]" />
            </BreadcrumbSeparator>
            <BreadcrumbItem className="ml-2">
              <span className="px-4 py-2 text-black bg-white rounded-xl shadow-md cursor-default shadow-white/20">
                API Keys Generation
              </span>
            </BreadcrumbItem>
          </Breadcrumb>
        </Card>

      </div>
    </div>
  );
};

export default Breadcrumbs;
