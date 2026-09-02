import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  RiArrowRightLine,
  RiCloudLine,
  RiFolderVideoLine,
  RiGlobalLine,
  RiLinkM,
  RiPlayCircleLine,
  RiServerLine,
  RiShieldCheckLine,
  RiUploadCloud2Line,
} from 'react-icons/ri';
import Topbar from '../components/Topbar';
import HorizontalMenu from '../components/HorizontalMenu';
import LandingPremium from '../components/landing/LandingPremium';
import { Button } from '../components/ui/Button';
import { Card, CardDescription, CardTitle } from '../components/ui/Card';

const FEATURES = [
  {
    icon: RiUploadCloud2Line,
    title: 'Upload from anywhere',
    description: 'Upload from your device, cloud storage, FTP server, or a remote URL.',
  },
  {
    icon: RiFolderVideoLine,
    title: 'Keep files organized',
    description: 'Create folders, find files quickly, and move or copy multiple items at once.',
  },
  {
    icon: RiLinkM,
    title: 'Control every share link',
    description: 'Add a password, expiry date, download limit, Premium access, or IP restriction.',
  },
  {
    icon: RiShieldCheckLine,
    title: 'Share with confidence',
    description: 'Your files are protected in transit and at rest with clear abuse controls.',
  },
];


const STEPS = [
  {
    number: '01',
    title: 'Upload',
    description: 'Choose a source and send your files to Gainfile.',
  },
  {
    number: '02',
    title: 'Protect',
    description: 'Set the access rules that fit your file and audience.',
  },
  {
    number: '03',
    title: 'Share',
    description: 'Copy the link and deliver your file anywhere.',
  },
];

