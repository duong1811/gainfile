import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import {
  RiAddLine,
  RiArrowDownSLine,
  RiCheckLine,
  RiCloudLine,
  RiFolder3Fill,
  RiGlobalLine,
  RiHardDrive2Line,
  RiInformationLine,
  RiSearchLine,
  RiServerLine,
  RiUploadCloud2Line,
} from 'react-icons/ri';
import DeviceUpload from '../components/upload/DeviceUpload';
import RemoteUrlUpload from '../components/upload/RemoteUrlUpload';
import CloudUpload from '../components/upload/CloudUpload';
import FtpUpload from '../components/upload/FtpUpload';
import { Card } from '../components/ui/Card';
import { Progress } from '../components/ui/Progress';
import { Input } from '../components/ui/Input';
import { Dropdown, DropdownTrigger, DropdownContent, DropdownItem } from '../components/ui/Dropdown';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/Tabs';
import { initialFolders } from '../components/file-manager/fileManagerData';

const uploadMethods = [
  { value: 'device', label: 'Device', icon: RiUploadCloud2Line },
  { value: 'remote', label: 'Remote URL', icon: RiGlobalLine },
  { value: 'cloud', label: 'Cloud', icon: RiCloudLine },
  { value: 'ftp', label: 'FTP', icon: RiServerLine },
];

const BASE_FOLDER_OPTIONS = [
  { id: 'my-files', name: 'My Files / Root' },
  ...initialFolders.map((folder) => ({ id: folder.id, name: folder.name })),
];

const slugifyFolderName = (name) => name.trim().toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') || `folder-${Date.now()}`;

