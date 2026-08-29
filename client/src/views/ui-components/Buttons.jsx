import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { RiSendPlaneLine, RiDownloadCloudLine, RiAddLine, RiSettings4Line, RiLoader4Line, RiGoogleFill, RiAppleFill, RiArrowRightSLine, RiPlayFill, RiPauseFill } from 'react-icons/ri';
import { Button } from '../../components/ui/Button';

const Buttons = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [activeToggle, setActiveToggle] = useState('monthly');

  const triggerLoader = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <div className="p-6 md:p-12 min-h-[calc(100vh-100px)] text-[var(--text-primary)] space-y-10 z-0 relative">
      <div>
        <h1 className="text-3xl font-bold text-[var(--text-primary)] mb-2">Buttons</h1>
        <p className="text-[var(--text-secondary)]">A varied collection of beautiful, interactive button styles and toggle groups.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Gradients */}
        <motion.div className="glass-card p-6 rounded-2xl border border-[var(--glass-border)] lg:col-span-2">
          <h2 className="text-lg font-semibold text-[var(--text-primary)] mb-6">Solid & Gradients</h2>
          <div className="flex flex-wrap gap-4 items-center">
            <Button variant="primary">Primary Aurora</Button>
            <Button variant="blue">Blue Gradient</Button>
            <Button variant="danger">Danger Action</Button>
            <Button variant="zinc">Dark Solid</Button>
          </div>
        </motion.div>

        {/* State Buttons */}
        <motion.div className="glass-card p-6 rounded-2xl border border-[var(--glass-border)]">
          <h2 className="text-lg font-semibold text-[var(--text-primary)] mb-6">Interactive States</h2>
          <div className="flex flex-col gap-4">
            <Button 
              onClick={triggerLoader}
              disabled={isLoading}
              variant="aurora2"
              className="w-full"
            >
              {isLoading ? <><RiLoader4Line className="animate-spin text-lg" /> Processing...</> : 'Save Configuration'}
            </Button>

            <Button 
              onClick={() => setIsPlaying(!isPlaying)}
              variant={isPlaying ? 'danger' : 'glass'}
              className="w-full"
            >
              {isPlaying ? <><RiPauseFill className="text-lg" /> Stop Server</> : <><RiPlayFill className="text-lg" /> Start Server</>}
            </Button>
          </div>
        </motion.div>

        {/* Icon & Social Buttons */}
        <motion.div className="glass-card p-6 rounded-2xl border border-[var(--glass-border)] lg:col-span-2">
          <h2 className="text-lg font-semibold text-[var(--text-primary)] mb-6">Social Auth & Block Buttons</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Button variant="white" size="xl" className="font-bold">
              <RiGoogleFill className="text-xl text-red-500" /> Continue with Google
            </Button>
            <Button variant="dark" size="xl" className="font-bold">
              <RiAppleFill className="text-xl" /> Continue with Apple
            </Button>
            <Button variant="outline" size="xl" className="justify-between group md:col-span-2">
              <span>View Advanced Settings</span>
              <RiArrowRightSLine className="text-lg text-[var(--aurora-1)] group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </motion.div>
        
        {/* Floating Action & Toggle Groups */}
        <motion.div className="glass-card p-6 rounded-2xl border border-[var(--glass-border)] lg:col-span-3">
          <h2 className="text-lg font-semibold text-[var(--text-primary)] mb-6">Floating Shapes & Toggle Groups</h2>
          <div className="flex flex-wrap gap-8 items-center bg-black/10 p-6 rounded-xl border border-[var(--glass-border)]">
            
            <div className="flex gap-4">
              <Button variant="primary" size="icon-xl" rounded="full" className="bg-gradient-to-tr from-[var(--aurora-1)] to-[var(--aurora-2)] hover:scale-110">
                <RiAddLine className="text-2xl" />
              </Button>
              <Button variant="glass" size="icon-lg" rounded="lg" className="hover:-translate-y-1">
                <RiSettings4Line className="text-xl" />
              </Button>
            </div>

            <div className="w-px h-10 bg-[var(--glass-border)]"></div>

            {/* Segmented Toggle Group */}
            <div className="flex items-center bg-[var(--glass-border)] rounded-xl p-1 shadow-inner relative z-0">
              <button 
                onClick={() => setActiveToggle('monthly')}
                className={`relative px-6 py-2 rounded-lg text-sm font-bold z-10 transition-colors ${activeToggle === 'monthly' ? 'text-white' : 'text-[var(--text-secondary)] hover:text-white'}`}
              >
                Monthly
                {activeToggle === 'monthly' && (
                  <motion.div layoutId="toggle" className="absolute inset-0 bg-gradient-to-r from-[var(--aurora-1)] to-[var(--aurora-2)] rounded-lg -z-10 shadow-md" />
                )}
              </button>
              <button 
                onClick={() => setActiveToggle('annually')}
                className={`relative px-6 py-2 rounded-lg text-sm font-bold z-10 transition-colors ${activeToggle === 'annually' ? 'text-white' : 'text-[var(--text-secondary)] hover:text-white'}`}
              >
                Annually
                {activeToggle === 'annually' && (
                  <motion.div layoutId="toggle" className="absolute inset-0 bg-gradient-to-r from-[var(--aurora-1)] to-[var(--aurora-2)] rounded-lg -z-10 shadow-md" />
                )}
              </button>
              <button 
                onClick={() => setActiveToggle('lifetime')}
                className={`relative px-6 py-2 rounded-lg text-sm font-bold z-10 transition-colors ${activeToggle === 'lifetime' ? 'text-white' : 'text-[var(--text-secondary)] hover:text-white'}`}
              >
                Lifetime
                {activeToggle === 'lifetime' && (
                  <motion.div layoutId="toggle" className="absolute inset-0 bg-gradient-to-r from-[var(--aurora-1)] to-[var(--aurora-2)] rounded-lg -z-10 shadow-md" />
                )}
              </button>
            </div>

          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Buttons;
