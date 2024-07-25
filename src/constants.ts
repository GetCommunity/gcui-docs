// ------------------------------------------------------------
// GCUI Theme

export const defaultColors = [
  'default',
  'info',
  'error',
  'warning',
  'success',
  'light',
  'dark',
];

export const defaultStyleTypes = ['fill', 'outline'];

export const defaultSizes = ['default', 'small', 'medium', 'large'];

export const defaultCurves = ['default', 'small', 'medium', 'large', 'full', 'none'];

export const defaultOrientations = ['horizontal', 'vertical'];

// ------------------------------------------------------------
// Colors

export type ColorBlock = {
  bg: string;
  text: string;
  label?: string;
};

export type ColorKey = {
  [key: string]: ColorBlock[];
};

export const clientColorsKey: ColorKey = {
  getcommunity: [
    { bg: 'bg-getcommunity-red', text: 'text-white', label: '#E16740' },
    { bg: 'bg-getcommunity-orange', text: 'text-white', label: '#EF9E27' },
    { bg: 'bg-getcommunity-yellow', text: 'text-gray-700', label: '#FED041' },
    { bg: 'bg-getcommunity-green', text: 'text-white', label: '#8E9A39' },
    { bg: 'bg-getcommunity-blue-light', text: 'text-gray-800', label: '#ABDBD8' },
    { bg: 'bg-getcommunity-blue-dark', text: 'text-white', label: '#28829E' },
    { bg: 'bg-getcommunity-brown-light', text: 'text-white', label: '#C7B088' },
    { bg: 'bg-getcommunity-brown-dark', text: 'text-white', label: '#725846' },
  ],
  biasc: [
    { bg: 'bg-biasc-blue', text: 'text-white', label: '#003C7C' },
    { bg: 'bg-biasc-gray', text: 'text-white', label: '#BAD40F' },
    { bg: 'bg-biasc-gold', text: 'text-white', label: '#F6A81C' },
  ],
  brandywine: [
    { bg: 'bg-brandywine-primary-blue', text: 'text-white', label: '#003C7C' },
    { bg: 'bg-brandywine-primary-green', text: 'text-white', label: '#BAD40F' },
    { bg: 'bg-brandywine-primary-orange', text: 'text-white', label: '#F6A81C' },
    { bg: 'bg-brandywine-primary-skyblue', text: 'text-white', label: '#2CB0C8' },
    { bg: 'bg-brandywine-primary-purple', text: 'text-white', label: '#571670' },
  ],
  olsonhomes: [
    { bg: 'bg-olsonhomes-primary-blue', text: 'text-white', label: '#00558F' },
    { bg: 'bg-olsonhomes-primary-gray', text: 'text-white', label: '#424243' },
    { bg: 'bg-olsonhomes-secondary-blue', text: 'text-white', label: '#00558F' },
    { bg: 'bg-olsonhomes-secondary-orange', text: 'text-white', label: '#424243' },
    { bg: 'bg-olsonhomes-secondary-blue-sky', text: 'text-white', label: '#60CCE5' },
    { bg: 'bg-olsonhomes-secondary-blue-dark', text: 'text-white', label: '#05314A' },
    { bg: 'bg-olsonhomes-secondary-teal', text: 'text-white', label: '#31B991' },
  ],
  pacificcommunities: [
    {
      bg: 'bg-pacificcommunities-primary-blue-light',
      text: 'text-white',
      label: '#043E70',
    },
    {
      bg: 'bg-pacificcommunities-primary-blue-dark',
      text: 'text-white',
      label: '#021E46',
    },
    { bg: 'bg-pacificcommunities-primary-gray', text: 'text-white', label: '#54595F' },
    {
      bg: 'bg-pacificcommunities-secondary-yellow',
      text: 'text-gray-900',
      label: '#F7DF4B',
    },
    {
      bg: 'bg-pacificcommunities-secondary-green',
      text: 'text-white',
      label: '#009639',
    },
    {
      bg: 'bg-pacificcommunities-secondary-magenta',
      text: 'text-white',
      label: '#9AACA0',
    },
    { bg: 'bg-pacificcommunities-secondary-red', text: 'text-white', label: '#FFB81C' },
    {
      bg: 'bg-pacificcommunities-secondary-orange',
      text: 'text-white',
      label: '#FF9A32',
    },
  ],
  sheahomes: [
    { bg: 'bg-sheahomes-primary-blue', text: 'text-white', label: '#41748D' },
    { bg: 'bg-sheahomes-primary-khaki', text: 'text-white', label: '#ACA39A' },
    { bg: 'bg-sheahomes-primary-gray', text: 'text-white', label: '#97999B' },
    { bg: 'bg-sheahomes-secondary-gray-dark', text: 'text-white', label: '#3F4444' },
    { bg: 'bg-sheahomes-secondary-teal', text: 'text-white', label: '#00AEC7' },
    { bg: 'bg-sheahomes-secondary-green', text: 'text-white', label: '#009639' },
    { bg: 'bg-sheahomes-secondary-olive', text: 'text-white', label: '#92ACA0' },
    { bg: 'bg-sheahomes-secondary-yellow', text: 'text-white', label: '#FFB81C' },
    { bg: 'bg-sheahomes-secondary-orange', text: 'text-white', label: '#FF9A32' },
    {
      bg: 'bg-sheahomes-secondary-gray-light',
      text: 'text-gray-800',
      label: '#D9E1E2',
    },
  ],
  tollbrothers: [
    { bg: 'bg-tollbrothers-primary-blue-dark', text: 'text-white', label: '#0C223F' },
    { bg: 'bg-tollbrothers-primary-blue-light', text: 'text-white', label: '#004876' },
    { bg: 'bg-tollbrothers-primary-white', text: 'text-gray-700', label: '#FFFFFF' },
    { bg: 'bg-tollbrothers-primary-tan', text: 'text-gray-900', label: '#E5E1DB' },
    { bg: 'bg-tollbrothers-accent-blue', text: 'text-white', label: '#0070CD' },
    { bg: 'bg-tollbrothers-accent-tan', text: 'text-white', label: '#696057' },
    { bg: 'bg-tollbrothers-accent-magenta', text: 'text-white', label: '#E5E1DB' },
  ],
  trumark: [
    { bg: 'bg-trumark-primary-blue', text: 'text-white', label: '#00515F' },
    { bg: 'bg-trumark-primary-orange', text: 'text-white', label: '#EA7600' },
    { bg: 'bg-trumark-primary-teal', text: 'text-white', label: '#00938F' },
    { bg: 'bg-trumark-primary-white', text: 'text-gray-700', label: '#FFFFFF' },
    { bg: 'bg-trumark-secondary-gray-blue', text: 'text-white', label: '#557B85' },
    { bg: 'bg-trumark-secondary-cream', text: 'text-gray-800', label: '#EFEFF0' },
    { bg: 'bg-trumark-secondary-yellow', text: 'text-gray-900', label: '#E5C91A' },
    { bg: 'bg-trumark-secondary-gray-dark', text: 'text-white', label: '#576670' },
  ],
  vandaele: [
    { bg: 'bg-vandaele-primary-green', text: 'text-white', label: '#91A01D' },
    { bg: 'bg-vandaele-primary-gray', text: 'text-white', label: '#455565' },
    { bg: 'bg-vandaele-accent-green-dark', text: 'text-white', label: '#ADB857' },
    { bg: 'bg-vandaele-accent-green-mid', text: 'text-gray-700', label: '#C7CF8F' },
    { bg: 'bg-vandaele-accent-green-light', text: 'text-gray-900', label: '#E3E8C7' },
    { bg: 'bg-vandaele-accent-gray-dark', text: 'text-white', label: '#6B737D' },
    { bg: 'bg-vandaele-accent-gray-mid', text: 'text-white', label: '#9EA3A6' },
    { bg: 'bg-vandaele-accent-gray-light', text: 'text-gray-800', label: '#D1D1D4' },
  ],
  wpg: [
    { bg: 'bg-wpg-gray', text: 'text-white', label: '#7B7778' },
    { bg: 'bg-wpg-teal', text: 'text-white', label: '#6FA5A8' },
    { bg: 'bg-wpg-orange', text: 'text-white', label: '#CC612B' },
    { bg: 'bg-wpg-tan-dark', text: 'text-white', label: '#A39383' },
    { bg: 'bg-wpg-tan-light', text: 'text-gray-800', label: '#D4CCC5' },
  ],
};