const Upload = ({ initialMethod = 'device' }) => {
  const [destinationFolder, setDestinationFolder] = useState('my-files');
  const [customFolders, setCustomFolders] = useState([]);
  const [folderQuery, setFolderQuery] = useState('');

  const allFolders = useMemo(() => [...BASE_FOLDER_OPTIONS, ...customFolders], [customFolders]);
  const filteredFolders = useMemo(() => {
    const query = folderQuery.trim().toLowerCase();
    if (!query) return allFolders;
    return allFolders.filter((folder) => folder.name.toLowerCase().includes(query));
  }, [allFolders, folderQuery]);
  const hasExactMatch = allFolders.some((folder) => folder.name.toLowerCase() === folderQuery.trim().toLowerCase());
  const selectedFolder = allFolders.find((folder) => folder.id === destinationFolder);

  const handleSelectFolder = (folderId) => {
    setDestinationFolder(folderId);
    setFolderQuery('');
  };

  const handleCreateFolder = () => {
    const name = folderQuery.trim();
    if (!name) return;
    const newFolder = { id: slugifyFolderName(name), name };
    setCustomFolders((current) => [...current, newFolder]);
    handleSelectFolder(newFolder.id);
  };

  return (
    <div className="min-h-[calc(100vh-100px)] py-6 text-[var(--text-primary)] md:py-12">
    <motion.div
      className="mb-8 flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
    >
      <div>
        <p className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[var(--aurora-1)]"><RiUploadCloud2Line /> Secure uploader</p>
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Upload <span className="text-gradient from-[var(--aurora-1)] to-[var(--aurora-2)]">Files</span></h1>
        <p className="mt-2 max-w-2xl text-lg text-[var(--text-secondary)]">Choose the upload method that works best for your files and workflow.</p>
      </div>
    </motion.div>

      <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_280px]">
        <div className="min-w-0">
          <Card padding="sm" overflow="visible" className="mb-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-amber-500/20 text-xl text-amber-500">
                <RiFolder3Fill />
              </span>
              <div className="min-w-0 flex-1">
                <label htmlFor="upload-destination" className="text-sm font-bold">Destination folder</label>
                <p className="mt-1 text-xs text-[var(--text-secondary)]">All files in this upload will be saved to the selected folder.</p>
              </div>
              <div className="w-full shrink-0 sm:w-72">
                <Dropdown className="w-full block">
                  <DropdownTrigger asChild>
                    <button
                      id="upload-destination"
                      type="button"
                      className="flex w-full items-center justify-between gap-2 rounded-xl border border-[var(--glass-border)] bg-[var(--glass-bg)] px-4 py-2.5 text-left text-sm font-bold text-[var(--text-primary)] transition-colors hover:bg-[var(--glass-border)]"
                    >
                      <span className="flex min-w-0 items-center gap-2">
                        <RiFolder3Fill className="shrink-0 text-[var(--aurora-1)]" />
                        <span className="truncate">{selectedFolder?.name || 'Select folder'}</span>
                      </span>
                      <RiArrowDownSLine className="shrink-0 text-[var(--text-secondary)]" />
                    </button>
                  </DropdownTrigger>
                  <DropdownContent align="right" width="w-full sm:w-72" className="p-2">
                    <div className="relative mb-2">
                      <RiSearchLine className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[var(--text-secondary)]" size={16} />
                      <Input
                        size="sm"
                        placeholder="Search or create folder..."
                        value={folderQuery}
                        onChange={(event) => setFolderQuery(event.target.value)}
                        onClick={(event) => event.stopPropagation()}
                        className="pl-9"
                        autoFocus
                      />
                    </div>
                    <div className="max-h-56 space-y-0.5 overflow-y-auto pr-1">
                      {filteredFolders.length === 0 && (
                        <p className="px-3 py-4 text-center text-xs text-[var(--text-secondary)]">No folders found.</p>
                      )}
                      {filteredFolders.map((folder) => (
                        <DropdownItem
                          key={folder.id}
                          onClick={() => handleSelectFolder(folder.id)}
                          className="justify-between rounded-lg"
                        >
                          <span className="flex min-w-0 items-center gap-2">
                            <RiFolder3Fill className="shrink-0 text-[var(--text-secondary)]" size={16} />
                            <span className="truncate">{folder.name}</span>
                          </span>
                          {destinationFolder === folder.id && <RiCheckLine className="shrink-0 text-[var(--aurora-1)]" />}
                        </DropdownItem>
                      ))}
                    </div>
                    {folderQuery.trim() && !hasExactMatch && (
                      <DropdownItem
                        onClick={handleCreateFolder}
                        className="mt-1 rounded-lg border-t border-[var(--glass-border)] pt-3 font-bold text-[var(--aurora-1)]"
                      >
                        <RiAddLine className="shrink-0" /> Create folder &ldquo;{folderQuery.trim()}&rdquo;
                      </DropdownItem>
                    )}
                  </DropdownContent>
                </Dropdown>
              </div>
            </div>
          </Card>

          <Tabs defaultValue={initialMethod} variant="underline">
            <TabsList className="mb-6">
              {uploadMethods.map(({ value, label, icon }) => <TabsTrigger key={value} value={value} icon={icon}>{label}</TabsTrigger>)}
            </TabsList>
            <TabsContent value="device"><DeviceUpload /></TabsContent>
            <TabsContent value="remote"><RemoteUrlUpload /></TabsContent>
            <TabsContent value="cloud"><CloudUpload /></TabsContent>
            <TabsContent value="ftp"><FtpUpload /></TabsContent>
          </Tabs>
        </div>

        <aside className="space-y-6">
          <Card padding="md">
            <div className="flex items-center justify-between text-sm"><span className="font-bold">Storage usage</span><span className="font-mono text-xs text-[var(--text-secondary)]">36%</span></div>
            <Progress value={72.4} max={200} variant="aurora" size="sm" className="mt-4" />
            <p className="mt-3 text-xs text-[var(--text-secondary)]">72.4 GB used of your 200 GB Free plan.</p>
          </Card>
          <Card padding="md">
            <RiInformationLine className="text-2xl text-[var(--aurora-1)]" />
            <h3 className="mt-3 font-bold">Before uploading</h3>
            <ul className="mt-4 space-y-3 text-xs leading-5 text-[var(--text-secondary)]">
              <li>• Do not upload copyrighted or prohibited content.</li>
              <li>• Keep this page open until active transfers finish.</li>
              <li>• Uploaded files are private until you share them.</li>
            </ul>
          </Card>
        </aside>
      </div>
    </div>
  );
};

export default Upload;
