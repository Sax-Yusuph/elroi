import React from 'react';
import { StyleProp } from 'react-native';
import FastImage, { ResizeMode, Source, ImageStyle } from 'react-native-fast-image';

type Props = { source: Source | number; style?: StyleProp<ImageStyle>; resizeMode?: ResizeMode };

const CustomImage = ({ source, style }: Props) => (
  <FastImage {...{ source, style }} resizeMode={FastImage.resizeMode.contain} />
);

export default CustomImage;
