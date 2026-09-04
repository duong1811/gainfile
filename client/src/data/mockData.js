export const mockUser = {
  id: 'usr_alexander_1048',
  accountId: 'GF-2026-1048',
  name: 'Alexander Pierce',
  email: 'alexander@gainfile.com',
  plan: 'Free Plan',
  memberSince: 'August 30, 2026',
  language: 'English',
  timeZone: 'UTC+07:00',
};

export const mockDashboardStats = {
  storage: {
    used: 72.4,
    total: 200,
    available: 127.6,
    unit: 'GB',
    percentUsed: 36,
  },
  bandwidth: {
    limit: 'Unlimited',
    speed: '100kbps',
  },
  account: {
    status: 'Active',
    duration: 'No expiration',
  },
  files: {
    total: 1248,
    public: 312,
    uploadedThisMonth: 86,
  },
};

export const mockDashboardCharts = {
  revenueDays: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15'],
  revenueValues: [12, 14, 18, 15, 22, 28, 30, 26, 35, 42, 38, 45, 52, 50, 60],
  performance: 94,
  uptimeValues: Array.from({ length: 30 }, (_, index) => 99.5 + ((index * 17) % 50) / 100),
};

export const mockAccountActivity = [
  {
    title: 'Signed in successfully',
    detail: 'Chrome on macOS · Ho Chi Minh City, Vietnam',
    date: 'Today, 09:42 AM',
    device: 'computer',
  },
  {
    title: 'Signed in successfully',
    detail: 'Safari on iPhone · Ho Chi Minh City, Vietnam',
    date: 'Yesterday, 06:15 PM',
    device: 'phone',
  },
  {
    title: 'Account password updated',
    detail: 'Security information changed',
    date: 'August 12, 2026',
    device: 'security',
  },
];

export const mockSupportTickets = [
  { id: 'GF-1048', subject: 'Video processing is taking too long', category: 'Video Processing', status: 'Open', priority: 'High', updated: '10 minutes ago' },
  { id: 'GF-1041', subject: 'Payment completed but Premium is inactive', category: 'Billing', status: 'In Progress', priority: 'Urgent', updated: '2 hours ago' },
  { id: 'GF-1029', subject: 'Remote URL upload failed', category: 'Upload', status: 'Waiting', priority: 'Normal', updated: 'Yesterday' },
  { id: 'GF-1017', subject: 'How can I update my account email?', category: 'Account', status: 'Resolved', priority: 'Low', updated: 'August 26, 2026' },
  { id: 'GF-1003', subject: 'Unable to play embedded video', category: 'Playback', status: 'Closed', priority: 'Normal', updated: 'August 21, 2026' },
];

export const mockTicketConversation = {
  ticketId: 'GF-1048',
  subject: 'Video processing is taking too long',
  category: 'Video Processing',
  priority: 'High',
  status: 'Open',
  created: 'Aug 30, 2026',
  opened: 'Today at 9:24 AM',
  lastResponse: '10 minutes ago',
  relatedFile: {
    name: 'product-launch.mp4',
    size: '4.2GB',
    status: 'Processing',
  },
  messages: [
    {
      id: 1,
      sender: mockUser.name,
      role: 'You',
      message: 'My uploaded video has been processing for more than two hours. The file is an MP4, 4.2GB, encoded with H.264.',
      time: 'Today, 9:24 AM',
      customer: true,
    },
    {
      id: 2,
      sender: 'Maya · Gainfile Support',
      role: 'Support Agent',
      message: 'Thanks for the details. I checked the processing queue and found a delayed transcoding job. I have restarted it with priority processing.',
      time: 'Today, 9:38 AM',
      customer: false,
    },
    {
      id: 3,
      sender: 'Maya · Gainfile Support',
      role: 'Support Agent',
      message: 'Please allow 10–15 minutes for the new job to complete. You can reply here if the video still does not become available.',
      time: 'Today, 9:39 AM',
      customer: false,
    },
  ],
};

export const mockNotifications = [
  {
    id: 'storage-warning',
    title: 'Storage is 36% used',
    message: 'You still have 127.6GB available.',
    time: '2 hours ago',
    type: 'info',
  },
  {
    id: 'transfer-completed',
    title: 'Remote transfer completed',
    message: 'brand-assets.zip is ready in your files.',
    time: '1 day ago',
    type: 'success',
  },
];

export const mockPaymentMethods = [
  { id: 'usdt', name: 'USDT', detail: 'Tether', color: 'text-emerald-500 bg-emerald-500/10', note: 'Choose a supported USDT network on the next step. Send only USDT to the generated payment address.' },
  { id: 'bitcoin', name: 'Bitcoin', detail: 'BTC', color: 'text-amber-500 bg-amber-500/10', note: 'A unique Bitcoin payment address and the exact BTC amount will be generated for this order.' },
  { id: 'ethereum', name: 'Ethereum', detail: 'ETH', color: 'text-indigo-500 bg-indigo-500/10', note: 'A unique Ethereum payment address and the exact ETH amount will be generated for this order.' },
  { id: 'card', name: 'Visa / Mastercard', detail: 'Card', color: 'text-blue-500 bg-blue-500/10', note: 'Pay securely with an eligible Visa or Mastercard credit or debit card.' },
  { id: 'paypal', name: 'PayPal', detail: 'PayPal', color: 'text-sky-500 bg-sky-500/10', note: 'Sign in to PayPal on the next step to review and authorize your payment.' },
];

