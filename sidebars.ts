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
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'AI-Native UI/UX',
      items: [
        'ai-native-ui-ux/thinking-in-sites',
        'ai-native-ui-ux/prompt-to-interface',
      ],
    },
    {
      type: 'category',
      label: 'Prompt Engineering',
      items: [
        'prompt-engineering/prompt-fundamentals',
        'prompt-engineering/context-engineering',
        'prompt-engineering/reusable-patterns',
      ],
    },
    {
      type: 'category',
      label: 'Marketing Site',
      items: [
        'marketing-site/overview',
        'marketing-site/page-structure',
        'marketing-site/content-updates',
      ],
    },
    {
      type: 'category',
      label: 'AI-Native Development',
      items: [
        'ai-native/codex-workflows',
        'ai-native/review-and-ship',
      ],
    },
    {
      type: 'category',
      label: 'Internal Tool Modules',
      items: [
        'internal-tools/module-template',
        'internal-tools/cluster-and-network',
      ],
    },
  ],
};

export default sidebars;
