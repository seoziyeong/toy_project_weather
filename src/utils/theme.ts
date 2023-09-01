const deviceSizes = {
  mobile: "320px",
  tablet: "1024px",
  desktop: "1200px",
};

const device = {
  mobile: `screen and (min-width: ${deviceSizes.mobile})`,
  tablet: `screen and (min-width: ${deviceSizes.tablet})`,
  desktop: `screen and (min-width: ${deviceSizes.desktop})`,
};

const theme = {
  device,
};

export default theme;