export const mockDefaultOrder = {
  duration: '30',
  tier: 'Pro',
  bandwidth: '1TB',
  storage: '1TB',
  price: '20',
};

export const mockCheckoutData = {
  crypto: {
    usdt: { network: 'TRC20', amount: '20.00 USDT', address: 'TDEMO8mH2q7GainfileCheckout' },
    bitcoin: { network: 'Bitcoin', amount: '0.000320 BTC', address: 'bc1qgainfiledemocheckout' },
    ethereum: { network: 'Ethereum', amount: '0.00640 ETH', address: '0xGainfileDemoCheckout2026' },
  },
  card: {
    number: '4242 4242 4242 4242',
    expiry: '12 / 30',
    cvc: '123',
  },
  paypal: {
    email: 'buyer.demo@gainfile.com',
  },
};

export const mockSettingsData = {
  profile: {
    firstName: 'Alexander',
    lastName: 'Pierce',
  },
  workspace: {
    id: 'gf_workspace_1048',
    name: 'Alexander Files',
    timeZone: 'UTC+07:00 - Ho Chi Minh City',
  },
  api: {
    publicKey: 'pk_demo_gainfile_1048',
    secretKey: 'sk_demo_gainfile_xxxxxxxxxx',
  },
};

export const mockDownloadData = {
  countdownSeconds: 60,
  freeFeatures: [
    'Limited Speed (100 Kbps)',
    'Waiting Time (60s)',
    'Advertisements',
    'Only 1 download thread per hour',
    'Non-resumable download',
    'Limited download slots',
  ],
  premiumFeatures: [
    'Max Speed (Unlimited)',
    'No Waiting (Instant)',
    'No advertisements',
    'Simultaneous downloads',
    'Resumable downloads',
    'Highest priority for download sessions',
  ],
  fileTypes: ['video', 'pdf', 'image', 'zip', 'text'],
  extensions: { video: 'mp4', pdf: 'pdf', image: 'jpg', zip: 'zip', text: 'txt' },
  namePool: [
    'Quarterly-Report-Q3',
    'Brand-Guidelines-2026',
    'Product-Launch-Teaser',
    'Season-Finale-Recap',
    'Client-Presentation-Final',
    'Design-System-Assets',
    'Onboarding-Walkthrough',
    'Marketing-Highlights',
  ],
  files: {
    'demo-public': {
      id: 'fil_aa11bb22cc33',
      name: 'community-meetup-highlights.mp4',
      type: 'video',
      size: '128.4 MB',
      downloads: 342,
      public: true,
      premium: false,
      password: null,
      uploader: 'gainfile user',
    },
    'demo-premium': {
      id: 'fil_dd44ee55ff66',
      name: 'interstellar-2014.mp4',
      type: 'video',
      size: '4.2 GB',
      downloads: 12,
      public: false,
      premium: true,
      password: null,
      uploader: 'gainfile user',
    },
    'demo-password': {
      id: 'fil_gg77hh88ii99',
      name: 'confidential-financials-q3.pdf',
      type: 'pdf',
      size: '3.1 MB',
      downloads: 5,
      public: false,
      premium: false,
      password: '1234',
      uploader: 'gainfile user',
    },
    'demo-expired': {
      id: 'fil_jj00kk11ll22',
      name: 'expired-project-archive.zip',
      type: 'zip',
      size: '842.6 MB',
      downloads: 28,
      public: true,
      premium: false,
      password: null,
      uploader: 'gainfile user',
      status: 'expired',
      expiresAt: '2026-08-31T23:59:59Z',
    },
  },
  links: [
    { token: 'demo-public', label: 'Public file' },
    { token: 'demo-premium', label: 'Premium file' },
    { token: 'demo-password', label: 'Password protected' },
    { token: 'demo-expired', label: 'Expired file' },
  ],
};

export const mockRemoteTransfers = [
  {
    id: 'example-completed',
    name: 'brand-assets.zip',
    source: 'https://cdn.example.com/brand-assets.zip',
    size: '428 MB',
    status: 'completed',
    progress: 100,
    detail: 'Imported in 18 seconds',
  },
  {
    id: 'example-transferring',
    name: 'product-launch.mp4',
    source: 'https://media.example.com/product-launch.mp4',
    size: '1.8 GB',
    status: 'transferring',
    progress: 64,
    detail: '12.4 MB/s · About 42 seconds left',
  },
  {
    id: 'example-pending',
    name: 'quarterly-report.pdf',
    source: 'https://files.example.com/quarterly-report.pdf',
    size: '12.6 MB',
    status: 'pending',
    progress: 0,
    detail: 'Waiting for an available transfer slot',
  },
  {
    id: 'example-failed',
    name: 'private-archive.zip',
    source: 'https://example.com/private-archive.zip',
    size: 'Unknown',
    status: 'failed',
    progress: 0,
    detail: 'Access denied by the remote server (403)',
  },
];
