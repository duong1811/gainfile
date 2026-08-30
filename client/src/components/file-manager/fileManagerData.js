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

export const initialFolders = [
  { id: 'project-assets', name: 'Project Assets', updated: 'Today, 09:30 AM' },
  { id: 'brand-guidelines', name: 'Brand Guidelines', updated: 'Yesterday, 03:20 PM' },
  { id: 'invoices-2026', name: 'Invoices 2026', updated: 'August 28, 2026' },
  { id: 'design-drafts', name: 'Design Drafts', updated: 'August 25, 2026' },
];

export const filesByLocation = {
  root: [
    { id: 1, name: 'Welcome_to_Gainfile.pdf', type: 'pdf', size: '2.4 MB', bytes: 2400000, updated: 'Today, 10:45 AM', timestamp: 5 },
    { id: 2, name: 'Getting_Started.mp4', type: 'video', size: '48.7 MB', bytes: 48700000, updated: 'Yesterday, 03:20 PM', timestamp: 4 },
  ],
  'project-assets': [
    { id: 3, name: 'Product_Demo.mp4', type: 'video', size: '245 MB', bytes: 245000000, updated: 'Today, 08:15 AM', timestamp: 8 },
    { id: 4, name: 'Source_Assets.zip', type: 'zip', size: '145 MB', bytes: 145000000, updated: 'Yesterday, 05:40 PM', timestamp: 7 },
    { id: 5, name: 'Project_Notes.txt', type: 'text', size: '18 KB', bytes: 18000, updated: 'August 28, 2026', timestamp: 3 },
  ],
  'brand-guidelines': [
    { id: 6, name: 'Brand_Guidelines.pdf', type: 'pdf', size: '12.8 MB', bytes: 12800000, updated: 'August 27, 2026', timestamp: 6 },
    { id: 7, name: 'Logo_Master.png', type: 'image', size: '4.1 MB', bytes: 4100000, updated: 'August 24, 2026', timestamp: 2 },
  ],
  'invoices-2026': [
    { id: 8, name: 'Invoice_August.pdf', type: 'pdf', size: '1.8 MB', bytes: 1800000, updated: 'August 29, 2026', timestamp: 9 },
    { id: 9, name: 'Invoice_July.pdf', type: 'pdf', size: '1.6 MB', bytes: 1600000, updated: 'July 31, 2026', timestamp: 1 },
  ],
  'design-drafts': [
    { id: 10, name: 'Homepage_V4.png', type: 'image', size: '8.6 MB', bytes: 8600000, updated: 'Today, 07:10 AM', timestamp: 10 },
    { id: 11, name: 'Dashboard_Draft.png', type: 'image', size: '6.2 MB', bytes: 6200000, updated: 'Yesterday, 11:30 AM', timestamp: 5 },
  ],
};
