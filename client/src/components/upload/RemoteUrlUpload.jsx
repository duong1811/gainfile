import { useState } from 'react';
import {
  RiAddLine,
  RiCheckLine,
  RiCloseCircleLine,
  RiDeleteBinLine,
  RiErrorWarningLine,
  RiFileDownloadLine,
  RiGlobalLine,
  RiLoader4Line,
  RiRefreshLine,
  RiShieldCheckLine,
  RiTimeLine,
} from 'react-icons/ri';
import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import { Progress } from '../ui/Progress';
import { Textarea } from '../ui/Textarea';

const MAX_URLS_PER_BATCH = 20;

const exampleTransfers = [
  {
    id: 'example-completed',
    name: 'brand-assets.zip',
    source: 'https://cdn.example.com/brand-assets.zip',
    size: '428 MB',
    status: 'completed',
    progress: 100,
    detail: 'Imported in 18 seconds',
  },
  {
    id: 'example-transferring',
    name: 'product-launch.mp4',
    source: 'https://media.example.com/product-launch.mp4',
    size: '1.8 GB',
    status: 'transferring',
    progress: 64,
    detail: '12.4 MB/s · About 42 seconds left',
  },
  {
    id: 'example-pending',
    name: 'quarterly-report.pdf',
    source: 'https://files.example.com/quarterly-report.pdf',
    size: '12.6 MB',
    status: 'pending',
    progress: 0,
    detail: 'Waiting for an available transfer slot',
  },
  {
    id: 'example-failed',
    name: 'private-archive.zip',
    source: 'https://example.com/private-archive.zip',
    size: 'Unknown',
    status: 'failed',
    progress: 0,
    detail: 'Access denied by the remote server (403)',
  },
];

const statusMeta = {
  pending: { label: 'pending', icon: RiTimeLine, color: 'neutral', progress: 'default' },
  transferring: { label: 'Transferring', icon: RiLoader4Line, color: 'primary', progress: 'aurora' },
  completed: { label: 'Completed', icon: RiCheckLine, color: 'success', progress: 'success' },
  failed: { label: 'Failed', icon: RiCloseCircleLine, color: 'danger', progress: 'danger' },
};

const isValidRemoteUrl = (value) => {
  if (!URL.canParse(value)) return false;
  const protocol = new URL(value).protocol;
  return protocol === 'http:' || protocol === 'https:';
};

const getFileName = (value) => {
  if (!isValidRemoteUrl(value)) return 'Invalid URL';
  const path = new URL(value).pathname;
  return decodeURIComponent(path.split('/').filter(Boolean).pop() || 'remote-file');
};

