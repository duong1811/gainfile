"use client";

import React, { useState } from 'react';
import {
  RiBankCardLine,
  RiFolderLockLine,
  RiQuestionLine,
  RiShieldCheckLine,
} from 'react-icons/ri';
import PublicPageLayout from '../../components/PublicPageLayout';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '../../components/ui/Accordion';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../../components/ui/Tabs';

const CATEGORIES = [
  {
    id: 'general',
    label: 'General',
    icon: RiQuestionLine,
    items: [
      {
        q: 'What is Gainfile?',
        a: 'Gainfile is a cloud file storage and sharing platform that lets you upload, organize, and share files with anyone through a simple link.',
      },
      {
        q: 'Is there a free plan?',
        a: 'Yes. Every account starts on the Free plan with generous storage limits. You can upgrade any time from the Pricing page for higher limits and more features.',
      },
      {
        q: 'What file types are supported?',
        a: 'You can upload any file type — documents, images, videos, archives, and more. Some plans may have file size restrictions.',
      },
      {
        q: 'Can I use Gainfile on mobile?',
        a: 'Gainfile works in any modern mobile browser, and the interface is fully responsive so you can upload, browse, and share files from your phone or tablet.',
      },
    ],
  },
  {
    id: 'billing',
    label: 'Billing',
    icon: RiBankCardLine,
    items: [
      {
        q: 'How does billing work?',
        a: 'Paid plans are billed monthly or annually, in advance. You can view and manage your subscription at any time from your account settings.',
      },
      {
        q: 'Can I cancel or downgrade anytime?',
        a: 'Yes, you can cancel or change your plan at any time. Changes take effect at the end of your current billing cycle.',
      },
      {
        q: 'Do you offer refunds?',
        a: 'Fees are generally non-refundable, but reach out to support@gainfile.com if you believe you were charged in error.',
      },
    ],
  },
  {
    id: 'storage',
    label: 'Storage & Files',
    icon: RiFolderLockLine,
    items: [
      {
        q: 'What happens if I run out of storage?',
        a: 'You will be notified as you approach your storage limit. You can free up space by deleting files or upgrade to a plan with more storage.',
      },
      {
        q: 'How do shared links work?',
        a: 'When you generate a share link for a file, anyone with the link can view or download it based on the permissions you set (public, password-protected, or premium-only).',
      },
      {
        q: 'Can I set an expiration date on a link?',
        a: 'Yes, when creating a share link you can set an expiration date, a download cap, and even restrict access to a specific IP address.',
      },
    ],
  },
  {
    id: 'security',
    label: 'Security',
    icon: RiShieldCheckLine,
    items: [
      {
        q: 'Is my data encrypted?',
        a: 'Yes. Files are encrypted in transit using TLS and encrypted at rest on our storage infrastructure.',
      },
      {
        q: 'How do I report abusive or illegal content?',
        a: 'Use our Report Abuse form to flag any content that violates our Terms of Service, including copyright infringement or harmful material.',
      },
      {
        q: 'Do you scan uploaded files?',
        a: 'We use automated scanning to detect known malware and illegal content such as CSAM, in line with our Child Abuse Policy.',
      },
    ],
  },
];

const Faq = () => {
  const [activeCategory, setActiveCategory] = useState(CATEGORIES[0].id);

  return (
    <PublicPageLayout
      eyebrow="Support"
      title="Frequently Asked Questions"
      description="Can't find what you're looking for? Reach out to our support team any time."
      contentClassName="max-w-3xl"
    >
      <Tabs value={activeCategory} onValueChange={setActiveCategory} variant="pill">
        <TabsList className="mb-8 w-full justify-center">
          {CATEGORIES.map((category) => (
            <TabsTrigger key={category.id} value={category.id} className="flex items-center gap-2">
              <category.icon size={16} /> {category.label}
            </TabsTrigger>
          ))}
        </TabsList>

        {CATEGORIES.map((category) => (
          <TabsContent key={category.id} value={category.id}>
            <Accordion type="single" className="overflow-hidden rounded-2xl border border-[var(--glass-border)] bg-[var(--glass-bg)]">
              {category.items.map((item, index) => (
                <AccordionItem key={item.q} value={`${category.id}-${index}`}>
                  <AccordionTrigger value={`${category.id}-${index}`}>{item.q}</AccordionTrigger>
                  <AccordionContent value={`${category.id}-${index}`}>{item.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </TabsContent>
        ))}
      </Tabs>
    </PublicPageLayout>
  );
};

export default Faq;
