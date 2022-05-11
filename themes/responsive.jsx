/**
 * @copyright Copyright 2020 Corretto, Inc. All rights reserved.
 */

const deviceSize = {
  xs: 576,
  sm: 768,
  md: 992,
  lg: 1200,
  xl: 1600,
};

const responsive = (size) => {
  return `@media (max-width: ${deviceSize[size] - 1}px)`;
};

export default responsive;
