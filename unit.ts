export type ResponsiveSize = {
  xs?: number;
  md?: number;
  lg?: number;
  xl?: number;
  xxl?: number;
};

function unit(size: number): ResponsiveSize {
  return getSize(size / 8);
}

unit.text = function (size: number): ResponsiveSize {
  let xsRatio = 0.7;
  let lgRatio = 0.85;
  let xlRatio = 0.9;
  return getSize(size, xsRatio, lgRatio, xlRatio);
};

unit.dim = function (size: number): ResponsiveSize {
  return getSize(size);
};

unit.scale = function (ratio: ResponsiveSize = {}) {
  return {
    transform: {
      xs: `scale(${ratio?.xs || 0.7})`,
      lg: `scale(${ratio?.lg || 0.8})`,
      xl: `scale(${ratio?.xl || 0.9})`,
      xxl: `scale(${ratio?.xxl || 1})`,
    },
  };
};

function getSize(
  size: number,
  xsRatio: number = 0.54,
  lgRatio: number = 0.72,
  xlRatio: number = 0.85
): ResponsiveSize {
  let xs = size * xsRatio;
  let lg = size * lgRatio;
  let xl = size * xlRatio;
  let rSize = { xs, lg, xl, xxl: size };
  return rSize;
}

export default unit;
