import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  RiRocketLine, RiCheckDoubleLine, RiBarChart2Line,
  RiShieldStarLine, RiTeamLine, RiComputerLine,
  RiStarFill, RiGlobalLine, RiArrowRightLine,
  RiSmartphoneLine, RiDatabase2Line, RiQuestionAnswerLine,
  RiGoogleFill, RiMicrosoftFill, RiSlackFill, RiGithubFill, RiTwitterXFill, RiLinkedinBoxFill
} from 'react-icons/ri';
import { Button } from '../components/ui/Button';
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from '../components/ui/Card';

const FeatureCard = ({ icon: Icon, title, desc, delay }) => (
  <Card
    variant="interactive"
    transition={{ delay }}
    className="p-8 group"
  >
    <div className="w-14 h-14 rounded-2xl bg-[var(--glass-border)] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
      <Icon size={28} className="text-[var(--aurora-1)]" />
    </div>
    <CardTitle className="text-xl mb-3">{title}</CardTitle>
    <CardDescription className="text-lg leading-relaxed">{desc}</CardDescription>
  </Card>
);

const LandingPage = () => {
  return (
    <div className="min-h-screen text-[var(--text-primary)] font-sans overflow-x-hidden relative">
      <div className="fixed inset-0 bg-[var(--bg-primary)] z-[-2] transition-colors duration-300"></div>
      <div className="fixed top-0 left-0 w-full h-[500px] bg-[var(--aurora-1)] opacity-20 blur-[150px] z-[-1] pointer-events-none rounded-full transform -translate-y-1/2 transition-colors duration-300"></div>

      {/* 1. Navbar */}
      <nav className="fixed top-0 left-0 w-full p-6 lg:px-24 flex justify-between items-center z-50 glass-card border-b border-[var(--glass-border)] rounded-none bg-[var(--bg-primary)]/80 backdrop-blur-xl transition-colors duration-300">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--aurora-1)] to-[var(--aurora-2)] flex items-center justify-center shadow-lg shadow-[var(--aurora-1)]/20">
            <RiRocketLine className="text-white text-xl" />
          </div>
          <span className="text-2xl font-bold font-outfit tracking-tight text-[var(--text-primary)]">Trackify</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors text-sm font-bold">Features</a>
          <a href="#how-it-works" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors text-sm font-bold">Workflow</a>
          <Link href="/pricing" className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors text-sm font-bold">Pricing</Link>
        </div>
        <div className="flex gap-4 items-center">
          <Link href="/login" className="hidden sm:block text-[var(--text-secondary)] hover:text-[var(--text-primary)] font-bold text-sm transition-colors">Log In</Link>
          <Button as={Link} href="/register" variant="white" className="!text-[var(--bg-primary)] font-bold">Get Started</Button>
        </div>
      </nav>

      {/* 2. Hero Section */}
      <section className="pt-40 pb-20 px-6 text-center relative z-10 flex flex-col items-center justify-center min-h-screen">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[var(--aurora-1)]/30 bg-[var(--aurora-1)]/10 mb-8 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-[var(--aurora-1)] animate-pulse"></span>
            <span className="text-xs font-bold text-[var(--aurora-1)] uppercase tracking-widest">v1.0 Aurora Update Live</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold mb-8 tracking-tighter leading-[1.1] font-outfit text-[var(--text-primary)]">
            The Ultimate Operating System <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--aurora-1)] via-[var(--aurora-2)] to-[var(--aurora-4)]">For Your SaaS</span>
          </h1>

          <p className="text-xl text-[var(--text-secondary)] mb-12 max-w-2xl mx-auto leading-relaxed">
            Multi-tenant architecture, real-time analytics, and premium glassmorphic UI. Built for founders who demand excellence.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button as={Link} href="/register" variant="primary" size="lg" className="flex items-center gap-2">
              Start Free Trial <RiArrowRightLine />
            </Button>
            <Button as={Link} href="/dashboard" variant="glass" size="lg" className="brightness-110">
              View Live Demo
            </Button>
          </div>
        </motion.div>
      </section>

      {/* 3. Dashboard Preview Mockup */}
      <section className="px-6 pb-32">
        <Card
          transition={{ duration: 0.8 }}
          padding="none"
          className="max-w-6xl mx-auto overflow-hidden shadow-2xl shadow-[var(--aurora-1)]/10 relative"
        >
          <div className="w-full h-8 border-b border-[var(--glass-border)] flex items-center px-4 gap-2 bg-[var(--bg-primary)]/50">
            <div className="w-3 h-3 rounded-full bg-rose-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-amber-500/80"></div>
            <div className="w-3 h-3 rounded-full bg-emerald-500/80"></div>
          </div>
          <div className="aspect-video bg-[var(--bg-primary)] relative flex items-center justify-center overflow-hidden">
            <RiBarChart2Line size={120} className="text-[var(--aurora-1)]/20" />
            <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2940&auto=format&fit=crop')" }}></div>
            <div className="absolute inset-0 bg-[var(--bg-primary)]/60 backdrop-blur-[2px] flex items-center justify-center">
              <span className="px-6 py-3 rounded-full glass-card border-[var(--glass-border)] bg-[var(--glass-bg)] text-[var(--text-primary)] font-bold tracking-widest text-sm uppercase shadow-lg shadow-black/5">Interactive Dashboard</span>
            </div>
          </div>
        </Card>
      </section>

      {/* 4. Features Grid */}
      <section id="features" className="py-24 px-6 bg-[var(--glass-bg)] border-y border-[var(--glass-border)] relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-outfit mb-4 text-[var(--text-primary)]">Everything you need to <span className="text-[var(--aurora-1)]">Scale</span></h2>
            <p className="text-[var(--text-secondary)] text-lg">No bloat. Just the features that actually matter.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FeatureCard icon={RiShieldStarLine} title="Multi-Tenant Auth" desc="Enterprise-grade security. Manage entirely separate organizations and users securely under one deployment." delay={0.1} />
            <FeatureCard icon={RiBarChart2Line} title="Deep Analytics" desc="Generate beautiful PDF and CSV reports. Real-time charting with customized ECharts integration." delay={0.2} />
            <FeatureCard icon={RiSmartphoneLine} title="Perfectly Responsive" desc="A flawless mobile experience. Every pixel adapts to the screen it's viewed on automatically." delay={0.3} />
            <FeatureCard icon={RiComputerLine} title="Aurora Glass UI" desc="A premium, trending design system built on Tailwind CSS. Wow your users at first glance." delay={0.4} />
            <FeatureCard icon={RiTeamLine} title="Role Management" desc="Assign Admins, Managers, and Users with strict permission boundaries and access controls." delay={0.5} />
            <FeatureCard icon={RiDatabase2Line} title="Scalable Architecture" desc="Ready for thousands of concurrent users. Clean code structure makes it easy to add your own backend logic." delay={0.6} />
          </div>
        </div>
      </section>

      {/* 5. How It Works (Workflow) */}
      <section id="how-it-works" className="py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold font-outfit mb-4 text-[var(--text-primary)]">Optimized <span className="text-[var(--aurora-2)]">Workflow</span></h2>
            <p className="text-[var(--text-secondary)] text-lg">From onboarding to daily operation in three steps.</p>
          </div>

          <div className="space-y-12">
            {[
              { step: "01", title: "Initialize Tenant", desc: "Register your company and instantly generate an isolated workspace for your team." },
              { step: "02", title: "Configure Modules", desc: "Toggle Habits, Goals, Expenses, or Time Tracking based on your organization's specific needs." },
              { step: "03", title: "Analyze & Scale", desc: "Use advanced global dashboards to monitor productivity metrics and scale your operations." }
            ].map((item, i) => (
              <Card
                key={i}
                transition={{ delay: i * 0.2 }}
                className="flex flex-col md:flex-row gap-8 items-center relative overflow-hidden p-8"
              >
                <div className="absolute top-0 right-0 p-8 text-8xl font-black text-[var(--glass-border)] font-outfit pointer-events-none select-none opacity-50">{item.step}</div>
                <div className="w-16 h-16 rounded-2xl bg-[var(--aurora-1)]/10 text-[var(--aurora-1)] flex flex-shrink-0 items-center justify-center font-bold text-xl border border-[var(--aurora-1)]/30 backdrop-blur-sm">
                  {item.step}
                </div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold mb-2 text-[var(--text-primary)]">{item.title}</h3>
                  <p className="text-[var(--text-secondary)] text-lg">{item.desc}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Integrations Banner */}
      <section className="py-20 bg-[var(--aurora-1)]/5 border-y border-[var(--glass-border)] overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-[var(--aurora-1)]/60 uppercase tracking-[0.2em] font-bold text-xs mb-8">Integrated with the tools you love</p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500 text-[var(--text-primary)]">
            <RiGoogleFill size={40} />
            <RiMicrosoftFill size={40} />
            <RiSlackFill size={40} />
            <RiGithubFill size={40} />
            <div className="text-xl font-bold tracking-tighter flex items-center gap-1"><RiDatabase2Line /> Stripe</div>
          </div>
        </div>
      </section>

      {/* 7. Testimonials */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold font-outfit mb-4 text-[var(--text-primary)]">Wall of <span className="text-[var(--aurora-4)]">Love</span></h2>
            <p className="text-[var(--text-secondary)] text-lg">Don't just take our word for it.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "Sarah J.", role: "Startup Founder", text: "The multi-tenant architecture saved us months of development. The UI is absolutely stunning." },
              { name: "Marcus T.", role: "Agency Lead", text: "We use Trackify for all our internal projects. The analytics exports make reporting to clients a breeze." },
              { name: "Elena V.", role: "Product Manager", text: "Finally, a template that actually looks modern. The dark mode and glassmorphism elements are top-tier." }
            ].map((testimonial, i) => (
              <Card
                key={i}
                transition={{ delay: i * 0.1 }}
                className="p-8"
              >
                <div className="flex gap-1 mb-6 text-amber-400">
                  <RiStarFill /><RiStarFill /><RiStarFill /><RiStarFill /><RiStarFill />
                </div>
                <p className="text-[var(--text-primary)] font-medium mb-8 text-lg leading-relaxed opacity-90">"{testimonial.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--aurora-1)] to-[var(--aurora-2)] flex items-center justify-center font-bold text-white shadow-md">{testimonial.name.charAt(0)}</div>
                  <div>
                    <h4 className="font-bold text-[var(--text-primary)]">{testimonial.name}</h4>
                    <p className="text-sm text-[var(--text-secondary)]">{testimonial.role}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 8. CTA / Pricing Preview */}
      <section className="py-32 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[var(--aurora-1)]/10 z-0 pointer-events-none transition-colors duration-300"></div>
        <Card
          variant="aurora"
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center relative z-10 p-12 md:p-20 rounded-[3rem] shadow-2xl shadow-[var(--aurora-1)]/10"
        >
          <h2 className="text-5xl font-bold font-outfit mb-6 text-[var(--text-primary)]">Ready to scale?</h2>
          <p className="text-xl text-[var(--text-secondary)] mb-10 max-w-xl mx-auto">Get instant access to the entire platform. No credit card required for the 14-day trial.</p>
          <Button as={Link} href="/pricing" variant="white" size="lg" className="!text-[var(--bg-primary)] scale-105 inline-flex items-center gap-2 shadow-lg">
            View Pricing Plans <RiArrowRightLine />
          </Button>
        </Card>
      </section>

      {/* 9. Footer */}
      <footer className="border-t border-[var(--glass-border)] bg-[var(--bg-primary)] pt-20 pb-10 px-6 relative z-10 transition-colors duration-300">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[var(--aurora-1)] to-[var(--aurora-2)] flex items-center justify-center shadow-md">
                <RiRocketLine className="text-white sm" />
              </div>
              <span className="text-xl font-bold font-outfit text-[var(--text-primary)]">Trackify</span>
            </div>
            <p className="text-[var(--text-secondary)] mb-6 text-sm leading-relaxed">The premier React SaaS template for modern applications. Built for developers and enterprise teams.</p>
            <div className="flex gap-4 text-[var(--text-secondary)]">
              <Link href="/" className="hover:text-[var(--text-primary)] transition-colors"><RiTwitterXFill size={20} /></Link>
              <Link href="/" className="hover:text-[var(--text-primary)] transition-colors"><RiGithubFill size={20} /></Link>
              <Link href="/" className="hover:text-[var(--text-primary)] transition-colors"><RiLinkedinBoxFill size={20} /></Link>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-[var(--text-primary)] text-lg">Product</h4>
            <ul className="space-y-3 text-[var(--text-secondary)] text-sm">
              <li><a href="#features" className="hover:text-[var(--aurora-1)] transition-colors">Features</a></li>
              <li><Link href="/pricing" className="hover:text-[var(--aurora-1)] transition-colors">Pricing</Link></li>
              <li><Link href="/integrations" className="hover:text-[var(--aurora-1)] transition-colors">Integrations</Link></li>
              <li><Link href="/changelog" className="hover:text-[var(--aurora-1)] transition-colors">Changelog</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-[var(--text-primary)] text-lg">Resources</h4>
            <ul className="space-y-3 text-[var(--text-secondary)] text-sm">
              <li><Link href="/documents" className="hover:text-[var(--aurora-1)] transition-colors">Documentation</Link></li>
              <li><Link href="/api-keys" className="hover:text-[var(--aurora-1)] transition-colors">API Reference</Link></li>
              <li><Link href="/discussions" className="hover:text-[var(--aurora-1)] transition-colors">Community Forum</Link></li>
              <li><Link href="/support" className="hover:text-[var(--aurora-1)] transition-colors">Help Center</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-6 text-[var(--text-primary)] text-lg">Legal</h4>
            <ul className="space-y-3 text-[var(--text-secondary)] text-sm">
              <li><Link href="/" className="hover:text-[var(--aurora-1)] transition-colors">Privacy Policy</Link></li>
              <li><Link href="/" className="hover:text-[var(--aurora-1)] transition-colors">Terms of Service</Link></li>
              <li><Link href="/" className="hover:text-[var(--aurora-1)] transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto pt-8 border-t border-[var(--glass-border)] flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[var(--text-secondary)] text-sm">© {new Date().getFullYear()} Trackify UI. All rights reserved.</p>
          <div className="flex items-center gap-2 text-[var(--text-secondary)] text-sm">
            <RiGlobalLine />
            <span>English (US)</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
