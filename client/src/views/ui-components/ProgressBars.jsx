import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { RiCheckLine } from 'react-icons/ri';
import { Card } from '../../components/ui/Card';
import { Progress, RadialProgress } from '../../components/ui/Progress';
import { Skeleton } from '../../components/ui/Skeleton';

const ProgressBars = () => {
  const [progress, setProgress] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 5 : prev + 5));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="py-6 md:py-12 min-h-[calc(100vh-100px)] text-[var(--text-primary)] space-y-10 z-0 relative">
      <div>
        <h1 className="text-3xl font-bold text-[var(--text-primary)] mb-2">Progress Indicators</h1>
        <p className="text-[var(--text-secondary)]">Animated state trackers, structural loaders, and segmented completions.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Linear Progress Bars */}
        <Card padding="lg" className="space-y-8">
          <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-6">Linear Tracking</h2>
          
          <div className="space-y-2">
            <div className="flex justify-between text-sm text-[var(--text-primary)] font-bold">
              <span>Goal Profile Completion</span>
              <span>{Math.round(progress)}%</span>
            </div>
            <Progress value={progress} variant="aurora" showStripe={true} />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between text-sm text-emerald-400 font-bold">
              <span>Storage Used (75%)</span>
              <span>750GB / 1TB</span>
            </div>
            <Progress value={75} variant="success" size="sm" />
          </div>

          <div className="space-y-4 pt-4 border-t border-[var(--glass-border)]">
            <h3 className="text-sm font-bold text-[var(--text-secondary)] uppercase tracking-wider">Segmented / Multi-color Bar</h3>
            <div className="w-full h-3 bg-black/20 rounded-full overflow-hidden flex shadow-inner border border-[var(--glass-border)]">
               <motion.div className="h-full bg-emerald-500" initial={{ width: 0 }} animate={{ width: "40%" }} transition={{ duration: 1 }} title="System" />
               <motion.div className="h-full bg-blue-500" initial={{ width: 0 }} animate={{ width: "25%" }} transition={{ duration: 1, delay: 0.5 }} title="Apps" />
               <motion.div className="h-full bg-amber-500" initial={{ width: 0 }} animate={{ width: "15%" }} transition={{ duration: 1, delay: 1 }} title="Media" />
            </div>
            <div className="flex justify-between text-xs font-bold mt-2">
               <span className="flex items-center gap-1.5 text-emerald-500"><span className="w-2 h-2 rounded-full bg-emerald-500"></span> System (40%)</span>
               <span className="flex items-center gap-1.5 text-blue-500"><span className="w-2 h-2 rounded-full bg-blue-500"></span> Apps (25%)</span>
               <span className="flex items-center gap-1.5 text-amber-500"><span className="w-2 h-2 rounded-full bg-amber-500"></span> Media (15%)</span>
            </div>
          </div>
        </Card>

        {/* Radial Progress */}
        <Card padding="lg" className="flex flex-col items-center justify-center space-y-12 shrink-0">
          <h2 className="text-xl font-semibold text-[var(--text-primary)] w-full text-left mb-6">Radial Dynamics</h2>
          
          <div className="flex flex-wrap gap-12 items-center justify-center">
            {/* 75% Static Glowing Circle */}
            <RadialProgress value={75} variant="aurora" showValue={true} />

            {/* Dynamic Sync Circle */}
            <RadialProgress 
              value={progress} 
              variant="default" 
              size={96} 
              strokeWidth={12} 
              showValue={true} 
              indicatorClassName="text-white"
            />
          </div>
        </Card>
        
        {/* Step Wizard Progress */}
        <Card padding="lg" className="lg:col-span-2 space-y-8">
          <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-8">Step Completions</h2>
          
          <div className="relative flex justify-between items-center w-full max-w-3xl mx-auto pb-8">
             {/* Background Line */}
             <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-black/30 rounded-full z-0"></div>
             {/* Rendered Progress Line */}
             <motion.div initial={{ width: 0 }} animate={{ width: '50%' }} transition={{ duration: 1, delay: 0.5 }} className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-gradient-to-r from-[var(--aurora-1)] to-[var(--aurora-2)] rounded-full z-0 shadow-[0_0_10px_var(--aurora-1)]" />

             {/* Nodes */}
             <div className="w-10 h-10 rounded-full bg-emerald-500 text-white flex items-center justify-center font-bold z-10 shadow-lg shadow-emerald-500/20">
               <RiCheckLine className="text-xl" />
               <span className="absolute -bottom-8 text-xs font-bold text-emerald-500 w-32 text-center">Account Details</span>
             </div>
             
             <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--aurora-1)] to-[var(--aurora-2)] text-white flex items-center justify-center font-bold z-10 shadow-xl shadow-[var(--aurora-1)]/30 ring-4 ring-[var(--bg-primary)]">
               2
               <span className="absolute -bottom-8 text-xs font-bold text-[var(--text-primary)] w-32 text-center">Company Info</span>
             </div>

             <div className="w-10 h-10 rounded-full bg-[var(--glass-border)] text-[var(--text-secondary)] border-2 border-[var(--bg-primary)] flex items-center justify-center font-bold z-10">
               3
               <span className="absolute -bottom-8 text-xs font-medium text-[var(--text-secondary)] w-32 text-center">Add Payment</span>
             </div>
          </div>
        </Card>

        {/* Layout Skeletons */}
        <Card padding="lg" className="lg:col-span-2">
          <h2 className="text-xl font-semibold text-[var(--text-primary)] mb-6">Skeleton Placeholder Maps</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex gap-4 p-5 bg-black/10 rounded-xl border border-[var(--glass-border)] shadow-inner">
               <Skeleton className="w-16 h-16 rounded-full shrink-0" />
               <div className="w-full space-y-3 pt-2">
                 <Skeleton className="w-3/4 h-3" />
                 <Skeleton className="w-1/2 h-2.5" variant="shimmer" />
                 <Skeleton className="w-5/6 h-2.5" variant="shimmer" />
               </div>
            </div>
            
            <div className="space-y-4 p-5 bg-black/10 rounded-xl border border-[var(--glass-border)] shadow-inner">
               <Skeleton className="w-full h-32 rounded-xl" />
               <div className="flex justify-between items-center">
                 <Skeleton className="w-1/3 h-4" variant="shimmer" />
                 <Skeleton className="w-1/4 h-8 rounded-lg" variant="shimmer" />
               </div>
            </div>
          </div>
        </Card>

      </div>
    </div>
  );
};

export default ProgressBars;
