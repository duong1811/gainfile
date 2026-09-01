import React from 'react';
import Link from 'next/link';
import { RiKey2Line, RiLockLine, RiSpeedUpLine, RiTerminalBoxLine } from 'react-icons/ri';
import PublicPageLayout from '../../components/PublicPageLayout';
import { Badge } from '../../components/ui/Badge';
import { Button } from '../../components/ui/Button';
import { Card, CardDescription, CardTitle } from '../../components/ui/Card';
import { TypographyInlineCode } from '../../components/ui/Typography';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../../components/ui/Table';

const HIGHLIGHTS = [
  { icon: RiLockLine, title: 'Secure by default', desc: 'Every request is authenticated with a scoped API key over HTTPS.' },
  { icon: RiSpeedUpLine, title: 'Built for scale', desc: 'Upload, list, and manage files programmatically with predictable rate limits.' },
  { icon: RiTerminalBoxLine, title: 'Simple REST interface', desc: 'JSON in, JSON out. No SDK required to get started.' },
];

const ENDPOINTS = [
  { method: 'POST', path: '/v1/files', desc: 'Upload a new file' },
  { method: 'GET', path: '/v1/files', desc: 'List files in your account' },
  { method: 'GET', path: '/v1/files/:id', desc: 'Get file metadata' },
  { method: 'DELETE', path: '/v1/files/:id', desc: 'Delete a file' },
  { method: 'POST', path: '/v1/files/:id/links', desc: 'Create a share link for a file' },
  { method: 'GET', path: '/v1/links/:token', desc: 'Get share link details' },
];

const METHOD_COLOR = { GET: 'success', POST: 'primary', DELETE: 'danger' };

const Api = () => (
  <PublicPageLayout
    eyebrow="Developers"
    title="Gainfile API"
    description="Automate uploads, downloads, and file management directly from your own applications."
    contentClassName="max-w-5xl"
  >
    <div className="mb-14 grid grid-cols-1 gap-6 md:grid-cols-3">
      {HIGHLIGHTS.map((item) => (
        <Card key={item.title} padding="lg">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--glass-border)]">
            <item.icon size={24} className="text-[var(--aurora-1)]" />
          </div>
          <CardTitle className="mb-2 text-lg">{item.title}</CardTitle>
          <CardDescription className="leading-relaxed">{item.desc}</CardDescription>
        </Card>
      ))}
    </div>

    <Card variant="aurora" padding="lg" className="mb-10">
      <div className="mb-4 flex items-center gap-3">
        <RiKey2Line size={22} className="text-[var(--aurora-1)]" />
        <h2 className="text-xl font-bold text-[var(--text-primary)]">Authentication</h2>
      </div>
      <p className="mb-4 leading-relaxed text-[var(--text-secondary)]">
        Authenticate every request by sending your API key as a bearer token in the <TypographyInlineCode>Authorization</TypographyInlineCode> header.
      </p>
      <pre className="overflow-x-auto rounded-2xl border border-[var(--glass-border)] bg-black/40 p-5 text-sm text-emerald-400">
{`curl https://api.gainfile.com/v1/files \\
  -H "Authorization: Bearer YOUR_API_KEY"`}
      </pre>
      <div className="mt-5 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
        <p className="text-sm text-[var(--text-secondary)]">Generate and manage your API keys from your account settings.</p>
        <Button as={Link} href="/settings" variant="blue" size="sm" className="font-bold">Manage API keys</Button>
      </div>
    </Card>

    <div className="mb-10">
      <h2 className="mb-4 text-xl font-bold text-[var(--text-primary)]">Endpoints</h2>
      <Card padding="none" className="overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Method</TableHead>
              <TableHead>Path</TableHead>
              <TableHead>Description</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {ENDPOINTS.map((endpoint) => (
              <TableRow key={`${endpoint.method}-${endpoint.path}`}>
                <TableCell>
                  <Badge variant="soft" color={METHOD_COLOR[endpoint.method]} size="sm">{endpoint.method}</Badge>
                </TableCell>
                <TableCell><TypographyInlineCode className="mx-0">{endpoint.path}</TypographyInlineCode></TableCell>
                <TableCell className="text-[var(--text-secondary)]">{endpoint.desc}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>

    <Card padding="lg">
      <h2 className="mb-4 text-xl font-bold text-[var(--text-primary)]">Rate limits</h2>
      <p className="leading-relaxed text-[var(--text-secondary)]">
        Free accounts are limited to 60 requests per minute. Paid plans receive higher limits. If you exceed the
        limit, the API responds with a <TypographyInlineCode>429 Too Many Requests</TypographyInlineCode> status
        code. See our <Link href="/pricing" className="font-semibold text-[var(--aurora-1)] hover:underline">Pricing</Link> page for plan details.
      </p>
    </Card>
  </PublicPageLayout>
);

export default Api;
