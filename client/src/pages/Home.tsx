import { Flex } from "@chakra-ui/react";
import { Box } from '@chakra-ui/react'
import { Container } from '@chakra-ui/react'
import { Text } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import Button from "../components/Button/Button";
import Footer from "../Footer/footer";
import jurassicpark from "../images/jurassicpark.jpg";
import office from "../images/office.jpg";
import starwars from "../images/starwars.jpg";
import streamy from "../images/streamy.svg";


const Home = () => {
  return (
    <Flex
      flexDirection="column"
      minHeight="100vh"
      position="relative"
      bgColor="black"
    >
      <Heading textAlign="left" size="2xl" margin="4" color="white">
        Welcome to Streamy, where there's a movie for every mood
      </Heading>
      <Text
        textAlign="left"
        color="white"
        margin="4"
        fontSize="sm"
        justifyItems="flex-start"
      >
        Movies have the power of bringing people together, make them laugh,
        love, cry, … It's our pleasure to bring those movies to you!
      </Text>

      <Flex flexDirection="column">
        <Button btnText="Log in" />
        <Button btnText="Sign up" />
      </Flex>

      <Flex flexDirection="row" justifyItems="center">
        <Box>
          <Heading size="l" textAlign="center" color="white" margin="4" marginBottom="0">
            6150 +
          </Heading>
          <Text
            fontSize="xs"
            textAlign="left"
            color="white"
            marginLeft="4"
            marginTop="0"
          >
            Movies you can enjoy
          </Text>
        </Box>

        <Box>
          <Heading size="l" textAlign="center" color="white" margin="4" marginBottom="0">
            4206 +
          </Heading>
          <Text
            fontSize="xs"
            textAlign="left"
            color="white"
            marginLeft="4"
            marginTop="0"
          >
            Critically acclaimed directors and screenwriters
          </Text>
        </Box>
      </Flex>
      <Box color="white" position="absolute" bottom="0" width="100%">
        <Footer companyName="Streamy" creators={["Oumaima", "Zineb", "Nico"]} />
      </Box>
    </Flex>
  );
};

export default Home;
