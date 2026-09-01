"use client";

import React, { useState } from 'react';
import { RiAlarmWarningLine, RiCheckLine } from 'react-icons/ri';
import PublicPageLayout from '../../components/PublicPageLayout';
import { Button } from '../../components/ui/Button';
import { Card } from '../../components/ui/Card';
import { Input } from '../../components/ui/Input';
import { Label } from '../../components/ui/Label';
import { Select } from '../../components/ui/Select';
import { Textarea } from '../../components/ui/Textarea';

const REASONS = [
  { value: 'copyright', label: 'Copyright infringement' },
  { value: 'csam', label: 'Child sexual abuse material (CSAM)' },
  { value: 'malware', label: 'Malware or phishing' },
  { value: 'harassment', label: 'Harassment or threats' },
  { value: 'spam', label: 'Spam or scam' },
  { value: 'other', label: 'Other' },
];

const emptyForm = { email: '', link: '', reason: 'copyright', details: '' };

const createReference = () => `RPT-${Math.random().toString(36).slice(2, 8).toUpperCase()}`;

const ReportAbuse = () => {
  const [form, setForm] = useState(emptyForm);
  const [submitted, setSubmitted] = useState(null);

  const updateField = (key) => (event) => setForm((current) => ({ ...current, [key]: event.target.value }));

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!form.email.trim() || !form.link.trim() || !form.details.trim()) return;
    setSubmitted({ reference: createReference(), reason: form.reason });
    setForm(emptyForm);
  };

  const handleReportAnother = () => setSubmitted(null);

  return (
    <PublicPageLayout
      eyebrow="Trust & Safety"
      title="Report Abuse"
      description="Help us keep Gainfile safe. Reports are reviewed by our trust & safety team as a priority."
      contentClassName="max-w-2xl"
    >
      <Card variant="aurora" padding="lg" className="mb-8 flex items-start gap-4 border-rose-500/30">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-rose-500/10">
          <RiAlarmWarningLine size={22} className="text-rose-500" />
        </div>
        <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
          If you are reporting content involving child sexual abuse material, please review our{' '}
          <a href="/child-abuse-policy" className="font-semibold text-[var(--aurora-1)] hover:underline">Child Abuse Policy</a>{' '}
          for the fastest way to escalate directly to our trust &amp; safety team.
        </p>
      </Card>

      <Card padding="lg">
        {submitted ? (
          <div className="flex flex-col items-center gap-4 py-8 text-center">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/10">
              <RiCheckLine size={32} className="text-emerald-500" />
            </div>
            <h3 className="text-xl font-bold text-[var(--text-primary)]">Report submitted</h3>
            <p className="max-w-sm text-sm leading-relaxed text-[var(--text-secondary)]">
              Thank you for the report. Our team will review it shortly. Your reference number is{' '}
              <span className="font-mono font-bold text-[var(--aurora-1)]">{submitted.reference}</span>.
            </p>
            <Button variant="outline" onClick={handleReportAnother}>Submit another report</Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <Label htmlFor="reporter-email">Your email</Label>
              <Input
                id="reporter-email"
                type="email"
                placeholder="you@example.com"
                value={form.email}
                onChange={updateField('email')}
                required
              />
            </div>

            <div>
              <Label htmlFor="content-link">Link to the content</Label>
              <Input
                id="content-link"
                type="url"
                placeholder="https://gainfile.com/s/..."
                value={form.link}
                onChange={updateField('link')}
                required
              />
            </div>

            <div>
              <Label htmlFor="report-reason">Reason</Label>
              <Select id="report-reason" value={form.reason} onChange={updateField('reason')}>
                {REASONS.map((reason) => (
                  <option key={reason.value} value={reason.value}>{reason.label}</option>
                ))}
              </Select>
            </div>

            <div>
              <Label htmlFor="report-details">Details</Label>
              <Textarea
                id="report-details"
                rows={5}
                placeholder="Describe the issue in as much detail as possible..."
                value={form.details}
                onChange={updateField('details')}
                required
              />
            </div>

            <Button type="submit" variant="danger" size="lg" className="w-full font-bold">
              Submit report
            </Button>
          </form>
        )}
      </Card>
    </PublicPageLayout>
  );
};

export default ReportAbuse;
