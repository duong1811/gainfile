import React from 'react';
import PublicPageLayout from '../../components/PublicPageLayout';
import LegalSection from '../../components/pages/LegalSection';

const LAST_UPDATED = 'August 1, 2026';
const PRIVACY_EMAIL = 'support@gainfile.com';

const PrivacyPolicy = () => (
  <PublicPageLayout
    eyebrow="Legal"
    title="GainFile Privacy Policy"
    description={`Last updated: ${LAST_UPDATED}`}
    contentClassName="max-w-3xl"
  >
    <LegalSection>
      <p>
        GainFile (&ldquo;GainFile&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) respects your
        privacy and is committed to protecting the personal information you provide when using our website,
        services, and related features (collectively, the &ldquo;Service&rdquo;).
      </p>
      <p>
        This Privacy Policy explains what information we collect, how we use and disclose it, how long we retain it,
        and the choices and rights available to you.
      </p>
      <p>
        By accessing or using the Service, you acknowledge that your information will be handled as described in this
        Privacy Policy and in accordance with applicable law.
      </p>
    </LegalSection>

    <LegalSection title="1. Information We Collect">
      <p>
        We may collect information that you provide directly to us as well as certain information generated
        automatically when you use the Service.
      </p>

      <h3 className="text-lg font-bold text-[var(--text-primary)]">Account Information</h3>
      <p>When you create or use a GainFile account, we may collect information such as:</p>
      <ul className="list-disc space-y-2 pl-6">
        <li>username;</li>
        <li>email address;</li>
        <li>account settings and preferences;</li>
        <li>subscription or Premium account information;</li>
        <li>communications you send to our support, abuse, or other service channels.</li>
      </ul>
      <p>We only request information that is reasonably necessary to provide and operate the Service.</p>

      <h3 className="text-lg font-bold text-[var(--text-primary)]">Usage and Technical Information</h3>
      <p>When you access or use GainFile, certain technical information may be collected automatically, including:</p>
      <ul className="list-disc space-y-2 pl-6">
        <li>IP address;</li>
        <li>browser type and version;</li>
        <li>operating system and device information;</li>
        <li>referring and exit pages;</li>
        <li>date and time of access;</li>
        <li>pages and features used;</li>
        <li>upload and download activity;</li>
        <li>traffic and bandwidth information;</li>
        <li>error, security, and system logs.</li>
      </ul>
      <p>We use this information primarily to operate, secure, monitor, troubleshoot, and improve the Service.</p>
    </LegalSection>

    <LegalSection title="2. Cookies and Analytics">
      <p>
        GainFile may use cookies and similar technologies to operate the Service, maintain login sessions, remember
        preferences, improve functionality, prevent abuse, and understand how the Service is used.
      </p>
      <p>
        We may also use third-party analytics or service providers that use cookies or similar technologies in
        accordance with their own privacy practices.
      </p>
      <p>
        Where required by applicable law, non-essential cookies or similar technologies will be used based on your
        consent.
      </p>
      <p>
        You may be able to manage or disable cookies through your browser settings. Disabling certain cookies may
        affect the functionality of the Service.
      </p>
    </LegalSection>

    <LegalSection title="3. How We Use Information">
      <p>We may use the information we collect to:</p>
      <ul className="list-disc space-y-2 pl-6">
        <li>provide and maintain the Service;</li>
        <li>create and manage user accounts;</li>
        <li>process Premium access and related transactions;</li>
        <li>provide customer support;</li>
        <li>communicate about accounts, transactions, security, and important Service updates;</li>
        <li>detect and prevent fraud, abuse, unauthorized access, and security incidents;</li>
        <li>enforce our Terms of Service and other policies;</li>
        <li>investigate technical problems and improve performance;</li>
        <li>understand usage patterns and improve our services;</li>
        <li>comply with applicable laws and lawful requests; and</li>
        <li>protect the rights, safety, security, and integrity of GainFile, our users, and others.</li>
      </ul>
      <p>
        Where applicable, we process personal information on an appropriate legal basis, which may include
        performance of a contract, compliance with legal obligations, legitimate interests, or consent.
      </p>
    </LegalSection>

    <LegalSection title="4. Payment Information">
      <p>Payments for Premium services may be processed by independent third-party payment providers.</p>
      <p>
        GainFile may receive limited transaction information necessary to confirm and manage a purchase, such as
        transaction identifiers, payment status, amount, currency, date, and the Premium plan purchased.
      </p>
      <p>
        Full payment card information may be collected and processed directly by the applicable payment provider
        rather than stored by GainFile.
      </p>
      <p>Payment providers process information according to their own terms and privacy policies.</p>
    </LegalSection>

    <LegalSection title="5. How We Share Information">
      <p>GainFile does not sell your personal information.</p>
      <p>We may disclose information in limited circumstances, including:</p>
      <ul className="list-disc space-y-2 pl-6">
        <li><strong className="text-[var(--text-primary)]">Service Providers.</strong> We may share information with companies that provide infrastructure, hosting, analytics, security, payment processing, customer support, or other services necessary to operate GainFile.</li>
        <li><strong className="text-[var(--text-primary)]">Legal Requirements.</strong> We may disclose information when reasonably necessary to comply with applicable law, regulation, court orders, or other valid legal processes.</li>
        <li><strong className="text-[var(--text-primary)]">Protection of Rights and Security.</strong> Information may be disclosed when reasonably necessary to investigate fraud, security incidents, abuse, violations of our policies, or threats to the rights or safety of GainFile, our users, or others.</li>
        <li><strong className="text-[var(--text-primary)]">Business Transactions.</strong> If GainFile is involved in a merger, acquisition, restructuring, financing, sale of assets, or similar business transaction, relevant information may be transferred as part of that transaction, subject to applicable law.</li>
        <li><strong className="text-[var(--text-primary)]">With Your Direction or Consent.</strong> We may disclose information when you specifically request, authorize, or consent to the disclosure.</li>
      </ul>
      <p>We may also use and disclose aggregated or anonymized information that does not reasonably identify an individual.</p>
    </LegalSection>

    <LegalSection title="6. Files and Information You Share">
      <p>GainFile is a file hosting and sharing service.</p>
      <p>
        When you intentionally create or distribute a sharing link, information or files accessible through that
        link may be available to people who receive or otherwise obtain access to the link.
      </p>
      <p>
        You are responsible for deciding what information you upload and share through the Service and for managing
        access to your shared content.
      </p>
      <p>
        Please avoid including personal or confidential information in publicly shared content unless you intend
        that information to be accessible to others.
      </p>
    </LegalSection>

    <LegalSection title="7. Data Retention">
      <p>
        We retain personal information only for as long as reasonably necessary for the purposes described in this
        Privacy Policy, including providing the Service, maintaining security, preventing fraud and abuse, resolving
        disputes, and complying with legal obligations.
      </p>
      <p>Retention periods may vary depending on the type of information and the reason it is processed.</p>
      <p>
        When information is no longer reasonably required, we may delete or anonymize it in accordance with
        applicable law and our operational requirements.
      </p>
      <p>Rules concerning storage and retention of uploaded files are governed separately by our Terms of Service.</p>
    </LegalSection>

    <LegalSection title="8. Security">
      <p>
        We use reasonable administrative, technical, and organizational measures designed to protect personal
        information against unauthorized access, loss, misuse, alteration, or disclosure.
      </p>
      <p>However, no Internet transmission, online service, or storage system can be guaranteed to be completely secure.</p>
      <p>
        You are responsible for maintaining the confidentiality of your account credentials and for promptly
        notifying GainFile if you believe your account has been accessed without authorization.
      </p>
    </LegalSection>

    <LegalSection title="9. Your Rights and Choices">
      <p>Depending on your location and applicable law, you may have rights concerning your personal information, including the right to:</p>
      <ul className="list-disc space-y-2 pl-6">
        <li>request access to your personal information;</li>
        <li>request correction of inaccurate or incomplete information;</li>
        <li>request deletion of certain personal information;</li>
        <li>request restriction of certain processing;</li>
        <li>object to certain processing;</li>
        <li>request portability of certain information;</li>
        <li>withdraw consent where processing is based on consent; and</li>
        <li>opt out of non-essential marketing communications.</li>
      </ul>
      <p>
        Certain information may need to be retained where required by law or where reasonably necessary for
        security, fraud prevention, dispute resolution, or the establishment, exercise, or defense of legal claims.
      </p>
      <p>Requests concerning personal information may be submitted through the contact information provided below.</p>
      <p>
        Where applicable under data protection law, you may also have the right to lodge a complaint with a
        competent data protection supervisory authority.
      </p>
    </LegalSection>

    <LegalSection title="10. International Data Transfers">
      <p>GainFile and its service providers may process information in countries other than the country in which you reside.</p>
      <p>
        Where applicable law requires safeguards for international transfers of personal information, we will use
        appropriate measures designed to protect such information in accordance with applicable data protection
        requirements.
      </p>
    </LegalSection>

    <LegalSection title="11. Third-Party Services and Links">
      <p>The Service may contain links to third-party websites or integrate services operated by third parties.</p>
      <p>
        GainFile does not control the privacy practices of independent third parties. Your use of third-party
        services is subject to their respective terms and privacy policies.
      </p>
      <p>We encourage you to review the privacy policies of third-party services before providing personal information to them.</p>
    </LegalSection>

    <LegalSection title="12. Age Requirement">
      <p>GainFile is intended only for persons who are at least 18 years old.</p>
      <p>We do not knowingly permit persons under the age of 18 to create or maintain GainFile accounts.</p>
      <p>
        If we become aware that personal information has been collected from a person who is not permitted to use
        the Service, we may take appropriate steps to delete the information and terminate or restrict the associated
        account, subject to applicable law.
      </p>
    </LegalSection>

    <LegalSection title="13. Changes to This Privacy Policy">
      <p>
        We may update this Privacy Policy from time to time to reflect changes to the Service, our practices, legal
        requirements, or other operational reasons.
      </p>
      <p>
        When this Privacy Policy is updated, we will revise the &ldquo;Last Updated&rdquo; date above. Where required
        by applicable law, we may provide additional notice of material changes.
      </p>
      <p>Your continued use of the Service following an update is subject to the updated Privacy Policy and applicable law.</p>
    </LegalSection>

    <LegalSection title="14. Contact Us">
      <p>
        If you have questions about this Privacy Policy, wish to exercise applicable privacy rights, or have a
        privacy-related request, please contact:
      </p>
      <p>
        Email:{' '}
        <a href={`mailto:${PRIVACY_EMAIL}`} className="font-semibold text-[var(--aurora-1)] hover:underline">{PRIVACY_EMAIL}</a>
      </p>
      <p>
        For reports concerning illegal or abusive content, please use GainFile&apos;s{' '}
        <a href="/report-abuse" className="font-semibold text-[var(--aurora-1)] hover:underline">designated abuse reporting channel</a>{' '}
        rather than the privacy contact above.
      </p>
    </LegalSection>
  </PublicPageLayout>
);

export default PrivacyPolicy;
