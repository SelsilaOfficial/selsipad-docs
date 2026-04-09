import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  docsSidebar: [
    {
      type: 'category',
      label: '📖 Getting Started',
      collapsible: true,
      collapsed: false,
      items: [
        'README',
        'sosial-link',
      ],
    },
    {
      type: 'category',
      label: '🔗 Platform',
      collapsible: true,
      collapsed: false,
      items: [
        'multichain-infrastructure',
        'launchpad-ecosystem',
        'selsi-feed',
        'launchpad-anti-bot',
      ],
    },
    {
      type: 'category',
      label: '💰 Economics',
      collapsible: true,
      collapsed: false,
      items: [
        'fee-structure',
        'refferal-program',
        'refferal-reward-calculation',
      ],
    },
    {
      type: 'category',
      label: '🏆 Badges & Trust',
      collapsible: true,
      collapsed: false,
      items: [
        'premium-badge',
        'developer-verification',
        'security-and-trust',
      ],
    },
    {
      type: 'category',
      label: '📋 Legal',
      collapsible: true,
      collapsed: true,
      items: [
        'terms-and-condition',
        'privacy-and-policy',
      ],
    },
    {
      type: 'category',
      label: '📢 Community',
      collapsible: true,
      collapsed: false,
      items: [
        'announcement',
        'amas-+-kols',
        'contact-us',
      ],
    },
  ],
};

export default sidebars;
