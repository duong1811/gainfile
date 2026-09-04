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
  RiSettingsLine,
  RiHardDrive2Line,
  RiSpeedUpLine,
  RiVipCrown2Line,
  RiUploadCloud2Line,
  RiFileList3Line
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
import { Progress } from '../components/ui/Progress';
import MyAccount from '../components/dashboard/MyAccount';
import { mockDashboardCharts, mockDashboardStats, mockUser } from '../data/mockData';

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
              <RiMore2Fill />
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
      data: mockDashboardCharts.revenueDays,
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
        data: mockDashboardCharts.revenueValues
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
        data: [{ value: mockDashboardCharts.performance }]
      }
    ]
  };

  const uptimeOption = {
    backgroundColor: 'transparent',
    tooltip: { trigger: 'axis', position: function (pt) { return [pt[0], '10%']; } },
    grid: { left: '3%', right: '4%', bottom: '3%', top: '10%', containLabel: true },
    xAxis: { type: 'category', boundaryGap: false, data: Array.from({ length: 30 }, (_, i) => i + 1), show: false },
    yAxis: { type: 'value', min: 98, max: 100, show: false },
    series: [
      {
        name: 'Uptime', type: 'line', smooth: true, symbol: 'none',
        lineStyle: { width: 2, color: '#10b981' },
        areaStyle: { color: { type: 'linear', x: 0, y: 0, x2: 0, y2: 1, colorStops: [{ offset: 0, color: '#10b981' }, { offset: 1, color: 'transparent' }] } },
        data: mockDashboardCharts.uptimeValues
      }
    ]
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  return (
    <div className="flex min-h-[calc(100vh-100px)] flex-col py-6 text-[var(--text-primary)] md:py-12">
      <motion.div
        className="relative hidden mb-6 overflow-hidden rounded-2xl border border-[var(--glass-border)] bg-[var(--glass-bg)] px-4 py-3"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.12, duration: 0.5 }}
      >
        <div className="absolute inset-y-0 start-0 w-1 bg-gradient-to-b from-[var(--aurora-1)] to-[var(--aurora-2)]" />
        <div className="absolute -end-10 -top-12 h-28 w-28 rounded-full bg-[var(--aurora-1)]/10 blur-2xl" />
        <div className="relative flex items-center">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--aurora-1)] to-[var(--aurora-2)] text-base text-white shadow-md shadow-[var(--aurora-1)]/20">
              <RiFireLine />
            </div>
            <div>
              <h2 className="text-base font-bold">Welcome back, {mockUser.name}!</h2>
              <p className="text-xs text-[var(--text-secondary)]">Your account is ready to manage.</p>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        className="order-first mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div>
          <h1 className="text-2xl md:text-3xl font-bold mb-2 tracking-tight">
            Welcome back, {mockUser.name}! <RiFireLine className="inline-block text-orange-500 animate-pulse pb-1" />
          </h1>
        </div>
        <Button as="a" href="/upload" variant="blue" size="lg" className="w-full md:w-auto">
          <RiUploadCloud2Line /> Upload New File
        </Button>
      </motion.div>
      {/* Storage, Bandwidth & Account */}
      <motion.section
        className="mb-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >

        <div className="grid grid-cols-2 gap-2.5 sm:gap-4 xl:grid-cols-4">
          <motion.div variants={itemVariants}>
            <Card className="h-full min-h-36 overflow-hidden p-3 sm:min-h-0 sm:p-4" padding="sm" overflow="visible">
              <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-blue-500/10 blur-2xl" />
              <div className="relative mb-3 flex items-center justify-between gap-2 sm:mb-4">
                <div className="flex min-w-0 items-center gap-2 sm:gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-500/10 text-base text-blue-500 sm:h-10 sm:w-10 sm:rounded-xl sm:text-lg">
                    <RiHardDrive2Line />
                  </div>
                  <CardDescription className="text-sm font-bold text-[var(--text-primary)] sm:text-lg">Storage</CardDescription>
                </div>
                <Badge color="primary" rounded="full" size="xs" className="hidden sm:inline-flex">{mockDashboardStats.storage.percentUsed}% used</Badge>
              </div>
              <div className="relative mt-1 flex items-end gap-1.5">
                <span className="font-mono text-lg font-bold sm:text-2xl">{mockDashboardStats.storage.used}{mockDashboardStats.storage.unit}</span>
                <span className="mb-0.5 text-[10px] font-semibold text-[var(--text-secondary)] sm:mb-1 sm:text-xs">/ {mockDashboardStats.storage.total}{mockDashboardStats.storage.unit}</span>
              </div>
              <Progress value={mockDashboardStats.storage.used} max={mockDashboardStats.storage.total} variant="aurora" size="sm" className="relative mt-2.5 sm:mt-3" />
              <p className="relative mt-1.5 text-[10px] text-[var(--text-secondary)] sm:mt-2 sm:text-[11px]">{mockDashboardStats.storage.available}{mockDashboardStats.storage.unit} available</p>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="h-full min-h-36 overflow-hidden p-3 sm:min-h-0 sm:p-4" padding="sm" overflow="visible">
              <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-amber-500/10 blur-2xl" />
              <div className="relative mb-3 flex items-center justify-between gap-2 sm:mb-4">
                <div className="flex min-w-0 items-center gap-2 sm:gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-amber-500/10 text-base text-amber-500 sm:h-10 sm:w-10 sm:rounded-xl sm:text-lg">
                    <RiSpeedUpLine />
                  </div>
                  <CardDescription className="text-sm font-bold leading-tight text-[var(--text-primary)] sm:text-lg">Bandwidth</CardDescription>
                </div>
                <Badge color="warning" rounded="full" size="xs" className="hidden sm:inline-flex">{mockUser.plan}</Badge>
              </div>
              <p className="relative mt-1 text-lg font-bold sm:text-2xl">{mockDashboardStats.bandwidth.limit}</p>
              <div className="relative mt-2.5 flex items-center justify-between rounded-lg border border-amber-500/20 bg-amber-500/5 px-2 py-2 sm:mt-3 sm:px-3">
                <span className="text-[9px] font-bold uppercase tracking-wider text-amber-500 sm:text-[10px] sm:tracking-widest">Speed</span>
                <span className="font-mono text-[10px] font-bold sm:text-xs">{mockDashboardStats.bandwidth.speed}</span>
              </div>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="h-full min-h-36 overflow-hidden p-3 sm:min-h-0 sm:p-4" padding="sm" overflow="visible">
              <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-emerald-500/10 blur-2xl" />
              <div className="relative mb-3 flex items-center justify-between gap-2 sm:mb-4">
                <div className="flex min-w-0 items-center gap-2 sm:gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 text-base text-emerald-500 sm:h-10 sm:w-10 sm:rounded-xl sm:text-lg">
                    <RiVipCrown2Line />
                  </div>
                  <CardDescription className="text-sm font-bold leading-tight text-[var(--text-primary)] sm:text-lg">Account</CardDescription>
                </div>
                <span className="hidden items-center gap-1.5 text-xs font-bold text-emerald-500 sm:flex">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" /> {mockDashboardStats.account.status}
                </span>
              </div>
              <p className="relative mt-1 text-lg font-bold sm:text-2xl">{mockUser.plan}</p>
              <div className="relative mt-2.5 flex flex-row rounded-lg border border-[var(--glass-border)] bg-[var(--bg-primary)]/60 px-2 py-2 sm:mt-3 items-center justify-between sm:px-3">
                <span className="text-[9px] text-[var(--text-secondary)] sm:text-[11px]">Duration</span>
                <span className="text-[10px] font-bold sm:text-xs">{mockDashboardStats.account.duration}</span>
              </div>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="h-full min-h-36 overflow-hidden p-3 sm:min-h-0 sm:p-4" padding="sm" overflow="visible">
              <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-violet-500/10 blur-2xl" />
              <div className="relative mb-3 flex items-center justify-between gap-2 sm:mb-4">
                <div className="flex min-w-0 items-center gap-2 sm:gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-violet-500/10 text-base text-violet-500 sm:h-10 sm:w-10 sm:rounded-xl sm:text-lg">
                    <RiFileList3Line />
                  </div>
                  <CardDescription className="text-sm font-bold text-[var(--text-primary)] sm:text-lg">Files</CardDescription>
                </div>
                <Badge color="info" rounded="full" size="xs" className="hidden sm:inline-flex">{mockDashboardStats.files.public} public</Badge>
              </div>
              <div className="relative mt-1 flex items-end gap-1.5">
                <span className="font-mono text-lg font-bold sm:text-2xl">{mockDashboardStats.files.total.toLocaleString()}</span>
                <span className="mb-0.5 text-[10px] font-semibold text-[var(--text-secondary)] sm:mb-1 sm:text-xs">total</span>
              </div>
              <div className="relative mt-2.5 flex flex-row rounded-lg border border-[var(--glass-border)] bg-[var(--bg-primary)]/60 px-2 py-2 sm:mt-3 items-center justify-between sm:px-3">
                <span className="text-[9px] text-[var(--text-secondary)] sm:text-[11px]">Public files</span>
                <span className="text-[10px] font-bold sm:text-xs">{mockDashboardStats.files.public}</span>
              </div>
            </Card>
          </motion.div>
        </div>
      </motion.section>

      {/* My Account */}
      <motion.section
        className="order-last mb-8 mt-2"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25 }}
      >
        <div className="mb-5">
          <h2 className="text-2xl font-bold">My Account</h2>
          <p className="mt-1 text-sm text-[var(--text-secondary)]">Manage your profile, plan, security, and support.</p>
        </div>

        <MyAccount />
      </motion.section>


      <motion.div
        className="hidden grid-cols-1 lg:grid-cols-3 gap-6 mb-8"
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

    </div>
  );
};

export default Dashboard;