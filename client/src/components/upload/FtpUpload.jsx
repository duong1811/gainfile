import { useState } from 'react';
import { RiCheckLine, RiFileCopyLine, RiInformationLine, RiLock2Line, RiServerLine } from 'react-icons/ri';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import { Input } from '../ui/Input';
import { Select } from '../ui/Select';

const FtpUpload = () => {
  const [protocol, setProtocol] = useState('sftp');
  const [copied, setCopied] = useState('');

  const copyValue = async (label, value) => {
    await navigator.clipboard?.writeText(value);
    setCopied(label);
  };

  const credentials = [
    { label: 'Host', value: 'ftp.gainfile.com' },
    { label: 'Username', value: 'gf_alexander_1048' },
    { label: 'Port', value: protocol === 'sftp' ? '22' : '21' },
  ];

  return (
    <Card padding="lg">
      <div className="mb-7">
        <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-500/10 text-2xl text-violet-500"><RiServerLine /></span>
        <h2 className="text-xl font-bold">FTP upload</h2>
        <p className="mt-1 text-sm text-[var(--text-secondary)]">Transfer large batches with your preferred FTP client.</p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="space-y-4">
          <div>
            <label htmlFor="ftp-protocol" className="mb-2 block text-sm font-bold">Protocol</label>
            <Select id="ftp-protocol" value={protocol} onChange={(event) => { setProtocol(event.target.value); setCopied(''); }}>
              <option value="sftp">SFTP (recommended)</option>
              <option value="ftp">FTP</option>
            </Select>
          </div>
          {credentials.map(({ label, value }) => (
            <div key={label}>
              <label className="mb-2 block text-sm font-bold">{label}</label>
              <div className="flex gap-2">
                <Input readOnly value={value} className="font-mono text-sm" />
                <Button type="button" variant="glass" size="icon-lg" aria-label={`Copy ${label}`} onClick={() => copyValue(label, value)}>
                  {copied === label ? <RiCheckLine className="text-emerald-500" /> : <RiFileCopyLine />}
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col rounded-3xl border border-[var(--glass-border)] bg-[var(--bg-primary)]/50 p-6">
          <RiLock2Line className="text-3xl text-violet-500" />
          <h3 className="mt-4 text-lg font-bold">Password protected</h3>
          <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">Generate a temporary password before connecting. It expires after 24 hours for security.</p>
          <Button type="button" className="mt-6 w-full">Generate FTP password</Button>
          <div className="mt-6 flex gap-3 rounded-2xl border border-amber-500/30 bg-amber-500/10 p-4 text-xs leading-5 text-amber-500">
            <RiInformationLine className="mt-0.5 shrink-0 text-base" />
            Keep your FTP credentials valid until every active transfer has finished.
          </div>
          <div className="mt-auto flex gap-3 border-t border-[var(--glass-border)] pt-6 text-xs leading-5 text-[var(--text-secondary)]">
            <RiInformationLine className="mt-0.5 shrink-0 text-base text-[var(--aurora-1)]" />
            Files uploaded to the root directory will automatically appear in My Files after processing.
          </div>
        </div>
      </div>
    </Card>
  );
};

export default FtpUpload;
