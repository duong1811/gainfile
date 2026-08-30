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
  RiUser3Line,
  RiShieldKeyholeLine,
  RiShoppingBag3Line,
  RiCustomerService2Line,
  RiLockPasswordLine,
  RiMailLine,
  RiCalendarCheckLine,
  RiExternalLinkLine
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
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../components/ui/Tabs';

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
    xAxis: { type: 'category', boundaryGap: false, data: Array.from({ length: 30 }, (_, i) => i + 1), show: false },
    yAxis: { type: 'value', min: 98, max: 100, show: false },
    series: [
      {
        name: 'Uptime', type: 'line', smooth: true, symbol: 'none',
        lineStyle: { width: 2, color: '#10b981' },
        areaStyle: { color: { type: 'linear', x: 0, y: 0, x2: 0, y2: 1, colorStops: [{ offset: 0, color: '#10b981' }, { offset: 1, color: 'transparent' }] } },
        data: Array.from({ length: 30 }, (_, index) => 99.5 + ((index * 17) % 50) / 100)
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
    <div className="flex min-h-[calc(100vh-100px)] flex-col p-6 text-[var(--text-primary)] md:p-12">
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
              <h2 className="text-base font-bold">Welcome back, Alexander!</h2>
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
            Welcome back, Alexander! <RiFireLine className="inline-block text-orange-500 animate-pulse pb-1" />
          </h1>
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

      {/* Storage, Bandwidth & Account */}
      <motion.section
        className="mb-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="mb-5 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold">Account Overview</h2>
            <p className="mt-1 text-sm text-[var(--text-secondary)]">Your current resource usage and membership status.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <motion.div variants={itemVariants}>
            <Card className="h-full" padding="md">
              <div className="mb-5 flex items-start justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-500/10 text-xl text-blue-500">
                  <RiHardDrive2Line />
                </div>
                <Badge color="primary" rounded="full" size="xs">36% used</Badge>
              </div>
              <CardDescription className="text-xs font-bold uppercase tracking-widest">Storage</CardDescription>
              <div className="mt-2 flex items-end gap-2">
                <span className="font-mono text-2xl font-bold">72.4GB</span>
                <span className="mb-1 text-xs font-semibold text-[var(--text-secondary)]">of 200GB</span>
              </div>
              <Progress value={72.4} max={200} variant="aurora" size="sm" className="mt-5" />
              <p className="mt-3 text-xs text-[var(--text-secondary)]">127.6GB available</p>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="h-full" padding="md">
              <div className="mb-5 flex items-start justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-amber-500/10 text-xl text-amber-500">
                  <RiSpeedUpLine />
                </div>
                <Badge color="warning" rounded="full" size="xs">Free user</Badge>
              </div>
              <CardDescription className="text-xs font-bold uppercase tracking-widest">Bandwidth</CardDescription>
              <p className="mt-2 text-2xl font-bold">Unlimited</p>
              <div className="mt-5 rounded-xl border border-amber-500/20 bg-amber-500/5 px-4 py-3">
                <p className="text-[10px] font-bold uppercase tracking-widest text-amber-500">Download speed</p>
                <p className="mt-1 font-mono text-sm font-bold">Low Speed · 100kbps</p>
              </div>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Card className="h-full" padding="md">
              <div className="mb-5 flex items-start justify-between">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-500/10 text-xl text-emerald-500">
                  <RiVipCrown2Line />
                </div>
                <span className="flex items-center gap-1.5 text-xs font-bold text-emerald-500">
                  <span className="h-2 w-2 rounded-full bg-emerald-500" /> Active
                </span>
              </div>
              <CardDescription className="text-xs font-bold uppercase tracking-widest">Account Status</CardDescription>
              <p className="mt-2 text-2xl font-bold">Free Plan</p>
              <div className="mt-5 flex items-center justify-between rounded-xl border border-[var(--glass-border)] bg-[var(--bg-primary)]/60 px-4 py-3">
                <span className="text-xs text-[var(--text-secondary)]">Plan duration</span>
                <span className="text-sm font-bold">No expiration</span>
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

        <Tabs defaultValue="profile" orientation="vertical">
          <TabsList>
            <TabsTrigger value="profile" icon={RiUser3Line}>Profile</TabsTrigger>
            <TabsTrigger value="premium" icon={RiVipCrown2Line}>Premium Status</TabsTrigger>
            <TabsTrigger value="security" icon={RiShieldKeyholeLine}>Security</TabsTrigger>
            <TabsTrigger value="activity" icon={RiHistoryLine}>Activity</TabsTrigger>
            <TabsTrigger value="purchases" icon={RiShoppingBag3Line}>Purchase History</TabsTrigger>
            <TabsTrigger value="support" icon={RiCustomerService2Line}>Support</TabsTrigger>
          </TabsList>

          <TabsContent value="profile">
            <Card padding="lg">
              <div className="mb-7 flex flex-col gap-5 border-b border-[var(--glass-border)] pb-7 sm:flex-row sm:items-center">
                <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[var(--aurora-1)] to-[var(--aurora-2)] text-3xl font-bold text-white">A</div>
                <div>
                  <CardTitle>Alexander Pierce</CardTitle>
                  <CardDescription className="mt-2 flex items-center gap-2"><RiMailLine /> alexander@gainfile.com</CardDescription>
                </div>
                <Button variant="glass" size="sm" className="sm:ms-auto">Edit Profile</Button>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-[var(--glass-border)] p-4"><p className="text-xs text-[var(--text-secondary)]">Account ID</p><p className="mt-1 font-mono text-sm font-bold">GF-2026-1048</p></div>
                <div className="rounded-xl border border-[var(--glass-border)] p-4"><p className="text-xs text-[var(--text-secondary)]">Member since</p><p className="mt-1 text-sm font-bold">August 30, 2026</p></div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="premium">
            <Card padding="lg">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
                <div><CardDescription className="uppercase tracking-widest">Current plan</CardDescription><CardTitle className="mt-2">Free Plan</CardTitle><p className="mt-3 text-sm text-[var(--text-secondary)]">200GB storage · Unlimited bandwidth at 100kbps</p></div>
                <Button variant="primary" size="lg" as="a" href="/upgrade-plan"><RiVipCrown2Line /> Upgrade Plan</Button>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="security">
            <Card padding="lg">
              <CardTitle>Security</CardTitle>
              <CardDescription className="mt-2">Protect your account and active sessions.</CardDescription>
              <div className="mt-7 space-y-3">
                <div className="flex flex-col gap-3 rounded-xl border border-[var(--glass-border)] p-4 sm:flex-row sm:items-center sm:justify-between"><div><p className="flex items-center gap-2 font-bold"><RiLockPasswordLine /> Password</p><p className="mt-1 text-xs text-[var(--text-secondary)]">Last changed 30 days ago</p></div><Button variant="glass" size="sm">Change Password</Button></div>
                <div className="flex flex-col gap-3 rounded-xl border border-[var(--glass-border)] p-4 sm:flex-row sm:items-center sm:justify-between"><div><p className="flex items-center gap-2 font-bold"><RiShieldKeyholeLine /> Two-factor authentication</p><p className="mt-1 text-xs text-[var(--text-secondary)]">Add an extra layer of security</p></div><Button variant="success" size="sm">Enable</Button></div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="activity">
            <Card padding="lg">
              <CardTitle>Recent Activity</CardTitle>
              <div className="mt-6 space-y-3">
                {[['Signed in successfully', 'Today, 09:42 AM'], ['Uploaded a new video', 'Yesterday, 06:15 PM'], ['Account password updated', 'August 12, 2026']].map(([event, date]) => (
                  <div key={event} className="flex items-center gap-3 rounded-xl border border-[var(--glass-border)] p-4"><RiCalendarCheckLine className="shrink-0 text-emerald-500" /><div><p className="text-sm font-bold">{event}</p><p className="mt-1 text-xs text-[var(--text-secondary)]">{date}</p></div></div>
                ))}
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="purchases">
            <Card padding="lg">
              <CardTitle>Purchase History</CardTitle>
              <CardDescription className="mt-2">Invoices and Premium plan purchases appear here.</CardDescription>
              <div className="mt-7 rounded-2xl border border-dashed border-[var(--glass-border)] p-10 text-center"><RiShoppingBag3Line className="mx-auto text-3xl text-[var(--text-secondary)]" /><p className="mt-3 font-bold">No purchases yet</p><p className="mt-1 text-sm text-[var(--text-secondary)]">Upgrade to Premium to see your first order.</p></div>
            </Card>
          </TabsContent>

          <TabsContent value="support">
            <Card padding="lg">
              <CardTitle>Support Center</CardTitle>
              <CardDescription className="mt-2">Get help with uploads, billing, or your account.</CardDescription>
              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-[var(--glass-border)] p-5"><RiCustomerService2Line className="text-2xl text-[var(--aurora-1)]" /><p className="mt-3 font-bold">Create a ticket</p><p className="mt-1 text-xs text-[var(--text-secondary)]">Average response within 24 hours.</p><Button variant="primary" size="sm" className="mt-5">Open Ticket <RiExternalLinkLine /></Button></div>
                <div className="rounded-2xl border border-[var(--glass-border)] p-5"><RiHistoryLine className="text-2xl text-[var(--aurora-2)]" /><p className="mt-3 font-bold">My tickets</p><p className="mt-1 text-xs text-[var(--text-secondary)]">Review current and previous requests.</p><Button variant="glass" size="sm" className="mt-5">View Tickets</Button></div>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
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