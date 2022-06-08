import { FaqQuestion, NavItem, RoadmapItem } from './types/components';

export const IS_PRODUCTION = process.env.NODE_ENV === 'production';
export const IS_BROWSER = typeof window !== 'undefined';

enum IndexMeta {
  title = 'HELIX',
  description = 'HELIX is an open-world NFT metaverse built on the foundation of persistent virtual worlds and true digital ownership.',
  url = 'https://helixmetaverse.com',
  preview = 'https://helixmetaverse.com/preview.jpg'
}

enum NFTMeta {
  title = 'HELIX',
  description = 'HELIX is an open-world NFT metaverse built on the foundation of persistent virtual worlds and true digital ownership.',
}

export const Meta = {
  Index: IndexMeta,
  NFT: NFTMeta,
};

export enum ExternalUrl {
  wiki = 'https://docs.helixmetaverse.com/',
  youtube = 'https://www.youtube.com/channel/UC5mNY3v-d8-I2Yaks-7W1Mw',
  discord = 'https://discord.gg/helixmetaverse',
  twitter = 'https://twitter.com/HELIX_Metaverse',
  email = 'contact@helixmetaverse.com',
  faq = 'https://helixmetaverse.notion.site/More-FAQs-3b729206ff1f4c56b0cfa725eff5de6d'
}

export const SOCIALS = [
  {
    id: 'discord',
    label: 'Discord',
    url: ExternalUrl.discord,
  },
  {
    id: 'twitter',
    label: 'Twitter',
    url: ExternalUrl.twitter,
  },
  {
    id: 'youtube',
    label: 'YouTube',
    url: ExternalUrl.youtube,
  },
  {
    id: 'mail',
    label: 'Email',
    url: `mailto:${ ExternalUrl.email }`,
  },
];

export const FAQ_QUESTIONS: FaqQuestion[] = [
  {
    heading: 'What is HELIX?',
    text: 'HELIX is a decentralized, high-fidelity metaverse platform where you can meet new people, buy and sell virtual items, play games, and earn tokens. ',
  },
  {
    heading: 'When can I play HELIX?',
    text: 'We are pushing to release an early access preview build to our community by the end of 2022. After that, we’ll gradually roll out access to everyone.',
  },
  {
    heading: 'Who’s behind HELIX and how is development being funded?',
    text: 'HELIX is being developed by Hypersonic Laboratories, a venture-funded startup based in Los Angeles.',
  },
  {
    heading: 'How does the play and earn model work? Where does this money come from?',
    text: 'When you buy virtual items in a traditional game such as Fortnite or Roblox, the companies take all the profit. In play and earn games like HELIX, the majority of the revenue (from NFT sales, item transaction fees, etc.) goes to a nonprofit Community Treasury which distributes it back to players in the form of play and earn rewards.',
  },
  {
    heading: 'What blockchain does HELIX use?',
    text: 'HELIX uses Ethereum and Polygon, a layer 2 solution for faster and lower cost transactions.',
  },
  {
    heading: 'Will I be able to own and trade virtual land?',
    text: 'Yes. Parts of Parallel City will sold and claimed via an upcoming auction and land owners will be able to develop on their land or lease it to other players/businesses for profit.',
  },
  {
    heading: 'Will there be a native token within HELIX?',
    text: 'Yes. We will announce our native token soon.',
  },
  {
    heading: 'More FAQ',
    link: ExternalUrl.faq,
  },
];

export const NFT_FAQ_QUESTIONS: FaqQuestion[] = [
  {
    heading: 'How do I own a Founders Collection NFT?',
    text: 'HELIX is an open-world multiplayer online game where you can meet new people, buy and sell virtual items, and play games. ',
  },
  {
    heading: 'How many NFTs are available?',
    text: 'We plan to release an early access build by Q2-Q3 of 2022, exclusively to Founders NFT holders. After that, we’ll gradually roll out access to more users.',
  },
  {
    heading: 'How much are the NFTs?',
    text: 'HELIX is being developed by Hypersonic Laboratories, a venture-funded startup based in Los Angeles. Our investors have backed many successful startups such as Twitter, Tumblr,  and Pinterest.',
  },
];

export const ROADMAP_ITEMS: RoadmapItem[] = [
  {
    id: 1,
    heading: 'Q2 2022',
    items: [ 'Announcement Trailer', 'Land Sale 1' ],
    active: true,
  },
  {
    id: 2,
    heading: 'Q3 2022',
    items: [ 'Staking Rewards', 'Community Events' ],
  },
  {
    id: 3,
    heading: 'Q4 2022',
    items: [ 'Early Access Preview', 'HELIX Exchange Launch' ],
  },
  {
    id: 4,
    heading: 'Q1 2023',
    items: [ 'Public Alpha Access', 'Community Treasury Launch' ],
  },
];

export const NFT_ROADMAP_ITEMS: RoadmapItem[] = [
  {
    id: 1,
    heading: 'DEC 30',
    description: 'Private Sale',
    active: true,
  },
  {
    id: 2,
    heading: 'TBD',
    description: 'Price & Date Announcement',
  },
  {
    id: 3,
    heading: 'Artwork Reveal',
  },
  {
    id: 4,
    heading: 'Bonus Items Minting',
  },
];

export const NAV_ITEMS: NavItem[] = [
  {
    path: ExternalUrl.wiki,
    label: 'DOCS',
    target: '_blank',
  },
  // {
  //   path: '#roadmap',
  //   label: 'Roadmap',
  // },
  {
    path: '#land-sale',
    label: 'LAND SALE',
    badge: 'new',
  },
  {
    path: '#faq',
    label: 'FAQ',
  },
];

export const NFT_NAV_ITEMS: NavItem[] = [
  {
    path: '#utility',
    label: 'Utility',
  },
  {
    path: '#carousel',
    label: 'Explore',
  },
  {
    path: '#artwork',
    label: 'Gallery',
  },
  {
    path: '#roadmap',
    label: 'Timeline',
  },
  {
    path: '#faq',
    label: 'FAQ',
  },
];
