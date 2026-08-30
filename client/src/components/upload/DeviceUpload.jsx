import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import {
  RiDeleteBinLine,
  RiFileLine,
  RiFolderOpenLine,
  RiShieldCheckLine,
  RiUploadCloud2Line,
} from 'react-icons/ri';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import { Progress } from '../ui/Progress';

const formatBytes = (bytes) => {
  if (!bytes) return '0 B';
  const units = ['B', 'KB', 'MB', 'GB'];
  const unitIndex = Math.min(Math.floor(Math.log(bytes) / Math.log(1024)), units.length - 1);
  return `${(bytes / (1024 ** unitIndex)).toFixed(unitIndex ? 1 : 0)} ${units[unitIndex]}`;
};

const DeviceUpload = () => {
  const inputRef = useRef(null);
  const [files, setFiles] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const [uploaded, setUploaded] = useState(false);

  const addFiles = (fileList) => {
    const incoming = Array.from(fileList || []);
    setFiles((current) => {
      const known = new Set(current.map((file) => `${file.name}-${file.size}-${file.lastModified}`));
      return [...current, ...incoming.filter((file) => !known.has(`${file.name}-${file.size}-${file.lastModified}`))];
    });
    setUploaded(false);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setIsDragging(false);
    addFiles(event.dataTransfer.files);
  };

  return (
    <Card padding="lg" className="overflow-hidden">
      <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-xl font-bold">Upload from your device</h2>
          <p className="mt-1 text-sm text-[var(--text-secondary)]">Select one or more files from your computer.</p>
        </div>
        <span className="flex items-center gap-2 text-xs font-semibold text-emerald-500"><RiShieldCheckLine /> Encrypted transfer</span>
      </div>

      <input ref={inputRef} type="file" multiple className="hidden" onChange={(event) => addFiles(event.target.files)} />
      <motion.div
        animate={{ scale: isDragging ? 1.01 : 1 }}
        onDragEnter={(event) => { event.preventDefault(); setIsDragging(true); }}
        onDragOver={(event) => event.preventDefault()}
        onDragLeave={() => setIsDragging(false)}
        onDrop={handleDrop}
        className={`flex min-h-64 flex-col items-center justify-center rounded-3xl border-2 border-dashed p-6 text-center transition-colors ${isDragging ? 'border-[var(--aurora-1)] bg-[var(--aurora-1)]/10' : 'border-[var(--glass-border)] bg-[var(--bg-primary)]/40'}`}
      >
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[var(--aurora-1)] to-[var(--aurora-2)] text-3xl text-white shadow-lg shadow-[var(--aurora-1)]/20">
          <RiUploadCloud2Line />
        </div>
        <h3 className="text-lg font-bold">Drag and drop files here</h3>
        <p className="mt-2 max-w-md text-sm text-[var(--text-secondary)]">Any file type is supported. The maximum size depends on your current plan.</p>
        <Button type="button" variant="glass" className="mt-5" onClick={() => inputRef.current?.click()}><RiFolderOpenLine /> Browse files</Button>
      </motion.div>

      {files.length > 0 && (
        <div className="mt-6 space-y-3">
          <div className="flex items-center justify-between">
            <p className="text-sm font-bold">Upload queue ({files.length})</p>
            <button type="button" onClick={() => { setFiles([]); setUploaded(false); }} className="text-xs font-semibold text-rose-500 hover:underline">Clear all</button>
          </div>
          {files.map((file) => (
            <div key={`${file.name}-${file.size}-${file.lastModified}`} className="rounded-2xl border border-[var(--glass-border)] bg-[var(--bg-primary)]/50 p-4">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--aurora-1)]/10 text-xl text-[var(--aurora-1)]"><RiFileLine /></span>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-bold">{file.name}</p>
                  <p className="mt-1 text-xs text-[var(--text-secondary)]">{formatBytes(file.size)} · {uploaded ? 'Completed' : 'Ready'}</p>
                </div>
                <button type="button" aria-label={`Remove ${file.name}`} onClick={() => setFiles((current) => current.filter((item) => item !== file))} className="rounded-lg p-2 text-[var(--text-secondary)] hover:bg-rose-500/10 hover:text-rose-500"><RiDeleteBinLine /></button>
              </div>
              {uploaded && <Progress value={100} variant="success" size="xs" className="mt-3" />}
            </div>
          ))}
          <Button type="button" size="lg" className="mt-2 w-full" onClick={() => setUploaded(true)} disabled={uploaded}>
            <RiUploadCloud2Line /> {uploaded ? 'Upload complete' : `Upload ${files.length} ${files.length === 1 ? 'file' : 'files'}`}
          </Button>
        </div>
      )}
    </Card>
  );
};

export default DeviceUpload;
