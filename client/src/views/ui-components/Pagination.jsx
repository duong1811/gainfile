import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RiArrowLeftSLine, RiArrowRightSLine, RiArrowDownSLine } from 'react-icons/ri';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationPrevious,
  PaginationNext,
  PaginationEllipsis
} from '../../components/ui/Pagination';

const PaginationDemo = () => {
  const [currentPage, setCurrentPage] = useState(3);
  const [loadingMore, setLoadingMore] = useState(false);
  const totalPages = 10;

  const handleLoadMore = () => {
    setLoadingMore(true);
    setTimeout(() => setLoadingMore(false), 2000);
  };

  return (
    <div className="py-6 md:py-12 min-h-[calc(100vh-100px)] text-[var(--text-primary)] space-y-10 z-0 relative">
      <div>
        <h1 className="text-3xl font-bold text-[var(--text-primary)] mb-2">Pagination & Loading</h1>
        <p className="text-[var(--text-secondary)]">Ways to traverse large data boundaries: Pagers, Infinities, and Loaders.</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Numbered Pager */}
        <Card padding="lg" className="flex flex-col space-y-8 min-h-[250px] lg:col-span-2">
          <h2 className="text-xl font-semibold text-[var(--text-primary)]">Classic Navigation Group</h2>
          
          <div className="flex flex-col md:flex-row items-center justify-between w-full p-4 md:p-6 bg-black/20 rounded-2xl border border-[var(--glass-border)] gap-6 shadow-inner">
             <div className="text-sm text-[var(--text-secondary)] font-medium">
               Displaying limits: <span className="font-bold text-[var(--text-primary)]">{(currentPage-1)*10 + 1}-{currentPage*10}</span> of <span className="font-bold text-[var(--text-primary)]">941 Results</span>
             </div>
             
             <Pagination>
               <PaginationContent>
                 <PaginationItem>
                   <PaginationPrevious 
                     onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                     disabled={currentPage === 1}
                   />
                 </PaginationItem>
                 
                 {[1, 2, 3, 4, 5].map(i => (
                   <PaginationItem key={i}>
                     <PaginationLink 
                       isActive={currentPage === i}
                       onClick={() => setCurrentPage(i)}
                     >
                       {i}
                     </PaginationLink>
                   </PaginationItem>
                 ))}
                 
                 <PaginationItem>
                   <PaginationEllipsis />
                 </PaginationItem>
                 
                 <PaginationItem>
                   <PaginationLink 
                     isActive={currentPage === totalPages}
                     onClick={() => setCurrentPage(totalPages)}
                   >
                     {totalPages}
                   </PaginationLink>
                 </PaginationItem>
                 
                 <PaginationItem>
                   <PaginationNext 
                     onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                     disabled={currentPage === totalPages}
                   />
                 </PaginationItem>
               </PaginationContent>
             </Pagination>
          </div>
        </Card>

        {/* Previous Next Block */}
        <Card padding="lg" className="flex flex-col space-y-6">
          <h2 className="text-xl font-semibold text-[var(--text-primary)]">Blog / Article Navigation</h2>
          
          <div className="flex w-full items-stretch justify-between h-24 divide-x divide-white/5 bg-gradient-to-br from-black/40 to-black/10 rounded-2xl overflow-hidden border border-white/10 group cursor-pointer hover:border-[var(--aurora-1)]/50 transition duration-500 shadow-xl">
             <button className="flex flex-col items-start justify-center px-6 w-1/2 bg-white/5 hover:bg-white/10 transition-colors">
                <span className="text-[10px] text-[var(--text-secondary)] font-bold tracking-[0.2em] uppercase mb-1.5 flex items-center gap-1 opacity-70"><RiArrowLeftSLine className="text-sm" /> Previous Post</span>
                <span className="text-sm font-bold text-[var(--text-primary)] truncate w-full text-left text-blue-400">Database Indexing Guides</span>
             </button>
             <button className="flex flex-col items-end justify-center px-6 w-1/2 bg-white/5 hover:bg-white/10 transition-colors">
                <span className="text-[10px] text-[var(--text-secondary)] font-bold tracking-[0.2em] uppercase mb-1.5 flex items-center justify-end gap-1 opacity-70 w-full text-right">Next Post <RiArrowRightSLine className="text-sm" /></span>
                <span className="text-sm font-bold text-[var(--aurora-1)] truncate w-full text-right">React Server Components</span>
             </button>
          </div>
        </Card>
        
        {/* Load More Button */}
        <Card padding="lg" className="flex flex-col space-y-6 shrink-0 h-auto self-start min-h-[200px]">
          <h2 className="text-xl font-semibold text-[var(--text-primary)]">Manual "Load More"</h2>
          <div className="w-full flex-1 flex flex-col items-center justify-center">
            <Button 
               onClick={handleLoadMore}
               disabled={loadingMore}
               variant="aurora1"
               size="xl"
               className={loadingMore ? 'w-20' : 'px-8'}
            >
               <AnimatePresence mode="wait">
                 {loadingMore ? (
                   <motion.div key="spinner" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex justify-center -ml-1">
                      <RiArrowDownSLine className="text-xl animate-bounce text-white" />
                   </motion.div>
                 ) : (
                   <motion.span key="text" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                      Load 24 More Responses
                   </motion.span>
                 )}
               </AnimatePresence>
            </Button>
            <p className="text-xs font-bold text-[var(--text-secondary)] mt-4 uppercase tracking-[0.1em]">24 / 148 Items Displayed</p>
          </div>
        </Card>

      </div>
    </div>
  );
};

export default PaginationDemo;
