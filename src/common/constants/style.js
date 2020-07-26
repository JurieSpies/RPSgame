import { PixelRatio, Dimensions, Platform } from 'react-native';

export const { width } = Dimensions.get('window');
export const { height } = Dimensions.get('window');
export const pixelRatio = PixelRatio.get();

const bW = 375;
const bH = 670;

export const scale = (sI) => {
  const ss = (width / bW) * sI;
  return ss;
};

export const verticalScale = (sI) => {
  const vS = (height / bH) * sI;
  return vS;
};

export const isIphoneX = () => {
  const dim = Dimensions.get('window');

  return (
    // This has to be iOS
    Platform.OS === 'ios' &&
    // Check either, iPhone X or XR
    (isIPhoneXSize(dim) || isIPhoneXrSize(dim))
  );
};

const isIPhoneXSize = (dim) => dim.height === 812 || dim.width === 812;

const isIPhoneXrSize = (dim) => dim.height === 896 || dim.width === 896;

export const normalizeFont = (size) => {
  if (pixelRatio >= 2 && pixelRatio < 3) {
    // iphone 5s and older Androids
    if (width < 360) {
      return size * 0.95;
    }

    // iphone 5
    if (height < 667) {
      return size;
      // iphone 6-6s
    }

    if (height >= 667 && height <= 735) {
      return size * 1.15;
    }
    // older phablets
    return size * 1.25;
  }

  if (pixelRatio >= 3 && pixelRatio < 3.5) {
    // catch Android font scaling on small machines
    // where pixel ratio / font scale ratio => 3:3
    if (width <= 360) {
      return size;
    }

    // Catch other weird android width sizings
    if (height < 667) {
      return size * 1.15;
      // catch in-between size Androids and scale font up
      // a tad but not too much
    }

    if (height >= 667 && height <= 735) {
      return size * 1.2;
    }

    // catch larger devices
    // ie iphone 6s plus / 7 plus / mi note 等等
    return size * 1.27;
  }

  if (pixelRatio >= 3.5) {
    // catch Android font scaling on small machines
    // where pixel ratio / font scale ratio => 3:3
    if (width <= 360) {
      return size;
      // smaller android height sizings
    }

    if (height < 667) {
      return size * 1.2;
      // in-between size Androids and scale font up
      // a tad but not too much
    }

    if (height >= 667 && height <= 735) {
      return size * 1.25;
    }

    // phablet devices
    return size * 1.4;
  }

  return size;
};
