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

export const SCROLL_HEIGHT = 15000;

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
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
  },
  {
    heading: 'When can I play?',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
  },
  {
    heading: 'What platforms or consoles will HELIX be available on?',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
  },
  {
    heading: 'Will there be VR support?',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
  },
  {
    heading: 'What is HELIX?',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
  },
  {
    heading: 'When can I play?',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
  },
  {
    heading: 'What platforms or consoles will HELIX be available on?',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
  },
  {
    heading: 'Will there be VR support?',
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
  },
];