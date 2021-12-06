import ContactsSection from '@modules/ContactsSection';
import FaqSection from '@modules/FaqSection';
import FirstFeature from '@modules/FirstFeature';
import FourthFeature from '@modules/FourthFeature';
import GallerySection from '@modules/GallerySection';
import MainScreen from '@modules/MainScreen';
import RoadmapSection from '@modules/RoadmapSection';
import SecondFeature from '@modules/SecondFeature';
import ThirdFeature from '@modules/ThirdFeature';
import TrailerSection from '@modules/TrailerSection';

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
    id: 'founders-nft',
    component: GallerySection
  },
  {
    id: 'faq',
    component: FaqSection
  },
  {
    id: 'contacts',
    component: ContactsSection
  }
];