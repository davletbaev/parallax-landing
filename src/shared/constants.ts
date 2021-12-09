import ContactsSection from '@modules/ContactsSection';
import FaqSection from '@modules/FaqSection';
import FaqMobile from '@modules/FaqSection/FaqMobile';
import FirstFeature from '@modules/FirstFeature';
import FourthFeature from '@modules/FourthFeature';
import GallerySection from '@modules/GallerySection';
import MainScreen from '@modules/MainScreen';
import RoadmapSection from '@modules/RoadmapSection';
import RoadmapMobile from '@modules/RoadmapSection/RoadmapMobile';
import SecondFeature from '@modules/SecondFeature';
import TeamSection from '@modules/TeamSection';
import ThirdFeature from '@modules/ThirdFeature';
import TrailerSection from '@modules/TrailerSection';

export enum Meta {
  title = 'HELIX',
  description = 'HELIX is an open-world NFT metaverse built on the foundation of persistent virtual worlds and true digital ownership.',
  url = 'https://helix.com',
  preview = './preview.jpg'
}

export enum ExternalUrl {
  wiki = 'https://wiki.helixmetaverse.com/',
  youtube = 'https://www.youtube.com/channel/UC5mNY3v-d8-I2Yaks-7W1Mw',
  discord = 'https://discord.gg/xGJEH69sWK',
  twitter = 'https://twitter.com/HELIX_Metaverse'
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
    url: '#'
  }
];

export const SCROLL_HEIGHT = 10000;

export const SECTIONS = [
  {
    id: 'main',
    component: MainScreen,
  },
  {
    id: 'trailer',
    component: TrailerSection,
  },
  {
    id: 'feature-1',
    component: FirstFeature
  },
  {
    id: 'feature-2',
    component: SecondFeature
  },
  {
    id: 'feature-3',
    component: ThirdFeature
  },
  {
    id: 'feature-4',
    component: FourthFeature
  },
  {
    id: 'roadmap',
    component: RoadmapSection
  },
  {
    id: 'roadmap-mobile',
    component: RoadmapMobile
  },
  {
    id: 'founders-nft',
    component: GallerySection
  },
  {
    id: 'team',
    component: TeamSection
  },
  {
    id: 'faq',
    component: FaqSection
  },
  {
    id: 'faq-mobile',
    component: FaqMobile
  },
  {
    id: 'contacts',
    component: ContactsSection
  }
];

export const FAQ_QUESTIONS = [
  {
    heading: 'What is HELIX?',
    text: 'HELIX is an open-world multiplayer online game where you can meet new people, buy and sell virtual items, and play games. '
  },
  {
    heading: 'When can I play HELIX?',
    text: 'We plan to release an early access build by Q2-Q3 of 2022, exclusively to Founders NFT holders. After that, we’ll gradually roll out access to more users.'
  },
  {
    heading: 'Who’s behind HELIX and how is development being funded?',
    text: 'HELIX is being developed by Hypersonic Laboratories, a venture-funded startup based in Los Angeles. Our investors have backed many successful startups such as Twitter, Tumblr,  and Pinterest.'
  },
  {
    heading: 'How does the play to earn model work? Where does this money come from?',
    text: 'When you buy virtual items in a traditional game such as Fortnite or Roblox, the company takes all the profit. In play to earn games like HELIX, the majority of the revenue goes to a nonprofit Community Treasury which distributes to players.. (NFT sales, item transaction fees)'
  },
  {
    heading: 'What blockchain does HELIX use?',
    text: 'HELIX uses Ethereum and Immutable X, a layer2 solution for faster and lower cost transactions.'
  },
  {
    heading: 'Will I be able to own and trade virtual land?',
    text: 'Yes. Freedom Island is a large island within the map which will be entirely constructed and governed by the community. Land owners can construct roads, buildings, parks, museums, anything.. More details will be announced soon.'
  },
  {
    heading: 'Will there be a native token/currency?',
    text: 'Yes, we’re currently in development and will announce details soon.'
  },
  {
    heading: 'What platforms or consoles will I be able to play on?',
    text: 'We plan to release for PC first, and PS4/5 and Xbox Series X/S in the coming months.'
  },
  {
    heading: 'Will there be VR support?',
    text: 'In the long-term, yes. Currently we’re focused on PC gameplay.'
  },
  {
    heading: 'Can I apply to join the team?',
    text: 'Absolutely, we’re always looking for exceptional talent. Check our open positions and apply here.'
  },
  {
    heading: 'What’s the point of vehicle ownership if I can just drive any car in the map?',
    text: 'You can only drive vehicles that you own. No one can come up and steal your car away from you.'
  },
];