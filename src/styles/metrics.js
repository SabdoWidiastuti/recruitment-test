import { Dimensions, Platform, PixelRatio } from 'react-native';

const { width, height } = Dimensions.get('window');

const percentageCalculation = (max, val) => max * (val / 100);

const getWidthFromDP = widthPercentage => {
  const percentageDesired = parseFloat(widthPercentage);
  const widthPercentageToDP = PixelRatio.roundToNearestPixel(
    percentageCalculation(width, percentageDesired)
  );

  return widthPercentageToDP;
};

const getHeightFromDP = heightPercentage => {
  const percentageDesired = parseFloat(heightPercentage);
  const heightPercentageToDP = PixelRatio.roundToNearestPixel(
    percentageCalculation(height, percentageDesired)
  );

  return heightPercentageToDP;
};

const getResponsiveSize = val => {
  const percentageDesired = parseFloat(val);
  const widthDimension = height > width ? width : height;
  const aspectRatioBasedHeight = (16 / 9) * widthDimension;
  return percentageCalculation(
    Math.sqrt(
      Math.pow(aspectRatioBasedHeight, 2) + Math.pow(widthDimension, 2)
    ),
    percentageDesired
  );
};

export default {

  getWidthFromDP,
  getHeightFromDP,
  getResponsiveSize,

  width,
  height,
};
