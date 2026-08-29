import React from 'react';
import { motion } from 'framer-motion';
import { 
  RiCheckboxCircleLine, 
  RiStarLine, 
  RiWalletLine, 
  RiTimeLine,
  RiFireLine,
  RiMore2Fill,
  RiCheckDoubleLine,
  RiDownloadCloud2Line,
  RiExchangeDollarLine,
  RiUserAddLine,
  RiFileAddLine,
  RiRocketLine,
  RiPulseLine,
  RiMapPinTimeLine,
  RiHistoryLine,
  RiDeleteBinLine,
  RiSettingsLine
} from 'react-icons/ri';
import ReactECharts from 'echarts-for-react';
import { useTheme } from '../context/ThemeContext';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from '../components/ui/Card';
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from '../components/ui/Table';
import {
  Dropdown,
  DropdownTrigger,
  DropdownContent,
  DropdownItem,
} from '../components/ui/Dropdown';

const colorConfigs = {
  aurora: {
    gradient: 'from-[var(--aurora-1)] to-[var(--aurora-2)]',
    shadow: 'shadow-[var(--aurora-1)]/20'
  },
  emerald: {
    gradient: 'from-emerald-400 to-teal-500',
    shadow: 'shadow-emerald-500/20'
  },
  rose: {
    gradient: 'from-rose-400 to-pink-500',
    shadow: 'shadow-rose-500/20'
  },
  blue: {
    gradient: 'from-blue-400 to-indigo-500',
    shadow: 'shadow-blue-500/20'
  }
};

