import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  RiTimerLine, 
  RiMusic2Line, 
  RiZzzLine, 
  RiFlashlightLine,
  RiSettingsLine,
  RiPlayFill,
  RiPauseFill,
  RiRefreshLine,
  RiFocus2Line,
  RiMoonLine
} from 'react-icons/ri';
import { Card, CardContent } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';

const FocusRoom = () => {
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [isActive, setIsActive] = useState(false);
  const [mode, setMode] = useState('Focus'); // 'Focus', 'Short Break', 'Long Break'

  useEffect(() => {
    let interval = null;
    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(time => time - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsActive(false);
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, timeLeft]);

  const toggleTimer = () => setIsActive(!isActive);
  const resetTimer = () => {
    setIsActive(false);
    setTimeLeft(mode === 'Focus' ? 25 * 60 : mode === 'Short Break' ? 5 * 60 : 15 * 60);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const progress = (timeLeft / (mode === 'Focus' ? 25 * 60 : mode === 'Short Break' ? 5 * 60 : 15 * 60)) * 100;

  return (
    <div className="p-6 md:p-12 min-h-[calc(100vh-100px)] text-[var(--text-primary)] relative overflow-hidden flex flex-col items-center justify-center">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--aurora-1)]/10 rounded-full blur-[120px] pointer-events-none"></div>

      <motion.div
        className="text-center mb-12"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <Badge color="aurora-1" rounded="full" className="mb-4 font-bold uppercase tracking-widest px-4 py-1.5">
           Deep Work Session
        </Badge>
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">Focus <span className="text-gradient from-[var(--aurora-1)] to-[var(--aurora-2)]">Room</span></h1>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full max-w-6xl">
        {/* Timer Section */}
        <div className="flex flex-col items-center">
          <div className="relative w-72 h-72 md:w-96 md:h-96 flex items-center justify-center mb-10">
             <svg className="absolute inset-0 w-full h-full -rotate-90">
                <circle
                  cx="50%" cy="50%" r="48%"
                  className="stroke-[var(--glass-border)] fill-none stroke-[8px]"
                />
                <motion.circle
                  cx="50%" cy="50%" r="48%"
                  className="stroke-[var(--aurora-1)] fill-none stroke-[8px]"
                  strokeDasharray="100 100"
                  animate={{ strokeDashoffset: 100 - progress }}
                  transition={{ duration: 0.5 }}
                  style={{ strokeLinecap: 'round' }}
                />
             </svg>
             <div className="text-center relative z-10">
                <p className="text-sm font-bold text-[var(--text-secondary)] uppercase tracking-[0.3em] mb-2">{mode}</p>
                <div className="text-7xl md:text-8xl font-mono font-bold tracking-tighter text-white drop-shadow-[0_0_20px_rgba(99,102,241,0.5)]">
                   {formatTime(timeLeft)}
                </div>
             </div>
          </div>

          <div className="flex items-center gap-6">
             <Button 
               variant="glass" 
               size="icon-lg" 
               onClick={resetTimer}
               className="rounded-2xl"
             >
                <RiRefreshLine size={24} />
             </Button>
             <Button 
               variant="primary" 
               size="icon-xl" 
               onClick={toggleTimer}
               className="rounded-3xl shadow-2xl scale-110"
             >
                {isActive ? <RiPauseFill size={40} /> : <RiPlayFill size={40} />}
             </Button>
             <Button 
               variant="glass" 
               size="icon-lg" 
               className="rounded-2xl"
             >
                <RiSettingsLine size={24} />
             </Button>
          </div>
        </div>

        {/* Controls & Ambient Section */}
        <div className="space-y-8">
           <Card variant="aurora" className="p-8 border-none">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                 <RiMusic2Line className="text-[var(--aurora-1)]" /> Ambient Scapes
              </h3>
              <div className="grid grid-cols-2 gap-4">
                 {[
                   { name: 'Rainfall', icon: RiMoonLine },
                   { name: 'Lofi Beats', icon: RiMusic2Line },
                   { name: 'White Noise', icon: RiZzzLine },
                   { name: 'Forest', icon: RiFlashlightLine },
                 ].map((sound) => (
                   <button key={sound.name} className="flex flex-col items-center gap-3 p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all group">
                      <sound.icon size={24} className="text-[var(--text-secondary)] group-hover:text-[var(--aurora-1)] transition-colors" />
                      <span className="text-xs font-bold uppercase tracking-wider">{sound.name}</span>
                   </button>
                 ))}
              </div>
           </Card>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card padding="lg" className="flex flex-col items-center text-center">
                 <RiFocus2Line size={32} className="text-[var(--aurora-2)] mb-4" />
                 <p className="text-2xl font-bold mb-1">128h</p>
                 <p className="text-[10px] text-[var(--text-secondary)] uppercase font-bold tracking-widest">Total Focus Time</p>
              </Card>
              <Card padding="lg" className="flex flex-col items-center text-center">
                 <RiTimerLine size={32} className="text-[var(--aurora-3)] mb-4" />
                 <p className="text-2xl font-bold mb-1">42</p>
                 <p className="text-[10px] text-[var(--text-secondary)] uppercase font-bold tracking-widest">Sessions Completed</p>
              </Card>
           </div>

           <div className="flex gap-2">
              {['Focus', 'Short Break', 'Long Break'].map(m => (
                 <button 
                   key={m}
                   onClick={() => {
                     setMode(m);
                     setIsActive(false);
                     setTimeLeft(m === 'Focus' ? 25 * 60 : m === 'Short Break' ? 5 * 60 : 15 * 60);
                   }}
                   className={`flex-1 py-3 rounded-xl text-xs font-bold uppercase tracking-widest transition-all ${
                     mode === m ? 'bg-[var(--aurora-1)] text-white shadow-lg shadow-[var(--aurora-1)]/30' : 'bg-white/5 border border-white/10 text-[var(--text-secondary)] hover:bg-white/10'
                   }`}
                 >
                    {m}
                 </button>
              ))}
           </div>
        </div>
      </div>
    </div>
  );
};

export default FocusRoom;
