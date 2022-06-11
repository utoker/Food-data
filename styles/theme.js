import { extendTheme } from '@chakra-ui/react';
import { theme as chakraTheme } from '@chakra-ui/react';
// import { createBreakpoints } from 'chakra-ui/theme-tools';

const fonts = {
  ...chakraTheme.fonts,
  body: `M PLUS Rounded 1c`,
  heading: `M PLUS Rounded 1c`,
};

const initialColor = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
};

const override = {
  ...chakraTheme,
  fonts,
  initialColor,
};

const customTheme = extendTheme(override);

export default customTheme;