const StatCard = ({ title, value, change, changeType, icon: Icon, variant }) => {
  const config = colorConfigs[variant] || colorConfigs.aurora;
  
  return (
    <Card variant="interactive" padding="md" overflow="visible">
      <div className="flex justify-between items-start mb-4">
        <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${config.gradient} flex items-center justify-center text-white shadow-lg ${config.shadow}`}>
          <Icon size={24} />
        </div>
        <Dropdown>
          <DropdownTrigger asChild showChevron={false}>
            <Button variant="ghost" size="icon-xs" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)]">
              <RiMore2Fill/>
            </Button>
          </DropdownTrigger>
          <DropdownContent align="right" width="w-40">
            <DropdownItem className="gap-2"><RiHistoryLine className="text-lg opacity-70" /> View History</DropdownItem>
            <DropdownItem className="gap-2"><RiSettingsLine className="text-lg opacity-70" /> Configure</DropdownItem>
            <DropdownItem variant="danger" className="gap-2"><RiDeleteBinLine className="text-lg opacity-70" /> Remove Widget</DropdownItem>
          </DropdownContent>
        </Dropdown>
      </div>
      <CardDescription className="uppercase tracking-widest text-[10px] mb-1 font-bold">{title}</CardDescription>
      <div className="flex items-end gap-3">
         <div className="text-3xl font-bold font-mono text-[var(--text-primary)]">{value}</div>
         <div className={`text-sm font-bold mb-1 ${changeType === 'increase' ? 'text-emerald-500' : changeType === 'decrease' ? 'text-rose-500' : 'text-amber-500'}`}>
           {change}
         </div>
      </div>
    </Card>
  );
};

const Dashboard = () => {
  const { isDarkMode } = useTheme();
  
  const chartTheme = isDarkMode ? 'dark' : 'light';
  const textColor = isDarkMode ? '#ffffff' : '#1f2937';
  const axisColor = isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)';

  const revenueOption = {
    backgroundColor: 'transparent',
    tooltip: { trigger: 'axis', axisPointer: { type: 'cross' } },
    grid: { left: '3%', right: '4%', bottom: '3%', top: '10%', containLabel: true },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15'],
      axisLabel: { color: textColor },
      axisLine: { lineStyle: { color: axisColor } }
    },
    yAxis: {
      type: 'value',
      axisLabel: { color: textColor, formatter: '${value}k' },
      splitLine: { lineStyle: { color: axisColor, type: 'dashed' } }
    },
    series: [
      {
        name: 'Revenue',
        type: 'line',
        smooth: true,
        lineStyle: { color: '#4f46e5', width: 3 },
        showSymbol: false,
        areaStyle: {
          color: {
            type: 'linear', x: 0, y: 0, x2: 0, y2: 1,
            colorStops: [{ offset: 0, color: '#4f46e5' }, { offset: 1, color: 'rgba(79, 70, 229, 0)' }]
          }
        },
        data: [12, 14, 18, 15, 22, 28, 30, 26, 35, 42, 38, 45, 52, 50, 60]
      }
    ]
  };

  const performanceGaugeOption = {
    backgroundColor: 'transparent',
    series: [
      {
        type: 'gauge',
        startAngle: 180,
        endAngle: 0,
        min: 0,
        max: 100,
        splitNumber: 5,
        itemStyle: { color: '#06b6d4', shadowColor: 'rgba(0,138,255,0.45)', shadowBlur: 10, shadowOffsetX: 2, shadowOffsetY: 2 },
        progress: { show: true, roundCap: true, width: 14 },
        pointer: { show: false },
        axisLine: { roundCap: true, lineStyle: { width: 14, color: [[1, axisColor]] } },
        axisTick: { show: false },
        splitLine: { show: false },
        axisLabel: { show: false },
        title: { show: false },
        detail: {
          backgroundColor: 'transparent', width: '60%', lineHeight: 40, height: 40, borderRadius: 8,
          offsetCenter: [0, '-10%'], fontSize: 30, fontWeight: 'bolder', color: textColor,
          formatter: '{value}%'
        },
        data: [{ value: 94 }]
      }
    ]
  };
  
  const uptimeOption = {
    backgroundColor: 'transparent',
    tooltip: { trigger: 'axis', position: function (pt) { return [pt[0], '10%']; } },
    grid: { left: '3%', right: '4%', bottom: '3%', top: '10%', containLabel: true },
    xAxis: { type: 'category', boundaryGap: false, data: Array.from({length: 30}, (_, i) => i+1), show: false },
    yAxis: { type: 'value', min: 98, max: 100, show: false },
    series: [
      {
        name: 'Uptime', type: 'line', smooth: true, symbol: 'none',
        lineStyle: { width: 2, color: '#10b981' },
        areaStyle: { color: { type: 'linear', x: 0, y: 0, x2: 0, y2: 1, colorStops: [{offset: 0, color: '#10b981'}, {offset: 1, color: 'transparent'}] } },
        data: Array.from({length: 30}, () => 99.5 + Math.random() * 0.5)
      }
    ]
  };

  const tasksData = [
    { title: 'Update Authentication Flow', status: 'In Progress', priority: 'High', time: '2 hours ago' },
    { title: 'Prepare Q3 Board Deck', status: 'Pending', priority: 'High', time: '5 hours ago' },
    { title: 'Database Migration Script', status: 'Completed', priority: 'Medium', time: '1 day ago' },
    { title: 'Design System Audit', status: 'Completed', priority: 'Low', time: '1 day ago' }
  ];

  const recentTransactions = [
    { name: 'Enterprise Plan - Acme Corp', amount: '+$2,400.00', status: 'Success', date: 'Today, 2:45 PM' },
    { name: 'AWS Cloud Services', amount: '-$840.50', status: 'Processed', date: 'Today, 10:20 AM' },
    { name: 'Professional Plan - Globex', amount: '+$490.00', status: 'Success', date: 'Yesterday' },
  ];

  const activityTimeline = [
    { event: 'New user registered', details: 'sarah@globex.com joined the platform.', time: '10 min ago', color: 'bg-[var(--aurora-1)]' },
    { event: 'Server Backup Complete', details: 'Database snapshot successfully stored in US-East.', time: '45 min ago', color: 'bg-emerald-500' },
    { event: 'Payment Failed', details: 'Stripe webhook returned code 402 for Client X.', time: '2 hrs ago', color: 'bg-rose-500' },
    { event: 'Deploy Successful', details: 'v2.0.4 pushed to production via GitHub Actions.', time: '5 hrs ago', color: 'bg-[var(--aurora-2)]' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  return (
    <div className="p-6 md:p-12 min-h-[calc(100vh-100px)] text-[var(--text-primary)]">
      <motion.div
        className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Badge color="aurora-1" rounded="full" size="xs" className="uppercase tracking-widest font-bold">
              Live Overview
            </Badge>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-2 tracking-tight">
            Dashboard <RiFireLine className="inline-block text-orange-500 animate-pulse pb-1" />
          </h1>
          <p className="text-[var(--text-secondary)] text-lg max-w-2xl font-medium">
            Your systems are performing at peak efficiency. Here is your operational intelligence for today.
          </p>
        </div>
        <div className="flex gap-2">
            <Button variant="primary" className="px-5 font-bold flex items-center gap-2 hover:scale-105">
                <RiDownloadCloud2Line /> Download CSV
            </Button>
        </div>
      </motion.div>

      <motion.div 
        className="flex flex-wrap gap-4 mb-8"
        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
      >
         <Button variant="glass" size="sm" className="px-4 font-bold">
            <RiUserAddLine className="text-[var(--aurora-1)]" /> Invite User
         </Button>
         <Button variant="glass" size="sm" className="px-4 font-bold">
            <RiFileAddLine className="text-[var(--aurora-2)]" /> New Report
         </Button>
         <Button variant="glass" size="sm" className="px-4 font-bold">
            <RiRocketLine className="text-[var(--aurora-4)]" /> Launch Campaign
         </Button>
      </motion.div>

      {/* Stats Row */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants}>
          <StatCard title="Total Revenue" value="$64,320" change="+14.5%" changeType="increase" icon={RiWalletLine} variant="aurora" />
        </motion.div>
        <motion.div variants={itemVariants}>
          <StatCard title="Active Tenants" value="1,245" change="+34" changeType="increase" icon={RiCheckboxCircleLine} variant="emerald" />
        </motion.div>
        <motion.div variants={itemVariants}>
          <StatCard title="MRR Churn" value="1.2%" change="-0.4%" changeType="decrease" icon={RiStarLine} variant="rose" />
        </motion.div>
        <motion.div variants={itemVariants}>
          <StatCard title="Avg Check Size" value="$48.50" change="Stable" changeType="neutral" icon={RiExchangeDollarLine} variant="blue" />
        </motion.div>
      </motion.div>

      <motion.div 
        className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Main Chart */}
        <Card className="lg:col-span-2">
           <CardHeader className="flex-row justify-between items-center mb-6 space-y-0">
              <div>
                 <CardTitle className="text-lg">Revenue Trajectory</CardTitle>
                 <CardDescription className="text-xs font-bold">Trailing 15-day gross volume</CardDescription>
              </div>
           </CardHeader>
           <CardContent>
             <ReactECharts option={revenueOption} style={{ height: '320px', width: '100%' }} theme={chartTheme} />
           </CardContent>
        </Card>

        {/* System Health Column */}
        <motion.div variants={itemVariants} className="flex flex-col gap-6">
           <Card className="flex-1">
              <CardHeader className="flex-row justify-between items-center mb-2 space-y-0">
                 <CardTitle className="text-base">System Health</CardTitle>
                 <RiPulseLine className="text-[var(--aurora-4)]" />
              </CardHeader>
              <CardDescription className="text-xs mb-4 font-bold">Overall infrastructure score</CardDescription>
              <CardContent>
                <ReactECharts option={performanceGaugeOption} style={{ height: '140px', width: '100%' }} theme={chartTheme} />
              </CardContent>
           </Card>
           <Card padding="none" className="flex-1 overflow-hidden relative">
              <div className="p-6 relative z-10 pointer-events-none">
                <CardTitle className="text-lg mb-1">99.9% Uptime</CardTitle>
                <CardDescription className="text-xs font-bold">Trailing 30 days availability</CardDescription>
              </div>
              <div className="absolute inset-0 top-10">
                 <ReactECharts option={uptimeOption} style={{ height: '100%', width: '100%' }} theme={chartTheme} />
              </div>
           </Card>
        </motion.div>
      </motion.div>

      <motion.div 
        className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Task List */}
        <Card className="flex flex-col">
           <CardHeader className="flex-row justify-between items-center mb-6 space-y-0">
              <CardTitle className="text-lg">Priority Tasks</CardTitle>
              <Button variant="ghost" size="sm" className="text-[var(--aurora-1)] font-bold hover:underline px-0">View All</Button>
           </CardHeader>
           <CardContent className="flex-1 overflow-y-auto space-y-4 pr-2">
              {tasksData.map((task, i) => (
                 <div key={i} className="flex gap-4 items-start p-3 rounded-xl hover:bg-[var(--glass-border)] transition-colors border border-transparent hover:border-[var(--glass-border)]">
                    <div className={`mt-1 flex-shrink-0 w-5 h-5 rounded-full border-2 flex items-center justify-center
                       ${task.status === 'Completed' ? 'bg-emerald-500/20 border-emerald-500 text-emerald-500' : 'border-[var(--glass-border)]'}`}>
                       {task.status === 'Completed' && <RiCheckDoubleLine size={12} />}
                    </div>
                    <div>
                       <p className={`font-bold text-sm ${task.status === 'Completed' ? 'line-through text-[var(--text-secondary)]' : 'text-[var(--text-primary)]'}`}>{task.title}</p>
                       <div className="flex items-center gap-2 mt-1">
                          <span className={`text-[10px] px-2 py-0.5 rounded-md font-bold uppercase tracking-wider
                             ${task.priority === 'High' ? 'bg-rose-500/10 text-rose-500' : task.priority === 'Medium' ? 'bg-amber-500/10 text-amber-500' : 'bg-[var(--glass-border)] text-[var(--text-secondary)]'}`}>
                             {task.priority}
                          </span>
                       </div>
                    </div>
                 </div>
              ))}
           </CardContent>
        </Card>

        {/* Activity Timeline */}
        <Card className="flex flex-col">
           <CardHeader className="flex-row justify-between items-center mb-6 space-y-0">
              <CardTitle className="text-lg">Activity Stream</CardTitle>
              <RiMapPinTimeLine className="text-[var(--text-secondary)]" />
           </CardHeader>
           <CardContent className="relative pl-3 space-y-6">
              <div className="absolute top-2 bottom-2 left-[15px] rtl:right-[15px] rtl:left-auto w-px bg-[var(--glass-border)]"></div>
              {activityTimeline.map((item, i) => (
                 <div key={i} className="relative z-10 flex gap-4">
                    <div className={`w-3 h-3 rounded-full ${item.color} mt-1.5 shadow-[0_0_10px_rgba(0,0,0,0.2)]`}></div>
                    <div>
                       <p className="font-bold text-sm text-[var(--text-primary)]">{item.event}</p>
                       <p className="text-xs text-[var(--text-secondary)] mt-1 font-medium">{item.details}</p>
                       <p className="text-[10px] text-[var(--aurora-1)] font-bold mt-1.5">{item.time}</p>
                    </div>
                 </div>
              ))}
           </CardContent>
        </Card>

        {/* Transactions Table */}
        <Card padding="none" className="flex flex-col overflow-hidden">
           <CardHeader className="p-6 pb-0">
              <CardTitle className="text-lg">Latest Transactions</CardTitle>
           </CardHeader>
           <CardContent className="p-0 mt-4">
              <Table>
                <TableHeader>
                  <TableRow className="bg-[var(--glass-border)]/50 border-none">
                    <TableHead className="py-2">Details</TableHead>
                    <TableHead className="py-2 text-right">Amount</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {recentTransactions.map((tx, i) => (
                    <TableRow key={i} className="border-[var(--glass-border)]/30">
                      <TableCell>
                        <p className="font-bold text-sm truncate max-w-[150px]">{tx.name}</p>
                        <p className="text-[10px] text-[var(--text-secondary)] font-bold">{tx.status}</p>
                      </TableCell>
                      <TableCell className={`text-right font-mono font-bold text-sm ${tx.amount.startsWith('+') ? 'text-emerald-500' : 'text-[var(--text-primary)]'}`}>
                        {tx.amount}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
           </CardContent>
        </Card>
      </motion.div>
    </div>
  );
};

export default Dashboard;