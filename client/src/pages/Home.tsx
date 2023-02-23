import { Flex } from "@chakra-ui/react";
import { Box } from '@chakra-ui/react'
import { Container } from '@chakra-ui/react'
import { Text } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { Button, ButtonGroup } from '@chakra-ui/react';
import { Center, Square, Circle } from '@chakra-ui/react';
import { Stack, HStack, VStack } from '@chakra-ui/react';
import Footer from "../Footer/footer";

const breakpoints = {
  sm: '30em',
  md: '48em',
  lg: '62em',
  xl: '80em',
}

const Home = () => {
  return (
    <Flex
      flexDirection="column"
      minHeight="100vh"
      position="relative"
      bgColor="#1B202B"
      margin="0"
    >
      <Heading textAlign="left" size="3xl" margin={{ base: '6', md: '9', lg: '8', xl: '8'}} color="white">
        Welcome to Streamy, where there's a movie for every mood
      </Heading>
      <Text
        textAlign="left"
        color="white"
        margin={{ base: '6', md: '9', lg: '10', xl: '10'}}
        fontSize={{ base: 'xs', md: 'sm', lg: 'l', xl: 'xl'}}
        justifyItems="center"
      >
        Discover and enjoy endless movies and TV shows on Streamy! From blockbusters to dramas, we have something for every genre lover. Sign up now to start streaming.
      </Text>

      <Flex
        flexDirection="column"
        alignItems="center"
      >
        <Button borderRadius="0" marginTop={{ base: '3', md: '9', lg: '9', xl: '9'}} marginBottom={{ base: '3', md: '6', lg: '9', xl: '10'}} width="93%" colorScheme='teal'>Log in</Button>
        <Button borderRadius="0" marginTop={{ base: '3', md: '6', lg: '9', xl: '9'}} marginBottom={{ base: '3', md: '9', lg: '9', xl: '10'}} width="93%" color="#009594" colorScheme='black'>Sign up</Button>
      </Flex>

    <Center>
     <VStack margin={{ base: '2', md: '6', lg: '9', xl: '9'}}>
      <HStack>
          <Heading size="2xl" textAlign="center" color="white" marginTop={{ base: '1', md: '5', lg: '9', xl: '10'}}>4206</Heading>
          <Heading size="2xl" textAlign="center" color="teal" marginTop={{ base: '1', md: '5', lg: '9', xl: '10'}}>   +</Heading>
        </HStack>
          <Text
            fontSize={{ base: 'xs', md: 'sm', lg: 'sm', xl: 'sm'}}
            textAlign="left"
            color="white"
          >
            Movies you can enjoy <br></br> anytime, anywhere
          </Text>
      </VStack>

      <VStack margin="6">
      <HStack>
          <Heading size="2xl" textAlign="center" color="white" marginTop={{ base: '1', md: '5', lg: '9', xl: '10'}}>1615</Heading>
          <Heading size="2xl" textAlign="center" color="teal" marginTop={{ base: '1', md: '5', lg: '9', xl: '10'}}>   +</Heading>
        </HStack>
          <Text
            fontSize={{ base: 'xs', md: 'sm', lg: 'sm', xl: 'sm'}}
            textAlign="center"
            color="white"
          >
            Critically acclaimed <br></br> directors and screenwriters
          </Text>
      </VStack>
    </Center>
      
      <Box color="white" position="absolute" bottom="0" width="100%" marginTop="3">
        <Footer companyName="Streamy" creators={["Oumaima", "Zineb", "Nico"]} />
      </Box>
    </Flex>
  );
};

export default Home;