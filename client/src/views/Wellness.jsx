import React from 'react';
import { motion } from 'framer-motion';
import { 
  RiHeartPulseLine, 
  RiMoonLine, 
  RiSunLine, 
  RiCupLine,
  RiWindyLine,
  RiEmotionHappyLine,
  RiArrowRightUpLine,
  RiArrowRightDownLine
} from 'react-icons/ri';
import ReactECharts from 'echarts-for-react';
import { useTheme } from '../context/ThemeContext';
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Progress } from '../components/ui/Progress';

const Wellness = () => {
  const { isDarkMode } = useTheme();
  const textColor = isDarkMode ? '#ffffff' : '#1f2937';

  const healthOption = {
    backgroundColor: 'transparent',
    tooltip: { trigger: 'axis' },
    xAxis: { 
      type: 'category', 
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      axisLabel: { color: textColor }
    },
    yAxis: { show: false },
    grid: { left: 10, right: 10, bottom: 20, top: 20 },
    series: [
      {
        name: 'Sleep Score',
        type: 'line',
        smooth: true,
        data: [78, 85, 72, 90, 88, 95, 82],
        lineStyle: { color: '#818cf8', width: 4 },
        symbol: 'none',
        areaStyle: {
          color: {
            type: 'linear', x: 0, y: 0, x2: 0, y2: 1,
            colorStops: [{ offset: 0, color: 'rgba(129, 140, 248, 0.3)' }, { offset: 1, color: 'transparent' }]
          }
        }
      }
    ]
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  return (
    <div className="py-6 md:py-12 min-h-[calc(100vh-100px)] text-[var(--text-primary)] relative">
      <motion.div
        className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <div>
          <h1 className="text-4xl md:text-6xl font-bold mb-2 tracking-tight">
            Wellness <span className="text-gradient from-emerald-400 to-cyan-500">Tracker</span>
          </h1>
          <p className="text-[var(--text-secondary)] text-lg font-medium">Monitor your biological performance and mental clarity.</p>
        </div>
        <div className="flex gap-2">
            <Badge color="emerald" className="px-4 py-2 font-bold uppercase tracking-widest flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div> All Systems Nominal
            </Badge>
        </div>
      </motion.div>

      <motion.div 
        className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Main Health Overview */}
        <Card className="lg:col-span-2 overflow-hidden" padding="none">
           <div className="p-8 pb-0">
              <div className="flex justify-between items-start mb-8">
                 <div>
                    <CardTitle className="text-2xl mb-1">Health Performance Index</CardTitle>
                    <CardDescription className="font-bold">Average wellness score over the last week</CardDescription>
                 </div>
                 <div className="text-right">
                    <p className="text-4xl font-bold text-[var(--aurora-1)]">92%</p>
                    <p className="text-[10px] text-emerald-500 font-bold uppercase tracking-widest flex items-center justify-end gap-1">
                        +3.2% <RiArrowRightUpLine />
                    </p>
                 </div>
              </div>
           </div>
           <div className="h-64 w-full">
              <ReactECharts option={healthOption} style={{ height: '100%', width: '100%' }} />
           </div>
        </Card>

        {/* Daily Stats */}
        <div className="space-y-6">
           <Card variant="interactive" padding="lg" className="flex items-center gap-6">
              <div className="w-14 h-14 rounded-2xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center shadow-inner">
                 <RiMoonLine size={28} />
              </div>
              <div className="flex-1">
                 <p className="text-xs font-bold text-[var(--text-secondary)] uppercase tracking-widest mb-1">Sleep Quality</p>
                 <p className="text-2xl font-bold">7h 45m</p>
                 <Progress value={85} color="aurora-1" size="xs" className="mt-3" />
              </div>
           </Card>

           <Card variant="interactive" padding="lg" className="flex items-center gap-6">
              <div className="w-14 h-14 rounded-2xl bg-rose-500/10 text-rose-500 flex items-center justify-center shadow-inner">
                 <RiHeartPulseLine size={28} />
              </div>
              <div className="flex-1">
                 <p className="text-xs font-bold text-[var(--text-secondary)] uppercase tracking-widest mb-1">Avg Heart Rate</p>
                 <p className="text-2xl font-bold">64 BPM</p>
                 <Progress value={64} color="rose" size="xs" className="mt-3" />
              </div>
           </Card>

           <Card variant="interactive" padding="lg" className="flex items-center gap-6">
              <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 text-cyan-500 flex items-center justify-center shadow-inner">
                 <RiCupLine size={28} />
              </div>
              <div className="flex-1">
                 <p className="text-xs font-bold text-[var(--text-secondary)] uppercase tracking-widest mb-1">Hydration</p>
                 <p className="text-2xl font-bold">2.4 / 3L</p>
                 <Progress value={80} color="emerald" size="xs" className="mt-3" />
              </div>
           </Card>
        </div>

        {/* Mental Clarity Section */}
        <Card className="lg:col-span-1">
           <CardHeader>
              <CardTitle>Mood Journal</CardTitle>
           </CardHeader>
           <CardContent className="space-y-6">
              <div className="flex justify-between gap-2">
                 {['😔', '😐', '😊', '🤩'].map((emoji, i) => (
                    <button key={i} className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-2xl hover:bg-white/10 hover:scale-110 transition-all">
                       {emoji}
                    </button>
                 ))}
              </div>
              <div className="p-4 rounded-2xl bg-[var(--glass-border)] border border-[var(--glass-border)]">
                 <p className="text-sm font-bold mb-2">AI Summary</p>
                 <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                    You've been consistently "Productive" but "Stressed" this morning. A 5-minute breathing exercise is recommended.
                 </p>
              </div>
              <button className="w-full py-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-cyan-500 text-white font-bold text-sm shadow-xl shadow-emerald-500/20">
                 Start Guided Meditation
              </button>
           </CardContent>
        </Card>

        {/* Activity Breakdown */}
        <Card className="lg:col-span-2">
           <CardHeader className="flex-row justify-between items-center mb-6">
              <CardTitle>Biological Insights</CardTitle>
              <RiWindyLine className="text-[var(--text-secondary)]" />
           </CardHeader>
           <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                 <div>
                    <div className="flex justify-between text-xs mb-2 font-bold">
                       <span className="text-[var(--text-secondary)] uppercase tracking-widest">Stress Level</span>
                       <span className="text-emerald-500">Low (12%)</span>
                    </div>
                    <Progress value={12} color="emerald" size="sm" />
                 </div>
                 <div>
                    <div className="flex justify-between text-xs mb-2 font-bold">
                       <span className="text-[var(--text-secondary)] uppercase tracking-widest">Focus Level</span>
                       <span className="text-amber-500">Medium (64%)</span>
                    </div>
                    <Progress value={64} color="amber" size="sm" />
                 </div>
              </div>
              <div className="space-y-4">
                 {[
                   { label: 'Steps Today', value: '8,432', goal: '10,000' },
                   { label: 'Active Minutes', value: '45m', goal: '60m' },
                   { label: 'Calories Burnt', value: '1,240', goal: '2,500' },
                 ].map((stat, i) => (
                    <div key={i} className="flex justify-between items-center p-3 rounded-xl border border-[var(--glass-border)]">
                       <div>
                          <p className="text-[10px] text-[var(--text-secondary)] font-bold uppercase tracking-widest">{stat.label}</p>
                          <p className="text-sm font-bold">{stat.value}</p>
                       </div>
                       <Badge color="glass" size="xs">Goal: {stat.goal}</Badge>
                    </div>
                 ))}
              </div>
           </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default Wellness;
