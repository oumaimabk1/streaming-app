import { Flex } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import Button from "../components/Button/Button";
import jurassicpark from "../images/jurassicpark.jpg";
import office from "../images/office.jpg";
import starwars from "../images/starwars.jpg";
import streamy from "../images/streamy.svg";

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
        
        <Image src="streamy.svg" alt="Streamy logo" h="2rem" />

        <Text>Welcome to</Text>
        <Heading>Streamy</Heading>
        <Text>Home of ALL the movies</Text>
        <br /><br />
        <Text>Welcome to Streamy, where you can discover and enjoy a wide range of movies and TV shows from around the world. With our easy-to-use interface and extensive library, you can dive into your favorite genres or explore new ones. From action-packed blockbusters to heartwarming dramas, we have something for everyone. And with new titles added regularly, you'll always have something new to watch. Sign up now and start streaming!</Text>
        
        <Flex justifyContent="center" marginTop="1rem">
          <Image src="starwars.jpg" alt="Star Wars" />
          <Image src="jurassicpark.jpg" alt="Jurassic Park" />
          <Image src="office.jpg" alt="The Office" />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Home;