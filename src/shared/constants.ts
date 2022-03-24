import { FaqQuestion, NavItem, RoadmapItem } from './types/components';

export const IS_BROWSER = typeof window !== 'undefined';

enum IndexMeta {
  title = 'HELIX',
  description = 'HELIX is an open-world NFT metaverse built on the foundation of persistent virtual worlds and true digital ownership.',
  url = 'https://helixmetaverse.com',
  preview = './preview.jpg'
}

enum NFTMeta {
  title = 'HELIX',
  description = 'HELIX is an open-world NFT metaverse built on the foundation of persistent virtual worlds and true digital ownership.',
}

export const Meta = {
  Index: IndexMeta,
  NFT: NFTMeta
};

export enum ExternalUrl {
  wiki = 'https://docs.helixmetaverse.com/',
  youtube = 'https://www.youtube.com/channel/UC5mNY3v-d8-I2Yaks-7W1Mw',
  discord = 'https://discord.gg/xGJEH69sWK',
  twitter = 'https://twitter.com/HELIX_Metaverse',
  email = 'contact@helixmetaverse.com',
  faq = 'https://rose-taxi-801.notion.site/More-FAQs-3b729206ff1f4c56b0cfa725eff5de6d'
}

export const SOCIALS = [
  {
    id: 'discord',
    label: 'Discord',
    url: ExternalUrl.discord
  },
  {
    id: 'twitter',
    label: 'Twitter',
    url: ExternalUrl.twitter
  },
  {
    id: 'youtube',
    label: 'YouTube',
    url: ExternalUrl.youtube
  },
  {
    id: 'mail',
    label: 'Email',
    url: `mailto:${ ExternalUrl.email }`
  }
];

export const FAQ_QUESTIONS: FaqQuestion[] = [
  {
    heading: 'What is HELIX?',
    text: 'HELIX is an open-world multiplayer online game where you can meet new people, buy and sell virtual items, and play games. '
  },
  {
    heading: 'When can I play HELIX?',
    text: 'We are pushing to release an early access build within 2022, exclusively to Founders NFT holders. After that, we’ll gradually roll out access to more users.'
  },
  {
    heading: 'Who’s behind HELIX and how is development being funded?',
    text: 'HELIX is being developed by Hypersonic Laboratories, a venture-funded startup based in Los Angeles.'
  },
  {
    heading: 'How does the play to earn model work? Where does this money come from?',
    text: 'When you buy virtual items in a traditional game such as Fortnite or Roblox, the company takes all the profit. In play to earn games like HELIX, the majority of the revenue goes to a nonprofit Community Treasury which distributes to players.. (NFT sales, item transaction fees)'
  },
  {
    heading: 'What blockchain does HELIX use?',
    text: 'HELIX uses Ethereum and Polygon, a layer2 solution for faster and lower cost transactions.'
  },
  {
    heading: 'Will I be able to own and trade virtual land?',
    text: 'Yes. Freedom Island is a large island within the map which will be entirely constructed and governed by the community. Land owners can construct roads, buildings, parks, museums, anything.. More details will be announced soon.'
  },
  {
    heading: 'Will there be a native token/currency?',
    text: 'Yes. We will announce details soon.'
  },
  {
    heading: 'More FAQ',
    link: ExternalUrl.faq,
  },
];

export const NFT_FAQ_QUESTIONS: FaqQuestion[] = [
  {
    heading: 'How do I own a Founders Collection NFT?',
    text: 'HELIX is an open-world multiplayer online game where you can meet new people, buy and sell virtual items, and play games. '
  },
  {
    heading: 'How many NFTs are available?',
    text: 'We plan to release an early access build by Q2-Q3 of 2022, exclusively to Founders NFT holders. After that, we’ll gradually roll out access to more users.'
  },
  {
    heading: 'How much are the NFTs?',
    text: 'HELIX is being developed by Hypersonic Laboratories, a venture-funded startup based in Los Angeles. Our investors have backed many successful startups such as Twitter, Tumblr,  and Pinterest.'
  },
];

export const ROADMAP_ITEMS: RoadmapItem[] = [
  {
    id: 1,
    heading: 'Q2 2022',
    items: [ 'Announcement Trailer', 'Founders NFT Collection' ],
    active: true
  },
  {
    id: 2,
    heading: 'Q3 2022',
    items: [ 'Native Token & Staking Rewards', 'Land Sale' ],
  },
  {
    id: 3,
    heading: 'Q4 2022',
    items: [ 'Early Access Preview', 'HELIX Exchange Launch' ],
  },
  {
    id: 4,
    heading: 'Q1 2023',
    items: [ 'Public Beta Access', 'Community Treasury Launch' ]
  }
];

export const NFT_ROADMAP_ITEMS: RoadmapItem[] = [
  {
    id: 1,
    heading: 'DEC 30',
    description: 'Private Sale',
    active: true
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
  }
];

export const NAV_ITEMS: NavItem[] = [
  {
    path: ExternalUrl.wiki,
    label: 'Whitepaper',
    target: '_blank'
  },
  {
    path: '#roadmap',
    label: 'Roadmap',
  },
  {
    path: '#founders-nft',
    label: 'Founders NFT',
  },
  {
    path: '#faq',
    label: 'FAQ',
  }
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
    label: 'Timeline'
  },
  {
    path: '#faq',
    label: 'FAQ',
  }
];