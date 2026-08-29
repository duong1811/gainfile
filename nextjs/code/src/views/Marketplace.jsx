import React from 'react';
import { motion } from 'framer-motion';
import { 
  RiLayoutGridLine, 
  RiSearchLine, 
  RiDownloadCloud2Line, 
  RiShieldCheckLine,
  RiStarFill,
  RiExternalLinkLine,
  RiAppsLine,
  RiFireLine
} from 'react-icons/ri';
import { Card, CardContent, CardTitle, CardDescription, CardImage, CardFooter } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';

const Marketplace = () => {
  const apps = [
    { title: 'Slack Connector', category: 'Communication', rating: 4.8, price: 'Free', icon: 'RiMessage3Line', color: 'bg-purple-500' },
    { title: 'Jira Sync Pro', category: 'DevOps', rating: 4.9, price: '$12/mo', icon: 'RiFlowChart', color: 'bg-blue-500' },
    { title: 'Stripe Billing', category: 'Finance', rating: 5.0, price: 'Premium', icon: 'RiBankCardLine', color: 'bg-indigo-600' },
    { title: 'AWS Monitor', category: 'Infrastructure', rating: 4.7, price: '$24/mo', icon: 'RiCloudLine', color: 'bg-orange-500' },
    { title: 'GitHub Actions', category: 'DevOps', rating: 4.9, price: 'Free', icon: 'RiGithubLine', color: 'bg-zinc-800' },
    { title: 'Zoom Scheduler', category: 'Meetings', rating: 4.6, price: '$5/mo', icon: 'RiVideoChatLine', color: 'bg-blue-400' },
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
            App <span className="text-gradient from-[var(--aurora-1)] to-[var(--aurora-2)]">Marketplace</span>
          </h1>
          <p className="text-[var(--text-secondary)] text-lg font-medium">Extend your workspace with professional integrations.</p>
        </div>
        <div className="flex gap-3">
          <Button variant="glass" className="gap-2 font-bold"><RiLayoutGridLine /> My Apps</Button>
          <Button variant="primary" className="gap-2 font-bold"><RiDownloadCloud2Line /> Installed</Button>
        </div>
      </motion.div>

      {/* Hero Section */}
      <Card variant="aurora" className="mb-12 p-8 md:p-12 border-none">
        <div className="max-w-3xl">
          <Badge color="aurora-1" rounded="full" className="mb-6 font-bold uppercase tracking-widest">Featured Extension</Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">Supercharge your workflow with <span className="text-[var(--aurora-1)]">Advanced Automations</span></h2>
          <p className="text-lg text-[var(--text-secondary)] mb-8 font-medium">Connect over 500+ apps and create complex multi-step workflows in seconds. No coding required.</p>
          <div className="flex flex-wrap gap-4">
             <Button variant="primary" size="lg" className="rounded-2xl font-bold px-10">Get Started</Button>
             <Button variant="glass" size="lg" className="rounded-2xl font-bold px-10">Learn More</Button>
          </div>
        </div>
        <div className="absolute top-1/2 right-12 -translate-y-1/2 opacity-20 hidden lg:block">
           <RiAppsLine size={240} className="text-[var(--aurora-1)] rotate-12" />
        </div>
      </Card>

      <div className="flex flex-col md:flex-row gap-6 mb-10 items-center justify-between">
         <div className="relative w-full md:w-96">
            <Input 
               placeholder="Search extensions..." 
               className="pl-12 py-6 rounded-2xl bg-black/20 border-white/5"
               variant="blue"
            />
            <RiSearchLine className="absolute left-4 top-1/2 -translate-y-1/2 text-xl text-[var(--text-secondary)]" />
         </div>
         <div className="flex gap-2 w-full md:w-auto overflow-x-auto pb-2 no-scrollbar">
            {['All', 'DevOps', 'Finance', 'Design', 'Communication', 'Infrastructure'].map(cat => (
               <Badge key={cat} color={cat === 'All' ? 'aurora-1' : 'glass'} className="cursor-pointer whitespace-nowrap px-4 py-2 font-bold">
                  {cat}
               </Badge>
            ))}
         </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {apps.map((app, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
          >
            <Card variant="interactive" padding="none" className="h-full flex flex-col group">
               <div className="p-6 flex-1">
                  <div className="flex justify-between items-start mb-6">
                     <div className={`w-14 h-14 rounded-2xl ${app.color} flex items-center justify-center text-white shadow-xl group-hover:scale-110 transition-transform duration-500`}>
                        <RiAppsLine size={32} />
                     </div>
                     <div className="flex items-center gap-1 bg-black/20 px-2 py-1 rounded-lg">
                        <RiStarFill className="text-amber-500 text-xs" />
                        <span className="text-xs font-bold">{app.rating}</span>
                     </div>
                  </div>
                  <Badge color="glass" size="xs" className="mb-2 uppercase tracking-widest font-bold opacity-60">{app.category}</Badge>
                  <CardTitle className="text-xl mb-2">{app.title}</CardTitle>
                  <CardDescription className="font-medium text-xs leading-relaxed">
                     Seamlessly integrate your workflow with our professional {app.title} extension for Trackify.
                  </CardDescription>
               </div>
               <CardFooter className="px-6 py-4 bg-white/5 flex justify-between items-center border-t border-white/5">
                  <span className="font-bold text-[var(--aurora-1)]">{app.price}</span>
                  <Button variant="ghost" size="sm" className="gap-2 font-bold hover:bg-[var(--aurora-1)] hover:text-white transition-all">
                     Install <RiDownloadCloud2Line />
                  </Button>
               </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Marketplace;
