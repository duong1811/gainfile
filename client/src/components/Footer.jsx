import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

const secondaryLinks = [
  { href: '/about-us', label: 'About Us' },
  { href: '/privacy-policy', label: 'Privacy Policy' },
  { href: '/dmca', label: 'DMCA' },
  { href: '/terms-of-service', label: 'Terms of Service' },
  { href: '/report-abuse', label: 'Report Abuse' },
  { href: '/api', label: 'API' },
  { href: '/faq', label: 'FAQ' },
];

const Footer = () => {
  const pathname = usePathname();
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      className="relative shrink-0 border-t border-[var(--glass-border)] bg-[var(--bg-primary)] px-6 py-4 backdrop-blur-xl md:px-12"
      initial={{ y: 30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
    >
      <div className="flex flex-col items-center justify-between gap-4">

        <nav aria-label="Secondary navigation">
          <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            {secondaryLinks.map((link) => {
              const isActive = pathname === link.href;

              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    aria-current={isActive ? 'page' : undefined}
                    className={`text-sm font-semibold transition-colors ${
                      isActive
                        ? 'text-[var(--aurora-1)]'
                        : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <p className="whitespace-nowrap text-xs text-[var(--text-secondary)]">
          © {currentYear} Gainfile. All rights reserved.
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;
