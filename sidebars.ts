import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  globalSidebar: [
    'start',
    'rules',
      'donations',
    {
      type: 'category',
      label: 'Фишки',
      link: {
        type: 'doc',
        id: 'feature',
      },
      items: [
        'feature/afk',
        'feature/anvil',
        'feature/beer',
        'feature/bubble',
        'feature/cave-craft',
        'feature/copper',
        'feature/clans',
        'feature/emotecraft',
        'feature/fish',
        'feature/formatting',
        'feature/height',
        'feature/hidden-name',
        'feature/ignore',
        'feature/infinite-trades',
        'feature/inv-frames',
        'feature/light',
        'feature/mail',
        'feature/maparts',
        'feature/mob-grief',
        'feature/multiver',
        'feature/nautilus',
        'feature/nightskip',
        'feature/sand',
        'feature/slate-momentum',
        'feature/status',
        'feature/streak',
        'feature/streamer-mode',
        'feature/toggles',
        'feature/tree',
      ],
    }
  ],
};

export default sidebars;
