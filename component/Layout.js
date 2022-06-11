import { Box, Container } from '@chakra-ui/react';
import Head from 'next/head';

const Layout = ({ children }) => {
  return (
    <Box>
      <Container>
        <Head>
          <title>Food App</title>
          <meta name="description" content="food app change later" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="author" content="Umut Toker" />
        </Head>
      </Container>
      {children}
    </Box>
  );
};

export default Layout;
