declare module 'react-native-touchable-scale';

declare module '*.svg' {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
  // @ts-ignore
  export default content;
}

declare module '*.mp4' {
  const src: string;
  export default src;
}

declare module 'react-native-progress';