// ------------------------------------------------------------
// Fonts

export type FontFamilyOpt = {
  type: 'primary' | 'secondary';
  className: string;
  name: string;
  src: Promise<any>;
  srcvar?: Promise<any>;
};

export type FontFamilyKey = {
  [key: string]: FontFamilyOpt[];
};

export const fontFamilies: FontFamilyKey = {
  getcommunity: [
    {
      name: 'Noto Sans',
      type: 'primary',
      className: 'font-gc-primary',
      src: import('@getcommunity/client-styleguides/fonts/NotoSans/noto-sans.css'),
      srcvar: import(
        '@getcommunity/client-styleguides/fonts/NotoSans/noto-sans-variable.css'
      ),
    },
  ],
  biasc: [
    {
      type: 'primary',
      className: 'font-biasc-primary',
      name: 'Proxima Nova',
      src: import(
        '@getcommunity/client-styleguides/fonts/ProximaNova/proxima-nova.css'
      ),
    },
    {
      type: 'secondary',
      className: 'font-biasc-secondary',
      name: 'Oswald',
      src: import('@getcommunity/client-styleguides/fonts/Oswald/oswald.css'),
      srcvar: import(
        '@getcommunity/client-styleguides/fonts/Oswald/oswald-variable.css'
      ),
    },
  ],
  brandywine: [
    {
      type: 'primary',
      className: 'font-brandywine-primary',
      name: 'Proxima Nova',
      src: import(
        '@getcommunity/client-styleguides/fonts/ProximaNova/proxima-nova.css'
      ),
    },
    {
      type: 'secondary',
      className: 'font-brandywine-secondary',
      name: 'Oswald',
      src: import('@getcommunity/client-styleguides/fonts/Oswald/oswald.css'),
      srcvar: import(
        '@getcommunity/client-styleguides/fonts/Oswald/oswald-variable.css'
      ),
    },
  ],
  olsonhomes: [
    {
      type: 'primary',
      className: 'font-olsonhomes-primary',
      name: 'Gotham',
      src: import('@getcommunity/client-styleguides/fonts/Gotham/gotham.css'),
    },
    {
      type: 'secondary',
      className: 'font-olsonhomes-secondary',
      name: 'Gladiola',
      src: import('@getcommunity/client-styleguides/fonts/Gladiola/gladiola.css'),
    },
  ],
  pacificcommunities: [
    {
      type: 'primary',
      className: 'font-pacificcommunities-primary',
      name: 'Roboto',
      src: import('@getcommunity/client-styleguides/fonts/Roboto/roboto.css'),
    },
    {
      type: 'secondary',
      className: 'font-pacificcommunities-secondary',
      name: 'IBM Plex Serif',
      src: import(
        '@getcommunity/client-styleguides/fonts/IBMPlexSerif/ibm-plex-serif.css'
      ),
    },
  ],
  sheahomes: [
    {
      type: 'primary',
      className: 'font-sheahomes-primary',
      name: 'Gotham',
      src: import('@getcommunity/client-styleguides/fonts/Gotham/gotham.css'),
    },
  ],
  tollbrothers: [
    {
      type: 'primary',
      className: 'font-tollbrothers-primary',
      name: 'DM Serif Display',
      src: import(
        '@getcommunity/client-styleguides/fonts/DMSerifDisplay/dm-serif-display.css'
      ),
    },
    {
      type: 'secondary',
      className: 'font-tollbrothers-secondary',
      name: 'Gotham',
      src: import('@getcommunity/client-styleguides/fonts/Gotham/gotham.css'),
    },
  ],
  trumark: [
    {
      type: 'primary',
      className: 'font-trumark-primary',
      name: 'Montserrat',
      src: import('@getcommunity/client-styleguides/fonts/Montserrat/montserrat.css'),
      srcvar: import(
        '@getcommunity/client-styleguides/fonts/Montserrat/montserrat-variable.css'
      ),
    },
    {
      type: 'primary',
      className: 'font-trumark-secondary',
      name: 'Raleway',
      src: import('@getcommunity/client-styleguides/fonts/Raleway/raleway.css'),
      srcvar: import(
        '@getcommunity/client-styleguides/fonts/Raleway/raleway-variable.css'
      ),
    },
  ],
  vandaele: [
    {
      type: 'primary',
      className: 'font-vandaele-primary',
      name: 'Gotham',
      src: import('@getcommunity/client-styleguides/fonts/Gotham/gotham.css'),
    },
  ],
  wpg: [
    {
      type: 'primary',
      className: 'font-wpg-primary',
      name: 'Helvetica',
      src: import('@getcommunity/client-styleguides/fonts/Helvetica/helvetica.css'),
    },
    {
      type: 'secondary',
      className: 'font-wpg-secondary',
      name: 'Optima',
      src: import('@getcommunity/client-styleguides/fonts/Optima/optima.css'),
    },
  ],
};
