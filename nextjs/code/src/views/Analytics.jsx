import React from 'react';
import { motion } from 'framer-motion';
import { RiBarChartBoxLine, RiArrowRightUpLine, RiPieChart2Line, RiLineChartLine } from 'react-icons/ri';
import { Button } from '../components/ui/Button';
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from '../components/ui/Card';
import ReactECharts from 'echarts-for-react';
import { useTheme } from '../context/ThemeContext';

const Analytics = () => {
  const { isDarkMode } = useTheme();

  const chartTheme = isDarkMode ? 'dark' : 'light';
  const textColor = isDarkMode ? '#ffffff' : '#1f2937';
  const axisColor = isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)';

  const lineChartOption = {
    backgroundColor: 'transparent',
    tooltip: { trigger: 'axis' },
    grid: { left: '3%', right: '4%', bottom: '3%', containLabel: true },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      axisLabel: { color: textColor },
      axisLine: { lineStyle: { color: axisColor } }
    },
    yAxis: {
      type: 'value',
      axisLabel: { color: textColor },
      splitLine: { lineStyle: { color: axisColor } }
    },
    series: [
      {
        name: 'Productivity',
        type: 'line',
        stack: 'Total',
        smooth: true,
        lineStyle: { width: 0 },
        showSymbol: false,
        areaStyle: {
          opacity: 0.8,
          color: {
            type: 'linear', x: 0, y: 0, x2: 0, y2: 1,
            colorStops: [{ offset: 0, color: '#4f46e5' }, { offset: 1, color: 'rgba(79, 70, 229, 0.1)' }]
          }
        },
        emphasis: { focus: 'series' },
        data: [140, 232, 101, 264, 90, 340, 250]
      },
      {
        name: 'Tasks Completed',
        type: 'line',
        stack: 'Total',
        smooth: true,
        lineStyle: { width: 0 },
        showSymbol: false,
        areaStyle: {
          opacity: 0.8,
          color: {
            type: 'linear', x: 0, y: 0, x2: 0, y2: 1,
            colorStops: [{ offset: 0, color: '#06b6d4' }, { offset: 1, color: 'rgba(6, 182, 212, 0.1)' }]
          }
        },
        emphasis: { focus: 'series' },
        data: [120, 282, 111, 234, 220, 340, 310]
      }
    ]
  };

  const pieChartOption = {
    backgroundColor: 'transparent',
    tooltip: { trigger: 'item' },
    legend: { top: '5%', left: 'center', textStyle: { color: textColor } },
    series: [
      {
        name: 'Time Allocation',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: isDarkMode ? '#030712' : '#ffffff',
          borderWidth: 2
        },
        label: { show: false, position: 'center' },
        emphasis: {
          label: { show: true, fontSize: 20, fontWeight: 'bold', color: textColor }
        },
        labelLine: { show: false },
        data: [
          { value: 1048, name: 'Deep Work', itemStyle: { color: '#4f46e5' } },
          { value: 735, name: 'Meetings', itemStyle: { color: '#7c3aed' } },
          { value: 580, name: 'Emails', itemStyle: { color: '#06b6d4' } },
          { value: 484, name: 'Planning', itemStyle: { color: '#3b82f6' } },
          { value: 300, name: 'Breaks', itemStyle: { color: '#10b981' } }
        ]
      }
    ]
  };

  const barChartOption = {
    backgroundColor: 'transparent',
    tooltip: { trigger: 'axis', axisPointer: { type: 'shadow' } },
    grid: { left: '3%', right: '4%', bottom: '3%', containLabel: true },
    xAxis: [
      {
        type: 'category',
        data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        axisTick: { alignWithLabel: true },
        axisLabel: { color: textColor },
        axisLine: { lineStyle: { color: axisColor } }
      }
    ],
    yAxis: [
      {
        type: 'value',
        axisLabel: { color: textColor },
        splitLine: { lineStyle: { color: axisColor } }
      }
    ],
    series: [
      {
        name: 'Revenue',
        type: 'bar',
        barWidth: '60%',
        data: [10, 52, 200, 334, 390, 330, 220],
        itemStyle: {
          color: {
            type: 'linear', x: 0, y: 0, x2: 0, y2: 1,
            colorStops: [{ offset: 0, color: '#7c3aed' }, { offset: 1, color: '#4f46e5' }]
          },
          borderRadius: [4, 4, 0, 0]
        }
      }
    ]
  };


  return (
    <div className="p-6 md:p-12 min-h-[calc(100vh-100px)] text-[var(--text-primary)]">
      <motion.div
        className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div>
          <div className="flex items-center gap-2 mb-4">
            <RiBarChartBoxLine className="text-[var(--aurora-1)]" />
            <span className="text-[var(--text-secondary)] text-[10px] font-bold uppercase tracking-widest text-[var(--aurora-1)]">Global Insights</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-2 tracking-tight">
            Performance <span className="text-[var(--aurora-1)] text-gradient">Matrix</span>
          </h1>
          <p className="text-[var(--text-secondary)] text-lg font-medium">Data-driven decisions for your progress.</p>
        </div>
        <div className="flex gap-2">
           <Button variant="glass" size="sm" className="font-bold">Export PDF</Button>
           <Button variant="primary" size="sm" className="font-bold gap-1">Generate Report <RiArrowRightUpLine/></Button>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {[
          { label: 'Total Output', value: '45,231', trend: '+12.5%' },
          { label: 'Active Goals', value: '14', trend: '+2' },
          { label: 'Time Logged', value: '128h', trend: '-4h' },
          { label: 'Weekly Score', value: '94/100', trend: '+5' },
        ].map((item, index) => (
          <Card
            key={item.label}
            variant="interactive"
            transition={{ delay: index * 0.1 }}
            className="group"
          >
            <div className="absolute top-0 right-0 p-4 opacity-50"><RiArrowRightUpLine size={24} className="text-[var(--aurora-1)] group-hover:scale-125 transition-transform" /></div>
            <CardDescription className="text-xs font-bold uppercase tracking-widest mb-2">{item.label}</CardDescription>
            <CardTitle className="text-4xl font-mono">{item.value}</CardTitle>
            <p className={`text-sm mt-3 font-bold ${item.trend.startsWith('+') ? 'text-emerald-500' : 'text-rose-500'}`}>{item.trend} this week</p>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card 
          className="lg:col-span-2"
          transition={{ delay: 0.4 }}
        >
          <CardHeader className="flex-row items-center gap-2 mb-6 space-y-0">
            <RiLineChartLine className="text-[var(--aurora-1)]" size={20} />
            <CardTitle className="text-lg">Productivity Velocity</CardTitle>
          </CardHeader>
          <CardContent>
            <ReactECharts option={lineChartOption} style={{ height: '350px' }} theme={chartTheme} />
          </CardContent>
        </Card>

        <Card 
          className="lg:col-span-1"
          transition={{ delay: 0.5 }}
        >
          <CardHeader className="flex-row items-center gap-2 mb-6 space-y-0">
            <RiPieChart2Line className="text-[var(--aurora-2)]" size={20} />
            <CardTitle className="text-lg">Time Allocation</CardTitle>
          </CardHeader>
          <CardContent>
            <ReactECharts option={pieChartOption} style={{ height: '350px' }} theme={chartTheme} />
          </CardContent>
        </Card>

        <Card 
          className="lg:col-span-3 mt-2"
          transition={{ delay: 0.6 }}
        >
          <CardHeader className="flex-row items-center gap-2 mb-6 space-y-0">
            <RiBarChartBoxLine className="text-[var(--aurora-3)]" size={20} />
            <CardTitle className="text-lg">Monthly Revenue / Value Generated</CardTitle>
          </CardHeader>
          <CardContent>
            <ReactECharts option={barChartOption} style={{ height: '350px' }} theme={chartTheme} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Analytics;
