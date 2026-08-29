import React from 'react';
import { motion } from 'framer-motion';
import ReactECharts from 'echarts-for-react';

const ChartCard = ({ title, subtitle, type }) => {
  const getChartOption = () => {
    if (type === 'line') {
      return {
        backgroundColor: 'transparent',
        grid: {
          top: '15%',
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        tooltip: {
          trigger: 'axis',
          backgroundColor: 'rgba(17, 24, 39, 0.8)',
          borderColor: 'rgba(255, 255, 255, 0.1)',
          textStyle: { color: '#fff' }
        },
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          axisLine: { lineStyle: { color: 'rgba(255, 255, 255, 0.1)' } },
          axisLabel: { color: 'rgba(255, 255, 255, 0.4)', fontSize: 10 }
        },
        yAxis: {
          type: 'value',
          axisLine: { show: false },
          axisLabel: { color: 'rgba(255, 255, 255, 0.4)', fontSize: 10 },
          splitLine: { lineStyle: { color: 'rgba(255, 255, 255, 0.05)', type: 'dashed' } }
        },
        series: [{
          data: [65, 78, 85, 92, 88, 95, 90],
          type: 'line',
          smooth: true,
          lineStyle: {
            color: '#6366f1',
            width: 4
          },
          areaStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [
                { offset: 0, color: 'rgba(99, 102, 241, 0.2)' },
                { offset: 1, color: 'rgba(99, 102, 241, 0)' }
              ]
            }
          },
          symbol: 'circle',
          symbolSize: 8,
          itemStyle: {
            color: '#6366f1',
            borderColor: '#fff',
            borderWidth: 2
          }
        }]
      };
    }

    return {
      backgroundColor: 'transparent',
      tooltip: {
        trigger: 'item',
        backgroundColor: 'rgba(17, 24, 39, 0.8)',
        borderColor: 'rgba(255, 255, 255, 0.1)',
        textStyle: { color: '#fff' }
      },
      series: [{
        type: 'pie',
        radius: ['55%', '80%'],
        center: ['50%', '50%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: '#030712',
          borderWidth: 2
        },
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 20,
            fontWeight: 'bold',
            color: '#fff'
          }
        },
        labelLine: {
          show: false
        },
        data: [
          { value: 35, name: 'Work', itemStyle: { color: '#6366f1' } },
          { value: 25, name: 'Exercise', itemStyle: { color: '#8b5cf6' } },
          { value: 20, name: 'Learning', itemStyle: { color: '#06b6d4' } },
          { value: 20, name: 'Personal', itemStyle: { color: '#10b981' } }
        ]
      }]
    };
  };

  return (
    <motion.div
      className="glass-card p-6 rounded-[2.5rem] relative overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="mb-6">
        <h3 className="text-xl font-bold text-white tracking-tight">{title}</h3>
        <p className="text-sm text-white/40 mt-1 font-medium">{subtitle}</p>
      </div>
      
      <div className="relative">
        <ReactECharts
          option={getChartOption()}
          style={{ height: '320px', width: '100%' }}
          opts={{ renderer: 'svg' }}
        />
      </div>
    </motion.div>
  );
};

export default ChartCard;