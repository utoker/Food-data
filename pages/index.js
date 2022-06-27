/* eslint-disable no-undef */
/* eslint-disable react/no-children-prop */
import {
  Box,
  Button,
  chakra,
  Flex,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  Spacer,
  useColorModeValue,
} from '@chakra-ui/react';
import axios from '../component/Axios';
import { useState } from 'react';
import DarkModeSwitch from '../component/DarkModeSwitch';
import Foods from '../component/Foods';
import { Search2Icon } from '@chakra-ui/icons';

export default function Home() {
  const [data, setData] = useState([]);
  const [foods, setFoods] = useState([]);
  const [input, setInput] = useState('');
  const getInput = (e) => {
    setInput(e.target.value);
  };

  const getFood = async () => {
    const apiKey = process.env.NEXT_PUBLIC_KEY;
    const url = `/foods/search?api_key=${apiKey}&query=${input}&dataType=Survey (FNDDS)&pageSize=12`;
    try {
      const res = await axios.get(url);
      setData(res.data);
      setFoods(res.data.foods);
    } catch (err) {
      setData(err.message);
    }
  };
  const enterSearch = (e) => {
    if (e.key === 'Enter') {
      getFood();
    }
  };
  return (
    <Flex
      // bg={useColorModeValue('#F9FAFB', 'gray.600')}
      w="full"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        p={4}
        mx="auto"
        bg={useColorModeValue('white', 'gray.800')}
        shadow="xl"
      >
        <Flex justifyContent="space-between" alignItems="center" mb={20}>
          <Spacer />
          <DarkModeSwitch />
        </Flex>
        <Flex alignItems="center" justifyContent="center" flexDir="column">
          <Box textAlign="center">
            <Heading
              as="h1"
              mt={2}
              fontSize={{ base: '3xl', sm: '4xl' }}
              lineHeight="8"
              fontWeight="extrabold"
              letterSpacing="tight"
              color={useColorModeValue('gray.900')}
            >
              FoodData App
            </Heading>
            <chakra.p
              mt={4}
              maxW="2xl"
              fontSize="xl"
              mx={{ lg: 'auto' }}
              color={useColorModeValue('gray.500', 'gray.400')}
            >
              Search Foods in USDA FoodData Central
            </chakra.p>
          </Box>
          <Box>
            <InputGroup size="md" mt={4}>
              <Input
                pr="4.5rem"
                placeholder="enter food"
                onChange={getInput}
                onKeyDown={enterSearch}
              />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={getFood}>
                  <Icon as={Search2Icon}></Icon>
                </Button>
              </InputRightElement>
            </InputGroup>
          </Box>
          {data &&
            (data.totalHits === 0 ? (
              <Heading
                as="h2"
                mt={6}
                fontSize={{ base: '3xl', sm: '4xl' }}
                lineHeight="8"
                fontWeight="extrabold"
                letterSpacing="tight"
                color={useColorModeValue('gray.900')}
              >
                Not Found
              </Heading>
            ) : (
              <Foods foods={foods} />
            ))}
        </Flex>
      </Box>
    </Flex>
  );
}