const LandingPage = () => (
  <div className="app-container">
    <div className="aurora-bg" />

    <motion.main
      className="main-content flex flex-col"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <Topbar isHorizontalMenu>
        <HorizontalMenu />
      </Topbar>

      <section className="relative px-4 pb-20 pt-12 text-center md:px-10 md:pb-28 md:pt-20">
        <div className="pointer-events-none absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-[var(--aurora-1)]/20 blur-[120px]" />
        <motion.div
          className="relative mx-auto max-w-5xl"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.65 }}
        >
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[var(--aurora-1)]/30 bg-[var(--aurora-1)]/10 px-4 py-2">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            <span className="text-xs font-bold uppercase tracking-widest text-[var(--aurora-1)]">
              Fast, secure file sharing
            </span>
          </div>

          <h1 className="text-5xl font-black leading-[1.05] tracking-tight text-[var(--text-primary)] md:text-7xl">
            Upload once.
            <span className="block bg-gradient-to-r from-[var(--aurora-1)] via-[var(--aurora-2)] to-[var(--aurora-4)] bg-clip-text text-transparent">
              Share anywhere.
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-[var(--text-secondary)] md:text-xl">
            Store, organize, and share large files without complicated tools. Set your access rules, copy the link,
            and you are done.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
            <Button as={Link} href="/register" variant="primary" size="lg" className="font-bold">
              Start for free <RiArrowRightLine />
            </Button>
            <Button as={Link} href="/s/demo-public" variant="glass" size="lg" className="font-bold">
              Try a download
            </Button>
          </div>

        </motion.div>
      </section>

      <section id="features" className="border-y border-[var(--glass-border)] bg-[var(--glass-bg)] px-4 py-20 md:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[var(--aurora-1)]">Built for files</p>
            <h2 className="text-3xl font-bold tracking-tight md:text-5xl">Everything you need. Nothing you do not.</h2>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {FEATURES.map(({ icon: Icon, title, description }, index) => (
              <Card key={title} variant="interactive" padding="lg" transition={{ delay: index * 0.06 }}>
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--glass-border)]">
                  <Icon className="text-[var(--aurora-1)]" size={24} />
                </div>
                <CardTitle className="mb-3 text-lg">{title}</CardTitle>
                <CardDescription className="leading-relaxed">{description}</CardDescription>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="px-4 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[var(--aurora-1)]">Simple workflow</p>
              <h2 className="text-3xl font-bold tracking-tight md:text-5xl">From file to link in three steps.</h2>
              <p className="mt-5 leading-relaxed text-[var(--text-secondary)]">
                No desktop client to install and no confusing setup. Everything happens in your browser.
              </p>
            </div>

            <div className="space-y-4">
              {STEPS.map((step, index) => (
                <Card
                  key={step.number}
                  padding="lg"
                  transition={{ delay: index * 0.08 }}
                  className="flex items-center gap-5"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-[var(--aurora-1)]/30 bg-[var(--aurora-1)]/10 font-black text-[var(--aurora-1)]">
                    {step.number}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold">{step.title}</h3>
                    <p className="mt-1 text-sm text-[var(--text-secondary)]">{step.description}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="premium" className="border-y border-[var(--glass-border)] bg-[var(--glass-bg)] px-4 py-20 md:px-10 md:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-emerald-400">Premium plans</p>
            <h2 className="text-3xl font-bold tracking-tight md:text-5xl">More speed. More storage. No waiting.</h2>
            <p className="mt-5 text-[var(--text-secondary)]">
              One-time purchases with no automatic renewal. Choose Pro or Max for the period that fits your needs.
            </p>
          </div>
          <LandingPremium />
        </div>
      </section>

      <section className="px-4 py-20 md:px-10 md:py-28">
        <Card
          variant="aurora"
          padding="lg"
          className="mx-auto max-w-4xl rounded-[2rem] text-center md:p-16"
        >
          <RiPlayCircleLine className="mx-auto mb-5 text-[var(--aurora-1)]" size={44} />
          <h2 className="text-3xl font-bold tracking-tight md:text-5xl">Your next file is ready to move.</h2>
          <p className="mx-auto mt-5 max-w-xl text-[var(--text-secondary)]">
            Create an account and start uploading now. Upgrade only when you need more.
          </p>
          <Button as={Link} href="/register" variant="primary" size="lg" className="mt-8 font-bold">
            Create free account <RiArrowRightLine />
          </Button>
        </Card>
      </section>

      <footer className="border-t border-[var(--glass-border)] bg-[var(--bg-primary)] px-4 py-12 md:px-10">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--aurora-1)] to-[var(--aurora-2)] text-xl text-white">
                <RiPlayCircleLine />
              </span>
              <span className="text-xl font-bold">Gainfile</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-[var(--text-secondary)]">
              Fast, secure file hosting and sharing for individuals, teams, and developers.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-bold">Product</h3>
            <ul className="space-y-3 text-sm text-[var(--text-secondary)]">
              <li><a href="#features" className="hover:text-[var(--aurora-1)]">Features</a></li>
              <li><a href="#premium" className="hover:text-[var(--aurora-1)]">Premium</a></li>
              <li><Link href="/api" className="hover:text-[var(--aurora-1)]">API</Link></li>
              <li><Link href="/faq" className="hover:text-[var(--aurora-1)]">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-bold">Company & legal</h3>
            <ul className="space-y-3 text-sm text-[var(--text-secondary)]">
              <li><Link href="/about-us" className="hover:text-[var(--aurora-1)]">About Us</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-[var(--aurora-1)]">Privacy Policy</Link></li>
              <li><Link href="/terms-of-service" className="hover:text-[var(--aurora-1)]">Terms of Service</Link></li>
              <li><Link href="/report-abuse" className="hover:text-[var(--aurora-1)]">Report Abuse</Link></li>
            </ul>
          </div>
        </div>

        <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-2 border-t border-[var(--glass-border)] pt-6 text-xs text-[var(--text-secondary)] sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Gainfile. All rights reserved.</p>
          <p>Secure file hosting and sharing.</p>
        </div>
      </footer>
    </motion.main>
  </div>
);

export default LandingPage;
