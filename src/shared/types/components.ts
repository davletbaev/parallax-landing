export type FaqQuestion = {
  heading: string,
  text: string,
  link?: never
} | {
  heading: string,
  text?: never,
  link: string
}

export type RoadmapItem = {
  id: number,
  heading?: string,
  description?: string,
  items?: string[],
  active?: boolean
}

export type NavItem = {
  path: string,
  label: string, 
  target?: '_blank' | '_top'
}