import React from 'react';
import { motion } from 'framer-motion';
import { 
  RiRobotLine, 
  RiFlashlightLine, 
  RiPulseLine, 
  RiPieChartLine,
  RiMagicLine,
  RiCheckDoubleLine,
  RiArrowRightUpLine,
  RiLightbulbLine
} from 'react-icons/ri';
import ReactECharts from 'echarts-for-react';
import { useTheme } from '../context/ThemeContext';
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { Progress } from '../components/ui/Progress';

const AIInsights = () => {
  const { isDarkMode } = useTheme();
  const textColor = isDarkMode ? '#ffffff' : '#1f2937';

  const predictionOption = {
    backgroundColor: 'transparent',
    tooltip: { trigger: 'axis' },
    xAxis: { 
      type: 'category', 
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      axisLabel: { color: textColor }
    },
    yAxis: { 
      type: 'value',
      axisLabel: { color: textColor },
      splitLine: { lineStyle: { color: 'rgba(255,255,255,0.05)' } }
    },
    series: [
      {
        data: [150, 230, 224, 218, 135, 147, 260],
        type: 'line',
        smooth: true,
        lineStyle: { color: '#6366f1', width: 4 },
        areaStyle: {
          color: {
            type: 'linear', x: 0, y: 0, x2: 0, y2: 1,
            colorStops: [{ offset: 0, color: 'rgba(99, 102, 241, 0.4)' }, { offset: 1, color: 'transparent' }]
          }
        },
        symbol: 'circle',
        symbolSize: 8,
        itemStyle: { color: '#6366f1' }
      }
    ]
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <div className="p-6 md:p-12 min-h-[calc(100vh-100px)] text-[var(--text-primary)] relative">
      <motion.div
        className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <div>
          <div className="flex items-center gap-2 mb-4">
             <Badge color="aurora-1" size="xs" rounded="full" className="font-bold uppercase tracking-widest">Powered by Trackify AI</Badge>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-2 tracking-tight">
            AI <span className="text-gradient from-[var(--aurora-1)] to-[var(--aurora-3)]">Insights</span>
          </h1>
          <p className="text-[var(--text-secondary)] text-lg font-medium">Predictive analytics and automated operational intelligence.</p>
        </div>
        <div className="flex gap-3">
          <Button variant="glass" className="gap-2 font-bold"><RiMagicLine /> Regenerate Reports</Button>
          <Button variant="primary" className="gap-2 font-bold"><RiFlashlightLine /> Execute Actions</Button>
        </div>
      </motion.div>

      <motion.div 
        className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Prediction Card */}
        <Card className="lg:col-span-2" overflow="visible">
          <CardHeader className="flex-row justify-between items-center mb-6">
            <div>
              <CardTitle className="text-xl">Productivity Prediction</CardTitle>
              <CardDescription className="font-bold">Next 7 days output forecast</CardDescription>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-emerald-500 flex items-center justify-end gap-1">
                +12.4% <RiArrowRightUpLine />
              </p>
              <p className="text-[10px] text-[var(--text-secondary)] uppercase font-bold tracking-widest">Confidence: 94%</p>
            </div>
          </CardHeader>
          <CardContent>
             <ReactECharts option={predictionOption} style={{ height: '350px', width: '100%' }} />
          </CardContent>
        </Card>

        {/* AI Recommendations */}
        <Card variant="aurora">
          <CardHeader className="mb-6">
            <CardTitle className="text-xl flex items-center gap-2">
              <RiRobotLine className="text-[var(--aurora-1)]" />
              Recommendations
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {[
              { icon: RiPulseLine, title: 'Optimise Cache', desc: 'System latency can be reduced by 15% by flushing Redis queues.', color: 'text-blue-500' },
              { icon: RiLightbulbLine, title: 'Workflow Alert', desc: 'Team velocity has dipped. Suggesting a 15min sync session.', color: 'text-amber-500' },
              { icon: RiPieChartLine, title: 'Budget Forecast', desc: 'Ad spend is 8% over projected. Recommend reducing CPAs.', color: 'text-rose-500' }
            ].map((rec, i) => (
              <motion.div key={i} variants={itemVariants} className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                <div className="flex gap-4">
                  <div className={`mt-1 ${rec.color}`}><rec.icon size={24} /></div>
                  <div>
                    <p className="font-bold text-sm mb-1">{rec.title}</p>
                    <p className="text-xs text-[var(--text-secondary)] font-medium leading-relaxed">{rec.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </CardContent>
        </Card>

        {/* Learning Status */}
        <Card padding="lg">
          <CardTitle className="text-lg mb-4">Neural Training Status</CardTitle>
          <div className="space-y-6">
            <div>
              <div className="flex justify-between text-xs mb-2 font-bold">
                <span className="text-[var(--text-secondary)]">Pattern Recognition</span>
                <span>88%</span>
              </div>
              <Progress value={88} color="aurora-1" size="sm" />
            </div>
            <div>
              <div className="flex justify-between text-xs mb-2 font-bold">
                <span className="text-[var(--text-secondary)]">Semantic Analysis</span>
                <span>64%</span>
              </div>
              <Progress value={64} color="aurora-2" size="sm" />
            </div>
            <div>
              <div className="flex justify-between text-xs mb-2 font-bold">
                <span className="text-[var(--text-secondary)]">Sentiment Index</span>
                <span>92%</span>
              </div>
              <Progress value={92} color="aurora-3" size="sm" />
            </div>
          </div>
        </Card>

        {/* Recent Automated Actions */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Automated Audit Trail</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {[
              { action: 'Infrastructure Scaled', details: 'Increased AWS nodes due to high traffic prediction.', time: '12 min ago' },
              { action: 'Payment Retried', details: 'Client #4322 webhook failure resolved automatically.', time: '45 min ago' },
              { action: 'Security Patch', details: 'Applied minor vulnerability fix to v2.0.4 core.', time: '2 hours ago' },
            ].map((action, i) => (
              <div key={i} className="flex items-center justify-between p-4 rounded-xl border border-[var(--glass-border)] hover:bg-[var(--glass-border)] transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/20 text-emerald-500 flex items-center justify-center">
                    <RiCheckDoubleLine />
                  </div>
                  <div>
                    <p className="font-bold text-sm">{action.action}</p>
                    <p className="text-xs text-[var(--text-secondary)]">{action.details}</p>
                  </div>
                </div>
                <span className="text-[10px] font-bold text-[var(--aurora-1)] uppercase tracking-wider">{action.time}</span>
              </div>
            ))}
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default AIInsights;
