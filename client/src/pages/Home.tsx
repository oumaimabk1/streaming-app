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
import jurassicpark from "../images/jurassicpark.jpg";
import office from "../images/office.jpg";
import starwars from "../images/starwars.jpg";
import streamy from "../images/streamy.png";


const Home = () => {
  return (
    <Flex
      flexDirection="column"
      minHeight="100vh"
      position="relative"
      bgColor="#1B202B"
      margin="0"
    >
      <Heading textAlign="left" size="3xl" margin="6" color="white">
        Welcome to Streamy, where there's a movie for every mood
      </Heading>
      <Text
        textAlign="left"
        color="white"
        margin="6"
        fontSize="sm"
        justifyItems="center"
      >
        Movies have the power of bringing people together, make them laugh,
        love, cry, … It's our pleasure to bring those movies to you!
      </Text>

      <Flex
        flexDirection="column"
        alignItems="center"
      >
        <Button borderRadius="0" marginTop="6" marginBottom="3" width="93%" colorScheme='teal'>Log in</Button>
        <Button borderRadius="0" marginTop="6" marginBottom="3" width="93%" color="#009594" colorScheme='black'>Sign up</Button>
      </Flex>

    <Center>
     <VStack margin="6">
      <HStack>
          <Heading size="2xl" textAlign="center" color="white" marginTop="3">4206</Heading>
          <Heading size="2xl" textAlign="center" color="teal" marginTop="3">   +</Heading>
        </HStack>
          <Text
            fontSize="xs"
            textAlign="left"
            color="white"
          >
            Movies you can enjoy <br></br> anytime, anywhere
          </Text>
      </VStack>

      <VStack margin="6">
      <HStack>
          <Heading size="2xl" textAlign="center" color="white" marginTop="6">1615</Heading>
          <Heading size="2xl" textAlign="center" color="teal" marginTop="6">   +</Heading>
        </HStack>
          <Text
            fontSize="xs"
            textAlign="center"
            color="white"
          >
            Critically acclaimed <br></br> directors and screenwriters
          </Text>
      </VStack>
    </Center>
      
      <Box color="white" position="absolute" bottom="0" width="100%" marginTop="6">
        <Footer companyName="Streamy" creators={["Oumaima", "Zineb", "Nico"]} />
      </Box>
    </Flex>
  );
};

export default Home;