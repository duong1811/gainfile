import { useState } from 'react';
import { RiAddLine, RiCheckLine, RiGlobalLine, RiLink } from 'react-icons/ri';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import { Textarea } from '../ui/Textarea';

const RemoteUrlUpload = () => {
  const [value, setValue] = useState('');
  const [urls, setUrls] = useState([]);
  const [started, setStarted] = useState(false);

  const addUrls = () => {
    const incoming = value.split(/\r?\n/).map((url) => url.trim()).filter(Boolean);
    setUrls((current) => [...new Set([...current, ...incoming])]);
    setValue('');
    setStarted(false);
  };

  return (
    <Card padding="lg">
      <div className="mb-6">
        <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10 text-2xl text-cyan-500"><RiGlobalLine /></span>
        <h2 className="text-xl font-bold">Remote URL upload</h2>
        <p className="mt-1 text-sm text-[var(--text-secondary)]">Import files directly from public HTTP or HTTPS links.</p>
      </div>

      <label className="text-sm font-bold" htmlFor="remote-urls">File URLs</label>
      <Textarea id="remote-urls" rows={7} value={value} onChange={(event) => setValue(event.target.value)} placeholder={'https://example.com/video.mp4\nhttps://example.com/archive.zip'} className="mt-2 font-mono text-sm" />
      <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-[var(--text-secondary)]">Enter one direct URL per line.</p>
        <Button type="button" variant="glass" onClick={addUrls} disabled={!value.trim()}><RiAddLine /> Add URLs</Button>
      </div>

      {urls.length > 0 && (
        <div className="mt-6 space-y-3 border-t border-[var(--glass-border)] pt-6">
          <p className="text-sm font-bold">Import queue ({urls.length})</p>
          {urls.map((url) => (
            <div key={url} className="flex items-center gap-3 rounded-2xl border border-[var(--glass-border)] p-4">
              <RiLink className="shrink-0 text-xl text-cyan-500" />
              <span className="min-w-0 flex-1 truncate font-mono text-xs">{url}</span>
              {started && <span className="flex items-center gap-1 text-xs font-bold text-emerald-500"><RiCheckLine /> Imported</span>}
            </div>
          ))}
          <Button type="button" size="lg" className="w-full" disabled={started} onClick={() => setStarted(true)}><RiGlobalLine /> {started ? 'Import complete' : 'Start remote import'}</Button>
        </div>
      )}
    </Card>
  );
};

export default RemoteUrlUpload;
