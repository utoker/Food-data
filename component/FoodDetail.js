import {
  chakra,
  Box,
  Flex,
  useColorModeValue,
  Text,
  Heading,
  Spinner,
  Table,
  TableCaption,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  TableContainer,
  Link,
  Stack,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import DarkModeSwitch from './DarkModeSwitch';

const FoodDetail = ({ foodCategory, title, loading, error, nuts, desc }) => {
  return (
    <Flex
      bg={useColorModeValue('white', 'gray.800')}
      w="full"
      alignItems="center"
      justifyContent="center"
    >
      {loading ? (
        <Spinner size="xl" />
      ) : (
        <Stack
          direction={{ base: 'column' }}
          w="full"
          bg={useColorModeValue('#F9FAFB', 'gray.600')}
          shadow="lg"
          mx="auto"
          p={2}
          rounded="lg"
          maxW="2xl"
        >
          <Flex justifyContent="space-between" alignItems="center" mb={10}>
            <NextLink href="/" passHref>
              <Link
                px={3}
                py={2}
                bg={useColorModeValue('gray.600', 'gray.400')}
                color={useColorModeValue('gray.100', 'gray.800')}
                fontSize="sm"
                fontWeight="700"
                rounded="md"
                _hover={{ bg: 'gray.500' }}
              >
                Home
              </Link>
            </NextLink>
            <DarkModeSwitch />
          </Flex>
          <Flex justifyContent="space-between" alignItems="center">
            <chakra.span
              fontSize="sm"
              color={useColorModeValue('gray.600', 'gray.400')}
            >
              100g portion
            </chakra.span>
            <Text
              px={3}
              py={1}
              color={useColorModeValue('gray.600', 'gray.400')}
              fontSize="sm"
              fontWeight="700"
            >
              {foodCategory}
            </Text>
          </Flex>

          <Box mt={2}>
            <Heading
              as="h1"
              size="2xl"
              color={useColorModeValue('gray.700', 'white')}
              fontWeight="700"
            >
              {error && 'Something went wrong'}
              {!error && !loading && title}
            </Heading>
            <Heading
              mt={4}
              mb={4}
              as="h2"
              size="md"
              color={useColorModeValue('gray.700', 'white')}
              fontWeight="700"
            >
              {!error && !loading && desc}
            </Heading>
            <TableContainer>
              <Table
                variant="striped"
                colorScheme="teal"
                size={{ base: 'sm', md: 'md' }}
              >
                <TableCaption>
                  USDA FoodData Central Search Results
                </TableCaption>
                <Thead>
                  <Tr>
                    <Th>Nutrient</Th>
                    <Th isNumeric>Amount</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>{nuts && nuts[3].nutrient.name}</Td>
                    <Td isNumeric>
                      {nuts && nuts[3].amount}
                      {nuts && nuts[3].nutrient.unitName}
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>{nuts && nuts[4].nutrient.name}</Td>
                    <Td isNumeric>
                      {nuts && nuts[4].amount}
                      {nuts && nuts[4].nutrient.unitName}
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>{nuts && nuts[6].nutrient.name}</Td>
                    <Td isNumeric>
                      {nuts && nuts[6].amount}
                      {nuts && nuts[6].nutrient.unitName}
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>{nuts && nuts[7].nutrient.name}</Td>
                    <Td isNumeric>
                      {nuts && nuts[7].amount}
                      {nuts && nuts[7].nutrient.unitName}
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>{nuts && nuts[8].nutrient.name}</Td>
                    <Td isNumeric>
                      {nuts && nuts[8].amount}
                      {nuts && nuts[8].nutrient.unitName}
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>{nuts && nuts[15].nutrient.name}</Td>
                    <Td isNumeric>
                      {nuts && nuts[15].amount}
                      {nuts && nuts[15].nutrient.unitName}
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>{nuts && nuts[44].nutrient.name}</Td>
                    <Td isNumeric>
                      {nuts && nuts[44].amount}
                      {nuts && nuts[44].nutrient.unitName}
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>{nuts && nuts[53].nutrient.name}</Td>
                    <Td isNumeric>
                      {nuts && nuts[53].amount}
                      {nuts && nuts[53].nutrient.unitName}
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>{nuts && nuts[58].nutrient.name}</Td>
                    <Td isNumeric>
                      {nuts && nuts[58].amount}
                      {nuts && nuts[58].nutrient.unitName}
                    </Td>
                  </Tr>
                  <Tr>
                    <Td>{nuts && nuts[66].nutrient.name}</Td>
                    <Td isNumeric>
                      {nuts && nuts[66].amount}
                      {nuts && nuts[66].nutrient.unitName}
                    </Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
          </Box>
        </Stack>
      )}
    </Flex>
  );
};

export default FoodDetail;
