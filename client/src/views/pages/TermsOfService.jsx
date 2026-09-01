import React from 'react';
import PublicPageLayout from '../../components/PublicPageLayout';
import LegalSection from '../../components/pages/LegalSection';

const LAST_UPDATED = 'August 1, 2026';
const SUPPORT_EMAIL = 'support@gainfile.com';
const REPORT_ABUSE_URL = '/report-abuse';
const SETTINGS_URL = '/settings';

const TermsOfService = () => (
  <PublicPageLayout
    eyebrow="Legal"
    title="GainFile Terms of Service"
    description={`Last updated: ${LAST_UPDATED}`}
    contentClassName="max-w-3xl"
  >
    <LegalSection>
      <p>
        These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and use of the GainFile website, file
        hosting and sharing services, Premium services, and related features (collectively, the &ldquo;Service&rdquo;).
      </p>
      <p>
        By accessing, registering for, purchasing, or using the Service, you agree to be bound by these Terms, our{' '}
        <a href="/privacy-policy" className="font-semibold text-[var(--aurora-1)] hover:underline">Privacy Policy</a>, our{' '}
        <a href="/dmca" className="font-semibold text-[var(--aurora-1)] hover:underline">Intellectual Property &amp; DMCA Policy</a>, and any
        additional terms that may apply to specific features or programs.
      </p>
      <p>If you do not agree to these Terms, you must not access or use the Service.</p>
    </LegalSection>

    <LegalSection title="1. Acceptance and Changes to Terms">
      <p>By accessing or using GainFile, you acknowledge that you have read, understood, and agreed to these Terms.</p>
      <p>
        GainFile may update these Terms from time to time to reflect changes to the Service, applicable law, security
        requirements, technical requirements, or our business practices.
      </p>
      <p>
        Updated Terms will be posted on the Service with a revised &ldquo;Last Updated&rdquo; date. Where required by
        applicable law, GainFile may provide additional notice of material changes.
      </p>
      <p>
        Your continued use of the Service after updated Terms become effective constitutes acceptance of those Terms,
        subject to any mandatory rights available to you under applicable law.
      </p>
    </LegalSection>

    <LegalSection title="2. Eligibility">
      <p>You must be at least 18 years old to create an account or use GainFile.</p>
      <p>
        By accessing or using the Service, you represent and warrant that you are at least 18 years old and have the
        legal capacity to enter into these Terms.
      </p>
      <p>
        GainFile may restrict, suspend, or terminate an account if we reasonably determine that the account holder
        does not satisfy these eligibility requirements.
      </p>
    </LegalSection>

    <LegalSection title="3. The GainFile Service">
      <p>
        GainFile provides online file hosting and sharing services that allow users to upload, store, manage,
        download, and share files.
      </p>
      <p>
        The Service may include free access, registered accounts, Premium accounts, and additional features or
        account types that GainFile may introduce from time to time.
      </p>
      <p>Features and technical limits may vary according to account type or Premium plan, including:</p>
      <ul className="list-disc space-y-2 pl-6">
        <li>storage capacity;</li>
        <li>maximum file size;</li>
        <li>download speed;</li>
        <li>download traffic or bandwidth;</li>
        <li>simultaneous downloads;</li>
        <li>file retention;</li>
        <li>upload and download limits; and</li>
        <li>other technical or Service-related features.</li>
      </ul>
      <p>
        The applicable features, limits, prices, and duration of a particular plan will be displayed on the relevant
        Service or purchase page.
      </p>
      <p>GainFile may reasonably modify Service features and technical limits as the Service develops.</p>
    </LegalSection>

    <LegalSection title="4. Registration and Account Security">
      <p>Certain features of GainFile may require you to create an account.</p>
      <p>
        You agree to provide accurate and reasonably complete information when registering and to keep relevant
        account information current.
      </p>
      <p>
        You are responsible for maintaining the confidentiality of your username, password, and other account
        credentials and for activity occurring through your account.
      </p>
      <p>
        You must notify GainFile promptly if you know or reasonably suspect that your account has been accessed or
        used without authorization.
      </p>
      <p>
        You may not sell, rent, transfer, or otherwise provide your GainFile account to another person without
        authorization from GainFile.
      </p>
      <p>
        Premium accounts are intended for use by the account holder. You may not publicly share Premium credentials
        or use a Premium account to provide unauthorized downloading services to third parties.
      </p>
      <p>
        GainFile may use reasonable technical and security measures to identify account sharing, unauthorized access,
        fraud, or other abuse.
      </p>
    </LegalSection>

    <LegalSection title="5. License to Use the Service">
      <p>
        Subject to compliance with these Terms, GainFile grants you a limited, personal, non-exclusive,
        non-transferable, and revocable right to access and use the Service for its intended purposes.
      </p>
      <p>
        GainFile and its licensors retain all rights in the Service itself, including its software, website,
        technology, interfaces, trademarks, logos, databases, and other intellectual property.
      </p>
      <p>
        Except where expressly permitted by GainFile or applicable law, you may not copy, reproduce, modify, reverse
        engineer, sublicense, sell, redistribute, interfere with, or commercially exploit any part of the Service
        itself.
      </p>
      <p>Nothing in these Terms transfers ownership of GainFile&apos;s intellectual property to you.</p>
    </LegalSection>

    <LegalSection title="6. User Content and Content License">
      <p>
        &ldquo;User Content&rdquo; means files, information, data, or other material uploaded, stored, transmitted,
        or shared through the Service by a user.
      </p>
      <p>You retain any ownership rights that you have in your User Content.</p>
      <p>GainFile does not acquire ownership of User Content merely because it is uploaded or stored through the Service.</p>
      <p>
        By uploading User Content, you grant GainFile a limited, non-exclusive license to host, store, copy,
        transmit, process, reproduce, and otherwise technically handle that User Content only to the extent
        reasonably necessary to:
      </p>
      <ul className="list-disc space-y-2 pl-6">
        <li>provide and operate the Service;</li>
        <li>store and deliver files according to your instructions;</li>
        <li>maintain the technical integrity and security of the Service;</li>
        <li>investigate violations of these Terms where appropriate;</li>
        <li>comply with applicable law and valid legal requirements; and</li>
        <li>enforce these Terms and other applicable GainFile policies.</li>
      </ul>
      <p>
        This license does not grant GainFile ownership of your User Content or the right to sell your User Content as
        GainFile&apos;s own content.
      </p>
    </LegalSection>

    <LegalSection title="7. User Responsibilities">
      <p>
        You are solely responsible for User Content uploaded, stored, downloaded, or shared through your account and
        for your use of the Service.
      </p>
      <p>
        You represent that you have all rights, permissions, licenses, and legal authority necessary to upload,
        store, download, or share your User Content.
      </p>
      <p>
        The technical ability to upload or share a file through GainFile does not mean that GainFile authorizes,
        licenses, endorses, or approves that content.
      </p>
      <p>You are responsible for determining whether your use of particular content is lawful.</p>
      <p>
        You should maintain independent backup copies of important or irreplaceable files. GainFile is not intended
        to serve as your sole guaranteed backup service and does not guarantee that User Content will remain
        available indefinitely.
      </p>
    </LegalSection>

    <LegalSection title="8. Acceptable Use and Prohibited Content">
      <p>You may use GainFile only for lawful purposes and in accordance with these Terms.</p>
      <p>You must not use GainFile to upload, store, distribute, promote, facilitate, or otherwise make available content or activity that:</p>
      <ul className="list-disc space-y-2 pl-6">
        <li>violates applicable law or regulation;</li>
        <li>infringes copyright, trademark, privacy, publicity, or other rights of another person;</li>
        <li>involves fraud, phishing, scams, impersonation, or other deceptive activity;</li>
        <li>contains malware, viruses, malicious code, or material intended to compromise devices, accounts, networks, or data;</li>
        <li>facilitates unauthorized access to systems, services, or accounts;</li>
        <li>unlawfully discloses personal, confidential, or private information;</li>
        <li>exploits, abuses, or seriously endangers minors;</li>
        <li>promotes or facilitates serious unlawful harm to another person; or</li>
        <li>otherwise materially violates these Terms or another applicable GainFile policy.</li>
      </ul>
      <p>GainFile may restrict access to or remove content where reasonably necessary to enforce these Terms or comply with applicable law.</p>
    </LegalSection>

    <LegalSection title="9. Child Safety">
      <p>
        GainFile has zero tolerance for content involving the sexual exploitation or abuse of minors or other
        unlawful content that seriously endangers children.
      </p>
      <p>
        If GainFile becomes aware of such content or related unlawful activity, GainFile may immediately disable or
        remove the content, suspend or terminate associated accounts, preserve relevant information where legally
        required, and report the matter to appropriate authorities or reporting organizations where required or
        permitted by applicable law.
      </p>
      <p>GainFile may cooperate with lawful investigations and requests from competent law enforcement or governmental authorities.</p>
      <p>
        Reports involving child safety or other serious illegal content should be submitted through GainFile&apos;s{' '}
        <a href={REPORT_ABUSE_URL} className="font-semibold text-[var(--aurora-1)] hover:underline">designated abuse reporting channel</a>.
        See also our <a href="/child-abuse-policy" className="font-semibold text-[var(--aurora-1)] hover:underline">Child Abuse Policy</a>.
      </p>
    </LegalSection>

    <LegalSection title="10. Prohibited Technical Activities">
      <p>You must not use or attempt to use the Service to:</p>
      <ul className="list-disc space-y-2 pl-6">
        <li>gain unauthorized access to GainFile systems, servers, networks, accounts, or data;</li>
        <li>bypass, disable, circumvent, or interfere with security measures;</li>
        <li>circumvent bandwidth, download, storage, account, or other technical restrictions;</li>
        <li>interfere with the normal operation, security, or availability of the Service;</li>
        <li>use automated systems in a manner that creates unreasonable or excessive load on the Service;</li>
        <li>scrape, crawl, index, or systematically extract information from GainFile where such activity is not authorized;</li>
        <li>distribute malicious software or malicious code;</li>
        <li>artificially manipulate downloads, traffic, referrals, earnings, statistics, or other Service metrics;</li>
        <li>publicly share Premium account credentials;</li>
        <li>operate unauthorized debrid, multi-host, account-sharing, or similar services using GainFile accounts; or</li>
        <li>obtain Service features or benefits through fraud, exploitation, automation abuse, or technical circumvention.</li>
      </ul>
      <p>GainFile may use reasonable technical measures to detect, limit, and prevent such activity.</p>
    </LegalSection>

    <LegalSection title="11. Copyright and Intellectual Property">
      <p>GainFile respects copyright, trademark, and other intellectual property rights.</p>
      <p>
        You must not upload, store, or distribute content through GainFile unless you have the appropriate rights,
        authorization, license, or other lawful basis to do so.
      </p>
      <p>
        GainFile may remove or disable access to material in response to valid infringement notices and may take
        action against accounts involved in repeated or serious intellectual property infringement.
      </p>
      <p>
        Detailed procedures for copyright notices, takedowns, counter-notifications, repeat infringement, and
        trademark complaints are provided in the GainFile{' '}
        <a href="/dmca" className="font-semibold text-[var(--aurora-1)] hover:underline">Intellectual Property &amp; DMCA Policy</a>.
      </p>
    </LegalSection>

    <LegalSection title="12. Storage and File Retention">
      <p>GainFile may apply different storage and retention rules depending on the account type or Service plan.</p>
      <p>
        Unless a different retention period is expressly stated for a particular plan, a file may be automatically
        deleted if it has not been downloaded for 30 consecutive days from its most recent download.
      </p>
      <p>For a newly uploaded file that has never been downloaded, the 30-day period begins on the date the file was uploaded.</p>
      <p>Each subsequent qualifying download may restart the applicable inactivity period.</p>
      <p>Different or extended retention periods may be offered for certain Premium plans or other Services.</p>
      <p>A file may also be removed before the normal retention period where:</p>
      <ul className="list-disc space-y-2 pl-6">
        <li>the uploader deletes the file;</li>
        <li>the associated account is terminated;</li>
        <li>the file violates these Terms or another GainFile policy;</li>
        <li>removal is required by applicable law or valid legal process;</li>
        <li>the file presents a security or technical risk; or</li>
        <li>continued storage is no longer reasonably possible because of technical or operational circumstances.</li>
      </ul>
      <p>Once a file has been permanently deleted, GainFile does not guarantee that the file can be recovered or restored.</p>
      <p>Users are responsible for maintaining independent copies of important files.</p>
    </LegalSection>

    <LegalSection title="13. Service Limits and Fair Use">
      <p>
        GainFile may establish reasonable technical and usage limits necessary to maintain the performance, security,
        availability, and sustainability of the Service.
      </p>
      <p>These limits may relate to:</p>
      <ul className="list-disc space-y-2 pl-6">
        <li>file size;</li>
        <li>storage capacity;</li>
        <li>download traffic and bandwidth;</li>
        <li>download speed;</li>
        <li>simultaneous downloads;</li>
        <li>upload or download frequency;</li>
        <li>API or automated access;</li>
        <li>Premium usage; and</li>
        <li>other technical resources.</li>
      </ul>
      <p>Limits may differ between free, registered, and Premium users and between individual Premium plans.</p>
      <p>The limits applicable to a particular Service or plan will generally be displayed on the relevant Service or plan page.</p>
      <p>
        GainFile may take reasonable action against activity that circumvents Service limits, creates excessive or
        abnormal resource consumption, materially affects other users, or otherwise constitutes abuse of the Service.
      </p>
      <p>Such action may include temporary restrictions, reduced access, suspension, or termination depending on the circumstances.</p>
    </LegalSection>

    <LegalSection title="14. Premium Services">
      <p>GainFile may offer paid Premium plans that provide additional features, higher limits, faster access, or other benefits.</p>
      <p>The price, duration, applicable limits, and primary features of each Premium plan will be displayed before purchase.</p>
      <p>Unless expressly stated otherwise at the time of purchase, GainFile Premium plans are provided as one-time purchases.</p>
      <p>Purchasing Premium does not automatically enroll you in recurring billing or automatic renewal.</p>
      <p>When your Premium period expires, Premium access will end unless you make another purchase.</p>
      <p>
        GainFile may introduce, modify, or discontinue Premium plans from time to time. Changes will not reduce
        mandatory rights associated with a purchase already completed where prohibited by applicable law.
      </p>
    </LegalSection>

    <LegalSection title="15. Payments, Delivery and Refunds">
      <h3 className="text-lg font-bold text-[var(--text-primary)]">Payments</h3>
      <p>You agree to pay the price displayed at the time of purchase.</p>
      <p>Applicable taxes, processing fees, or other charges may be added where required and will be disclosed where applicable.</p>
      <p>Payments may be processed through independent third-party payment providers.</p>
      <p>
        GainFile may receive transaction information necessary to confirm and administer your purchase, while payment
        credentials may be processed directly by the applicable payment provider.
      </p>
      <p>
        GainFile may refuse or cancel transactions reasonably suspected of involving fraud, unauthorized payment
        methods, payment abuse, or unlawful activity.
      </p>

      <h3 className="text-lg font-bold text-[var(--text-primary)]">Delivery</h3>
      <p>Premium access is delivered electronically and is generally activated after successful payment confirmation.</p>
      <p>No physical product is shipped.</p>
      <p>Payment verification, security reviews, payment processor delays, or technical problems may occasionally delay activation.</p>
      <p>If a successfully paid Premium purchase is not activated within a reasonable period, you should contact GainFile Support.</p>

      <h3 className="text-lg font-bold text-[var(--text-primary)]">Refunds</h3>
      <p>GainFile accepts refund requests submitted within 24 hours of the original Premium purchase, subject to the conditions below.</p>
      <p>A refund may generally be available where:</p>
      <ul className="list-disc space-y-2 pl-6">
        <li>the request is submitted within the 24-hour period;</li>
        <li>the Premium Service has not been materially used; and</li>
        <li>the purchase or account has not been used in violation of these Terms.</li>
      </ul>
      <p>
        Premium may be considered materially used where the account has consumed a material amount of Premium-only
        download bandwidth, traffic, storage, or other paid benefits.
      </p>
      <p>
        GainFile may decline a voluntary refund where substantial Premium benefits have already been consumed or
        where there is evidence of fraud, abuse, unauthorized account sharing, or material violation of these Terms.
      </p>
      <p>Unless required otherwise by applicable law, partial refunds for partially used Premium periods are not provided.</p>
      <p>Approved refunds will normally be returned through the original payment method where reasonably possible.</p>
      <p>
        Nothing in this section excludes or limits any mandatory consumer withdrawal, refund, or other statutory
        rights that cannot lawfully be waived or restricted.
      </p>
      <p>Refund requests should be submitted through:</p>
      <p>
        Support:{' '}
        <a href={`mailto:${SUPPORT_EMAIL}`} className="font-semibold text-[var(--aurora-1)] hover:underline">{SUPPORT_EMAIL}</a>{' '}
        or your <a href={SETTINGS_URL} className="font-semibold text-[var(--aurora-1)] hover:underline">account billing settings</a>.
      </p>
    </LegalSection>

    <LegalSection title="16. Payment Disputes and Chargebacks">
      <p>
        If you believe that a payment was made incorrectly or without authorization, you should contact GainFile
        Support so that the transaction can be investigated.
      </p>
      <p>
        GainFile may temporarily restrict Premium access or the associated account while investigating a chargeback,
        payment reversal, suspected fraud, or other payment dispute.
      </p>
      <p>
        GainFile may suspend or terminate accounts involved in fraudulent payments, stolen payment methods,
        intentionally abusive chargebacks, or other payment abuse.
      </p>
      <p>
        Where a payment is reversed, refunded, or successfully charged back, the Premium Service associated with that
        payment may be withdrawn.
      </p>
      <p>Nothing in this section prevents users from exercising legitimate rights available under applicable law or through their payment provider.</p>
    </LegalSection>

    <LegalSection title="17. Affiliate and Reseller Programs">
      <p>GainFile may offer affiliate, referral, reseller, or other commercial programs.</p>
      <p>
        Participation in these programs may be subject to separate terms covering eligibility, commissions, payouts,
        verification, advertising methods, prohibited conduct, fraud prevention, and other program-specific
        requirements.
      </p>
      <p>Where additional program terms apply, participants must comply with both these Terms and the applicable program terms.</p>
      <p>GainFile may investigate, withhold, or reverse payouts, and may suspend or terminate participation, in cases of fraud, abuse, or violation of program terms.</p>
    </LegalSection>

    <LegalSection title="18. Third-Party Services">
      <p>
        GainFile may contain links to or rely upon independent third-party services, including payment processors,
        infrastructure providers, analytics services, advertising services, and other technology providers.
      </p>
      <p>
        GainFile does not control independent third-party services and is not responsible for their availability,
        content, terms, privacy practices, or independent actions.
      </p>
      <p>Your use of third-party services may be governed by separate terms between you and the applicable third party.</p>
    </LegalSection>

    <LegalSection title="19. Service Availability and Changes">
      <p>GainFile aims to provide reliable access to the Service but does not guarantee uninterrupted, continuous, or error-free availability.</p>
      <p>
        The Service may occasionally be unavailable or limited because of maintenance, upgrades, security incidents,
        technical failures, infrastructure or network problems, third-party providers, legal requirements, or
        circumstances beyond GainFile&apos;s reasonable control.
      </p>
      <p>
        GainFile may modify, replace, suspend, limit, or discontinue features where reasonably necessary for
        technical, security, operational, legal, or business reasons.
      </p>
      <p>Where required by applicable law, GainFile will provide appropriate notice regarding material changes affecting paid Services.</p>
    </LegalSection>

    <LegalSection title="20. Suspension and Termination">
      <p>GainFile may restrict, suspend, or terminate access to an account or the Service where reasonably necessary because of:</p>
      <ul className="list-disc space-y-2 pl-6">
        <li>material or repeated violation of these Terms;</li>
        <li>illegal content or activity;</li>
        <li>repeated or serious intellectual property infringement;</li>
        <li>serious abuse of the Service;</li>
        <li>fraud or unauthorized payments;</li>
        <li>security threats;</li>
        <li>manipulation of GainFile systems, statistics, or commercial programs;</li>
        <li>repeated circumvention of Service restrictions;</li>
        <li>valid legal requirements; or</li>
        <li>conduct that materially threatens GainFile, its infrastructure, users, or third parties.</li>
      </ul>
      <p>
        In serious cases involving unlawful activity, fraud, significant security threats, child safety, or other
        urgent risks, GainFile may take immediate action without prior notice where permitted by applicable law.
      </p>
      <p>
        Suspension or termination may result in loss of access to User Content, Premium benefits, affiliate or
        reseller functions, and other account features.
      </p>
      <p>Termination for a material violation of these Terms does not automatically create a right to a refund.</p>
      <p>
        Where applicable law requires notice, explanation, appeal, or other procedural rights regarding restrictions
        imposed by GainFile, those rights will be provided as required.
      </p>
    </LegalSection>

    <LegalSection title="21. Disclaimer of Warranties">
      <p>
        To the maximum extent permitted by applicable law, GainFile and the Service are provided on an &ldquo;AS
        IS&rdquo; and &ldquo;AS AVAILABLE&rdquo; basis.
      </p>
      <p>GainFile does not warrant or guarantee that:</p>
      <ul className="list-disc space-y-2 pl-6">
        <li>the Service will always be available, uninterrupted, secure, or error-free;</li>
        <li>every file will remain stored or available indefinitely;</li>
        <li>every technical problem will be corrected;</li>
        <li>every download or upload will complete successfully;</li>
        <li>the Service will meet every user&apos;s individual requirements; or</li>
        <li>loss or corruption of data will never occur.</li>
      </ul>
      <p>You use the Service at your own reasonable risk and should maintain independent copies of important data.</p>
      <p>Nothing in these Terms excludes any warranty, guarantee, consumer right, or other protection that cannot lawfully be excluded.</p>
    </LegalSection>

    <LegalSection title="22. Limitation of Liability and Indemnification">
      <h3 className="text-lg font-bold text-[var(--text-primary)]">Limitation of Liability</h3>
      <p>
        To the maximum extent permitted by applicable law, GainFile will not be liable for indirect, incidental,
        special, consequential, exemplary, or similar damages arising from or relating to the Service, including
        loss of data, revenue, profits, business opportunities, or goodwill.
      </p>
      <p>GainFile will not be responsible for User Content uploaded or distributed by users except to the extent responsibility cannot lawfully be excluded.</p>
      <p>Where GainFile&apos;s liability cannot legally be excluded, liability will be limited to the maximum extent permitted by applicable law.</p>
      <p>Nothing in these Terms excludes or limits liability where exclusion or limitation would be unlawful.</p>

      <h3 className="text-lg font-bold text-[var(--text-primary)]">Indemnification</h3>
      <p>To the extent permitted by applicable law, you agree to indemnify and hold GainFile harmless from claims, liabilities, damages, losses, and reasonable costs arising from:</p>
      <ul className="list-disc space-y-2 pl-6">
        <li>your unlawful use of the Service;</li>
        <li>User Content uploaded or distributed by you;</li>
        <li>your infringement of third-party rights; or</li>
        <li>your material violation of these Terms.</li>
      </ul>
      <p>This obligation applies only to the extent permitted by applicable law and does not override mandatory consumer protections.</p>
    </LegalSection>

    <LegalSection title="23. Privacy and Communications">
      <p>
        GainFile&apos;s collection and processing of personal information is described in the GainFile{' '}
        <a href="/privacy-policy" className="font-semibold text-[var(--aurora-1)] hover:underline">Privacy Policy</a>.
      </p>
      <p>GainFile may send communications reasonably necessary to operate the Service, including messages concerning:</p>
      <ul className="list-disc space-y-2 pl-6">
        <li>account activity;</li>
        <li>purchases and payments;</li>
        <li>security;</li>
        <li>Premium access;</li>
        <li>Service availability;</li>
        <li>support requests; and</li>
        <li>material policy or Service changes.</li>
      </ul>
      <p>
        Operational and transactional communications may be necessary for the provision of the Service and are
        separate from optional marketing communications.
      </p>
      <p>Where GainFile sends marketing communications, users will be provided with applicable opt-out options as required by law.</p>
    </LegalSection>

    <LegalSection title="24. Governing Law and Disputes">
      <p>These Terms shall be governed by and construed in accordance with the laws of the Republic of Estonia, without regard to conflict-of-law principles.</p>
      <p>
        Subject to mandatory applicable law, disputes arising out of or relating to these Terms or the Service shall
        be subject to the jurisdiction of the competent courts of the Republic of Estonia.
      </p>
      <p>
        If you are a consumer, nothing in these Terms deprives you of mandatory consumer protections, jurisdictional
        rights, dispute-resolution rights, or other statutory rights that cannot lawfully be waived by agreement.
      </p>
    </LegalSection>

    <LegalSection title="25. General Provisions and Contact">
      <h3 className="text-lg font-bold text-[var(--text-primary)]">Force Majeure</h3>
      <p>
        To the extent permitted by applicable law, GainFile will not be responsible for failure or delay caused by
        circumstances beyond its reasonable control, including natural disasters, major infrastructure or
        telecommunications failures, cyber incidents, governmental actions, war, civil disturbance, or comparable
        events.
      </p>

      <h3 className="text-lg font-bold text-[var(--text-primary)]">Severability</h3>
      <p>
        If any provision of these Terms is determined to be invalid, unlawful, or unenforceable, that provision will
        be interpreted or limited to the minimum extent necessary, and the remaining provisions will continue in
        effect to the extent permitted by law.
      </p>

      <h3 className="text-lg font-bold text-[var(--text-primary)]">No Waiver</h3>
      <p>Failure by GainFile to enforce any provision of these Terms does not constitute a waiver of that provision or of the right to enforce it later.</p>

      <h3 className="text-lg font-bold text-[var(--text-primary)]">Assignment</h3>
      <p>You may not assign or transfer your rights or obligations under these Terms without GainFile&apos;s prior authorization where such restriction is permitted by law.</p>
      <p>
        GainFile may assign its rights and obligations in connection with a merger, acquisition, restructuring, sale
        of business or assets, or similar transaction, subject to applicable law.
      </p>

      <h3 className="text-lg font-bold text-[var(--text-primary)]">Entire Agreement</h3>
      <p>
        These Terms, together with the GainFile Privacy Policy, Intellectual Property &amp; DMCA Policy, and any
        additional terms expressly applicable to a particular feature or program, constitute the agreement governing
        your use of the Service.
      </p>
      <p>
        If specific additional terms conflict with these Terms, the specific additional terms will govern with
        respect to the applicable feature or program to the extent of that conflict.
      </p>

      <h3 className="text-lg font-bold text-[var(--text-primary)]">Contact</h3>
      <p>For general questions, account issues, Premium purchases, and refund requests:</p>
      <p>
        Support:{' '}
        <a href={`mailto:${SUPPORT_EMAIL}`} className="font-semibold text-[var(--aurora-1)] hover:underline">{SUPPORT_EMAIL}</a>
      </p>
      <p>For reports concerning illegal or abusive content:</p>
      <p>
        Abuse:{' '}
        <a href={REPORT_ABUSE_URL} className="font-semibold text-[var(--aurora-1)] hover:underline">Report Abuse</a>
      </p>
      <p>
        For copyright and trademark complaints, please follow the procedures described in the GainFile{' '}
        <a href="/dmca" className="font-semibold text-[var(--aurora-1)] hover:underline">Intellectual Property &amp; DMCA Policy</a>.
      </p>
    </LegalSection>
  </PublicPageLayout>
);

export default TermsOfService;
