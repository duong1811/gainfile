export const RECENT_FOLDERS_KEY = 'gainfile-recent-folders';
export const RECENT_FOLDERS_EVENT = 'gainfile-recent-folders-change';
export const MAX_RECENT_FOLDERS = 6;

export const subscribeToRecentFolders = (callback) => {
  window.addEventListener('storage', callback);
  window.addEventListener(RECENT_FOLDERS_EVENT, callback);

  return () => {
    window.removeEventListener('storage', callback);
    window.removeEventListener(RECENT_FOLDERS_EVENT, callback);
  };
};

export const getRecentFoldersSnapshot = () => window.localStorage.getItem(RECENT_FOLDERS_KEY) || '[]';
export const getServerRecentFoldersSnapshot = () => '[]';

export const formatBytes = (bytes) => {
  if (!bytes) return '0 B';
  const units = ['B', 'KB', 'MB', 'GB', 'TB'];
  const unitIndex = Math.min(Math.floor(Math.log(bytes) / Math.log(1024)), units.length - 1);
  return `${(bytes / (1024 ** unitIndex)).toFixed(unitIndex ? 1 : 0)} ${units[unitIndex]}`;
};

// Deterministic seeded PRNG so server-render and client-hydration produce identical mock data.
const createRandom = (seed) => {
  let state = seed;
  return () => {
    state |= 0;
    state = (state + 0x6d2b79f5) | 0;
    let t = Math.imul(state ^ (state >>> 15), 1 | state);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
};

const random = createRandom(20260830);
const pick = (list) => list[Math.floor(random() * list.length)];
const slugify = (name) => name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

const EXTRA_FOLDER_NAMES = [
  'Marketing Materials', 'Client Contracts', 'Product Photography', 'Social Media Assets',
  'Email Templates', 'Onboarding Docs', 'HR Policies', 'Sales Decks', 'Case Studies',
  'Podcast Episodes', 'Webinar Recordings', 'Newsletter Archive', 'Press Kit',
  'Partner Resources', 'Style Guides', 'Icon Library', 'Video Tutorials', 'User Research',
  'Roadmap Docs', 'Legal Agreements', 'Vendor Invoices', 'Team Handbook', 'Event Photos',
  'API Documentation',
];

const MONTH_POOL = ['August', 'July', 'June', 'May'];

const randomTimeLabel = () => {
  const hour = 1 + Math.floor(random() * 12);
  const minute = Math.floor(random() * 60);
  const period = random() < 0.5 ? 'AM' : 'PM';
  return `${hour}:${String(minute).padStart(2, '0')} ${period}`;
};

const randomDateLabel = () => {
  const roll = random();
  if (roll < 0.15) return `Today, ${randomTimeLabel()}`;
  if (roll < 0.3) return `Yesterday, ${randomTimeLabel()}`;
  const month = pick(MONTH_POOL);
  const day = 1 + Math.floor(random() * 28);
  return `${month} ${day}, 2026`;
};

const TYPE_CONFIG = {
  pdf: {
    subjects: ['Report', 'Invoice', 'Contract', 'Proposal', 'Whitepaper', 'Manual', 'Guide', 'Summary', 'Agreement', 'Brief'],
    exts: ['.pdf'],
    minBytes: 100 * 1024,
    maxBytes: 15 * 1024 * 1024,
  },
  image: {
    subjects: ['Banner', 'Photo', 'Screenshot', 'Mockup', 'Icon', 'Logo', 'Cover', 'Thumbnail', 'Poster', 'Illustration'],
    exts: ['.png', '.jpg'],
    minBytes: 200 * 1024,
    maxBytes: 12 * 1024 * 1024,
  },
  video: {
    subjects: ['Demo', 'Tutorial', 'Interview', 'Highlight', 'Recording', 'Trailer', 'Webinar', 'Clip', 'Promo', 'Walkthrough'],
    exts: ['.mp4', '.mov'],
    minBytes: 20 * 1024 * 1024,
    maxBytes: 500 * 1024 * 1024,
  },
  zip: {
    subjects: ['Assets', 'Backup', 'Archive', 'Source', 'Bundle', 'Package', 'Export', 'Files', 'Media', 'Resources'],
    exts: ['.zip'],
    minBytes: 5 * 1024 * 1024,
    maxBytes: 300 * 1024 * 1024,
  },
  text: {
    subjects: ['Notes', 'Readme', 'Changelog', 'Log', 'Draft', 'Outline', 'Memo', 'Todo', 'Script', 'Config'],
    exts: ['.txt', '.md'],
    minBytes: 1024,
    maxBytes: 50 * 1024,
  },
};

const FILE_TYPES = Object.keys(TYPE_CONFIG);
const NAME_SUFFIXES = ['Final', 'Draft', 'V2', 'V3', '2026', 'Q3', 'New', 'Copy', 'Update', 'Review'];

let nextFileId = 1000;

const generateFile = () => {
  const type = pick(FILE_TYPES);
  const config = TYPE_CONFIG[type];
  const bytes = Math.floor(config.minBytes + random() * (config.maxBytes - config.minBytes));
  nextFileId += 1;

  return {
    id: nextFileId,
    name: `${pick(config.subjects)}_${pick(NAME_SUFFIXES)}${pick(config.exts)}`,
    type,
    size: formatBytes(bytes),
    bytes,
    updated: randomDateLabel(),
    timestamp: Math.floor(random() * 1000000),
    published: random() < 0.55,
    access: random() < 0.4 ? 'premium' : 'free',
    inactive: random() < 0.12,
  };
};

const generatedFolders = EXTRA_FOLDER_NAMES.map((name) => ({
  id: slugify(name),
  name,
  updated: randomDateLabel(),
}));

export const initialFolders = [
  { id: 'project-assets', name: 'Project Assets', updated: 'Today, 09:30 AM' },
  { id: 'brand-guidelines', name: 'Brand Guidelines', updated: 'Yesterday, 03:20 PM' },
  { id: 'invoices-2026', name: 'Invoices 2026', updated: 'August 28, 2026' },
  { id: 'design-drafts', name: 'Design Drafts', updated: 'August 25, 2026' },
  ...generatedFolders,
];

const baseFilesByLocation = {
  root: [
    { id: 1, name: 'Welcome_to_Gainfile.pdf', type: 'pdf', size: '2.4 MB', bytes: 2400000, updated: 'Today, 10:45 AM', timestamp: 5, published: true, access: 'free', inactive: false },
    { id: 2, name: 'Getting_Started.mp4', type: 'video', size: '48.7 MB', bytes: 48700000, updated: 'Yesterday, 03:20 PM', timestamp: 4, published: true, access: 'free', inactive: false },
  ],
  'project-assets': [
    { id: 3, name: 'Product_Demo.mp4', type: 'video', size: '245 MB', bytes: 245000000, updated: 'Today, 08:15 AM', timestamp: 8, published: true, access: 'premium', inactive: false },
    { id: 4, name: 'Source_Assets.zip', type: 'zip', size: '145 MB', bytes: 145000000, updated: 'Yesterday, 05:40 PM', timestamp: 7, published: false, access: 'premium', inactive: false },
    { id: 5, name: 'Project_Notes.txt', type: 'text', size: '18 KB', bytes: 18000, updated: 'August 28, 2026', timestamp: 3, published: false, access: 'free', inactive: true },
  ],
  'brand-guidelines': [
    { id: 6, name: 'Brand_Guidelines.pdf', type: 'pdf', size: '12.8 MB', bytes: 12800000, updated: 'August 27, 2026', timestamp: 6, published: true, access: 'free', inactive: false },
    { id: 7, name: 'Logo_Master.png', type: 'image', size: '4.1 MB', bytes: 4100000, updated: 'August 24, 2026', timestamp: 2, published: false, access: 'free', inactive: true },
  ],
  'invoices-2026': [
    { id: 8, name: 'Invoice_August.pdf', type: 'pdf', size: '1.8 MB', bytes: 1800000, updated: 'August 29, 2026', timestamp: 9, published: false, access: 'premium', inactive: false },
    { id: 9, name: 'Invoice_July.pdf', type: 'pdf', size: '1.6 MB', bytes: 1600000, updated: 'July 31, 2026', timestamp: 1, published: false, access: 'premium', inactive: true },
  ],
  'design-drafts': [
    { id: 10, name: 'Homepage_V4.png', type: 'image', size: '8.6 MB', bytes: 8600000, updated: 'Today, 07:10 AM', timestamp: 10, published: true, access: 'free', inactive: false },
    { id: 11, name: 'Dashboard_Draft.png', type: 'image', size: '6.2 MB', bytes: 6200000, updated: 'Yesterday, 11:30 AM', timestamp: 5, published: true, access: 'free', inactive: false },
  ],
};

const FILES_PER_FOLDER_MIN = 80;
const FILES_PER_FOLDER_MAX = 160;

export const filesByLocation = { ...baseFilesByLocation };

['root', ...initialFolders.map((folder) => folder.id)].forEach((locationId) => {
  const count = FILES_PER_FOLDER_MIN + Math.floor(random() * (FILES_PER_FOLDER_MAX - FILES_PER_FOLDER_MIN));
  const generatedFiles = Array.from({ length: count }, () => generateFile());
  filesByLocation[locationId] = [...(filesByLocation[locationId] || []), ...generatedFiles];
});

export const getFileManagerStats = (folders) => {
  const allFiles = Object.values(filesByLocation).flat();
  const totalBytes = allFiles.reduce((sum, file) => sum + (file.bytes || 0), 0);
  const inactiveCount = allFiles.filter((file) => file.inactive).length;

  return {
    storageUsed: formatBytes(totalBytes),
    totalFiles: allFiles.length,
    totalFolders: folders.length,
    inactiveFiles: inactiveCount,
  };
};
