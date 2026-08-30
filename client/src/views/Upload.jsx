import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  RiCloudLine,
  RiFolder3Fill,
  RiGlobalLine,
  RiHardDrive2Line,
  RiInformationLine,
  RiServerLine,
  RiUploadCloud2Line,
} from 'react-icons/ri';
import DeviceUpload from '../components/upload/DeviceUpload';
import RemoteUrlUpload from '../components/upload/RemoteUrlUpload';
import CloudUpload from '../components/upload/CloudUpload';
import FtpUpload from '../components/upload/FtpUpload';
import { Card } from '../components/ui/Card';
import { Progress } from '../components/ui/Progress';
import { Select } from '../components/ui/Select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/Tabs';

const uploadMethods = [
  { value: 'device', label: 'Device', icon: RiUploadCloud2Line },
  { value: 'remote', label: 'Remote URL', icon: RiGlobalLine },
  { value: 'cloud', label: 'Cloud', icon: RiCloudLine },
  { value: 'ftp', label: 'FTP', icon: RiServerLine },
];

const Upload = ({ initialMethod = 'device' }) => {
  const [destinationFolder, setDestinationFolder] = useState('my-files');

  return (
    <div className="min-h-[calc(100vh-100px)] p-6 text-[var(--text-primary)] md:p-12">
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
          <Card padding="sm" className="mb-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-amber-500/10 text-xl text-amber-500">
                <RiFolder3Fill />
              </span>
              <div className="min-w-0 flex-1">
                <label htmlFor="upload-destination" className="text-sm font-bold">Destination folder</label>
                <p className="mt-1 text-xs text-[var(--text-secondary)]">All files in this upload will be saved to the selected folder.</p>
              </div>
              <div className="w-full shrink-0 sm:w-64">
                <Select
                  id="upload-destination"
                  value={destinationFolder}
                  onChange={(event) => setDestinationFolder(event.target.value)}
                  size="sm"
                >
                  <option value="my-files">My Files / Root</option>
                  <option value="videos">Videos</option>
                  <option value="project-assets">Project Assets</option>
                  <option value="documents">Documents</option>
                  <option value="shared">Shared Files</option>
                </Select>
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