const RemoteUrlUpload = () => {
  const [value, setValue] = useState('');
  const [transfers, setTransfers] = useState(exampleTransfers);
  const incomingUrls = [...new Set(value.split(/\r?\n/).map((url) => url.trim()).filter(Boolean))];
  const exceedsBatchLimit = incomingUrls.length > MAX_URLS_PER_BATCH;

  const addUrls = () => {
    if (exceedsBatchLimit) return;

    setTransfers((current) => {
      const existingSources = new Set(current.map((transfer) => transfer.source));
      const newTransfers = incomingUrls
        .filter((source) => !existingSources.has(source))
        .map((source, index) => {
          const valid = isValidRemoteUrl(source);
          return {
            id: `remote-${Date.now()}-${index}`,
            name: getFileName(source),
            source,
            size: 'Checking...',
            status: valid ? 'pending' : 'failed',
            progress: 0,
            detail: valid ? 'Ready to transfer' : 'Enter a valid public HTTP or HTTPS URL',
          };
        });

      return [...newTransfers, ...current];
    });
    setValue('');
  };

  const removeTransfer = (id) => {
    setTransfers((current) => current.filter((transfer) => transfer.id !== id));
  };

  const retryTransfer = (id) => {
    setTransfers((current) => current.map((transfer) => (
      transfer.id === id
        ? { ...transfer, status: 'pending', progress: 0, detail: 'Ready to retry' }
        : transfer
    )));
  };

  const haspending = transfers.some((transfer) => transfer.status === 'pending');
  const hasTransferring = transfers.some((transfer) => transfer.status === 'transferring');

  const advanceTransfers = () => {
    setTransfers((current) => current.map((transfer) => {
      if (haspending && transfer.status === 'pending') {
        return {
          ...transfer,
          status: 'transferring',
          progress: 45,
          size: transfer.size === 'Checking...' ? 'Calculating...' : transfer.size,
          detail: 'Transfer started · Calculating time remaining',
        };
      }

      if (!haspending && transfer.status === 'transferring') {
        return {
          ...transfer,
          status: 'completed',
          progress: 100,
          size: transfer.size === 'Calculating...' ? 'Remote file' : transfer.size,
          detail: 'Imported successfully',
        };
      }

      return transfer;
    }));
  };

  return (
    <div className="space-y-6">
      <Card padding="lg" className="overflow-hidden">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
          <div className="flex gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-cyan-500/10 text-2xl text-cyan-500">
              <RiGlobalLine />
            </span>
            <div>
              <h2 className="text-xl font-bold">Remote URL transfer</h2>
              <p className="mt-1 max-w-xl text-sm leading-relaxed text-[var(--text-secondary)]">
                Transfer public files directly to your Gainfile account without downloading them to your device.
              </p>
              <ul className="mt-4 space-y-2 text-xs leading-5 text-[var(--text-secondary)]">
                <li className="flex items-start gap-2">
                  <RiCheckLine className="mt-0.5 shrink-0 text-emerald-500" />
                  Use a public direct HTTP or HTTPS file link, not a download page or login page.
                </li>
                <li className="flex items-start gap-2">
                  <RiCheckLine className="mt-0.5 shrink-0 text-emerald-500" />
                  Keep the source file available until the transfer has completed.
                </li>
                <li className="flex items-start gap-2">
                  <RiCheckLine className="mt-0.5 shrink-0 text-emerald-500" />
                  Once queued, the transfer runs server-to-server and this tab can be closed.
                </li>
                <li className="flex items-start gap-2">
                  <RiCheckLine className="mt-0.5 shrink-0 text-emerald-500" />
                  Add up to {MAX_URLS_PER_BATCH} links per batch.
                </li>
              </ul>
            </div>
          </div>
          <Badge variant="soft" color="success" size="sm" className="gap-1.5 self-start">
            <RiShieldCheckLine size={14} /> Server-to-server transfer
          </Badge>
        </div>

        <div className="mt-7 rounded-3xl border border-[var(--glass-border)] bg-[var(--bg-primary)]/40 p-5">
          <label className="text-sm font-bold" htmlFor="remote-urls">Direct file URLs</label>
          <Textarea
            id="remote-urls"
            rows={5}
            value={value}
            onChange={(event) => setValue(event.target.value)}
            placeholder={'https://example.com/video.mp4\nhttps://example.com/archive.zip'}
            className="mt-2 font-mono text-sm"
          />
          <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div
              className={`flex items-start gap-2 text-xs leading-relaxed ${
                exceedsBatchLimit ? 'text-red-500' : 'text-[var(--text-secondary)]'
              }`}
              role={exceedsBatchLimit ? 'alert' : undefined}
            >
              <RiErrorWarningLine className={`mt-0.5 shrink-0 ${exceedsBatchLimit ? 'text-red-500' : 'text-amber-500'}`} />
              {exceedsBatchLimit
                ? `You entered ${incomingUrls.length} links. Remove ${incomingUrls.length - MAX_URLS_PER_BATCH} to continue.`
                : `Enter one URL per line, up to ${MAX_URLS_PER_BATCH} links. Duplicate URLs will be ignored.`}
            </div>
            <Button
              type="button"
              variant="glass"
              onClick={addUrls}
              disabled={!value.trim() || exceedsBatchLimit}
              className="shrink-0"
            >
              <RiAddLine /> Add to queue
            </Button>
          </div>
        </div>
      </Card>

      <Card padding="lg">
        <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-lg font-bold">Transfer queue</h3>
              <Badge variant="soft" color="neutral" size="xs">{transfers.length}</Badge>
            </div>
            <p className="mt-1 text-xs text-[var(--text-secondary)]">
              Example states are shown below so you can preview the complete transfer flow.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button type="button" variant="ghost" size="sm" onClick={() => setTransfers(exampleTransfers)}>
              <RiRefreshLine /> Reset examples
            </Button>
            <Button
              type="button"
              size="sm"
              onClick={advanceTransfers}
              disabled={!haspending && !hasTransferring}
            >
              <RiFileDownloadLine />
              {haspending ? 'Start pending transfers' : hasTransferring ? 'Complete active transfers' : 'Queue complete'}
            </Button>
          </div>
        </div>

        <div className="space-y-3">
          {transfers.map((transfer) => {
            const meta = statusMeta[transfer.status];
            const StatusIcon = meta.icon;

            return (
              <article
                key={transfer.id}
                className="rounded-2xl border border-[var(--glass-border)] bg-[var(--bg-primary)]/40 p-4"
              >
                <div className="flex items-start gap-3">
                  <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${
                    transfer.status === 'completed'
                      ? 'bg-emerald-500/10 text-emerald-500'
                      : transfer.status === 'failed'
                        ? 'bg-rose-500/10 text-rose-500'
                        : 'bg-cyan-500/10 text-cyan-500'
                  }`}>
                    <RiGlobalLine size={20} />
                  </span>

                  <div className="min-w-0 flex-1">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                      <div className="min-w-0">
                        <h4 className="truncate text-sm font-bold">{transfer.name}</h4>
                        <p className="mt-1 truncate font-mono text-[11px] text-[var(--text-secondary)]">{transfer.source}</p>
                      </div>
                      <Badge variant="soft" color={meta.color} size="xs" className="shrink-0 gap-1">
                        <StatusIcon className={transfer.status === 'transferring' ? 'animate-spin' : ''} />
                        {meta.label}
                      </Badge>
                    </div>

                    <div className="mt-3 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                      <p className={`text-xs ${
                        transfer.status === 'failed' ? 'font-semibold text-rose-500' : 'text-[var(--text-secondary)]'
                      }`}>
                        {transfer.detail}
                      </p>
                      <span className="shrink-0 text-xs font-semibold text-[var(--text-secondary)]">{transfer.size}</span>
                    </div>

                    {(transfer.status === 'transferring' || transfer.status === 'completed') && (
                      <div className="mt-3 flex items-center gap-3">
                        <Progress
                          value={transfer.progress}
                          variant={meta.progress}
                          size="sm"
                          showStripe={transfer.status === 'transferring'}
                        />
                        <span className="w-9 text-right text-xs font-bold">{transfer.progress}%</span>
                      </div>
                    )}
                  </div>

                  <div className="flex shrink-0 items-center gap-1">
                    {transfer.status === 'failed' && (
                      <button
                        type="button"
                        aria-label={`Retry ${transfer.name}`}
                        title="Retry transfer"
                        onClick={() => retryTransfer(transfer.id)}
                        className="rounded-lg p-2 text-[var(--text-secondary)] hover:bg-cyan-500/10 hover:text-cyan-500"
                      >
                        <RiRefreshLine />
                      </button>
                    )}
                    <button
                      type="button"
                      aria-label={`Remove ${transfer.name}`}
                      title="Remove transfer"
                      onClick={() => removeTransfer(transfer.id)}
                      className="rounded-lg p-2 text-[var(--text-secondary)] hover:bg-rose-500/10 hover:text-rose-500"
                    >
                      <RiDeleteBinLine />
                    </button>
                  </div>
                </div>
              </article>
            );
          })}

          {transfers.length === 0 && (
            <div className="rounded-2xl border border-dashed border-[var(--glass-border)] px-5 py-12 text-center">
              <RiGlobalLine className="mx-auto text-4xl text-[var(--text-secondary)]" />
              <h4 className="mt-3 font-bold">No remote transfers</h4>
              <p className="mt-1 text-sm text-[var(--text-secondary)]">Add one or more direct URLs to create a transfer.</p>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
};

export default RemoteUrlUpload;
