import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import {
    RiArrowDownSLine,
    RiCloseLine,
    RiCloudLine,
    RiDashboardLine,
    RiFolderVideoLine,
    RiGlobalLine,
    RiMenuLine,
    RiServerLine,
    RiUploadCloud2Line,
    RiUserSharedLine,
    RiVipCrown2Line,
} from 'react-icons/ri';

const menuItems = [
    { path: '/dashboard', icon: RiDashboardLine, label: 'Dashboard' },
    {
        path: '/upload',
        label: 'Upload',
        icon: RiUploadCloud2Line,
    },
    { path: '/upgrade-plan', icon: RiVipCrown2Line, label: 'Premium' },
    { path: '/file-manager', icon: RiFolderVideoLine, label: 'My Files' },
    { path: '/affiliate', icon: RiUserSharedLine, label: 'Affiliate' },

];

const HorizontalMenu = () => {
    const pathname = usePathname();
    const menuRef = useRef(null);
    const [mobileOpen, setMobileOpen] = useState(false);
    const [openMenu, setOpenMenu] = useState(null);

    useEffect(() => {
        const closeMenus = (event) => {
            if (!menuRef.current?.contains(event.target)) {
                setOpenMenu(null);
                setMobileOpen(false);
            }
        };

        document.addEventListener('pointerdown', closeMenus);
        return () => document.removeEventListener('pointerdown', closeMenus);
    }, []);

    const renderLink = (item, isSubItem = false) => {
        const Icon = item.icon;
        const isActive = pathname === item.path || (!isSubItem && pathname.startsWith(`${item.path}/`));

        return (
            <Link
                key={item.path}
                href={item.path}
                onClick={() => {
                    setOpenMenu(null);
                    setMobileOpen(false);
                }}
                aria-current={isActive ? 'page' : undefined}
                className={`relative flex items-center gap-2 whitespace-nowrap rounded-xl px-3 py-2.5 text-sm font-semibold transition-all ${isActive
                    ? 'bg-[var(--aurora-1)]/10 text-[var(--aurora-1)]'
                    : 'text-[var(--text-secondary)] hover:bg-[var(--glass-border)] hover:text-[var(--text-primary)]'
                    } ${isSubItem ? 'w-full' : ''}`}
            >
                <Icon className="shrink-0 text-lg" />
                <span>{item.label}</span>
                {isActive && !isSubItem && (
                    <motion.span
                        layoutId="horizontal-active-menu"
                        className="absolute inset-x-3 -bottom-1 h-0.5 rounded-full bg-[var(--aurora-1)]"
                    />
                )}
            </Link>
        );
    };

    return (
        <motion.div
            ref={menuRef}
            className="relative flex min-w-0 flex-1 items-center"
            initial={{ y: -30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
        >
            <nav className="hidden min-w-0 flex-1 items-center justify-center gap-1 overflow-x-auto no-scrollbar xl:flex" aria-label="Main navigation">
                {menuItems.map((item) => {
                    if (!item.subItems) return renderLink(item);

                    const isOpen = openMenu === item.label;
                    const isActive = item.subItems.some((subItem) => pathname === subItem.path);

                    return (
                        <div key={item.label} className="relative shrink-0">
                            <button
                                type="button"
                                onClick={() => setOpenMenu(isOpen ? null : item.label)}
                                aria-expanded={isOpen}
                                className={`flex items-center gap-2 rounded-xl px-3 py-2.5 text-sm font-semibold transition-all ${isActive
                                    ? 'bg-[var(--aurora-1)]/10 text-[var(--aurora-1)]'
                                    : 'text-[var(--text-secondary)] hover:bg-[var(--glass-border)] hover:text-[var(--text-primary)]'
                                    }`}
                            >
                                <item.icon className="text-lg" />
                                {item.label}
                                <RiArrowDownSLine className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                            </button>

                            <AnimatePresence>
                                {isOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 8, scale: 0.98 }}
                                        animate={{ opacity: 1, y: 0, scale: 1 }}
                                        exit={{ opacity: 0, y: 8, scale: 0.98 }}
                                        className="absolute start-0 top-[calc(100%+12px)] w-64 rounded-2xl border border-[var(--glass-border)] bg-[var(--bg-primary)] p-2 shadow-2xl"
                                    >
                                        {item.subItems.map((subItem) => renderLink(subItem, true))}
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    );
                })}
            </nav>

            <button
                type="button"
                onClick={() => setMobileOpen((current) => !current)}
                className="ms-auto flex h-10 w-10 items-center justify-center rounded-xl border border-[var(--glass-border)] text-xl text-[var(--text-primary)] xl:hidden"
                aria-label="Toggle navigation"
                aria-expanded={mobileOpen}
            >
                {mobileOpen ? <RiCloseLine /> : <RiMenuLine />}
            </button>

            <AnimatePresence>
                {mobileOpen && (
                    <motion.nav
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="fixed inset-x-4 top-[76px] z-[1100] overflow-hidden rounded-2xl border border-[var(--glass-border)] bg-[var(--bg-primary)] p-3 shadow-2xl xl:hidden"
                        aria-label="Mobile navigation"
                    >
                        <div className="max-h-[70vh] space-y-1 overflow-y-auto no-scrollbar">
                            {menuItems.map((item) => {
                                if (!item.subItems) return renderLink(item);

                                const isOpen = openMenu === item.label;
                                return (
                                    <div key={item.label}>
                                        <button
                                            type="button"
                                            onClick={() => setOpenMenu(isOpen ? null : item.label)}
                                            className="flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-sm font-semibold text-[var(--text-secondary)] hover:bg-[var(--glass-border)] hover:text-[var(--text-primary)]"
                                        >
                                            <span className="flex items-center gap-2"><item.icon className="text-lg" />{item.label}</span>
                                            <RiArrowDownSLine className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                                        </button>
                                        <AnimatePresence>
                                            {isOpen && (
                                                <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="ms-5 overflow-hidden border-s border-[var(--glass-border)] ps-3">
                                                    {item.subItems.map((subItem) => renderLink(subItem, true))}
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                );
                            })}
                        </div>
                    </motion.nav>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default HorizontalMenu;
