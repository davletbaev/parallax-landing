import { HTMLMotionProps } from 'framer-motion';

export type SectionProps = HTMLMotionProps<'section'> & {
  id: string;
}