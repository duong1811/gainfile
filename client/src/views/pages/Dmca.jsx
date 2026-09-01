import React from 'react';
import { RiFileTextLine, RiMailLine } from 'react-icons/ri';
import PublicPageLayout from '../../components/PublicPageLayout';
import LegalSection from '../../components/pages/LegalSection';
import { Card } from '../../components/ui/Card';

const LAST_UPDATED = 'August 1, 2026';
const COPYRIGHT_EMAIL = 'support@gainfile.com';
const REPORT_ABUSE_URL = '/report-abuse';

const Dmca = () => (
  <PublicPageLayout
    eyebrow="Legal"
    title="GainFile Copyright Policy"
    description={`Last updated: ${LAST_UPDATED}`}
    contentClassName="max-w-3xl"
  >
    <LegalSection>
      <p>GainFile respects the intellectual property rights of others and expects its users to do the same.</p>
      <p>
        Users may not use GainFile to upload, store, share, or distribute content that infringes copyright or other
        intellectual property rights.
      </p>
      <p>
        GainFile responds to sufficiently complete copyright infringement complaints in accordance with applicable
        copyright laws and may also accept and process DMCA-form notices where applicable.
      </p>
      <p>
        GainFile may remove or disable access to infringing content and may suspend or terminate accounts involved in
        repeated or serious infringement.
      </p>
      <p>
        This Policy explains how copyright owners or their authorized representatives may report allegedly infringing
        content and how affected users may respond when they believe content was removed or disabled as a result of
        mistake or misidentification.
      </p>
    </LegalSection>

    <LegalSection title="1. User Responsibility">
      <p>
        Users are responsible for ensuring that they have the necessary rights, licenses, permissions, or other
        lawful basis to upload, store, or share content through GainFile.
      </p>
      <p>
        GainFile does not claim ownership of files uploaded by users and does not authorize users to distribute
        third-party copyrighted material.
      </p>
    </LegalSection>

    <LegalSection title="2. Reporting Copyright Infringement">
      <p>If you are a copyright owner or are authorized to act on behalf of one, you may report content that you believe infringes your rights.</p>
      <p>A copyright notice should include:</p>
      <ul className="list-disc space-y-2 pl-6">
        <li>identification of the copyrighted work;</li>
        <li>the specific GainFile URL(s) containing the allegedly infringing material;</li>
        <li>your name and contact information;</li>
        <li>a statement that you have a good-faith belief that the use is not authorized by the copyright owner, its agent, or applicable law;</li>
        <li>a statement that the information provided is accurate and that you are the copyright owner or authorized to act on behalf of the owner; and</li>
        <li>your physical or electronic signature.</li>
      </ul>
      <p>Incomplete notices may require additional information before they can be processed.</p>
    </LegalSection>

    <LegalSection title="3. Submitting a Copyright Notice">
      <p>Copyright notices should be submitted through:</p>
      <p>
        Copyright Email:{' '}
        <a href={`mailto:${COPYRIGHT_EMAIL}`} className="font-semibold text-[var(--aurora-1)] hover:underline">{COPYRIGHT_EMAIL}</a>
      </p>
      <p>
        Report Form:{' '}
        <a href={REPORT_ABUSE_URL} className="font-semibold text-[var(--aurora-1)] hover:underline">Report Abuse</a>
      </p>
      <p>Please provide the specific GainFile URL(s) necessary to identify the reported material.</p>
    </LegalSection>

    <LegalSection title="4. Takedown Process">
      <p>GainFile will review sufficiently complete copyright notices without unreasonable delay.</p>
      <p>Where appropriate, GainFile may:</p>
      <ul className="list-disc space-y-2 pl-6">
        <li>remove or disable access to the reported content;</li>
        <li>notify the affected user;</li>
        <li>record the infringement against the relevant account; and</li>
        <li>take additional action in cases of repeated or serious infringement.</li>
      </ul>
      <p>
        GainFile may request additional information or reject notices that are incomplete, materially inaccurate,
        fraudulent, or abusive.
      </p>
    </LegalSection>

    <LegalSection title="5. Counter-Notification">
      <p>
        If your content has been removed or disabled and you believe this resulted from mistake or misidentification,
        you may submit a counter-notification containing:
      </p>
      <ul className="list-disc space-y-2 pl-6">
        <li>identification of the affected material;</li>
        <li>its previous GainFile URL or location;</li>
        <li>your name and contact information;</li>
        <li>an explanation of why you believe the removal was a mistake or misidentification;</li>
        <li>any statements required by applicable law; and</li>
        <li>your physical or electronic signature.</li>
      </ul>
      <p>Counter-notifications should be sent to:</p>
      <p>
        Copyright Email:{' '}
        <a href={`mailto:${COPYRIGHT_EMAIL}`} className="font-semibold text-[var(--aurora-1)] hover:underline">{COPYRIGHT_EMAIL}</a>
      </p>
      <p>GainFile may provide a valid counter-notification to the original complainant where permitted or required by law.</p>
    </LegalSection>

    <LegalSection title="6. Restoration of Content">
      <p>
        GainFile may restore content following a valid counter-notification where permitted by applicable law and
        where the complainant does not take appropriate legal action preventing restoration.
      </p>
      <p>Content will not be restored if it independently violates GainFile&apos;s Terms of Service or applicable law.</p>
      <p>Submission of a counter-notification does not guarantee restoration.</p>
    </LegalSection>

    <LegalSection title="7. Repeat Infringers">
      <p>
        GainFile may suspend or terminate users who repeatedly or seriously infringe copyright or other intellectual
        property rights.
      </p>
      <p>
        GainFile may consider the number and seriousness of valid complaints, repeated uploading of previously
        removed material, attempts to circumvent enforcement, and other relevant circumstances.
      </p>
      <p>Serious or deliberate infringement may result in immediate action without a fixed number of prior warnings.</p>
    </LegalSection>

    <LegalSection title="8. Trademark Complaints">
      <p>Trademark owners or their authorized representatives may also report alleged trademark infringement.</p>
      <p>
        A complaint should identify the trademark, the owner, the specific GainFile URL(s), the nature of the alleged
        infringement, and the complainant&apos;s contact information and authorization.
      </p>
      <p>Trademark complaints may be submitted through:</p>
      <p>
        Copyright / IP Email:{' '}
        <a href={`mailto:${COPYRIGHT_EMAIL}`} className="font-semibold text-[var(--aurora-1)] hover:underline">{COPYRIGHT_EMAIL}</a>
      </p>
    </LegalSection>

    <LegalSection title="9. False or Abusive Reports">
      <p>Copyright notices and counter-notifications must be submitted in good faith.</p>
      <p>GainFile may reject fraudulent, materially false, misleading, or abusive reports.</p>
      <p>
        Persons who knowingly misrepresent infringement or other material facts may be responsible for resulting
        consequences under applicable law.
      </p>
    </LegalSection>

    <LegalSection title="10. Other Abuse and Contact">
      <p>This Policy primarily covers copyright and related intellectual property complaints.</p>
      <p>
        Other illegal or prohibited content should be reported through our{' '}
        <a href={REPORT_ABUSE_URL} className="font-semibold text-[var(--aurora-1)] hover:underline">Report Abuse</a> form.
      </p>
      <p>
        GainFile may preserve information, remove or restrict content, and cooperate with competent authorities where
        required or permitted by applicable law.
      </p>
      <p>
        GainFile may update this Copyright Policy from time to time. The current version will be identified by the
        &ldquo;Last Updated&rdquo; date above.
      </p>
    </LegalSection>

    <Card variant="aurora" padding="lg" className="mt-8 flex flex-col items-start gap-3">
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--glass-border)]">
          <RiMailLine size={20} className="text-[var(--aurora-1)]" />
        </div>
        <h3 className="text-lg font-bold text-[var(--text-primary)]">Quick links</h3>
      </div>
      <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
        Email <a href={`mailto:${COPYRIGHT_EMAIL}`} className="font-semibold text-[var(--aurora-1)] hover:underline">{COPYRIGHT_EMAIL}</a>{' '}
        or use our <a href={REPORT_ABUSE_URL} className="inline-flex items-center gap-1 font-semibold text-[var(--aurora-1)] hover:underline">
          <RiFileTextLine size={14} /> Report Abuse
        </a> form and select the appropriate reason.
      </p>
    </Card>
  </PublicPageLayout>
);

export default Dmca;
