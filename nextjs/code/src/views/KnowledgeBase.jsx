import React from 'react';
import { motion } from 'framer-motion';
import { 
  RiLayoutGridLine,
  RiBookReadLine, 
  RiSearchLine, 
  RiVideoLine, 
  RiTerminalBoxLine,
  RiQuestionLine,
  RiArrowRightLine,
  RiBookmarkLine,
  RiInformationLine,
  RiStarLine
} from 'react-icons/ri';

import { Card, CardHeader, CardContent, CardTitle, CardDescription } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';

const KnowledgeBase = () => {
  const categories = [
    { title: 'Getting Started', count: 12, icon: RiStarLine, color: 'text-amber-500' },
    { title: 'API Reference', count: 45, icon: RiTerminalBoxLine, color: 'text-blue-500' },
    { title: 'Video Tutorials', count: 8, icon: RiVideoLine, color: 'text-rose-500' },
    { title: 'Security Guides', count: 15, icon: RiBookmarkLine, color: 'text-emerald-500' },
    { title: 'Integrations', count: 28, icon: RiInformationLine, color: 'text-purple-500' },
    { title: 'Best Practices', count: 21, icon: RiBookReadLine, color: 'text-indigo-500' },
  ];

  const popularArticles = [
    'How to set up SSO for your team',
    'Understanding the Operational Intelligence API',
    'Migrating data from legacy systems',
    'Advanced habit tracking configurations',
    'Setting up your first automation workflow'
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
            Knowledge <span className="text-gradient from-[var(--aurora-1)] to-[var(--aurora-2)]">Base</span>
          </h1>
          <p className="text-[var(--text-secondary)] text-lg font-medium">Find answers, learn workflows, and master the platform.</p>
        </div>
        <div className="flex gap-3">
          <Button variant="glass" className="gap-2 font-bold"><RiQuestionLine /> Contact Support</Button>
        </div>
      </motion.div>

      {/* Hero Search Section */}
      <div className="relative mb-16 py-16 text-center">
         <div className="absolute inset-0 bg-gradient-to-br from-[var(--aurora-1)]/10 to-[var(--aurora-2)]/10 rounded-[3rem] -z-10 border border-[var(--glass-border)]"></div>
         <h2 className="text-3xl font-bold mb-8">How can we help you today?</h2>
         <div className="max-w-2xl mx-auto px-6 relative">
            <Input 
               placeholder="Search documentation, guides, or API methods..." 
               className="pl-14 py-8 rounded-[2rem] text-lg bg-black/40 border-white/10 shadow-2xl"
               variant="blue"
            />
            <RiSearchLine className="absolute left-10 top-1/2 -translate-y-1/2 text-2xl text-[var(--text-secondary)]" />
         </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
         {/* Categories Grid */}
         <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
               <RiLayoutGridLine className="text-[var(--aurora-1)]" />
               Browse by Topic
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
               {categories.map((cat, i) => (
                  <motion.div
                     key={i}
                     initial={{ opacity: 0, scale: 0.95 }}
                     animate={{ opacity: 1, scale: 1 }}
                     transition={{ delay: i * 0.05 }}
                  >
                     <Card variant="interactive" padding="lg" className="h-full flex items-center gap-6">
                        <div className={`w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center ${cat.color} border border-white/5`}>
                           <cat.icon size={28} />
                        </div>
                        <div>
                           <CardTitle className="text-lg mb-1">{cat.title}</CardTitle>
                           <CardDescription className="font-bold text-[10px] uppercase tracking-widest text-[var(--aurora-1)]">{cat.count} Articles</CardDescription>
                        </div>
                     </Card>
                  </motion.div>
               ))}
            </div>
         </div>

         {/* Sidebar Content */}
         <div className="space-y-10">
            {/* Popular Articles */}
            <Card variant="solid" className="border-none shadow-2xl">
               <CardHeader>
                  <CardTitle className="text-xl">Popular Reads</CardTitle>
               </CardHeader>
               <CardContent className="space-y-4">
                  {popularArticles.map((article, i) => (
                     <div key={i} className="group flex items-center justify-between py-2 border-b border-white/5 last:border-none cursor-pointer">
                        <span className="text-sm font-medium text-[var(--text-secondary)] group-hover:text-white transition-colors">{article}</span>
                        <RiArrowRightLine className="text-[var(--aurora-1)] opacity-0 group-hover:opacity-100 transition-opacity" />
                     </div>
                  ))}
               </CardContent>
            </Card>

            {/* Support CTA */}
            <Card variant="aurora" className="p-8">
               <CardTitle className="mb-4">Still need help?</CardTitle>
               <CardDescription className="mb-6 font-medium text-white/80">Our engineering and support team is available 24/7 for Enterprise customers.</CardDescription>
               <Button variant="primary" className="w-full font-bold py-6 rounded-2xl">Submit Ticket</Button>
            </Card>
         </div>
      </div>
    </div>
  );
};

export default KnowledgeBase;
