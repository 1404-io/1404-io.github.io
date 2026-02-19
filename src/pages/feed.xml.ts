import rss from '@astrojs/rss';
import { SITE } from '../lib/constants';

const posts = [
  {
    title: 'The Cheetah',
    description: 'Speed compounds. Once a company gets faster through technology, the gap becomes uncatchable.',
    link: '/insights/the-cheetah/',
    pubDate: new Date('2026-02-01'),
    author: 'Holden Bryce',
  },
  {
    title: "Noah's Ark",
    description: 'The companies that prepare for the technology flood will thrive. Everyone else will be scrambling to catch up.',
    link: '/insights/noahs-ark/',
    pubDate: new Date('2026-01-22'),
    author: 'Holden Bryce',
  },
  {
    title: 'The Gap',
    description: "The gap between where construction companies are and where they could be isn't software. It's talent.",
    link: '/insights/the-gap/',
    pubDate: new Date('2026-01-15'),
    author: 'Holden Bryce',
  },
];

export function GET(context: any) {
  return rss({
    title: '1404 — Insights',
    description: 'Technology strategy for construction and manufacturing.',
    site: SITE.url,
    items: posts,
    customData: '<language>en-us</language>',
  });
}
