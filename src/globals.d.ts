declare module '*.scss' {
  const content: {[className: string]: string};
  export = content;
}

declare module '*.jpg' {
  const value: string;
  export default value;
}

declare module '*.png' {
  const value: string;
  export default value;
}

declare module '*.webp' {
  const value: string;
  export default value;
}

declare module '*.avif' {
  const value: string;
  export default value;
}

declare module '*.webm' {
  const value: string;
  export default value;
}

declare module '*.mp4' {
  const value: string;
  export default value;
}

declare module '*.svg' {
  const value: string;
  export default value;
}

interface Window {
  ethereum: {
    isMetaMask: boolean,
    request: (config: {
      method: string
    }) => Promise<string[]>,
    on: (event: string, callback: () => void) => void
  },
  gtag: Function;
}
