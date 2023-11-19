import {Dimensions, Platform, PixelRatio, StatusBar} from 'react-native';

export const {width: WINDOW_WIDTH, height: WINDOW_HEIGHT} =
  Dimensions.get('window');

const statusBarHeight = StatusBar?.currentHeight ? StatusBar.currentHeight : 0;

// based on iPhone 13 / 13 Pro scale
const wscale: number = WINDOW_WIDTH / 390;
// statusBarHeight is being added because we render our app under StatusBar
const hscale: number = (WINDOW_HEIGHT + statusBarHeight) / 844;

export default function normalize(
  size: number,
  based: 'width' | 'height' = 'width',
) {
  const newSize = based === 'height' ? size * hscale : size * wscale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
}

const nw = (width: number) => {
  return normalize(width);
};

const nh = (height: number) => {
  return normalize(height, 'height');
};

const snh = (height: number) => {
  return `${nh(height)}px`;
};

const snw = (width: number) => {
  return `${nw(width)}px`;
};

export {nw, nh, snw, snh};
