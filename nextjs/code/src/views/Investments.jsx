import React from 'react';
import { motion } from 'framer-motion';
import { 
  RiExchangeDollarLine, 
  RiBitCoinLine, 
  RiLineChartLine, 
  RiArrowRightUpLine,
  RiArrowRightDownLine,
  RiWallet3Line,
  RiPieChartLine,
  RiStackLine
} from 'react-icons/ri';
import ReactECharts from 'echarts-for-react';
import { useTheme } from '../context/ThemeContext';
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { Table, TableHeader, TableBody, TableHead, TableRow, TableCell } from '../components/ui/Table';

const Investments = () => {
  const { isDarkMode } = useTheme();
  const textColor = isDarkMode ? '#ffffff' : '#1f2937';

  const portfolioOption = {
    backgroundColor: 'transparent',
    tooltip: { trigger: 'item' },
    series: [
      {
        name: 'Asset Allocation',
        type: 'pie',
        radius: ['60%', '80%'],
        avoidLabelOverlap: false,
        itemStyle: { borderRadius: 10, borderColor: 'transparent', borderWidth: 2 },
        label: { show: false },
        emphasis: { label: { show: true, fontSize: 16, fontWeight: 'bold', color: textColor } },
        labelLine: { show: false },
        data: [
          { value: 45, name: 'Stocks', itemStyle: { color: '#6366f1' } },
          { value: 25, name: 'Crypto', itemStyle: { color: '#f59e0b' } },
          { value: 20, name: 'Real Estate', itemStyle: { color: '#10b981' } },
          { value: 10, name: 'Cash', itemStyle: { color: '#64748b' } }
        ]
      }
    ]
  };

  const assets = [
    { name: 'Bitcoin', ticker: 'BTC', price: '$64,230.50', change: '+2.4%', type: 'Crypto', balance: '1.24 BTC', value: '$79,645.82' },
    { name: 'Apple Inc.', ticker: 'AAPL', price: '$189.45', change: '+0.8%', type: 'Stock', balance: '120 Shares', value: '$22,734.00' },
    { name: 'Ethereum', ticker: 'ETH', price: '$3,450.20', change: '-1.2%', type: 'Crypto', balance: '12.5 ETH', value: '$43,127.50' },
    { name: 'Vanguard S&P 500', ticker: 'VOO', price: '$462.10', change: '+1.5%', type: 'ETF', balance: '50 Shares', value: '$23,105.00' },
  ];

  return (
    <div className="p-6 md:p-12 min-h-[calc(100vh-100px)] text-[var(--text-primary)] relative">
      <motion.div
        className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <div>
          <h1 className="text-4xl md:text-6xl font-bold mb-2 tracking-tight">
            Asset <span className="text-gradient from-amber-400 to-orange-500">Portfolio</span>
          </h1>
          <p className="text-[var(--text-secondary)] text-lg font-medium">Real-time wealth tracking and investment performance.</p>
        </div>
        <div className="flex gap-3">
          <Button variant="glass" className="gap-2 font-bold"><RiStackLine /> Rebalance</Button>
          <Button variant="primary" className="gap-2 font-bold"><RiWallet3Line /> Connect Wallet</Button>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        {/* Total Value Card */}
        <Card variant="aurora" className="lg:col-span-1 p-8 flex flex-col justify-between border-none">
           <div>
              <Badge color="glass" rounded="full" className="mb-6 font-bold uppercase tracking-widest text-[10px]">Net Worth Tracking</Badge>
              <h2 className="text-5xl font-bold mb-2">$168,612.32</h2>
              <p className="text-emerald-400 font-bold flex items-center gap-2">
                 +$12,450.00 (7.4%) <RiArrowRightUpLine />
              </p>
           </div>
           <div className="mt-8 flex gap-4">
              <div className="flex-1 p-4 rounded-2xl bg-white/5 border border-white/10">
                 <p className="text-[10px] text-white/50 font-bold uppercase tracking-widest mb-1">Total Profit</p>
                 <p className="text-xl font-bold text-emerald-400">+$42.5k</p>
              </div>
              <div className="flex-1 p-4 rounded-2xl bg-white/5 border border-white/10">
                 <p className="text-[10px] text-white/50 font-bold uppercase tracking-widest mb-1">Active Assets</p>
                 <p className="text-xl font-bold text-white">24</p>
              </div>
           </div>
        </Card>

        {/* Allocation Chart */}
        <Card className="lg:col-span-1">
           <CardHeader className="flex-row justify-between items-center mb-2 space-y-0">
              <CardTitle className="text-base">Asset Allocation</CardTitle>
              <RiPieChartLine className="text-[var(--aurora-1)]" />
           </CardHeader>
           <div className="h-64 w-full">
              <ReactECharts option={portfolioOption} style={{ height: '100%', width: '100%' }} />
           </div>
        </Card>

        {/* Market Trends */}
        <Card className="lg:col-span-1">
           <CardHeader>
              <CardTitle className="text-base">Market Pulse</CardTitle>
           </CardHeader>
           <CardContent className="space-y-6">
              {[
                { name: 'S&P 500', value: '5,123.40', change: '+0.45%', up: true },
                { name: 'Nasdaq 100', value: '18,210.12', change: '+1.12%', up: true },
                { name: 'Gold', value: '2,345.10', change: '-0.24%', up: false },
                { name: 'Bitcoin Dominance', value: '52.4%', change: '+0.12%', up: true },
              ].map((item, i) => (
                 <div key={i} className="flex justify-between items-center">
                    <div>
                       <p className="font-bold text-sm">{item.name}</p>
                       <p className="text-xs text-[var(--text-secondary)]">{item.value}</p>
                    </div>
                    <Badge color={item.up ? 'emerald' : 'rose'} size="xs" className="font-bold">
                       {item.change}
                    </Badge>
                 </div>
              ))}
           </CardContent>
        </Card>
      </div>

      {/* Assets Table */}
      <Card padding="none" className="overflow-hidden">
         <CardHeader className="p-8 pb-4">
            <CardTitle className="text-xl">Holdings Breakdown</CardTitle>
         </CardHeader>
         <CardContent className="p-0">
            <Table>
               <TableHeader>
                  <TableRow className="bg-[var(--glass-border)]/50 border-none">
                     <TableHead className="py-4 pl-8">Asset</TableHead>
                     <TableHead className="py-4">Type</TableHead>
                     <TableHead className="py-4">Balance</TableHead>
                     <TableHead className="py-4">Price</TableHead>
                     <TableHead className="py-4 text-right pr-8">Value</TableHead>
                  </TableRow>
               </TableHeader>
               <TableBody>
                  {assets.map((asset, i) => (
                     <TableRow key={i} className="border-[var(--glass-border)]/30 hover:bg-white/5 transition-colors">
                        <TableCell className="pl-8">
                           <div className="flex items-center gap-4 py-2">
                              <div className="w-10 h-10 rounded-xl bg-[var(--glass-border)] flex items-center justify-center text-lg">
                                 {asset.type === 'Crypto' ? <RiBitCoinLine className="text-amber-500" /> : <RiLineChartLine className="text-blue-500" />}
                              </div>
                              <div>
                                 <p className="font-bold text-sm">{asset.name}</p>
                                 <p className="text-[10px] text-[var(--text-secondary)] font-bold">{asset.ticker}</p>
                              </div>
                           </div>
                        </TableCell>
                        <TableCell>
                           <Badge color="glass" size="xs" className="font-bold">{asset.type}</Badge>
                        </TableCell>
                        <TableCell className="font-mono text-sm">{asset.balance}</TableCell>
                        <TableCell>
                           <div className="flex items-center gap-2">
                              <p className="font-bold text-sm">{asset.price}</p>
                              <span className={`text-[10px] font-bold ${asset.change.startsWith('+') ? 'text-emerald-500' : 'text-rose-500'}`}>
                                 {asset.change}
                              </span>
                           </div>
                        </TableCell>
                        <TableCell className="text-right pr-8">
                           <p className="font-bold text-sm">{asset.value}</p>
                        </TableCell>
                     </TableRow>
                  ))}
               </TableBody>
            </Table>
         </CardContent>
      </Card>
    </div>
  );
};

export default Investments;
