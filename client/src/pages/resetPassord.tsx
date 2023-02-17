//https://api.themoviedb.org/3/movie/popular?api_key=6cc1df6659017d51dec12febc2690279&language=en-US&page=1

import {
    Flex,
    Heading,
    Input,
    Button,
    InputGroup,
    Stack,
    InputLeftElement,
    chakra,
    Box,
    Text,
    FormControl,
    Link} from "@chakra-ui/react";
import { FaUserAlt } from "react-icons/fa";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { Link as L } from "react-router-dom";

const CFaUserAlt = chakra(FaUserAlt);
const CFaBack = chakra(AiOutlineArrowLeft);

const ResetPassword = (props: any) => {

    return (
        <Flex
            flexDirection="column"
            width="100wh"
            height="100vh"
            backgroundColor="gray.200"
            justifyContent="center"
            alignItems="center"
        >
            <Stack
                flexDir="column"
                mb="2"
                justifyContent="center"
                alignItems="center"
            >
                <Box minW={{ base: "90%", md: "468px" }}>
                    <form>
                        <Stack
                            spacing={4}
                            p="1rem"
                            backgroundColor="whiteAlpha.900"
                            boxShadow="md"
                        >
                            <FormControl>
                                <InputGroup>
                                    <InputLeftElement
                                        pointerEvents="none"
                                        children={<CFaUserAlt color="gray.300" />}
                                    />
                                    <Input type="email" placeholder="email address"
                                    />
                                </InputGroup>
                            </FormControl>
                            <FormControl>
                                <InputGroup>
                                    <InputLeftElement
                                        pointerEvents="none"
                                        children={<CFaUserAlt color="gray.300" />}
                                    />
                                    <Input type="password" placeholder="new password"
                                    />
                                </InputGroup>
                            </FormControl>
                            <FormControl>
                                <InputGroup>
                                    <InputLeftElement
                                        pointerEvents="none"
                                        children={<CFaUserAlt color="gray.300" />}
                                    />
                                    <Input type="password" placeholder="confirm new password"
                                    />
                                </InputGroup>
                            </FormControl>
                            <Button
                                borderRadius={0}
                                type="submit"
                                variant="solid"
                                colorScheme="teal"
                                width="full"
                            >
                                Save password
                            </Button>
                        </Stack>
                    </form>
                </Box>
            </Stack>
            <Box>
                <Link color="teal.500">
                    
                    <CFaBack  color='gray.300'/>
                    <L to="/login">
                        Back to login
                    </L>
                </Link>
            </Box>
        </Flex>
    );
};


export default ResetPassword;
