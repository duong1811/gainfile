import { useState } from 'react';
import { RiCloudLine, RiDropboxFill, RiDriveFill, RiMicrosoftFill, RiShieldKeyholeLine } from 'react-icons/ri';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';

const providers = [
  { id: 'google-drive', name: 'Google Drive', description: 'Import from your Drive account', icon: RiDriveFill, color: 'text-emerald-500 bg-emerald-500/10' },
  { id: 'dropbox', name: 'Dropbox', description: 'Choose files stored in Dropbox', icon: RiDropboxFill, color: 'text-blue-500 bg-blue-500/10' },
  { id: 'onedrive', name: 'OneDrive', description: 'Connect your Microsoft storage', icon: RiMicrosoftFill, color: 'text-sky-500 bg-sky-500/10' },
];

const CloudUpload = () => {
  const [connectedProvider, setConnectedProvider] = useState(null);

  return (
    <Card padding="lg">
      <div className="mb-7 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10 text-2xl text-blue-500"><RiCloudLine /></span>
          <h2 className="text-xl font-bold">Import from cloud storage</h2>
          <p className="mt-1 text-sm text-[var(--text-secondary)]">Connect a provider and select files without downloading them first.</p>
        </div>
        <span className="flex items-center gap-2 text-xs font-semibold text-[var(--text-secondary)]"><RiShieldKeyholeLine /> OAuth secure connection</span>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {providers.map(({ id, name, description, icon: Icon, color }) => {
          const isConnected = connectedProvider === id;
          return (
            <button
              key={id}
              type="button"
              onClick={() => setConnectedProvider(id)}
              className={`rounded-2xl border p-5 text-left transition-all ${isConnected ? 'border-[var(--aurora-1)] bg-[var(--aurora-1)]/10 shadow-lg shadow-[var(--aurora-1)]/10' : 'border-[var(--glass-border)] bg-[var(--bg-primary)]/40 hover:-translate-y-1 hover:border-[var(--aurora-1)]/50'}`}
            >
              <span className={`flex h-12 w-12 items-center justify-center rounded-xl text-2xl ${color}`}><Icon /></span>
              <h3 className="mt-5 font-bold">{name}</h3>
              <p className="mt-2 text-xs leading-5 text-[var(--text-secondary)]">{description}</p>
              <p className={`mt-5 text-xs font-bold ${isConnected ? 'text-emerald-500' : 'text-[var(--aurora-1)]'}`}>{isConnected ? 'Connected' : 'Connect account'}</p>
            </button>
          );
        })}
      </div>

      {connectedProvider && (
        <div className="mt-6 flex flex-col gap-4 rounded-2xl border border-[var(--glass-border)] bg-[var(--bg-primary)]/50 p-5 sm:flex-row sm:items-center sm:justify-between">
          <div><p className="font-bold">Cloud account connected</p><p className="mt-1 text-xs text-[var(--text-secondary)]">Open the file picker to choose content for import.</p></div>
          <Button type="button"><RiCloudLine /> Choose cloud files</Button>
        </div>
      )}
    </Card>
  );
};

export default CloudUpload;
