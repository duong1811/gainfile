export const premiumPlanGroups = [
  {
    duration: 30,
    options: [
      { tier: 'Pro', bandwidth: '1TB', storage: '1TB', originalPrice: 20, price: 14 },
      { tier: 'Max', bandwidth: '2TB', storage: '1TB', originalPrice: 30, price: 21 },
    ],
  },
  {
    duration: 90,
    options: [
      { tier: 'Pro', bandwidth: '3TB', storage: '3TB', originalPrice: 50, price: 35 },
      { tier: 'Max', bandwidth: '6TB', storage: '3TB', originalPrice: 80, price: 56 },
    ],
  },
  {
    duration: 180,
    options: [
      { tier: 'Pro', bandwidth: '6TB', storage: '6TB', originalPrice: 90, price: 63 },
      { tier: 'Max', bandwidth: '10TB', storage: '6TB', originalPrice: 130, price: 91 },
    ],
  },
  {
    duration: 365,
    options: [
      { tier: 'Pro', bandwidth: '12TB', storage: '12TB', originalPrice: 160, price: 112 },
      { tier: 'Max', bandwidth: '30TB', storage: '12TB', originalPrice: 400, price: 210 },
    ],
  },
];

export const premiumBenefits = [
  'Maximum download speed',
  'Secure downloads',
  'Simultaneous downloads',
  'Unlimited file inactivity',
  'No advertising',
  'No waiting time',
  'Priority support',
  'Safe checkout',
];
