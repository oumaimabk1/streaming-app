import { Flex } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import Button from "../components/Button/Button";

const Home = () => {
  return (
    <Flex
      flexDirection="row"
      width="100vw"
      height="100vh"
      backgroundColor="gray.200"
      alignItems="top right"
      justifyContent="flex-end"
      padding="1rem"
    >
      <Button btnText="Log in" />
      <Button btnText="Sign up" />
      <Flex
        flexDirection="column"
        width="100vw"
        backgroundColor="gray.200"
        justifyContent="center"
        padding="1rem"
      >
        <Text>Welcome to</Text>
        <Heading>Streamy</Heading>
        <Text>Home of ALL the movies</Text>
      </Flex>
      <Flex flexDirection="row">
        <Image src="starwars.jpg" alt="Star Wars" />
        <Image src="jurassicpark.jpg" alt="Jurassic Park" />
        <Image src="office.jpg" alt="The Office" />
      </Flex>
    </Flex>
  );
};

export default Home;
