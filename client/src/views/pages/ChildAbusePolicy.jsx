import React from 'react';
import { RiAlarmWarningLine, RiMailLine, RiShieldStarLine } from 'react-icons/ri';
import PublicPageLayout from '../../components/PublicPageLayout';
import LegalSection from '../../components/pages/LegalSection';
import { Card } from '../../components/ui/Card';

const LAST_UPDATED = 'August 1, 2026';

const ChildAbusePolicy = () => (
  <PublicPageLayout
    eyebrow="Legal"
    title="Child Abuse Policy"
    description={`Last updated: ${LAST_UPDATED}`}
    contentClassName="max-w-3xl"
  >
    <Card variant="aurora" padding="lg" className="mb-10 flex items-start gap-4 border-rose-500/30">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-rose-500/10">
        <RiAlarmWarningLine size={22} className="text-rose-500" />
      </div>
      <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
        <strong className="text-[var(--text-primary)]">Zero tolerance.</strong> Gainfile has absolutely zero
        tolerance for child sexual abuse material (CSAM) or any content that sexually exploits or endangers minors.
        Accounts found to be storing or distributing such material are permanently terminated immediately and
        reported to the relevant authorities.
      </p>
    </Card>

    <LegalSection title="Our policy">
      <p>
        Gainfile strictly prohibits the upload, storage, sharing, or distribution of any content depicting child
        sexual abuse material (CSAM), or content that otherwise sexually exploits, endangers, or victimizes minors.
        This applies regardless of whether the content is public or private.
      </p>
    </LegalSection>

    <LegalSection title="Detection and enforcement">
      <p>We use a combination of automated scanning tools and human review to detect prohibited content. When CSAM is identified, we will, without prior notice:</p>
      <ul className="list-disc space-y-2 pl-6">
        <li>Immediately remove the content and disable access to it.</li>
        <li>Permanently terminate the associated account and any related accounts.</li>
        <li>Preserve evidence as required and report the incident to the National Center for Missing &amp; Exploited Children (NCMEC) and/or relevant law enforcement agencies.</li>
        <li>Cooperate fully with law enforcement investigations.</li>
      </ul>
    </LegalSection>

    <LegalSection title="Reporting suspected CSAM">
      <p>
        If you discover content on Gainfile that you believe is CSAM, please do not download, share, or forward it.
        Report it immediately using the contact details below or through our{' '}
        <a href="/report-abuse" className="font-semibold text-[var(--aurora-1)] hover:underline">Report Abuse</a> form.
        Reports are treated with the highest priority and reviewed as urgent.
      </p>
    </LegalSection>

    <LegalSection title="External resources">
      <p>You can also report CSAM directly to:</p>
      <ul className="list-disc space-y-2 pl-6">
        <li>
          <a href="https://report.cybertip.org" target="_blank" rel="noreferrer" className="font-semibold text-[var(--aurora-1)] hover:underline">
            NCMEC CyberTipline
          </a> (United States)
        </li>
        <li>
          <a href="https://www.iwf.org.uk" target="_blank" rel="noreferrer" className="font-semibold text-[var(--aurora-1)] hover:underline">
            Internet Watch Foundation
          </a> (International)
        </li>
      </ul>
    </LegalSection>

    <Card variant="aurora" padding="lg" className="mt-8 flex flex-col items-start gap-3">
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--glass-border)]">
          <RiMailLine size={20} className="text-[var(--aurora-1)]" />
        </div>
        <h3 className="text-lg font-bold text-[var(--text-primary)]">Report directly to our trust &amp; safety team</h3>
      </div>
      <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
        Email <a href="mailto:trustandsafety@gainfile.com" className="font-semibold text-[var(--aurora-1)] hover:underline">trustandsafety@gainfile.com</a>{' '}
        with the file link or ID. Reports are reviewed 24/7.
      </p>
      <div className="flex items-center gap-2 text-xs font-semibold text-[var(--text-secondary)]">
        <RiShieldStarLine size={16} className="text-[var(--aurora-1)]" /> All reports can be submitted anonymously.
      </div>
    </Card>
  </PublicPageLayout>
);

export default ChildAbusePolicy;
