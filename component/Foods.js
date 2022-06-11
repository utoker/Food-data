import {
  chakra,
  Box,
  Flex,
  Link,
  SimpleGrid,
  useColorModeValue,
} from '@chakra-ui/react';
import NextLink from 'next/link';

const Foods = ({ foods }) =>
  foods !== [] ? (
    <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 'auto' }}>
      {foods.map((food, index) => {
        return (
          <Box key={index}>
            <NextLink href={`/${food.fdcId}`} passHref>
              <Link>
                <Flex
                  p={50}
                  w="full"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Box
                    w="md"
                    mx="auto"
                    py={4}
                    px={8}
                    bg={useColorModeValue('#F9FAFB', 'gray.600')}
                    shadow="lg"
                    rounded="lg"
                  >
                    <chakra.h2
                      color={useColorModeValue('gray.800', 'white')}
                      fontSize={{ base: '2xl', md: '3xl' }}
                      mt={{ base: 2, md: 0 }}
                      fontWeight="bold"
                    >
                      {food.description}
                    </chakra.h2>

                    <chakra.p
                      mt={2}
                      color={useColorModeValue('gray.600', 'gray.200')}
                    >
                      {food.additionalDescriptions}
                    </chakra.p>
                    <Flex justifyContent="end" mt={4}>
                      <chakra.p
                        mt={2}
                        color={useColorModeValue('gray.600', 'gray.200')}
                      >
                        {food.foodCategory}
                      </chakra.p>
                    </Flex>
                  </Box>
                </Flex>
              </Link>
            </NextLink>
          </Box>
        );
      })}
    </SimpleGrid>
  ) : (
    <chakra.h2>not found</chakra.h2>
  );

export default Foods;
