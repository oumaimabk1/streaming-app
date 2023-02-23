import { Stack, HStack, VStack, useColorModeValue, Button, Heading, Center, Text, Box, Flex } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react'; // separate import statement for useEffect
import Footer from "../Footer/footer";


const Home = () => {
  
  const navigate= useNavigate()
  return (
    <Flex
      flexDirection="column"
      minHeight="100vh"
      position="relative"
      bg={useColorModeValue('white', 'gray.800')}
      margin="0"
    >
      <Stack
        flexDir="column"
        mb="2"
        justifyContent="center"
        alignItems="center"
        //backgroundColor={useColorModeValue("whiteAlpha.900", 'gray.800')}
        color={useColorModeValue('gray.800',"whiteAlpha.900")}
      >
        <Heading textAlign="left" size="3xl" margin="6">
          Welcome to Streamy, where there's a movie for every mood
        </Heading>
        <Text
          textAlign="left"
         
          margin="6"
          fontSize="sm"
          justifyItems="center"
        >
          Discover and enjoy endless movies and TV shows on Streamy! From blockbusters to dramas, we have something for every genre lover. Sign up now to start streaming.
        </Text>

        <Flex
          flexDirection="column"
          alignItems="center"
        >
          <Button borderRadius="0" marginTop="6" marginBottom="3" width="93%" colorScheme='teal' onClick={()=>navigate('/login')}>Log in</Button>
          <Button borderRadius="0" marginTop="6" marginBottom="3" width="93%" color="#009594" colorScheme='black'onClick={()=>navigate('/register')}>Sign up</Button>
        </Flex>

        <Center>
          <VStack margin="6">
            <HStack>
              <Heading size="2xl" textAlign="center" marginTop="3">4206</Heading>
              <Heading size="2xl" textAlign="center" color="teal" marginTop="3">   +</Heading>
            </HStack>
            <Text
              fontSize="xs"
              textAlign="left"
             
            >
              Movies you can enjoy <br></br> anytime, anywhere
            </Text>
          </VStack>

          <VStack margin="6">
            <HStack>
              <Heading size="2xl" textAlign="center" marginTop="6">1615</Heading>
              <Heading size="2xl" textAlign="center" color="teal" marginTop="6">   +</Heading>
            </HStack>
            <Text
              fontSize="xs"
              textAlign="center"
             
            >
              Critically acclaimed <br></br> directors and screenwriters
            </Text>
          </VStack>
        </Center>

        <Box position="absolute" bottom="0" width="100%" marginTop="6">
          <Footer companyName="Streamy" creators={["Oumaima", "Zineb", "Nico"]} />
        </Box>
      </Stack>
    </Flex>
  );
};

export default Home;