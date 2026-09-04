import React from 'react';
import { motion } from 'framer-motion';
import {
  RiArrowRightLine,
  RiBankCardLine,
  RiCustomerService2Line,
  RiFolderTransferLine,
  RiQuestionAnswerLine,
  RiShieldCheckLine,
} from 'react-icons/ri';
import PublicPageLayout from '../../components/PublicPageLayout';
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from '../../components/ui/Accordion';
import { Button } from '../../components/ui/Button';

const Faq = () => {
  const sections = [
    {
      title: 'General',
      description: 'Getting started with Gainfile',
      icon: RiQuestionAnswerLine,
      faqs: [
        { q: "What is Gainfile?", a: "Gainfile is a file hosting and sharing service that lets you upload, organize, and share files through simple download links." },
        { q: "Can I use Gainfile for free?", a: "Yes. Every registered account starts on the Free Plan with 200GB of storage and unlimited bandwidth at the free download speed." },
        { q: "Can I use Gainfile on my phone?", a: "Yes. Gainfile works in modern mobile browsers, so you can upload, manage, and share files from a phone or tablet." },
      ],
    },
    {
      title: 'Uploads & Files',
      description: 'Uploading, transferring, and sharing',
      icon: RiFolderTransferLine,
      faqs: [
        { q: "What file types can I upload?", a: "Gainfile supports documents, images, videos, audio, archives, and other common file types. Maximum file size depends on your plan." },
        { q: "Can I transfer files from another server?", a: "Yes. Use a public direct HTTP or HTTPS link for Remote URL transfer, or connect through FTP. Remote URL accepts up to 20 links per batch." },
        { q: "How long are my files stored?", a: "Unless your plan states otherwise, a file may be removed after 30 consecutive days without a download. A qualifying download may restart this period." },
        { q: "Can I protect or expire a shared link?", a: "Yes. A share link can use controls such as a password, expiration date, or download limit. Once expired, its download action is disabled." },
      ],
    },
    {
      title: 'Premium & Billing',
      description: 'Plans, payments, and refunds',
      icon: RiBankCardLine,
      faqs: [
        { q: "How do Premium plans work?", a: "Premium plans are one-time purchases for the duration shown at checkout and do not automatically renew." },
        { q: "What happens when Premium expires?", a: "Premium benefits end when the purchased period expires and your account returns to the Free Plan unless you purchase another period." },
        { q: "Can I request a refund?", a: "Refund requests may be submitted within 24 hours when Premium benefits have not been materially used. Contact support@gainfile.com for help." },
      ],
    },
    {
      title: 'Security & Support',
      description: 'Account safety and assistance',
      icon: RiShieldCheckLine,
      faqs: [
        { q: "How do I protect my account?", a: "Use a strong unique password, enable two-factor authentication, and regularly review Login Activity in My Account." },
        { q: "What should I do if I forget my password?", a: "Use Forgot Password on the sign-in page, enter your email address, and follow the secure reset link sent to your inbox." },
        { q: "How can I get help or report abusive content?", a: "Create a support ticket or email support@gainfile.com for account help. Use the Report Abuse page for illegal, harmful, or infringing content." },
      ],
    },
  ];
  const questionCount = sections.reduce((total, section) => total + section.faqs.length, 0);

  return (
    <PublicPageLayout
      eyebrow="Help Center"
      title="Frequently Asked Questions"
      description="Quick answers about uploading, sharing, Premium plans, billing, and account security."
      contentClassName="max-w-4xl"
    >
      <motion.div
        className="mb-7 flex items-center gap-3 rounded-2xl border border-[var(--glass-border)] bg-[var(--glass-bg)] px-5 py-4"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal-500/10 text-xl text-teal-500">
          <RiQuestionAnswerLine />
        </span>
        <div>
          <p className="text-sm font-bold">{questionCount} common questions in {sections.length} categories</p>
          <p className="mt-0.5 text-xs text-[var(--text-secondary)]">Choose a category and select a question to view its answer.</p>
        </div>
      </motion.div>

      <div className="space-y-10">
        {sections.map((section, sectionIndex) => {
          const SectionIcon = section.icon;

          return (
            <motion.section
              key={section.title}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: sectionIndex * 0.08 }}
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal-500/10 text-xl text-teal-500">
                  <SectionIcon />
                </span>
                <div>
                  <h2 className="text-xl font-bold">{section.title}</h2>
                  <p className="mt-0.5 text-xs text-[var(--text-secondary)]">{section.description} · {section.faqs.length} questions</p>
                </div>
              </div>

              <Accordion type="single" collapsible className="space-y-3">
                {section.faqs.map((faq, faqIndex) => (
                  <AccordionItem
                    key={faq.q}
                    value={`${sectionIndex}-${faqIndex}`}
                    className="glass-card group overflow-hidden rounded-3xl border border-[var(--glass-border)] bg-[var(--glass-bg)] transition-colors last:border hover:bg-[var(--glass-border)]"
                  >
                    <AccordionTrigger
                      value={`${sectionIndex}-${faqIndex}`}
                      icon={RiQuestionAnswerLine}
                      iconClassName="text-teal-500 bg-teal-500/10 border-teal-500/20 group-hover:scale-110"
                      className="p-5 sm:p-6"
                    >
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent value={`${sectionIndex}-${faqIndex}`} className="px-5 pb-5 sm:pl-20 sm:pr-6 sm:pb-6">
                      <p className="text-sm leading-relaxed text-[var(--text-secondary)] sm:text-base">{faq.a}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.section>
          );
        })}
      </div>

      <div className="mt-10 flex flex-col items-center justify-between gap-5 rounded-3xl border border-[var(--glass-border)] bg-gradient-to-br from-teal-500/10 to-emerald-500/10 p-6 text-center sm:flex-row sm:text-left">
        <div className="flex flex-col items-center gap-4 sm:flex-row">
          <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[var(--bg-primary)] text-2xl text-teal-500">
            <RiCustomerService2Line />
          </span>
          <div>
            <h2 className="text-lg font-bold">Still need help?</h2>
            <p className="mt-1 text-sm text-[var(--text-secondary)]">Create a support ticket and include the details of your issue.</p>
          </div>
        </div>
        <Button as="a" href="/tickets" className="w-full shrink-0 sm:w-auto">
          Contact Support <RiArrowRightLine />
        </Button>
      </div>
    </PublicPageLayout>
  );
};

export default Faq;
