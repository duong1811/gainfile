import React from 'react';
import {
  RiCloudLine,
  RiFlashlightLine,
  RiGlobalLine,
  RiHeartLine,
  RiShieldCheckLine,
  RiTeamLine,
  RiUserSmileLine,
} from 'react-icons/ri';
import PublicPageLayout from '../../components/PublicPageLayout';
import { Card, CardDescription, CardTitle } from '../../components/ui/Card';

const STATS = [
  { label: 'Files hosted', value: '120M+' },
  { label: 'Countries served', value: '180+' },
  { label: 'Uptime SLA', value: '99.9%' },
  { label: 'Team members', value: '35' },
];

const VALUES = [
  {
    icon: RiFlashlightLine,
    title: 'Speed first',
    desc: 'Every upload and download is optimized to feel instant, no matter the file size or your connection.',
  },
  {
    icon: RiShieldCheckLine,
    title: 'Privacy by design',
    desc: 'Your files are yours. We encrypt data in transit and at rest, and never scan content for advertising.',
  },
  {
    icon: RiUserSmileLine,
    title: 'Built for people',
    desc: 'From solo creators to enterprise teams, Gainfile adapts to how you actually work.',
  },
  {
    icon: RiGlobalLine,
    title: 'Global by default',
    desc: 'A distributed edge network keeps transfers fast whether your audience is next door or overseas.',
  },
];

const AboutUs = () => (
  <PublicPageLayout
    eyebrow="Our Story"
    title="Building the fastest way to share files"
    description="Gainfile started as a side project to solve a simple problem: sending large files shouldn't be slow, confusing, or insecure."
    contentClassName="max-w-5xl"
  >
    <Card variant="aurora" padding="lg" className="mb-14">
      <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
        {STATS.map((stat) => (
          <div key={stat.label}>
            <p className="text-3xl font-extrabold text-[var(--aurora-1)] md:text-4xl">{stat.value}</p>
            <p className="mt-1 text-sm font-semibold text-[var(--text-secondary)]">{stat.label}</p>
          </div>
        ))}
      </div>
    </Card>

    <div className="mb-14 grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center">
      <div>
        <h2 className="mb-4 text-3xl font-bold text-[var(--text-primary)]">Our mission</h2>
        <p className="mb-4 leading-relaxed text-[var(--text-secondary)]">
          We believe moving a file from one place to another should be effortless. Gainfile exists to remove the
          friction from file sharing &mdash; no clunky clients, no surprise limits, no compromise on security.
        </p>
        <p className="leading-relaxed text-[var(--text-secondary)]">
          Today, individuals, creators, and teams around the world trust Gainfile to store, share, and deliver their
          files reliably, every single day.
        </p>
      </div>
      <Card padding="lg" className="flex items-center gap-4">
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[var(--glass-border)]">
          <RiHeartLine size={28} className="text-[var(--aurora-1)]" />
        </div>
        <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
          &ldquo;We started Gainfile because we were tired of fighting with clunky upload tools. Every decision we make
          starts with: does this make sharing files easier?&rdquo;
        </p>
      </Card>
    </div>

    <h2 className="mb-6 text-center text-3xl font-bold text-[var(--text-primary)]">What we stand for</h2>
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {VALUES.map((value) => (
        <Card key={value.title} variant="interactive" padding="lg">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--glass-border)]">
            <value.icon size={24} className="text-[var(--aurora-1)]" />
          </div>
          <CardTitle className="mb-2 text-lg">{value.title}</CardTitle>
          <CardDescription className="leading-relaxed">{value.desc}</CardDescription>
        </Card>
      ))}
    </div>

    <Card variant="aurora" padding="lg" className="mt-14 flex flex-col items-center gap-4 text-center">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--glass-border)]">
        <RiTeamLine size={28} className="text-[var(--aurora-1)]" />
      </div>
      <h3 className="text-2xl font-bold text-[var(--text-primary)]">A small team, a big mission</h3>
      <p className="max-w-2xl text-sm leading-relaxed text-[var(--text-secondary)]">
        We&apos;re a distributed team spread across multiple time zones, united by the goal of making file sharing feel
        effortless. We&apos;re always looking for people who care deeply about performance, security, and simplicity.
      </p>
      <div className="flex items-center gap-2 text-sm font-semibold text-[var(--aurora-1)]">
        <RiCloudLine size={18} /> careers@gainfile.com
      </div>
    </Card>
  </PublicPageLayout>
);

export default AboutUs;
