import { Flex } from "@chakra-ui/react";
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
      flexDirection="row"
      width="100vw"
      height="100vh"
      backgroundColor="gray.200"
      alignItems="top right"
      justifyContent="flex-end"
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
        
        <Text mb="0">Welcome to</Text>

        <Image src={streamy} alt="Streamy logo" h="8rem" m="6"/>

        <Heading>Streamy</Heading>
        <br /><br />
        <Text>Home of ALL the movies</Text>
        <br /><br />
        <Text>Welcome to Streamy, where you can discover and enjoy all the movies and TV shows (and we really mean ALL of them) from around the world. With our easy-to-use interface and extensive library, you can dive into your favorite genres or explore new ones. From action-packed blockbusters to heartwarming dramas, we have something for everyone. And with new titles added regularly, you'll always have something new to watch. Sign up now and start streaming!</Text>
        
        <Flex justifyContent="center" marginTop="1rem">
          <Image src={starwars} alt="Star Wars" h="16rem" m="6"/>
          <Image src={jurassicpark} alt="Jurassic Park" h="16rem" m="6"/>
          <Image src={office} alt="The Office" h="16rem" m="6"/>
        </Flex>
        <Footer companyName="Streamy" creators={['Oumaima', 'Zineb', 'Nico']} />
      </Flex>
    </Flex>
  );
};

export default Home;