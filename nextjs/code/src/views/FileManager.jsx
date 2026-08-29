import React from 'react';
import { motion } from 'framer-motion';
import { RiFolder3Fill, RiFilePdfLine, RiFileImageLine, RiFileZipLine, RiAddFill, RiMore2Fill } from 'react-icons/ri';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';

const FileManager = () => {
  const folders = [
    { id: 1, name: 'Project Assets', files: '24 items', size: '1.2 GB' },
    { id: 2, name: 'Brand Guidelines', files: '8 items', size: '450 MB' },
    { id: 3, name: 'Invoices 2026', files: '45 items', size: '12 MB' },
    { id: 4, name: 'Design Drafts', files: '12 items', size: '2.4 GB' },
  ];

  const recentFiles = [
    { id: 1, name: 'Quarterly_Report_Q1.pdf', type: 'pdf', size: '2.4 MB', date: 'Today, 10:45 AM' },
    { id: 2, name: 'Hero_Image_V4.png', type: 'image', size: '4.1 MB', date: 'Yesterday, 03:20 PM' },
    { id: 3, name: 'Src_Backup.zip', type: 'zip', size: '145 MB', date: 'Mar 24, 09:12 AM' },
    { id: 4, name: 'Contract_Signed.pdf', type: 'pdf', size: '1.8 MB', date: 'Mar 22, 11:30 AM' },
  ];

  const getFileIcon = (type) => {
    switch(type) {
      case 'pdf': return <RiFilePdfLine className="text-rose-500" size={24} />;
      case 'image': return <RiFileImageLine className="text-emerald-500" size={24} />;
      case 'zip': return <RiFileZipLine className="text-amber-500" size={24} />;
      default: return <RiFolder3Fill className="text-blue-500" size={24} />;
    }
  };

  return (
    <div className="p-6 md:p-12 min-h-[calc(100vh-100px)] text-[var(--text-primary)] relative">
      <motion.div
        className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-2 tracking-tight">
            File <span className="text-gradient from-amber-400 to-orange-500">Manager</span>
          </h1>
          <p className="text-[var(--text-secondary)] text-lg">Central storage for project documents and assets.</p>
        </div>
        <Button variant="glass" size="lg" className="font-bold gap-2 text-amber-500 hover:text-white hover:bg-amber-500">
          <RiAddFill size={20} /> Upload New
        </Button>
      </motion.div>

      <h3 className="text-xl font-bold mb-6 flex items-center gap-2">Quick Folders</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {folders.map((folder, idx) => (
          <Card
            key={folder.id}
            variant="interactive"
            transition={{ delay: idx * 0.05 }}
            className="group cursor-pointer"
          >
            <div className="flex justify-between items-start mb-4">
              <RiFolder3Fill size={40} className="text-amber-500 group-hover:scale-110 transition-transform" />
              <Button variant="ghost" size="icon-xs"><RiMore2Fill size={20} /></Button>
            </div>
            <h4 className="font-bold text-lg mb-1 truncate">{folder.name}</h4>
            <div className="flex items-center justify-between text-xs text-[var(--text-secondary)] font-medium">
              <span>{folder.files}</span>
              <span>{folder.size}</span>
            </div>
          </Card>
        ))}
      </div>

      <h3 className="text-xl font-bold mb-6 flex items-center gap-2">Recent Files</h3>
      <div className="flex flex-col gap-4">
        {recentFiles.map((file, idx) => (
          <Card
            key={file.id}
            padding="sm"
            transition={{ delay: 0.2 + (idx * 0.05) }}
            className="hover:bg-[var(--glass-border)]/50 transition-colors flex items-center justify-between gap-4 cursor-pointer"
          >
            <div className="flex items-center gap-4 flex-1 min-w-0">
              <div className="w-12 h-12 rounded-xl bg-[var(--bg-primary)] flex items-center justify-center flex-shrink-0 shadow-sm border border-[var(--glass-border)]">
                {getFileIcon(file.type)}
              </div>
              <div className="min-w-0">
                <h4 className="font-bold text-sm truncate">{file.name}</h4>
                <p className="text-[10px] uppercase tracking-wider text-[var(--text-secondary)] font-bold mt-1">{file.date}</p>
              </div>
            </div>
            <span className="text-xs font-mono font-bold text-[var(--text-secondary)] hidden md:block">
              {file.size}
            </span>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default FileManager;
