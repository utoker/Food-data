import { Html, Head, Main, NextScript } from 'next/document';
import { GoogleFonts } from 'next-google-fonts';
import { ColorModeScript } from '@chakra-ui/react';
import theme from '../styles/theme';

export default function Document() {
  return (
    <Html>
      <GoogleFonts href="https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@300;700&display=swap" />
      <Head />
      <body>
        <Main lang="en" />
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <NextScript />
      </body>
    </Html>
  );
}
