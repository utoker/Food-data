import { Box, Container } from '@chakra-ui/react';
import Head from 'next/head';

const Layout = ({ children }) => {
  return (
    <Box>
      <Container>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta
            name="description"
            content="A web app provides the nutrient profile of the requested food"
          />
          <meta name="author" content="Umut Toker" />
          <meta name="author" content="suxlike" />
          {/* <link rel="apple-touch-icon" href="apple-touch-icon.png" /> */}
          <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
          <meta name="twitter:title" content="Umut Toker" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@utoker0" />
          <meta name="twitter:creator" content="@utoker0" />
          <meta property="og:site_name" content="FoodData App" />
          <meta name="og:title" content="Umut Toker" />
          <meta property="og:type" content="website" />
          <meta
            name="twitter:image"
            content="https://food-data-app.vercel.app/card.png"
          />
          <meta
            property="og:image"
            content="https://food-data-app.vercel.app/card.png"
          />
          <title>FoodData App</title>
        </Head>
      </Container>
      {children}
    </Box>
  );
};

export default Layout;
