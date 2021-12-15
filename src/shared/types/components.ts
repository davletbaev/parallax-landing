export type FaqQuestion = {
  heading: string,
  text: string,
  link?: never
} | {
  heading: string,
  text?: never,
  link: string
}